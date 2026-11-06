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
  fi: 'Tarjoamme muuttoapua Tampereella ja lähialueilla: Pirkkala, Nokia, Ylöjärvi, Lempäälä ja Kangasala. Kuljetukset muualle Suomeen onnistuvat tarjouksella.',
  en: 'We operate in Tampere and Pirkanmaa (including Nokia, Ylöjärvi, Pirkkala, Lempäälä and Kangasala). Transport elsewhere in Finland is available by quotation.',
};


export interface LocalAreaConfig {
  slug: string;
  name: string;
  fiLocative: string;
  fiElative: string;
  enName: string;
}

const localAreas: LocalAreaConfig[] = [
  { slug: 'pirkkala', name: 'Pirkkala', fiLocative: 'Pirkkalassa', fiElative: 'Pirkkalasta', enName: 'Pirkkala' },
  { slug: 'nokia', name: 'Nokia', fiLocative: 'Nokialla', fiElative: 'Nokiasta', enName: 'Nokia' },
  { slug: 'ylojarvi', name: 'Ylöjärvi', fiLocative: 'Ylöjärvellä', fiElative: 'Ylöjärveltä', enName: 'Ylöjärvi' },
  { slug: 'lempaala', name: 'Lempäälä', fiLocative: 'Lempäälässä', fiElative: 'Lempäälästä', enName: 'Lempäälä' },
  { slug: 'kangasala', name: 'Kangasala', fiLocative: 'Kangasalla', fiElative: 'Kangasalta', enName: 'Kangasala' },
];

export const localAreaLandingPages: LandingPage[] = localAreas.map((place) => ({
  path: `/muuttopalvelu-${place.slug}`,
  navLabel: { fi: `Muuttopalvelu ${place.name}`, en: `Moving service ${place.enName}` },
  title: {
    fi: `Muuttopalvelu ${place.name} | Muuttoapu ja kuljetus – MoveX Logistics`,
    en: `Moving Service in ${place.enName} | MoveX Logistics`,
  },
  description: {
    fi: `Muuttopalvelu ${place.name}: muuttoapu, muuttoauto kuljettajalla ja huonekalukuljetukset. Pakettiauto + kuljettaja 50 €/h sis. alv 25,5 %. Pyydä tarjous.`,
    en: `Moving help in ${place.enName}, Pirkanmaa. Van and driver from €50/hour including Finnish VAT, with optional carrying help. Request a quote from MoveX Logistics.`,
  },
  h1: { fi: `Muuttopalvelu ${place.name}`, en: `Moving service in ${place.enName}` },
  intro: {
    fi: `MoveX Logistics tarjoaa muuttoapua ${place.fiLocative} ja muualla Pirkanmaalla. Voit tilata pakettiauton kuljettajalla pelkkään kuljetukseen tai lisätä 1–3 muuttomiestä kantamiseen, lastaukseen ja purkuun. Palvelemme pieniä ja tavallisia kotimuuttoja sekä yksittäisten tavaroiden kuljetuksia.`,
    en: `MoveX Logistics provides moving help in ${place.enName} and across Pirkanmaa. Book a van and driver for transport, or add 1–3 movers for carrying, loading and unloading. We help with smaller home moves and suitable single-item deliveries.`,
  },
  sections: {
    fi: [
      { heading: `Muuttoapu ja muuttoauto ${place.fiLocative}`, paragraphs: [`Kun etsit muuttoapua ${place.fiLocative}, muuttofirmaa ${place.name} tai muuttoautoa kuljettajalla, voit pyytää MoveXilta tarjouksen paikallisesta muutosta tai kuljetuksesta. Muutto voi alkaa ${place.fiElative}, päättyä sinne tai kulkea Tampereen ja muun Pirkanmaan välillä. Hinta ja saatavuus vahvistetaan aina nouto- ja toimitusosoitteiden sekä työn tietojen perusteella.`] },
      { heading: 'Pieni muutto, yksiön muutto ja kantamisapu', paragraphs: [`Palvelu sopii esimerkiksi yksiön muuttoon, opiskelijamuuttoon, pienen asunnon muuttoon tai muutaman huonekalun siirtoon. Pakettiauto + kuljettaja sopii kuljetukseen. Jos tarvitset apua portaissa, lastauksessa tai purkamisessa, voit valita lisäksi 1, 2 tai 3 muuttomiestä.`] },
      { heading: 'Huonekalukuljetus ja tavaran nouto', paragraphs: [`Voit pyytää sohvan, sängyn, pöydän, kodinkoneen tai muun sopivan tavaran kuljetusta ${place.fiLocative}. Nouto voi olla esimerkiksi Tori.fi-myyjältä tai kaupasta. Ilmoita tavaran mitat ja paino sekä kerro, tarvitaanko kantamisapua. Tarkistamme kuljetuksen sopivuuden auton kapasiteetin ja kuorman tietojen perusteella.`] },
      { heading: 'Muuttopalvelun hinnat', paragraphs: [...prices.fi, priceNote.fi] },
      { heading: 'Näin pyydät tarjouksen', paragraphs: [`Lähetä nouto- ja toimitusosoitteet, toivottu päivä, tavaroiden määrä, kerrokset ja hissitiedot. Huonekalukuljetuksessa ilmoita myös suurimpien esineiden mitat ja paino. Näillä tiedoilla voimme arvioida työn keston ja vahvistaa hinnan ennen työn aloittamista.`] },
    ],
    en: [
      { heading: `Moving help and a moving van in ${place.enName}`, paragraphs: [`If you are looking for a moving company in ${place.enName}, moving help or a van with a driver, you can request a quote from MoveX Logistics. A move can start or finish in ${place.enName}, or connect the town with Tampere and other parts of Pirkanmaa. Availability and the final price are confirmed using the pickup and delivery addresses and job details.`] },
      { heading: 'Small moves and carrying help', paragraphs: ['The service is suitable for a studio flat, student move, smaller home move or a few pieces of furniture. Van + driver is intended for transport. If you need help with stairs, loading or unloading, you can add 1, 2 or 3 movers.'] },
      { heading: 'Furniture transport and item collection', paragraphs: [`You can request transport for a sofa, bed, table, appliance or another suitable item in ${place.enName}. Pickups can be arranged from a Tori.fi seller or a shop. Tell us the item dimensions and weight and whether carrying help is needed. We check that the load is suitable for the van before confirming the job.`] },
      { heading: 'Moving service prices', paragraphs: [...prices.en, priceNote.en] },
      { heading: 'How to request a quote', paragraphs: ['Send the pickup and delivery addresses, preferred date, amount of belongings, floors and elevator access. For furniture transport, include the dimensions and weight of the largest items. This helps us estimate the work and confirm the price before starting.'] },
    ],
  },
  faq: {
    fi: [
      { q: `Palveletteko ${place.fiLocative}?`, a: `Kyllä. MoveX tarjoaa muutto- ja kuljetuspalveluja ${place.fiLocative} sekä muualla Pirkanmaalla. Saatavuus tarkistetaan osoitteiden ja työn tietojen perusteella.` },
      { q: 'Paljonko muuttoauto kuljettajalla maksaa?', a: 'Pakettiauto ja kuljettaja maksavat 50 €/h. Hinta sisältää alv 25,5 %. Vähimmäisvaraus on yksi tunti, minkä jälkeen laskutus jatkuu 30 minuutin jaksoissa.' },
      { q: 'Saako muuttoon kantamisapua?', a: 'Kyllä. Voit valita 1, 2 tai 3 muuttomiestä, jotka auttavat kantamisessa, lastauksessa ja purkamisessa.' },
      { q: 'Mitä tietoja tarvitaan tarjoukseen?', a: 'Ilmoita nouto- ja toimitusosoitteet, muuttopäivä, tavaramäärä, kerrokset, hissi ja mahdollinen kantamisavun tarve. Huonekalukuljetuksessa kerro myös esineen mitat ja paino.' },
    ],
    en: [
      { q: `Do you provide moving services in ${place.enName}?`, a: `Yes. MoveX provides moving and transport services in ${place.enName} and across Pirkanmaa. Availability is checked using the addresses and job details.` },
      { q: 'How much does a van and driver cost?', a: 'A van and driver cost €50/hour, including Finnish VAT (25.5%). Minimum booking is one hour, followed by 30-minute billing increments.' },
      { q: 'Can I add help with carrying?', a: 'Yes. You can add 1, 2 or 3 movers for carrying, loading and unloading.' },
      { q: 'What information is needed for a quote?', a: 'Share the pickup and delivery addresses, date, amount of belongings, floors, elevator access and carrying requirements. For furniture, include its dimensions and weight.' },
    ],
  },
}));

