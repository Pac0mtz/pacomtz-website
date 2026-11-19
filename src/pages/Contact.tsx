import { useState } from 'react';
import { CONTACT } from '../lib/data';
import { KineticLine, Reveal } from '../components/Reveal';

interface FormState { name: string; email: string; message: string }
const initial: FormState = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Partial<FormState> = {};
    if (form.name.trim().length < 2) er.name = 'Please tell me your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) er.message = 'A few words about your project (10+ characters).';
    setErrors(er);
    if (Object.keys(er).length > 0) return;

    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    'w-full border border-white/20 bg-transparent px-4 py-3.5 text-base text-[hsl(var(--paper))] placeholder:text-[hsl(var(--muted))] transition-colors focus:border-[hsl(var(--ember))] focus:outline-none';

  return (
    <>
      <section className="grid-texture px-5 pb-16 pt-36 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-meta mb-6 text-[hsl(var(--ember))]">Contact</p>
          <h1 className="font-display text-[clamp(2.6rem,9vw,8rem)]">
            <KineticLine>Let's talk</KineticLine>
          </h1>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-2 md:gap-20">
          {/* direct info */}
          <Reveal>
            <p className="max-w-md text-lg leading-[1.7] text-[hsl(var(--paper))]/90">
              Tell me about your project — a new website, a redesign, SEO, branding or anything in between. I usually reply within one business day.
            </p>
            <ul className="mt-10 space-y-6">
              <li>
                <p className="font-meta mb-1 text-[hsl(var(--muted))]">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="link-underline font-display inline-block text-2xl normal-case text-[hsl(var(--signal))] md:text-3xl">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <p className="font-meta mb-1 text-[hsl(var(--muted))]">Phone</p>
                <a href={CONTACT.phoneHref} className="link-underline font-display inline-block text-2xl normal-case text-[hsl(var(--signal))] md:text-3xl">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <p className="font-meta mb-1 text-[hsl(var(--muted))]">Location</p>
                <p className="font-display text-2xl normal-case md:text-3xl">{CONTACT.city}</p>
              </li>
            </ul>
          </Reveal>

          {/* form */}
          <Reveal delay={0.15}>
            {sent ? (
              <div className="border border-[hsl(var(--ember))] p-8" role="status">
                <p className="font-display text-3xl normal-case text-[hsl(var(--ember))]">Thanks, {form.name.split(' ')[0]}!</p>
                <p className="mt-4 leading-relaxed text-[hsl(var(--paper))]/90">
                  Your email app should have opened with the message ready to send. If not, write me directly at{' '}
                  <a href={`mailto:${CONTACT.email}`} className="link-underline text-[hsl(var(--signal))]">{CONTACT.email}</a>{' '}
                  or call <a href={CONTACT.phoneHref} className="link-underline text-[hsl(var(--signal))]">{CONTACT.phone}</a>.
                </p>
                <button
                  type="button"
                  onClick={() => { setSent(false); setForm(initial); }}
                  className="mt-8 inline-flex min-h-[48px] items-center border border-white/25 px-6 font-meta transition-colors hover:border-[hsl(var(--ember))] hover:text-[hsl(var(--ember))]"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-6">
                <div>
                  <label htmlFor="c-name" className="font-meta mb-2 block text-[hsl(var(--muted))]">Name</label>
                  <input id="c-name" type="text" value={form.name} onChange={set('name')} className={inputCls} placeholder="Your name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'c-name-err' : undefined} />
                  {errors.name && <p id="c-name-err" role="alert" className="mt-2 text-sm text-[hsl(var(--ember))]">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="c-email" className="font-meta mb-2 block text-[hsl(var(--muted))]">Email</label>
                  <input id="c-email" type="email" value={form.email} onChange={set('email')} className={inputCls} placeholder="you@business.com" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'c-email-err' : undefined} />
                  {errors.email && <p id="c-email-err" role="alert" className="mt-2 text-sm text-[hsl(var(--ember))]">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="c-msg" className="font-meta mb-2 block text-[hsl(var(--muted))]">Project</label>
                  <textarea id="c-msg" rows={5} value={form.message} onChange={set('message')} className={inputCls} placeholder="I need a website for my restaurant…" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'c-msg-err' : undefined} />
                  {errors.message && <p id="c-msg-err" role="alert" className="mt-2 text-sm text-[hsl(var(--ember))]">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex min-h-[52px] w-full items-center justify-center bg-[hsl(var(--ember))] px-8 font-meta text-[hsl(var(--ink))] transition-colors hover:bg-[hsl(var(--paper))] md:w-auto"
                >
                  Send message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
