import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const boats = [
  {
    slug: 'commodore555tender',
    name: 'Commodore 570 Tender',
    tagline: 'Luxe. Strakke lijnen. Standaard compleet.',
    priceFrom: '€ 32.500',
    specs: { length:'565 cm', width:'185 cm', draft:'30 cm', weight:'460 kg', year:'Nieuw', solar:'525 Wp', battery:'20 kWh', persons:'6–7', motor:'Elektra 6–15 kW', hullColor:'Blauw / keuze', innerColor:'Wit / keuze', upholstery:'Keuze' },
    lead: 'Een luxe uitgevoerde sloep met goede vaareigenschappen en een grote range. Door de strakke, scherpe lijnen beweegt de boot soepel en snel — tegelijk stabiel en koersvast.',
    paragraphs: [
      'Standaard is de sloep uitgerust met een keur aan extra\'s: een zonnedek, volledige luxe kussenset, HPL teak vloer, nette houten tafel, solide stuurwielconsole en alle benodigde nautische instrumenten. U stapt in en u vaart.',
      'Efficiënt ingedeeld met mooie rondzit en ruime opbergmogelijkheden. Via het stijlvolle zwemplateau en de handige opstap bent u in een handomdraai aan boord. Ideaal voor dagjes, weekendjes en alles daartussenin.',
      'De sloep is standaard voorzien van een set beloopbare en krachtige zonnepanelen. Die laden het 20 kWh accupakket continu op — tijdens het varen én als de boot stil ligt. U komt thuis, de boot staat op vol.',
    ],
    hero: 'https://static.wixstatic.com/media/af5e69_a0f7c15ae4ac4bd9895df2ee894c069c~mv2.jpg/v1/crop/x_123,y_0,w_3642,h_5184/fill/w_1600,h_1067,al_c,q_85,enc_avif,quality_auto/DSC04776_JPG.jpg',
    gallery: [
      'https://static.wixstatic.com/media/af5e69_32256398d1af4410b84a7f1b218fca55~mv2.jpg/v1/crop/x_123,y_0,w_3642,h_5184/fill/w_900,h_1200,al_c,q_85,enc_avif,quality_auto/DSC04790_JPG.jpg',
      'https://static.wixstatic.com/media/af5e69_6c4ac31095604dafaf1307b676ea8d16~mv2.jpg/v1/crop/x_454,y_0,w_1012,h_1440/fill/w_900,h_1200,al_c,q_85,enc_avif,quality_auto/Foto%20Sail2.jpg',
    ],
  },
  {
    slug: 'qwests580',
    name: 'QWEST S580',
    tagline: 'Aluminium vlaggenschip. Onderhoudsvrij élégant.',
    priceFrom: 'Op aanvraag',
    specs: { length:'580 cm', width:'210 cm', draft:'30 cm', weight:'680 kg', year:'Nieuw', solar:'580 Wp', battery:'20 / 40 kWh', persons:'8+', motor:'Elektra 6–15 kW', hullColor:'Alu / keuze', innerColor:'Alu / keuze', upholstery:'Keuze' },
    lead: 'De aluminium sloepen van Qwest kenmerken zich door een uitstekende prijs-kwaliteit verhouding. Bij uitstek geschikt om aan de kade te liggen én snel het ruime sop op te gaan.',
    paragraphs: [
      'De Qwest S580 is het vlaggenschip van dit merk, speciaal ontworpen om elektrisch mee te varen. Het vlakke onderwaterschip zorgt voor minder weerstand en meer vaarbereik — exact wat u wilt op een zonnesloep.',
      'Zo goed als onderhoudsvrij in alle opzichten. Een dekzeil of buiskap kan zelfs achterwege blijven dankzij de weersbestendige materialen en aluminium romp. De boot hoort buiten, niet in een loods.',
      'Standaard leverbaar met 20 of 40 kWh accupakket, beloopbare zonnepanelen, elektromotor tot 15 kW en een luxe set extra\'s. Kleurkeuzes op de binnen- en buitenschaal mogelijk.',
    ],
    hero: 'https://static.wixstatic.com/media/c18c50_d8a4dbf68b234b44a53800e9639ca2b8~mv2.png/v1/fill/w_1600,h_1067,al_c,q_85,enc_avif,quality_auto/QWEST%20S580.png',
    gallery: [],
  },
  {
    slug: 'coastliner620',
    name: 'Coastliner 620',
    tagline: 'Elektrisch varen — next level.',
    priceFrom: 'Op aanvraag',
    specs: { length:'622 cm', width:'235 cm', draft:'40 cm', weight:'600 kg', year:'Nieuw', solar:'600 Wp', battery:'20 / 40 / 60 kWh', persons:'8', motor:'Elektra 6–15 kW', hullColor:'Keuze', innerColor:'Keuze', upholstery:'Keuze' },
    lead: 'Met de Coastliner 620 heeft u een sloep die gezien mag worden. Zeer ruim, luxe afgewerkt, volledig elektrisch op zonne-energie — een statement op het water.',
    paragraphs: [
      'Oer-Hollands fabricaat: solide, kwalitatief sterk, gemaakt voor jarenlang vaarplezier. De perfecte lijnen en degelijke uitvoering vallen meteen op, zelfs aan dertig meter afstand.',
      'Standaard compleet: mooi zonnedek, luxe kussenset, houten tafel. Romp en dek op kleur naar keuze — wij bouwen uw Coastliner exact zoals u hem zich voorstelt.',
      'Het grootste accupakket van onze vloot (tot 60 kWh) gecombineerd met 600 Wp aan zonnepanelen. Resultaat: vaardagen die even lang duren als uw uithoudingsvermogen.',
    ],
    hero: 'https://static.wixstatic.com/media/c18c50_5da678cab63b4ead81eec893ea650f2a~mv2.png/v1/fill/w_1600,h_1067,al_c,q_85,enc_avif,quality_auto/Coastliner%20620.png',
    gallery: [],
  },
  {
    slug: 'corsiva570',
    name: 'Corsiva 570',
    tagline: 'Klassieke overnaadse lijnen, moderne techniek.',
    priceFrom: 'Op aanvraag',
    specs: { length:'560 cm', width:'210 cm', draft:'40 cm', weight:'440 kg', year:'Nieuw', solar:'460 Wp', battery:'20 kWh', persons:'6', motor:'Elektra 6–12 kW', hullColor:'Blauw / keuze', innerColor:'Wit / keuze', upholstery:'Keuze' },
    lead: 'Een modern vormgegeven overnaadse sloep — de klassieke uitstraling van de Corsiva 570 past bij vaarwater in historische grachten en brede polderplassen.',
    paragraphs: [
      'De riante doorlopende rondzit biedt ruimte aan 6 volwassenen. Diverse ruime bergruimtes zorgen dat spullen uit het zicht blijven — een zeldzaamheid in deze klasse.',
      'De verlaagde vloer geeft een diepe zit met goede rugsteun. Uiteraard heeft de boot een zelflozende kuip, dus regen of overslaand water is geen probleem. Praktisch, comfortabel, bedacht.',
      'Standaard met heerlijk zonnedek, handige tafel en een comfortabele kussenset. Een sloep die al jaren zijn sporen verdient — nu met elektrische aandrijving op zonne-energie.',
    ],
    hero: 'https://static.wixstatic.com/media/c18c50_ff39d2960a264302a0f9f5d891858b2a~mv2.png/v1/fill/w_1600,h_1067,al_c,q_85,enc_avif,quality_auto/Corsiva%20570.png',
    gallery: [],
  },
  {
    slug: 'rinovatio570',
    name: 'Rinovatio 570',
    tagline: 'Solide aluminium no-nonsense.',
    priceFrom: 'Op aanvraag',
    specs: { length:'570 cm', width:'230 cm', draft:'45 cm', weight:'450 kg', year:'Nieuw', solar:'500 Wp', battery:'20 kWh', persons:'7', motor:'Elektra 6–15 kW', hullColor:'Alu', innerColor:'Alu', upholstery:'Keuze' },
    lead: 'Ruime aluminium sloep met een no-nonsense design. Extra breed, open achterzijde — ideaal te gebruiken als familieboot of als zakelijke sloep.',
    paragraphs: [
      'Zoals al onze sloepen: voorzien van een krachtige elektrische motor, een enorm accupakket en een flink aantal solide beloopbare zonnepanelen. Alles berekend voor maximaal vaarplezier zonder laadzorgen.',
      'Aluminium is onze keuze voor klanten die hun boot buiten willen laten liggen, door alle seizoenen heen. Weinig onderhoud, grote duurzaamheid, scherpe prijs.',
    ],
    hero: 'https://static.wixstatic.com/media/c18c50_3bfb1c967ce649d68cbdc9ed66214bac~mv2.png/v1/fill/w_1600,h_1067,al_c,q_85,enc_avif,quality_auto/Rinovatio%20570.png',
    gallery: [],
  },
  {
    slug: 'aqua630tender',
    name: 'Aqua 630 Tender',
    tagline: 'Sportief design, diepe kuip.',
    priceFrom: 'Op aanvraag',
    specs: { length:'620 cm', width:'230 cm', draft:'30 cm', weight:'600 kg', year:'Nieuw', solar:'600 Wp', battery:'20 / 40 kWh', persons:'7', motor:'Elektrisch 6–15 kW', hullColor:'Blauw / keuze', innerColor:'Wit / keuze', upholstery:'Keuze' },
    lead: 'De Aqua 630 Tender is het aanzien meer dan waard. Modern, sportief design met een ruime en diepe kuip — met 8 personen prettig aan boord, met 4 koninklijk.',
    paragraphs: [
      'Naast standaard bijgeleverde zaken zoals tafel, bekerhouders en een groot stuurwiel, zijn diverse luxe opties mogelijk: teak vloerdelen, verschillende kleursopties, een premium geluidssysteem — we bouwen naar uw wens.',
      'Uitmuntende vaareigenschappen, uniek design, goede afwerking. De ideale tender om mee te varen met het gezin. Door het brede formaat ligt de boot bijzonder stabiel in het water.',
      'Vraag naar de mogelijkheden voor opties en persoonlijke wensen — er is meer mogelijk dan standaard vermeld.',
    ],
    hero: 'https://static.wixstatic.com/media/c18c50_d226383e92134e0b8e531ffd55cd585c~mv2.jpg/v1/fill/w_1600,h_1067,al_c,q_80,enc_avif,quality_auto/Aqua%20630%20Tender.jpg',
    gallery: [],
  },
  {
    slug: 'silver655tender',
    name: 'Silver 655 Tender',
    tagline: 'Blikvanger met sportief karakter.',
    priceFrom: 'Op aanvraag',
    specs: { length:'650 cm', width:'230 cm', draft:'30 cm', weight:'650 kg', year:'Nieuw', solar:'450 Wp', battery:'20 / 40 kWh', persons:'7', motor:'Elektra 6–15 kW', hullColor:'Keuze', innerColor:'Keuze', upholstery:'Keuze' },
    lead: 'Een ware blikvanger van het merk Silver Yacht. Hoogwaardige afwerking, sportief karakter, moderne romplijn — deze boot trekt bekijks waar hij ook ligt.',
    paragraphs: [
      'De SilverYacht 655 Tender heeft een grote kuip met uitgebreide zitmogelijkheden en een opvallend mooie achterzijde. Pure luxe in elk detail, van de afwerking tot de extra\'s.',
      'Leverbaar in verschillende kleuren, met legio maatwerk-opties voor kussenset en vloer. Ook uw kleur is leverbaar — vraag de showcase op.',
      'Vanwege het grote formaat en hogere gewicht leveren we de sloep standaard inclusief een 2 kW walstroomlader. Tijdens langere tochten blijft u zo altijd zorgeloos.',
    ],
    hero: 'https://static.wixstatic.com/media/c18c50_76c7fa102ac2444ebb8955021eaa5901~mv2.jpg/v1/fill/w_1600,h_1067,al_c,q_80,enc_avif,quality_auto/Silver%20655%20Tender.jpg',
    gallery: [],
  },
  {
    slug: 'aquat700tender',
    name: 'Aqua T700 Tender',
    tagline: 'Luxe 8-persoons tendersloep.',
    priceFrom: 'Op aanvraag',
    specs: { length:'690 cm', width:'250 cm', draft:'45 cm', weight:'900 kg', year:'Nieuw', solar:'450 Wp', battery:'20 / 40 / 60 kWh', persons:'8+', motor:'Elektra 6–15 kW', hullColor:'Keuze', innerColor:'Keuze', upholstery:'Keuze' },
    lead: 'De Aqua24 T700 is een luxe, zeer ruime 8-persoons tendersloep met uitstraling. Ruim, stijlvol, comfortabel en strak gelijnd. De tender is zeer stabiel en koersvast.',
    paragraphs: [
      'Met een handig en ruim zwemplateau, een geïntegreerde zwemtrap en aan beide zijdes van de bun ruime traptredes is aan boord komen kinderspel. Ook voor wie minder goed ter been is.',
      'Eenmaal aan boord is de T700 erg ruim en comfortabel ingedeeld. Met een luxe console en comfortabele zit voelt u zich als de koning(in) op het water.',
      'In meerdere kleuren leverbaar, zowel voor romp als voor kussenset en vloerdelen. Veel opbergruimte, uitgebreide zitmogelijkheden — de ultieme familie- en groepsboot.',
    ],
    hero: 'https://static.wixstatic.com/media/c18c50_6be9ce5c59604ea1856afbeab55f61f3~mv2.jpg/v1/fill/w_1600,h_1067,al_c,q_80,enc_avif,quality_auto/Aqua%20T700%20Tender.jpg',
    gallery: [],
  },
  {
    slug: 'dock650steel',
    name: 'DOCK 650 Steel',
    tagline: 'Slagschip op het water — 1000 Wp zonne-energie.',
    priceFrom: 'Op aanvraag',
    specs: { length:'650 cm', width:'216 cm', draft:'52 cm', weight:'680 kg', year:'Nieuw', solar:'1000 Wp', battery:'20 / 40 / 60 kWh', persons:'7', motor:'Elektra 6–15 kW', hullColor:'Alu', innerColor:'Alu', upholstery:'Keuze' },
    lead: 'De DOCK 650 Steel is werkelijk een kanon van een boot — een slagschip op het water. Stoere, strak gelijnde consoleboot, gemaakt van 4 mm aluminium.',
    paragraphs: [
      'Rond de hele boot zijn 4 cm dikke buizen geplaatst waaraan u uitstekende houvast hebt. Het aluminium casco is keurig in elkaar gezet. Helemaal hollandse makelij, solide zonder compromis.',
      'De boot vaart bij langzame snelheid net als een sloep en toont zich ondanks de geringe diepgang koersstabiel. Draaicirkel is lekker klein — ideaal voor grachten én open water.',
      'Uitgerust met een gigantisch pakket aan zonnepanelen: 1000 Wp — het topvermogen van onze vloot. Het accupakket wordt in no-time bijgeladen, zelfs na een hele dag varen. Vraag naar de mogelijkheden.',
    ],
    hero: 'https://static.wixstatic.com/media/c18c50_a4f61adb8cfa4a0690692084f966237f~mv2.jpg/v1/fill/w_1600,h_1067,al_c,q_80,enc_avif,quality_auto/DOCK%20650%20Steel.jpg',
    gallery: [],
  },
  {
    slug: 'solara450',
    name: 'Solara 450',
    tagline: 'De instapper die volledig onafhankelijk vaart.',
    priceFrom: '€ 9.900',
    specs: { length:'450 cm', width:'175 cm', draft:'25 cm', weight:'220 kg', year:'n.v.t.', solar:'380 Wp', battery:'2.5 / 5 / 7.5 kWh', persons:'6–7', motor:'Elektra 1.2 / 2.5 kW', hullColor:'Wit', innerColor:'Wit', upholstery:'Keuze' },
    lead: 'Onze Solara 450 is een elektrische sloep die volledig onafhankelijk van walstroom en acculaders wordt opgeladen. Een uniek concept: de sloep vaart, de sloep laadt zich op. Vanaf € 9.900.',
    paragraphs: [
      'De Solara 450 is onzinkbaar en vrijwel onderhoudsvrij. Na aanschaf geen uitgaven meer voor brandstof, stroom of hoge onderhoudskosten. Wel zo rustig.',
      'Lengte circa 4,5 meter, plaats voor zo\'n 6 à 7 personen. Vanaf € 9.900 — nog nooit was duurzaam varen zo toegankelijk.',
      'Vanzelfsprekend zijn de sloepen bij ons te zien. Een afspraak voor een proefvaart plant u zo, dan ervaart u zelf hoe het voelt om te varen zonder ooit nog te hoeven tanken of laden.',
    ],
    hero: 'https://static.wixstatic.com/media/c18c50_95a64f85b8aa47329f606352d2fd0e59~mv2.jpg/v1/fill/w_1600,h_1067,al_c,q_80,enc_avif,quality_auto/Solara%20450.jpg',
    gallery: [
      'https://static.wixstatic.com/media/af5e69_25dc40ffef564e7487ff8186567c4409~mv2.jpg/v1/fill/w_900,h_600,al_c,q_80,enc_avif,quality_auto/Solara%20450.jpg',
      'https://static.wixstatic.com/media/c18c50_3a216c06cbe54b76badcfa18eb1de4af~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_80,enc_avif,quality_auto/Solara%20450.jpg',
      'https://static.wixstatic.com/media/af5e69_d238c86499354d12b317939c3a4a3fef~mv2.jpg/v1/fill/w_900,h_600,al_c,q_80,enc_avif,quality_auto/Solara%20450.jpg',
      'https://static.wixstatic.com/media/c18c50_eaf9e43672ea472ba2a9f6e376cf9619~mv2.jpg/v1/fill/w_900,h_600,al_c,q_80,enc_avif,quality_auto/Solara%20450.jpg',
    ],
  },
];

