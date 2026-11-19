import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const VERT = /* glsl */ `
uniform float uTime;
uniform float uAmp;
uniform float uFreq;
varying float vNoise;
varying vec3 vNormal;

// Simplex noise (Ashima / McEwen)
vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

void main(){
  vNormal = normal;
  float n = snoise(position * uFreq + vec3(uTime * 0.35));
  vNoise = n;
  vec3 displaced = position + normal * n * uAmp;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}
`;

const FRAG = /* glsl */ `
uniform vec3 uColorA; // ember
uniform vec3 uColorB; // signal blue
uniform float uGlow;
varying float vNoise;
varying vec3 vNormal;
void main(){
  float t = smoothstep(-0.6, 0.8, vNoise);
  vec3 color = mix(uColorB, uColorA, t);
  float rim = pow(1.0 - abs(normalize(vNormal).z), 1.6);
  color += rim * uGlow * uColorA;
  gl_FragColor = vec4(color, 1.0);
}
`;

/**
 * Scroll-driven shader hero: a noise-displaced wireframe core with orbiting
 * points. Scroll progress (0→1 across the hero) drives displacement amplitude,
 * rotation and camera pull-back. Pointer adds subtle parallax.
 */
export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // probe WebGL support first — on failure the grid-texture poster is the static fallback
    const probe = document.createElement('canvas');
    if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 6);

    const uniforms = {
      uTime: { value: 0 },
      uAmp: { value: 0.2 },
      uFreq: { value: 0.85 },
      uGlow: { value: 0.9 },
      uColorA: { value: new THREE.Color('#ff8e4d') },
      uColorB: { value: new THREE.Color('#0099ff') },
    };

    // displaced wireframe core
    const geo = new THREE.IcosahedronGeometry(1.75, 32);
    const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms, wireframe: true, transparent: true, opacity: 0.7 });
    const core = new THREE.Mesh(geo, mat);
    scene.add(core);

    // orbiting point cloud — "satellites" of the core
    const COUNT = 900;
    const pos = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const r = 2.5 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pMat = new THREE.PointsMaterial({ color: new THREE.Color('#ff8e4d'), size: 0.02, transparent: true, opacity: 0.7, sizeAttenuation: true });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    const group = new THREE.Group();
    group.add(core, points);
    group.position.x = 0.9; // sit right of the headline on desktop
    scene.add(group);
    if (window.innerWidth < 768) {
      group.position.set(0, 0.9, 0);
      group.scale.setScalar(0.72);
    }

    // scroll progress across the hero (0 top → 1 hero fully passed)
    let progress = 0;
    let targetProgress = 0;
    const hero = mount.closest('section');
    const onScroll = () => {
      const h = hero ? hero.offsetHeight : window.innerHeight;
      targetProgress = Math.min(1, Math.max(0, window.scrollY / (h * 0.9)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // pointer parallax
    let px = 0, py = 0, tpx = 0, tpy = 0;
    const onPointer = (e: PointerEvent) => {
      tpx = (e.clientX / window.innerWidth - 0.5) * 2;
      tpy = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      const mobile = window.innerWidth < 768;
      group.position.set(mobile ? 0 : 0.9, mobile ? 0.9 : 0, 0);
      group.scale.setScalar(mobile ? 0.72 : 1);
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let raf = 0;
    const loop = () => {
      const t = clock.getElapsedTime();
      progress += (targetProgress - progress) * 0.08;
      px += (tpx - px) * 0.05;
      py += (tpy - py) * 0.05;

      uniforms.uTime.value = reduce ? 0 : t;
      // scroll choreography: displacement swells, spin accelerates, camera pulls back
      uniforms.uAmp.value = 0.2 + progress * 0.28;
      group.rotation.y = (reduce ? 0.4 : t * 0.12) + progress * 2.4 + px * 0.18;
      group.rotation.x = progress * 0.9 + py * 0.12;
      points.rotation.z = reduce ? 0 : t * 0.02;
      camera.position.z = 6 + progress * 2.2;
      group.position.y = (window.innerWidth < 768 ? 0.9 : 0) - progress * 1.4;
      mat.opacity = 0.7 - progress * 0.35;
      pMat.opacity = 0.7 - progress * 0.4;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('resize', onResize);
      geo.dispose(); pGeo.dispose(); mat.dispose(); pMat.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 -z-0"
      aria-hidden="true"
    />
  );
}
