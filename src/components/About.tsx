import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <p className="section-index">01</p>
        <h2>The writer behind the work</h2>
      </div>

      <div className="about-grid">
        <Reveal>
          <p className="about-lead">
            My name is Gift Adokie, a dynamic and versatile scriptwriter dedicated to
            creating stories that move people — and messages that land with
            clarity and influence.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="about-body">
            <p>
              I specialize in compelling content for busy brands and corporate
              organizations, helping them communicate with precision. As a
              ghostwriter, I partner with professionals to bring their ideas
              to life — transforming them into well-structured, engaging books
              that still sound like the author.
            </p>
            <p>
              As a meticulous editor, I refine manuscripts to the highest
              standard: eliminating errors, ensuring consistency, and enhancing
              readability and flow. As a book project consultant, I guide
              professionals and visionary individuals through developing
              exceptional books and intellectual property that stand the test of
              time.
            </p>
            <p>
              Beyond the page, I serve as a business visibility strategist —
              equipping authors and entrepreneurs with practical profitability
              insights, sustainable business models, stronger brand positioning,
              and tailored monetization systems that establish them as industry
              authorities.
            </p>
            <p className="about-emphasis">Simply put: all forms of writing are my expertise.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
