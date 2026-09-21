<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">

<meta
  name="viewport"
  content="width=device-width, initial-scale=1, viewport-fit=cover"
>

<title>Seito-ryū Aiki-Jūjutsu</title>

<meta
  name="description"
  content="Seito-ryū Aiki-Jūjutsu"
>

<!-- =======================================================
     DISPLAY BRUSH FONT
     ======================================================= -->

<link
  rel="preconnect"
  href="https://fonts.googleapis.com"
>

<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossorigin
>

<link
  href="https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap"
  rel="stylesheet"
>

<style>

:root{

  /* =======================================================
     COLOR
     ======================================================= */

  --paper:#e8d7c7;
  --folio:#f2e7db;

  --ink:#171411;
  --muted:#6b645d;
  --shu:#b02a20;

  /* =======================================================
     FONT FAMILIES
     ======================================================= */

  --brush:
    "Yuji Syuku",
    "Hiragino Mincho ProN",
    "Yu Mincho",
    "YuMincho",
    "Noto Serif JP",
    serif;

  --jp-body:
    "Hiragino Mincho ProN",
    "Yu Mincho",
    "YuMincho",
    "Noto Serif JP",
    serif;

  /* =======================================================
     MOBILE HEADER
     ======================================================= */

  --header-h:58px;

  /* =======================================================
     READER
     ======================================================= */

  --reader-max:940px;

  --jp-size:16.5px;
  --jp-leading:1.68;

  --en-size:18.2px;
  --en-leading:1.44;

  --pair-gap:14px;

  --folio-pad-x:12px;
  --folio-pad-y:18px;

  --paragraph-gap:30px;

  --section-pad-x:18px;

  /* =======================================================
     HERO — MOBILE
     ======================================================= */

  --hero-pad-top:34px;
  --hero-pad-bottom:38px;

  --hero-poster-max:640px;

  --hero-mon-w:
    min(84vw,360px);

  --hero-wordmark-lift:-78px;

  --hero-title-size:
    clamp(36.8px,8.96vw,60.8px);

  --hero-title-line:1.05;

  --hero-title-track:.03em;

  --hero-rule-w:88px;
  --hero-rule-h:2px;

  --hero-rule-gap-top:10px;
  --hero-rule-gap-bottom:12px;

  --hero-romaji-size:
    clamp(15.2px,4.08vw,24.8px);

  --hero-romaji-line:1.15;

  --hero-romaji-track:.12em;

  --hero-mark-gap-top:24px;
  --hero-mark-gap-bottom:32px;

  --hero-mark-size:32px;

  --hero-soryuki-jp:
    clamp(14.4px,4.64vw,27.2px);

  --hero-soryuki-sub:
    clamp(12.8px,3.92vw,22.4px);

  --hero-place-size:
    clamp(11.2px,3.52vw,17.6px);
}

/* =========================================================
   RESET
   ========================================================= */

*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{

  margin:0;

  color:var(--ink);

  background:var(--paper);

  font-family:
    "Bodoni 72",
    "Bodoni 72 Smallcaps",
    "Baskerville",
    "Iowan Old Style",
    "Times New Roman",
    serif;

  line-height:1.48;
}

img{
  display:block;
  max-width:100%;
}

main{
  overflow:hidden;
}

/* =========================================================
   HEADER — MOBILE
   ========================================================= */

.site-header{

  position:sticky;
  top:0;

  z-index:100;

  height:var(--header-h);
  min-height:var(--header-h);

  display:flex;
  align-items:center;
  justify-content:space-between;

  gap:10px;

  padding:
    0
    14px
    0
    max(12px,env(safe-area-inset-left));

  background:var(--paper);

  border-bottom:
    1px solid rgba(0,0,0,.08);

  box-shadow:
    0 4px 14px rgba(0,0,0,.045);

  overflow:visible;

  isolation:isolate;
}

/* =========================================================
   FLOATING CHERRY BLOSSOM
   ========================================================= */

.header-blossom{

  position:absolute;

  z-index:0;

  left:-18px;
  bottom:-25px;

  width:165px;
  height:auto;

  max-width:none;

  opacity:1;

  pointer-events:none;

  user-select:none;
}

/* =========================================================
   HEADER IDENTITY
   ========================================================= */

.brand{

  position:relative;

  z-index:2;

  display:flex;
  align-items:center;

  gap:10px;

  min-width:0;

  margin-left:56px;

  color:inherit;

  text-decoration:none;
}

.brand .mon{

  width:64px;
  height:auto;

  flex:0 0 auto;

  opacity:1;

  transform:translateX(7px);
}

.brand-stack{

  min-width:0;

  line-height:1;

  opacity:1;
}

.brand-stack .jp{

  display:block;

  margin-bottom:5px;

  font-family:var(--brush);

  font-weight:400;

  font-size:20px;

  line-height:1.05;

  letter-spacing:.045em;

  white-space:nowrap;
}

.brand-stack .romaji{

  display:block;

  font-size:11.5px;

  line-height:1;

  letter-spacing:.065em;

  white-space:nowrap;
}

/* =========================================================
   MENU
   ========================================================= */

.menu{

  position:relative;

  z-index:3;

  width:40px;
  height:40px;

  flex:0 0 auto;

  border:
    2px solid var(--shu);

  border-radius:2px;

  background:var(--paper);

  display:flex;
  flex-direction:column;

  align-items:center;
  justify-content:center;

  gap:4px;

  cursor:pointer;
}

.menu span{

  width:20px;
  height:3px;

  display:block;

  background:var(--shu);

  border-radius:1px;
}

/* =========================================================
   NARROW PHONE
   ========================================================= */

@media(max-width:390px){

  .brand{

    margin-left:48px;

    gap:8px;
  }

  .brand .mon{

    width:58px;

    transform:translateX(6px);
  }

  .brand-stack .jp{

    font-size:18px;
  }

  .brand-stack .romaji{

    font-size:10.2px;

    letter-spacing:.045em;
  }

}

/* =========================================================
   HERO
   ========================================================= */

.hero{

  min-height:
    calc(100svh - var(--header-h));

  display:grid;

  align-content:center;
  justify-items:center;

  padding:
    var(--hero-pad-top)
    18px
    var(--hero-pad-bottom);

  text-align:center;
}

.hero-poster{

  width:
    min(100%,var(--hero-poster-max));

  display:grid;

  justify-items:center;

  align-content:start;
}

/* =========================================================
   LARGE HERO MON
   ========================================================= */

.hero-mon{

  width:
    var(--hero-mon-w);

  margin:0;
}

/* =========================================================
   HERO WORDMARK
   ========================================================= */

.hero-wordmark{

  display:grid;

  justify-items:center;

  width:max-content;
  max-width:100%;

  margin-top:
    var(--hero-wordmark-lift);
}

.hero-title-block{

  width:max-content;

  max-width:100%;

  display:grid;

  justify-items:center;
}

/* =========================================================
   HERO BRUSH TITLE
   ========================================================= */

.hero h1{

  --match-extra:0px;

  margin:0;

  width:max-content;

  max-width:100%;

  font-family:var(--brush);

  font-weight:400;

  font-size:
    var(--hero-title-size);

  line-height:
    var(--hero-title-line);

  letter-spacing:
    calc(
      var(--hero-title-track)
      +
      var(--match-extra)
    );

  white-space:nowrap;
}

.hero-rule{

  width:
    var(--hero-rule-w);

  height:
    var(--hero-rule-h);

  margin-top:
    var(--hero-rule-gap-top);

  margin-bottom:
    var(--hero-rule-gap-bottom);

  background:
    rgba(176,42,32,.72);
}

.hero .romaji{

  --match-extra:0px;

  width:max-content;

  max-width:100%;

  font-size:
    var(--hero-romaji-size);

  line-height:
    var(--hero-romaji-line);

  letter-spacing:
    calc(
      var(--hero-romaji-track)
      +
      var(--match-extra)
    );

  white-space:nowrap;
}

/* =========================================================
   WORDMARK MON
   ========================================================= */

.hero-mark{

  margin:
    var(--hero-mark-gap-top)
    auto
    var(--hero-mark-gap-bottom);

  display:flex;

  align-items:center;
  justify-content:center;
}

.hero-mark img{

  width:
    var(--hero-mark-size);

  height:auto;
}

