import Image from 'next/image';
import {
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  Check,
  Plus,
  MapPin,
  Film,
  Tv,
  Gamepad2,
  BookOpen,
  Waves,
} from 'lucide-react';
import { CopyEmail, SiteEffects } from './site-interactions';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Home() {
  return (
    <>
      <SiteEffects />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header" id="top">
        <a className="wordmark" href="#top" aria-label="Deus, home">
          deus<span>42</span>
        </a>
        <p className="header-caption eyebrow">Architecture. Code. Curiosity.</p>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a className="nav-approach" href="#approach">
            Approach
          </a>
          <a href="#about">About</a>
          <a href="#contact">
            Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-top">
            <p className="eyebrow">
              Oleksii Gapchenko
              <br />
              <span>Solutions architect & builder</span>
            </p>
            <Asterisk className="hero-asterisk" aria-hidden="true" />
          </div>
          <div className="hero-bottom">
            <h1 id="hero-title">
              DEUS<span className="hero-period">.</span>
            </h1>
            <div className="hero-intro">
              <p>
                I turn complex systems
                <br />
                into useful software.
              </p>
              <a
                href="#work"
                className="hero-link"
                aria-label="Explore my work"
              >
                Explore my work{' '}
                <span>
                  <ArrowDownRight size={24} aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
          <div className="hero-foot eyebrow">
            <span>Independent work · Considered systems</span>
            <span>
              Based in Croatia <span className="location-dot" />
            </span>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title">
          <div className="intro-section section-wrap reveal">
            <p className="eyebrow section-index">01 / Selected work</p>
            <div>
              <h2 id="work-title">
                Things I wanted to exist.
                <br />
                <span>So I’m building them.</span>
              </h2>
              <p className="section-description">
                Personal software, practical experiments, and a world to get
                lost in.
              </p>
            </div>
          </div>
          <div className="featured-work section-wrap">
            <article className="project reveal">
              <a
                className="project-visual allcheck-visual"
                href="https://allcheck.app/"
                {...external}
                aria-label="Visit AllCheck (invitation required)"
              >
                <div className="visual-topline eyebrow">
                  <span>One library. All your worlds.</span>
                  <span>01—04</span>
                </div>
                <div className="allcheck-brand">
                  <Image
                    unoptimized
                    src="/images/allcheck.png"
                    alt=""
                    width="82"
                    height="82"
                  />
                  <span>AllCheck</span>
                </div>
                <div className="media-types" aria-hidden="true">
                  <span>
                    <Film />
                    Watch
                  </span>
                  <span>
                    <Tv />
                    Follow
                  </span>
                  <span>
                    <Gamepad2 />
                    Play
                  </span>
                  <span>
                    <BookOpen />
                    Read
                  </span>
                </div>
                <div className="allcheck-bottom">
                  <span className="eyebrow">Your taste. Your collection.</span>
                  <span className="visual-arrow">
                    <ArrowUpRight size={23} />
                  </span>
                </div>
                <div className="allcheck-orbit" aria-hidden="true" />
              </a>
              <div className="project-caption">
                <h3>AllCheck</h3>
                <span className="project-status">
                  <span />
                  Live · By invitation
                </span>
              </div>
              <p className="project-description">
                One private home for everything you watch, play, and read. Keep
                your collection, discover what’s next, and make it your own.
              </p>
              <div className="project-bottom">
                <span className="eyebrow">
                  Product design & full-stack engineering
                </span>
                <a
                  href="https://allcheck.app/"
                  {...external}
                  className="inline-link"
                >
                  Visit AllCheck <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
            <article className="project reveal">
              <a
                className="project-visual getaway-visual"
                href="https://deus42.github.io/the-getaway/"
                {...external}
                aria-label="Play The Getaway prototype"
              >
                <Image
                  unoptimized
                  src="/images/the-getaway.webp"
                  alt="The Getaway development build: an isometric city district at dusk, with a player navigating surveillance and curfew."
                  width="1440"
                  height="900"
                  loading="lazy"
                />
                <div className="getaway-shade" aria-hidden="true" />
                <div className="visual-topline eyebrow">
                  <span>A city that’s always watching.</span>
                  <span>Level 00</span>
                </div>
                <div className="getaway-title">
                  THE
                  <br />
                  GETAWAY<span>Surveillance. Choices. Consequences.</span>
                </div>
                <span className="visual-arrow">
                  <ArrowUpRight size={23} />
                </span>
              </a>
              <div className="project-caption">
                <h3>The Getaway</h3>
                <span className="project-status prototype">
                  <span />
                  Playable prototype
                </span>
              </div>
              <p className="project-description">
                An occupied city. A curfew. A way out. A browser RPG built
                around surveillance, conversation, and the choices you can live
                with.
              </p>
              <div className="project-bottom">
                <span className="eyebrow">
                  Game systems, world design & engineering
                </span>
                <a
                  href="https://deus42.github.io/the-getaway/"
                  {...external}
                  className="inline-link"
                >
                  Play the prototype{' '}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
          <div className="workshop section-wrap reveal">
            <div className="workshop-heading">
              <p className="eyebrow">Also on the workbench</p>
              <span className="eyebrow">A closer look at work in progress</span>
            </div>
            <details className="workshop-project">
              <summary>
                <span className="workshop-symbol">
                  <MapPin aria-hidden="true" />
                </span>
                <span className="workshop-name">
                  Routewise<span>Maps you can talk to.</span>
                </span>
                <span className="workshop-type">Map workspace · Prototype</span>
                <Plus className="details-plus" aria-hidden="true" />
              </summary>
              <div className="workshop-detail">
                <p>
                  Describe a place or a question. Build up an interactive map
                  with boundaries, open-data layers, and the things you want to
                  understand. The current AI Maps prototype makes the map itself
                  part of the conversation.
                </p>
                <div>
                  <p className="eyebrow">The design question</p>
                  <p>
                    Can natural language make geographic data easier to explore
                    without taking away precise control?
                  </p>
                  <a
                    href="https://github.com/deus42/AIMaps"
                    {...external}
                    className="inline-link"
                  >
                    Explore the code{' '}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </details>
            <details className="workshop-project">
              <summary>
                <span className="workshop-symbol">
                  <Waves aria-hidden="true" />
                </span>
                <span className="workshop-name">
                  MoneyWave<span>Follow the money. Keep the data.</span>
                </span>
                <span className="workshop-type">
                  Personal finance · Local application
                </span>
                <Plus className="details-plus" aria-hidden="true" />
              </summary>
              <div className="workshop-detail">
                <p>
                  A private finance workspace that follows money across
                  accounts, currencies, and transfers. Encrypted local storage
                  keeps the underlying records on your own machine.
                </p>
                <div>
                  <p className="eyebrow">The design question</p>
                  <p>
                    How do you make a financial picture understandable while
                    staying honest about missing evidence? Every movement should
                    be traceable; uncertainty should stay visible.
                  </p>
                  <span className="private-note">
                    <Check size={16} aria-hidden="true" />
                    Private application · No public demo
                  </span>
                </div>
              </div>
            </details>
          </div>
        </section>

        <section
          className="approach section-wrap"
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className="approach-heading reveal">
            <p className="eyebrow section-index">02 / How I work</p>
            <h2 id="approach-title">
              See the whole system.
              <br />
              <span>Care about the details.</span>
            </h2>
          </div>
          <div className="principles">
            <article className="principle reveal">
              <span className="principle-number eyebrow">01</span>
              <h3>Understand before adding.</h3>
              <p>
                Start with the real constraint. Make the tradeoffs explicit. The
                useful solution is often smaller than the first idea.
              </p>
            </article>
            <article className="principle reveal">
              <span className="principle-number eyebrow">02</span>
              <h3>Stay close to the build.</h3>
              <p>
                Architecture should survive contact with the code, the people
                maintaining it, and the system running in production.
              </p>
            </article>
            <article className="principle reveal">
              <span className="principle-number eyebrow">03</span>
              <h3>Keep the proof in the loop.</h3>
              <p>
                Use AI to move faster through design, implementation, and
                review. Check the result where someone will actually use it.
              </p>
            </article>
          </div>
          <div className="toolkit reveal">
            <p className="eyebrow">Tools I work with</p>
            <p>
              .NET <span>/</span> TypeScript <span>/</span> React <span>/</span>{' '}
              Python <span>/</span> Azure <span>/</span> AWS <span>/</span> AI &
              agent workflows
            </p>
          </div>
        </section>

        <section
          className="about section-wrap"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-top reveal">
            <p className="eyebrow section-index">
              03 / The person behind the projects
            </p>
            <span className="eyebrow">Building software since 2006</span>
          </div>
          <div className="about-grid">
            <div className="portrait-wrap reveal">
              <Image
                unoptimized
                src="/images/oleksii.webp"
                alt="Oleksii Gapchenko outdoors, wearing sunglasses."
                width="460"
                height="460"
                loading="lazy"
              />
              <div className="portrait-caption">
                <span>Oleksii Gapchenko</span>
                <span className="eyebrow">Also known as Deus</span>
              </div>
            </div>
            <div className="about-copy reveal">
              <h2 id="about-title">
                An architect’s perspective.
                <br />
                <span>A builder’s instinct.</span>
              </h2>
              <p>
                I’m Oleksii, a solutions architect and hands-on engineer based
                in Croatia. I’ve spent my career helping teams make complex
                enterprise systems work: identity, cloud platforms,
                integrations, and the migrations between them.
              </p>
              <p>
                My own projects give that experience somewhere to play. A better
                media library. A map that understands a question. A game with a
                city worth escaping. I like taking an idea all the way to
                something you can use.
              </p>
              <p className="offscreen">
                <span className="eyebrow">Away from the screen</span>Cinema,
                Formula 1, snowboarding, and experimenting in the kitchen.
                Curiosity tends to follow me home.
              </p>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/deus42/"
                {...external}
              >
                More about my background{' '}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <footer className="contact section-wrap" id="contact">
          <div className="contact-top">
            <p className="eyebrow">04 / Start a conversation</p>
            <Asterisk size={38} strokeWidth={1.2} aria-hidden="true" />
          </div>
          <a className="contact-title" href="mailto:deusson@gmail.com">
            Let’s make it work.
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-middle">
            <p>
              A system to untangle, a product to build,
              <br />
              or an interesting idea. I’d like to hear it.
            </p>
            <CopyEmail />
          </div>
          <div className="footer-bottom">
            <a className="wordmark" href="#top" aria-label="Back to top">
              deus<span>42</span>
            </a>
            <span className="footer-credit">
              © {new Date().getFullYear()} Oleksii Gapchenko
            </span>
            <div className="social-links">
              <a href="https://github.com/deus42" {...external}>
                GitHub <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/deus42/" {...external}>
                LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a href="mailto:deusson@gmail.com">
                Email <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
            <a className="back-top" href="#top" aria-label="Back to top">
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