function pageHtml(b, prev, next) {
  const specLabels = {
    length:'Lengte', width:'Breedte', draft:'Diepgang', weight:'Gewicht', year:'Bouwjaar',
    solar:'Zonnepaneel', battery:'Accu', persons:'Personen', motor:'Motor',
    hullColor:'Buitenschaal', innerColor:'Binnenschaal', upholstery:'Bekleding'
  };
  const specRows = Object.entries(b.specs).map(([k,v]) => `
    <div class="grid grid-cols-5 py-3 border-b border-ink/10">
      <dt class="col-span-2 text-ink/55 text-sm">${specLabels[k] || k}</dt>
      <dd class="col-span-3 font-medium text-sm tracking-tight">${v}</dd>
    </div>`).join('');

  const gallery = b.gallery.length ? `
  <section class="max-w-[1500px] mx-auto px-5 md:px-10 py-16">
    <div class="eyebrow mb-6"><span class="sec-num"></span>Impressie</div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      ${b.gallery.map(g => `<div class="aspect-[3/4] overflow-hidden bg-paper-warm"><img src="${g}" alt="${b.name}" class="w-full h-full object-cover" loading="lazy"></div>`).join('')}
    </div>
  </section>` : '';

  return `<!doctype html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <link rel="icon" type="image/png" href="https://static.wixstatic.com/media/af5e69_54979cdb1ba34c1b9b07a483176a68f1~mv2.png/v1/fill/w_64,h_64,al_c,q_85,enc_avif,quality_auto/battery%20cell%20logo_edited.png">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${b.name} — Elektrisch Varen Zonder Laden</title>
  <meta name="description" content="${`${b.name}: ${b.tagline} ${b.specs.length}, ${b.specs.persons} personen, ${b.specs.solar} zonnepanelen, ${b.specs.battery} accu.`.replace(/"/g, '&quot;')}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@300;400;500;600&family=Bricolage+Grotesque:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
</head>
<body data-page="boten" class="bg-paper text-ink">

<div id="announcement"></div>
<div id="site-header"></div>

<main>
  <!-- Breadcrumbs -->
  <div class="max-w-[1500px] mx-auto px-5 md:px-10 pt-6 text-sm text-ink/55">
    <a href="/" class="hover:text-ink">Home</a> <span class="mx-2">/</span>
    <a href="/onze-boten/" class="hover:text-ink">Onze sloepen</a> <span class="mx-2">/</span>
    <span class="text-ink">${b.name}</span>
  </div>

  <!-- Hero -->
  <section class="max-w-[1500px] mx-auto px-5 md:px-10 pt-8 pb-10">
    <div class="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
      <div class="md:col-span-6 order-2 md:order-1">
        <div class="eyebrow mb-6">● Sloep N˚${boats.findIndex(x => x.slug === b.slug) + 1}</div>
        <h1 class="display text-huge">${b.name}</h1>
        <p class="display-italic text-2xl md:text-3xl text-sun mt-3">${b.tagline}</p>
        <p class="mt-8 text-lg text-ink/75 leading-relaxed max-w-xl">${b.lead}</p>
        <div class="mt-10 flex flex-wrap items-center gap-6">
          <div>
            <div class="text-[10px] uppercase tracking-widest text-ink/50">vanaf</div>
            <div class="kpi-num text-4xl md:text-5xl">${b.priceFrom}</div>
          </div>
          <div class="h-12 w-px bg-ink/20"></div>
          <a href="/contact/#proefvaart" class="btn-primary">Plan proefvaart</a>
          <a href="/contact/" class="btn-ghost">Vraag offerte →</a>
        </div>
      </div>
      <div class="md:col-span-6 order-1 md:order-2">
        <div class="aspect-[4/3] overflow-hidden bg-paper-warm">
          <img src="${b.hero}" alt="${b.name}" class="w-full h-full object-cover" loading="eager">
        </div>
      </div>
    </div>
  </section>

  <!-- SPECS -->
  <section class="max-w-[1500px] mx-auto px-5 md:px-10 py-16 border-t hairline">
    <div class="grid md:grid-cols-12 gap-10">
      <div class="md:col-span-4">
        <div class="eyebrow mb-4"><span class="sec-num"></span>Specificaties</div>
        <h2 class="display text-big">In één <span class="display-italic text-sun">oogopslag</span>.</h2>
        <p class="mt-5 text-ink/70 text-sm">Alles wat standaard meekomt. Extra opties in overleg — wij bouwen op uw wensen.</p>
      </div>
      <div class="md:col-span-8">
        <dl class="grid md:grid-cols-2 md:gap-x-16">
          ${specRows}
        </dl>
      </div>
    </div>
  </section>

  <!-- Beschrijving -->
  <section class="max-w-[1500px] mx-auto px-5 md:px-10 py-16 border-t hairline">
    <div class="grid md:grid-cols-12 gap-10">
      <div class="md:col-span-4">
        <div class="eyebrow mb-4"><span class="sec-num"></span>Beschrijving</div>
        <h2 class="display text-big">Wat maakt de<br><span class="display-italic text-sun">${b.name}</span><br>bijzonder.</h2>
      </div>
      <div class="md:col-span-8 space-y-6 text-lg leading-relaxed text-ink/80 max-w-2xl">
        ${b.paragraphs.map(p => `<p>${p}</p>`).join('')}
      </div>
    </div>
  </section>

  ${gallery}

  <!-- CTA -->
  <section class="max-w-[1500px] mx-auto px-5 md:px-10 pb-10">
    <div class="bg-ink text-paper p-10 md:p-16 grid md:grid-cols-12 gap-10 items-center">
      <div class="md:col-span-8">
        <div class="eyebrow text-paper/50 mb-3"><span class="sec-num"></span>Kom langs of vraag offerte</div>
        <h2 class="display text-big">Ervaar zelf hoe het voelt<br>om te <span class="display-italic text-sun">varen op de zon</span>.</h2>
        <p class="mt-5 text-paper/70 max-w-xl">Onze sloepen zijn te bezichtigen in Hoogkarspel — op een half uur van Amsterdam. Een proefvaart is vrijblijvend.</p>
      </div>
      <div class="md:col-span-4 flex flex-col gap-3">
        <a href="/contact/#proefvaart" class="btn-sun !justify-start">Plan proefvaart</a>
        <a href="tel:+31622199699" class="btn-ghost border-paper/30 text-paper hover:bg-paper hover:text-ink !justify-start">Bel +31 622 199 699</a>
      </div>
    </div>
  </section>

  <!-- Prev/Next -->
  <section class="max-w-[1500px] mx-auto px-5 md:px-10 py-16 border-t hairline grid grid-cols-2 gap-4">
    <a href="/onze-boten/${prev.slug}/" class="group">
      <div class="text-xs uppercase tracking-widest text-ink/50 mb-2">← Vorige</div>
      <div class="display text-2xl md:text-3xl group-hover:text-sun transition-colors">${prev.name}</div>
    </a>
    <a href="/onze-boten/${next.slug}/" class="group text-right">
      <div class="text-xs uppercase tracking-widest text-ink/50 mb-2">Volgende →</div>
      <div class="display text-2xl md:text-3xl group-hover:text-sun transition-colors">${next.name}</div>
    </a>
  </section>

  <section class="max-w-[1500px] mx-auto px-5 md:px-10 pb-10 text-center">
    <a href="/onze-boten/" class="text-sm link-under">Terug naar overzicht</a>
  </section>
</main>

<div id="site-footer"></div>
<script type="module" src="/src/main.js"></script>
</body>
</html>`;
}

for (let i = 0; i < boats.length; i++) {
  const b = boats[i];
  const prev = boats[(i - 1 + boats.length) % boats.length];
  const next = boats[(i + 1) % boats.length];
  const dir = resolve(root, 'onze-boten', b.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, 'index.html'), pageHtml(b, prev, next));
  console.log('wrote', b.slug);
}
