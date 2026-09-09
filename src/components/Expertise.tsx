import { Reveal } from './Reveal'

const services = [
  {
    number: '01',
    title: 'Scriptwriting',
    text: 'Powerful, inspiring scripts and brand stories that help busy organizations speak with clarity, warmth, and influence.',
  },
  {
    number: '02',
    title: 'Ghostwriting',
    text: 'A quiet partnership that turns professional ideas into engaging, well-structured books — in the author’s own voice and vision.',
  },
  {
    number: '03',
    title: 'Editing',
    text: 'Meticulous manuscript refinement: errors removed, consistency locked in, and readability and flow raised to the highest standard.',
  },
  {
    number: '04',
    title: 'Book project consulting',
    text: 'Guidance from concept to finished intellectual property — for professionals and visionaries who want books that last.',
  },
  {
    number: '05',
    title: 'Business visibility strategy',
    text: 'Profitability insight, sustainable models, brand positioning, and monetization systems that establish clients as authorities.',
  },
]

export function Expertise() {
  return (
    <section className="section expertise" id="expertise">
      <div className="section-heading">
        <p className="section-index">02</p>
        <h2>What I do</h2>
      </div>

      <div className="service-list">
        {services.map((service, index) => (
          <Reveal key={service.number} delay={index * 60}>
            <article className="service-item">
              <span className="service-number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
