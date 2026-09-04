import React, { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import {
  ArrowRight, BadgeCheck, Building2, Cable, Check, ChevronDown, CircleCheck,
  Camera, ClipboardCheck, FileText, HeartHandshake, HousePlug, Mail, MapPin,
  Menu, MessageCircle, Phone, PhoneCall, ShieldCheck, Sparkles, Upload, Users,
  Wrench, X, Zap,
} from 'lucide-react';
import { asset, contact, locations, projects, services } from './data.js';

const META = {
  '/': ['Dauti Elektro Kabelverlegung | Elektriker Kempten & Allgäu', 'Elektroinstallation, Kabelverlegung, Photovoltaik und Wallbox in Kempten und im Allgäu. Jetzt unverbindlich anfragen.'],
  '/leistungen/': ['Elektro-Leistungen in Kempten | Dauti Elektro', 'Kabelverlegung, Elektroinstallation, Photovoltaik, Wallbox und Sanierung in Kempten und im Allgäu.'],
  '/projekte/': ['Elektro-Projekte in Kempten & Allgäu | Dauti Elektro', 'Projektbeispiele für Elektroinstallation, Kabelverlegung, Photovoltaik, Wallbox und Sanierung.'],
  '/ueber-uns/': ['Über Dauti Elektro | Regional in Kempten', 'Persönliche Elektroarbeiten für Privatkunden und Gewerbe in Kempten und im Allgäu.'],
  '/kontakt/': ['Kontakt & Angebot | Dauti Elektro Kempten', 'Elektroprojekt in Kempten oder im Allgäu anfragen – telefonisch, per WhatsApp oder Formular.'],
  '/impressum/': ['Impressum | Dauti Elektro Kabelverlegung', 'Impressum von Dauti Elektro Kabelverlegung.'],
  '/datenschutz/': ['Datenschutz | Dauti Elektro Kabelverlegung', 'Datenschutzhinweise von Dauti Elektro Kabelverlegung.'],
};

function Logo() {
  return <Link className="logo" to="/" aria-label="Dauti Elektro – Startseite"><img src={asset('dauti-logo.svg')} alt="Dauti Elektro Kabelverlegung" width="530" height="170" /></Link>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); setServicesOpen(false); }, [location.pathname]);
  return <>
    <a className="skip-link" href="#main">Zum Inhalt springen</a>
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <button className="menu-button" aria-label={open ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</button>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Hauptnavigation">
          <NavLink to="/">Startseite</NavLink>
          <div className="nav-dropdown">
            <button onClick={() => setServicesOpen(v => !v)} aria-expanded={servicesOpen}>Leistungen <ChevronDown size={15} /></button>
            <div className={`dropdown-panel ${servicesOpen ? 'is-open' : ''}`}>
              <Link to="/leistungen/">Alle Leistungen</Link>
              {services.map(s => <Link key={s.slug} to={`/leistungen/${s.slug}/`}>{s.title}</Link>)}
            </div>
          </div>
          <NavLink to="/projekte/">Projekte</NavLink>
          <NavLink to="/ueber-uns/">Über uns</NavLink>
          <NavLink to="/kontakt/">Kontakt</NavLink>
        </nav>
        <div className="header-contact">
          <a className="phone-mini" href={contact.phoneHref}><Phone size={20} /><span><strong>{contact.phoneDisplay}</strong><small>Jetzt anrufen</small></span></a>
          <Button to="/kontakt/">Angebot anfordern</Button>
        </div>
      </div>
    </header>
  </>;
}

function Button({ to, href, children, variant = 'primary', icon: Icon = ArrowRight, className = '' }) {
  const classes = `button button-${variant} ${className}`;
  const content = <>{children}{Icon && <Icon size={17} aria-hidden="true" />}</>;
  if (to) return <Link className={classes} to={to}>{content}</Link>;
  return <a className={classes} href={href}>{content}</a>;
}

function SectionHeading({ eyebrow, title, action, center = false }) {
  return <div className={`section-heading ${center ? 'center' : ''}`}>
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
    {action}
  </div>;
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  return <article className="service-card">
    <div className="card-image"><img src={service.image} alt="" loading="lazy" width="640" height="400" /></div>
    <div className="icon-bubble"><Icon /></div>
    <div className="card-body"><h3>{service.title}</h3><p>{service.short}</p><Link className="text-link" to={`/leistungen/${service.slug}/`}>Mehr erfahren <ArrowRight size={15} /></Link></div>
  </article>;
}

