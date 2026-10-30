export type Lang = 'fi' | 'en';

export interface LandingPage {
  path: string;
  navLabel: Record<Lang, string>;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  h1: Record<Lang, string>;
  intro: Record<Lang, string>;
  sections: Record<Lang, { heading: string; paragraphs: string[] }[]>;
  faq: Record<Lang, { q: string; a: string }[]>;
}

const prices = {
  fi: [
    'Pakettiauto + kuljettaja: 50 € / h',
    '1 muuttomies + auto: 75 € / h',
    '2 muuttomiestä + auto: 100 € / h',
    '3 muuttomiestä + auto: 125 € / h',
  ],
  en: [
    'Van + driver: €50 / h',
    '1 mover + van: €75 / h',
    '2 movers + van: €100 / h',
    '3 movers + van: €125 / h',
  ],
};

const priceNote = {
  fi: 'Hinnat sisältävät alv 25,5 %. Vähimmäisvaraus on yksi tunti, ja sen jälkeen laskutus jatkuu 30 minuutin jaksoissa. Lopullinen hinta riippuu työn sisällöstä, matkasta ja kantamisen tarpeesta.',
  en: 'Prices include Finnish VAT (25.5%). Minimum booking is one hour, after which billing continues in 30-minute steps. The final price depends on the job, distance and carrying needs.',
};

const area = {
  fi: 'Toimimme Tampereella ja Pirkanmaalla (mm. Nokia, Ylöjärvi, Pirkkala, Lempäälä ja Kangasala). Kuljetus muualle Suomeen onnistuu tarjouksella.',
  en: 'We operate in Tampere and Pirkanmaa (including Nokia, Ylöjärvi, Pirkkala, Lempäälä and Kangasala). Transport elsewhere in Finland is available by quotation.',
};