/* =========================================================
   SORYU-KI
   ========================================================= */

.soryuki{

  line-height:1.24;

  margin-bottom:20px;
}

.soryuki span{
  display:block;
}

.soryuki .jp{

  font-family:var(--brush);

  font-weight:400;

  font-size:
    var(--hero-soryuki-jp);

  letter-spacing:.04em;
}

.soryuki .rom,
.soryuki .en{

  font-size:
    var(--hero-soryuki-sub);
}

.soryuki .place{

  margin-top:10px;

  font-size:
    var(--hero-place-size);
}

/* =========================================================
   SECTIONS
   ========================================================= */

.section{

  width:
    min(100%,var(--reader-max));

  margin:
    0 auto;

  padding:
    48px
    var(--section-pad-x)
    72px;
}

.section-title{

  text-align:center;

  margin-bottom:32px;
}

/* =========================================================
   SECTION BRUSH TITLES
   ========================================================= */

.section-title .kicker{

  font-family:var(--brush);

  font-size:
    clamp(21px,5.4vw,32px);

  font-weight:400;

  line-height:1.15;

  letter-spacing:.055em;
}

.section-title .sub{

  margin-top:8px;

  font-size:
    clamp(13px,3.8vw,17px);

  font-weight:600;

  letter-spacing:.08em;
}

/* =========================================================
   SECTION MON
   ========================================================= */

.section-mark{

  margin:
    0
    auto
    28px;

  display:flex;

  align-items:center;
  justify-content:center;
}

.section-mark img{

  width:24px;

  height:auto;
}

/* =========================================================
   CONTINUOUS BILINGUAL FIELD
   ========================================================= */

.section-body{

  position:relative;

  width:100%;

  display:grid;

  grid-template-columns:
    minmax(0,1fr)
    minmax(0,1fr);

  column-gap:
    var(--pair-gap);

  row-gap:
    var(--paragraph-gap);

  align-items:start;

  padding-top:
    var(--folio-pad-y);

  padding-bottom:
    var(--folio-pad-y);
}

/* =========================================================
   CONTINUOUS JAPANESE FOLIO
   ========================================================= */

.section-body::before{

  content:"";

  position:absolute;

  z-index:0;

  top:0;
  bottom:0;

  right:
    calc(
      50% +
      (var(--pair-gap) / 2)
    );

  width:
    min(
      17rem,
      calc(
        (100% - var(--pair-gap)) / 2
      )
    );

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.34),
      transparent 36%
    ),
    repeating-linear-gradient(
      0deg,
      rgba(85,65,45,.012) 0 1px,
      transparent 1px 4px
    ),
    var(--folio);

  border:
    1px solid rgba(72,52,37,.13);

  border-radius:2px;

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.50),
    0 1px 2px rgba(74,45,25,.055),
    0 8px 20px rgba(74,45,25,.085);

  pointer-events:none;
}

/* =========================================================
   JAPANESE BODY TEXT
   ========================================================= */

.jp-paragraph{

  position:relative;

  z-index:1;

  grid-column:1;

  width:
    min(17rem,100%);

  justify-self:end;

  padding-left:
    var(--folio-pad-x);

  padding-right:
    var(--folio-pad-x);

  writing-mode:vertical-rl;

  text-orientation:mixed;

  overflow:hidden;

  font-family:var(--jp-body);

  font-size:
    var(--jp-size);

  line-height:
    var(--jp-leading);

  letter-spacing:.14em;
}

/* =========================================================
   ENGLISH TEXT
   ========================================================= */

.en-group{

  position:relative;

  z-index:1;

  grid-column:2;

  min-width:0;

  font-size:
    var(--en-size);

  font-weight:500;

  line-height:
    var(--en-leading);

  letter-spacing:.015em;

  font-kerning:normal;

  overflow-wrap:anywhere;
}

.en-group p{

  margin:
    0
    0
    1.38em;

  text-align:left;

  hyphens:auto;

  -webkit-hyphens:auto;

  word-spacing:.08em;
}

.en-group p:last-child{
  margin-bottom:0;
}

.en-group .sequence{

  font-size:.92em;

  line-height:1.75;

  letter-spacing:.05em;

  text-align:left;
}

.en-group .closing{

  font-size:1.34em;

  line-height:1.25;

  text-align:left;
}

/* =========================================================
   TABLET / DESKTOP
   ========================================================= */

@media(min-width:760px){

  :root{

    --header-h:82px;

    --reader-max:68rem;

    --jp-size:18px;
    --jp-leading:1.72;

    --en-size:20px;
    --en-leading:1.62;

    --en-measure:25ch;

    --pair-gap:30px;

    --folio-pad-x:18px;
    --folio-pad-y:20px;

    --paragraph-gap:36px;

    --section-pad-x:38px;

    /* HERO */

    --hero-pad-top:48px;
    --hero-pad-bottom:44px;

    --hero-poster-max:1000px;

    --hero-mon-w:
      min(45vw,525.6px);

    --hero-wordmark-lift:-108px;

    --hero-title-size:
      clamp(54.4px,4.8vw,89.6px);

    --hero-title-line:1.03;

    --hero-title-track:.025em;

    --hero-rule-w:130px;
    --hero-rule-h:2px;

    --hero-rule-gap-top:12px;
    --hero-rule-gap-bottom:14px;

    --hero-romaji-size:
      clamp(21.6px,1.8vw,32px);

    --hero-romaji-line:1.12;

    --hero-romaji-track:.14em;

    --hero-mark-gap-top:28px;
    --hero-mark-gap-bottom:36px;

    --hero-mark-size:36px;

    --hero-soryuki-jp:
      clamp(19.2px,2.24vw,33.6px);

    --hero-soryuki-sub:
      clamp(14.4px,1.68vw,24.8px);

    --hero-place-size:
      clamp(12.8px,1.28vw,19.2px);
  }

  /* =======================================================
     DESKTOP BLOSSOM
     ======================================================= */

  .header-blossom{

    left:-16px;

    bottom:-62px;

    width:360px;

    height:auto;

    opacity:1;
  }

  /* =======================================================
     DESKTOP HEADER BRAND
     ======================================================= */

  .brand{

    margin-left:205px;

    gap:14px;
  }

  .brand .mon{

    width:88px;

    height:auto;

    opacity:1;

    transform:translateX(0);
  }

  .brand-stack{
    opacity:1;
  }

  .brand-stack .jp{

    font-family:var(--brush);

    font-weight:400;

    font-size:
      clamp(25px,2.35vw,38px);

    line-height:1.02;

    margin-bottom:6px;

    letter-spacing:.045em;

    white-space:nowrap;
  }

  .brand-stack .romaji{

    font-size:
      clamp(14px,1.05vw,18px);

    line-height:1;

    letter-spacing:.085em;

    white-space:nowrap;
  }

  .menu{

    width:44px;
    height:44px;
  }

  .menu span{
    width:22px;
  }

  .section-mark{
    margin-bottom:32px;
  }

  .section-mark img{
    width:30px;
  }

  .section-title .kicker{

    font-size:
      clamp(25px,2.7vw,38px);

    letter-spacing:.06em;
  }

  .jp-paragraph{
    width:17rem;
  }

  .en-group{

    width:
      min(100%,var(--en-measure));

    justify-self:start;

    font-size:
      var(--en-size);

    line-height:
      var(--en-leading);
  }

}

/* =========================================================
   FOOTER
   ========================================================= */

.colophon{

  text-align:center;

  padding:
    28px
    16px
    78px;

  color:var(--muted);
}

.colophon .mon{

  width:82px;

  margin:
    0
    auto
    10px;
}

.colophon .jp{

  color:var(--ink);

  font-family:var(--brush);

  font-size:25px;

  font-weight:400;

  letter-spacing:.045em;
}

.colophon .romaji{

  color:var(--ink);

  margin-top:6px;

  font-size:12px;

  letter-spacing:.11em;
}

.colophon .meta{

  margin-top:12px;

  font-size:13px;
}

/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media(prefers-reduced-motion:reduce){

  html{
    scroll-behavior:auto;
  }

}

</style>
</head>

<body>

