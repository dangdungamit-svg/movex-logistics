export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogArticle = {
  slug: string;
  published: boolean;
  category: { fi: string; en: string };
  title: { fi: string; en: string };
  excerpt: { fi: string; en: string };
  readTime: { fi: string; en: string };
  sections: {
    fi: BlogSection[];
    en: BlogSection[];
  };
};

export const blogArticles: BlogArticle[] = [
  {
    slug: 'muutto-tampereella-tarkistuslista',
    published: true,
    category: { fi: 'Muutto-opas', en: 'Moving guide' },
    title: {
      fi: 'Muutto Tampereella: käytännöllinen tarkistuslista',
      en: 'Moving in Tampere: a practical checklist',
    },
    excerpt: {
      fi: 'Käytännöllinen suomenkielinen opas muuttoon Tampereella: aikataulu, tavarat, pakkaaminen, kantaminen, palvelun valinta ja tarjouspyyntö – kaikki samasta tarkistuslistasta.',
      en: 'A clear starting point for planning your home, schedule and transport before moving day.',
    },
    readTime: { fi: '8 min lukuaika', en: '5 min read' },
    sections: {
      fi: [
        {
          heading: 'Aikataulun suunnittelu ennen muuttopäivää',
          paragraphs: [
            'Kun suunnittelet muuttoa Tampereella, aikataulu on hyvä lähtökohta. Kirjaa ylös muuttopäivä, avainten luovutus ja mahdolliset hissi- tai piha-alueen varaukset samaan suunnitelmaan. Tampereen kerrostaloissa hissin varaaminen muuttoa varten on usein tarpeen, ja taloyhtiöillä voi olla omat ohjeensa muuttoajoista.',
            'Kun aikataulu on selvillä, kuljetuksen ja kantamisen tarve on helpompi arvioida. Päivitä suunnitelmaa, jos nouto- tai toimitusosoitteessa tapahtuu muutoksia. Mitä aiemmin tiedät päivän, sitä paremmin muuttopalvelu Tampereessa voidaan ajoittaa työsi mukaan.',
          ],
        },
        {
          heading: 'Tavaroiden ja huonekalujen arviointi',
          paragraphs: [
            'Listaa suuret huonekalut, kodinkoneet ja muut erityistä käsittelyä vaativat esineet. Sohva, sänky, pyöreä pöytä, jääkaappi ja pesukone kannattaa merkitä ylös erikseen, koska ne vaikuttavat sekä kuljetusratkaisuun että kantamisen työmäärään.',
            'Arvioi myös tavaran kokonaismäärä: onko kyseessä yksi huoneen sisältö, kokonainen asunto vai vain muutama suuri esine. Tämä auttaa valitsemaan sopivan palvelun ja antaa muuttofirma Tampereessa realistisen kuvan työstä. Samalla näet, mitä voit mahdollisesti viedä kierrätykseen, myydä tai luopua ennen muuttoa.',
          ],
        },
        {
          heading: 'Pakkaaminen ja tavaroiden suojaaminen',
          paragraphs: [
            'Pakkaa irtaimisto kestäviin laatikoihin tai kasseihin ja merkitse ne huoneittain. Suojaa helposti rikkoutuvat esineet kuplamuovilla tai pehmeällä materiaalilla. Säilytä arvoesineet ja tärkeät paperit erillisenä, jotta ne pysyvät tallessa muuton aikana.',
            'Jos haluat, että muuttomiehet pakkaavat tai purkavat puolestasi, kerro siitä tarjouspyynnössä. MoveX Logistics käyttää työn mukaan sopivia suojamateriaaleja ja kuorman kiinnitystä, jotta huonekalut ja tavarat pysyvät vakaina lastauksen, kuljetuksen ja purkamisen aikana. Huolellinen suojaus on osa ammattimaista muuttopalvelua Tampereella.',
          ],
        },
        {
          heading: 'Kerros, hissi, pysäköinti ja sisäänkäynti',
          paragraphs: [
            'Kerro sekä nouto- että toimitusosoitteesta: kerros, hissin olemassaolo, portaiden määrä ja mahdolliset käytävän mutkat. Tampereen keskusta-alueella pysäköintitilat voivat olla rajalliset, joten mainitse myös, onko kuormauspaikka lähellä sisäänkäyntiä.',
            'Nämä tiedot vaikuttavat kantamisen reittiin ja työn kestoon. Jos hissiä ei voi varata tai kantaminen tapahtuu portaita pitkin, työmäärä kasvaa ja se näkyy tarjouksessa. Mitä tarkemmin kerrot pääsyolosuhteet, sitä tarkemmin muuttohinta Tampereessa voidaan arvioida etukäteen.',
          ],
        },
        {
          heading: 'Suuret ja raskaat esineet',
          paragraphs: [
            'Suuret ja raskaat esineet, kuten piano, kookas sohva, painava kaappi tai kodinkone, vaativat usein kahden tai kolmen hengen kantamisen. Mainitse nämä erikseen, jotta kuljetukseen voidaan varata riittävästi työvoimaa ja sopiva kalusto.',
            'Kerro myös, voidaanko esine purkaa osiin vai onko se kannettava kokonaisena. Purettavista osista kannattaa ilmoittaa, tarvitseeko purkamiseen työkaluja. Nämä yksityiskohdat auttavat muuttofirmaa Tampereessa suunnittelemaan työn turvallisesti ja ilman yllätyksiä.',
          ],
        },
        {
          heading: 'Muuttopalvelun valinta',
          paragraphs: [
            'Jos tarvitset pääasiassa kuljetusta, pakettiauto ja kuljettaja voi riittää. Kantamiseen, lastaukseen ja purkuun voit valita yhden, kaksi tai kolme muuttomiestä työn mukaan. Valinta riippuu tavaran määrästä, kerroksesta ja siitä, kuinka paljon haluat tehdä itse.',
            'Tutustu MoveX Logisticsin palveluihin ja selkeisiin hintoihin ennen yhteydenottoa. Ammattimainen muuttopalvelu Tampereessa voi kattaa joko pelkän kuljetuksen tai kokonaisen muuton lastauksesta purkuun. Kun valitset palvelun, kerro rehellisesti työn laajuus, jotta saat oikean ratkaisun eikä hinta tule yllätyksenä.',
          ],
        },
        {
          heading: 'Mitä tietoja kannattaa antaa tarjouspyyntöön',
          paragraphs: [
            'Hyvä tarjouspyyntö sisältää nouto- ja toimitusosoitteen, toivotun muuttopäivän, tavaran arvioidun määrän sekä tiedot suurista tai raskaista esineistä. Lisäksi kerro kerros, hissi, pysäköinti ja sisäänkäynnin pääsyolosuhteet molemmissa päissä.',
            'Mitä tarkemmat tiedot annat, sitä tarkemmin muuttohinta Tampereessa voidaan arvioida. Voit ottaa yhteyttä puhelimitse, WhatsAppilla tai sähköpostilla. MoveX Logistics käy mielellään läpi työsi tiedot ja antaa selkeän hinnan tai tarjouksen sen perusteella.',
          ],
        },
        {
          heading: 'Mitä MoveX Logisticsin tarjous voi ottaa huomioon',
          paragraphs: [
            'MoveX Logisticsin tarjous perustuu antamiisi tietoihin. Se voi ottaa huomioon koko reitin, etäisyyden, tavaran määrän ja koon, lastauksen ja purun, kantamisen tarpeen, kerroksen, hissin ja pääsyolosuhteet sekä arviodun työajan. Kaukokuljetukset hinnoitellaan erikseen kokonaisuuden perusteella.',
            'Tarjouksessa käytetään työn mukaan sopivaa kalustoa ja suojamateriaaleja. MoveX Logisticsilla on yritysvastuuvakuutus, joka on voimassa vakuutusehtojen mukaisesti. Vakuutuksen kattavuus on aina voimassa sovellettavien vakuutusehtojen mukaisesti, eikä tässä artikkelissa esitetä tarkempaa vakuutusturvaa.',
          ],
        },
        {
          heading: 'Muuttopäivän lyhyt tarkistuslista',
          paragraphs: [
            'Ennen muuttopäivää käy läpi seuraavat kohdat: varmista hissivaraus, sovi avainten luovutus, merkitse laatikot huoneittain, suojaa hauraat esineet, varmista pysäköintitila kuormausta varten ja pidä arvoesineet erillään.',
            'Muuttopäivänä ole tavoitettavissa puhelimella, näytä muuttomiehille reitit ja tarkista, että kaikki tavarat tulevat mukaan. Kun muutto Tampereella on suunniteltu huolellisesti, päivä sujuu selkeämmin ja yllätyksiä on vähemmän.',
          ],
        },
      ],
      en: [
        {
          heading: 'Start with the schedule',
          paragraphs: [
            'Put the moving date, key handover and any lift reservations in one plan. Once the schedule is clear, it is easier to estimate the transport and carrying help you need.',
          ],
        },
        {
          heading: 'Estimate your goods and carrying needs',
          paragraphs: [
            'List large furniture, appliances and items that need special handling. Also mention the floor, lift and access conditions so the transport can be planned around the job.',
          ],
        },
        {
          heading: 'Choose the right moving service',
          paragraphs: [
            'If you mainly need transport, a van and driver may be enough. For carrying and loading, you can choose one, two or three movers. Review MoveX Logistics services and clear prices before contacting us.',
          ],
        },
      ],
    },
  },
  {
    slug: 'huonekalukuljetus-tampere',
    published: true,
    category: { fi: 'Kuljetusopas', en: 'Transport guide' },
    title: {
      fi: 'Huonekalukuljetus Tampereella: mitä kannattaa ilmoittaa?',
      en: 'Furniture transport in Tampere: what should you tell us?',
    },
    excerpt: {
      fi: 'Näin saat huonekalu- ja esinekuljetuksesta mahdollisimman tarkan arvion.',
      en: 'How to share the right details for a clearer furniture and item transport estimate.',
    },
    readTime: { fi: '4 min lukuaika', en: '4 min read' },
    sections: {
      fi: [
        {
          heading: 'Kerro nouto ja määränpää',
          paragraphs: [
            'Noutopaikka ja toimitusosoite vaikuttavat ajoreittiin ja työn kokonaisuuteen. Ilmoita myös, jos nouto tulee liikkeestä tai yksityiseltä myyjältä.',
          ],
        },
        {
          heading: 'Kuvaile esineen koko ja paino',
          paragraphs: [
            'Sohvan, sängyn, pöydän tai kodinkoneen mitat auttavat valitsemaan sopivan kuljetusratkaisun. Mainitse painavat, helposti vaurioituvat tai purettavat osat etukäteen.',
          ],
        },
        {
          heading: 'Huomioi kantaminen ja suojaus',
          paragraphs: [
            'Kerro kerrokset, hissi, portaat ja sisäänkäynti. MoveX käyttää työn mukaan sopivia suojamateriaaleja ja kuorman kiinnitystä. Lopullinen hinta riippuu etäisyydestä, koosta, kantamisesta ja pääsyolosuhteista.',
          ],
        },
      ],
      en: [
        {
          heading: 'Share the pickup and destination',
          paragraphs: [
            'The pickup and delivery addresses affect the route and the complete job. Tell us whether the item is being collected from a shop or a private seller.',
          ],
        },
        {
          heading: 'Describe the item size and weight',
          paragraphs: [
            'The dimensions of a sofa, bed, table or appliance help us choose a suitable transport solution. Mention heavy, fragile or dismantled parts in advance.',
          ],
        },
        {
          heading: 'Consider carrying and protection',
          paragraphs: [
            'Tell us about floors, lifts, stairs and entrances. MoveX uses suitable protective materials and load securing according to the job. The final price depends on distance, size, carrying and access conditions.',
          ],
        },
      ],
    },
  },
  {
    slug: 'muutto-tampereelta-muualle-suomeen',
    published: true,
    category: { fi: 'Kaukokuljetus', en: 'Long-distance transport' },
    title: {
      fi: 'Muutto Tampereelta muualle Suomeen: miten tarjous muodostuu?',
      en: 'Moving from Tampere across Finland: how is a quote prepared?',
    },
    excerpt: {
      fi: 'Yleiskatsaus asioihin, jotka vaikuttavat kaukomuuton kiinteään tarjoukseen.',
      en: 'An overview of the details that affect a fixed long-distance moving quotation.',
    },
    readTime: { fi: '5 min lukuaika', en: '5 min read' },
    sections: {
      fi: [
        {
          heading: 'Reitti ja etäisyys',
          paragraphs: [
            'Kaukokuljetuksen tarjous perustuu koko reittiin. Nouto- ja määränpääosoitteet, mahdolliset välietapit sekä aikataulu kannattaa ilmoittaa heti.',
          ],
        },
        {
          heading: 'Tavaran määrä ja työvaiheet',
          paragraphs: [
            'Kerro muuton tai kuljetuksen laajuus, suuret esineet, lastaus, purku ja mahdollinen kantaminen. Näiden tietojen avulla työ voidaan arvioida kokonaisuutena.',
          ],
        },
        {
          heading: 'Pyydä tarjous ajoissa',
          paragraphs: [
            'Kun tiedot ovat koossa, ota yhteyttä MoveX Logisticsiin. Kaukokuljetukset hinnoitellaan erikseen kokonaisuuden perusteella, ja voit kysyä tarjousta puhelimitse, WhatsAppilla tai sähköpostilla.',
          ],
        },
      ],
      en: [
        {
          heading: 'Route and distance',
          paragraphs: [
            'A long-distance quotation is based on the complete route. Share the pickup and destination addresses, any intermediate stops and your preferred schedule early.',
          ],
        },
        {
          heading: 'Goods and work stages',
          paragraphs: [
            'Describe the scope of the move or transport, large items, loading, unloading and any carrying. This helps the job to be assessed as a complete service.',
          ],
        },
        {
          heading: 'Request a quotation early',
          paragraphs: [
            'Once the details are ready, contact MoveX Logistics. Long-distance transport is quoted individually based on the complete job, by phone, WhatsApp or email.',
          ],
        },
      ],
    },
  },
{
    slug: 'muuttoapu-hinta-tampere',
    published: true,
    category: { fi: 'Hintaopas', en: 'Price guide' },
    title: {
      fi: 'Muuttoapu Tampereella: hinnat ja mistä muuton hinta muodostuu?',
      en: 'Moving help in Tampere: prices and what affects the cost',
    },
    excerpt: {
      fi: 'Muuttoavun hinta Tampereella riippuu kuljetusreitistä, tavaroiden määrästä ja kantoavusta. Vertaa MoveX Logisticsin tuntihintoja ja katso, mitä tarjouspyyntöön kannattaa kertoa.',
      en: 'The cost of moving help in Tampere depends on the route, the amount of goods and carrying help. Compare MoveX Logistics hourly rates and learn what to include in a quote request.',
    },
    readTime: { fi: '5 min lukuaika', en: '5 min read' },
    sections: {
      fi: [
        {
          heading: 'Mitä muuttoapu Tampereella maksaa?',
          paragraphs: [
            'MoveX Logisticsin ilmoitetut tuntihinnat sisältävät alv 25,5 %. Pakettiauto + kuljettaja maksaa 50 €/h, 1 muuttomies ja auto 75 €/h, 2 muuttomiestä ja auto 100 €/h sekä 3 muuttomiestä ja auto 125 €/h. Vähimmäisvaraus on yksi tunti, minkä jälkeen laskutus jatkuu 30 minuutin jaksoissa.',
            'Pakettiauto + kuljettaja sopii tilanteeseen, jossa tarvitset pääasiassa kuljetuksen ja pystyt järjestämään kantamisen itse. Jos tarvitset apua portaissa, lastauksessa tai purkamisessa, valitse mukaan muuttomiehiä. Hinnat ovat tuntihintoja, eivät automaattisesti koko muuton kiinteitä kokonaishintoja.',
          ],
        },
        {
          heading: 'Mitkä asiat vaikuttavat muuton kokonaishintaan?',
          paragraphs: [
            'Kokonaishintaan vaikuttavat nouto- ja toimitusosoitteet, koko ajoreitti, tavaroiden määrä ja koko, kantamiseen tarvittava työvoima, kerrokset, hissi sekä se, kuinka lähelle autoa pääsee pysäköimään. Myös suuret kodinkoneet ja painavat huonekalut kannattaa mainita etukäteen.',
            'Jos muutto alkaa tai päättyy Tampereen ulkopuolelle, pyydä tarjous koko reitille. Kerro myös mahdollisista välietapeista ja siitä, pitääkö tavaroita noutaa useasta osoitteesta.',
          ],
        },
        {
          heading: 'Miten voit helpottaa tarjouksen laskemista?',
          paragraphs: [
            'Ilmoita nouto- ja toimitusosoitteet, toivottu päivä, kerrokset ja hissin saatavuus molemmissa päissä. Listaa suuret huonekalut ja kodinkoneet sekä kerro, onko tavara jo pakattu. Jos mahdollista, arvioi laatikoiden määrä tai lähetä kuvia kuljetettavista tavaroista yhteydenoton yhteydessä.',
            'Tarkat tiedot auttavat arvioimaan työmäärää realistisesti ja vähentävät yllätyksiä muuttopäivänä. Voit pyytää tarjouksen verkkosivun lomakkeella, puhelimitse tai WhatsAppilla.',
          ],
        },
        {
          heading: 'Tarvitsetko vain yhden huonekalun kuljetuksen?',
          paragraphs: [
            'Koko asunnon muuttopalvelua ei tarvita jokaiseen työhön. MoveX Logistics kuljettaa myös yksittäisiä huonekaluja, kodinkoneita, laatikoita ja sopivia Tori.fi- tai Facebook Marketplace -ostoksia Tampereella ja Pirkanmaalla. Ilmoita esineen mitat ja paino sekä se, tarvitaanko kantamista noudossa ja toimituksessa.',
            'Tutustu myös huonekalukuljetuksen palvelusivuun ja kerro tarjouspyynnössä, mitä kuljetetaan ja mistä minne.',
          ],
        },
        {
          heading: 'Pyydä omaan työhösi sopiva arvio',
          paragraphs: [
            'Edullisin vaihtoehto riippuu siitä, tarvitsetko vain ajoneuvon ja kuljettajan vai myös kantajia. Kerro työn tiedot etukäteen, niin MoveX Logistics voi arvioida sopivan palvelun ja antaa tarjouksen työn laajuuden perusteella.',
          ],
        },
      ],
      en: [
        {
          heading: 'How much does moving help in Tampere cost?',
          paragraphs: [
            'MoveX Logistics hourly prices include Finnish VAT (25.5%). Van + driver costs €50/hour, one mover with a van €75/hour, two movers with a van €100/hour, and three movers with a van €125/hour. The minimum booking is one hour, followed by billing in 30-minute increments.',
            'Van + driver is suitable when you mainly need transport and can arrange carrying yourself. Add movers if you need help with stairs, loading or unloading. These are hourly rates, not automatically fixed total prices for an entire move.',
          ],
        },
        {
          heading: 'What affects the total moving cost?',
          paragraphs: [
            'The total depends on the pickup and delivery addresses, complete driving route, amount and size of goods, number of movers needed, floors, elevator access and parking near the entrance. Mention large appliances and heavy furniture in advance.',
            'If the move starts or ends outside Tampere, request a quote for the complete route. Include any extra stops or multiple pickup addresses.',
          ],
        },
        {
          heading: 'How to get a more accurate quote',
          paragraphs: [
            'Share the pickup and delivery addresses, preferred date, floors and elevator access at both locations. List large furniture and appliances and say whether everything is packed. If possible, estimate the number of boxes or share photos of the items when contacting us.',
            'Accurate details help estimate the work realistically and reduce surprises on moving day. You can request a quote through the website form, by phone or WhatsApp.',
          ],
        },
        {
          heading: 'Only need one item transported?',
          paragraphs: [
            'You do not need a full home-moving service for every job. MoveX Logistics also transports individual furniture items, appliances, boxes and suitable Tori.fi or Facebook Marketplace purchases in Tampere and Pirkanmaa. Tell us the item dimensions and weight and whether carrying help is needed at pickup and delivery.',
            'See the furniture transport service page and include what is being moved and the pickup and delivery locations in your request.',
          ],
        },
        {
          heading: 'Request an estimate for your job',
          paragraphs: [
            'The best-value option depends on whether you need only a van and driver or also carrying help. Share the job details in advance so MoveX Logistics can recommend a suitable service and quote based on the scope of work.',
          ],
        },
      ],
    },
  },
  {
    slug: 'opiskelijamuutto-tampere',
    published: true,
    category: { fi: 'Pieni muutto', en: 'Small move' },
    title: {
      fi: 'Opiskelijamuutto Tampereella: hinta, pakkaaminen ja muuttoapu',
      en: 'Student moving in Tampere: cost, packing and moving help',
    },
    excerpt: {
      fi: 'Suunnitteletko yksiön tai opiskelija-asunnon muuttoa Tampereella? Katso, milloin pakettiauto ja kuljettaja riittää, milloin kannattaa ottaa kantoapua ja mitä tarjouspyyntöön kannattaa kirjata.',
      en: 'Planning a studio or student-apartment move in Tampere? Compare van-only transport with carrying help and learn what to include in a quote request.',
    },
    readTime: { fi: '5 min lukuaika', en: '4 min read' },
    sections: {
      fi: [
        { heading: 'Mitä opiskelijamuutto Tampereella yleensä sisältää?', paragraphs: [
          'Opiskelijamuutto voi tarkoittaa yksiön, soluhuoneen tai pienen asunnon tavaroiden siirtämistä. Tavaramäärä on usein tavallista kotimuuttoa pienempi, mutta sänky, työpöytä, sohva, hylly ja laatikot voivat silti vaatia sopivan pakettiauton ja suunnitellun kantamisen.',
          'Listaa suurimmat huonekalut ja arvioi laatikoiden määrä ennen muuttopäivää. Näin muuttoapu Tampereella voidaan mitoittaa tarpeen mukaan ilman, että varaat turhaan liian suuren palvelun.'
        ]},
        { heading: 'Kannattaako valita pakettiauto vai muuttomiehet?', paragraphs: [
          'Jos tavarat ovat valmiiksi pakattuja ja pystyt itse kantamaan ne, pakettiauto ja kuljettaja voi olla sopiva vaihtoehto. Jos asunnossa on portaita, raskaita huonekaluja tai vähän apukäsiä, valitse lisäksi yksi tai useampi muuttomies lastaukseen ja purkuun.',
          'MoveX Logisticsin tuntihinnat ovat: pakettiauto ja kuljettaja 50 €/h, yksi muuttomies ja auto 75 €/h, kaksi muuttomiestä ja auto 100 €/h sekä kolme muuttomiestä ja auto 125 €/h. Hinnat sisältävät alv 25,5 %. Vähimmäisvaraus on yksi tunti, minkä jälkeen laskutus jatkuu 30 minuutin jaksoissa.'
        ]},
        { heading: 'Mistä opiskelijamuuton hinta muodostuu?', paragraphs: [
          'Muuttohinta riippuu ajomatkasta, tavaroiden määrästä, kerroksista, hissistä, pysäköinnistä ja tarvittavasta kantamisavusta. Kerro sekä nouto- että toimitusosoitteen olosuhteet. Jos reitti kulkee Tampereen ulkopuolelle, pyydä tarjous koko reitistä.',
          'Lähetä tarjouspyynnössä muuttopäivä, osoitteet, suuret huonekalut, laatikoiden arvioitu määrä ja tieto hissistä. Tarkat tiedot auttavat arvioimaan työn realistisesti.'
        ]},
        { heading: 'Opiskelijamuuton tarkistuslista', paragraphs: [
          'Pakkaa tavarat huoneittain, tyhjennä ja sulata kodinkoneet ajoissa, irrota tarvittaessa pöydän jalat ja suojaa näytöt sekä särkyvät esineet. Varmista avainten luovutus ja pysäköintipaikka muuttoautolle.',
          'Pyydä MoveX Logisticsilta tarjous, jos tarvitset pienen muuton kuljetusta Tampereella tai Pirkanmaalla. Kerro selvästi, tarvitsetko vain auton ja kuljettajan vai myös kantoapua.'
        ]}
      ],
      en: [
        { heading: 'What does a student move involve?', paragraphs: [
          'A student move may involve a studio, shared flat or small apartment. Even a smaller move can include a bed, desk, sofa, shelves and boxes that need a suitable van and a plan for carrying.',
          'List the largest items and estimate the number of boxes before moving day. This helps choose a suitable small moving service in Tampere.'
        ]},
        { heading: 'Van and driver or movers?', paragraphs: [
          'A van and driver may suit you if everything is packed and you can handle the carrying yourself. Add movers if there are stairs, heavy furniture or limited help at either address.',
          'MoveX Logistics rates are €50/hour for a van and driver, €75/hour for one mover and van, €100/hour for two movers and van, and €125/hour for three movers and van. Finnish VAT (25.5%) is included. Minimum booking is one hour, then billing continues in 30-minute steps.'
        ]},
        { heading: 'What affects the price?', paragraphs: [
          'The price depends on driving distance, amount of goods, floors, elevator access, parking and carrying help. Share both addresses, date, large items, estimated boxes and lift access when requesting a quote.',
          'Pack by room, protect fragile items and arrange key handover and parking in advance. Contact MoveX Logistics for a quote for a small move in Tampere or Pirkanmaa.'
        ]}
      ]
    }
  },
  {
    slug: 'tori-ikea-kuljetus-tampere',
    published: true,
    category: { fi: 'Huonekalukuljetus', en: 'Furniture transport' },
    title: {
      fi: 'Tori.fi- ja IKEA-kuljetus Tampereella: näin tilaat huonekalukuljetuksen',
      en: 'Tori.fi and IKEA delivery in Tampere: how to arrange furniture transport',
    },
    excerpt: {
      fi: 'Ostitko sohvan, sängyn tai pöydän Tori.fi:stä tai kaupasta? Näillä tiedoilla huonekalun nouto ja kuljetus Tampereella on helpompi suunnitella.',
      en: 'Bought a sofa, bed or table from Tori.fi or a shop? Share these details to plan a furniture pickup and delivery in Tampere.',
    },
    readTime: { fi: '4 min lukuaika', en: '4 min read' },
    sections: {
      fi: [
        { heading: 'Mitä tietoja kuljetukseen tarvitaan?', paragraphs: [
          'Kerro, mistä huonekalu noudetaan ja mihin se toimitetaan. Ilmoita esineen mitat ja arvioitu paino sekä se, onko tavara valmiiksi purettu tai pakattu. Sohvan, sängyn, pöydän ja kaapin mitat auttavat varmistamaan, että esine sopii kuljetukseen.',
          'Tori.fi-ostoksissa sovi myyjän kanssa noutoaika etukäteen. Kauppanoudossa tarkista, milloin tavara on noudettavissa ja tarvitseeko noutoon tilausnumeroa tai muuta vahvistusta.'
        ]},
        { heading: 'Tarvitaanko kantoapua?', paragraphs: [
          'Pelkkä pakettiauto ja kuljettaja voi sopia, jos pystyt itse auttamaan lastauksessa ja purussa. Jos huonekalu on painava tai asunnossa on portaita, ilmoita siitä ja pyydä kantoapua. Kerro kerros, hissi ja sisäänkäynnin etäisyys molemmissa osoitteissa.',
          'MoveX Logistics tarjoaa pakettiauton ja kuljettajan alkaen 50 €/h (sis. alv 25,5 %). Työn laajuuden mukaan voit pyytää tarjouksen myös muuttomiehistä. Vähimmäisvaraus on yksi tunti.'
        ]},
        { heading: 'Miten saat tarkan kuljetustarjouksen?', paragraphs: [
          'Lähetä nouto- ja toimitusosoite, toivottu päivä, huonekalun mitat, kerrokset ja tieto kantoavusta. Mainitse myös, jos samalla reitillä on useita noutoja tai toimituksia.',
          'Huonekalukuljetus Tampereella voi olla yksittäisen sohvan nouto, pesukoneen siirto tai useamman ostoksen toimitus. MoveX arvioi työn antamiesi tietojen perusteella ja vahvistaa tarjouksen ennen työn aloittamista.'
        ]}
      ],
      en: [
        { heading: 'What details are needed?', paragraphs: [
          'Share the pickup and delivery addresses, item dimensions and estimated weight, and whether the item is dismantled or packed. These details help confirm that the furniture can be transported safely.',
          'For Tori.fi purchases, agree on a pickup time with the seller. For store collection, check when the item is ready and whether an order number or confirmation is required.'
        ]},
        { heading: 'Do you need carrying help?', paragraphs: [
          'A van and driver may work if you can help with loading and unloading. For heavy furniture or stairs, request carrying help and share the floor, elevator and entrance details at both addresses.',
          'MoveX Logistics offers a van and driver from €50/hour, including Finnish VAT (25.5%). Minimum booking is one hour.'
        ]},
        { heading: 'How to get a clear quote', paragraphs: [
          'Send both addresses, preferred date, item dimensions, floors and whether carrying help is needed. Mention any extra pickup or delivery stops.',
          'Furniture transport in Tampere can include a sofa, washing machine or several shop purchases. MoveX assesses the job from the details you provide and confirms a quote before work starts.'
        ]}
      ]
    }
  },
  {
    slug: 'pakettiauto-kuljettajalla-tampere',
    published: true,
    category: { fi: 'Kuljetuspalvelu', en: 'Transport service' },
    title: {
      fi: 'Pakettiauto kuljettajalla Tampereella: hinta ja käyttökohteet',
      en: 'Van with driver in Tampere: price and when to use it',
    },
    excerpt: {
      fi: 'Milloin kannattaa tilata pakettiauto kuljettajalla? Lue, mitä palveluun sisältyy, miten tuntihinta muodostuu ja mitä tietoja tarjouspyyntöön tarvitaan.',
      en: 'When should you book a van with a driver? Learn what the service includes, how hourly pricing works and what to include in a quote request.',
    },
    readTime: { fi: '4 min lukuaika', en: '4 min read' },
    sections: {
      fi: [
        { heading: 'Milloin pakettiauto kuljettajalla on hyvä vaihtoehto?', paragraphs: [
          'Pakettiauto kuljettajalla sopii esimerkiksi huonekalun siirtoon, verkkokauppa- tai myymälänoudon kuljetukseen, laatikoihin ja pieneen muuttoon. Se on vaihtoehto silloin, kun tarvitset kuljetuksen mutta et välttämättä muuttomiehiä kantamiseen.',
          'Palvelun sopivuus riippuu tavaran koosta, painosta, määrästä ja siitä, pystytkö itse auttamaan lastauksessa ja purussa. Kerro tavarat etukäteen, jotta kuljetus voidaan suunnitella oikein.'
        ]},
        { heading: 'Mitä MoveX Logisticsin palvelu maksaa?', paragraphs: [
          'Pakettiauto ja kuljettaja maksavat 50 €/h, alv 25,5 % sisältyy hintaan. Vähimmäisvaraus on yksi tunti ja sen jälkeen laskutus jatkuu 30 minuutin jaksoissa. Tämä on tuntihinta, ei automaattisesti koko työn kiinteä kokonaishinta.',
          'Kokonaiskustannukseen vaikuttavat koko ajoreitti, lastaus ja purku, odotusaika, ylimääräiset pysähdykset ja se, tarvitaanko kantamisapua. Pidemmälle matkalle kannattaa pyytää tarjous koko reitistä.'
        ]},
        { heading: 'Mitä tarjouspyyntöön kannattaa kirjoittaa?', paragraphs: [
          'Kerro nouto- ja toimitusosoite, päivä ja toivottu aika, kuljetettavat tavarat ja niiden mitat, kerrokset sekä hissin saatavuus. Ilmoita, tarvitsetko apua kantamiseen ja onko kuorma valmiiksi pakattu.',
          'MoveX Logistics toimii Tampereella ja Pirkanmaalla, ja kuljetukset muualle Suomeen onnistuvat tarjouksella. Tarkat tiedot auttavat valitsemaan sopivan palvelun ja arvioimaan työn realistisesti.'
        ]}
      ],
      en: [
        { heading: 'When is a van with driver useful?', paragraphs: [
          'A van with driver can suit furniture transport, store collection, boxes and small moves. It is useful when you need transport but may not need movers for carrying.',
          'Suitability depends on the size, weight and amount of goods and whether you can help load and unload. Share item details before booking.'
        ]},
        { heading: 'How much does it cost?', paragraphs: [
          'MoveX Logistics charges €50/hour for a van and driver, including Finnish VAT (25.5%). Minimum booking is one hour, then billing continues in 30-minute increments. This is an hourly rate, not automatically a fixed total price.',
          'The full cost depends on the complete route, loading and unloading, waiting time, extra stops and any carrying help. Request a quote for longer routes.'
        ]},
        { heading: 'What to include in a quote request', paragraphs: [
          'Share pickup and delivery addresses, date and preferred time, items and dimensions, floors, elevator access and whether carrying help is needed.',
          'MoveX Logistics operates in Tampere and Pirkanmaa, with transport elsewhere in Finland available by quotation. Accurate details help estimate the job.'
        ]}
      ]
    }
  }
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
