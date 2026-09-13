import {
  BatteryCharging, Building2, Cable, CarFront, Hammer, HousePlug,
} from 'lucide-react';

export const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

export const contact = {
  businessName: 'Drilon Dauti Leitung und Kabelverlegung',
  owner: 'Drilon Dauti',
  legalForm: 'Einzelunternehmen',
  phoneDisplay: '0176 75991602',
  phoneHref: 'tel:+4917675991602',
  whatsapp: 'https://wa.me/4917675991602?text=Hallo%20Dauti%20Elektro%2C%20ich%20m%C3%B6chte%20ein%20Projekt%20anfragen.',
  email: 'dauti.kabelverlegung@hotmail.com',
  street: 'Sängerstraße 8',
  postalCode: '87435',
  city: 'Kempten (Allgäu)',
  chamber: 'Handwerkskammer für Schwaben',
  chamberUrl: 'https://www.hwk-schwaben.de/',
  registrationNumber: '6076247',
  registeredTrade: 'Kabelverleger im Hochbau (ohne Anschlussarbeiten)',
  registeredSince: '08.04.2024',
};

export const services = [
  {
    slug: 'kabelverlegung',
    title: 'Kabelverlegung',
    icon: Cable,
    image: asset('project-kabelverlegung-gewerbe.webp'),
    short: 'Professionelle Leitungs- und Kabelverlegung im Hochbau – ausdrücklich ohne Anschlussarbeiten.',
    intro: 'Strukturierte Leitungswege bilden die Basis jeder zukunftsfähigen Elektroanlage. Dauti übernimmt die fachgerechte Kabelverlegung im Hochbau; elektrische Anschluss- und Prüfarbeiten werden durch eingetragene Partnerbetriebe ausgeführt.',
    works: ['Leitungs- und Kabelverlegung', 'Daten- und Netzwerkkabel', 'Kabeltrassen', 'Kabelzug', 'Neubau und Sanierung', 'Gewerbe und Industrie'],
    partner: false,
  },
  {
    slug: 'photovoltaik-speicher',
    title: 'Photovoltaik & Speicher',
    icon: BatteryCharging,
    image: asset('project-pv-kempten.webp'),
    short: 'Kabelwege für PV-Projekte; Anschluss und Inbetriebnahme durch eingetragene Partnerbetriebe.',
    intro: 'Dauti übernimmt die Leitungs- und Kabelverlegung für Photovoltaikprojekte. Planung, Montage, elektrischer Anschluss, Prüfung und Inbetriebnahme erfolgen – soweit zulassungspflichtig – durch entsprechend eingetragene Partnerbetriebe.',
    works: ['Kabelwege für PV-Anlagen', 'Leitungsverlegung zum Speicher', 'Kabeltrassen', 'Projektabstimmung', 'Partnerbetrieb für Anschluss und Prüfung'],
    partner: true,
  },
  {
    slug: 'elektroinstallation',
    title: 'Elektroinstallation',
    icon: HousePlug,
    image: asset('project-elektroinstallation-neubau.webp'),
    short: 'Kabelverlegung im Neubau und Bestand; Elektroanschlüsse durch eingetragene Partnerbetriebe.',
    intro: 'Dauti verlegt die benötigten Leitungen und Kabel im Hochbau. Zulassungspflichtige Planung, Anschlüsse, Verteilungen, Prüfungen und Inbetriebnahmen übernehmen eingetragene Elektrotechnik-Partnerbetriebe.',
    works: ['Leitungswege und Kabelzug', 'Vorbereitung im Neubau', 'Kabelverlegung im Bestand', 'Abstimmung mit anderen Gewerken', 'Partnerbetrieb für Elektroanschlüsse'],
    partner: true,
  },
  {
    slug: 'wallbox-emobilitaet',
    title: 'Wallbox & E-Mobilität',
    icon: CarFront,
    image: asset('project-wallbox-kempten.webp'),
    short: 'Leitungsverlegung zur Wallbox; Anschluss und Inbetriebnahme durch eingetragene Partnerbetriebe.',
    intro: 'Dauti bereitet den Leitungsweg vor und übernimmt die Kabelverlegung bis zum vorgesehenen Ladepunkt. Auslegung, Absicherung, Anschluss, Prüfung und Inbetriebnahme erfolgen durch einen eingetragenen Elektrotechnik-Partnerbetrieb.',
    works: ['Leitungsweg zur Wallbox', 'Kabelzug und Kabeltrassen', 'PV-Vorbereitung', 'Abstimmung des Projektablaufs', 'Partnerbetrieb für Anschluss und Inbetriebnahme'],
    partner: true,
  },
  {
    slug: 'sanierung',
    title: 'Sanierung',
    icon: Hammer,
    image: asset('project-sanierung-haus.webp'),
    short: 'Neue Leitungswege und Kabelverlegung bei Renovierung und Sanierung.',
    intro: 'Bei Sanierungen übernimmt Dauti die Leitungs- und Kabelverlegung im Hochbau. Eingriffe in die elektrische Anlage, Anschlüsse, Schutzmaßnahmen und Prüfungen werden von eingetragenen Partnerbetrieben ausgeführt.',
    works: ['Neue Leitungswege', 'Kabelverlegung im Bestand', 'Vorbereitung für Modernisierung', 'Arbeiten im bewohnten Gebäude', 'Partnerbetrieb für Anschluss und Prüfung'],
    partner: true,
  },
  {
    slug: 'gewerbe-industrie',
    title: 'Gewerbe & Industrie',
    icon: Building2,
    image: asset('project-verteilung-gewerbehalle.webp'),
    short: 'Kabelwege und Leitungsverlegung für Unternehmen, Hallen und Produktionsstätten.',
    intro: 'Dauti übernimmt Kabeltragsysteme sowie Leitungs- und Kabelverlegung für gewerbliche Projekte. Elektrische Anschlüsse, Prüfungen und Inbetriebnahmen erfolgen durch eingetragene Partnerbetriebe.',
    works: ['Kabeltragsysteme', 'Leitungs- und Kabelverlegung', 'Daten- und Netzwerkkabel', 'Erweiterungen im Bestand', 'Partnerbetrieb für Anschlüsse und Prüfung'],
    partner: true,
  },
];