<header class="site-header">

  <img
    class="header-blossom"
    src="/assets/cherry_blossom_header.png"
    alt=""
    aria-hidden="true"
  >

  <a
    class="brand"
    href="#top"
  >

    <img
      class="mon"
      src="/assets/seito-mon.png"
      alt="Seito-ryū mon"
    >

    <div class="brand-stack">

      <span class="jp">
        聖都流合気柔術
      </span>

      <span class="romaji">
        SEITO-RYŪ AIKI-JŪJUTSU
      </span>

    </div>

  </a>

  <button
    class="menu"
    aria-label="Go to About"
    onclick="
      document
        .getElementById('about')
        .scrollIntoView({
          behavior:'smooth'
        })
    "
  >

    <span></span>
    <span></span>
    <span></span>

  </button>

</header>

<main id="top">

<section class="hero">

  <div class="hero-poster">

    <img
      class="hero-mon"
      src="/assets/seito-mon.png"
      alt="Seito-ryū mon"
    >

    <div class="hero-wordmark">

      <div
        class="hero-title-block"
        data-title-equalizer
      >

        <h1 data-title-jp>
          聖都流合気柔術
        </h1>

        <div
          class="hero-rule"
          aria-hidden="true"
        ></div>

        <div
          class="romaji"
          data-title-romaji
        >
          SEITO-RYŪ AIKI-JŪJUTSU
        </div>

      </div>

      <div class="hero-mark">

        <img
          src="/assets/seito-mon.png"
          alt=""
        >

      </div>

    </div>

    <div class="soryuki">

      <span class="jp">
        創流期
      </span>

      <span class="rom">
        Sōryū-ki
      </span>

      <span class="en">
        Formative Period
      </span>

      <span class="place">
        Charleston, South Carolina · 2026
      </span>

    </div>

  </div>

</section>

<div id="sections"></div>

<footer class="colophon">

  <img
    class="mon"
    src="/assets/seito-mon.png"
    alt=""
  >

  <div class="jp">
    聖都流合気柔術
  </div>

  <div class="romaji">
    SEITO-RYŪ AIKI-JŪJUTSU
  </div>

  <div class="meta">
    創流期 · Sōryū-ki · Formative Period
  </div>

  <div class="meta">
    Charleston, South Carolina · 2026
  </div>

</footer>

</main>

<script>

/* =========================================================
   SEITO-RYŪ NON-HERO CONTENT
   CURRENT BODY: SEITO-RYŪ ENGI

   EDIT NORMAL ENGLISH / JAPANESE PAGE TEXT HERE.

   DO NOT PUT HERO CONTENT HERE.
   ========================================================= */