function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="project-image"><img src={project.image} alt={`Projektmotiv: ${project.title}`} loading="lazy" width="640" height="400" /><span>Projektbeispiel</span></div>
    <p className="project-type">{project.type}</p><h3>{project.title}</h3><p><MapPin size={14} /> {project.place}</p><small>{project.facts}</small>
  </article>;
}

function Hero() {
  const trust = [[MapPin, 'Regional in Kempten & Allgäu'], [Users, 'Privat & Gewerbe'], [MessageCircle, 'Persönliche Beratung'], [Wrench, 'Fachgerechte Ausführung']];
  return <section className="hero">
    <img className="hero-bg" src={asset('hero-elektriker.webp')} alt="Elektriker arbeitet an einer modernen Verteilung" width="1536" height="1024" />
    <div className="hero-overlay" />
    <div className="container hero-content">
      <p className="eyebrow eyebrow-light">Elektroinstallationen aus dem Allgäu</p>
      <h1><span>Dauti Elektro</span>Ihr Partner für Elektroinstallation und Kabelverlegung in Kempten und im Allgäu</h1>
      <p className="hero-lead">Zuverlässige Lösungen für Neubau, Sanierung, Photovoltaik und professionelle Kabelverlegung – für Privatkunden und Gewerbe.</p>
      <div className="hero-actions"><Button to="/kontakt/" icon={ClipboardCheck}>Kostenloses Angebot anfordern</Button><Button href={contact.whatsapp} variant="outline-light" icon={MessageCircle}>WhatsApp schreiben</Button></div>
      <div className="trust-row">{trust.map(([Icon, label]) => <div key={label}><span><Icon /></span><b>{label}</b></div>)}</div>
    </div>
    <div className="hero-note">Starke Verbindungen<br />für eine sichere Zukunft.</div>
  </section>;
}

function ServicesSection() {
  return <section className="section services-section"><div className="container"><SectionHeading eyebrow="Kompetent. Zuverlässig. Regional." title="Unsere Leistungen" action={<Link className="text-link top-link" to="/leistungen/">Alle Leistungen ansehen <ArrowRight size={16} /></Link>} /><div className="services-grid">{services.map(s => <ServiceCard service={s} key={s.slug} />)}</div></div></section>;
}

function ProjectsSection() {
  return <section className="section projects-section"><div className="container"><SectionHeading eyebrow="Qualität, die überzeugt." title="Unsere Projekte" action={<Link className="text-link top-link" to="/projekte/">Alle Projekte ansehen <ArrowRight size={16} /></Link>} /><div className="projects-grid">{projects.slice(0, 5).map(p => <ProjectCard project={p} key={p.title} />)}</div><p className="demo-note">Die gezeigten Projekte sind Layout-Demobeispiele und werden vor Veröffentlichung durch verifizierte Referenzen ersetzt.</p></div></section>;
}

const benefitItems = [[BadgeCheck, 'Erfahrung und Fachwissen'], [ClipboardCheck, 'Zuverlässige Terminplanung'], [FileText, 'Transparente Kommunikation'], [HeartHandshake, 'Persönliche Betreuung']];

function AboutSection() {
  return <section className="section about-section"><div className="container about-grid"><div className="about-image"><img src={asset('dauti-allgaeu-branded.webp')} alt="Dauti-Elektro-Servicefahrzeug und Elektriker im Allgäu" loading="lazy" width="1536" height="1024" /></div><div className="about-copy"><p className="eyebrow">Über Dauti Elektro</p><h2>Elektroarbeiten aus der Region – persönlich und zuverlässig</h2><p>Dauti Elektro Kabelverlegung steht für fachgerechte Elektroarbeiten, kurze Wege und eine persönliche Abstimmung. In Kempten und im Allgäu begleiten wir Projekte für Privatkunden und Gewerbe – klar geplant und sauber ausgeführt.</p><div className="benefits">{benefitItems.map(([Icon, text]) => <div key={text}><Icon /><span>{text}</span></div>)}</div><Button to="/ueber-uns/">Mehr über uns erfahren</Button></div></div></section>;
}

