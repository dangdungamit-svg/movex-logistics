export type Language = 'fi' | 'en';

export const COMPANY = {
  name: 'MoveX Logistics',
  businessId: '3615629-3',
  location: 'Tampere, Finland',
  phone: '+358 41 328 6939',
  phoneHref: 'tel:+358413286939',
  phoneFi: '+358 41 328 6939',
  phoneFiHref: 'tel:+358413286939',
  phoneEn: '+358 41 328 6939',
  phoneEnHref: 'tel:+358413286939',
  email: 'dangdung.amit@gmail.com',
  hours: {
    fi: 'Päivittäin 07:00–21:00',
    en: 'Daily 07:00–21:00',
  },
};

export const WHATSAPP_NUMBER = '358413286939';
export const WHATSAPP_MSG_FI =
  'Hei MoveX Logistics, haluaisin pyytää tarjousta kuljetuksesta/muutosta.\n\nNoutopaikka: \nMääränpää: \nToivottu päivä: \nPalvelu: \nLisätiedot: ';
export const WHATSAPP_MSG_EN =
  'Hello MoveX Logistics, I would like to request a quote for transport/moving.\n\nPickup: \nDestination: \nPreferred date: \nService needed: \nDetails: ';

export const EMAIL_SUBJECT = 'MoveX Logistics – Quote Request';
export const EMAIL_SUBJECT_FI = 'MoveX Logistics – Tarjouspyyntö';
export const EMAIL_BODY_FI =
  'Hei,\n\nhaluaisin pyytää tarjousta seuraavalle työlle:\n\nNoutopaikka: \nMääränpää: \nToivottu päivä: \nPalvelu: \nTavaran määrä: \nRaskaat tai erikoisesineet: \n\nYstävällisin terveisin';
export const EMAIL_BODY_EN =
  'Hello,\n\nI would like to request a quote for the following job:\n\nPickup: \nDestination: \nPreferred date: \nType of transport/move: \nApproximate amount of goods: \nAny heavy or special items: \n\nBest regards,';

// Social media placeholders — replace with real profile URLs when available
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1JUDSHgtcJ/',
  instagram: 'https://www.instagram.com/logisticsmovex/',
  tiktok: 'https://www.tiktok.com/@movex.logistics4',
};

// Hero image — real MoveX photo
export const HERO_IMAGE = '/images/14_20260924_225406_0013.png';