const sections = [

  /* =======================================================
     SEITO-RYŪ ENGI
     ======================================================= */

  {

    jpTitle:"聖都流縁起",

    enTitle:"Seito-ryū Engi — The Founding Lore of Seito-ryū",

    rows:[

      {

        jp:
          `聖都流は、二〇二六年、サウスカロライナ州チャールストンにおいて設立された、形成途上にある武道校である。その創流の探究領域は武産合気であり、柔術と合気道という継承された技術体系を通してこれを探究する。本校はホーリー・シティ・ソサエティの後援のもとに置かれ、「聖都」という名はそこに由来する。`,

        en:[
          {
            text:
              `Seito-ryū is a martial school in formation, established in Charleston, South Carolina, in 2026. Its founding field of inquiry is Takemusu Aiki, investigated through the inherited technical bodies of Jujutsu and Aikidō. It is established under the patronage of Holy City Society, from which the name Seito, 聖都, “Holy City,” is taken.`,

            class:""
          }
        ]

      },

      {

        jp:
          `今は、この流派の創流の日々である。聖都流はその始まりから、受け継ぐものと新たに形成するものだけでなく、自らの目的を理解するための思想、問い、伝承をも記録している。`,

        en:[
          {
            text:
              `These are the school’s founding days. From its beginning, Seito-ryū is recording not only what it receives and develops, but the ideas, questions, and traditions through which the school understands its purpose.`,

            class:""
          }
        ]

      },

      {

        jp:
          `聖都流縁起は、その記録の一部である。これは武の伝承であり、方便として受け取られる。すなわち、本校が合気と呼ぶ原理の起源と展開、そして最終的に聖都流そのものを生み出す問いを観照するための、伝統的な形式による物語である。`,

        en:[
          {
            text:
              `The Seito-ryū Engi is part of that record. It is received as martial lore and skillful means: a traditional-style account through which the school contemplates the origins and development of the principle it calls aiki, and the question that ultimately gives rise to Seito-ryū itself.`,

            class:""
          }
        ]

      },

      {

        jp:
          `あらゆる武の伝統は、技だけを継承するのではない。その技がどこから来たのかという共有された伝承をも継承する。`,

        en:[
          {
            text:
              `Every martial tradition inherits more than techniques. It inherits a shared tradition of where those techniques came from.`,

            class:""
          }
        ]

      },

      {

        jp:
          `われわれは、大東流の伝統的な歴史を、自らの継承の一部として受け取る。その伝承はおよそ九百年前の新羅三郎源義光にまで遡り、義光を大東流柔術の遠祖として、またその武の伝統が甲斐源氏と武田家へ伝わる祖として記憶する。`,

        en:[
          {
            text:
              `We receive the traditional history of Daitō-ryū as part of our own inheritance. It looks back nearly nine centuries to Shinra Saburō Minamoto no Yoshimitsu, remembered as the distant founder of Daitō-ryū Jūjutsu and the ancestor through whom its martial tradition passed into the Kai-Genji and the house of Takeda.`,

            class:""
          }
        ]

      },

      {

        jp:
          `われわれは義光を、その継承された武の体系の祖として受け取る。柔術が先にあった。歴史的により繊細な見方を必要とするのは、合気がいつその継承に入ったのかという点である。聖都流の読みでは、その軌跡は三世代後、源平合戦の戦場に現れ、義光の曾孫であり武田の始祖となる武田信義へと伝えられる。`,

        en:[
          {
            text:
              `We accept Yoshimitsu as the founder of that inherited martial body. The jūjutsu came first. Where we have a historically nuanced view is the point at which aiki entered that inheritance: in the Seito-ryū reading, its trail arrives on the field three generations later, during the Genpei War, and is transmitted to Yoshimitsu’s great-grandson Takeda Nobuyoshi, the first of the Takeda.`,

            class:""
          }
        ]

      }

    ]

  },

  /* =======================================================
     THE MOUNTAIN AND THE LAW
     ======================================================= */

  {

    jpTitle:"山と法",

    enTitle:"The Mountain and the Law",

    rows:[

      {

        jp:
          `十二世紀、牛若丸と呼ばれた一人の少年が、京都の北にある鞍馬山へ赴いた。`,

        en:[
          {
            text:
              `In the twelfth century, a youth named Ushiwakamaru traveled to Mount Kurama north of Kyoto.`,

            class:""
          }
        ]

      },

      {

        jp:
          `日本の伝承では、鞍馬は彼が並外れた武の継承を受けた場所とされる。歴史は彼を源義経と呼ぶ。`,

        en:[
          {
            text:
              `Japanese tradition says that Kurama was the place where he received an extraordinary martial inheritance. History calls him Minamoto Yoshitsune.`,

            class:""
          }
        ]

      },

      {

        jp:
          `その師は、山の超自然的な主、鞍馬の大天狗、謎めいた鬼一法眼として記憶されている。`,

        en:[
          {
            text:
              `His teacher is remembered as the supernatural master of the mountain, the Great Tengu of Kurama, the mysterious Kiichi Hōgen.`,

            class:""
          }
        ]

      },

      {

        jp:
          `鬼一法眼 — Kiichi Hōgen
鬼 — 霊、超自然的存在
一 — 一、最初、原初
法 — 法、聖なる秩序
眼 — 眼、見ること`,

        en:[
          {
            text:
              `鬼一法眼 — Kiichi Hōgen
鬼 — spirit, supernatural being
一 — one, first, primordial
法 — law, sacred order
眼 — eye, vision`,

            class:"sequence"
          }
        ]

      },

      {

        jp:
          `その名は象徴的な読みを誘う。原初の霊、普遍の法を見る眼。`,

        en:[
          {
            text:
              `The name invites a symbolic reading: Primordial Spirit, Vision of the Universal Law.`,

            class:""
          }
        ]

      },

      {

        jp:
          `鞍馬の法は、今日われわれが合気と呼ぶものの初期的な表現であったと考える。言葉そのものではない。有限の技術体系でもない。法の、生きた働きである。`,

        en:[
          {
            text:
              `It is believed that the Law of Kurama was an early expression of what we now call aiki. Not the word. Not a finite technical system. The living operation of the Law.`,

            class:"closing"
          }
        ]

      }

    ]

  },

  /* =======================================================
     TORA NO MAKI
     ======================================================= */

  {

    jpTitle:"虎の巻",

    enTitle:"Tora no Maki",

    rows:[

      {

        jp:
          `義経が受け取った教えは、虎の巻に収められていたと伝えられる。`,

        en:[
          {
            text:
              `It is said that the teaching Yoshitsune received was contained in the Tora no Maki — 虎の巻.`,

            class:""
          }
        ]

      },

      {

        jp:
          `秘伝の虎の巻は、単なる技の目録ではなかった。それは、争いの条件を明晰に見抜き、その条件そのものから適切な行為が生じるほどに状況を知覚する方法であった。`,

        en:[
          {
            text:
              `The secret Scroll of Tora was more than a catalog of techniques. It was a way of perceiving the conditions of conflict so clearly that appropriate action could arise from them.`,

            class:""
          }
        ]

      },

      {

        jp:
          `われわれ自身の継承の言葉で言えば、それは合気である。`,

        en:[
          {
            text:
              `In the language of our own inheritance: AiKi.`,

            class:"sequence"
          }
        ]

      },

      {

        jp:
          `法とは、現実そのものに内在する秩序である。合気とは、状況全体と調和して働き、力に力で対抗するのではなく、その関係そのものから適切な行為を生じさせる、生きた働きである。`,

        en:[
          {
            text:
              `The Law is the order inherent in reality. Aiki is the living operation by which one enters into harmony with the whole circumstance, does not oppose force with force, and allows the appropriate action to arise from the relationship itself.`,

            class:""
          }
        ]

      },

      {

        jp:
          `それは、自発的な技と戦略を生み出す法の働きである。`,

        en:[
          {
            text:
              `It is the working of the Law from which spontaneous technique and strategy arise.`,

            class:""
          }
        ]

      }

    ]

  },

  /* =======================================================
     YOSHITSUNE LEARNS TO SEE
     ======================================================= */

  {

    jpTitle:"義経、見ることを学ぶ",

    enTitle:"Yoshitsune Learns to See",

    rows:[

      {

        jp:
          `義経が伝説となるのは、他の者には見えない可能性を見るからである。地形は機会となる。予想は弱点となる。不可能と思われた道こそが、進むべき道となる。`,

        en:[
          {
            text:
              `Yoshitsune becomes legendary because he sees possibilities others do not. Terrain becomes opportunity. Expectation becomes vulnerability. The route believed impossible becomes precisely the route worth taking.`,

            class:""
          }
        ]

      },

      {

        jp:
          `関係そのものを変えることができるなら、力に常に正面から対抗する必要はない。聖都流の読みでは、これは単なる戦略ではなかった。鞍馬で出会った法の、生成的な表現であった。`,

        en:[
          {
            text:
              `Force need not always be opposed if the relationship itself can be changed. In the Seito reading, this was not merely strategy. It was the generative expression of the Law he encountered at Kurama.`,

            class:""
          }
        ]

      },

      {

        jp:
          `義経は、あらかじめ定められた答えの中から一つを選んだのではない。地形、機、予想、力、動き、心理、関係、機会という、場全体を見た。`,

        en:[
          {
            text:
              `Yoshitsune did not simply select from predetermined answers. He perceived the whole field: terrain, timing, expectation, force, movement, psychology, relationship, and opportunity.`,

            class:""
          }
        ]

      },

      {

        jp:
          `ゆえに、その教えは簡潔に言うことができる。法に従って見よ。そうすれば、適切な行為は自ら姿を現す。`,

        en:[
          {
            text:
              `The teaching can therefore be stated simply: See according to the Law, and the appropriate action will reveal itself.`,

            class:"closing"
          }
        ]

      },

      {

        jp:
          `聖都流の読みでは、義経は、何世紀も後に植芝盛平が武産合気として明確に表現することになる原理のうちに働いていた。`,

        en:[
          {
            text:
              `In the Seito-ryū reading, Yoshitsune was operating within the principle that Morihei Ueshiba would centuries later articulate as Takemusu Aiki.`,

            class:""
          }
        ]

      }

    ]

  },

  /* =======================================================
     THE GATHERING
     ======================================================= */

  {

    jpTitle:"集結、戦役、そして離散",

    enTitle:"The Gathering, the Campaign, and the Scattering",

    rows:[

      {

        jp:
          `義経はおよそ十六歳で鞍馬を離れ、北へ向かい、平泉の藤原秀衡の庇護を受けた。そこでおよそ六年を過ごし、教えを実践し、その中で成熟した。`,

        en:[
          {
            text:
              `Yoshitsune left Kurama around the age of sixteen and traveled north to the protection of Fujiwara no Hidehira at Hiraizumi. There he remained for roughly six years. He practiced the teaching and matured with it.`,

            class:""
          }
        ]

      },

      {

        jp:
          `そして一一八〇年、分かれていた源氏の家々は戦によって再び集められた。義経は平泉から南下し、兄であり後の将軍となる源頼朝のもとへ参じた。源氏の諸家が合流した。`,

        en:[
          {
            text:
              `Then, in 1180, the divided Minamoto family was drawn together by war. Yoshitsune rode south from Hiraizumi and joined his elder brother, Minamoto no Yoritomo, the future shogun. The houses of the Genji converged.`,

            class:""
          }
        ]

      },

      {

        jp:
          `一一八〇年以降、義経はこれらの男たちと戦の坩堝の中で生活し、共に戦役を重ねた。彼らは計画し、稽古し、戦い、適応し、生き延び、再び戦った。指揮官は指揮官から学び、異なる家の方法が実践の場で出会った。失敗には代償があり、働いたものは記憶され、洗練され、伝えられた。`,

        en:[
          {
            text:
              `From 1180 onward, Yoshitsune lived and campaigned with these men inside the crucible of war. They planned, trained, fought, adapted, survived, and fought again. Commanders learned from commanders; methods belonging to different houses met in practice. What failed carried consequences. What worked was remembered, refined, and passed on.`,

            class:""
          }
        ]

      },

      {

        jp:
          `源氏の軍勢そのものが、伝承の環境となった。四年間、教えは戦役という条件の中で生きられた。そして一一八四年、その形成は試される場へ到達した。`,

        en:[
          {
            text:
              `The Minamoto host itself became the environment of transmission. For four years, instruction was lived under campaign conditions. By 1184, that formation had reached its proving ground.`,

            class:"closing"
          }
        ]

      }

    ]

  },

  /* =======================================================
     ICHI-NO-TANI
     ======================================================= */

  {

    jpTitle:"一ノ谷",

    enTitle:"Ichi-no-Tani",

    rows:[

      {

        jp:
          `一一八四年の一ノ谷において、一つの有名な出来事が、この原理を戦場の上に目に見える形で現した。鵯越を通る義経の異例の行動はよく知られている。縁起にとってより示唆的な問いは、義経が本隊から分けた集団が、どのように構成されていたかである。`,

        en:[
          {
            text:
              `At Ichi-no-Tani in 1184, one famous event gave that principle visible form on the battlefield. Yoshitsune’s extraordinary movement through Hiyodorigoe is well known. The more revealing question for the Engi is how the body he separated from the host was constituted.`,

            class:""
          }
        ]

      },

      {

        jp:
          `戦闘序列は一つの視点を与える。二人の大将軍の直下に、記録は十二人の相従ふ輩を区別して置く。七人は範頼のもとに、五人は義経のもとに記される。二人の大将軍と十二人の相従ふ輩を合わせると、彼らは源氏軍の長老層を形成していた。すなわち、戦場指揮官と武家諸家の重鎮である。`,

        en:[
          {
            text:
              `The historical order of battle gives us perspective. Beneath the two 大将軍, Daishōgun, “army commanders,” the record sets apart twelve 相従ふ輩, Aishitagau Yakara, “following or accompanying men.” Seven are listed with Noriyori and five with Yoshitsune. Taken together, the two Daishōgun and twelve Aishitagau Yakara formed the elders of the Minamoto host: the field commanders and the senior men of its warrior houses.`,

            class:""
          }
        ]

      },

      {

        jp:
          `相従ふ輩は、単に名簿に記された名前ではなかった。彼らは二人の戦場指揮官を取り巻く直接の武の集団に属し、旅、奉仕、稽古、戦を通じて戦役の生活を共有した。義経が何を見、何を行うことを学んでいたにせよ、このような近接した生活と戦いの中にいた者たちは、それを直接吸収する位置にあった。`,

        en:[
          {
            text:
              `The Aishitagau Yakara were not merely names on a roster. They belonged to the immediate martial circles of the two field commanders, sharing the life of campaign through travel, service, training, and battle. Whatever Yoshitsune had learned to see and do, men living and fighting in such proximity were naturally positioned to absorb it directly.`,

            class:""
          }
        ]

      },

      {

        jp:
          `記録された指揮構造は、その直接の集団を目に見えるものにする。`,

        en:[
          {
            text:
              `The recorded command structure makes that immediate circle visible:`,

            class:""
          },

          {
            text:
              `MINAMOTO NO YORITOMO
future shogun, head of the Minamoto war effort
↓
TWO DAISHŌGUN
↓
TWELVE AISHITAGAU YAKARA`,

            class:"sequence"
          }
        ]

      },

      {

        jp:
          `源範頼 — 大手。七人の相従ふ輩は、武田信義、加賀美遠光、小笠原長清、一条忠頼、板垣兼信、武田有義、石和信光。`,

        en:[
          {
            text:
              `Minamoto no Noriyori — Ōte, the main front. Seven Aishitagau Yakara: Takeda Nobuyoshi, Kagami Tōmitsu, Ogasawara Nagakiyo, Ichijō Tadayori, Itagaki Kanenobu, Takeda Ariyoshi, and Isawa Nobumitsu.`,

            class:""
          }
        ]

      },

      {

        jp:
          `源義経 — 搦手。五人の相従ふ輩は、安田義定、田代信綱、大内惟義、中原親能、佐原十郎義連、すなわち三浦義連。`,

        en:[
          {
            text:
              `Minamoto no Yoshitsune — Karamete, the rear and flanking approach. Five Aishitagau Yakara: Yasuda Yoshisada, Tashiro Nobutsuna, Ōuchi Koreyoshi, Nakahara Chikayoshi, and Sahara Jūrō Yoshitsura, also called Miura Yoshitsura.`,

            class:""
          }
        ]

      },

      {

        jp:
          `伝承に名を残す勇士の中には、鷲尾三郎義久、熊谷直実、熊谷直家、平山季重がいる。`,

        en:[
          {
            text:
              `Among the distinguished warriors named in the tradition are Washio Saburō Yoshihisa, Kumagai Naozane, Kumagai Naoie, and Hirayama Sueshige.`,

            class:""
          }
        ]

      },

      {

        jp:
          `十二人の相従ふ輩のうち二人は、すでに別の任務に置かれていた。安田義定は後方の指揮に残り、田代信綱は門への攻撃に送られた。`,

        en:[
          {
            text:
              `Two of the twelve 相従ふ輩, Aishitagau Yakara, had already been committed elsewhere. Yasuda Yoshisada remained in command of the rear, while Tashiro Nobutsuna was sent against the gate.`,

            class:""
          }
        ]

      },

      {

        jp:
          `寅の刻、義経は軍勢から七十勇士、Nanajū Yūshi、「七十人の卓越した勇士」を分け、さらに相従ふ輩の余、yo、「残り」と共に進んだ。`,

        en:[
          {
            text:
              `At the Hour of the Tiger, Yoshitsune separated from the host the 七十勇士, Nanajū Yūshi, “The Seventy Distinguished Warriors,” together with the 余, yo, “remainder,” of the Aishitagau Yakara.`,

            class:"closing"
          }
        ]

      },

      {

        jp:
          `そして、同じ眼が山へ向けられた。鵯越では、攻撃に不向きと判断された道が、そのまま攻撃の道となった。地形は機会となり、予想は弱点となった。敵が準備した強さにその条件のままぶつかるのではなく、義経は関係そのものを変えた。まず人の場、次に地形の場。行為に先立って、秩序が見抜かれた。`,

        en:[
          {
            text:
              `Then the same eye turned toward the mountain. At Hiyodorigoe, the route judged unsuitable for attack became the route of attack. Terrain became opportunity and expectation became vulnerability. Rather than meet the enemy's prepared strength on its own terms, Yoshitsune changed the relationship itself. First the human field, then the physical field: the order was perceived before the action was taken.`,

            class:""
          }
        ]

      },

      {

        jp:
          `四年間の戦役は、教えを慣熟へ、慣熟を知覚へと変えていた。一ノ谷では、知覚が判断となり、判断が自発的な行為を生んだ。現実の結果が伴う条件のもとで、戦場そのものが彼らの伝承であり、認可であり、墨ではなく行為によって記された免許となった。義経と共に生き、戦った者たちは、鞍馬の教えが生きた働きとして現れるのを見、その働きに参加した。`,

        en:[
          {
            text:
              `For four years, campaign had turned instruction into familiarity and familiarity into perception. At Ichi-no-Tani, perception became judgment, and judgment gave birth to spontaneous action. Under real consequence, the battlefield became their transmission and their authorization, their 免許, menkyo, “license” or “authorization,” written not in ink but in action. Those who had lived and fought beside Yoshitsune had seen and participated in the Kurama teaching as a living operation.`,

            class:""
          }
        ]

      },

      {

        jp:
          `ここで継承は合流する。より古い武の体系は新羅三郎源義光から来ていた。鞍馬の教えは義経を通して源氏の集結へ入った。一ノ谷では、甲斐源氏と義経の相従ふ輩が同じ戦場に立ち、その集結が、鞍馬の教えを義光以来の古い継承へ入れる門となった。`,

        en:[
          {
            text:
              `The inheritance now converges. The older martial body had come through Shinra Saburō Minamoto no Yoshimitsu. The Kurama teaching entered the Minamoto gathering through Yoshitsune. At Ichi-no-Tani, the Kai-Genji and Yoshitsune's own Aishitagau Yakara stand together within the same field, and the gathering becomes the gate through which that teaching enters the older Yoshimitsu inheritance.`,

            class:""
          }
        ]

      },

      {

        jp:
          `後に大東流として記憶される柔術の継承は義光から来た。義経は合気を源氏の継承へもたらした。武田はそれを受け取り、守り、未来へ運んだ。`,

        en:[
          {
            text:
              `The jūjutsu inheritance later remembered as Daitō-ryū had come through Yoshimitsu. Yoshitsune brought aiki into the Minamoto inheritance. Takeda received it, preserved it, and carried it forward.`,

            class:"closing"
          }
        ]

      },

      {

        jp:
          `その好意と集結は長く続かなかった。頼朝はやがて独立した源氏の勢力を退け、ついには名高い弟、義経自身を追うことになる。しかし教えは、すでに伝えられていた。`,

        en:[
          {
            text:
              `The goodwill and gathering did not last. Yoritomo eventually moved against independent Minamoto powers and finally against his famous brother Yoshitsune himself. But the teaching had already been passed.`,

            class:""
          }
        ]

      },

      {

        jp:
          `歴史は義経の死を平泉に置く。しかし日本の伝説は、彼をそこに留めなかった。追討を逃れ、北へ脱出し、大陸へ渡り、最も大胆な伝説では、かの軍事的天才チンギス・ハーンその人になったとも語られる。`,

        en:[
          {
            text:
              `History places Yoshitsune's death at Hiraizumi. Japanese legend refused to leave him there. It is said that he survived the hunt, escaped north, crossed to the Asian mainland, and, in the most extravagant version of the legend, became none other than the military genius Genghis Khan himself.`,

            class:""
          },

          {
            text:
              `Legend!`,

            class:"closing"
          }
        ]

      }

    ]

  },

  /* =======================================================
     THE TAKEDA INHERITANCE
     ======================================================= */

  {

    jpTitle:"武田の継承",

    enTitle:"The Takeda Inheritance",

    rows:[

      {

        jp:
          `武田は残った。`,

        en:[
          {
            text:
              `The Takeda endured.`,

            class:"closing"
          }
        ]

      },

      {

        jp:
          `彼らが継承した源氏の武術は、合気が働き続けるための身体となった。`,

        en:[
          {
            text:
              `Their inherited Minamoto arts provided the body through which aiki could continue to operate.`,

            class:""
          }
        ]

      },

      {

        jp:
          `武田家の中で、その働きは秘伝その他の内伝、隠された伝承の中に埋め込まれて残ったと考える。`,

        en:[
          {
            text:
              `It is believed that within the Takeda house, that operation remained embedded in the hiden and other inner or concealed transmissions of the ryū.`,

            class:""
          }
        ]

      }

    ]

  },

  /* =======================================================
     TAKEDA SHINGEN
     ======================================================= */

  {

    jpTitle:"武田信玄",

    enTitle:"On Takeda Shingen",

    rows:[

      {

        jp:
          `数世紀後、甲斐武田の本家から武田信玄が現れた。その戦略は、この法が後代に現れた印象的な表現を示している。`,

        en:[
          {
            text:
              `Centuries later, the main Kai-Takeda house produced Takeda Shingen. His strategies offer striking later expressions of the Law.`,

            class:""
          }
        ]

      },

      {

        jp:
          `その有名な戦略的標語「風林火山」は、同じ法を軍勢の規模で表している。`,

        en:[
          {
            text:
              `His famous strategic maxim, Fūrinkazan, meaning Wind, Forest, Fire, Mountain, gives us the same Law expressed at the scale of armies:`,

            class:""
          },

          {
            text:
              `WIND · FOREST · FIRE · MOUNTAIN`,

            class:"sequence"
          }
        ]

      },

      {

        jp:
          `速さが必要なら疾く。静けさが必要なら静かに。力が必要なら圧倒的に。動けば陣を失うなら動かない。`,

        en:[
          {
            text:
              `Swift when swiftness is required. Still when stillness is required. Overwhelming when force is required. Immovable when movement would destroy the position.`,

            class:""
          }
        ]

      },

      {

        jp:
          `常に正しい一つの外形的な答えがあるのではない。残るのは、状況に正しく応じる能力である。`,

        en:[
          {
            text:
              `No single outward response is always correct. What remains available is the ability to answer circumstance correctly.`,

            class:"closing"
          }
        ]

      }

    ]

  },

  /* =======================================================
     KAI TO AIZU
     ======================================================= */

  {

    jpTitle:"甲斐から会津へ",

    enTitle:"From Kai to Aizu",

    rows:[

      {

        jp:
          `後に武田の傍系は、一族の継承を会津へ運んだ。そこで武の問題は変化した。戦場は城となった。`,

        en:[
          {
            text:
              `A collateral Takeda branch later carried the family inheritance into Aizu. There the martial problem changed. The battlefield became the castle.`,

            class:""
          }
        ]

      },

      {

        jp:
          `礼装、限られた空間、礼法、武器の制限、政治的な結果が、新たな制約を課した。`,

        en:[
          {
            text:
              `Formal clothing, confined rooms, etiquette, restricted weapons, and political consequence imposed new constraints.`,

            class:""
          }
        ]

      },

      {

        jp:
          `会津では、この継承の一部が城内の格式と制約に適応し、後代の伝承で御式内と呼ばれるもの、すなわち礼法、制御、護身に関わる内向きの武法と結び付いたとされる。`,

        en:[
          {
            text:
              `It is said that in Aizu, part of this inheritance was adapted to the formal and restricted environment of the castle and became associated with what later tradition calls oshikiuchi, an inner-household discipline of etiquette, control, and self-protection.`,

            class:""
          }
        ]

      },

      {

        jp:
          `かつて戦場全体で扱われていた戦略的な問題は、二人の身体の間の空間へ圧縮された。この環境の中で、古い合気の働きの一側面、すなわち関係、構造、均衡、意図を二者の間で制御することが、極めて精密に洗練された。`,

        en:[
          {
            text:
              `A strategic problem once measured across battlefields was compressed into the space between two bodies. Within this increasingly concentrated martial environment, one dimension of the older aiki operation was refined with extraordinary precision: control of relationship, structure, balance, and intention between two people.`,

            class:""
          }
        ]

      }

    ]

  },

  /* =======================================================
     BEFORE THE NAME
     ======================================================= */

  {

    jpTitle:"名が生まれる前",

    enTitle:"Before the Name",

    rows:[

      {

        jp:
          `何世紀もの間、われわれが合気と呼んできたものには、一つの恒久的な名称を必要としなかった。武の体系が先にあり、高度な教えは独立した名称を持たないまま、その内部に埋め込まれて存在し得た。`,

        en:[
          {
            text:
              `For centuries, what we have labeled aiki required no single permanent name. The martial body came first. Higher teachings could remain embedded within it without yet existing as a separately named discipline.`,

            class:""
          }
        ]

      },

      {

        jp:
          `やがて一つの言葉が特別な意味を持つようになる。合気。`,

        en:[
          {
            text:
              `Eventually one term acquired special importance: Aiki — 合気.`,

            class:"sequence"
          }
        ]

      },

      {

        jp:
          `合気という語は、近代大東流以前から日本の武術言説の中に存在していた。一八九二年には『武道秘訣 合気之術』という書物が現れる。`,

        en:[
          {
            text:
              `The word already existed in Japanese martial discourse before modern Daitō-ryū. By 1892, a Japanese book appeared under the title: Budō Hiketsu: Aiki no Jutsu — Secrets of Budō: The Art of Aiki.`,

            class:""
          }
        ]

      },

      {

        jp:
          `二十世紀初頭には、武田の継承そのものが合気を武の実際的な用語として用いるようになる。この物語の中で初めて、その働きが名を持つ。`,

        en:[
          {
            text:
              `By the early twentieth century, the Takeda inheritance itself would use aiki as an operative martial term. For the first time in our story: the operation now has its name.`,

            class:"closing"
          }
        ]

      }

    ]

  },

  /* =======================================================
     SOKAKU, UESHIBA, NAMING OF AIKI
     ======================================================= */

  {

    jpTitle:"惣角、植芝、そして合気の命名",

    enTitle:"Sōkaku, Ueshiba, and the Naming of Aiki",

    rows:[

      {

        jp:
          `会津武田の流れから武田惣角が現れた。惣角によって、武田の武の継承は大東流柔術として近代日本へ入った。`,

        en:[
          {
            text:
              `From the Aizu Takeda came Takeda Sōkaku. With him, the Takeda martial inheritance entered modern Japan as Daitō-ryū Jūjutsu.`,

            class:""
          }
        ]

      },

      {

        jp:
          `その技術体系は、すでに段階的に深まる伝承として組織されていた。最も高度な内容の一部は、裏、秘伝、あるいは文書化されないものとして残っていた。`,

        en:[
          {
            text:
              `Its technical body was already organized into progressively deeper levels of transmission. Some of its highest material remained ura, inner, hiden, or unwritten.`,

            class:""
          }
        ]

      },

      {

        jp:
          `惣角の初期伝承において、秘伝目録は百十八か条を記し、さらに三十か条は書面の外に置かれていた。`,

        en:[
          {
            text:
              `In Sōkaku's early transmission, the Hiden Mokuroku, the Catalogue of Secret Teachings, named 118 items, while 30 remained outside the written listing.`,

            class:""
          }
        ]

      },

      {

        jp:
          `二十世紀初頭までに、惣角はすでに自らの術の高度な働きを示す言葉として合気を用いていた。大東流はその働きを柔術の内部で保存し、洗練し、その区別をますます明確にした。`,

        en:[
          {
            text:
              `By the early twentieth century, Sōkaku was already using the term aiki for the higher operation within his art. Daitō-ryū preserved and refined that operation within its jūjutsu, making the distinction increasingly explicit:`,

            class:""
          },

          {
            text:
              `JŪJUTSU provides the technical body.
AIKI is the operation acting through it.
AIKI NO JUTSU names that operation.`,

            class:"sequence"
          }
        ]

      },

      {

        jp:
          `惣角の最も重要な弟子の一人が植芝盛平であった。植芝は綾部で出口王仁三郎と大本の宗教世界に入った。`,

        en:[
          {
            text:
              `Among Sōkaku's most consequential students was Morihei Ueshiba. Ueshiba entered the religious world of Onisaburō Deguchi and Ōmoto at Ayabe.`,

            class:""
          }
        ]

      },

      {

        jp:
          `一九二二年、惣角はそこで教えた。既存の柔術課程と並んで、合気之術という別個に識別された体系が現れる。同じ年、現存する記録の中で流派は「大東流合気柔術」の名で現れ始める。`,

        en:[
          {
            text:
              `In 1922, Sōkaku taught there. Alongside the established jūjutsu curriculum appears a separately identified body of Aiki no Jutsu. In the same year, the ryū begins appearing in surviving records under the name: Daitō-ryū Aiki-jūjutsu.`,

            class:""
          }
        ]

      },

      {

        jp:
          `植芝家その他の証言は、出口王仁三郎がその働きを見て、「合気」を名称に加えるよう勧めたと伝える。内なる働きは、ついに術の名そのものに立つほど明示的になった。`,

        en:[
          {
            text:
              `Ueshiba-family and related testimony later credited Deguchi with encouraging the addition of aiki to the name after observing it in action. The inner operation had become explicit enough to stand in the name of the art itself.`,

            class:""
          }
        ]

      },

      {

        jp:
          `植芝はさらに問いを進めた。彼は合気を、柔術内部の洗練された一作用としてだけではなく、状況に応じて行為そのものを生み出し得る、生成的な働きとして理解するようになった。`,

        en:[
          {
            text:
              `Ueshiba then carried the inquiry further. He increasingly understood aiki not merely as a refined operation within jūjutsu, but as generative, capable of giving rise to action according to circumstance.`,

            class:""
          }
        ]

      },

      {

        jp:
          `そこから生まれたものが、合気道である。合気の道。`,

        en:[
          {
            text:
              `From that development emerged: Aikidō — The Way of Aiki.`,

            class:"closing"
          }
        ]

      }

    ]

  },

  /* =======================================================
     TAKEMUSU AIKI
     ======================================================= */

  {

    jpTitle:"武産合気",

    enTitle:"Takemusu Aiki",

    rows:[

      {

        jp:
          `植芝大先生に至って、この縁起の冒頭で名づけられた創流の探究領域が、完全な姿を現す。`,

        en:[
          {
            text:
              `With Ueshiba O’sensei, the founding field named at the beginning of this Engi comes fully into view.`,

            class:""
          }
        ]

      },

      {

        jp:
          `武産合気とは生成する合気である。あらかじめ定めた技を選んだり、無理に押しつけたりすることなく、遭遇の条件そのものから適切な武の行為が自発的に生まれることである。`,

        en:[
          {
            text:
              `Takemusu Aiki is generative aiki: the spontaneous birth of appropriate martial action from the conditions of the encounter, without first selecting or forcing a predetermined technique.`,

            class:""
          }
        ]

      },

      {

        jp:
          `真の合気からは、状況に応じて武の形が生じる。関係へ正しく入り、その結果として行為が現れる。`,

        en:[
          {
            text:
              `From true aiki, martial form arises according to circumstance: one enters the relationship correctly, and the action emerges.`,

            class:""
          }
        ]

      },

      {

        jp:
          `大東流において、合気は卓越した技術的精密さをもって保存され、洗練された。植芝において、その生成的な広がりが明示された。`,

        en:[
          {
            text:
              `In Daitō-ryū, aiki had been preserved and refined with extraordinary technical precision. With Ueshiba, its generative scope became explicit.`,

            class:""
          }
        ]

      },

      {

        jp:
          `この長い弧は、簡潔に言うことができる。`,

        en:[
          {
            text:
              `The entire arc can now be stated simply:`,

            class:""
          },

          {
            text:
              `THE LAW is the order inherent in reality.
AIKI is its living martial operation.
TAKEMUSU AIKI is that operation spontaneously giving birth to appropriate martial form.`,

            class:"sequence"
          }
        ]

      },

      {

        jp:
          `武産合気において、この長い弧は頂点に達する。合気は単に技を完成させるのではない。合気が技を生む。`,

        en:[
          {
            text:
              `And in Takemusu Aiki, the long arc reaches its culmination: aiki does not merely perfect technique. Aiki gives birth to technique.`,

            class:"closing"
          }
        ]

      },

      {

        jp:
          `その理解から、われわれに手渡された術が生まれた。合気道。合気の道。`,

        en:[
          {
            text:
              `From that realization came the art handed down to us: Aikidō — The Way of Aiki.`,

            class:""
          }
        ]

      }

    ]

  },

  /* =======================================================
     AIKI JIKKENJŌ
     ======================================================= */

  {

    jpTitle:"合気実験場",

    enTitle:"Aiki Jikkenjō — The Aiki Experimental Ground",

    rows:[

      {

        jp:
          `実 — jitsu — 現実、実際
験 — ken — 経験による試験、証明
場 — jō — 場所、場、地`,

        en:[
          {
            text:
              `実 · jitsu = reality, actuality
験 · ken = test, proof through experience
場 · jō = field, place, ground`,

            class:"sequence"
          },

          {
            text:
              `“Reality Testing Field”`,

            class:"closing"
          }
        ]

      },

      {

        jp:
          `継承された物語は、われわれを合気道へ連れてくる。聖都流の探究は、その先にある問いから始まる。`,

        en:[
          {
            text:
              `The inherited story brings us to Aikidō. The Seito-ryū inquiry begins with the question that follows from it.`,

            class:""
          }
        ]

      },

      {

        jp:
          `もし合気が生成的なものであるなら、答えがあらかじめ知られている場所だけでは、その全体を探究することはできない。戦争の暴力を再現することなく、不確実性、抵抗、変化する状況、適応、そして現実的な結果を許す稽古条件が必要になる。`,

        en:[
          {
            text:
              `If aiki is generative, then it cannot be investigated fully only where the answer is known in advance. Some training conditions must allow uncertainty, resistance, changing circumstance, adaptation, and genuine consequence without recreating the violence of war.`,

            class:""
          }
        ]

      },

      {

        jp:
          `源氏の者たちは、戦役と生存の坩堝の中に、そのような条件を持っていた。一ノ谷は、この縁起において彼らの戦場の免許として立つ。`,

        en:[
          {
            text:
              `The Minamoto possessed such conditions in the crucible of campaign and survival. Ichi-no-Tani stands in the Engi as their battlefield menkyo.`,

            class:""
          }
        ]

      },

      {

        jp:
          `戦場が彼らの実験場であった。聖都流は戦場を再現しない。問いを再現する。われわれの場は違う。問いは同じである。`,

        en:[
          {
            text:
              `The battlefield was their Experimental Ground. Seito-ryū does not recreate the battlefield. It recreates the question. Our ground is different. The question is the same.`,

            class:"closing"
          }
        ]

      },

      {

        jp:
          `合気実験場、Aiki Jikkenjō、「Aiki Experimental Ground」とは、継承された形を段階的に不確実性へ戻し、その生きた働きを試す場所である。`,

        en:[
          {
            text:
              `The 合気実験場, Aiki Jikkenjō, “Aiki Experimental Ground,” is the place where inherited form is returned progressively to uncertainty so that its living operation can be tested.`,

            class:""
          }
        ]

      },

      {

        jp:
          `合気実験場は、発明から始まるのでも、一つの系譜だけから始まるのでもない。まず「十二人の長老」が担う生きた継承を見、次に「七十人の卓越した合気道人」が示す技術的な証言を見、その上で学んだものを実験場へ戻す。そこで継承された形と生きた実例は、不確実性の中に置かれ、原理が姿を現すか、あるいは失敗するまで試される。`,

        en:[
          {
            text:
              `The Aiki Jikkenjō begins neither from invention nor from a single lineage. It looks first to the living inheritance of the Twelve Elders, then to the technical witness of the Seventy Distinguished Aikidoka, and finally returns what it has learned to the Experimental Ground. There, inherited form and living example are subjected to uncertainty until principle either reveals itself or fails.`,

            class:""
          }
        ]

      },

      {

        jp:
          `十二人は継承を守る。七十人は、その生きた可能性を示す。実験場は、形が現実に出会ったとき何が残るのかを試す。`,

        en:[
          {
            text:
              `The Twelve preserve the inheritance. The Seventy reveal its living possibilities. The Experimental Ground tests what survives when form meets reality.`,

            class:"closing"
          }
        ]

      },

      {

        jp:
          `十二人または七十人に含めることは、研究と敬意を示すものであり、聖都流への所属、承認、支持を意味するものではない。`,

        en:[
          {
            text:
              `Inclusion among the Twelve or the Seventy signifies study and respect, not affiliation, endorsement, or membership in Seito-ryū.`,

            class:""
          }
        ]

      },

      {

        jp:
          `聖都流の一年間の内弟子、uchi-deshi、「live-in disciple」の形成も、同じ弧をたどる。`,

        en:[
          {
            text:
              `The one-year 内弟子, uchi-deshi, “live-in disciple” formation of Seito-ryū will follow that same arc:`,

            class:""
          },

          {
            text:
              `INSTRUCTION IS LIVED.
TECHNIQUE BECOMES FAMILIARITY.
FAMILIARITY BECOMES PERCEPTION.
PERCEPTION IS PLACED UNDER UNCERTAINTY.`,

            class:"sequence"
          }
        ]

      },

      {

        jp:
          `不確実性の中で、知覚は判断となる。判断は適切な行為を生み出す。学ぶ者は、教えが単に記憶されたものではなくなり、行為の中で利用可能なものとなったことを示さなければならない。`,

        en:[
          {
            text:
              `Under uncertainty, perception becomes judgment. Judgment gives birth to appropriate action. The student must demonstrate that the teaching has ceased to be merely remembered and has become available in action.`,

            class:""
          }
        ]

      },

      {

        jp:
          `継承された技術体系が素材を与える。生きた条件が実験場を与える。合気が働きを与える。武産合気こそ、われわれが見極めようとする現象である。`,

        en:[
          {
            text:
              `The inherited technical body provides the material. Alive conditions provide the Experimental Ground. Aiki provides the operation. Takemusu Aiki is the phenomenon we seek to recognize.`,

            class:""
          }
        ]

      },

      {

        jp:
          `したがって聖都流の創流の問いは、継承された技が今も実行できるかどうかだけではない。`,

        en:[
          {
            text:
              `The founding question of Seito-ryū is therefore not simply whether inherited techniques can still be performed.`,

            class:""
          }
        ]

      },

      {

        jp:
          `合気が再び技を生み出す、その条件を創ることができるのか。`,

        en:[
          {
            text:
              `It is whether the conditions can be created in which aiki once again gives birth to technique.`,

            class:"closing"
          }
        ]

      }

    ]

  }

];

