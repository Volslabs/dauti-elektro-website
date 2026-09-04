import {
  BatteryCharging, Building2, Cable, CarFront, Hammer, HousePlug,
} from 'lucide-react';

export const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

export const contact = {
  phoneDisplay: '0176 75991602',
  phoneHref: 'tel:+4917675991602',
  whatsapp: 'https://wa.me/4917675991602?text=Hallo%20Dauti%20Elektro%2C%20ich%20m%C3%B6chte%20ein%20Projekt%20anfragen.',
  email: 'dauti.kabelverlegung@hotmail.com',
};

export const services = [
  {
    slug: 'kabelverlegung',
    title: 'Kabelverlegung',
    icon: Cable,
    image: asset('project-kabelverlegung-gewerbe.webp'),
    short: 'Starkstrom, Datenleitungen, Kabeltrassen und professionelle Leitungsverlegung.',
    intro: 'Strukturierte Leitungswege bilden die Basis jeder sicheren und zukunftsfähigen Elektroanlage – im privaten Neubau ebenso wie in Gewerbe und Industrie.',
    works: ['Starkstromleitungen', 'Schwachstrom', 'Daten- und Netzwerkkabel', 'Kabeltrassen', 'Kabelzug', 'Neubau und Sanierung', 'Gewerbe und Industrie'],
  },
  {
    slug: 'photovoltaik-speicher',
    title: 'Photovoltaik & Speicher',
    icon: BatteryCharging,
    image: asset('project-pv-kempten.webp'),
    short: 'PV-Anlagen, Wechselrichter, Batteriespeicher und intelligentes Energiemanagement.',
    intro: 'Eine abgestimmte Photovoltaikanlage macht selbst erzeugten Strom planbar nutzbar. Wir betrachten Module, Speicher und Verteilung als Gesamtsystem.',
    works: ['PV-Anlagen', 'Batteriespeicher', 'Wechselrichter', 'Energiemanagement', 'Eigenverbrauchsoptimierung', 'Anlagenprüfung'],
  },
  {
    slug: 'elektroinstallation',
    title: 'Elektroinstallation',
    icon: HousePlug,
    image: asset('project-elektroinstallation-neubau.webp'),
    short: 'Neubau, Umbau und fachgerechte Erweiterung elektrischer Anlagen.',
    intro: 'Von der ersten Leitungsplanung bis zur fertigen Verteilung entsteht eine Installation, die zu Gebäude, Nutzung und zukünftigen Anforderungen passt.',
    works: ['Elektroplanung', 'Unterverteilungen', 'Steckdosen und Schalter', 'Beleuchtung', 'Smart-Home-Vorbereitung', 'Prüfung und Dokumentation'],
  },
  {
    slug: 'wallbox-emobilitaet',
    title: 'Wallbox & E-Mobilität',
    icon: CarFront,
    image: asset('project-wallbox-kempten.webp'),
    short: 'Sichere Ladelösungen für Ihr Zuhause oder Ihr Unternehmen.',
    intro: 'Wir planen den Ladepunkt passend zu Netzanschluss, Fahrzeug und Nutzung – auf Wunsch vorbereitet für Photovoltaik und intelligentes Lastmanagement.',
    works: ['Wallbox-Montage', 'Leitungsweg', 'Absicherung', 'Lastmanagement', 'PV-Überschussladen', 'Prüfung und Inbetriebnahme'],
  },
  {
    slug: 'sanierung',
    title: 'Sanierung',
    icon: Hammer,
    image: asset('project-sanierung-haus.webp'),
    short: 'Moderne Elektroinstallationen für Renovierung und Bestandsgebäude.',
    intro: 'Bei einer Sanierung verbinden wir vorhandene Bausubstanz mit heutigen Anforderungen an Sicherheit, Komfort und Energieeffizienz.',
    works: ['Bestandsaufnahme', 'Erneuerung alter Leitungen', 'Verteilertausch', 'FI- und Leitungsschutz', 'Nachrüstung', 'Modernisierung im bewohnten Gebäude'],
  },
  {
    slug: 'gewerbe-industrie',
    title: 'Gewerbe & Industrie',
    icon: Building2,
    image: asset('project-verteilung-gewerbehalle.webp'),
    short: 'Individuelle Lösungen für Unternehmen, Hallen und Produktionsstätten.',
    intro: 'Gewerbliche Elektroprojekte brauchen belastbare Planung, klare Abstimmung und saubere Ausführung im laufenden Betrieb.',
    works: ['Halleninstallationen', 'Kabeltragsysteme', 'Maschinenanschlüsse', 'Beleuchtung', 'Netzwerkverkabelung', 'Erweiterungen im Bestand'],
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
