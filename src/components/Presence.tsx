import { Reveal } from './Reveal'

export function Presence() {
  return (
    <section className="section presence" id="presence">
      <div className="section-heading">
        <p className="section-index">04</p>
        <h2>In the room</h2>
      </div>

      <Reveal>
        <p className="presence-intro">
          From launches to living rooms, the work lives with readers,
          collaborators, and the communities that carry a book forward.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <figure className="presence-frame">
          <img
            src="/images/gift-gallery.jpg"
            alt="Photo collage of Gift Adokie with readers, collaborators, and copies of G-Chronicles at launches and gatherings"
            width={1600}
            height={1600}
          />
        </figure>
      </Reveal>
    </section>
  )
}
