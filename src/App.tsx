import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  ExternalLink,
  Globe,
  Layers3,
  Mail,
  MessageCircle,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import "./index.css";

const projects = [
  {
    number: "01",
    title: "E-commerce Experience",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A frontend concept exploring product discovery, responsive product cards, and a friction-light shopping journey.",
    stack: ["React", "TypeScript", "CSS"],
    type: "Web app",
    accent: "blue",
    link: "",
    demo: "",
  },
  {
    number: "02",
    title: "Developer Portfolio",
    category: "PERSONAL BRAND",
    description:
      "The portfolio you are exploring now — an evolving showcase of interface design, frontend craft, and experimentation.",
    stack: ["React", "TypeScript", "Motion"],
    type: "Website",
    accent: "cyan",
    link: "",
    demo: "",
  },
  {
    number: "03",
    title: "Web Ads Platform",
    category: "PRODUCT CONCEPT",
    description:
      "An interface concept for organizing campaigns and turning performance data into a dashboard that is easier to scan.",
    stack: ["React", "TypeScript", "UI Design"],
    type: "Dashboard",
    accent: "violet",
    link: "",
    demo: "",
  },
];

const skills = [
  { name: "HTML & CSS", level: "Building responsive interfaces" },
  { name: "JavaScript", level: "Interactive web experiences" },
  { name: "React", level: "Component-based development" },
  { name: "TypeScript", level: "Safer, more maintainable code" },
  { name: "Git & GitHub", level: "Version control and collaboration" },
  { name: "Backend", level: "Currently learning" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img
        src="/Logo2.png"
        alt=""
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <Code2 className="brand-mark-fallback" size={24} strokeWidth={2.4} />
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "minakamal962009@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="site-shell" id="home">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Built By Mina — home">
          <BrandMark />
          <span className="brand-name">
            Built By <span>Mina</span>
          </span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="eyebrow">
              <span className="status-dot" />
              FRONTEND DEVELOPER · CREATIVE BUILDER
            </div>
            <h1 id="hero-title">
              I turn ideas
              <br />
              into digital
              <br />
              <span className="gradient-text">experiences.</span>
            </h1>
            <p className="hero-description">
              I’m Mina — a frontend developer in progress, focused on thoughtful interfaces, purposeful details, and building things for the real web.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              Open to internships, collaborations, and ambitious ideas.
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="glass-code-card">
              <div className="window-bar">
                <div className="window-dots"><i /><i /><i /></div>
                <span>mina.tsx</span>
                <span className="window-lock"><Check size={13} /></span>
              </div>
              <div className="code-content" aria-label="Decorative code illustration">
                <p><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</p>
                <p className="indent"><span className="code-cyan">name</span>: <span className="code-green">&quot;Mina&quot;</span>,</p>
                <p className="indent"><span className="code-cyan">focus</span>: <span className="code-green">&quot;Frontend&quot;</span>,</p>
                <p className="indent"><span className="code-cyan">mindset</span>: <span className="code-green">&quot;Keep building&quot;</span></p>
                <p>{"};"}</p>
                <div className="code-divider" />
                <p><span className="code-purple">function</span> <span className="code-blue">makeItReal</span>() {"{"}</p>
                <p className="indent"><span className="code-purple">return</span> <span className="code-green">&quot;Ideas → products&quot;</span>;</p>
                <p>{"}"}</p>
              </div>
              <div className="code-card-footer">
                <span><span className="status-dot" /> Available to learn</span>
                <span>UTF-8</span>
              </div>
            </div>
            <div className="floating-chip chip-top"><Sparkles size={15} /> Creative by nature</div>
            <div className="floating-chip chip-bottom"><Braces size={16} /> Built with intention</div>
            <div className="visual-glow" />
          </motion.div>

          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
          </a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap intro-inner">
            <span className="strip-label">THE APPROACH</span>
            <p>Good design earns attention. Great engineering keeps it.</p>
            <span className="strip-symbol"><Layers3 size={22} /></span>
          </div>
        </section>

        <section className="tech-marquee" aria-label="Technologies and approach">
          <div className="tech-marquee-track">
            {Array.from({ length: 2 }, (_, repeat) => (
              <span className="tech-marquee-set" key={repeat}>
                <span>REACT</span><i /> <span>TYPESCRIPT</span><i /> <span>INTERACTION DESIGN</span><i /> <span>RESPONSIVE UI</span><i /> <span>CREATIVE DEVELOPMENT</span><i />
              </span>
            ))}
          </div>
        </section>

        <section className="section-wrap about-section section-pad" id="about">
          <div className="section-heading">
            <span className="eyebrow">01 / A LITTLE ABOUT ME</span>
            <h2>Curious mind.<br /><span className="muted-heading">Builder&apos;s mindset.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-lead">
              <p className="large-copy">
                I enjoy the space where <span>design meets engineering</span> — where a few
                thoughtful details can make a digital product feel clear, fast, and human.
              </p>
            </div>
            <div className="about-detail">
              <p>
                I&apos;m developing my skills in modern frontend engineering with React and
                TypeScript, while gradually exploring backend development. I care about
                clean structure, responsive layouts, accessibility, and the details people
                notice even when they can&apos;t explain why.
              </p>
              <a className="text-link" href="#contact">Let&apos;s build something <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="principles-grid">
            <article className="principle-card">
              <span className="principle-number">01</span>
              <Code2 size={23} />
              <h3>Thoughtful code</h3>
              <p>Readable, reusable components with a focus on maintainability.</p>
            </article>
            <article className="principle-card">
              <span className="principle-number">02</span>
              <Globe size={23} />
              <h3>Real-world usability</h3>
              <p>Responsive experiences that work across screens and devices.</p>
            </article>
            <article className="principle-card">
              <span className="principle-number">03</span>
              <Sparkles size={23} />
              <h3>Always learning</h3>
              <p>Every project is a chance to experiment, improve, and grow.</p>
            </article>
          </div>
        </section>

        <section className="projects-section section-pad" id="projects">
          <div className="section-wrap">
            <div className="section-heading projects-heading">
              <div>
                <span className="eyebrow">02 / SELECTED WORK</span>
                <h2>Projects with<br /><span className="muted-heading">a point of view.</span></h2>
              </div>
              <p className="heading-side-note">Selected builds and concepts — created to practise, experiment, and push my frontend skills further.</p>
            </div>

            <div className="projects-list">
              {projects.map((project) => (
                <motion.article
                  className={`project-card project-${project.accent}`}
                  key={project.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="project-art" aria-hidden="true">
                    <div className="art-window">
                      <div className="art-topbar"><span /><span /><span /><i /></div>
                      {project.number === "01" ? (
                        <div className="shop-mock">
                          <div className="mock-nav" />
                          <div className="mock-title" />
                          <div className="mock-subtitle" />
                          <div className="mock-products"><i /><i /><i /></div>
                        </div>
                      ) : project.number === "02" ? (
                        <div className="portfolio-mock">
                          <div className="mock-kicker" />
                          <div className="mock-bigline" />
                          <div className="mock-bigline short" />
                          <div className="mock-pill" />
                        </div>
                      ) : (
                        <div className="dashboard-mock">
                          <div className="dash-side"><i /><i /><i /><i /></div>
                          <div className="dash-content"><div className="dash-title" /><div className="dash-stats"><i /><i /><i /></div><div className="dash-chart"><i /><i /><i /><i /><i /><i /><i /></div></div>
                        </div>
                      )}
                    </div>
                    <span className="art-index">{project.number}</span>
                  </div>
                  <div className="project-info">
                    <div className="project-meta"><span>{project.category}</span><span>{project.type}</span></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    <div className="project-links">
                      {project.link ? <a href={project.link} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a> : <span className="coming-soon">Repository coming soon</span>}
                      {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a> : null}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            <p className="projects-disclaimer">Some entries are concepts and ongoing experiments. Repository and live-demo links will be added when each project is ready to share.</p>
          </div>
        </section>

        <section className="section-wrap section-pad skills-section" id="skills">
          <div className="section-heading">
            <span className="eyebrow">03 / TOOLS & TECHNOLOGIES</span>
            <h2>Learning by doing.<br /><span className="muted-heading">Growing with every build.</span></h2>
          </div>
          <div className="skills-layout">
            <div className="skills-intro">
              <div className="skills-icon"><Braces size={29} /></div>
              <p>My toolkit is evolving with every project. I value understanding the fundamentals as much as learning the tools.</p>
              <span className="skills-caption">CURRENT FOCUS: FRONTEND ENGINEERING</span>
            </div>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-row" key={skill.name}>
                  <span className="skill-index">0{index + 1}</span>
                  <div><h3>{skill.name}</h3><p>{skill.level}</p></div>
                  <ArrowUpRight size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap section-pad" id="contact">
          <div className="contact-panel">
            <div className="contact-orb orb-a" />
            <div className="contact-orb orb-b" />
            <div className="contact-content">
              <span className="eyebrow">04 / HAVE A PROJECT IN MIND?</span>
              <h2>Let&apos;s make something<br /><span className="gradient-text">meaningful.</span></h2>
              <p>Have a project in mind?
              I build modern, responsive web experiences with clear visual direction and careful attention to detail. Have an idea, a collaboration, or an opportunity? Let’s make it real.
</p>
              <div className="contact-actions">
                
<a
  className="button button-light"
  href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=${encodeURIComponent("Portfolio inquiry - Built By Mina")}&body=${encodeURIComponent("Hi Mina,\n\nI visited your portfolio and would like to connect.\n\n")}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <Mail size={17} /> Say hello <ArrowUpRight size={17} />
</a>

                <button className="button button-glass" type="button" onClick={copyEmail}>
                  {copied ? <Check size={17} /> : <Mail size={17} />}
                  {copied ? "Email copied" : "Copy email"}
                </button>
              </div>
              <div className="social-contact-links" aria-label="Social media links">
                <a className="social-contact-link whatsapp-link" href="https://wa.me/qr/4PSAQVJ6FJ7VP1" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} /> <span>WhatsApp</span> <ArrowUpRight size={14} />
                </a>
                <a className="social-contact-link instagram-link" href="https://www.instagram.com/builtitbymina?srtk=NHZiYXJqam03enh5" target="_blank" rel="noopener noreferrer">
                  <Globe size={18} /> <span>Instagram</span> <ArrowUpRight size={14} />
                </a>
                <a className="social-contact-link facebook-link" href="https://www.facebook.com/share/1CSd9r64tR/" target="_blank" rel="noopener noreferrer">
                  <Globe size={18} /> <span>Facebook</span> <ArrowUpRight size={14} />
                </a>
              </div>
              <p className="email-note">Have a question or an idea? I'm just one message away. Let's create something amazing together.</p>
            </div>
            <div className="contact-bottom-line"><span>GOOD THINGS START WITH A CONVERSATION.</span><ArrowUpRight size={18} /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main">
          <a className="brand footer-brand" href="#home">
            <BrandMark />
            <span className="brand-name">Built By <span>Mina</span></span>
          </a>
        
          <a className="back-top" href="#home">Back to top <ArrowUpRight size={16} /></a>
        </div>
        <div className="section-wrap footer-legal">
          <span>© {new Date().getFullYear()} Mina&apos;s Portfolio. All rights reserved.</span>
          <span>Designed by <strong>Mina Kamal Armamuos</strong></span>
        
        </div>
      </footer>
    </div>
  );
}

export default App;
