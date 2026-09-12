"use client"

import { useLang } from "@/i18n/LangProvider"
import { DF } from "@/lib/style"

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "sub"; text: string }
  | { type: "table"; headers: [string, string]; rows: Array<[string, string]> }

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

function sub(text: string): Block {
  return { type: "sub", text }
}

function table(headers: [string, string], rows: Array<[string, string]>): Block {
  return { type: "table", headers, rows }
}

const SECTIONS: LegalSection[] = [
  {
    heading: "1 Voor wie deze voorwaarden gelden",
    blocks: [
      p("Moveri, tevens handelend onder de naam Moveri - Talent & Performance, is een eenmanszaak van Irene Faber, gevestigd aan Veilingstraat 30, 7391 GM Twello. Moveri is ingeschreven bij de Kamer van Koophandel onder nummer 42095103 en heeft btw-identificatienummer NL005494442B16. Contact kan via irene@moveri.eu, 06-20030686 en https://moveri.eu/."),
      p("In deze voorwaarden is de opdrachtgever de persoon of organisatie die met Moveri een overeenkomst sluit. Een consument is een opdrachtgever die niet handelt vanuit beroep of bedrijf. De cliënt ontvangt individuele begeleiding; dit kan iemand anders zijn dan de opdrachtgever. Een deelnemer neemt deel aan teambegeleiding, onderwijs, een workshop, training of andere activiteit."),
      p("Deze voorwaarden gelden voor alle aanbiedingen, afspraken en overeenkomsten van Moveri. De opdrachtgever ontvangt ze vóór of bij het sluiten van de overeenkomst. Afspraken in een geaccepteerde offerte, opdrachtbevestiging of begeleidingsovereenkomst gaan voor als zij afwijken. Afwijkingen worden schriftelijk vastgelegd; daaronder valt ook e-mail of een bevestiging via een afgesproken boekings- of communicatiesysteem. Voorwaarden van een zakelijke opdrachtgever gelden alleen als Moveri die uitdrukkelijk schriftelijk aanvaardt. Is een bepaling ongeldig, dan blijven de overige bepalingen gelden."),
    ],
  },
  {
    heading: "2 Wat je van Moveri kunt verwachten",
    blocks: [
      p("Een offerte is vrijblijvend en 30 dagen geldig, tenzij daarin iets anders staat. De overeenkomst ontstaat zodra de opdrachtgever een aanbod aanvaardt, een afspraak definitief bevestigt of Moveri op verzoek met de uitvoering begint. Moveri legt vooraf zo duidelijk mogelijk vast wat de opdracht inhoudt, welke tarieven en bijkomende kosten gelden en welke rolverdeling of terugkoppeling is afgesproken. Wijzigingen worden eerst besproken en schriftelijk bevestigd."),
      p("Moveri voert de opdracht zorgvuldig, persoonlijk en naar beste inzicht en vermogen uit. De dienstverlening is een inspanningsverplichting: Moveri garandeert geen bepaald resultaat, prestatieniveau, selectie, herstel of zakelijk effect."),
      p("Individuele begeleiding richt zich op sport- en prestatievragen, ontwikkeling en functioneren onder druk. Zij is geen medische, psychotherapeutische of geestelijke gezondheidszorg. Moveri stelt geen diagnose en behandelt geen psychische stoornis. Valt een hulpvraag buiten de deskundigheid van Moveri, dan bespreekt Moveri dit en adviseert zij zo nodig passende hulp. Bij acute nood neemt de cliënt contact op met de huisarts, huisartsenpost of 112."),
      p("Moveri werkt zorgvuldig, onafhankelijk en binnen de grenzen van haar deskundigheid. Daarbij gebruikt Moveri de kernprincipes verantwoordelijkheid, integriteit, respect en deskundigheid uit de gedragscode van de Vereniging voor Sportpsychologie in Nederland (VSPN) als professioneel richtsnoer. Irene Faber werkt als sport- en prestatiepsycholoog i.o. en is niet geaccrediteerd als SPORTPSYCHOLOOG VSPN®. De gedragscode is geen onderdeel van de overeenkomst. De gedragscode staat op https://www.vspn.nl/sportpsychologen/ethische-gedragscode."),
      p("De opdrachtgever, cliënt en deelnemer verstrekken tijdig juiste informatie, melden relevante veranderingen, volgen redelijke veiligheids- en huisregels en blijven zelf verantwoordelijk voor keuzes, gedrag, training en gezondheid. Moveri mag een activiteit onderbreken, een deelnemer uitsluiten of een opdracht beëindigen wanneer veiligheid, integriteit, vertrouwen of een werkbare begeleiding ernstig in gevaar komt. Waar mogelijk bespreken partijen eerst een oplossing."),
    ],
  },
  {
    heading: "3 Begeleiding van jongeren en opdrachten door derden",
    blocks: [
      p("Moveri begeleidt in beginsel jongeren vanaf 12 jaar. Een jonger kind kan in bijzondere gevallen worden begeleid als dit gezien de leeftijd, ontwikkelingsfase en hulpvraag passend en verantwoord is en binnen de deskundigheid van Moveri valt."),
      p("Bij een cliënt jonger dan 16 jaar vraagt Moveri vooraf toestemming van de wettelijk vertegenwoordiger(s). Het kind wordt passend bij de leeftijd geïnformeerd en betrokken; vanaf 12 jaar vraagt Moveri ook uitdrukkelijk om instemming van de jongere. Moveri kan vragen om bevestiging van het ouderlijk gezag."),
      p("Vanaf 16 jaar beslist de jongere in beginsel zelf over de inhoud van de begeleiding, het dossier en het delen van informatie. Omdat iemand tot 18 jaar minderjarig is, kan Moveri vragen dat een wettelijk vertegenwoordiger de overeenkomst en betaling mede bevestigt."),
      p("Is een ouder, club, bond, school, werkgever of andere derde opdrachtgever, dan spreken partijen vooraf af wie cliënt of deelnemer is en welke terugkoppeling de opdrachtgever krijgt. Betaling geeft niet automatisch recht op de inhoud van gesprekken of het cliëntdossier. Inhoudelijke informatie wordt alleen gedeeld na gerichte toestemming van de cliënt en, waar nodig, diens wettelijk vertegenwoordiger. Algemene informatie over aanwezigheid, het proces of afgesproken doelen kan worden gedeeld als dit vooraf duidelijk is afgesproken. Moveri bewaakt haar onafhankelijke professionele afweging wanneer belangen uiteenlopen."),
    ],
  },
  {
    heading: "4 Afspraken en locaties",
    blocks: [
      p("Diensten kunnen plaatsvinden op een eigen of door de opdrachtgever geregelde locatie, online of bij een samenwerkingspartner. Een externe locatie wordt daardoor niet automatisch de inhoudelijke of contractuele dienstverlener."),
      p("Bij sport- en prestatiepsychologische begeleiding door Irene Faber bij Krachtcentrale Zwolle sluit de cliënt de overeenkomst rechtstreeks met Moveri en ontvangt die de factuur van Moveri. Moveri bepaalt zelfstandig inhoud, werkwijze, tarieven en beschikbaarheid en is verantwoordelijk voor communicatie, professionele uitvoering, dossiervoering, privacy, facturatie en passende doorverwijzing. Krachtcentrale Zwolle heeft geen toegang tot het cliëntdossier. De cliënt respecteert de redelijke huis- en veiligheidsregels van de locatie. Vragen of klachten over de begeleiding gaan naar Moveri; vragen over de ruimte of faciliteiten kunnen ook met de locatie worden besproken."),
      p("Afspraken worden met Moveri gemaakt via e-mail of WhatsApp. Bij een externe locatie kan daarnaast een boekingssysteem worden gebruikt om afspraken te plannen, wijzigen of annuleren. Daarin worden alleen de gegevens vastgelegd die daarvoor nodig zijn. Meer informatie staat in de privacyverklaring van Moveri."),
      p("Bij online dienstverlening zorgt de cliënt of deelnemer voor een werkende verbinding, geschikte apparatuur en een rustige, voldoende besloten omgeving. Kan een sessie door een storing aan de kant van Moveri niet zinvol doorgaan, dan wordt zij kosteloos verplaatst. Bij een storing aan de kant van de cliënt geldt in beginsel de annuleringsregeling, tenzij een andere oplossing redelijker is. Online dienstverlening aan iemand in het buitenland wordt vanuit Nederland verricht; de cliënt blijft verantwoordelijk voor vereisten die specifiek gelden in het land waar die zich bevindt."),
    ],
  },
  {
    heading: "5 Tarieven en betalen",
    blocks: [
      p("Voor individuele begeleiding gelden op de versiedatum de volgende tarieven:"),
      table(
        ["Dienst", "Tarief"],
        [
          ["Intake van circa 60 minuten", "€ 150 inclusief btw"],
          ["Losse sessie van maximaal 60 minuten", "€ 125 inclusief btw"],
          ["Traject met een intake en negen begeleidingssessies", "€ 1.200 inclusief btw"],
        ]
      ),
      p("Voor teambegeleiding, workshops, onderwijs, onderzoek en andere diensten maakt Moveri een aparte offerte. Daarin staan de inhoud, planning, prijs en eventuele bijkomende kosten. Consumentenprijzen zijn inclusief btw en zakelijke prijzen exclusief btw, tenzij anders vermeld. Reis-, locatie- en externe kosten worden alleen apart berekend als dit vooraf is afgesproken. Tariefwijzigingen gelden alleen voor nieuwe afspraken of opdrachten, tenzij partijen schriftelijk anders overeenkomen."),
      p("Facturen moeten binnen 14 dagen na factuurdatum worden betaald, tenzij anders is afgesproken. Een consument ontvangt bij te late betaling eerst een kosteloze betalingsherinnering met een nieuwe wettelijke termijn van 14 dagen. Daarna kunnen wettelijke rente en wettelijke incassokosten verschuldigd zijn. Een zakelijke opdrachtgever is na het verstrijken van de betalingstermijn in verzuim en kan wettelijke handelsrente en redelijke incassokosten verschuldigd zijn."),
      p("Bij een betalingsachterstand mag Moveri de uitvoering opschorten nadat de opdrachtgever een redelijke gelegenheid heeft gekregen alsnog te betalen, tenzij de omstandigheden onmiddellijke opschorting rechtvaardigen."),
    ],
  },
  {
    heading: "6 Bedenktijd voor consumenten",
    blocks: [
      p("Sluit een consument de overeenkomst op afstand, bijvoorbeeld via internet, e-mail of telefoon, of buiten de bedrijfsruimte, dan geldt in beginsel een wettelijke bedenktijd van 14 dagen vanaf het sluiten van de overeenkomst. Herroepen kan binnen die termijn zonder reden via een duidelijke verklaring per e-mail of met het formulier in de bijlage."),
      p("Wil de consument dat Moveri tijdens de bedenktijd begint, dan vraagt Moveri om een uitdrukkelijk verzoek. Bij herroeping betaalt de consument een evenredig bedrag voor het al uitgevoerde deel. Het herroepingsrecht vervalt na volledige uitvoering alleen als de consument vooraf uitdrukkelijk met directe uitvoering heeft ingestemd en heeft erkend dat het recht daarna vervalt. Geldt een wettelijke uitzondering, dan informeert Moveri de consument daar vooraf over."),
    ],
  },
  {
    heading: "7 Annuleren of stoppen",
    blocks: [
      sub("Individuele afspraken"),
      p("Een individuele afspraak kan tot 24 uur voor aanvang kosteloos worden geannuleerd of verplaatst via de afgesproken contact- of boekingsroute. Bij latere annulering of niet verschijnen mag Moveri het volledige sessietarief rekenen of de sessie als gebruikt onderdeel van een traject beschouwen. Moveri houdt rekening met uitzonderlijke omstandigheden en met de mogelijkheid de vrijgekomen tijd nog redelijkerwijs te benutten. Annuleert Moveri, dan wordt de afspraak kosteloos verplaatst of vervalt het honorarium voor het niet-uitgevoerde deel."),
      sub("Trajecten"),
      p("Een consument kan een individueel traject tussentijds beëindigen. De gebruikte intake en sessies worden dan berekend tegen de losse tarieven uit artikel 5, met als maximum de afgesproken trajectprijs. Speciaal verrichte voorbereiding en niet-terugvorderbare externe kosten kunnen daarnaast worden berekend als dit redelijk is en vooraf is afgesproken. Een resterende vooruitbetaling wordt terugbetaald. Voor een zakelijke opdrachtgever kan schriftelijk worden afgesproken dat een traject voor bepaalde tijd niet tussentijds opzegbaar is; zonder zo'n afspraak betaalt die bij voortijdige beëindiging het uitgevoerde werk, aangegane verplichtingen en redelijke schade."),
      sub("Workshops en organisatieopdrachten"),
      p("Tenzij de offerte anders bepaalt, betaalt een zakelijke opdrachtgever bij annulering:"),
      ul([
        "geen annuleringsvergoeding bij annulering 30 kalenderdagen of meer voor aanvang;",
        "50% van het honorarium bij annulering tussen 30 en 14 kalenderdagen voor aanvang;",
        "100% van het honorarium bij annulering minder dan 14 kalenderdagen voor aanvang.",
      ]),
      p("Reeds gemaakte of niet meer kosteloos te annuleren externe kosten worden daarnaast doorberekend. Voor consumenten geldt deze regeling alleen voor zover zij wettelijk is toegestaan en de vergoeding redelijk is. Bij een verzoek tot verplaatsing zoeken partijen eerst een nieuwe datum; redelijke extra kosten mogen worden doorberekend. Wordt geen nieuwe datum gevonden, dan geldt de regeling op basis van de oorspronkelijke datum."),
      sub("Beëindiging door Moveri"),
      p("Moveri mag een opdracht beëindigen als voortzetting buiten haar deskundigheid valt of professioneel niet verantwoord is, noodzakelijke medewerking ontbreekt, betaling ondanks herinnering uitblijft of veiligheid, integriteit of vertrouwen ernstig is verstoord. Waar passend bespreekt Moveri eerst een oplossing en ondersteunt zij een zorgvuldige afronding of doorverwijzing. Niet-uitgevoerd werk wordt niet berekend, behalve voor zover de oorzaak aan de opdrachtgever is toe te rekenen en betaling redelijk is."),
    ],
  },
  {
    heading: "8 Privacy en vertrouwelijkheid",
    blocks: [
      p("Moveri behandelt vertrouwelijke informatie zorgvuldig en verwerkt persoonsgegevens volgens de privacyverklaring op https://moveri.eu/. De vertrouwelijkheid van individuele begeleiding blijft ook na afloop gelden."),
      p("Inhoudelijke informatie wordt alleen met een ouder, coach, club, school, werkgever, bond of andere derde gedeeld na gerichte toestemming van de cliënt en, waar nodig, diens wettelijk vertegenwoordiger. Zonder toestemming deelt Moveri alleen informatie als dit wettelijk verplicht is of als na zorgvuldige afweging het delen van strikt noodzakelijke informatie nodig is om een ernstig en acuut gevaar voor de cliënt of iemand anders te beperken. De cliënt wordt daarover voor zover mogelijk geïnformeerd."),
      p("Bij team- en groepsactiviteiten respecteren deelnemers elkaars privacy. Moveri kan hierover afspraken maken, maar kan vertrouwelijkheid tussen deelnemers niet volledig garanderen."),
      p("Een gesprek, sessie of activiteit wordt alleen opgenomen na voorafgaande toestemming van alle direct betrokkenen en na afspraken over doel, toegang, gebruik en bewaartermijn. Moveri mag volledig geanonimiseerde praktijksituaties gebruiken voor opleiding, supervisie of intervisie. Kan iemand herkenbaar zijn, dan is afzonderlijke gerichte toestemming nodig. Namen, logo's, beelden, citaten, testimonials en herkenbare resultaten worden niet voor publiciteit gebruikt zonder specifieke toestemming; die toestemming kan voor toekomstig gebruik worden ingetrokken."),
    ],
  },
  {
    heading: "9 Materialen en andere dienstverleners",
    blocks: [
      p("Auteursrechten en andere intellectuele eigendomsrechten op door Moveri ontwikkelde materialen, modellen, teksten, presentaties, vragen, werkvormen en rapportages blijven bij Moveri of de oorspronkelijke rechthebbende. De opdrachtgever en deelnemers mogen ontvangen materialen gebruiken voor het persoonlijke of interne doel van de opdracht. Zonder schriftelijke toestemming mogen zij die niet openbaar maken, commercieel exploiteren, integraal kopiëren, aan derden verstrekken of gebruiken om zelf een vergelijkbare dienst aan te bieden. Eigen aantekeningen, algemene kennis en opgedane vaardigheden mogen wel worden toegepast."),
      p("Moveri mag gekwalificeerde derden of samenwerkingspartners inschakelen. Als de persoonlijke aard van de opdracht dit vereist, bespreekt Moveri dit vooraf. Neemt de opdrachtgever rechtstreeks een dienst bij een externe partij af, dan kunnen de voorwaarden van die partij gelden; Moveri maakt duidelijk wanneer daarvan sprake is."),
    ],
  },
  {
    heading: "10 Aansprakelijkheid en overmacht",
    blocks: [
      p("Moveri is alleen aansprakelijk voor directe schade die het gevolg is van een toerekenbare tekortkoming. De opdrachtgever geeft Moveri eerst een redelijke mogelijkheid tot herstel, tenzij herstel niet mogelijk of niet zinvol is. Voor zover de wet dit toestaat, is de aansprakelijkheid beperkt tot het bedrag dat de aansprakelijkheidsverzekering uitkeert, vermeerderd met het eigen risico. Vindt geen uitkering plaats, dan is zij beperkt tot het honorarium voor het schadeveroorzakende onderdeel, met een maximum van € 1.500."),
      p("Tegenover zakelijke opdrachtgevers is Moveri niet aansprakelijk voor indirecte schade, zoals gevolgschade, gederfde winst, reputatieschade of bedrijfsstagnatie. Moveri is niet verantwoordelijk voor beslissingen van coaches, selecteurs, werkgevers, scholen, sportorganisaties of andere derden, of voor zelfstandig genomen beslissingen van de cliënt, deelnemer of opdrachtgever. Deze beperkingen gelden niet bij opzet of bewuste roekeloosheid van Moveri en niet waar dwingend recht beperking verbiedt. Wettelijke consumentenrechten blijven gelden."),
      p("Bij overmacht hoeft Moveri haar verplichtingen tijdelijk niet na te komen. Partijen zoeken eerst naar verplaatsing, online uitvoering, een andere locatie of een passende aanpassing. Is uitvoering blijvend onmogelijk, dan betaalt de opdrachtgever alleen het uitgevoerde deel en niet-terugvorderbare externe kosten. Eindigt de samenwerking met een externe praktijklocatie, dan blijft een gestart traject waar mogelijk onder verantwoordelijkheid van Moveri doorlopen, online of op een andere passende locatie."),
    ],
  },
  {
    heading: "11 Klachten recht en wijzigingen",
    blocks: [
      p("Een klacht kan zo snel mogelijk na ontdekking worden gemeld via irene@moveri.eu, met voldoende informatie om haar te onderzoeken. Moveri bevestigt de klacht en reageert in beginsel binnen 30 dagen. Is meer tijd nodig, dan laat Moveri weten waarom en wanneer een reactie volgt. Partijen proberen de klacht eerst samen op te lossen. De verwijzing naar de VSPN-gedragscode in artikel 2 betekent niet dat Moveri VSPN-accreditatie heeft of dat toegang tot een klachtenprocedure van de VSPN is overeengekomen."),
      p("Op de overeenkomst is Nederlands recht van toepassing. Een consument behoudt de bescherming van dwingend consumentenrecht van het land waar die gewoonlijk woont, voor zover dat recht van toepassing is. Geschillen worden voorgelegd aan de volgens de wet bevoegde rechter; voor consumenten wordt geen afwijkende exclusieve rechter aangewezen."),
      p("Moveri kan deze voorwaarden aanpassen wanneer dienstverlening, samenwerking, bedrijfsvoering of wetgeving verandert. Op https://moveri.eu/ staat de actuele versie met versiedatum. Voor een lopende opdracht blijft de verstrekte versie gelden, tenzij partijen schriftelijk met een wijziging instemmen of dwingend recht aanpassing vereist."),
    ],
  },
]

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((b, i) => {
        if (b.type === "p") {
          return (
            <p key={i} className="text-foreground/70 leading-relaxed" style={DF}>
              {b.text}
            </p>
          )
        }
        if (b.type === "sub") {
          return (
            <h3 key={i} className="text-base font-semibold text-foreground mt-2" style={DF}>
              {b.text}
            </h3>
          )
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="flex flex-col gap-2.5 pl-5" style={{ ...DF, listStyleType: "disc" }}>
              {b.items.map((item, j) => (
                <li key={j} className="text-foreground/70 leading-relaxed pl-1">
                  {item}
                </li>
              ))}
            </ul>
          )
        }
        return (
          <div key={i} className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left border-collapse" style={DF}>
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-xs font-semibold uppercase tracking-wide text-foreground/50 px-4 py-3">{b.headers[0]}</th>
                  <th className="text-xs font-semibold uppercase tracking-wide text-foreground/50 px-4 py-3">{b.headers[1]}</th>
                </tr>
              </thead>
              <tbody>
                {b.rows.map((row, j) => (
                  <tr key={j} className="border-t border-border">
                    <td className="text-sm text-foreground/80 px-4 py-3">{row[0]}</td>
                    <td className="text-sm text-foreground/80 px-4 py-3 whitespace-nowrap">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
  )
}

export function TermsPage() {
  const { lang } = useLang()

  if (lang === "en") {
    return (
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-primary font-extrabold text-xs tracking-[0.14em] uppercase mb-4" style={DF}>
            LEGAL&nbsp;&nbsp;·&nbsp;&nbsp;MOVERI
          </p>
          <h1 className="text-4xl lg:text-5xl text-foreground mb-5" style={DF}>
            Terms & conditions
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
          Algemene voorwaarden
        </h1>
        <p className="text-foreground/65 leading-relaxed text-lg mb-8" style={DF}>
          Duidelijke afspraken voor sporters, ouders, coaches en organisaties over begeleiding en andere diensten van Moveri.
        </p>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 rounded-2xl border border-border bg-muted/60 p-6 mb-10">
          <div className="flex justify-between sm:block gap-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50" style={DF}>Versie</dt>
            <dd className="text-sm text-foreground sm:mt-1" style={DF}>1.0 - 9 september 2026</dd>
          </div>
          <div className="flex justify-between sm:block gap-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50" style={DF}>Organisatie</dt>
            <dd className="text-sm text-foreground sm:mt-1" style={DF}>Moveri / Moveri - Talent & Performance</dd>
          </div>
        </dl>

        <div className="rounded-2xl bg-accent p-6 lg:p-8 mb-14">
          <p className="text-xs font-bold uppercase tracking-wide text-primary mb-3" style={DF}>Kort samengevat</p>
          <p className="text-foreground/80 leading-relaxed" style={DF}>
            Moveri maakt vooraf duidelijke afspraken over de begeleiding, de kosten en eventuele terugkoppeling. Individuele begeleiding is vertrouwelijk. Ook bij een externe locatie, zoals Krachtcentrale Zwolle, blijft Moveri verantwoordelijk voor de inhoud van de begeleiding.
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
