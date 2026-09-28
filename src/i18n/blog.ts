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
      fi: 'Käytännöllinen suomi opas muuttoon Tampereella: aikataulu, tavarat, pakkaaminen, kantaminen, palvelun valinta ja tarjouspyyntö – kaikki samasta tarkistuslistasta.',
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
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