export const landingPages: LandingPage[] = [
  {
    path: '/muuttopalvelu-tampere',
    navLabel: { fi: 'Muuttopalvelu Tampere', en: 'Moving service Tampere' },
    title: {
      fi: 'Muuttoauto kuljettajalla Tampereella | MoveX Logistics',
      en: 'Moving Service in Tampere & Pirkanmaa | MoveX Logistics',
    },
    description: {
      fi: 'Tarvitsetko muuttoauton kuljettajalla Tampereella? MoveX tarjoaa pakettiauton ja kuljettajan 50 €/h (sis. ALV 25,5 %). Saatavilla myös kantoapu. Pyydä tarjous.',
      en: 'Moving service in Tampere and Pirkanmaa, Finland. Van and driver or 1–3 movers for local and long-distance moves. From €50/hour incl. VAT.',
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
            'Muuttoapu Tampereella voi tarkoittaa pelkkää kuljetusta tai apua tavaroiden kantamiseen, lastaukseen ja purkuun. Valitse tarpeeseesi pakettiauto ja kuljettaja tai 1–3 muuttomiestä. Jos etsit muuttoautoa kuljettajalla Tampereella tai pakettiautoa kuljettajalla Tampereella, tämä palvelu sopii kuljetukseen ilman omaa vuokra-autoa. Muuttomiehet Tampereella auttavat myös lastauksessa ja purussa. Kerro tarjouspyynnössä muuton tiedot, jotta saat sopivan hinnan tai tarjouksen.',
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
        { q: 'Mitä muuttopalvelu Tampereella maksaa?', a: 'Pakettiauto ja kuljettaja maksavat 50 €/h, yksi muuttomies ja auto 75 €/h, kaksi muuttomiestä ja auto 100 €/h sekä kolme muuttomiestä ja auto 125 €/h. Hinnat sisältävät alv 25,5 %. Vähimmäisvaraus on yksi tunti.' },
        { q: 'Mistä muuttoavun hinta muodostuu?', a: 'Hinta riippuu tavaroiden määrästä, nouto- ja toimitusosoitteista, ajomatkasta, kerroksista, hissistä ja tarvittavasta kantamisavusta. Kerro nämä tiedot tarjouspyynnössä, jotta voimme arvioida työn oikein.' },
        { q: 'Voinko pyytää kiinteän muuttohinnan?', a: 'Kyllä. Kerro muuton reitti, ajankohta, tavaroiden määrä ja kantamisen tarve. Arvioimme työn ja vahvistamme kiinteän tarjouksen ennen työn aloittamista, jos työn tiedot mahdollistavat luotettavan arvion.' },
        { q: 'Sisältyvätkö hinnat alv:n?', a: 'Kyllä. Kaikki näytetyt tuntihinnat sisältävät alv 25,5 %.' },
        { q: 'Mikä on vähimmäisvaraus?', a: 'Vähimmäisvaraus on yksi tunti. Sen jälkeen laskutus jatkuu 30 minuutin jaksoissa.' },
        { q: 'Autatteko kantamisessa?', a: 'Kyllä. Kanto-, lastaus- ja purkuapua saa 1, 2 tai 3 muuttomiehen palvelulla. Pakettiauto + kuljettaja on tarkoitettu pääasiassa kuljetukseen.' },
      ],
      en: [
        { q: 'How much does a moving service in Tampere cost?', a: 'Van and driver cost €50/hour, one mover with a van €75/hour, two movers with a van €100/hour and three movers with a van €125/hour. Finnish VAT (25.5%) is included. Minimum booking is one hour.' },
        { q: 'What affects the price of moving help?', a: 'The price depends on the amount of belongings, pickup and delivery addresses, driving distance, floors, elevator access and carrying help required. Include these details in your quote request so we can assess the job accurately.' },
        { q: 'Can I request a fixed moving price?', a: 'Yes. Share the route, preferred date, amount of belongings and carrying needs. We assess the job and confirm a fixed quote before starting when the details allow a reliable estimate.' },
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
      fi: 'Muuttofirma Tampere ja Pirkanmaa | MoveX Logistics',
      en: 'Moving Company in Tampere, Finland | MoveX Logistics',
    },
    description: {
      fi: 'Muuttofirma Tampereella ja Pirkanmaalla: koti- ja pienyritysmuutot, muuttoapu ja kuljetukset. Pakettiauto + kuljettaja 50 €/h (sis. alv). Pyydä tarjous.',
      en: 'Moving company in Tampere and Pirkanmaa, Finland. Home and small business moves, van and driver from €50/hour incl. VAT. Request a quote.',
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
        { heading: 'Paikallinen muuttofirma Pirkanmaalla', paragraphs: ['Autamme muutossa Tampereen lisäksi Nokialla, Ylöjärvellä, Pirkkalassa, Lempäälässä ja Kangasalla. Palvelemme siis myös asiakkaita, jotka etsivät muuttopalvelua Pirkkalasta, muuttopalvelua Nokialta, muuttopalvelua Ylöjärveltä, muuttopalvelua Lempäälästä tai muuttopalvelua Kangasalta. MoveX on paikallinen muuttofirma Pirkanmaalla. Pirkkalassa, Nokialla, Ylöjärvellä, Lempäälässä ja Kangasalla voit pyytää MoveXilta paikallista muuttoapua, muuttofirman palvelua tai muuttoautoa kuljettajalla. Kuljetuspalveluihin kuuluvat myös muuttokuljetukset, huonekalukuljetukset ja tavarakuljetukset näillä lähialueilla. Näin palvelu kattaa esimerkiksi pienen asunnon muuton, yksittäisen huonekalun siirron sekä kodinkoneen tai muun sopivan tavaran noudon ja toimituksen. Palvelun saatavuus ja hinta vahvistetaan aina nouto- ja toimitusosoitteiden sekä työn tietojen perusteella. Tarjous voi olla tuntiperusteinen tai työn tietojen mukaan sovittu kiinteä hinta. Tampereelta muualle Suomeen tehtävät muutot hinnoitellaan koko reitin perusteella.'] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        { heading: 'Moving company services', paragraphs: ['Apartment, house and small business moves, furniture and item transport, van + driver, and long-distance transport across Finland with a fixed quotation.'] },
        { heading: 'Prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Local movers in Pirkanmaa', paragraphs: ['We serve Tampere, Nokia, Ylöjärvi, Pirkkala, Lempäälä and Kangasala. Share your pickup and delivery addresses, volume of belongings, floor and lift access, and preferred date. Ask for an hourly service or a fixed quote based on the job details. For moves to other parts of Finland, we price the complete route.'] },
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
      fi: 'Huonekalukuljetus Tampere – sohva ja Tori-noudot alk. 50 € | MoveX',
      en: 'Furniture Transport in Tampere | MoveX Logistics',
    },
    description: {
      fi: 'Sohvan, sängyn ja kodinkoneen kuljetus Tampereella. Myös Tori.fi- ja IKEA-noudot. Pakettiauto ja kuljettaja 50 €/h, sis. alv. Pyydä hinta WhatsAppilla.',
      en: 'Furniture transport in Tampere for sofas, beds, appliances and Tori.fi purchases. Van and driver from €50/hour, including Finnish VAT (25.5%).',
    },
    h1: { fi: 'Huonekalukuljetus Tampere', en: 'Furniture transport in Tampere' },
    intro: {
      fi: 'Kuljetamme sohvia, sänkyjä, pöytiä ja kodinkoneita Tampereella ja Pirkanmaalla. Huonekalujen nouto onnistuu esimerkiksi Tori.fi-myyjältä tai IKEAsta ja muista liikkeistä. IKEA-kuljetus Tampereella sekä Tori.fi-noutopalvelu sovitaan tavaran koon ja reitin mukaan.',
      en: 'We transport sofas, beds, tables, appliances, Tori.fi purchases, store pickups and other suitable items in Tampere and Pirkanmaa.',
    },
    sections: {
      fi: [
        {
          heading: 'Sohvan, sängyn ja kodinkoneen kuljetus Tampereella',
          paragraphs: [
            'Tarjoamme sohvan kuljetusta Tampereella, sängyn kuljetusta Tampereella sekä pesukoneen ja muun kodinkoneen kuljetusta Tampereella. Huonekalukuljetus sopii myös IKEA-kuljetukseen Tampereella, Tori.fi-noutopalveluun, huonekalujen noutoon kaupasta tai yksittäisen huonekalun kuljetukseen. Voimme siirtää esimerkiksi sohvan, pöydän tai sängyn sovittuun osoitteeseen. Kerro etukäteen esineen mitat, paino, kerrokset, hissin saatavuus ja tarvitaanko kantoapua.',
          ],
        },
        { heading: 'Huonekalukuljetuksen hinta', paragraphs: ['Pakettiauto + kuljettaja alkaen 50 € / h.', priceNote.fi] },
        { heading: 'Kerro tarjouspyynnössä', paragraphs: ['Esineen koko ja paino, nouto- ja toimitusosoite, kerrokset ja hissi sekä tarvitaanko kantoapua. Näin saat mahdollisimman tarkan arvion. Lue lisää oppaasta Huonekalukuljetus Tampereella: mitä kannattaa ilmoittaa?'] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        {
          heading: 'Sofa, bed and appliance transport in Tampere',
          paragraphs: [
            'We offer sofa transport, bed moving and washing machine or other appliance transport in Tampere. We can collect furniture from a Tori.fi seller or a shop and deliver it to the agreed address. Please share the item dimensions and weight, floors, elevator access and whether carrying help is needed.',
          ],
        },
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
{
    path: '/pieni-muutto-tampere',
    navLabel: { fi: 'Pieni muutto Tampere', en: 'Small move Tampere' },
    title: {
      fi: 'Pieni muutto Tampereella | Yksiö ja opiskelijamuutto – MoveX',
      en: 'Small Move in Tampere | MoveX Logistics',
    },
    description: {
      fi: 'Pieni muutto tai yksiön muutto Tampereella? Pakettiauto + kuljettaja 50 €/h (sis. ALV 25,5 %). Saatavilla myös kantoapu. Pyydä tarjous verkossa tai WhatsAppilla.',
      en: 'Small moves in Tampere: studio flats, student moves and a few items. Van and driver from €50/hour, Finnish VAT included.',
    },
    h1: { fi: 'Pieni muutto Tampere', en: 'Small move in Tampere' },
    intro: {
      fi: 'Kaikki muutot eivät vaadi suurta muuttoautoa tai kokonaista muuttopalvelua. MoveX Logistics auttaa pienissä asuntomuuttoissa, opiskelijamuutoissa ja silloin, kun siirrettävänä on vain muutama huonekalu tai laatikko Tampereella ja Pirkanmaalla.',
      en: 'Not every move needs a large moving truck or a full-service crew. MoveX Logistics helps with studio and student moves, a few pieces of furniture and smaller loads in Tampere and Pirkanmaa.',
    },
    sections: {
      fi: [
        {
          heading: 'Milloin pieni muuttoapu sopii?',
          paragraphs: [
            'Pieni muutto Tampereella voi olla yksiön muutto, opiskelijamuutto, pienen asunnon muutto tai osamuutto, jossa siirretään vain osa kodin tavaroista. MoveX kuljettaa myös muuttolaatikoita ja muutamia huonekaluja, kun tavaroiden mitat ja paino sopivat pakettiautoon. Kerro tavaroiden määrä ja suurimmat esineet, jotta voimme arvioida sopivan ajoneuvon ja tarvittavan kantoavun.',
          ],
        },
        {
          heading: 'Pienen muuton hinnat',
          paragraphs: [
            'Pakettiauto + kuljettaja: 50 € / h',
            '1 muuttomies + auto: 75 € / h',
            '2 muuttomiestä + auto: 100 € / h',
            priceNote.fi,
          ],
        },
        {
          heading: 'Miten saat tarkan tarjouksen?',
          paragraphs: [
            'Ilmoita nouto- ja toimitusosoitteet, toivottu päivä, kerrokset, hissin saatavuus ja suurimmat tavarat. Jos tarvitset vain kuljetuksen, pakettiauto + kuljettaja voi riittää. Jos tavarat pitää kantaa portaissa, valitse myös muuttomiehiä.',
            area.fi,
          ],
        },
      ],
      en: [
        {
          heading: 'When is a small moving service suitable?',
          paragraphs: [
            'A small move may be a studio or student flat, a few pieces of furniture, boxes or items going to storage. Tell us how much you have and list the largest items so we can estimate the right vehicle and carrying help.',
          ],
        },
        {
          heading: 'Small move prices',
          paragraphs: [
            'Van + driver: €50 / hour',
            '1 mover + van: €75 / hour',
            '2 movers + van: €100 / hour',
            priceNote.en,
          ],
        },
        {
          heading: 'How to get an accurate quote',
          paragraphs: [
            'Share the pickup and delivery addresses, preferred date, floors, elevator access and largest items. Van + driver may be enough if you only need transport. Add movers if items need to be carried up or down stairs.',
            area.en,
          ],
        },
      ],
    },
    faq: {
      fi: [
        { q: 'Paljonko pieni muutto Tampereella maksaa?', a: 'Pakettiauto ja kuljettaja maksavat 50 €/h ja 1 muuttomies sekä auto 75 €/h. Hinnat sisältävät alv 25,5 %. Lopullinen hinta riippuu reitistä, tavaroista ja kantoavusta.' },
        { q: 'Mistä muuttoavun hinta muodostuu?', a: 'Hintaan vaikuttavat nouto- ja toimitusosoitteet, ajomatka, tavaroiden määrä ja koko, kerrokset, hissi sekä tarvittavien muuttomiesten määrä. Kerro nämä tiedot tarjouspyynnössä.' },
        { q: 'Autatteko opiskelijamuutoissa ja yksiöissä?', a: 'Kyllä. Voimme auttaa pienissä asuntomuuttoissa, yksiön muutoissa ja opiskelijamuutoissa Tampereella sekä lähikunnissa.' },
        { q: 'Voinko kuljettaa vain muutaman huonekalun tai laatikon?', a: 'Kyllä. Pieni kuljetus tai muutama huonekalu voi sopia pakettiauto + kuljettaja -palveluun, jos esineiden mitat ja paino sopivat autoon.' },
        { q: 'Pitääkö minun kantaa tavarat itse?', a: 'Voit valita pelkän pakettiauton ja kuljettajan tai lisätä 1–3 muuttomiestä kantamiseen, lastaukseen ja purkuun.' },
      ],
      en: [
        { q: 'How much does a small move in Tampere cost?', a: 'Van and driver cost €50/hour, and one mover with a van costs €75/hour. Finnish VAT (25.5%) is included. The final price depends on the route, items and carrying needs.' },
        { q: 'What affects the price of moving help?', a: 'The price depends on pickup and delivery addresses, driving distance, the amount and size of items, floors, elevator access and the number of movers needed. Include these details in your quote request.' },
        { q: 'Do you help with student and studio moves?', a: 'Yes. We help with small home moves, studio flat moves and student moves in Tampere and nearby municipalities.' },
        { q: 'Can you move just a few pieces of furniture or boxes?', a: 'Yes. A small transport job or a few items may suit our van-and-driver service if the dimensions and weight fit the vehicle.' },
        { q: 'Do I have to carry everything myself?', a: 'Choose van + driver only, or add 1–3 movers for carrying, loading and unloading.' },
      ],
    },
  },
  {
    path: '/kuljetuspalvelu-tampere',
    navLabel: { fi: 'Kuljetuspalvelu Tampere', en: 'Transport service Tampere' },
    title: {
      fi: 'Kuljetuspalvelu ja tavarakuljetus Tampere | MoveX Logistics',
      en: 'Transport and Delivery Service in Tampere | MoveX Logistics',
    },
    description: {
      fi: 'Kuljetuspalvelu ja tavarakuljetus Tampereella: tavarat, paketit, huonekalut, myymälänoudot ja sopivat lavakuljetukset. Pakettiauto ja kuljettaja alkaen 50 €/h.',
      en: 'Transport and delivery in Tampere for goods, parcels, furniture, store pickups and suitable pallet loads. Van and driver from €50/hour, VAT included.',
    },
    h1: { fi: 'Kuljetuspalvelu ja tavarakuljetus Tampere', en: 'Transport and delivery service in Tampere' },
    intro: {
      fi: 'MoveX Logistics tarjoaa monipuolisia kuljetus- ja toimituspalveluja Tampereella ja Pirkanmaalla. Kuljetamme huonekaluja, kodinkoneita, paketteja, laatikoita, yritysten tavaroita, myymäläostoksia ja sopivia lavakuormia. Saatavilla pakettiauto ja kuljettaja tai erikseen sovittava kantoapu.',
      en: 'MoveX Logistics provides transport and delivery services in Tampere and Pirkanmaa. We transport furniture, appliances, parcels, boxes, business goods, store purchases and suitable pallet loads, with a van and driver and carrying help by arrangement.',
    },
    sections: {
      fi: [
        {
          heading: 'Mitä voimme kuljettaa?',
          paragraphs: [
            'Tarjoamme tavarakuljetusta Tampereella ja kuljetuspalvelua Pirkanmaalla huonekaluille, kodinkoneille, laatikoille, toimistotarvikkeille, yritysten tavaraerille, myymäläostoksille sekä Tori.fi- ja Facebook Marketplace -hankinnoille. Palveluun kuuluu myös tavaran kuljetus Tampereella, noutopalvelu ja kauppanouto sovitusta liikkeestä. EUR- ja FIN-lavojen lavakuljetus voidaan sopia etukäteen, kun kuorman mitat, paino ja lastausolosuhteet sopivat kalustolle.',
            'Pakettiauton tavaratilan tilavuus on noin 13 m³ ja suurin sallittu hyötykuorma 1 310 kg. Autossa ei ole perälautaa eikä trukkia. Lavakuormissa asiakkaan tulee järjestää sopiva lastaus ja purku, ellei muuta sovita.',
          ],
        },
        {
          heading: 'Kuljetuksen hinta',
          paragraphs: [
            'Pakettiauto + kuljettaja alkaen 50 € / h. Hinnat sisältävät alv 25,5 %. Vähimmäisvaraus on yksi tunti, minkä jälkeen laskutus jatkuu 30 minuutin jaksoissa. Yritysten tavarakuljetukset, lavakuormat ja pidemmät reitit hinnoitellaan työn tietojen perusteella tarjouksella.',
            'Kerro tarjouspyynnössä nouto- ja toimitusosoitteet, esineen mitat ja paino sekä se, tarvitsetko kantoapua. Näiden tietojen avulla voimme arvioida työn hinnan.',
          ],
        },
        {
          heading: 'Tampere ja Pirkanmaa',
          paragraphs: [
            area.fi,
            'Jos kuljetus alkaa tai päättyy Tampereen ulkopuolelle, pyydä tarjous koko reitille. Vahvistamme hinnan työn tietojen perusteella ennen sovittua kuljetusta.',
          ],
        },
      ],
      en: [
        {
          heading: 'What can we transport?',
          paragraphs: [
            'We transport furniture, appliances, parcels, boxes, office supplies, business goods, store purchases and items bought through Tori.fi or Facebook Marketplace. EUR and FIN pallet transport can also be arranged in advance when the load dimensions, weight and loading conditions suit the vehicle.',
            'The van offers approximately 13 m³ of cargo space and a maximum payload of 1,310 kg. It has no tail lift or forklift. For pallet loads, the customer must arrange suitable loading and unloading unless agreed otherwise.',
          ],
        },
        {
          heading: 'Transport price',
          paragraphs: [
            'Van + driver from €50 / hour. Finnish VAT (25.5%) is included. The minimum booking is one hour, then billing continues in 30-minute steps. Business goods, pallet loads and longer routes are quoted based on the job details.',
            'Include the pickup and delivery addresses, item dimensions and weight, and whether you need carrying help. This helps us estimate the job accurately.',
          ],
        },
        {
          heading: 'Tampere and Pirkanmaa',
          paragraphs: [
            area.en,
            'For a transport job starting or ending outside Tampere, request a quote for the complete route. We confirm the price based on the job details before the agreed transport.',
          ],
        },
      ],
    },
    faq: {
      fi: [
        { q: 'Onko saatavilla muuttoauto kuljettajalla Tampereella?', a: 'Kyllä. Pakettiauto ja kuljettaja maksavat alkaen 50 €/h, alv 25,5 % sisältyy. Vähimmäisvaraus on yksi tunti.' },
        { q: 'Voitteko kuljettaa sohvan tai pesukoneen?', a: 'Kyllä, jos esineen mitat ja paino sopivat ajoneuvoon. Kerro nouto- ja toimitusosoitteet, kerrokset, hissin saatavuus ja tarvitaanko kantoapua.' },
        { q: 'Voitteko noutaa huonekalun Tori.fi-myyjältä?', a: 'Kyllä. Kerro nouto- ja toimitusosoite, esineen koko sekä tarvitaanko kantamista molemmissa päissä.' },
        { q: 'Sisältääkö 50 €/h hinta arvonlisäveron?', a: 'Kyllä. Pakettiauto + kuljettaja maksaa alkaen 50 €/h, ja alv 25,5 % sisältyy ilmoitettuun hintaan.' },
        { q: 'Voitteko kuljettaa yritysten tavaroita ja lavoja?', a: 'Kyllä. Sovimme yritysten tavara- ja lavakuljetuksista kuorman mittojen, painon, reitin ja lastausolosuhteiden perusteella. Pakettiauton enimmäishyötykuorma on 1 310 kg, eikä autossa ole perälautaa tai trukkia.' },
        { q: 'Kuljetatteko paketteja ja myymäläostoksia?', a: 'Kyllä. Voimme noutaa ja toimittaa sopivia paketteja, huonekaluja, kodinkoneita ja myymäläostoksia Tampereella ja Pirkanmaalla.' },
        { q: 'Voitteko kuljettaa tavaroita Tampereen ulkopuolelle?', a: 'Kyllä. Pirkanmaan ulkopuolisista ja pidemmistä kuljetuksista annamme tarjouksen koko reitin ja työn tietojen perusteella.' },
      ],
      en: [
        { q: 'Do you offer a van with a driver in Tampere?', a: 'Yes. A van and driver cost from €50/hour, including Finnish VAT (25.5%). The minimum booking is one hour.' },
        { q: 'Can you transport a sofa or washing machine?', a: 'Yes, if the item dimensions and weight fit the vehicle. Share the pickup and delivery addresses, floors, elevator access and whether carrying help is needed.' },
        { q: 'Can you collect furniture from a Tori.fi seller?', a: 'Yes. Share the pickup and delivery addresses, item size and whether carrying help is needed at either location.' },
        { q: 'Does the €50/hour price include VAT?', a: 'Yes. Van + driver starts at €50/hour, including Finnish VAT (25.5%).' },
        { q: 'Can you transport business goods and pallets?', a: 'Yes. Business goods and pallet transport can be arranged based on load dimensions, weight, route and loading conditions. The van has a maximum payload of 1,310 kg and no tail lift or forklift.' },
        { q: 'Do you deliver parcels and store purchases?', a: 'Yes. We can collect and deliver suitable parcels, furniture, appliances and store purchases in Tampere and Pirkanmaa.' },
        { q: 'Can you transport items outside Tampere?', a: 'Yes. We quote transport outside Pirkanmaa and longer routes based on the complete route and job details.' },
      ],
    },
  },

  {
    path: '/muuttopalvelu-hinta-tampere',
    navLabel: { fi: 'Muuttopalvelun hinta', en: 'Moving cost Tampere' },
    title: {
      fi: 'Muuttopalvelun hinta Tampereella | MoveX Logistics',
      en: 'Moving Costs in Tampere, Finland | MoveX Logistics',
    },
    description: {
      fi: 'Muuttopalvelun hinta Tampereella alkaen 50 €/h. Vertaa MoveX Logisticsin selkeitä tuntihintoja, katso mistä muuton hinta muodostuu ja pyydä tarjous.',
      en: 'Moving costs in Tampere, Finland: van and driver from €50/hour. Compare clear hourly rates, understand what affects the price and request a quote.',
    },
    h1: { fi: 'Muuttopalvelun hinta Tampereella', en: 'Moving costs in Tampere, Finland' },
    intro: {
      fi: 'Muuttopalvelun hinta riippuu siitä, tarvitsetko vain pakettiauton ja kuljettajan vai myös muuttomiehiä kantamiseen. MoveX Logistics ilmoittaa tuntihinnat selkeästi etukäteen. Palvelemme Tampereella ja Pirkanmaalla sekä annamme tarjouksia pidemmistä kuljetuksista ympäri Suomen.',
      en: 'The cost of a moving service depends on whether you need only a van and driver or movers to carry your belongings as well. MoveX Logistics publishes clear hourly rates in advance. We serve Tampere and Pirkanmaa and quote for longer moves across Finland.',
    },
    sections: {
      fi: [
        {
          heading: 'Muuttopalvelun tuntihinnat',
          paragraphs: [
            'Pakettiauto + kuljettaja: 50 € / h',
            '1 muuttomies + auto: 75 € / h',
            '2 muuttomiestä + auto: 100 € / h',
            '3 muuttomiestä + auto: 125 € / h',
            'Kaikki hinnat sisältävät alv 25,5 %. Vähimmäisvaraus on yksi tunti, minkä jälkeen laskutus jatkuu 30 minuutin jaksoissa. Pakettiauto + kuljettaja sopii ensisijaisesti kuljetukseen. Muuttomiehet auttavat kantamisessa, lastauksessa ja purkamisessa.',
          ],
        },
        {
          heading: 'Mistä muuton hinta muodostuu?',
          paragraphs: [
            'Muuton hintaan vaikuttavat nouto- ja toimitusosoitteiden välinen matka, tavaroiden määrä ja koko, kerrokset, hissin saatavuus sekä se, kuinka monta henkilöä tarvitaan kantamiseen. Myös pysäköinti, pitkät kantomatkat, huonekalujen purkaminen ja erityisen painavat esineet voivat vaikuttaa työn kestoon.',
            'Tarkan arvion saamiseksi ilmoita tarjouspyynnössä molemmat osoitteet, muuttopäivä, asunnon koko, kerrokset, hissit ja suurimmat huonekalut. Valokuvat auttavat arvioimaan tavaramäärää.',
          ],
        },
        {
          heading: 'Tuntihinta vai kiinteä muuttohinta?',
          paragraphs: [
            'Tuntihinta sopii usein pieniin ja paikallisiin muuttoihin, kun työn määrä on kohtuullisen helppo arvioida. Kiinteää tarjousta kannattaa pyytää, kun reitti, tavaramäärä ja kantamisen tarve ovat tiedossa. Vahvistamme sovitun hinnan ennen työn aloittamista, kun tiedot riittävät luotettavaan arvioon.',
            'Emme lupaa yhtä samaa kokonaishintaa kaikille muutoille, koska esimerkiksi hissitön kerrostalo ja pitkä kantomatka voivat muuttaa työn kestoa merkittävästi.',
          ],
        },
        {
          heading: 'Näin voit pitää muuton kustannukset kurissa',
          paragraphs: [
            'Jos etsit edullista muuttoapua Tampereella, valitse palvelu työn todellisen tarpeen mukaan: pelkkä pakettiauto ja kuljettaja maksaa 50 €/h, ja kantamiseen voi lisätä muuttomiehiä. Pakkaa pienet tavarat valmiiksi, merkitse laatikot ja varmista, että muuttoautolle on tilaa pysähtyä. Kerro etukäteen purettavat huonekalut sekä painavat tai hankalan kokoiset esineet, jotta työ voidaan suunnitella oikein.',
            'Jos tarvitset vain kuljetuksen, pakettiauto ja kuljettaja voi olla edullisempi vaihtoehto kuin muuttomiehillä varustettu palvelu. Jos et pysty kantamaan itse, valitse sopiva määrä muuttomiehiä turvallista lastausta ja purkua varten.',
          ],
        },
        {
          heading: 'Muuttopalvelu Tampereella ja Pirkanmaalla',
          paragraphs: [
            'Palvelemme Tampereella sekä lähialueilla, kuten Pirkkalassa, Nokialla, Ylöjärvellä, Lempäälässä ja Kangasalla. Pidemmät kuljetukset onnistuvat eri puolille Suomea tarjouksella. Pitkissä kuljetuksissa tarjous perustuu koko ajoreittiin ja työn sisältöön.',
            'Pyydä tarjous MoveX Logisticsilta ja kerro muuton tiedot. Voit valita tuntihinnan, pyytää kiinteän tarjouksen tai pyytää meitä suosittelemaan sopivaa vaihtoehtoa.',
          ],
        },
      ],
      en: [
        {
          heading: 'Hourly moving service prices',
          paragraphs: [
            'Van + driver: €50 / hour',
            '1 mover + van: €75 / hour',
            '2 movers + van: €100 / hour',
            '3 movers + van: €125 / hour',
            'All prices include Finnish VAT (25.5%). The minimum booking is one hour, followed by 30-minute billing increments. Van + driver is mainly for transport. Movers help with carrying, loading and unloading.',
          ],
        },
        {
          heading: 'What affects the cost of a move?',
          paragraphs: [
            'The price depends on the distance between the pickup and delivery addresses, the amount and size of belongings, floors, elevator access and the number of people needed for carrying. Parking, long carrying distances, furniture disassembly and unusually heavy items can also affect the time required.',
            'For an accurate estimate, include both addresses, the moving date, home size, floors, elevator access and your largest items. Photos can help us assess the volume.',
          ],
        },
        {
          heading: 'Hourly rate or fixed moving quote?',
          paragraphs: [
            'An hourly rate often works well for smaller local moves when the workload is reasonably clear. A fixed quote is useful when the route, volume and carrying requirements are known. We confirm the agreed price before starting when the information is sufficient for a reliable estimate.',
            'There is no single total price that fits every move: stairs without a lift and long carrying distances can significantly change the time required.',
          ],
        },
        {
          heading: 'How to keep moving costs under control',
          paragraphs: [
            'Pack smaller items in advance, label boxes and make sure the van has a suitable place to stop. Tell us which furniture needs dismantling and identify heavy or awkward items before moving day. This helps us plan the work and avoid delays.',
            'If you only need transport, a van and driver may cost less than a service with movers. If you cannot carry items yourself, choose enough movers for safe loading and unloading.',
          ],
        },
        {
          heading: 'Moving services in Tampere and Pirkanmaa',
          paragraphs: [
            'We serve Tampere and nearby areas including Pirkkala, Nokia, Ylöjärvi, Lempäälä and Kangasala. Longer-distance transport across Finland is available by quotation. Long-distance quotes are based on the complete driving route and the work required.',
            'Request a quote from MoveX Logistics and share your moving details. You can choose an hourly rate, ask for a fixed quote or ask us to recommend a suitable option.',
          ],
        },
      ],
    },
    faq: {
      fi: [
        { q: 'Paljonko muuttopalvelu maksaa Tampereella?', a: 'MoveX Logisticsin pakettiauto ja kuljettaja maksavat 50 €/h. Yksi muuttomies ja auto maksavat 75 €/h, kaksi 100 €/h ja kolme 125 €/h. Hinnat sisältävät alv 25,5 %.' },
        { q: 'Onko tuntihinnassa vähimmäisveloitus?', a: 'Kyllä. Vähimmäisvaraus on yksi tunti. Sen jälkeen laskutus jatkuu 30 minuutin jaksoissa.' },
        { q: 'Voinko saada kiinteän muuttohinnan?', a: 'Kyllä. Lähetä reitti, muuttopäivä, tavaramäärä, kerrokset ja kantoavun tarve. Vahvistamme kiinteän tarjouksen, kun tiedot riittävät luotettavaan arvioon.' },
        { q: 'Sisältävätkö hinnat arvonlisäveron?', a: 'Kyllä. Ilmoitetut tuntihinnat sisältävät Suomen arvonlisäveron 25,5 %.' },
        { q: 'Miten saan tarkan tarjouksen muutosta?', a: 'Ilmoita nouto- ja toimitusosoitteet, muuttopäivä, kerrokset, hissi, asunnon koko ja suurimmat tavarat. Lisää tarvittaessa kuvia.' },
      ],
      en: [
        { q: 'How much does a moving service cost in Tampere?', a: 'MoveX Logistics charges €50/hour for a van and driver, €75/hour for one mover and a van, €100/hour for two movers and a van, and €125/hour for three movers and a van. Finnish VAT (25.5%) is included.' },
        { q: 'Is there a minimum booking?', a: 'Yes. The minimum booking is one hour, followed by 30-minute billing increments.' },
        { q: 'Can I get a fixed moving quote?', a: 'Yes. Send the route, moving date, volume, floors and carrying requirements. We confirm a fixed quote when the details allow a reliable estimate.' },
        { q: 'Do the prices include VAT?', a: 'Yes. All published hourly rates include Finnish VAT at 25.5%.' },
        { q: 'What information is needed for an accurate quote?', a: 'Share the pickup and delivery addresses, moving date, floors, elevator access, home size and largest items. Add photos if useful.' },
      ],
    },
  },

  ...localAreaLandingPages,
];

const englishSlugs: Record<string, string> = {
  '/muuttopalvelu-tampere': '/en/moving-service-tampere',
  '/muuttofirma-tampere': '/en/moving-company-tampere',
  '/huonekalukuljetus-tampere': '/en/furniture-transport-tampere',
  '/pieni-muutto-tampere': '/en/small-move-tampere',
  '/kuljetuspalvelu-tampere': '/en/transport-service-tampere',
  '/muuttopalvelu-hinta-tampere': '/en/moving-cost-tampere',
  ...Object.fromEntries(localAreas.map((place) => [
    `/muuttopalvelu-${place.slug}`, `/en/moving-service-${place.slug}`,
  ])),
};

export function getLandingPage(path: string) {
  const normalized = path.replace(/\/+$/, '') || '/';
  const finnishPath = Object.entries(englishSlugs).find(([, english]) => english === normalized)?.[0] ?? normalized;
  return landingPages.find((p) => p.path === finnishPath);
}

export function getLocalizedPath(path: string, lang: Lang) {
  const localized = lang === 'en'
    ? englishSlugs[path] ?? (path === '/' ? '/en/' : '/en' + path)
    : path;
  return localized === '/' ? '/' : `${localized.replace(/\/+$/, '')}/`;
}