export const projects = [
  { title: 'PV-Anlage in Kempten', place: 'Kempten', facts: '12,5 kWp · Speicher · Energiemanagement', type: 'PV', image: asset('project-pv-kempten.webp') },
  { title: 'Kabelverlegung Gewerbe', place: 'Allgäu', facts: 'Kabeltrassen · Datenleitungen', type: 'Kabelverlegung', image: asset('project-kabelverlegung-gewerbe.webp') },
  { title: 'Elektroinstallation Neubau', place: 'Durach', facts: 'Planung · Verteilung · Beleuchtung', type: 'Elektroinstallation', image: asset('project-elektroinstallation-neubau.webp') },
  { title: 'Wallbox-Installation', place: 'Kempten', facts: '11 kW · PV-Vorbereitung', type: 'Wallbox', image: asset('project-wallbox-kempten.webp') },
  { title: 'Sanierung Einfamilienhaus', place: 'Oberallgäu', facts: 'Verteilung · Leitungen · Schalter', type: 'Sanierung', image: asset('project-sanierung-haus.webp') },
  { title: 'Verteilung Gewerbehalle', place: 'Memmingen', facts: 'Unterverteilung · Kabelwege', type: 'Gewerbe', image: asset('project-verteilung-gewerbehalle.webp') },
];

export const locations = ['Kempten', 'Durach', 'Waltenhofen', 'Buchenberg', 'Dietmannsried', 'Immenstadt', 'Sonthofen', 'Memmingen', 'und Umgebung'];
