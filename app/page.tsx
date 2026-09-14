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
        <nav aria-label="Main navigation">
          <a href="#work">Projects</a>
          <a className="nav-approach" href="#approach">
            How I work
          </a>
          <a href="#about">About</a>
          <a href="#contact">
            Contact <ArrowUpRight size={16} aria-hidden="true" />
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
              <span>Solutions architect & engineer</span>
            </p>
            <Asterisk className="hero-asterisk" aria-hidden="true" />
          </div>
          <div className="hero-bottom">
            <h1 id="hero-title">
              DEUS<span className="hero-period">.</span>
            </h1>
            <div className="hero-intro">
              <p>
                Enterprise systems for work.
                <br />
                These projects, for myself.
              </p>
              <a
                href="#work"
                className="hero-link"
                aria-label="See the projects"
              >
                See the projects{' '}
                <span>
                  <ArrowDownRight size={24} aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
          <div className="hero-foot eyebrow">
            <span>Four projects · One you can play right now</span>
            <span>
              Based in Croatia <span className="location-dot" />
            </span>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title">
          <div className="intro-section section-wrap reveal">
            <p className="eyebrow section-index">01 / Projects</p>
            <div>
              <h2 id="work-title">
                Four things I wanted to use.
                <br />
                <span>So I built them.</span>
              </h2>
              <p className="section-description">
                A media library, a browser RPG, a map workspace, and a finance
                app. All of it built outside work hours.
              </p>
              <a className="text-link" href="#futurama">
                Behind the projects: Futurama{' '}
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>
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
                  <span>Films, shows, games, books</span>
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
                  <span className="eyebrow">Invitation only for now</span>
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
                A private library for films, shows, games, and books. What
                you’ve finished, what you’re halfway through, what’s next.
              </p>
              <div className="project-bottom">
                <span className="eyebrow">Design and engineering</span>
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
                  <span>Curfew starts at dusk.</span>
                  <span>Level 00</span>
                </div>
                <div className="getaway-title">
                  THE
                  <br />
                  GETAWAY<span>An RPG about getting out.</span>
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
                A browser RPG set in an occupied city under curfew.
                Surveillance, dialogue, and choices you can’t take back.
              </p>
              <div className="project-bottom">
                <span className="eyebrow">World, systems, code</span>
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
            <article className="project moneywave-project reveal" id="moneywave">
              <figure
                className="project-visual moneywave-visual"
                aria-label="MoneyWave brand preview: its teal wave symbol above the product name on a pale green background."
              >
                <div className="visual-topline eyebrow" aria-hidden="true">
                  <span>Personal finance</span>
                  <span>Private by design</span>
                </div>
                <div className="moneywave-brand" aria-hidden="true">
                  <Image
                    unoptimized
                    src="/images/moneywave-mark.png"
                    alt=""
                    width="1254"
                    height="1254"
                    loading="lazy"
                  />
                  <span>MoneyWave</span>
                </div>
                <div className="moneywave-topics eyebrow" aria-hidden="true">
                  <span>Accounts</span>
                  <span>Budgets</span>
                  <span>Net worth</span>
                </div>
                <div className="moneywave-rings" aria-hidden="true" />
              </figure>
              <div className="moneywave-copy">
                <div className="project-caption">
                  <h3>MoneyWave</h3>
                  <span className="project-status">
                    <span />Private application
                  </span>
                </div>
                <p className="project-description">
                  Where the money actually went. Accounts, budgets, trips, and
                  purchases in one private workspace, with the records to check
                  the numbers.
                </p>
                <p className="moneywave-note">
                  Built for my own finances. Encrypted on my Mac, accessible
                  over my private network.
                </p>
                <details className="moneywave-more">
                  <summary>
                    More about MoneyWave
                    <Plus className="details-plus" aria-hidden="true" />
                  </summary>
                  <div className="moneywave-detail">
                    <p>
                      <strong>Follow the money.</strong> Bank imports, cash,
                      and currency conversion, with own transfers kept separate
                      from spending.
                    </p>
                    <p>
                      <strong>Plan and compare.</strong> Dated category budgets,
                      monthly views, and annual plan-versus-actual comparisons.
                    </p>
                    <p>
                      <strong>Keep the evidence.</strong> Trips and purchases
                      linked to payments, split transactions, lasting category
                      corrections, and undo.
                    </p>
                    <p>
                      <strong>See what’s known.</strong> Dated net worth,
                      including captured crypto valuations. Missing balances
                      and rates stay unknown; amounts can be hidden on screen.
                    </p>
                  </div>
                </details>
                <div className="project-bottom">
                  <span className="eyebrow">Design and engineering</span>
                  <span className="private-note">
                    <Check size={16} aria-hidden="true" />No public demo
                  </span>
                </div>
              </div>
            </article>
          </div>
          <div className="workshop section-wrap reveal">
            <div className="workshop-heading">
              <p className="eyebrow">Also in progress</p>
              <span className="eyebrow">
                A map workspace in development
              </span>
            </div>
            <details className="workshop-project">
              <summary>
                <span className="workshop-symbol">
                  <MapPin aria-hidden="true" />
                </span>
                <span className="workshop-name">
                  Routewise<span>Ask a question, get a map.</span>
                </span>
                <span className="workshop-type">Map workspace · Prototype</span>
                <Plus className="details-plus" aria-hidden="true" />
              </summary>
              <div className="workshop-detail">
                <p>
                  Ask in plain language, get a map back: boundaries, open-data
                  layers, whatever you’re actually trying to see. Early
                  prototype, public code.
                </p>
                <div>
                  <p className="eyebrow">What I’m testing</p>
                  <p>
                    Whether plain language can replace half the GIS menu without
                    taking away precise control.
                  </p>
                  <a
                    href="https://github.com/deus42/AIMaps"
                    {...external}
                    className="inline-link"
                  >
                    See the code <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
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
              Three habits
              <br />
              <span>that survived twenty years.</span>
            </h2>
          </div>
          <div className="principles">
            <article className="principle reveal">
              <span className="principle-number eyebrow">01</span>
              <h3>Find the real constraint.</h3>
              <p>
                Most of what gets asked for is a symptom. The fix is usually
                smaller than the first proposal, and cheaper to keep running.
              </p>
            </article>
            <article className="principle reveal">
              <span className="principle-number eyebrow">02</span>
              <h3>Stay in the code.</h3>
              <p>
                A diagram nobody can implement is a drawing. I build enough of
                the thing myself to know the design holds up.
              </p>
            </article>
            <article className="principle reveal">
              <span className="principle-number eyebrow">03</span>
              <h3>Check it where it runs.</h3>
              <p>
                AI writes a lot of my first drafts now. It doesn’t get to decide
                whether they work. Tests and real users do.
              </p>
            </article>
          </div>
          <section
            className="futurama"
            id="futurama"
            aria-labelledby="futurama-title"
          >
            <div className="futurama-overview">
              <div className="futurama-intro reveal">
                <p className="eyebrow">Inside my workflow / Agentic systems</p>
                <h3 id="futurama-title">Futurama</h3>
                <p className="futurama-lead">
                  The agent setup behind the work.
                </p>
                <p>
                  I’m building a private multi-agent environment for work
                  across research, engineering, and day-to-day operations.
                  Signal is the conversation layer; work happens in
                  repositories, tools, and reviewable artifacts.
                </p>
                <p>
                  I set the direction, define the boundaries, and review the
                  outcome. Each handoff has an owner, a bounded task, and a
                  clear way to check the result.
                </p>
              </div>
              <dl className="futurama-roles">
                <div className="reveal">
                  <dt>
                    Hermes <span>Coordination</span>
                  </dt>
                  <dd>
                    Routes requests, coordinates recurring work, reviews
                    evidence, and keeps durable context. One owner speaks for
                    a task, keeping the conversation focused.
                  </dd>
                </div>
                <div className="reveal">
                  <dt>
                    Zoidberg + Codex <span>Engineering</span>
                  </dt>
                  <dd>
                    Zoidberg handles scoped engineering work and technical
                    review, with Codex as the primary coding executor. Changes
                    come back with artifacts and verification results.
                  </dd>
                </div>
                <div className="reveal">
                  <dt>
                    Vault-Tec <span>Knowledge & continuity</span>
                  </dt>
                  <dd>
                    A curated knowledge base holds shared decisions and
                    project context. Agentmemory keeps each agent’s episodic
                    memory separate; new knowledge is proposed for review.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="futurama-experiments">
              <p className="eyebrow reveal">Specialist agents in development</p>
              <dl className="futurama-roles futurama-specialists">
                <div className="reveal">
                  <dt>
                    Leela <span>Architecture</span>
                  </dt>
                  <dd>
                    An architect agent for systems analysis, solution design,
                    and technical review. The focus is clear interfaces,
                    explicit tradeoffs, and designs that hold up in
                    implementation.
                  </dd>
                </div>
                <div className="reveal">
                  <dt>
                    Bender <span>Finance · IronClaw</span>
                  </dt>
                  <dd>
                    An IronClaw-based specialist for finance and blockchain
                    research: comparing options, checking assumptions, and
                    tracing conclusions back to evidence. Research and
                    proposals stay separate from actions that move money.
                  </dd>
                </div>
              </dl>
            </div>
          </section>
          <div className="toolkit reveal">
            <p className="eyebrow">What I use</p>
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
            <p className="eyebrow section-index">03 / About</p>
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
                Twenty years on big systems.
                <br />
                <span>Now a few of my own.</span>
              </h2>
              <p>
                I’m Oleksii, a solutions architect based in Croatia. Most of my
                work is identity, cloud platforms, integrations, and the
                migrations nobody volunteers for.
              </p>
              <p>
                The projects here are where I make every decision myself,
                including the bad ones. An idea only gets interesting to me once
                someone else can open it and use it.
              </p>
              <p className="offscreen">
                <span className="eyebrow">Away from the screen</span>Cinema,
                Formula 1, snowboarding, and cooking things that don’t always
                work.
              </p>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/deus42/"
                {...external}
              >
                Background on LinkedIn{' '}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <footer className="contact section-wrap" id="contact">
          <div className="contact-top">
            <p className="eyebrow">04 / Contact</p>
            <Asterisk size={38} strokeWidth={1.2} aria-hidden="true" />
          </div>
          <a className="contact-title" href="mailto:deusson@gmail.com">
            Email me.
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-middle">
            <p>
              A system to untangle, something to build,
              <br />
              or a project you’re stuck on. I’ll reply.
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
