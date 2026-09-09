export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Meet</p>
        <h1>
          Gift
          <span>Adokie</span>
        </h1>
        <p className="hero-roles">
          <span>Scriptwriter</span>
          <span>Ghostwriter</span>
          <span>Editor</span>
          <span>Book consultant</span>
          <span>Visibility strategist</span>
        </p>
        <p className="hero-lede">
          Powerful, inspiring, and impactful stories for busy brands, visionary
          professionals, and books built to last.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Start a collaboration
          </a>
          <a className="btn btn-ghost" href="#books">
            See the books
          </a>
        </div>
      </div>

      <figure className="hero-portrait">
        <img
          src="/images/gift-portrait.jpg"
          alt="Gift Adokie, arms crossed, wearing glasses against a terracotta studio background"
          width={900}
          height={1200}
        />
        <figcaption>
          <span>Author of Drift Not &amp; G-Chronicles</span>
          <span>All forms of writing</span>
        </figcaption>
      </figure>
    </section>
  )
}