/* =========================================================
   RENDER
   ========================================================= */

const root =
  document.getElementById("sections");

sections.forEach(
  (section,index) => {

    const sectionElement =
      document.createElement("section");

    sectionElement.className =
      "section";

    if(index === 0){

      sectionElement.id =
        "about";

    }

    sectionElement.innerHTML = `

      <div class="section-title">

        <div class="section-mark">

          <img
            src="/assets/seito-mon.png"
            alt=""
          >

        </div>

        <div class="kicker">
          ${section.jpTitle}
        </div>

        <div class="sub">
          ${section.enTitle}
        </div>

      </div>

      <div class="section-body"></div>

    `;

    const body =
      sectionElement.querySelector(
        ".section-body"
      );

    section.rows.forEach(
      (row,rowIndex) => {

        const jp =
          document.createElement("div");

        jp.className =
          "jp-paragraph";

        jp.lang =
          "ja";

        jp.textContent =
          row.jp;

        const en =
          document.createElement("div");

        en.className =
          "en-group";

        row.en.forEach(
          paragraph => {

            const node =
              document.createElement("p");

            if(paragraph.class){

              node.className =
                paragraph.class;

            }

            node.textContent =
              paragraph.text;

            en.appendChild(
              node
            );

          }
        );

        const gridRow =
          rowIndex + 1;

        jp.style.gridRow =
          gridRow;

        en.style.gridRow =
          gridRow;

        body.append(
          jp,
          en
        );

      }
    );

    root.appendChild(
      sectionElement
    );

  }
);