function ProcessSection() {
  const steps = [[MessageCircle, 'Anfrage senden', 'Projekt kurz beschreiben – telefonisch, per WhatsApp oder über das Formular.'], [Users, 'Beratung', 'Wir beraten Sie persönlich – telefonisch oder direkt vor Ort.'], [FileText, 'Angebot', 'Sie erhalten ein transparentes und unverbindliches Angebot.'], [Wrench, 'Umsetzung', 'Nach Ihrer Zusage kümmern wir uns um die fachgerechte Durchführung.']];
  return <section className="section process-section"><div className="container"><SectionHeading eyebrow="Einfach. Transparent. Effizient." title="So läuft ein Auftrag ab" /><div className="process-grid">{steps.map(([Icon, title, text], i) => <article className="process-step" key={title}><div className="step-top"><b>{String(i + 1).padStart(2, '0')}</b><Icon /></div><h3>{title}</h3><p>{text}</p>{i < steps.length - 1 && <ArrowRight className="step-arrow" />}</article>)}</div></div></section>;
}

function RegionGraphic() {
  return <div className="region-map" aria-label="Schematische Darstellung des Einsatzgebiets um Kempten"><div className="map-ring ring-one" /><div className="map-ring ring-two" /><div className="map-pin"><MapPin fill="currentColor" /><b>Kempten</b></div><span className="place p1">Memmingen</span><span className="place p2">Dietmannsried</span><span className="place p3">Durach</span><span className="place p4">Waltenhofen</span><span className="place p5">Immenstadt</span><span className="place p6">Sonthofen</span></div>;
}

function ReviewRegionSection() {
  return <section className="section review-region"><div className="container review-grid"><div><p className="eyebrow">Echte Meinungen. Echte Projekte.</p><h2>Das sagen unsere Kunden</h2><article className="review-card"><span className="demo-badge">Demo-Inhalt</span><div className="stars">★★★★★</div><p>Hier können nach Freigabe verifizierte Kundenstimmen oder eine echte Google-Bewertungsintegration erscheinen.</p><b>Platzhalter für Kundenbewertung</b></article><p className="demo-note">Es werden aktuell keine erfundenen Bewertungen als echt ausgegeben.</p></div><div><p className="eyebrow">Regional für Sie da.</p><h2>Unser Einsatzgebiet</h2><div className="region-inner"><div><h3>Ihr Elektriker für Kempten und das Allgäu</h3><p>Wir sind in Kempten und in der gesamten Region Allgäu für Sie im Einsatz – schnell, zuverlässig und flexibel.</p><ul className="location-list">{locations.map(x => <li key={x}><CircleCheck />{x}</li>)}</ul></div><RegionGraphic /></div></div></div></section>;
}

