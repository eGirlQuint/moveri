"use client"

import { useLang } from "@/i18n/LangProvider"
import { DF } from "@/lib/style"

type Block = { type: "p"; text: string } | { type: "ul"; items: string[] }

interface LegalSection {
  heading: string
  blocks: Block[]
}

function p(text: string): Block {
  return { type: "p", text }
}

function ul(items: string[]): Block {
  return { type: "ul", items }
}

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Wie is verantwoordelijk?",
    blocks: [
      p("Moveri, tevens handelend onder de handelsnaam Moveri - Talent & Performance, is verwerkingsverantwoordelijke voor de persoonsgegevens die in deze privacyverklaring worden beschreven."),
      ul([
        "Adres: Veilingstraat 30, 7391 GM Twello, Nederland",
        "KvK-nummer: 42095103",
        "Btw-identificatienummer: NL005494442B16",
        "E-mail: irene@moveri.eu",
        "Telefoon: +31 6 200 30 686",
        "Website: https://moveri.eu/",
      ]),
      p("Moveri heeft geen functionaris voor gegevensbescherming aangesteld. Vragen over privacy kunnen rechtstreeks aan Moveri worden gesteld via irene@moveri.eu."),
    ],
  },
  {
    heading: "2. Op wie is deze verklaring van toepassing?",
    blocks: [
      p("Deze verklaring geldt voor personen van wie Moveri gegevens verwerkt, waaronder websitebezoekers, geïnteresseerden, cliënten, deelnemers aan team- of groepsactiviteiten, ouders en wettelijk vertegenwoordigers, contactpersonen bij organisaties, samenwerkingspartners en leveranciers."),
    ],
  },
  {
    heading: "3. Welke persoonsgegevens verwerkt Moveri?",
    blocks: [
      p("Welke gegevens worden verwerkt, hangt af van het contact en de gekozen dienst. Moveri kan de volgende categorieën verwerken:"),
      ul([
        "contact- en identificatiegegevens, zoals naam, e-mailadres, telefoonnummer, adres, geboortedatum of leeftijd en, voor zover relevant, geslacht;",
        "zakelijke gegevens, zoals organisatie, functie en zakelijke contactgegevens;",
        "gegevens uit contactverzoeken, offertes, afspraken, overeenkomsten en correspondentie;",
        "factuur- en betaalgegevens, waaronder bankgegevens wanneer die op een betaling zichtbaar zijn;",
        "bij begeleiding: hulpvraag, doelen, intakegegevens, relevante achtergrondinformatie, voortgang, sessienotities en evaluaties;",
        "antwoorden en scores uit sport- en prestatiepsychologische vragenlijsten;",
        "gegevens over welzijn of gezondheid die een cliënt zelf verstrekt en die relevant zijn voor veilige en passende prestatiebegeleiding;",
        "bij minderjarigen: contactgegevens van wettelijk vertegenwoordigers en vastgelegde toestemmingen;",
        "technische gegevens die bij gebruik van de website worden verwerkt, zoals IP-adres, browsertype, tijdstip en technische loggegevens;",
        "beeld- of geluidsopnamen, uitsluitend wanneer daarvoor vooraf afzonderlijk en uitdrukkelijk toestemming is gegeven.",
      ]),
      p("Moveri verwerkt geen burgerservicenummer en vraagt niet meer persoonsgegevens dan nodig is voor het betreffende doel."),
      p("De meeste gegevens ontvangt Moveri rechtstreeks van de betrokkene. Soms ontvangt Moveri gegevens van een ouder of wettelijk vertegenwoordiger of, wanneer dit vooraf is afgesproken en toegestaan, van een coach, club, school, werkgever, bond, opdrachtgever of samenwerkingspartner. Als gegevens niet rechtstreeks bij de betrokkene worden verkregen, informeert Moveri die persoon daarover voor zover de AVG dat vereist."),
      p("Contactgegevens, afspraken- en betaalgegevens en informatie die noodzakelijk is om een dienst veilig en zorgvuldig uit te voeren, zijn nodig om een overeenkomst aan te gaan of uit te voeren. Zonder deze gegevens kan Moveri mogelijk geen overeenkomst sluiten of de dienstverlening niet verantwoord aanbieden. Andere gegevens, waaronder opnamen en gegevens voor publicatie of onderzoek, zijn vrijwillig en worden alleen voor het afgesproken doel gebruikt."),
    ],
  },
  {
    heading: "4. Bijzondere persoonsgegevens",
    blocks: [
      p("In begeleiding kunnen gegevens aan de orde komen die iets zeggen over iemands lichamelijke of mentale welzijn. Dit kunnen bijzondere persoonsgegevens zijn. Moveri verwerkt zulke gegevens alleen wanneer zij relevant zijn voor de begeleiding en de cliënt daarvoor afzonderlijk en uitdrukkelijk toestemming heeft gegeven. Toestemming kan altijd voor de toekomst worden ingetrokken; de verwerking vóór de intrekking blijft rechtmatig. Als bepaalde gegevens daadwerkelijk noodzakelijk zijn om veilig en verantwoord te kunnen begeleiden, kan het weigeren of intrekken van toestemming betekenen dat het traject niet of niet op dezelfde manier kan worden voortgezet."),
      p("De dienstverlening van Moveri betreft sport- en prestatiebegeleiding. Moveri stelt geen medische of psychiatrische diagnose en behandelt geen psychische stoornissen. Wanneer tijdens de intake of begeleiding blijkt dat de hulpvraag mede gericht is op het onderzoeken of behandelen van psychische of medische problematiek, bespreekt Moveri een passende verwijzing naar een daartoe bevoegde professional."),
    ],
  },
  {
    heading: "5. Waarom en op welke grondslag verwerkt Moveri gegevens?",
    blocks: [
      p("Moveri verwerkt persoonsgegevens voor de volgende doeleinden en op basis van de daarbij passende AVG-grondslag:"),
      ul([
        "een door de betrokkene aangevraagde kennismaking of opdracht voorbereiden: noodzakelijke stappen voorafgaand aan een overeenkomst; algemene vragen beantwoorden: het gerechtvaardigde belang om zorgvuldig op een verzoek te reageren;",
        "offertes opstellen, afspraken plannen en diensten uitvoeren: voorbereiding en uitvoering van de overeenkomst;",
        "individuele of teamgerichte begeleiding uitvoeren en evalueren: uitvoering van de overeenkomst; voor bijzondere persoonsgegevens wordt daarnaast uitdrukkelijke toestemming gevraagd;",
        "factureren, betalingen verwerken en de administratie voeren: uitvoering van de overeenkomst en naleving van wettelijke verplichtingen;",
        "kwaliteit bewaken, klachten behandelen en juridische aanspraken vaststellen of verdedigen: het gerechtvaardigde belang van zorgvuldige dienstverlening, bedrijfscontinuïteit en bescherming van de rechtspositie van Moveri;",
        "de website, digitale systemen en dienstverlening beveiligen en misbruik voorkomen: het gerechtvaardigde belang van informatiebeveiliging en een betrouwbare bedrijfsvoering;",
        "een nieuwsbrief of andere algemene updates verzenden, wanneer Moveri die aanbiedt: toestemming, tenzij de wet toestaat bestaande klanten over vergelijkbare diensten te informeren; afmelden kan altijd;",
        "beeld, geluid of een herkenbare praktijkcasus gebruiken voor opleiding, supervisie, intervisie, communicatie of onderzoek: uitsluitend op basis van een afzonderlijke, gerichte toestemming als de persoon direct of indirect herkenbaar kan zijn.",
      ]),
    ],
  },
  {
    heading: "6. Minderjarige cliënten",
    blocks: [
      p("Moveri begeleidt in beginsel jongeren vanaf 12 jaar. In bijzondere gevallen kan Moveri ook een jonger kind begeleiden, wanneer de begeleiding past bij de leeftijd, ontwikkelingsfase, hulpvraag en deskundigheid van Moveri."),
      p("Bij een cliënt jonger dan 16 jaar wordt de wettelijk vertegenwoordiger betrokken bij de overeenkomst. Moveri vraagt diens uitdrukkelijke toestemming voor verwerkingen waarvoor toestemming de grondslag is, waaronder de verwerking van bijzondere persoonsgegevens en het maken van opnamen. Moveri informeert ook de jongere zelf op een manier die past bij diens leeftijd en ontwikkelingsniveau en vraagt om instemming met de begeleiding en de verwerking van gegevens. Vanaf 16 jaar beslist de jongere in beginsel zelf over de verwerking van persoonsgegevens en het delen van inhoudelijke informatie. Omdat een cliënt tot 18 jaar civielrechtelijk minderjarig is, kan Moveri daarnaast vragen dat een wettelijk vertegenwoordiger de overeenkomst en betalingsafspraken mede bevestigt."),
      p("Moveri legt vooraf vast wie het ouderlijk gezag heeft, wie opdrachtgever en betaler is en welke informatie eventueel met ouders, coaches of een organisatie mag worden gedeeld. Bij jonge kinderen wordt in het bijzonder afgesproken welke ruimte het kind krijgt om vertrouwelijk te spreken en welke informatie aan de wettelijk vertegenwoordiger wordt teruggekoppeld. Daarbij houdt Moveri rekening met de leeftijd en belangen van het kind en met de wettelijke positie van de vertegenwoordiger. Het feit dat een ouder, club of bond de begeleiding betaalt, geeft die partij niet automatisch recht op de volledige inhoud van gesprekken of het dossier."),
    ],
  },
  {
    heading: "7. Vertrouwelijkheid en delen met derden",
    blocks: [
      p("Moveri behandelt informatie uit individuele begeleiding vertrouwelijk. Inhoudelijke informatie wordt alleen gedeeld met een ouder, coach, club, school, werkgever, bond of andere opdrachtgever na gerichte toestemming van de cliënt en, waar nodig, de wettelijk vertegenwoordiger. Vooraf wordt afgesproken welke informatie, met wie, voor welk doel en gedurende welke periode wordt gedeeld. Zonder toestemming deelt Moveri alleen informatie wanneer dit wettelijk verplicht is of wanneer dit noodzakelijk is ter bescherming van de vitale belangen van de cliënt of een ander in een ernstige en acute veiligheidssituatie. In dat geval wordt alleen gedeeld wat noodzakelijk is en wordt de cliënt, voor zover mogelijk, geïnformeerd."),
      p("Moveri kan persoonsgegevens delen met partijen die nodig zijn voor de bedrijfsvoering of dienstverlening, zoals:"),
      ul([
        "de bank, Knab en een eventuele boekhouder of accountant voor financiële administratie;",
        "leveranciers van cloudopslag, kantoor-, dossier-, communicatie- en beveiligingssoftware voor opslag, administratie en veilige bedrijfsvoering;",
        "de website-, hosting-, e-mail- en formulierprovider voor technisch beheer en contactverzoeken;",
        "een aanbieder van videobellen of digitale communicatie wanneer online begeleiding plaatsvindt;",
        "een samenwerkingspartner of planningssysteem bij afspraken via een externe praktijklocatie. Bij afspraken via De Krachtcentrale worden uitsluitend de noodzakelijke planningsgegevens verwerkt; De Krachtcentrale heeft geen toegang tot het inhoudelijke cliëntdossier;",
        "professionele adviseurs, verzekeraars, toezichthouders of overheidsinstanties wanneer dit nodig of wettelijk verplicht is.",
      ]),
      p("Met partijen die namens Moveri persoonsgegevens verwerken, sluit Moveri waar vereist een verwerkersovereenkomst. Daarin staan afspraken over onder meer beveiliging, vertrouwelijkheid, bewaartermijnen en verwijdering. Moveri verkoopt persoonsgegevens niet."),
    ],
  },
  {
    heading: "8. Opleiding, supervisie, intervisie en onderzoek",
    blocks: [
      p("Moveri kan praktijksituaties bespreken in opleiding, supervisie of intervisie om de kwaliteit van het professioneel handelen te verbeteren. Daarbij worden gegevens weggelaten of aangepast zodat de cliënt redelijkerwijs niet herkenbaar is, en wordt niet meer informatie gedeeld dan nodig. Als directe of indirecte herkenbaarheid niet voldoende kan worden uitgesloten, vraagt Moveri vooraf afzonderlijke toestemming en zijn de betrokken professionals aan vertrouwelijkheid gebonden."),
      p("Gebruik van cliëntgegevens voor wetenschappelijk onderzoek vindt niet automatisch plaats. Wanneer persoonsgegevens worden gebruikt, verstrekt Moveri vooraf afzonderlijke informatie en regelt Moveri een passende grondslag. Een cliënt kan deelname aan onderzoek weigeren zonder dat dit gevolgen heeft voor de reguliere dienstverlening."),
    ],
  },
  {
    heading: "9. Opnamen en beeldmateriaal",
    blocks: [
      p("Een gesprek, training of sessie wordt niet opgenomen zonder voorafgaande, afzonderlijke en specifieke toestemming. Daarbij legt Moveri het doel, wie toegang heeft, het gebruik en de bewaartermijn vast. Het weigeren of intrekken van toestemming voor een opname heeft geen gevolgen voor de reguliere begeleiding. Toestemming voor een opname staat los van toestemming voor publicatie. Herkenbare foto's, video's, citaten of ervaringen worden alleen gepubliceerd na afzonderlijke toestemming. Die kan voor toekomstig gebruik worden ingetrokken; Moveri verwijdert het materiaal dan waar redelijkerwijs mogelijk van de eigen kanalen."),
    ],
  },
  {
    heading: "10. Bewaartermijnen",
    blocks: [
      p("Moveri bewaart persoonsgegevens niet langer dan noodzakelijk. In beginsel gelden de volgende termijnen:"),
      ul([
        "contactverzoeken die niet tot een opdracht leiden: maximaal 1 jaar na het laatste contact;",
        "inhoudelijke cliëntdossiers, vragenlijsten en sessieverslagen: in beginsel 2 jaar na afronding van het traject. Een verzoek om eerdere verwijdering wordt beoordeeld volgens de AVG. Langer bewaren gebeurt alleen wanneer een wettelijke verplichting of een aantoonbare zwaarwegende reden dat noodzakelijk maakt;",
        "tijdelijke persoonlijke werkaantekeningen: zo kort mogelijk en uiterlijk bij afronding van het traject vernietigd;",
        "audio- of video-opnamen van sessies: verwijderd zodra het afgesproken doel is bereikt, na intrekking van de toestemming en uiterlijk binnen 3 maanden, tenzij een wettelijke verplichting zich tegen verwijdering verzet;",
        "offertes, overeenkomsten, toestemmingen en relevante zakelijke correspondentie: in beginsel maximaal 5 jaar na afronding, voor zover nodig voor verantwoording of mogelijke aanspraken; stukken die onderdeel zijn van de fiscale administratie worden 7 jaar bewaard;",
        "facturen en fiscale administratie: 7 jaar overeenkomstig de fiscale bewaarplicht;",
        "nieuwsbriefgegevens: totdat iemand zich afmeldt; daarna wordt alleen bewaard wat nodig is om de afmelding te respecteren;",
        "technische beveiligings- en websitelogs onder beheer van Moveri: maximaal 12 maanden, tenzij een incident langer onderzoek noodzakelijk maakt; dienstverleners kunnen eigen, noodzakelijke logtermijnen hanteren;",
      ]),
      p("Wanneer een andere wettelijke bewaartermijn van toepassing is, volgt Moveri die termijn. Na afloop worden gegevens veilig verwijderd of onomkeerbaar geanonimiseerd."),
    ],
  },
  {
    heading: "11. Beveiliging en opslag",
    blocks: [
      p("Moveri treft passende technische en organisatorische maatregelen. Daaronder vallen onder meer versleutelde verbindingen, sterke en unieke wachtwoorden, meerfactorauthenticatie waar beschikbaar, automatische schermvergrendeling, actuele software, beperkte toegang en versleutelde opslag en back-up. Inhoudelijke cliëntgegevens worden gescheiden gehouden van algemene administratie en worden waar praktisch mogelijk onder een cliëntcode opgeslagen."),
      p("E-mail en gewone berichtenapps zijn niet geschikt voor uitgebreide gevoelige informatie. Moveri vraagt cliënten daarom om zulke gegevens zo veel mogelijk tijdens een beveiligd gesprek of via een afgesproken veilige route te delen."),
    ],
  },
  {
    heading: "12. Verwerking buiten de Europese Economische Ruimte",
    blocks: [
      p("Moveri kiest waar mogelijk dienstverleners die gegevens binnen de Europese Economische Ruimte verwerken. Als een dienstverlener gegevens buiten de EER verwerkt, gebruikt Moveri een wettelijk toegestaan doorgiftemechanisme, zoals een adequaatheidsbesluit of door de Europese Commissie goedgekeurde standaardcontractbepalingen, aangevuld met passende waarborgen."),
    ],
  },
  {
    heading: "13. Website, formulieren, cookies en externe links",
    blocks: [
      p("Via het contactformulier verwerkt Moveri de naam, het e-mailadres, eventueel het telefoonnummer en de inhoud van het bericht om het verzoek te beantwoorden. Het formulier is niet bedoeld voor uitgebreide gevoelige of medische informatie. Voor de werking en beveiliging van de website kunnen het IP-adres en technische loggegevens worden verwerkt. De taalkeuze Nederlands of Engels wordt lokaal in de browser opgeslagen (local storage). De website gebruikt op dit moment geen analyse- of marketingcookies. Als Moveri later technieken inzet waarvoor toestemming nodig is, worden bezoekers vooraf geïnformeerd, wordt waar nodig toestemming gevraagd en wordt deze verklaring aangepast."),
      p("De website kan links bevatten naar externe websites of sociale media. Voor de verwerking door die partijen geldt hun eigen privacyverklaring."),
    ],
  },
  {
    heading: "14. Geautomatiseerde besluitvorming",
    blocks: [
      p("Moveri neemt geen besluiten met aanzienlijke gevolgen voor personen uitsluitend op basis van geautomatiseerde verwerking of profilering. Vragenlijsten ondersteunen de professionele begeleiding, maar worden niet zelfstandig gebruikt om een diagnose of bindend besluit te nemen."),
    ],
  },
  {
    heading: "15. Jouw privacyrechten",
    blocks: [
      p("Afhankelijk van de situatie heb je recht op inzage, correctie, verwijdering, beperking van verwerking, overdraagbaarheid van gegevens en bezwaar tegen verwerking. Als de verwerking op toestemming berust, kun je die toestemming voor de toekomst intrekken. Een verzoek kan worden gestuurd naar irene@moveri.eu. Moveri reageert in beginsel binnen één maand. Wanneer dat nodig is om misbruik te voorkomen, kan Moveri op een proportionele manier om aanvullende informatie vragen om de identiteit van de verzoeker vast te stellen. Stuur niet uit eigen beweging een onbewerkte kopie van een identiteitsbewijs mee."),
      p("Sommige rechten zijn niet absoluut. Gegevens die Moveri wettelijk moet bewaren, hoeven bijvoorbeeld niet direct te worden verwijderd. Bij een dossier met informatie over meerdere personen beschermt Moveri ook de privacy van die anderen."),
    ],
  },
  {
    heading: "16. Vragen, klachten en wijzigingen",
    blocks: [
      p("Heb je een vraag of klacht over de verwerking van jouw persoonsgegevens? Neem dan bij voorkeur eerst contact op met Moveri via irene@moveri.eu, zodat we samen naar een oplossing kunnen zoeken. Je hebt daarnaast altijd het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens."),
      p("Moveri kan deze privacyverklaring aanpassen wanneer de dienstverlening, de gebruikte systemen of de toepasselijke wet- en regelgeving verandert. Op moveri.eu staat steeds de meest actuele versie, voorzien van een versiedatum. Als een wijziging belangrijke gevolgen heeft voor de wijze waarop Moveri persoonsgegevens verwerkt, informeert Moveri de betrokkenen daarover, voor zover dat redelijkerwijs mogelijk is."),
    ],
  },
]

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((b, i) =>
        b.type === "p" ? (
          <p key={i} className="text-foreground/70 leading-relaxed" style={DF}>
            {b.text}
          </p>
        ) : (
          <ul key={i} className="flex flex-col gap-2.5 pl-5" style={{ ...DF, listStyleType: "disc" }}>
            {b.items.map((item, j) => (
              <li key={j} className="text-foreground/70 leading-relaxed pl-1">
                {item}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  )
}

export function PrivacyPage() {
  const { lang } = useLang()

  if (lang === "en") {
    return (
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-primary font-extrabold text-xs tracking-[0.14em] uppercase mb-4" style={DF}>
            LEGAL&nbsp;&nbsp;·&nbsp;&nbsp;MOVERI
          </p>
          <h1 className="text-4xl lg:text-5xl text-foreground mb-5" style={DF}>
            Privacy policy
          </h1>
          <p className="text-foreground/65 leading-relaxed" style={DF}>
            This page is only available in Dutch, because they contain legal matters. Please translate the content from Dutch yourself, understanding detail might be lost in translation. Use the language switch at the top of the page to view the privacy policy in Dutch. Contact irene@moveri.eu if you have any questions or concerns.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-primary font-extrabold text-xs tracking-[0.14em] uppercase mb-4" style={DF}>
          JURIDISCH&nbsp;&nbsp;·&nbsp;&nbsp;MOVERI
        </p>
        <h1 className="text-4xl lg:text-5xl text-foreground mb-5" style={DF}>
          Privacyverklaring
        </h1>
        <p className="text-foreground/65 leading-relaxed text-lg mb-8" style={DF}>
          Hoe Moveri zorgvuldig omgaat met persoonsgegevens van bezoekers, cliënten, deelnemers en opdrachtgevers.
        </p>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 rounded-2xl border border-border bg-muted/60 p-6 mb-10">
          <div className="flex justify-between sm:block gap-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50" style={DF}>Versie</dt>
            <dd className="text-sm text-foreground sm:mt-1" style={DF}>1.0 - 28 augustus 2026</dd>
          </div>
          <div className="flex justify-between sm:block gap-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50" style={DF}>Organisatie</dt>
            <dd className="text-sm text-foreground sm:mt-1" style={DF}>Moveri / Moveri - Talent & Performance</dd>
          </div>
        </dl>

        <div className="rounded-2xl bg-accent p-6 lg:p-8 mb-14">
          <p className="text-xs font-bold uppercase tracking-wide text-primary mb-3" style={DF}>Kort samengevat</p>
          <p className="text-foreground/80 leading-relaxed" style={DF}>
            Moveri gebruikt alleen gegevens die nodig zijn voor contact, dienstverlening en administratie. Inhoudelijke informatie uit begeleiding wordt niet met ouders, coaches, clubs of andere opdrachtgevers gedeeld zonder gerichte toestemming, behalve wanneer de wet dit vereist of een ernstige en acute veiligheidssituatie dit noodzakelijk maakt.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {SECTIONS.map((s, i) => (
            <div key={i} className={i === 0 ? "" : "pt-12 border-t border-border"}>
              <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-4" style={DF}>{s.heading}</h2>
              <Blocks blocks={s.blocks} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