/* =========================================================
   HERO TITLE WIDTH EQUALIZER
   ========================================================= */

function equalizeHeroTitle(){

  document
    .querySelectorAll(
      "[data-title-equalizer]"
    )
    .forEach(
      group => {

        const japanese =
          group.querySelector(
            "[data-title-jp]"
          );

        const romaji =
          group.querySelector(
            "[data-title-romaji]"
          );

        if(
          !japanese
          ||
          !romaji
        ){
          return;
        }

        japanese.style
          .setProperty(
            "--match-extra",
            "0px"
          );

        romaji.style
          .setProperty(
            "--match-extra",
            "0px"
          );

        const jpWidth =
          japanese
            .getBoundingClientRect()
            .width;

        const romajiWidth =
          romaji
            .getBoundingClientRect()
            .width;

        const targetWidth =
          Math.max(
            jpWidth,
            romajiWidth
          );

        function expandLine(
          element,
          currentWidth
        ){

          if(
            currentWidth >=
            targetWidth - .5
          ){
            return;
          }

          const characters =
            Array.from(
              element
                .textContent
                .trim()
            ).length;

          if(
            characters < 2
          ){
            return;
          }

          const extra =
            (
              targetWidth -
              currentWidth
            )
            /
            (
              characters -
              1
            );

          element.style
            .setProperty(
              "--match-extra",
              `${extra}px`
            );

        }

        expandLine(
          japanese,
          jpWidth
        );

        expandLine(
          romaji,
          romajiWidth
        );

      }
    );

}