export const translations = {
  fi: {
    nav: {
      home: 'Etusivu',
      services: 'Palvelut',
      pricing: 'Hinnat',
      howItWorks: 'Näin se toimii',
      whyMoveX: 'Miksi MoveX',
      faq: 'FAQ',
      blog: 'Blogi',
      contact: 'Yhteydenotto',
      getQuote: 'Pyydä tarjous',
    },
    hero: {
      badge: 'Tampere · Pirkanmaa · Koko Suomi',
      title: 'Muutto ja kuljetus Tampereella – helpoksi',
      subtitle:
        'Ammattimaiset muutto- ja kuljetuspalvelut Tampereella ja koko Suomessa.',
      supporting:
        'Selkeät hinnat, huolellinen käsittely ja suora yhteydenotto.',
      priceLabel: 'ALKAEN',
      price: '50 €',
      priceUnit: '/ tunti',
      vatNote: 'ALV 25,5 % sisältyy',
      minNote: 'Vähimmäisvaraus 1 tunti',
      incrementNote: 'Ensimmäisen tunnin jälkeen laskutus 30 min välein',
      serviceLabel: 'PAKETTIAUTO + KULJETTAJA',
      serviceDesc: 'Ammattimainen kuljettaja ja pakettiauto',
      equipment: 'Ammattimainen muutto- ja kiinnityskalusto',
      ctaQuote: 'Pyydä tarjous',
      ctaWhatsApp: 'WhatsApp',
      ctaCall: 'Soita',
      callLabel: '+358 41 328 6939',
      openDaily: 'Palvelemme päivittäin 07:00–21:00',
    },
    pricing: {
      title: 'Selkeät hinnat',
      subtitle: 'Kaikki hinnat sisältävät alv 25,5 %',
      cards: [
        { name: 'Pakettiauto + kuljettaja', price: '50 €', unit: '/ h', vat: 'ALV sisältyy', min: 'Vähintään 1 h' },
        { name: '1 muuttomies + auto', price: '75 €', unit: '/ h', vat: 'ALV sisältyy', min: 'Vähintään 1 h' },
        { name: '2 muuttomiestä + auto', price: '100 €', unit: '/ h', vat: 'ALV sisältyy', min: 'Vähintään 1 h' },
        { name: '3 muuttomiestä + auto', price: '125 €', unit: '/ h', vat: 'ALV sisältyy', min: 'Vähintään 1 h' },
      ],
      incrementNote: 'Ensimmäisen tunnin jälkeen laskutus jatkuu 30 min välein.',
      furnitureTitle: 'Huonekalu- ja esinekuljetus',
      furniturePrice: 'alkaen 50 €',
      furnitureDesc:
        'Sohvat, sängyt, pöydät, kodinkoneet, Tori.fi-ostokset, kauppanoudot ja muut suuret esineet.',
      furnitureNote:
        'Lopullinen hinta riippuu etäisyydestä, esineen koosta, kantovaatimuksista ja pääsyolosuhteista.',
      longDistanceTitle: 'Kaukokuljetus',
      longDistancePrice: 'Pyydä tarjous',
      longDistanceDesc: 'Kiinteä hinta koko työn mukaan.',
      cta: 'Pyydä tarjous',
      vatNote: 'Kaikki hinnat sisältävät alv 25,5 %.',
      minNote: 'Vähimmäisvarausaika 1 tunti.',
    },
    services: {
      title: 'Palvelumme',
      subtitle: 'Monipuoliset muutto- ja kuljetuspalvelut',
      items: [
        { title: 'Muuttopalvelut', desc: 'Asunto-, talo- ja pienyritysmuutot.' },
        { title: 'Pakettiauto + kuljettaja', desc: 'Ammattimainen kuljettaja ja pakettiauto asiakkaille, jotka tarvitsevat pääasiassa kuljetusta.' },
        { title: 'Muuttomiehet + auto', desc: 'Ammattimainen kantaminen, lastaus, kiinnitys, kuljetus ja purku.' },
        { title: 'Huonekalu- ja esinekuljetus', desc: 'Huonekalut, kodinkoneet, Tori.fi-ostokset, kauppanoudot ja muut suuret esineet.' },
        { title: 'Pienkuljetukset', desc: 'Pienemmät muutot ja yksittäiset kuljetustehtävät.' },
        { title: 'B2B-kuljetus', desc: 'Säännöllinen tai kertaluontoinen kuljetus yrityksille, liikkeille ja toimijoille.' },
        { title: 'Kaukokuljetus', desc: 'Kuljetus- ja muuttopalvelut ympäri Suomea kiinteällä tarjouksella kokonaisuuden perusteella.' },
      ],
    },
    vehicleCapacity: {
      title: 'Ammattimainen kuljetus ja kalusto',
      subtitle: 'Valitsemme oikean kuljetusratkaisun ja kaluston työn mukaan.',
      items: [
        { title: 'Sopiva kuljetus', desc: 'Oikea kuljetusratkaisu jokaiseen työhön.' },
        { title: 'Ammattimainen muuttokalusto', desc: 'Ammattimainen muutto- ja käsittelykalusto.' },
        { title: 'Huonekalujen suojaus', desc: 'Huonekalut ja tavarat suojataan sopivilla suojamateriaaleilla.' },
        { title: 'Kuorman asianmukainen kiinnitys', desc: 'Kuorma kiinnitetään oikein ja turvallisesti kuljetusta varten.' },
        { title: 'Huolellinen lastaus ja purku', desc: 'Huolellinen lastaus, kantaminen ja purku.' },
        { title: 'Joustavat kuljetusratkaisut', desc: 'Joustavat ratkaisut pienistä kuljetuksista kokonaisiin muuttoihin.' },
      ],
    },
    qualitySafety: {
      title: 'Huolellista, turvallista ja ammattitaitoista',
      subtitle: 'Sinun tavarasi. Meidän vastuumme.',
      description:
        'Käsittelemme huonekalusi ja tavarasi huolellisesti noudosta toimitukseen. Käytämme sopivaa suojaa ja kuorman kiinnityskalustoa, jotta esineet pysyvät vakaina ja suojattuina lastaukse',
      items: [
        { title: 'Ammattimainen suojaus', desc: 'Huonekalut ja tavarat suojataan tarvittaessa sopivilla suojamateriaaleilla.' },
        { title: 'Turvallinen kuormankäsittely', desc: 'Tavarat sijoitetaan ja kiinnitetään oikein kuljetusta varten.' },
        { title: 'Muuttokalusto', desc: 'Ammattimaiset muuttopeitteet, hihnat sekä käsittely- ja kiinnityskalusto.' },
        { title: 'Huolellinen käsittely', desc: 'Huolellinen lastaus, kantaminen, kuljetus ja purku.' },
        { title: 'Sopiva kuljetus', desc: 'Ajoneuvo ja kalusto valitaan työn mukaan.' },
        { title: 'Vakuutusturva', desc: 'MoveXilla on yritysvastuuvakuutus, joka on voimassa vakuutusehtojen mukaisesti.' },
        { title: 'Oikeusturvavakuutus', desc: 'Yrityksen oikeusturvavakuutus on voimassa vakuutusehtojen mukaisesti.' },
      ],
    },
    whatsIncluded: {
      title: 'Mitä hintaan sisältyy',
      items: [
        'Ammattimainen kuljetus',
        'Huolellinen lastaus ja purku',
        'Kuorman kiinnitys',
        'Muuttopeitteet ja sopiva suojaus',
        'Sopiva käsittelykalusto',
        'Suora yhteydenotto',
        'ALV sisältyy',
        'Selkeät hinnat',
        'Yritysvastuuvakuutus',
      ],
    },
    longDistance: {
      title: 'Kaukokuljetus',
      subtitle: 'Muutto tai tavaroiden kuljetus Tampereen ulkopuolelle?',
      description:
        'Annamme kiinteän tarjouksen koko työn perusteella. Tarjouksessa otetaan huomioon:',
      factors: [
        'Koko reitti',
        'Etäisyys',
        'Kuljetusvaatimukset',
        'Tavaran määrä ja koko',
        'Lastaus ja purku',
        'Kantovaatimukset',
        'Kerros',
        'Hissi',
        'Pääsyolosuhteet',
        'Arvioitu työaika',
        'Ajoneuvovaatimukset',
      ],
      note: 'Kaukokuljetukset hinnoitellaan erikseen.',
      cta: 'Pyydä tarjous',
    },
    howItWorks: {
      title: 'Näin se toimii',
      subtitle: 'Kolme yksinkertaista askelta',
      steps: [
        { title: 'Ota yhteyttä', desc: 'Soita, laita WhatsAppia tai sähköpostia – kerro kuljetus- tai muuttotarpeesi.' },
        { title: 'Saat tarjouksen', desc: 'Tarkistamme työn tiedot ja annamme selkeän hinnan tai tarjouksen.' },
        { title: 'Hoidamme työn', desc: 'Saavumme sovittuna aikana, käsittelemme tavarasi huolellisesti ja hoidamme kuljetuksen ammattitaidolla.' },
      ],
    },
    whyMoveX: {
      title: 'Miksi MoveX?',
      subtitle: 'Selkeitä etuja asiakkaalle',
      items: [
        { title: 'Tamperelainen', desc: 'Paikallinen palvelu joustavalla kattavuudella Pirkanmaalla.' },
        { title: 'Selkeät hinnat', desc: 'ALV:n sisältävät hinnat näkyvästi esillä.' },
        { title: 'Huolellinen käsittely', desc: 'Huonekalut ja tavarat käsitellään sopivalla suojalla ja kalustolla.' },
        { title: 'Turvallinen kiinnitys', desc: 'Tavarat kiinnitetään oikein kuljetusta varten.' },
        { title: 'Joustava palvelu', desc: 'Yhdestä suuresta esineestä kokonaiseen muuttoon.' },
        { title: 'Yksityis- ja yritysasiakkaat', desc: 'Palveluita kotitalouksille, yrityksille, liikkeille ja muille toimijoille.' },
        { title: 'Paikallinen ja kaukokuljetus', desc: 'Tampere/Pirkanmaa ja kuljetus ympäri Suomea tarjouksella.' },
        { title: 'Suora yhteydenotto', desc: 'Asiakkaat voivat ottaa suoraan yhteyttä puhelimitse, WhatsAppilla tai sähköpostitse.' },
      ],
    },
    serviceArea: {
      title: 'Toiminta-alue',
      subtitle: 'Tampere ja Pirkanmaa',
      areas: ['Tampere', 'Nokia', 'Ylöjärvi', 'Pirkkala', 'Lempäälä', 'Kangasala', 'Pirkanmaa'],
      nationwide: 'Kuljetus ympäri Suomea tarjouksella.',
    },
    faq: {
      title: 'Usein kysytyt kysymykset',
      items: [
        { q: 'Sisältyvätkö hinnat alv:n?', a: 'Kyllä. Kaikki näytetyt tuntihinnat sisältävät alv 25,5 %.' },
        { q: 'Mikä on vähimmäisvaraus?', a: 'Vähimmäismaksu on 1 tunti. Ensimmäisen tunnin jälkeen laskutus jatkuu 30 min välein.' },
        { q: 'Autatteko kantamisessa?', a: 'Kyllä. Voit valita pakettiauto + kuljettaja -palvelun tai 1, 2 tai 3 muuttomiehen palvelun työn mukaan.' },
        { q: 'Voitteko kuljettaa huonekaluja?', a: 'Kyllä. Kuljetamme sohvia, sänkyjä, pöytiä, kodinkoneita, Tori.fi-ostoksia, kauppanoutoja ja muita sopivia esineitä. Lopullinen hinta riippuu etäisyydestä, esineen koosta ja pääsyolosuhteista.' },
        { q: 'Tarjoatteko kaukokuljetusta?', a: 'Kyllä. Kaukokuljetukset ympäri Suomea hinnoitellaan erikseen kokonaisreitin, työmäärän ja kuljetusvaatimusten mukaan.' },
        { q: 'Suojaatteko huonekalut?', a: 'Kyllä. Käytämme sopivia muuttopeitteitä, suojamateriaaleja ja kuorman kiinnityskalustoa työn mukaan.' },
        { q: 'Oletteko vakuutettuja?', a: 'Kyllä. MoveXilla on yritysvastuuvakuutus, joka on voimassa vakuutusehtojen mukaisesti.' },
        { q: 'Voinko olla yhteydessä ennen varausta?', a: 'Kyllä. Soita, laita WhatsAppia tai sähköpostia. Voimme käydä läpi työsi ja antaa tarjouksen.' },
      ],
    },
    contact: {
      title: 'Puhutaan muuttostasi',
      subtitle: 'Olemme tavoitettavissa päivittäin 07:00–21:00',
      phone: 'Puhelin',
      phoneFi: 'Suomeksi',
      phoneEn: 'Englanniksi',
      whatsapp: 'WhatsApp',
      email: 'Sähköposti',
      hours: 'Aukioloajat',
      callBtn: 'Soita MoveXille',
      whatsappBtn: 'WhatsApp MoveXille',
      emailBtn: 'Lähetä sähköpostia MoveXille',
      instructions: 'Kun otat yhteyttä, kerro:',
      instructionItems: [
        'Noutopaikka',
        'Määränpää',
        'Toivottu päivä',
        'Kuljetuksen/muuton tyyppi',
        'Tavaran arvioitu määrä',
        'Raskaat tai erikoisesineet',
      ],
    },
    footer: {
      tagline: 'Muutto ja kuljetus Tampereella ja koko Suomessa.',
      contactTitle: 'Yhteystiedot',
      hours: 'Päivittäin 07:00–21:00',
      businessId: 'Y-tunnus: 3615629-3',
      quickLinks: 'Pikalinkit',
      followUs: 'Seuraa meitä',
      rights: 'Kaikki oikeudet pidätetään.',
      legalNote: 'Vakuutuksen kattavuus on voimassa sovellettavien vakuutusehtojen mukaisesti.',
    },
    mobileBar: {
      call: 'Soita',
      whatsapp: 'WhatsApp',
      quote: 'Tarjous',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      pricing: 'Prices',
      howItWorks: 'How It Works',
      whyMoveX: 'Why MoveX',
      faq: 'FAQ',
      blog: 'Blog',
      contact: 'Contact',
      getQuote: 'Get a Quote',
    },
    hero: {
      badge: 'Tampere · Pirkanmaa · Across Finland',
      title: 'Moving & Transport Made Simple',
      subtitle:
        'Professional moving and transport services in Tampere and across Finland.',
      supporting:
        'Clear prices, careful handling and direct communication.',
      priceLabel: 'FROM',
      price: '€50',
      priceUnit: '/ hour',
      vatNote: 'VAT 25.5% INCLUDED',
      minNote: 'Minimum charge: 1 hour',
      incrementNote: 'After the first hour: billed in 30-minute increments',
      serviceLabel: 'VAN + DRIVER',
      serviceDesc: 'Professional transport vehicle + driver',
      equipment: 'Professional moving and load-securing equipment',
      ctaQuote: 'Get a Quote',
      ctaWhatsApp: 'WhatsApp',
      ctaCall: 'Call',
      callLabel: '+358 41 328 6939',
      openDaily: 'Open daily 07:00–21:00',
    },
    pricing: {
      title: 'Clear Prices',
      subtitle: 'All prices include Finnish VAT 25.5%',
      cards: [
        { name: 'Van + Driver', price: '€50', unit: '/ h', vat: 'VAT included', min: 'Minimum 1 h' },
        { name: '1 Mover + Van', price: '€75', unit: '/ h', vat: 'VAT included', min: 'Minimum 1 h' },
        { name: '2 Movers + Van', price: '€100', unit: '/ h', vat: 'VAT included', min: 'Minimum 1 h' },
        { name: '3 Movers + Van', price: '€125', unit: '/ h', vat: 'VAT included', min: 'Minimum 1 h' },
      ],
      incrementNote: 'After the first hour, billing continues in 30-minute increments.',
      furnitureTitle: 'Furniture & Item Transport',
      furniturePrice: 'from €50',
      furnitureDesc:
        'Sofas, beds, tables, appliances, Marketplace purchases, store pickups and other large items.',
      furnitureNote:
        'Final price depends on distance, item size, carrying requirements and access conditions.',
      longDistanceTitle: 'Long-Distance Transport',
      longDistancePrice: 'Get a Quote',
      longDistanceDesc: 'Fixed price based on the complete job.',
      cta: 'Get a Quote',
      vatNote: 'All prices include Finnish VAT 25.5%.',
      minNote: 'Minimum booking duration: 1 hour.',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Versatile moving and transport services',
      items: [
        { title: 'Moving Services', desc: 'Apartment, house and small business moves.' },
        { title: 'Van + Driver', desc: 'A professional transport vehicle and driver for customers who mainly need transport.' },
        { title: 'Movers + Van', desc: 'Professional carrying, loading, securing, transport and unloading.' },
        { title: 'Furniture & Item Transport', desc: 'Furniture, appliances, Marketplace purchases, store pickups and other large items.' },
        { title: 'Small Removals', desc: 'Smaller moves and individual transport jobs.' },
        { title: 'B2B Transport', desc: 'Regular or one-time transport for businesses, shops and companies.' },
        { title: 'Long-Distance Transport', desc: 'Transport and moving services across Finland with a fixed quotation based on the complete job.' },
      ],
    },
    vehicleCapacity: {
      title: 'Professional Transportation & Equipment',
      subtitle: 'We select the right transport solution and equipment according to your job.',
      items: [
        { title: 'Suitable Transportation', desc: 'The right transport solution for every job.' },
        { title: 'Professional Moving Equipment', desc: 'Professional moving and handling equipment.' },
        { title: 'Furniture Protection', desc: 'Furniture and goods protected with suitable protective materials.' },
        { title: 'Proper Load Securing', desc: 'Goods properly and safely secured for transport.' },
        { title: 'Careful Loading and Unloading', desc: 'Careful loading, carrying and unloading.' },
        { title: 'Flexible Transport Solutions', desc: 'Flexible solutions from small transports to complete moves.' },
      ],
    },
    qualitySafety: {
      title: 'Careful, Secure & Professional',
      subtitle: 'Your belongings. Our responsibility.',
      description:
        'We handle your furniture and goods carefully from pickup to delivery. We use suitable protection and load-securing equipment to keep items stable and protected during loading, transport',
      items: [
        { title: 'Professional Protection', desc: 'Furniture and goods are protected where needed using suitable protective materials.' },
        { title: 'Secure Load Handling', desc: 'Goods are properly positioned and secured for transport.' },
        { title: 'Moving Equipment', desc: 'Professional moving blankets, straps, handling and load-securing equipment.' },
        { title: 'Careful Handling', desc: 'Careful loading, carrying, transport and unloading.' },
        { title: 'Suitable Transport', desc: 'The vehicle and equipment are selected according to the job.' },
        { title: 'Insurance Coverage', desc: 'MoveX operates with professional business liability insurance, subject to the insurance policy terms and conditions.' },
        { title: 'Legal Protection', desc: 'Business legal protection insurance is in place, subject to policy terms and conditions.' },
      ],
    },
    whatsIncluded: {
      title: 'What\'s Included',
      items: [
        'Professional transport',
        'Careful loading and unloading',
        'Load securing',
        'Moving blankets and suitable protection',
        'Suitable handling equipment',
        'Direct communication',
        'VAT included',
        'Clear pricing',
        'Professional liability insurance coverage',
      ],
    },
    longDistance: {
      title: 'Long-Distance Transport',
      subtitle: 'Moving or transporting goods outside the Tampere area?',
      description:
        'We provide fixed quotations based on the complete job. The quotation considers:',
      factors: [
        'Full route',
        'Distance',
        'Transport requirements',
        'Amount and size of goods',
        'Loading and unloading',
        'Carrying requirements',
        'Floor level',
        'Elevator availability',
        'Access conditions',
        'Estimated working time',
        'Vehicle requirements',
      ],
      note: 'Long-distance jobs are quoted individually.',
      cta: 'Get a Quote',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three simple steps',
      steps: [
        { title: 'Contact Us', desc: 'Call, WhatsApp or email us with your transport or moving needs.' },
        { title: 'Get Your Quote', desc: 'We review the job details and provide a clear price or quotation.' },
        { title: 'We Do the Job', desc: 'We arrive as agreed, handle your goods carefully and complete the transport professionally.' },
      ],
    },
    whyMoveX: {
      title: 'Why MoveX?',
      subtitle: 'Clear benefits for you',
      items: [
        { title: 'Tampere-based', desc: 'Local service with flexible coverage across Pirkanmaa.' },
        { title: 'Clear Pricing', desc: 'VAT-inclusive prices shown clearly.' },
        { title: 'Careful Handling', desc: 'Furniture and goods are handled with suitable protection and equipment.' },
        { title: 'Safe Load Securing', desc: 'Goods are secured properly for transport.' },
        { title: 'Flexible Service', desc: 'From one large item to a complete move.' },
        { title: 'Private & Business', desc: 'Services for households, companies, shops and other businesses.' },
        { title: 'Local & Long-Distance', desc: 'Tampere/Pirkanmaa and transport across Finland by quotation.' },
        { title: 'Direct Communication', desc: 'Customers can contact MoveX directly by phone, WhatsApp or email.' },
      ],
    },
    serviceArea: {
      title: 'Service Area',
      subtitle: 'Tampere & Pirkanmaa',
      areas: ['Tampere', 'Nokia', 'Ylöjärvi', 'Pirkkala', 'Lempäälä', 'Kangasala', 'Pirkanmaa'],
      nationwide: 'Transport across Finland available by quotation.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Are your prices VAT included?', a: 'Yes. All displayed hourly prices include Finnish VAT 25.5%.' },
        { q: 'What is the minimum booking?', a: 'The minimum charge is 1 hour. After the first hour, billing continues in 30-minute increments.' },
        { q: 'Do you help with carrying?', a: 'Yes. You can choose Van + Driver or a service with 1, 2 or 3 movers depending on the job.' },
        { q: 'Can you transport furniture?', a: 'Yes. We transport sofas, beds, tables, appliances, Marketplace purchases, store pickups and other suitable items. The final price depends on distance, item size and access conditions.' },
        { q: 'Do you offer long-distance transport?', a: 'Yes. Long-distance jobs across Finland are quoted individually based on the complete route, workload and transport requirements.' },
        { q: 'Do you protect furniture?', a: 'Yes. We use suitable moving blankets, protective materials and load-securing equipment according to the job.' },
        { q: 'Are you insured?', a: 'Yes. MoveX operates with professional business liability insurance, subject to the insurance policy terms and conditions.' },
        { q: 'Can I contact you before booking?', a: 'Yes. Call, WhatsApp or email us. We can review your job and provide a quotation.' },
      ],
    },
    contact: {
      title: 'Let\'s Talk About Your Move',
      subtitle: 'We are available daily 07:00–21:00',
      phone: 'Phone',
      phoneFi: 'Finnish',
      phoneEn: 'English',
      whatsapp: 'WhatsApp',
      email: 'Email',
      hours: 'Opening Hours',
      callBtn: 'Call MoveX',
      whatsappBtn: 'WhatsApp MoveX',
      emailBtn: 'Email MoveX',
      instructions: 'When contacting us, please include:',
      instructionItems: [
        'Pickup location',
        'Destination',
        'Preferred date',
        'Type of transport/move',
        'Approximate amount of goods',
        'Any heavy or special items',
      ],
    },
    footer: {
      tagline: 'Moving & transport in Tampere and across Finland.',
      contactTitle: 'Contact',
      hours: 'Daily 07:00–21:00',
      businessId: 'Business ID: 3615629-3',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
      legalNote: 'Insurance coverage is subject to the applicable insurance policy terms and conditions.',
    },
    mobileBar: {
      call: 'Call',
      whatsapp: 'WhatsApp',
      quote: 'Quote',
    },
  },
};

export type Translation = (typeof translations)['fi'];
