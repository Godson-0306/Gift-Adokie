import { useState, type FormEvent } from 'react'
import { Reveal } from './Reveal'

const socials = [
  {
    label: 'Email',
    value: 'giftadokie@gmail.com',
    href: 'mailto:giftadokie@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'Gift Adokie',
    href: 'https://www.linkedin.com/in/gift-adokie-7550a4280',
  },
  {
    label: 'Instagram',
    value: '@giftadokie',
    href: 'https://www.instagram.com/giftadokie',
  },
  {
    label: 'Facebook',
    value: 'Gift Adokie',
    href: 'https://www.facebook.com/gift.adokie.1',
  },
  {
    label: 'X / Twitter',
    value: 'Gift Adokie',
    href: 'https://x.com/giftadokie',
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()
    const subject = encodeURIComponent(`Inquiry from ${name || 'the website'}`)
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? `\n${email}` : ''}`,
    )
    window.location.href = `mailto:giftadokie@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="section-heading">
        <p className="section-index">05</p>
        <h2>Inquiries &amp; collaborations</h2>
      </div>

      <div className="contact-grid">
        <Reveal>
          <div>
            <p className="contact-lead">
              For books, manuscripts, brand stories, or visibility strategy —
              write first. The work begins with a conversation.
            </p>
            <ul className="contact-list">
              {socials.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              How can Gift help?
              <textarea name="message" rows={5} required />
            </label>
            <button className="btn btn-primary" type="submit">
              Open email draft
            </button>
            {sent ? (
              <p className="form-note">
                Your email app should open with the message ready to send.
              </p>
            ) : (
              <p className="form-note">
                Submits through your email app to giftadokie@gmail.com — nothing
                is stored on this site.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