/* =========================================================
   JAPANESE VERTICAL FITTING
   ========================================================= */

function paragraphFits(
  paragraph
){

  const tolerance =
    1.5;

  return(

    paragraph.scrollWidth <=
      paragraph.clientWidth + tolerance

    &&

    paragraph.scrollHeight <=
      paragraph.clientHeight + tolerance

  );

}

function fitVerticalParagraph(
  paragraph
){

  const minimum =
    window.innerWidth >= 760
      ? 220
      : 200;

  let low =
    minimum;

  let high =
    minimum;

  paragraph.style.height =
    `${high}px`;

  while(
    !paragraphFits(paragraph)
    &&
    high < 1800
  ){

    high += 60;

    paragraph.style.height =
      `${high}px`;

  }

  while(
    low < high
  ){

    const middle =
      Math.floor(
        (low + high) / 2
      );

    paragraph.style.height =
      `${middle}px`;

    if(
      paragraphFits(paragraph)
    ){

      high =
        middle;

    }

    else{

      low =
        middle + 1;

    }

  }

  const fontSize =
    parseFloat(
      getComputedStyle(
        paragraph
      ).fontSize
    );

  const breathingRoom =
    Math.max(
      10,
      fontSize * .55
    );

  paragraph.style.height =
    `${Math.ceil(
      high + breathingRoom
    )}px`;

}

