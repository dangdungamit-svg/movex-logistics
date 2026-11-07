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
  /** Town/district page: listed in the footer and related links, not in the header menu. */
  area?: boolean;
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

export const landingPages: LandingPage[] = [
  {
    path: '/muuttopalvelu-tampere',
    navLabel: { fi: 'Muuttopalvelu Tampere', en: 'Moving service Tampere' },
    title: {
      fi: 'Muuttopalvelu ja muuttoauto kuljettajalla Tampere | MoveX Logistics',
      en: 'Moving Service in Tampere & Pirkanmaa | MoveX Logistics',
    },
    description: {
      fi: 'Tarvitsetko muuttoauton kuljettajalla Tampereella? MoveX tarjoaa pakettiauton ja kuljettajan 50 €/h (sis. ALV 25,5 %). Saatavilla myös kantoapu. Pyydä tarjous.',
      en: 'Moving service in Tampere and Pirkanmaa, Finland. Van and driver or 1–3 movers for local and long-distance moves. From €50/hour incl. VAT.',
    },
    h1: { fi: 'Muuttopalvelu Tampere', en: 'Moving service in Tampere' },
    intro: {
      fi: 'MoveX Logistics auttaa asunto-, talo- ja pienyritysmuutoissa Tampereella ja Pirkanmaalla. Järjestämme työhön sopivan kuljetuskaluston ja kuljettajan sekä tarvittaessa 1–3 muuttomiestä. Kalusto ja mahdolliset lastausratkaisut valitaan tavaroiden ja työn tarpeiden mukaan.',
      en: 'MoveX Logistics helps with apartment, house and small business moves in Tampere and Pirkanmaa. We arrange a suitable vehicle and driver, with 1–3 movers when needed. The vehicle and loading solution are selected according to the goods and job requirements.',
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
        { q: 'Onko saatavilla edullista muuttopalvelua Tampereella?', a: 'Kyllä. Jos tavaraa on vähän tai tarvitset vain kuljetuksen, peruskuljetuspalvelu alkaen 50 €/h voi olla sopiva vaihtoehto. Valitsemme ajoneuvon ja tarvittavan kaluston tavaroiden sekä työn tietojen perusteella. Jos tarvitset kantoapua, voit valita yhden tai useamman muuttomiehen. Hinta vahvistetaan työn tietojen perusteella, ja kaikki ilmoitetut tuntihinnat sisältävät alv 25,5 %.' },
        { q: 'Mistä muuttoavun hinta muodostuu?', a: 'Hinta riippuu tavaroiden määrästä, nouto- ja toimitusosoitteista, ajomatkasta, kerroksista, hissistä ja tarvittavasta kantamisavusta. Kerro nämä tiedot tarjouspyynnössä, jotta voimme arvioida työn oikein.' },
        { q: 'Voinko pyytää kiinteän muuttohinnan?', a: 'Kyllä. Kerro muuton reitti, ajankohta, tavaroiden määrä ja kantamisen tarve. Arvioimme työn ja vahvistamme kiinteän tarjouksen ennen työn aloittamista, jos työn tiedot mahdollistavat luotettavan arvion.' },
        { q: 'Sisältyvätkö hinnat alv:n?', a: 'Kyllä. Kaikki näytetyt tuntihinnat sisältävät alv 25,5 %.' },
        { q: 'Mikä on vähimmäisvaraus?', a: 'Vähimmäisvaraus on yksi tunti. Sen jälkeen laskutus jatkuu 30 minuutin jaksoissa.' },
        { q: 'Autatteko kantamisessa?', a: 'Kyllä. Kanto-, lastaus- ja purkuapua saa 1, 2 tai 3 muuttomiehen palvelulla. Pakettiauto + kuljettaja on tarkoitettu pääasiassa kuljetukseen.' },
      ],
      en: [
        { q: 'How much does a moving service in Tampere cost?', a: 'Van and driver cost €50/hour, one mover with a van €75/hour, two movers with a van €100/hour and three movers with a van €125/hour. Finnish VAT (25.5%) is included. Minimum booking is one hour.' },
        { q: 'Do you offer an affordable moving service in Tampere?', a: 'Yes. If you have a smaller load or mainly need transport, a van and driver from €50/hour may be a cost-conscious option. If you need carrying help, you can add one or more movers. The price is confirmed based on the job details, and all listed hourly prices include Finnish VAT (25.5%).' },
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
        { heading: 'Paikallinen muuttofirma Pirkanmaalla', paragraphs: ['Palvelemme Tampereella sekä lähikunnissa Pirkkalassa, Nokialla, Ylöjärvellä, Lempäälässä ja Kangasalla. Voit pyytää tarjouksen esimerkiksi asunnon muutosta, muuttoautosta kuljettajalla tai yksittäisten huonekalujen ja kodinkoneiden kuljetuksesta. Kerro nouto- ja toimitusosoitteet, tavaroiden määrä sekä mahdollinen kantoavun tarve, niin arvioimme työhön sopivan palvelun ja hinnan. Tarjoamme tuntiperusteisen palvelun ja mahdollisuuksien mukaan etukäteen sovitun kiinteän tarjouksen. Pidemmät muutot ja kuljetukset Tampereelta muualle Suomeen hinnoitellaan koko reitin ja työn tietojen perusteella.'] },
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
            'Pieni muutto Tampereella voi olla yksiön muutto, opiskelijamuutto, pienen asunnon muutto tai osamuutto, jossa siirretään vain osa kodin tavaroista. MoveX kuljettaa myös muuttolaatikoita ja muutamia huonekaluja. Kerro tavaroiden määrä ja suurimmat esineet, jotta voimme järjestää työhön sopivan kuljetuskaluston ja tarvittavan kantoavun.',
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
        { q: 'Voinko kuljettaa vain muutaman huonekalun tai laatikon?', a: 'Kyllä. Kerro kuljetettavien tavaroiden mitat, paino ja määrä. Valitsemme työn mukaan sopivan ajoneuvon ja järjestämme tarvittaessa suuremman kuljetuskaluston.' },
        { q: 'Pitääkö minun kantaa tavarat itse?', a: 'Voit valita pelkän pakettiauton ja kuljettajan tai lisätä 1–3 muuttomiestä kantamiseen, lastaukseen ja purkuun.' },
      ],
      en: [
        { q: 'How much does a small move in Tampere cost?', a: 'Van and driver cost €50/hour, and one mover with a van costs €75/hour. Finnish VAT (25.5%) is included. The final price depends on the route, items and carrying needs.' },
        { q: 'What affects the price of moving help?', a: 'The price depends on pickup and delivery addresses, driving distance, the amount and size of items, floors, elevator access and the number of movers needed. Include these details in your quote request.' },
        { q: 'Do you help with student and studio moves?', a: 'Yes. We help with small home moves, studio flat moves and student moves in Tampere and nearby municipalities.' },
        { q: 'Can you move just a few pieces of furniture or boxes?', a: 'Yes. We assess the job details and arrange a suitable transport solution for a small load or a few items.' },
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
            'Tarjoamme tavarakuljetusta Tampereella ja kuljetuspalvelua Pirkanmaalla huonekaluille, kodinkoneille, laatikoille, toimistotarvikkeille, yritysten tavaraerille, myymäläostoksille sekä Tori.fi- ja Facebook Marketplace -hankinnoille. Palveluun kuuluu myös tavaran kuljetus Tampereella, noutopalvelu ja kauppanouto sovitusta liikkeestä. EUR- ja FIN-lavojen kuljetukset sovitaan etukäteen. MoveX järjestää kuorman mukaan sopivan kuljetuskaluston sekä tarvittavat lastaus- ja purkuratkaisut, kuten trukin tai muun apuvälineen.',
            'Kuljetuskalusto valitaan kuorman ja työn tarpeiden mukaan. Tarvittaessa järjestämme myös suuremman vuokrakaluston. EUR- ja FIN-lavojen kuljetuksiin järjestämme tarvittavat lastaus- ja purkuratkaisut etukäteen kuorman ja kohteiden mukaan.',
          ],
        },
        {
          heading: 'Kuljetuksen hinta',
          paragraphs: [
            'Peruskuljetuspalvelun hinta alkaen 50 € / h. Hinta sisältää kuljettajan ja soveltuvan peruskaluston; suurempi tai erikoiskalusto hinnoitellaan työn mukaan. Hinnat sisältävät alv 25,5 %. Vähimmäisvaraus on yksi tunti, minkä jälkeen laskutus jatkuu 30 minuutin jaksoissa. Yritysten tavarakuljetukset, lavakuormat ja pidemmät reitit hinnoitellaan työn tietojen perusteella tarjouksella.',
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
            'We transport furniture, appliances, parcels, boxes, office supplies, business goods, store purchases and items bought through Tori.fi or Facebook Marketplace. EUR and FIN pallet transport can also be arranged in advance.',
            'We arrange the transport vehicle and loading solution according to the load and job requirements. Larger rental vehicles, tail-lift vehicles and suitable handling equipment, including forklifts, can be arranged when needed. EUR and FIN pallet transport can be quoted once the load and site details are known.',
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
        { q: 'Onko saatavilla muuttoauto kuljettajalla Tampereella?', a: 'Kyllä. Kuljetuspalvelun hinnat alkavat 50 €/h (sis. alv 25,5 %). Sopiva ajoneuvo valitaan työn ja kuorman mukaan. Vähimmäisvaraus on yksi tunti.' },
        { q: 'Voitteko kuljettaa sohvan tai pesukoneen?', a: 'Kyllä. Järjestämme kuljetukseen sopivan kaluston tavaran tietojen perusteella. Kerro nouto- ja toimitusosoitteet, kerrokset, hissin saatavuus ja tarvitaanko kantoapua.' },
        { q: 'Voitteko noutaa huonekalun Tori.fi-myyjältä?', a: 'Kyllä. Kerro nouto- ja toimitusosoite, esineen koko sekä tarvitaanko kantamista molemmissa päissä.' },
        { q: 'Sisältääkö 50 €/h hinta arvonlisäveron?', a: 'Kyllä. Kuljetuspalvelun hinta alkaa 50 €/h, ja alv 25,5 % sisältyy ilmoitettuun hintaan. Ajoneuvo valitaan työn tarpeiden mukaan.' },
        { q: 'Onko saatavilla edullista kuljetuspalvelua Tampereella?', a: 'Kyllä. Pienelle kuormalle tai yksittäiselle huonekalulle pakettiauto ja kuljettaja alkaen 50 €/h voi olla sopiva vaihtoehto. Kerro tavaran koko, paino ja nouto- sekä toimitusosoitteet, jotta voimme arvioida kuljetuksen hinnan etukäteen.' },
        { q: 'Voitteko kuljettaa yritysten tavaroita ja lavoja?', a: 'Kyllä. Sovimme yritysten tavara- ja lavakuljetuksista kuorman ja reitin perusteella. MoveX järjestää tarvittavan kuljetuskaluston sekä lastaus- ja purkuratkaisut, kuten trukin tai muun apuvälineen, työn tarpeiden mukaan.' },
        { q: 'Kuljetatteko paketteja ja myymäläostoksia?', a: 'Kyllä. Voimme noutaa ja toimittaa sopivia paketteja, huonekaluja, kodinkoneita ja myymäläostoksia Tampereella ja Pirkanmaalla.' },
        { q: 'Voitteko kuljettaa tavaroita Tampereen ulkopuolelle?', a: 'Kyllä. Pirkanmaan ulkopuolisista ja pidemmistä kuljetuksista annamme tarjouksen koko reitin ja työn tietojen perusteella.' },
      ],
      en: [
        { q: 'Do you offer a van with a driver in Tampere?', a: 'Yes. A van and driver cost from €50/hour, including Finnish VAT (25.5%). The minimum booking is one hour.' },
        { q: 'Can you transport a sofa or washing machine?', a: 'Yes. We arrange suitable transport equipment based on the item details. Share the pickup and delivery addresses, floors, elevator access and whether carrying help is needed.' },
        { q: 'Can you collect furniture from a Tori.fi seller?', a: 'Yes. Share the pickup and delivery addresses, item size and whether carrying help is needed at either location.' },
        { q: 'Does the €50/hour price include VAT?', a: 'Yes. Van + driver starts at €50/hour, including Finnish VAT (25.5%).' },
        { q: 'Do you offer affordable transport in Tampere?', a: 'Yes. For a small load or a single piece of furniture, a van and driver from €50/hour may be a suitable option. Share the item size, weight, pickup and delivery addresses so we can estimate the price in advance.' },
        { q: 'Can you transport business goods and pallets?', a: 'Yes. Business goods and pallet transport can be arranged based on the load and route. MoveX arranges suitable loading and unloading solutions in advance according to the load and locations, including forklifts or other handling equipment when required.' },
        { q: 'Do you deliver parcels and store purchases?', a: 'Yes. We can collect and deliver suitable parcels, furniture, appliances and store purchases in Tampere and Pirkanmaa.' },
        { q: 'Can you transport items outside Tampere?', a: 'Yes. We quote transport outside Pirkanmaa and longer routes based on the complete route and job details.' },
      ],
    },
  },

  {
    path: '/muuttopalvelu-hinta-tampere',
    navLabel: { fi: 'Muuttopalvelun hinta', en: 'Moving cost Tampere' },
    title: {
      fi: 'Muuttoapu ja muuttopalvelun hinta Tampere – hinnasto | MoveX Logistics',
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

  {
    path: '/ikea-kuljetus-tampere',
    navLabel: { fi: 'IKEA-kuljetus Tampere', en: 'IKEA delivery Tampere' },
    title: {
      fi: 'IKEA-kuljetus Tampere – nouto ja kotiinkuljetus | MoveX Logistics',
      en: 'IKEA Delivery in Tampere – Pickup & Home Delivery | MoveX Logistics',
    },
    description: {
      fi: 'IKEA-kuljetus Tampereella ja Pirkanmaalla: noudamme huonekalut ja paketit myymälästä tai noutopisteestä kotiisi. Pakettiauto + kuljettaja 50 €/h sis. alv.',
      en: 'IKEA delivery in Tampere and Pirkanmaa: we collect your furniture and boxes from the store or pickup point and bring them home. Van and driver €50/h incl. VAT.',
    },
    h1: { fi: 'IKEA-kuljetus Tampereella', en: 'IKEA delivery in Tampere' },
    intro: {
      fi: 'Ostitko sängyn, sohvan, kaapin tai monta pakettia IKEAsta, mutta auto on liian pieni? MoveX Logistics noutaa ostokset puolestasi tai yhdessä kanssasi ja toimittaa ne kotiovelle Tampereella ja Pirkanmaalla. Käytössä on tilava pakettiauto (Fiat Ducato, noin 13 m³) ja tarvittaessa kantoapu.',
      en: 'Bought a bed, sofa, wardrobe or a stack of flat-pack boxes at IKEA but your car is too small? MoveX Logistics collects the items for you or together with you and delivers them to your door in Tampere and Pirkanmaa. We use a spacious van (Fiat Ducato, about 13 m³) and can add carrying help.',
    },
    sections: {
      fi: [
        {
          heading: 'Näin IKEA-kuljetus toimii',
          paragraphs: [
            'Kerro meille, mistä tuotteet noudetaan (myymälä tai noutopiste), toimitusosoite, toivottu päivä sekä tuotteiden määrä ja suurimmat paketit. Sovimme ajan, noudamme tuotteet ja kuljetamme ne perille. Jos tarvitset apua kantamisessa portaissa tai sisälle asuntoon, valitse palvelu, jossa on mukana muuttomies.',
            'Varmista ennen noutoa, että tilaus on maksettu ja noudettavissa, ja lähetä meille tilausnumero tai noutovahvistus, jos noudamme tuotteet ilman sinua.',
          ],
        },
        { heading: 'Hinnat', paragraphs: [...prices.fi, priceNote.fi] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        {
          heading: 'How IKEA delivery works',
          paragraphs: [
            'Tell us where to collect the items (store or pickup point), the delivery address, your preferred date, and the number and size of the largest packages. We agree a time, collect the items and drive them to you. If you need help carrying them up the stairs or into your home, choose a service that includes a mover.',
            'Before the pickup, make sure the order is paid and ready for collection. If we collect without you, send us the order number or pickup confirmation.',
          ],
        },
        { heading: 'Prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Service area', paragraphs: [area.en] },
      ],
    },
    faq: {
      fi: [
        { q: 'Voitteko noutaa IKEA-tilauksen ilman minua?', a: 'Kyllä, kun tilaus on maksettu ja noudettavissa. Lähetä meille tilausnumero tai noutovahvistus ja noutoon tarvittavat tiedot.' },
        { q: 'Mahtuuko isompi kalustekokonaisuus kerralla?', a: 'Pakettiauton kuormatila on noin 13 m³, joten tavallinen keittiö-, makuuhuone- tai olohuoneen kalustekokonaisuus mahtuu yleensä yhdellä kertaa. Kerro suurimmat paketit tarjouspyynnössä.' },
        { q: 'Kantavatteko tuotteet sisälle?', a: 'Kyllä, kun valitset palvelun, jossa on mukana muuttomies. Kerro kerros ja onko talossa hissi.' },
        { q: 'Paljonko IKEA-kuljetus maksaa?', a: 'Pakettiauto ja kuljettaja maksaa 50 €/h ja 1 muuttomies + auto 75 €/h (sis. alv 25,5 %). Vähimmäisvaraus on yksi tunti.' },
      ],
      en: [
        { q: 'Can you collect my IKEA order without me?', a: 'Yes, once the order is paid and ready for collection. Send us the order number or pickup confirmation and the details needed for the pickup.' },
        { q: 'Will a larger furniture set fit in one trip?', a: 'The van has about 13 m³ of cargo space, so a typical kitchen, bedroom or living-room set usually fits in one trip. List the largest packages in your quote request.' },
        { q: 'Do you carry the items inside?', a: 'Yes, when you choose a service that includes a mover. Tell us the floor and whether there is a lift.' },
        { q: 'How much does IKEA delivery cost?', a: 'A van and driver costs €50/hour and one mover plus van €75/hour (Finnish VAT 25.5% included). The minimum booking is one hour.' },
      ],
    },
  },
  {
    path: '/tori-nouto-tampere',
    navLabel: { fi: 'Tori- ja Marketplace-nouto', en: 'Tori & Marketplace pickup' },
    title: {
      fi: 'Tori.fi- ja Marketplace-nouto Tampere | MoveX Logistics',
      en: 'Tori.fi & Facebook Marketplace Pickup in Tampere | MoveX Logistics',
    },
    description: {
      fi: 'Ostitko sohvan tai pesukoneen Tori.fi:stä tai Facebook Marketplacesta? Noudamme tavaran myyjältä ja tuomme sen kotiisi Tampereella ja Pirkanmaalla. 50 €/h sis. alv.',
      en: 'Bought a sofa or washing machine on Tori.fi or Facebook Marketplace? We collect it from the seller and deliver it to your home in Tampere and Pirkanmaa. €50/h incl. VAT.',
    },
    h1: { fi: 'Tori.fi- ja Marketplace-noudot Tampereella', en: 'Tori.fi and Marketplace pickups in Tampere' },
    intro: {
      fi: 'Löysitkö hyvän sohvan, sängyn, pöydän tai kodinkoneen Tori.fi:stä tai Facebook Marketplacesta, mutta kuljetus puuttuu? MoveX Logistics noutaa tavaran myyjältä ja toimittaa sen sinulle Tampereella ja Pirkanmaalla – myös samana päivänä, jos aikataulu sallii.',
      en: 'Found a great sofa, bed, table or appliance on Tori.fi or Facebook Marketplace but have no way to move it? MoveX Logistics collects the item from the seller and delivers it to you in Tampere and Pirkanmaa – even on the same day when the schedule allows.',
    },
    sections: {
      fi: [
        {
          heading: 'Näin nouto toimii',
          paragraphs: [
            'Sovi kauppa ja maksu myyjän kanssa ennen noutoa. Lähetä meille myyjän osoite, toimitusosoite, toivottu aika sekä kuvaus tai kuva tavarasta (koko, paino, kerros ja hissi molemmissa päissä). Sovimme ajan ja hoidamme noudon ja kuljetuksen.',
            'Painavat tavarat, kuten pesukoneet, jääkaapit ja isot sohvat, vaativat yleensä kaksi kantajaa. Valitse silloin palvelu, jossa on mukana muuttomies.',
          ],
        },
        { heading: 'Hinnat', paragraphs: [...prices.fi, priceNote.fi] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        {
          heading: 'How the pickup works',
          paragraphs: [
            'Agree the purchase and payment with the seller before the pickup. Send us the seller’s address, the delivery address, your preferred time and a description or photo of the item (size, weight, floor and lift at both ends). We agree a time and take care of the pickup and delivery.',
            'Heavy items such as washing machines, fridges and large sofas usually need two people to carry. In that case, choose a service that includes a mover.',
          ],
        },
        { heading: 'Prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Service area', paragraphs: [area.en] },
      ],
    },
    faq: {
      fi: [
        { q: 'Maksatteko tavaran myyjälle puolestani?', a: 'Emme. Sovi kauppa ja maksu suoraan myyjän kanssa ennen noutoa, niin nouto sujuu nopeasti.' },
        { q: 'Onnistuuko nouto samana päivänä?', a: 'Usein onnistuu, jos aikataulu sallii. Soita tai lähetä WhatsApp-viesti, niin kerromme vapaat ajat.' },
        { q: 'Tarvitsenko kantoapua?', a: 'Kevyet tavarat kuljettaja voi hoitaa. Painavat tai isot tavarat, kuten pesukoneet ja sohvat, vaativat yleensä kaksi kantajaa – valitse silloin 1 muuttomies + auto.' },
        { q: 'Paljonko nouto maksaa?', a: 'Pakettiauto ja kuljettaja 50 €/h, 1 muuttomies + auto 75 €/h (sis. alv 25,5 %). Vähimmäisvaraus on yksi tunti.' },
      ],
      en: [
        { q: 'Do you pay the seller on my behalf?', a: 'No. Agree the purchase and payment directly with the seller before the pickup so it goes quickly.' },
        { q: 'Is same-day pickup possible?', a: 'Often, if the schedule allows. Call or send a WhatsApp message and we will tell you the available times.' },
        { q: 'Do I need carrying help?', a: 'The driver can handle light items. Heavy or bulky items such as washing machines and sofas usually need two people – choose 1 mover + van.' },
        { q: 'How much does a pickup cost?', a: 'Van and driver €50/hour, 1 mover + van €75/hour (Finnish VAT 25.5% included). The minimum booking is one hour.' },
      ],
    },
  },
  {
    path: '/kodinkonekuljetus-tampere',
    navLabel: { fi: 'Kodinkonekuljetus Tampere', en: 'Appliance transport Tampere' },
    title: {
      fi: 'Kodinkonekuljetus Tampere – pesukone, jääkaappi, liesi | MoveX Logistics',
      en: 'Appliance Transport in Tampere – Washing Machines & Fridges | MoveX Logistics',
    },
    description: {
      fi: 'Kodinkoneiden kuljetus Tampereella ja Pirkanmaalla: pesukoneet, jääkaapit, pakastimet ja liedet. Kantoapu saatavilla. 1 muuttomies + auto 75 €/h sis. alv.',
      en: 'Appliance transport in Tampere and Pirkanmaa: washing machines, fridges, freezers and cookers. Carrying help available. 1 mover + van €75/h incl. VAT.',
    },
    h1: { fi: 'Kodinkonekuljetus Tampereella', en: 'Appliance transport in Tampere' },
    intro: {
      fi: 'Pesukone, jääkaappi, pakastin tai liesi on painava ja hankala kantaa. MoveX Logistics kuljettaa kodinkoneet kaupasta, Tori.fi-myyjältä tai vanhasta kodista uuteen osoitteeseen Tampereella ja Pirkanmaalla. Painaville laitteille suosittelemme palvelua, jossa on mukana muuttomies.',
      en: 'A washing machine, fridge, freezer or cooker is heavy and awkward to carry. MoveX Logistics transports appliances from a store, a Tori.fi seller or your old home to the new address in Tampere and Pirkanmaa. For heavy appliances we recommend a service that includes a mover.',
    },
    sections: {
      fi: [
        {
          heading: 'Näin valmistaudut kodinkoneen kuljetukseen',
          paragraphs: [
            'Irrota laite vesi- ja sähköliitännöistä ennen noutoa. Pesukoneeseen kannattaa asentaa kuljetuslukitus, jos se on tallessa. Sulata ja kuivaa jääkaappi tai pakastin edellisenä päivänä.',
            'Kerro tarjouspyynnössä laitteen tyyppi, kerrokset ja onko molemmissa päissä hissi. Kahden kantajan työ sujuu turvallisesti, kun valitset 1 muuttomies + auto -palvelun.',
          ],
        },
        { heading: 'Hinnat', paragraphs: [...prices.fi, priceNote.fi] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        {
          heading: 'How to prepare an appliance for transport',
          paragraphs: [
            'Disconnect the appliance from water and power before the pickup. If you still have the washing machine’s transport bolts, fit them. Defrost and dry a fridge or freezer the day before.',
            'In your quote request, tell us the type of appliance, the floors and whether there is a lift at both ends. Carrying with two people is safe when you choose the 1 mover + van service.',
          ],
        },
        { heading: 'Prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Service area', paragraphs: [area.en] },
      ],
    },
    faq: {
      fi: [
        { q: 'Kuljetatteko pesukoneen tai jääkaapin Tori.fi-myyjältä?', a: 'Kyllä. Sovi kauppa ja maksu myyjän kanssa, ja lähetä meille nouto- ja toimitusosoite sekä kerrokset.' },
        { q: 'Tarvitaanko kaksi kantajaa?', a: 'Pesukoneet, jääkaapit ja pakastimet ovat yleensä niin painavia, että suosittelemme palvelua 1 muuttomies + auto (75 €/h).' },
        { q: 'Mitä minun pitää tehdä ennen noutoa?', a: 'Irrota laite liitännöistä, sulata jääkaappi tai pakastin ja varmista, että kulkureitti on vapaa.' },
        { q: 'Paljonko kodinkonekuljetus maksaa?', a: 'Pakettiauto + kuljettaja 50 €/h, 1 muuttomies + auto 75 €/h (sis. alv 25,5 %). Vähimmäisvaraus on yksi tunti.' },
      ],
      en: [
        { q: 'Can you collect a washing machine or fridge from a Tori.fi seller?', a: 'Yes. Agree the purchase and payment with the seller, then send us the pickup and delivery addresses and the floors.' },
        { q: 'Are two people needed?', a: 'Washing machines, fridges and freezers are usually heavy enough that we recommend the 1 mover + van service (€75/hour).' },
        { q: 'What should I do before the pickup?', a: 'Disconnect the appliance, defrost a fridge or freezer and make sure the route out is clear.' },
        { q: 'How much does appliance transport cost?', a: 'Van + driver €50/hour, 1 mover + van €75/hour (Finnish VAT 25.5% included). The minimum booking is one hour.' },
      ],
    },
  },
  {
    path: '/opiskelijamuutto-tampere',
    navLabel: { fi: 'Opiskelijamuutto Tampere', en: 'Student move Tampere' },
    title: {
      fi: 'Opiskelijamuutto Tampere – edullinen muuttoapu | MoveX Logistics',
      en: 'Student Move in Tampere – Affordable Moving Help | MoveX Logistics',
    },
    description: {
      fi: 'Opiskelijamuutto Tampereella: yksiö, soluhuone tai muutama huonekalu. Pakettiauto + kuljettaja 50 €/h sis. alv, kantoapu saatavilla. Pyydä tarjous.',
      en: 'Student moves in Tampere: studio, shared flat room or a few pieces of furniture. Van + driver €50/h incl. VAT, carrying help available. Request a quote.',
    },
    h1: { fi: 'Opiskelijamuutto Tampereella', en: 'Student moves in Tampere' },
    intro: {
      fi: 'Muutatko opiskelija-asuntoon, solusta yksiöön tai pois Tampereelta? MoveX Logistics hoitaa pienet opiskelijamuutot nopeasti ja selkein hinnoin. Valitse pelkkä pakettiauto ja kuljettaja, jos kannat itse, tai lisää muuttomies, jos haluat apua kantamiseen.',
      en: 'Moving into student housing, from a shared flat to a studio, or away from Tampere? MoveX Logistics handles small student moves quickly with clear prices. Choose a van and driver if you carry yourself, or add a mover if you want help carrying.',
    },
    sections: {
      fi: [
        {
          heading: 'Vinkit edulliseen opiskelijamuuttoon',
          paragraphs: [
            'Pakkaa kaikki pienet tavarat laatikoihin ja kasseihin ennen kuin auto saapuu, ja pura isot huonekalut valmiiksi, jos mahdollista. Kun tavarat ovat valmiina oven lähellä, muutto on nopea ja tunnit pysyvät vähissä.',
            'Suositut muuttopäivät ovat kuun lopussa ja elokuussa lukukauden alussa. Varaa aika hyvissä ajoin, niin saat sopivan päivän.',
          ],
        },
        { heading: 'Hinnat', paragraphs: [...prices.fi, priceNote.fi] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        {
          heading: 'Tips for an affordable student move',
          paragraphs: [
            'Pack all small items into boxes and bags before the van arrives, and take large furniture apart in advance if you can. When everything is ready near the door, the move is quick and the hours stay low.',
            'Popular moving days are at the end of the month and in August at the start of term. Book early to get a suitable day.',
          ],
        },
        { heading: 'Prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Service area', paragraphs: [area.en] },
      ],
    },
    faq: {
      fi: [
        { q: 'Mikä on edullisin vaihtoehto opiskelijamuuttoon?', a: 'Jos jaksat kantaa itse tai sinulla on kavereita apuna, pakettiauto + kuljettaja 50 €/h on edullisin vaihtoehto.' },
        { q: 'Mahtuuko yksiön tavarat yhdellä kertaa?', a: 'Pakettiauton kuormatila on noin 13 m³, joten tavallisen yksiön tai soluhuoneen tavarat mahtuvat yleensä yhdellä kertaa.' },
        { q: 'Voinko muuttaa viikonloppuna?', a: 'Palvelemme joka päivä klo 7–21. Varaa aika etukäteen, varsinkin kuun lopussa.' },
        { q: 'Paljonko opiskelijamuutto maksaa?', a: 'Pakettiauto + kuljettaja 50 €/h ja 1 muuttomies + auto 75 €/h (sis. alv 25,5 %). Vähimmäisvaraus on yksi tunti.' },
      ],
      en: [
        { q: 'What is the most affordable option for a student move?', a: 'If you can carry yourself or have friends helping, van + driver at €50/hour is the most affordable option.' },
        { q: 'Will a studio’s belongings fit in one trip?', a: 'The van has about 13 m³ of cargo space, so the belongings of a typical studio or shared-flat room usually fit in one trip.' },
        { q: 'Can I move at the weekend?', a: 'We serve every day from 7:00 to 21:00. Book in advance, especially at the end of the month.' },
        { q: 'How much does a student move cost?', a: 'Van + driver €50/hour and 1 mover + van €75/hour (Finnish VAT 25.5% included). The minimum booking is one hour.' },
      ],
    },
  },
  {
    path: '/kaatopaikkakuljetus-tampere',
    navLabel: { fi: 'Kaatopaikkakuljetus Tampere', en: 'Junk removal Tampere' },
    title: {
      fi: 'Kaatopaikkakuljetus Tampere – vanhojen huonekalujen poisvienti | MoveX Logistics',
      en: 'Junk Removal in Tampere – Old Furniture Taken Away | MoveX Logistics',
    },
    description: {
      fi: 'Viemme vanhat sohvat, tuolit, patjat ja muut tavarat jäteasemalle Tampereella ja Pirkanmaalla. Tuntihinta alkaen 50 €/h tai kiinteä hinta tarjouksella.',
      en: 'We take old sofas, chairs, mattresses and other items to the waste station in Tampere and Pirkanmaa. Hourly from €50/h or a fixed price by quote.',
    },
    h1: { fi: 'Kaatopaikkakuljetus Tampereella', en: 'Junk removal in Tampere' },
    intro: {
      fi: 'Onko kotona vanha sohva, tuoleja, patja tai muuta tavaraa, joka pitää viedä pois? MoveX Logistics hakee tavarat ja vie ne jäteasemalle Tampereella ja Pirkanmaalla. Voit valita, maksatko tuntihinnan vai pyydätkö kiinteän hinnan etukäteen.',
      en: 'Have an old sofa, chairs, a mattress or other items that need to go? MoveX Logistics collects them and takes them to the waste station in Tampere and Pirkanmaa. You can choose to pay by the hour or ask for a fixed price in advance.',
    },
    sections: {
      fi: [
        {
          heading: 'Kaksi tapaa hinnoitella',
          paragraphs: [
            'Tuntihinta: maksat työhön kuluneesta ajasta hinnaston mukaan.',
            'Kiinteä hinta: kerro meille noutopaikka, mitä viedään (esimerkiksi sohva ja neljä tuolia), kerros ja onko talossa hissi. Laskemme matkan ja työn ja lähetämme sinulle tarjouksen ennen työn aloittamista.',
            'Mahdolliset jäteaseman vastaanottomaksut sovitaan tarjouksessa.',
          ],
        },
        { heading: 'Tuntihinnat', paragraphs: [...prices.fi, priceNote.fi] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        {
          heading: 'Two ways to price the job',
          paragraphs: [
            'Hourly rate: you pay for the time the job takes, according to the price list.',
            'Fixed price: tell us the pickup address, what needs to go (for example a sofa and four chairs), the floor and whether there is a lift. We work out the distance and the work and send you a quote before the job starts.',
            'Any waste station reception fees are agreed in the quote.',
          ],
        },
        { heading: 'Hourly prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Service area', paragraphs: [area.en] },
      ],
    },
    faq: {
      fi: [
        { q: 'Voinko saada kiinteän hinnan?', a: 'Kyllä. Kerro noutopaikka, tavarat, kerros ja hissi, niin lähetämme tarjouksen ennen työn aloittamista.' },
        { q: 'Mitä tavaroita viette?', a: 'Esimerkiksi sohvat, tuolit, pöydät, sängyt, patjat ja muut huonekalut. Kerro tavarat tarjouspyynnössä.' },
        { q: 'Kannatteko tavarat ulos asunnosta?', a: 'Kyllä, kun valitset palvelun, jossa on mukana muuttomies. Kerro kerros ja onko talossa hissi.' },
        { q: 'Paljonko kaatopaikkakuljetus maksaa tuntihinnalla?', a: 'Pakettiauto + kuljettaja 50 €/h ja 1 muuttomies + auto 75 €/h (sis. alv 25,5 %). Vähimmäisvaraus on yksi tunti.' },
      ],
      en: [
        { q: 'Can I get a fixed price?', a: 'Yes. Tell us the pickup address, the items, the floor and whether there is a lift, and we send a quote before the job starts.' },
        { q: 'What items do you take?', a: 'For example sofas, chairs, tables, beds, mattresses and other furniture. List the items in your quote request.' },
        { q: 'Do you carry the items out of the flat?', a: 'Yes, when you choose a service that includes a mover. Tell us the floor and whether there is a lift.' },
        { q: 'How much does junk removal cost by the hour?', a: 'Van + driver €50/hour and 1 mover + van €75/hour (Finnish VAT 25.5% included). The minimum booking is one hour.' },
      ],
    },
  },
  {
    path: '/muutto-nokia',
    area: true,
    navLabel: { fi: 'Muutto Nokia', en: 'Moving Nokia' },
    title: { fi: 'Muutto Nokia – muuttofirma ja kuljetukset Nokialla | MoveX Logistics', en: 'Moving in Nokia – Movers & Transport | MoveX Logistics' },
    description: { fi: 'Muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot sekä kaatopaikkakuljetukset Nokialla. Pakettiauto + kuljettaja 50 €/h sis. alv. Pyydä tarjous.', en: 'Moves, furniture transport, IKEA and Tori.fi pickups and junk removal in Nokia, near Tampere. Van + driver €50/h incl. VAT. Request a quote.' },
    h1: { fi: 'Muutto ja kuljetukset Nokialla', en: 'Moving and transport in Nokia' },
    intro: { fi: 'Muutatko Nokialla tai Nokialta Tampereelle? MoveX Logistics hoitaa muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot, kodinkoneiden kuljetukset ja kaatopaikkakuljetukset Nokialla. Nokia sijaitsee Tampereen länsipuolella. Matkaa Tampereen keskustasta on noin 17 km.', en: 'Moving in Nokia or from Nokia to Tampere? MoveX Logistics handles moves, furniture transport, IKEA and Tori.fi pickups, appliance transport and junk removal in Nokia. Nokia lies just west of Tampere. It is about 17 km from Tampere city centre.' },
    sections: {
      fi: [
        { heading: 'Palvelut Nokialla', paragraphs: [
          'Asunto- ja pienmuutot, myös opiskelijamuutot.',
          'Huonekalujen ja kodinkoneiden kuljetus sekä IKEA-, Tori.fi- ja Marketplace-noudot.',
          'Vanhojen huonekalujen vienti jäteasemalle tuntihinnalla tai kiinteällä hinnalla.',
          'Pakettiauto ja kuljettaja tai 1–3 muuttomiestä kantamiseen.',
        ] },
        { heading: 'Hinnat', paragraphs: [...prices.fi, priceNote.fi] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        { heading: 'Services in Nokia', paragraphs: [
          'Apartment and small moves, including student moves.',
          'Furniture and appliance transport, plus IKEA, Tori.fi and Marketplace pickups.',
          'Old furniture taken to the waste station, by the hour or for a fixed price.',
          'Van and driver, or 1–3 movers for carrying.',
        ] },
        { heading: 'Prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Service area', paragraphs: [area.en] },
      ],
    },
    faq: {
      fi: [
        { q: 'Paljonko muutto Nokialla maksaa?', a: 'Pakettiauto + kuljettaja 50 €/h, 1 muuttomies + auto 75 €/h, 2 muuttomiestä + auto 100 €/h ja 3 muuttomiestä + auto 125 €/h (sis. alv 25,5 %). Voit myös pyytää kiinteän hinnan.' },
        { q: 'Kuljetatteko tavaroita Nokialta Tampereelle?', a: 'Kyllä. Kerro nouto- ja toimitusosoite, päivä ja tavaroiden määrä, niin annamme hinnan tai tarjouksen.' },
        { q: 'Milloin palvelette?', a: 'Joka päivä klo 7–21. Varaa aika etukäteen, varsinkin kuun lopussa.' },
      ],
      en: [
        { q: 'How much does a move in Nokia cost?', a: 'Van + driver €50/hour, 1 mover + van €75/hour, 2 movers + van €100/hour and 3 movers + van €125/hour (Finnish VAT 25.5% included). You can also ask for a fixed price.' },
        { q: 'Do you transport items from Nokia to Tampere?', a: 'Yes. Send the pickup and delivery addresses, the date and the amount of items, and we give you a price or quote.' },
        { q: 'When are you available?', a: 'Every day from 7:00 to 21:00. Book in advance, especially at the end of the month.' },
      ],
    },
  },
  {
    path: '/muutto-ylojarvi',
    area: true,
    navLabel: { fi: 'Muutto Ylöjärvi', en: 'Moving Ylöjärvi' },
    title: { fi: 'Muutto Ylöjärvi – muuttofirma ja kuljetukset Ylöjärvellä | MoveX Logistics', en: 'Moving in Ylöjärvi – Movers & Transport | MoveX Logistics' },
    description: { fi: 'Muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot sekä kaatopaikkakuljetukset Ylöjärvellä. Pakettiauto + kuljettaja 50 €/h sis. alv. Pyydä tarjous.', en: 'Moves, furniture transport, IKEA and Tori.fi pickups and junk removal in Ylöjärvi, near Tampere. Van + driver €50/h incl. VAT. Request a quote.' },
    h1: { fi: 'Muutto ja kuljetukset Ylöjärvellä', en: 'Moving and transport in Ylöjärvi' },
    intro: { fi: 'Muutatko Ylöjärvellä tai Ylöjärveltä Tampereelle? MoveX Logistics hoitaa muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot, kodinkoneiden kuljetukset ja kaatopaikkakuljetukset Ylöjärvellä. Ylöjärvi sijaitsee Tampereen luoteispuolella. Matkaa Tampereen keskustasta on noin 17 km.', en: 'Moving in Ylöjärvi or from Ylöjärvi to Tampere? MoveX Logistics handles moves, furniture transport, IKEA and Tori.fi pickups, appliance transport and junk removal in Ylöjärvi. Ylöjärvi lies north-west of Tampere. It is about 17 km from Tampere city centre.' },
    sections: {
      fi: [
        { heading: 'Palvelut Ylöjärvellä', paragraphs: [
          'Asunto- ja pienmuutot, myös opiskelijamuutot.',
          'Huonekalujen ja kodinkoneiden kuljetus sekä IKEA-, Tori.fi- ja Marketplace-noudot.',
          'Vanhojen huonekalujen vienti jäteasemalle tuntihinnalla tai kiinteällä hinnalla.',
          'Pakettiauto ja kuljettaja tai 1–3 muuttomiestä kantamiseen.',
        ] },
        { heading: 'Hinnat', paragraphs: [...prices.fi, priceNote.fi] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        { heading: 'Services in Ylöjärvi', paragraphs: [
          'Apartment and small moves, including student moves.',
          'Furniture and appliance transport, plus IKEA, Tori.fi and Marketplace pickups.',
          'Old furniture taken to the waste station, by the hour or for a fixed price.',
          'Van and driver, or 1–3 movers for carrying.',
        ] },
        { heading: 'Prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Service area', paragraphs: [area.en] },
      ],
    },
    faq: {
      fi: [
        { q: 'Paljonko muutto Ylöjärvellä maksaa?', a: 'Pakettiauto + kuljettaja 50 €/h, 1 muuttomies + auto 75 €/h, 2 muuttomiestä + auto 100 €/h ja 3 muuttomiestä + auto 125 €/h (sis. alv 25,5 %). Voit myös pyytää kiinteän hinnan.' },
        { q: 'Kuljetatteko tavaroita Ylöjärveltä Tampereelle?', a: 'Kyllä. Kerro nouto- ja toimitusosoite, päivä ja tavaroiden määrä, niin annamme hinnan tai tarjouksen.' },
        { q: 'Milloin palvelette?', a: 'Joka päivä klo 7–21. Varaa aika etukäteen, varsinkin kuun lopussa.' },
      ],
      en: [
        { q: 'How much does a move in Ylöjärvi cost?', a: 'Van + driver €50/hour, 1 mover + van €75/hour, 2 movers + van €100/hour and 3 movers + van €125/hour (Finnish VAT 25.5% included). You can also ask for a fixed price.' },
        { q: 'Do you transport items from Ylöjärvi to Tampere?', a: 'Yes. Send the pickup and delivery addresses, the date and the amount of items, and we give you a price or quote.' },
        { q: 'When are you available?', a: 'Every day from 7:00 to 21:00. Book in advance, especially at the end of the month.' },
      ],
    },
  },
  {
    path: '/muutto-pirkkala',
    area: true,
    navLabel: { fi: 'Muutto Pirkkala', en: 'Moving Pirkkala' },
    title: { fi: 'Muutto Pirkkala – muuttofirma ja kuljetukset Pirkkalassa | MoveX Logistics', en: 'Moving in Pirkkala – Movers & Transport | MoveX Logistics' },
    description: { fi: 'Muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot sekä kaatopaikkakuljetukset Pirkkalassa. Pakettiauto + kuljettaja 50 €/h sis. alv. Pyydä tarjous.', en: 'Moves, furniture transport, IKEA and Tori.fi pickups and junk removal in Pirkkala, near Tampere. Van + driver €50/h incl. VAT. Request a quote.' },
    h1: { fi: 'Muutto ja kuljetukset Pirkkalassa', en: 'Moving and transport in Pirkkala' },
    intro: { fi: 'Muutatko Pirkkalassa tai Pirkkalasta Tampereelle? MoveX Logistics hoitaa muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot, kodinkoneiden kuljetukset ja kaatopaikkakuljetukset Pirkkalassa. Pirkkala sijaitsee Tampereen lounaispuolella, Tampere-Pirkkalan lentoaseman lähellä. Matkaa Tampereen keskustasta on noin 12 km.', en: 'Moving in Pirkkala or from Pirkkala to Tampere? MoveX Logistics handles moves, furniture transport, IKEA and Tori.fi pickups, appliance transport and junk removal in Pirkkala. Pirkkala lies south-west of Tampere, near Tampere-Pirkkala Airport. It is about 12 km from Tampere city centre.' },
    sections: {
      fi: [
        { heading: 'Palvelut Pirkkalassa', paragraphs: [
          'Asunto- ja pienmuutot, myös opiskelijamuutot.',
          'Huonekalujen ja kodinkoneiden kuljetus sekä IKEA-, Tori.fi- ja Marketplace-noudot.',
          'Vanhojen huonekalujen vienti jäteasemalle tuntihinnalla tai kiinteällä hinnalla.',
          'Pakettiauto ja kuljettaja tai 1–3 muuttomiestä kantamiseen.',
        ] },
        { heading: 'Hinnat', paragraphs: [...prices.fi, priceNote.fi] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        { heading: 'Services in Pirkkala', paragraphs: [
          'Apartment and small moves, including student moves.',
          'Furniture and appliance transport, plus IKEA, Tori.fi and Marketplace pickups.',
          'Old furniture taken to the waste station, by the hour or for a fixed price.',
          'Van and driver, or 1–3 movers for carrying.',
        ] },
        { heading: 'Prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Service area', paragraphs: [area.en] },
      ],
    },
    faq: {
      fi: [
        { q: 'Paljonko muutto Pirkkalassa maksaa?', a: 'Pakettiauto + kuljettaja 50 €/h, 1 muuttomies + auto 75 €/h, 2 muuttomiestä + auto 100 €/h ja 3 muuttomiestä + auto 125 €/h (sis. alv 25,5 %). Voit myös pyytää kiinteän hinnan.' },
        { q: 'Kuljetatteko tavaroita Pirkkalasta Tampereelle?', a: 'Kyllä. Kerro nouto- ja toimitusosoite, päivä ja tavaroiden määrä, niin annamme hinnan tai tarjouksen.' },
        { q: 'Milloin palvelette?', a: 'Joka päivä klo 7–21. Varaa aika etukäteen, varsinkin kuun lopussa.' },
      ],
      en: [
        { q: 'How much does a move in Pirkkala cost?', a: 'Van + driver €50/hour, 1 mover + van €75/hour, 2 movers + van €100/hour and 3 movers + van €125/hour (Finnish VAT 25.5% included). You can also ask for a fixed price.' },
        { q: 'Do you transport items from Pirkkala to Tampere?', a: 'Yes. Send the pickup and delivery addresses, the date and the amount of items, and we give you a price or quote.' },
        { q: 'When are you available?', a: 'Every day from 7:00 to 21:00. Book in advance, especially at the end of the month.' },
      ],
    },
  },
  {
    path: '/muutto-lempaala',
    area: true,
    navLabel: { fi: 'Muutto Lempäälä', en: 'Moving Lempäälä' },
    title: { fi: 'Muutto Lempäälä – muuttofirma ja kuljetukset Lempäälässä | MoveX Logistics', en: 'Moving in Lempäälä – Movers & Transport | MoveX Logistics' },
    description: { fi: 'Muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot sekä kaatopaikkakuljetukset Lempäälässä. Pakettiauto + kuljettaja 50 €/h sis. alv. Pyydä tarjous.', en: 'Moves, furniture transport, IKEA and Tori.fi pickups and junk removal in Lempäälä, near Tampere. Van + driver €50/h incl. VAT. Request a quote.' },
    h1: { fi: 'Muutto ja kuljetukset Lempäälässä', en: 'Moving and transport in Lempäälä' },
    intro: { fi: 'Muutatko Lempäälässä tai Lempäälästä Tampereelle? MoveX Logistics hoitaa muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot, kodinkoneiden kuljetukset ja kaatopaikkakuljetukset Lempäälässä. Lempäälä sijaitsee Tampereen eteläpuolella. Noudamme myös Ideaparkista ostetut huonekalut ja kodinkoneet. Matkaa Tampereen keskustasta on noin 22 km.', en: 'Moving in Lempäälä or from Lempäälä to Tampere? MoveX Logistics handles moves, furniture transport, IKEA and Tori.fi pickups, appliance transport and junk removal in Lempäälä. Lempäälä lies south of Tampere. We also collect furniture and appliances bought at Ideapark. It is about 22 km from Tampere city centre.' },
    sections: {
      fi: [
        { heading: 'Palvelut Lempäälässä', paragraphs: [
          'Asunto- ja pienmuutot, myös opiskelijamuutot.',
          'Huonekalujen ja kodinkoneiden kuljetus sekä IKEA-, Tori.fi- ja Marketplace-noudot.',
          'Vanhojen huonekalujen vienti jäteasemalle tuntihinnalla tai kiinteällä hinnalla.',
          'Pakettiauto ja kuljettaja tai 1–3 muuttomiestä kantamiseen.',
        ] },
        { heading: 'Hinnat', paragraphs: [...prices.fi, priceNote.fi] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        { heading: 'Services in Lempäälä', paragraphs: [
          'Apartment and small moves, including student moves.',
          'Furniture and appliance transport, plus IKEA, Tori.fi and Marketplace pickups.',
          'Old furniture taken to the waste station, by the hour or for a fixed price.',
          'Van and driver, or 1–3 movers for carrying.',
        ] },
        { heading: 'Prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Service area', paragraphs: [area.en] },
      ],
    },
    faq: {
      fi: [
        { q: 'Paljonko muutto Lempäälässä maksaa?', a: 'Pakettiauto + kuljettaja 50 €/h, 1 muuttomies + auto 75 €/h, 2 muuttomiestä + auto 100 €/h ja 3 muuttomiestä + auto 125 €/h (sis. alv 25,5 %). Voit myös pyytää kiinteän hinnan.' },
        { q: 'Kuljetatteko tavaroita Lempäälästä Tampereelle?', a: 'Kyllä. Kerro nouto- ja toimitusosoite, päivä ja tavaroiden määrä, niin annamme hinnan tai tarjouksen.' },
        { q: 'Milloin palvelette?', a: 'Joka päivä klo 7–21. Varaa aika etukäteen, varsinkin kuun lopussa.' },
      ],
      en: [
        { q: 'How much does a move in Lempäälä cost?', a: 'Van + driver €50/hour, 1 mover + van €75/hour, 2 movers + van €100/hour and 3 movers + van €125/hour (Finnish VAT 25.5% included). You can also ask for a fixed price.' },
        { q: 'Do you transport items from Lempäälä to Tampere?', a: 'Yes. Send the pickup and delivery addresses, the date and the amount of items, and we give you a price or quote.' },
        { q: 'When are you available?', a: 'Every day from 7:00 to 21:00. Book in advance, especially at the end of the month.' },
      ],
    },
  },
  {
    path: '/muutto-kangasala',
    area: true,
    navLabel: { fi: 'Muutto Kangasala', en: 'Moving Kangasala' },
    title: { fi: 'Muutto Kangasala – muuttofirma ja kuljetukset Kangasalla | MoveX Logistics', en: 'Moving in Kangasala – Movers & Transport | MoveX Logistics' },
    description: { fi: 'Muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot sekä kaatopaikkakuljetukset Kangasalla. Pakettiauto + kuljettaja 50 €/h sis. alv. Pyydä tarjous.', en: 'Moves, furniture transport, IKEA and Tori.fi pickups and junk removal in Kangasala, near Tampere. Van + driver €50/h incl. VAT. Request a quote.' },
    h1: { fi: 'Muutto ja kuljetukset Kangasalla', en: 'Moving and transport in Kangasala' },
    intro: { fi: 'Muutatko Kangasalla tai Kangasalta Tampereelle? MoveX Logistics hoitaa muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot, kodinkoneiden kuljetukset ja kaatopaikkakuljetukset Kangasalla. Kangasala sijaitsee Tampereen itäpuolella. Matkaa Tampereen keskustasta on noin 18 km.', en: 'Moving in Kangasala or from Kangasala to Tampere? MoveX Logistics handles moves, furniture transport, IKEA and Tori.fi pickups, appliance transport and junk removal in Kangasala. Kangasala lies east of Tampere. It is about 18 km from Tampere city centre.' },
    sections: {
      fi: [
        { heading: 'Palvelut Kangasalla', paragraphs: [
          'Asunto- ja pienmuutot, myös opiskelijamuutot.',
          'Huonekalujen ja kodinkoneiden kuljetus sekä IKEA-, Tori.fi- ja Marketplace-noudot.',
          'Vanhojen huonekalujen vienti jäteasemalle tuntihinnalla tai kiinteällä hinnalla.',
          'Pakettiauto ja kuljettaja tai 1–3 muuttomiestä kantamiseen.',
        ] },
        { heading: 'Hinnat', paragraphs: [...prices.fi, priceNote.fi] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        { heading: 'Services in Kangasala', paragraphs: [
          'Apartment and small moves, including student moves.',
          'Furniture and appliance transport, plus IKEA, Tori.fi and Marketplace pickups.',
          'Old furniture taken to the waste station, by the hour or for a fixed price.',
          'Van and driver, or 1–3 movers for carrying.',
        ] },
        { heading: 'Prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Service area', paragraphs: [area.en] },
      ],
    },
    faq: {
      fi: [
        { q: 'Paljonko muutto Kangasalla maksaa?', a: 'Pakettiauto + kuljettaja 50 €/h, 1 muuttomies + auto 75 €/h, 2 muuttomiestä + auto 100 €/h ja 3 muuttomiestä + auto 125 €/h (sis. alv 25,5 %). Voit myös pyytää kiinteän hinnan.' },
        { q: 'Kuljetatteko tavaroita Kangasalta Tampereelle?', a: 'Kyllä. Kerro nouto- ja toimitusosoite, päivä ja tavaroiden määrä, niin annamme hinnan tai tarjouksen.' },
        { q: 'Milloin palvelette?', a: 'Joka päivä klo 7–21. Varaa aika etukäteen, varsinkin kuun lopussa.' },
      ],
      en: [
        { q: 'How much does a move in Kangasala cost?', a: 'Van + driver €50/hour, 1 mover + van €75/hour, 2 movers + van €100/hour and 3 movers + van €125/hour (Finnish VAT 25.5% included). You can also ask for a fixed price.' },
        { q: 'Do you transport items from Kangasala to Tampere?', a: 'Yes. Send the pickup and delivery addresses, the date and the amount of items, and we give you a price or quote.' },
        { q: 'When are you available?', a: 'Every day from 7:00 to 21:00. Book in advance, especially at the end of the month.' },
      ],
    },
  },
  {
    path: '/muutto-hervanta',
    area: true,
    navLabel: { fi: 'Muutto Hervanta', en: 'Moving Hervanta' },
    title: { fi: 'Muutto Hervanta – muuttofirma ja kuljetukset Hervannassa | MoveX Logistics', en: 'Moving in Hervanta – Movers & Transport | MoveX Logistics' },
    description: { fi: 'Muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot sekä kaatopaikkakuljetukset Hervannassa. Pakettiauto + kuljettaja 50 €/h sis. alv. Pyydä tarjous.', en: 'Moves, furniture transport, IKEA and Tori.fi pickups and junk removal in Hervanta, near Tampere. Van + driver €50/h incl. VAT. Request a quote.' },
    h1: { fi: 'Muutto ja kuljetukset Hervannassa', en: 'Moving and transport in Hervanta' },
    intro: { fi: 'Muutatko Hervannassa tai Hervannasta Tampereelle? MoveX Logistics hoitaa muutot, huonekalukuljetukset, IKEA- ja Tori.fi-noudot, kodinkoneiden kuljetukset ja kaatopaikkakuljetukset Hervannassa. Hervanta on Tampereen eteläosa, jossa on Tampereen yliopiston Hervannan kampus ja paljon opiskelija-asuntoja. Matkaa Tampereen keskustasta on noin 8 km.', en: 'Moving in Hervanta or from Hervanta to Tampere? MoveX Logistics handles moves, furniture transport, IKEA and Tori.fi pickups, appliance transport and junk removal in Hervanta. Hervanta is a district in southern Tampere with Tampere University\u2019s Hervanta campus and a lot of student housing. It is about 8 km from Tampere city centre.' },
    sections: {
      fi: [
        { heading: 'Palvelut Hervannassa', paragraphs: [
          'Asunto- ja pienmuutot, myös opiskelijamuutot.',
          'Huonekalujen ja kodinkoneiden kuljetus sekä IKEA-, Tori.fi- ja Marketplace-noudot.',
          'Vanhojen huonekalujen vienti jäteasemalle tuntihinnalla tai kiinteällä hinnalla.',
          'Pakettiauto ja kuljettaja tai 1–3 muuttomiestä kantamiseen.',
        ] },
        { heading: 'Hinnat', paragraphs: [...prices.fi, priceNote.fi] },
        { heading: 'Toiminta-alue', paragraphs: [area.fi] },
      ],
      en: [
        { heading: 'Services in Hervanta', paragraphs: [
          'Apartment and small moves, including student moves.',
          'Furniture and appliance transport, plus IKEA, Tori.fi and Marketplace pickups.',
          'Old furniture taken to the waste station, by the hour or for a fixed price.',
          'Van and driver, or 1–3 movers for carrying.',
        ] },
        { heading: 'Prices', paragraphs: [...prices.en, priceNote.en] },
        { heading: 'Service area', paragraphs: [area.en] },
      ],
    },
    faq: {
      fi: [
        { q: 'Paljonko muutto Hervannassa maksaa?', a: 'Pakettiauto + kuljettaja 50 €/h, 1 muuttomies + auto 75 €/h, 2 muuttomiestä + auto 100 €/h ja 3 muuttomiestä + auto 125 €/h (sis. alv 25,5 %). Voit myös pyytää kiinteän hinnan.' },
        { q: 'Kuljetatteko tavaroita Hervannasta Tampereelle?', a: 'Kyllä. Kerro nouto- ja toimitusosoite, päivä ja tavaroiden määrä, niin annamme hinnan tai tarjouksen.' },
        { q: 'Milloin palvelette?', a: 'Joka päivä klo 7–21. Varaa aika etukäteen, varsinkin kuun lopussa.' },
      ],
      en: [
        { q: 'How much does a move in Hervanta cost?', a: 'Van + driver €50/hour, 1 mover + van €75/hour, 2 movers + van €100/hour and 3 movers + van €125/hour (Finnish VAT 25.5% included). You can also ask for a fixed price.' },
        { q: 'Do you transport items from Hervanta to Tampere?', a: 'Yes. Send the pickup and delivery addresses, the date and the amount of items, and we give you a price or quote.' },
        { q: 'When are you available?', a: 'Every day from 7:00 to 21:00. Book in advance, especially at the end of the month.' },
      ],
    },
  },
];

const englishSlugs: Record<string, string> = {
  '/muuttopalvelu-tampere': '/en/moving-service-tampere',
  '/muuttofirma-tampere': '/en/moving-company-tampere',
  '/huonekalukuljetus-tampere': '/en/furniture-transport-tampere',
  '/pieni-muutto-tampere': '/en/small-move-tampere',
  '/kuljetuspalvelu-tampere': '/en/transport-service-tampere',
  '/muuttopalvelu-hinta-tampere': '/en/moving-cost-tampere',
  '/ikea-kuljetus-tampere': '/en/ikea-delivery-tampere',
  '/tori-nouto-tampere': '/en/marketplace-pickup-tampere',
  '/kodinkonekuljetus-tampere': '/en/appliance-transport-tampere',
  '/opiskelijamuutto-tampere': '/en/student-move-tampere',
  '/kaatopaikkakuljetus-tampere': '/en/junk-removal-tampere',
  '/muutto-nokia': '/en/moving-nokia',
  '/muutto-ylojarvi': '/en/moving-ylojarvi',
  '/muutto-pirkkala': '/en/moving-pirkkala',
  '/muutto-lempaala': '/en/moving-lempaala',
  '/muutto-kangasala': '/en/moving-kangasala',
  '/muutto-hervanta': '/en/moving-hervanta',
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
