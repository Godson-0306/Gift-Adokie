import { Reveal } from './Reveal'

const titles = [
  {
    name: 'Drift Not',
    kicker: 'Fast-selling title',
    note: 'A published work from Gift’s growing catalogue — written to hold attention and leave a mark.',
    tone: 'drift',
  },
  {
    name: 'G-Chronicles',
    kicker: 'Fast-selling title',
    note: 'A book that has travelled through launches, signings, and community rooms — held, shared, and celebrated.',
    tone: 'chronicles',
  },
]

export function Books() {
  return (
    <section className="section books" id="books">
      <div className="section-heading">
        <p className="section-index">03</p>
        <h2>On the shelf</h2>
      </div>

      <Reveal>
        <p className="books-intro">
          I am the author of three books, including the fast-selling titles
          Drift Not and G-Chronicles.
        </p>
      </Reveal>

      <div className="book-grid">
        {titles.map((book, index) => (
          <Reveal key={book.name} delay={index * 90}>
            <article className={`book-card book-card--${book.tone}`}>
              <p className="book-kicker">{book.kicker}</p>
              <h3>{book.name}</h3>
              <p>{book.note}</p>
              <p className="book-by">A book by Gift Adokie</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