/* =========================================================
   COMPLETE PAGE LAYOUT
   ========================================================= */

function layoutPage(){

  equalizeHeroTitle();

  document
    .querySelectorAll(
      ".jp-paragraph"
    )
    .forEach(
      paragraph => {

        fitVerticalParagraph(
          paragraph
        );

      }
    );

}

/* =========================================================
   DEBOUNCE
   ========================================================= */

function debounce(
  callback,
  delay
){

  let timer;

  return function(){

    clearTimeout(
      timer
    );

    timer =
      setTimeout(
        callback,
        delay
      );

  };

}

/* =========================================================
   INITIAL LAYOUT
   ========================================================= */

if(
  document.fonts
  &&
  document.fonts.ready
){

  document.fonts.ready.then(
    () => {

      requestAnimationFrame(
        () => {

          requestAnimationFrame(
            layoutPage
          );

        }
      );

    }
  );

}

else{

  window.addEventListener(
    "load",
    layoutPage
  );

}

/* =========================================================
   RESPONSIVE RECALCULATION
   ========================================================= */

const relayout =
  debounce(
    layoutPage,
    120
  );

window.addEventListener(
  "resize",
  relayout
);

window.addEventListener(
  "orientationchange",
  () => {

    setTimeout(
      layoutPage,
      250
    );

  }
);

if(
  window.visualViewport
){

  window.visualViewport
    .addEventListener(
      "resize",
      relayout
    );

}

</script>

</body>
</html>