function ContactForm({ compact = false }) {
  const [sent, setSent] = useState(false);
  function submit(e) {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Projektanfrage: ${form.get('service')}`);
    const body = encodeURIComponent(`Name: ${form.get('name')}\nTelefon: ${form.get('phone')}\nE-Mail: ${form.get('email')}\nPLZ / Ort: ${form.get('place')}\nLeistung: ${form.get('service')}\n\n${form.get('message')}`);
    setSent(true);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }
  return <form className={`contact-form ${compact ? 'compact' : ''}`} onSubmit={submit}>
    <div className="field"><label htmlFor={`name-${compact}`}>Name *</label><input id={`name-${compact}`} name="name" autoComplete="name" required aria-required="true" /></div>
    <div className="field"><label htmlFor={`phone-${compact}`}>Telefon *</label><input id={`phone-${compact}`} name="phone" type="tel" autoComplete="tel" required aria-required="true" /></div>
    <div className="field"><label htmlFor={`email-${compact}`}>E-Mail *</label><input id={`email-${compact}`} name="email" type="email" autoComplete="email" required aria-required="true" /></div>
    <div className="field"><label htmlFor={`service-${compact}`}>Gewünschte Leistung *</label><select id={`service-${compact}`} name="service" required defaultValue=""><option value="" disabled>Bitte wählen</option>{services.map(s => <option key={s.slug}>{s.title}</option>)}</select></div>
    <div className="field field-wide"><label htmlFor={`place-${compact}`}>PLZ / Ort *</label><input id={`place-${compact}`} name="place" autoComplete="postal-code" required aria-required="true" /></div>
    <div className="field field-message"><label htmlFor={`message-${compact}`}>Ihre Nachricht *</label><textarea id={`message-${compact}`} name="message" placeholder="Beschreiben Sie kurz Ihr Projekt …" required aria-required="true" /></div>
    <label className="upload-field"><Upload /><span>Fotos oder Pläne auswählen<small>Optional · wird im E-Mail-Entwurf nicht automatisch angehängt</small></span><input type="file" multiple accept="image/*,.pdf" /></label>
    <button className="button button-primary submit-button" type="submit">Unverbindliches Angebot anfordern <ArrowRight size={17} /></button>
    <a className="whatsapp-form" href={contact.whatsapp}><MessageCircle /> Direkt per WhatsApp schreiben</a>
    {sent && <p className="form-status" role="status">Ihr E-Mail-Programm wird mit der Anfrage geöffnet.</p>}
  </form>;
}

function ContactCta() {
  return <section className="contact-cta"><div className="container cta-grid"><div className="cta-copy"><p className="eyebrow eyebrow-light">Jetzt Kontakt aufnehmen</p><h2>Sie planen ein Elektroprojekt?</h2><p>Fordern Sie jetzt unverbindlich ein Angebot an. Wir melden uns schnellstmöglich bei Ihnen.</p></div><ContactForm compact /></div></section>;
}

function Home() { return <><Hero /><ServicesSection /><ProjectsSection /><AboutSection /><ProcessSection /><ReviewRegionSection /><ContactCta /></>; }

function PageHero({ eyebrow, title, text, image = asset('hero-elektriker.webp'), children }) {
  return <section className="page-hero"><img src={image} alt="" /><div className="page-hero-overlay" /><div className="container page-hero-content"><p className="eyebrow eyebrow-light">{eyebrow}</p><h1>{title}</h1><p>{text}</p>{children || <Button to="/kontakt/">Projekt anfragen</Button>}</div></section>;
}

function Breadcrumb({ items }) {
  return <nav className="breadcrumb container" aria-label="Brotkrümelnavigation"><Link to="/">Startseite</Link>{items.map((x, i) => <React.Fragment key={x.label}><span>/</span>{x.to && i < items.length - 1 ? <Link to={x.to}>{x.label}</Link> : <span aria-current="page">{x.label}</span>}</React.Fragment>)}</nav>;
}

function ServicesPage() {
  return <><PageHero eyebrow="Leistungen" title="Elektrotechnik für Kempten und das Allgäu" text="Von sauberer Kabelverlegung bis zur modernen Energie- und Ladeinfrastruktur: Lösungen passend zu Gebäude, Nutzung und Zukunft." /><Breadcrumb items={[{ label: 'Leistungen' }]} /><section className="section"><div className="container"><SectionHeading eyebrow="Alles aus einer Hand" title="Unsere Leistungen im Überblick" /><div className="services-grid services-page-grid">{services.map(s => <ServiceCard service={s} key={s.slug} />)}</div></div></section><ProcessSection /><ContactCta /></>;
}

const faqBase = [
  ['In welchem Gebiet sind Sie tätig?', 'Unser Einsatzgebiet umfasst Kempten, das Oberallgäu und angrenzende Orte. Den konkreten Projektort klären wir direkt in der Anfrage.'],
  ['Arbeiten Sie für Privatkunden und Gewerbe?', 'Ja. Die Planung und Ausführung wird an Gebäudeart, Nutzung und betriebliche Anforderungen angepasst.'],
  ['Wie läuft eine Anfrage ab?', 'Nach einer kurzen Projektbeschreibung klären wir offene Punkte und stimmen bei Bedarf einen Vor-Ort-Termin ab. Danach kann ein transparentes Angebot erstellt werden.'],
  ['Kann ich Fotos oder Pläne mitsenden?', 'Ja. Nutzen Sie dafür Ihr E-Mail-Programm oder WhatsApp. So lassen sich Umfang und Leitungswege oft schneller einschätzen.'],
  ['Sind auch Arbeiten im Bestand möglich?', 'Ja. Vorhandene Installationen werden zunächst betrachtet, damit Erweiterungen und Sanierungen sinnvoll geplant werden können.'],
];

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  if (!service) return <NotFound />;
  const Icon = service.icon;
  return <><PageHero eyebrow={service.title} title={`${service.title} in Kempten und im Allgäu`} text={service.intro} image={service.image} /><Breadcrumb items={[{ label: 'Leistungen', to: '/leistungen/' }, { label: service.title }]} /><section className="section detail-intro"><div className="container detail-grid"><div><p className="eyebrow">Durchdacht geplant</p><h2>Fachgerechte Lösungen für Ihr Projekt</h2><p>{service.intro}</p><p>Im Mittelpunkt stehen eine klare Abstimmung, passende Leitungswege und eine Ausführung, die sich sauber in den Bauablauf einfügt.</p><Button to="/kontakt/">Projekt unverbindlich anfragen</Button></div><div className="detail-icon-panel"><Icon /><h3>Typische Arbeiten</h3><ul>{service.works.map(x => <li key={x}><Check />{x}</li>)}</ul></div></div></section><section className="section tint-section"><div className="container"><SectionHeading eyebrow="Warum Dauti Elektro" title="Persönlich, planbar und sauber ausgeführt" /><div className="value-grid">{benefitItems.map(([BIcon, text]) => <article key={text}><BIcon /><h3>{text}</h3><p>Direkte Abstimmung und eine Lösung, die zu Ihrem Projekt und den örtlichen Gegebenheiten passt.</p></article>)}</div></div></section><section className="section"><div className="container"><SectionHeading eyebrow="Häufige Fragen" title={`FAQ zur ${service.title}`} /><div className="faq-list">{faqBase.map(([q, a]) => <details key={q}><summary>{q}<ChevronDown /></summary><p>{a}</p></details>)}</div></div></section><ContactCta /></>;
}

function ProjectsPage() {
  const filters = ['Alle', 'Elektroinstallation', 'Kabelverlegung', 'PV', 'Wallbox', 'Sanierung', 'Gewerbe'];
  const [filter, setFilter] = useState('Alle');
  const shown = filter === 'Alle' ? projects : projects.filter(p => p.type === filter);
  return <><PageHero eyebrow="Referenzen" title="Elektro-Projekte aus der Region" text="Eine flexible Projektübersicht für Elektroinstallation, Kabelverlegung, Photovoltaik, Wallbox, Sanierung und Gewerbe." image={asset('project-pv-kempten.webp')} /><Breadcrumb items={[{ label: 'Projekte' }]} /><section className="section"><div className="container"><div className="filter-row" role="group" aria-label="Projekte filtern">{filters.map(f => <button className={filter === f ? 'active' : ''} onClick={() => setFilter(f)} key={f}>{f}</button>)}</div><div className="projects-grid projects-page-grid">{shown.map(p => <ProjectCard project={p} key={p.title} />)}</div><p className="demo-note prominent">Hinweis: Diese Einträge demonstrieren Aufbau und Filterfunktion. Vor der Veröffentlichung werden sie durch freigegebene, echte Projektdaten und Fotos ersetzt.</p></div></section><ContactCta /></>;
}

function AboutPage() {
  return <><PageHero eyebrow="Über uns" title="Elektroarbeiten aus der Region – persönlich und zuverlässig" text="Kurze Wege, direkte Abstimmung und fachgerechte Elektroarbeiten für Kempten und das Allgäu." image={asset('dauti-allgaeu-branded.webp')} /><Breadcrumb items={[{ label: 'Über uns' }]} /><section className="section"><div className="container detail-grid"><div><p className="eyebrow">Dauti Elektro Kabelverlegung</p><h2>Ein verlässlicher Ansprechpartner vor Ort</h2><p>Wir begleiten Privatkunden und Gewerbe bei Elektroinstallationen, Kabelverlegung und moderner Energieinfrastruktur. Dabei bleiben Ansprechpartner, Ablauf und nächste Schritte für Sie jederzeit klar.</p><p>Uns ist wichtig, dass eine Lösung nicht nur technisch passt, sondern auch sauber geplant, verständlich erklärt und zuverlässig umgesetzt wird.</p></div><div className="about-image"><img src={asset('dauti-allgaeu-branded.webp')} alt="Dauti-Elektro-Servicefahrzeug im Allgäu" width="1536" height="1024" /></div></div></section><section className="section tint-section"><div className="container"><SectionHeading eyebrow="Was uns wichtig ist" title="Handwerk, auf das Sie bauen können" /><div className="value-grid">{benefitItems.map(([Icon, text]) => <article key={text}><Icon /><h3>{text}</h3><p>Klare Kommunikation, nachvollziehbare Planung und eine sorgfältige Ausführung.</p></article>)}</div></div></section><ProcessSection /><ContactCta /></>;
}

function ContactPage() {
  return <><PageHero eyebrow="Kontakt" title="Lassen Sie uns über Ihr Elektroprojekt sprechen" text="Beschreiben Sie kurz Ihr Vorhaben. Wir melden uns schnellstmöglich zurück." /><Breadcrumb items={[{ label: 'Kontakt' }]} /><section className="section"><div className="container contact-page-grid"><div><p className="eyebrow">Direkter Kontakt</p><h2>So erreichen Sie uns</h2><p>Für eine schnelle Einschätzung helfen Projektort, gewünschte Leistung und – falls vorhanden – Fotos oder Pläne.</p><div className="contact-cards"><a href={contact.phoneHref}><Phone /><span><small>Telefon</small><b>{contact.phoneDisplay}</b></span></a><a href={contact.whatsapp}><MessageCircle /><span><small>WhatsApp</small><b>Nachricht schreiben</b></span></a><a href={`mailto:${contact.email}`}><Mail /><span><small>E-Mail</small><b>{contact.email}</b></span></a><div><MapPin /><span><small>Einsatzgebiet</small><b>Kempten & Allgäu</b></span></div></div><p className="verification-note">Öffnungszeiten und eine Straßenanschrift werden erst nach verifizierter Freigabe ergänzt.</p></div><ContactForm /></div></section></>;
}

function LegalPage({ privacy = false }) {
  return <><PageHero eyebrow="Rechtliches" title={privacy ? 'Datenschutzerklärung' : 'Impressum'} text="Vorbereitete rechtliche Seite für den Website-Relaunch." image={asset('dauti-allgaeu-branded.webp')}> </PageHero><Breadcrumb items={[{ label: privacy ? 'Datenschutz' : 'Impressum' }]} /><section className="section legal"><div className="container narrow"><span className="demo-badge">Vor Veröffentlichung vervollständigen</span><h2>{privacy ? 'Hinweise zum Datenschutz' : 'Angaben gemäß § 5 DDG'}</h2>{privacy ? <><p>Diese Seite ist technisch vorbereitet. Die vollständige Datenschutzerklärung muss vor Veröffentlichung anhand des tatsächlichen Hostings, der eingesetzten Formulardienste, Analysewerkzeuge und externen Inhalte erstellt und rechtlich geprüft werden.</p><h3>Kontaktaufnahme</h3><p>Bei einer Kontaktaufnahme per Telefon, WhatsApp oder E-Mail werden die übermittelten Angaben zur Bearbeitung der Anfrage verarbeitet. Umfang, Rechtsgrundlage, Speicherdauer und Empfänger sind in der finalen Erklärung konkret zu dokumentieren.</p><h3>Ihre Rechte</h3><p>Die finalen Hinweise müssen insbesondere Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Beschwerderecht erläutern.</p></> : <><p><strong>Dauti Elektro Kabelverlegung</strong><br />Kempten / Allgäu<br />Deutschland</p><p>Telefon: <a href={contact.phoneHref}>{contact.phoneDisplay}</a><br />E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a></p><p>Vertretungsberechtigte Person, vollständige ladungsfähige Anschrift, Rechtsform, Registerangaben und gegebenenfalls Umsatzsteuer-ID sind noch zu verifizieren und vor Veröffentlichung einzutragen.</p></>}</div></section></>;
}

function Footer() {
  return <footer className="site-footer"><div className="footer-contact"><div className="container"><a href={contact.phoneHref}><PhoneCall /><span><b>{contact.phoneDisplay}</b><small>Jetzt anrufen</small></span></a><a href={contact.whatsapp}><MessageCircle /><span><b>WhatsApp schreiben</b><small>Schnelle Antwort</small></span></a><a href={`mailto:${contact.email}`}><Mail /><span><b>{contact.email}</b><small>E-Mail schreiben</small></span></a></div></div><div className="container footer-main"><Logo /><div><h3>Navigation</h3><Link to="/">Startseite</Link><Link to="/leistungen/">Leistungen</Link><Link to="/projekte/">Projekte</Link><Link to="/ueber-uns/">Über uns</Link><Link to="/kontakt/">Kontakt</Link></div><div><h3>Leistungen</h3>{services.slice(0, 5).map(s => <Link to={`/leistungen/${s.slug}/`} key={s.slug}>{s.title}</Link>)}</div><div><h3>Rechtliches</h3><Link to="/impressum/">Impressum</Link><Link to="/datenschutz/">Datenschutz</Link></div><div className="footer-slogan"><Zap /><p>Starke Verbindungen<br />für eine sichere Zukunft.</p><span><Camera aria-label="Social Media" /></span></div></div><div className="container copyright"><span>© {new Date().getFullYear()} Dauti Elektro Kabelverlegung · Kempten & Allgäu</span><span>Website-Relaunch · Präsentationsstand</span></div></footer>;
}

function MobileContactBar() { return <div className="mobile-contact-bar"><a href={contact.phoneHref}><Phone />Anrufen</a><a href={contact.whatsapp}><MessageCircle />WhatsApp</a><Link to="/kontakt/"><FileText />Anfrage</Link></div>; }

function NotFound() { return <section className="not-found"><div><Zap /><h1>Seite nicht gefunden</h1><p>Die angeforderte Seite ist nicht verfügbar.</p><Button to="/">Zur Startseite</Button></div></section>; }

function SeoController() {
  const location = useLocation();
  useEffect(() => {
    const service = services.find(s => location.pathname === `/leistungen/${s.slug}/`);
    const meta = service ? [`${service.title} Kempten & Allgäu | Dauti Elektro`, `${service.title} für Privatkunden und Gewerbe in Kempten und im Allgäu – jetzt Projekt anfragen.`] : META[location.pathname] || META['/'];
    document.title = meta[0];
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = meta[1];
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = `https://dauti-elektro-kabelverlegung.de${location.pathname}`;
    const socialMeta = {
      'og:title': meta[0],
      'og:description': meta[1],
      'og:type': 'website',
      'og:url': canonical.href,
      'og:image': 'https://dauti-elektro-kabelverlegung.de/assets/hero-elektriker.webp',
      'twitter:card': 'summary_large_image',
    };
    Object.entries(socialMeta).forEach(([property, content]) => {
      const attribute = property.startsWith('twitter:') ? 'name' : 'property';
      let tag = document.head.querySelector(`meta[${attribute}="${property}"]`);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attribute, property); document.head.appendChild(tag); }
      tag.content = content;
    });
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function SchemaMarkup() {
  const schema = { '@context': 'https://schema.org', '@type': 'Electrician', name: 'Dauti Elektro Kabelverlegung', areaServed: ['Kempten', 'Allgäu'], telephone: '+49 176 75991602', email: contact.email, url: 'https://dauti-elektro-kabelverlegung.de/' };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function App() {
  return <><SeoController /><SchemaMarkup /><Header /><main id="main"><Routes><Route path="/" element={<Home />} /><Route path="/leistungen/" element={<ServicesPage />} /><Route path="/leistungen/:slug/" element={<ServiceDetail />} /><Route path="/projekte/" element={<ProjectsPage />} /><Route path="/ueber-uns/" element={<AboutPage />} /><Route path="/kontakt/" element={<ContactPage />} /><Route path="/impressum/" element={<LegalPage />} /><Route path="/datenschutz/" element={<LegalPage privacy />} /><Route path="*" element={<NotFound />} /></Routes></main><Footer /><MobileContactBar /></>;
}
