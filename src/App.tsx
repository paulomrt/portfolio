import { useEffect, useMemo, useState } from 'react'
import { PORTRAIT } from './embeddedAssets'
import { copy, type Lang } from './content'
import { ArrowIcon, DemandHubVisual, ExternalIcon, MiniAnalytics, StockHubVisual } from './visuals'

function App() {
  const [lang, setLang] = useState<Lang>('pt')
  const t = copy[lang]

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-lang') as Lang | null
    if (stored === 'pt' || stored === 'en') {
      setLang(stored)
      return
    }
    if (navigator.language.toLowerCase().startsWith('en')) setLang('en')
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = lang === 'pt'
      ? 'Paulo Martins — Supply Chain × Analytics × Produtos Digitais'
      : 'Paulo Martins — Supply Chain × Analytics × Digital Products'
  }, [lang])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [lang])

  const navItems = useMemo(() => [
    ['#focus', t.nav.about],
    ['#projects', t.nav.work],
    ['#method', t.nav.method],
    ['#experience', t.nav.experience],
  ], [t])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Paulo Martins — home">PM<span>.</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <div className="lang-switch" aria-label="Language selector">
            <button className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
            <span>/</span>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <a className="header-cv" href="#contact">
            <span>{t.nav.contact}</span>
            <ArrowIcon />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy" data-reveal>
            <h1>
              <span>{t.hero.line1}</span>
              <span className="accent-line">{t.hero.line2}</span>
            </h1>
            <p>{t.hero.description}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">{t.hero.primary}<ArrowIcon /></a>
              <a className="button secondary" href="#focus">{t.hero.secondary}</a>
            </div>
            <div className="hero-meta">
              <span>{t.hero.location}</span>
              <span className="meta-sep" />
              <span>{t.hero.availability}</span>
            </div>
          </div>

          <div className="hero-portrait-wrap" data-reveal>
            <div className="hero-grid-lines" aria-hidden="true" />
            <div className="portrait-frame">
              <img src={PORTRAIT} alt="Paulo Martins" />
              <div className="portrait-label">PAULO MARTINS</div>
            </div>
          </div>
        </section>

        <section id="focus" className="focus section-pad section-divider">
          <div className="section-heading" data-reveal>
            <span className="section-index">01</span>
            <div>
              <h2>{t.intro.title}</h2>
              <p>{t.intro.body}</p>
            </div>
          </div>
          <div className="pillars">
            {t.intro.pillars.map((pillar, index) => (
              <article className="pillar" key={pillar.title} data-reveal>
                <div className="pillar-top">
                  <span className="pillar-index">0{index + 1}</span>
                  <span className="pillar-meta">{pillar.meta}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
                <div className="pillar-line" />
              </article>
            ))}
          </div>
        </section>

        <section id="method" className="method section-pad section-divider">
          <div className="section-heading split-heading" data-reveal>
            <span className="section-index">02</span>
            <div>
              <h2>{t.method.title}</h2>
            </div>
            <p>{t.method.subtitle}</p>
          </div>
          <div className="method-track" data-reveal>
            {t.method.steps.map((step) => (
              <article key={step.n} className="method-step">
                <span className="step-no">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="projects section-pad section-divider">
          <div className="section-heading" data-reveal>
            <span className="section-index">03</span>
            <div>
              <h2>{t.work.title}</h2>
              <p>{t.work.subtitle}</p>
            </div>
          </div>

          <article className="project-case project-stockhub" data-reveal>
            <div className="project-copy">
              <span className="project-label">{t.work.stockhub.label}</span>
              <h3>{t.work.stockhub.title}</h3>
              <p>{t.work.stockhub.body}</p>
              <ul>{t.work.stockhub.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <div className="project-stack">{t.work.stockhub.stack}</div>
            </div>
            <StockHubVisual />
          </article>

          <article className="project-case project-demandhub" data-reveal>
            <DemandHubVisual />
            <div className="project-copy">
              <span className="project-label">{t.work.demandhub.label}</span>
              <h3>{t.work.demandhub.title}</h3>
              <p>{t.work.demandhub.body}</p>
              <ul>{t.work.demandhub.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <div className="project-stack">{t.work.demandhub.stack}</div>
            </div>
          </article>
        </section>

        <section className="analytics section-pad section-divider">
          <div className="section-heading split-heading" data-reveal>
            <span className="section-index">04</span>
            <div><h2>{t.analytics.title}</h2></div>
            <p>{t.analytics.body}</p>
          </div>
          <div className="analytics-grid">
            {t.analytics.items.map((item, index) => (
              <article className="analytics-card" key={item.title} data-reveal>
                <MiniAnalytics index={index} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="privacy-note" data-reveal>{t.analytics.note}</p>
        </section>

        <section id="experience" className="experience section-pad section-divider">
          <div className="section-heading" data-reveal>
            <span className="section-index">05</span>
            <div><h2>{t.experience.title}</h2></div>
          </div>
          <div className="timeline">
            {t.experience.items.map((item) => (
              <article className="timeline-row" key={`${item.company}-${item.period}`} data-reveal>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-main">
                  <h3>{item.company}</h3>
                  <span>{item.role}</span>
                </div>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-pad section-divider">
          <div className="section-heading" data-reveal>
            <span className="section-index">06</span>
            <div><h2>{t.skills.title}</h2></div>
          </div>
          <div className="skills-grid">
            {t.skills.groups.map((group) => (
              <article className="skill-group" key={group.title} data-reveal>
                <h3>{group.title}</h3>
                <div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section-pad section-divider">
          <div className="contact-copy" data-reveal>
            <span className="section-index">07</span>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.body}</p>
          </div>
          <div className="contact-links" data-reveal>
            <a href="mailto:p.mrtts@gmail.com"><span>{t.contact.email}</span><b>p.mrtts@gmail.com</b><ExternalIcon /></a>
            <a href="https://www.linkedin.com/in/paulomrt" target="_blank" rel="noreferrer"><span>{t.contact.linkedin}</span><b>linkedin.com/in/paulomrt</b><ExternalIcon /></a>
            <a href="https://github.com/paulomrt" target="_blank" rel="noreferrer"><span>{t.contact.github}</span><b>github.com/paulomrt</b><ExternalIcon /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-pad">
        <div className="brand footer-brand">PM<span>.</span></div>
        <p>{t.footer}</p>
        <span>© {new Date().getFullYear()} Paulo Martins</span>
      </footer>
    </div>
  )
}

export default App
