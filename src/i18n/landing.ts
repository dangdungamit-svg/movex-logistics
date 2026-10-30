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
      fi: 'Muuttopalvelu Tampere ja Pirkanmaa | MoveX Logistics',
      en: 'Moving Service in Tampere & Pirkanmaa | MoveX Logistics',
    },
    description: {
      fi: 'Muuttopalvelu Tampereella ja Pirkanmaalla: asunto- ja pienmuutot, pakettiauto ja kuljettaja tai 1–3 muuttomiestä. Alk. 50 €/h sis. alv. Pyydä tarjous.',
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
        { heading: 'Paikallinen muuttofirma Pirkanmaalla', paragraphs: ['Autamme muutossa Tampereen lisäksi Nokialla, Ylöjärvellä, Pirkkalassa, Lempäälässä ja Kangasalla. Kerro nouto- ja toimitusosoitteet, tavaroiden määrä, kerrokset, hissi ja toivottu muuttopäivä. Tarjous voi olla tuntiperusteinen tai työn tietojen mukaan sovittu kiinteä hinta. Tampereelta muualle Suomeen tehtävät muutot hinnoitellaan koko reitin perusteella.'] },
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
        {
          heading: 'Sohvan, sängyn ja kodinkoneen kuljetus Tampereella',
          paragraphs: [
            'Tarjoamme sohvan kuljetusta, sängyn siirtoa ja pesukoneen tai muun kodinkoneen kuljetusta Tampereella. Voimme noutaa huonekalun esimerkiksi Tori.fi-myyjältä tai kaupasta ja toimittaa sen sovittuun osoitteeseen. Kerro etukäteen esineen mitat, paino, kerrokset, hissin saatavuus ja tarvitaanko kantoapua.',
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
      fi: 'Pieni muutto Tampere | MoveX Logistics',
      en: 'Small Move in Tampere | MoveX Logistics',
    },
    description: {
      fi: 'Pieni muutto Tampereella: yksiö, opiskelijamuutto tai muutama huonekalu. Pakettiauto ja kuljettaja alkaen 50 €/h, alv sisältyy.',
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
            'Pieni muutto voi olla yksiön tai opiskelija-asunnon muutto, muutaman huonekalun siirto, laatikoiden kuljetus tai tavaroiden siirtäminen varastoon. Kerro tavaroiden määrä ja suurimmat esineet, jotta voimme arvioida sopivan ajoneuvon ja tarvittavan kantoavun.',
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
      fi: 'Kuljetuspalvelu Tampere | MoveX Logistics',
      en: 'Transport Service in Tampere | MoveX Logistics',
    },
    description: {
      fi: 'Kuljetuspalvelu Tampereella: huonekalut, kodinkoneet, verkkokauppa- ja Tori.fi-noudot sekä pienkuljetukset. Pakettiauto ja kuljettaja alkaen 50 €/h.',
      en: 'Transport service in Tampere for furniture, appliances, store and Tori.fi pickups and small loads. Van and driver from €50/hour, VAT included.',
    },
    h1: { fi: 'Kuljetuspalvelu Tampere', en: 'Transport service in Tampere' },
    intro: {
      fi: 'Tarvitsetko pakettiauton ja kuljettajan huonekalulle, kodinkoneelle, myymäläostokselle tai muulle tavaralle? MoveX Logistics hoitaa yksittäiset kuljetukset ja pienet tavaraerät Tampereella ja Pirkanmaalla.',
      en: 'Need a van and driver for furniture, an appliance, a store purchase or another item? MoveX Logistics handles single-item deliveries and small loads in Tampere and Pirkanmaa.',
    },
    sections: {
      fi: [
        {
          heading: 'Mitä voimme kuljettaa?',
          paragraphs: [
            'Kuljetamme esimerkiksi sohvia, sänkyjä, pöytiä, kodinkoneita, laatikoita, toimistotarvikkeita sekä Tori.fi- ja Facebook Marketplace -ostoksia. Kuljetuksen sopivuus riippuu esineen mitoista, painosta, lastausolosuhteista ja auton kantavuudesta.',
          ],
        },
        {
          heading: 'Kuljetuksen hinta',
          paragraphs: [
            'Pakettiauto + kuljettaja alkaen 50 € / h. Hinnat sisältävät alv 25,5 %. Vähimmäisvaraus on yksi tunti, minkä jälkeen laskutus jatkuu 30 minuutin jaksoissa.',
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
            'Typical jobs include sofas, beds, tables, appliances, boxes, office supplies and purchases from Tori.fi or Facebook Marketplace. Suitability depends on the item dimensions, weight, loading conditions and the van’s payload limit.',
          ],
        },
        {
          heading: 'Transport price',
          paragraphs: [
            'Van + driver from €50 / hour. Finnish VAT (25.5%) is included. The minimum booking is one hour, then billing continues in 30-minute steps.',
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
        { q: 'Voitteko kuljettaa tavaroita Tampereen ulkopuolelle?', a: 'Kyllä. Pirkanmaan ulkopuolisista ja pidemmistä kuljetuksista annamme tarjouksen koko reitin ja työn tietojen perusteella.' },
      ],
      en: [
        { q: 'Do you offer a van with a driver in Tampere?', a: 'Yes. A van and driver cost from €50/hour, including Finnish VAT (25.5%). The minimum booking is one hour.' },
        { q: 'Can you transport a sofa or washing machine?', a: 'Yes, if the item dimensions and weight fit the vehicle. Share the pickup and delivery addresses, floors, elevator access and whether carrying help is needed.' },
        { q: 'Can you collect furniture from a Tori.fi seller?', a: 'Yes. Share the pickup and delivery addresses, item size and whether carrying help is needed at either location.' },
        { q: 'Does the €50/hour price include VAT?', a: 'Yes. Van + driver starts at €50/hour, including Finnish VAT (25.5%).' },
        { q: 'Can you transport items outside Tampere?', a: 'Yes. We quote transport outside Pirkanmaa and longer routes based on the complete route and job details.' },
      ],
    },
  },
];

export function getLandingPage(path: string) {
  return landingPages.find((p) => p.path === path);
}