export const landingPages: LandingPage[] = [
  {
    path: '/muuttopalvelu-tampere',
    navLabel: { fi: 'Muuttopalvelu Tampere', en: 'Moving service Tampere' },
    title: {
      fi: 'Muuttopalvelu Tampere | MoveX Logistics',
      en: 'Moving Service in Tampere | MoveX Logistics',
    },
    description: {
      fi: 'Muuttopalvelu Tampereella: pakettiauto ja kuljettaja tai 1–3 muuttomiestä. Hinnat alkaen 50 €/h (sis. alv 25,5 %). Pyydä tarjous.',
      en: 'Moving service in Tampere: van and driver or 1–3 movers. Prices from €50/hour, including Finnish VAT (25.5%). Request a quote.',
    },
    h1: { fi: 'Muuttopalvelu Tampere', en: 'Moving service in Tampere' },
    intro: {
      fi: 'MoveX Logistics auttaa asunto-, talo- ja pienyritysmuutoissa Tampereella ja Pirkanmaalla. Valitse pelkkä pakettiauto ja kuljettaja tai lisää avuksi 1–3 muuttomiestä.',
      en: 'MoveX Logistics helps with apartment, house and small business moves in Tampere and Pirkanmaa. Choose just a van and driver, or add 1–3 movers.',
    },
    sections: {
      fi: [
        {
          heading: 'Muuttoapu Tampereella',
          paragraphs: [
            'Muuttoapu Tampereella voi tarkoittaa pelkkää kuljetusta tai apua tavaroiden kantamiseen, lastaukseen ja purkuun. Valitse tarpeeseesi pakettiauto ja kuljettaja tai 1–3 muuttomiestä. Kerro tarjouspyynnössä muuton tiedot, jotta saat sopivan hinnan tai tarjouksen.',
          ],
        },
        { heading: 'Muuttopalvelun hinnat', paragraphs: [...prices.fi, priceNote.fi] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
        {
          heading: 'Näin muutto etenee',
          paragraphs: [
            'Kerro muuton ajankohta, osoitteet ja tavaroiden määrä. Saat selkeän hinnan tai tarjouksen työn tietojen perusteella. Lisätietoja löydät myös oppaasta Muutto Tampereella: tarkistuslista.',
          ],
        },
      ],
      en: [
        {
          heading: 'Moving help in Tampere',
          paragraphs: [
            'Moving help in Tampere can mean transport only or help carrying, loading and unloading your belongings. Choose a van and driver or 1–3 movers to suit your needs. Share the move details to receive a suitable price or quote.',
          ],
        },
        { heading: 'Moving service prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Service area', paragraphs: [area.en] },
        {
          heading: 'How a move works',
          paragraphs: [
            'Tell us the moving date, addresses and amount of items. You get a clear price or a quotation based on the job details.',
          ],
        },
      ],
    },
    faq: {
      fi: [
        { q: 'Sisältyvätkö hinnat alv:n?', a: 'Kyllä. Kaikki näytetyt tuntihinnat sisältävät alv 25,5 %.' },
        { q: 'Mikä on vähimmäisvaraus?', a: 'Vähimmäisvaraus on yksi tunti. Sen jälkeen laskutus jatkuu 30 minuutin jaksoissa.' },
        { q: 'Autatteko kantamisessa?', a: 'Kyllä. Kanto-, lastaus- ja purkuapua saa 1, 2 tai 3 muuttomiehen palvelulla. Pakettiauto + kuljettaja on tarkoitettu pääasiassa kuljetukseen.' },
      ],
      en: [
        { q: 'Do the prices include VAT?', a: 'Yes. All hourly prices shown include Finnish VAT (25.5%).' },
        { q: 'What is the minimum booking?', a: 'The minimum booking is one hour. After that, billing continues in 30-minute steps.' },
        { q: 'Do you help with carrying?', a: 'Yes. Carrying, loading and unloading help is included with the 1, 2 or 3 mover services. Van + driver is mainly for transport.' },
      ],
    },
  },
  {
    path: '/muuttofirma-tampere',
    navLabel: { fi: 'Muuttofirma Tampere', en: 'Moving company Tampere' },
    title: {
      fi: 'Muuttofirma Tampere | MoveX Logistics',
      en: 'Moving Company in Tampere | MoveX Logistics',
    },
    description: {
      fi: 'Muuttofirma Tampereella koteihin ja pienyrityksille. Pakettiauto ja kuljettaja alkaen 50 €/h, 1 muuttomies ja auto alkaen 75 €/h (sis. alv 25,5 %). Pyydä tarjous.',
      en: 'Moving company in Tampere for homes and small businesses. Van and driver from €50/hour; 1 mover and van from €75/hour (incl. Finnish VAT 25.5%). Request a quote.',
    },
    h1: { fi: 'Muuttofirma Tampere', en: 'Moving company in Tampere' },
    intro: {
      fi: 'MoveX Logistics on tamperelainen muutto- ja kuljetusyritys (Y-tunnus 3615629-3). Tarjoamme ammattimaisen kuljettajan, pakettiauton sekä muutto- ja kiinnityskaluston.',
      en: 'MoveX Logistics is a Tampere-based moving and transport company (business ID 3615629-3). We provide a professional driver, a van and moving and securing equipment.',
    },
    sections: {
      fi: [
        { heading: 'Muuttofirman palvelut', paragraphs: ['Asunto-, talo- ja pienyritysmuutot, huonekalu- ja esinekuljetukset, pakettiauto + kuljettaja sekä kaukokuljetus ympäri Suomea kiinteällä tarjouksella.'] },
        { heading: 'Hinnat', paragraphs: [...prices.fi, priceNote.fi] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        { heading: 'Moving company services', paragraphs: ['Apartment, house and small business moves, furniture and item transport, van + driver, and long-distance transport across Finland with a fixed quotation.'] },
        { heading: 'Prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Service area', paragraphs: [area.en] },
      ],
    },
    faq: {
      fi: [
        { q: 'Mitä muuttofirman hinta sisältää?', a: 'Tuntihinta sisältää pakettiauton ja kuljettajan tai valitsemasi muuttomiehet. Hinnat sisältävät alv 25,5 %.' },
        { q: 'Toimitteko Tampereen ulkopuolella?', a: 'Kyllä. Toimimme Pirkanmaalla ja kuljetamme ympäri Suomea tarjouksella.' },
        { q: 'Kuinka tarjouksen saa?', a: 'Kerro työn tiedot tarjouslomakkeella, WhatsAppilla tai puhelimitse, niin saat selkeän hinnan tai tarjouksen.' },
      ],
      en: [
        { q: 'What does the price include?', a: 'The hourly price includes a van and driver or your chosen movers. Prices include Finnish VAT (25.5%).' },
        { q: 'Do you work outside Tampere?', a: 'Yes. We operate in Pirkanmaa and transport across Finland by quotation.' },
        { q: 'How do I get a quote?', a: 'Send the job details via the quote form, WhatsApp or phone and you will get a clear price or quotation.' },
      ],
    },
  },
  {
    path: '/huonekalukuljetus-tampere',
    navLabel: { fi: 'Huonekalukuljetus Tampere', en: 'Furniture transport Tampere' },
    title: {
      fi: 'Huonekalukuljetus Tampere | MoveX Logistics',
      en: 'Furniture Transport in Tampere | MoveX Logistics',
    },
    description: {
      fi: 'Huonekalukuljetus Tampereella: sohvat, sängyt, kodinkoneet ja Tori.fi-ostokset. Pakettiauto ja kuljettaja alkaen 50 €/h (sis. alv 25,5 %).',
      en: 'Furniture transport in Tampere for sofas, beds, appliances and Tori.fi purchases. Van and driver from €50/hour, including Finnish VAT (25.5%).',
    },
    h1: { fi: 'Huonekalukuljetus Tampere', en: 'Furniture transport in Tampere' },
    intro: {
      fi: 'Kuljetamme sohvia, sänkyjä, pöytiä, kodinkoneita, Tori.fi-ostoksia, kauppanoutoja ja muita sopivia esineitä Tampereella ja Pirkanmaalla.',
      en: 'We transport sofas, beds, tables, appliances, Tori.fi purchases, store pickups and other suitable items in Tampere and Pirkanmaa.',
    },
    sections: {
      fi: [
        { heading: 'Huonekalukuljetuksen hinta', paragraphs: ['Pakettiauto + kuljettaja alkaen 50 € / h.', priceNote.fi] },
        { heading: 'Kerro tarjouspyynnössä', paragraphs: ['Esineen koko ja paino, nouto- ja toimitusosoite, kerrokset ja hissi sekä tarvitaanko kantoapua. Näin saat mahdollisimman tarkan arvion. Lue lisää oppaasta Huonekalukuljetus Tampereella: mitä kannattaa ilmoittaa?'] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        { heading: 'Furniture transport price', paragraphs: ['Van + driver from €50 / h.', priceNote.en] },
        { heading: 'What to tell us in your request', paragraphs: ['Item size and weight, pickup and delivery addresses, floors and elevator, and whether you need carrying help. This gives you the most accurate estimate.'] },
        { heading: 'Service area', paragraphs: [area.en] },
      ],
    },
    faq: {
      fi: [
        { q: 'Voitteko kuljettaa huonekaluja?', a: 'Kyllä. Kuljetamme sohvia, sänkyjä, pöytiä, kodinkoneita, Tori.fi-ostoksia, kauppanoutoja ja muita sopivia esineitä.' },
        { q: 'Autatteko kantamisessa?', a: 'Kyllä. Kanto-, lastaus- ja purkuapua saa 1, 2 tai 3 muuttomiehen palvelulla. Pakettiauto + kuljettaja on tarkoitettu pääasiassa kuljetukseen.' },
        { q: 'Mikä on vähimmäisvaraus?', a: 'Vähimmäisvaraus on yksi tunti. Sen jälkeen laskutus jatkuu 30 minuutin jaksoissa.' },
      ],
      en: [
        { q: 'Can you transport furniture?', a: 'Yes. We transport sofas, beds, tables, appliances, Tori.fi purchases, store pickups and other suitable items.' },
        { q: 'Do you help with carrying?', a: 'Yes. Carrying, loading and unloading help is included with the 1, 2 or 3 mover services. Van + driver is mainly for transport.' },
        { q: 'What is the minimum booking?', a: 'The minimum booking is one hour. After that, billing continues in 30-minute steps.' },
      ],
    },
  },
];

export function getLandingPage(path: string) {
  return landingPages.find((p) => p.path === path);
}
