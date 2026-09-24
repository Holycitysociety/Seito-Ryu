/* =========================================================
   AIKI IMPRINT REVEAL

   FIRST READING
   The battle is encountered without analytical labels.

   AFTER THE COMPLETE STORY
   The reader may choose SEE THE IMPRINT OF AIKI.

   REVEAL
   1. The ten retrospective seals appear at their exact
      positions within Ichi-no-Tani.
   2. The page returns smoothly to KAMAE.
   3. The seals remain visible for the remainder of the visit.

   AIKI intentionally has no individual seal.
   The total revealed pattern is its imprint.
   ========================================================= */

(() => {

  const seals = [
    {
      jp: "構え",
      romaji: "KAMAE",
      gloss: "READINESS / POSITION"
    },
    {
      jp: "間合い",
      romaji: "MA-AI",
      gloss: "INTERVAL / RELATIONSHIP"
    },
    {
      jp: "先",
      romaji: "SEN",
      gloss: "INITIATIVE"
    },
    {
      jp: "体捌き",
      romaji: "TAI-SABAKI",
      gloss: "BODY REPOSITIONING"
    },
    {
      jp: "入身",
      romaji: "IRIMI",
      gloss: "ENTRY"
    },
    {
      jp: "死角",
      romaji: "SHIKAKU",
      gloss: "DEAD ANGLE / POSITION OF ADVANTAGE"
    },
    {
      jp: "当身",
      romaji: "ATEMI",
      gloss: "DISRUPTIVE STRIKE"
    },
    {
      jp: "崩し",
      romaji: "KUZUSHI",
      gloss: "BREAKING STRUCTURE"
    },
    {
      jp: "技",
      romaji: "WAZA",
      gloss: "TECHNIQUE / ARISING ACTION"
    },
    {
      jp: "投げ",
      romaji: "NAGE",
      gloss: "THROW / DISPLACEMENT"
    }
  ];


  /* ---------------------------------------------------------
     STYLES
     --------------------------------------------------------- */

  const style = document.createElement("style");

  style.textContent = `

    /* =======================================================
       RETROSPECTIVE AIKI MARKER
       ======================================================= */

    .aiki-seal {
      display: none;
      align-items: center;
      gap: 1rem;

      width: 100%;
      margin: 0 0 1.4em 0;

      color: var(--shu);

      opacity: 0;
      transform: translateY(7px);

      transform-origin: left center;
    }


    body.aiki-imprint-revealed .aiki-seal {
      display: flex;

      opacity: 1;
      transform: none;

      animation:
        aiki-seal-arrive
        .42s
        ease
        both;

      animation-delay:
        calc(var(--seal-order, 0) * 42ms);
    }


    @keyframes aiki-seal-arrive {

      from {
        opacity: 0;
        transform: translateY(7px);
      }

      to {
        opacity: 1;
        transform: none;
      }

    }


    /* =======================================================
       THE JAPANESE SEAL

       Only the Japanese characters live inside the mark.
       ======================================================= */

    .aiki-seal-mark {
      flex: 0 0 auto;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 4.65rem;
      height: 4.65rem;

      box-sizing: border-box;

      border:
        3px
        solid
        var(--shu);

      border-radius: 50%;

      color: var(--shu);

      background:
        rgba(242, 231, 219, .18);

      box-shadow:
        inset 0 0 0 1px
        rgba(176, 42, 32, .22);

      position: relative;
    }


    /*
      Slight inner imperfection gives the mark a little more
      stamped / hanko character without becoming decorative.
    */

    .aiki-seal-mark::after {
      content: "";

      position: absolute;
      inset: 4px;

      border:
        1px
        solid
        rgba(176, 42, 32, .36);

      border-radius: 50%;

      pointer-events: none;
    }


    .aiki-seal-jp {
      position: relative;
      z-index: 1;

      display: block;

      max-height: 3.65rem;

      color: var(--shu);

      font-family: var(--brush);

      font-size: 1.42rem;
      font-weight: 700;

      line-height: 1;

      letter-spacing: .02em;

      writing-mode: vertical-rl;
      text-orientation: upright;

      white-space: nowrap;
    }


    /* =======================================================
       ROMAJI + ENGLISH OUTSIDE THE SEAL
       ======================================================= */

    .aiki-seal-copy {
      min-width: 0;

      display: flex;
      flex-direction: column;

      align-items: flex-start;
      justify-content: center;

      color: var(--shu);
    }


    .aiki-seal-romaji {
      display: block;

      font-family: inherit;

      font-size: .77rem;
      font-weight: 700;

      line-height: 1.1;

      letter-spacing: .2em;

      white-space: nowrap;
    }


    .aiki-seal-gloss {
      display: block;

      margin-top: .38rem;

      font-family: var(--jp-body);

      font-size: .67rem;
      font-weight: 700;

      line-height: 1.25;

      letter-spacing: .075em;

      text-transform: uppercase;
    }


    /* =======================================================
       FIRST SEAL SCROLL TARGET
       ======================================================= */

    .aiki-seal-first {
      scroll-margin-top:
        calc(var(--header-h) + 28px);
    }


    /* =======================================================
       FINAL REVEAL AREA

       Lives at the absolute bottom of the Engi.
       ======================================================= */

    .aiki-reveal-wrap {
      width: 100%;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      margin:
        3.75rem
        auto
        2.25rem;

      text-align: center;
    }


    .aiki-reveal-prelude {
      margin:
        0
        0
        1.15rem;

      color:
        rgba(40, 27, 20, .7);

      font-family:
        var(--jp-body);

      font-size:
        .72rem;

      font-weight:
        600;

      letter-spacing:
        .12em;

      text-transform:
        uppercase;
    }


    /* =======================================================
       LARGE HANKO-LIKE REVEAL BUTTON
       ======================================================= */

    .aiki-reveal-button {
      appearance: none;
      -webkit-appearance: none;

      position: relative;

      display: flex;

      align-items: center;
      justify-content: center;

      width: 9.25rem;
      height: 9.25rem;

      padding: 1.25rem;

      box-sizing: border-box;

      border:
        4px
        solid
        var(--shu);

      border-radius:
        50%;

      color:
        var(--shu);

      background:
        rgba(242, 231, 219, .22);

      box-shadow:
        inset
        0
        0
        0
        2px
        rgba(176, 42, 32, .19);

      font:
        inherit;

      cursor:
        pointer;

      transition:
        transform .18s ease,
        background-color .18s ease,
        color .18s ease,
        opacity .18s ease;
    }


    .aiki-reveal-button::after {
      content: "";

      position: absolute;

      inset: 7px;

      border:
        1px
        solid
        rgba(176, 42, 32, .46);

      border-radius:
        50%;

      pointer-events:
        none;
    }


    .aiki-reveal-button-text {
      position: relative;
      z-index: 1;

      display: block;

      max-width: 6.2rem;

      font-size: .73rem;
      font-weight: 800;

      line-height: 1.35;

      letter-spacing: .12em;

      text-align: center;

      text-transform: uppercase;
    }


    .aiki-reveal-button:hover,
    .aiki-reveal-button:focus-visible {
      color:
        var(--folio);

      background:
        var(--shu);

      transform:
        scale(1.035);

      outline:
        none;
    }


    .aiki-reveal-button:hover::after,
    .aiki-reveal-button:focus-visible::after {
      border-color:
        rgba(242, 231, 219, .55);
    }


    .aiki-reveal-button:active {
      transform:
        scale(.98);
    }


    /*
      After activation it becomes a completed seal rather than
      reverting to an ordinary disabled-looking web button.
    */

    .aiki-reveal-button.is-revealed {
      color:
        var(--folio);

      background:
        var(--shu);

      cursor:
        default;

      opacity:
        .88;

      transform:
        none;
    }


    .aiki-reveal-button.is-revealed::after {
      border-color:
        rgba(242, 231, 219, .5);
    }


    /* =======================================================
       TABLET / DESKTOP
       ======================================================= */

    @media (min-width: 760px) {

      .aiki-seal {
        gap:
          1.2rem;
      }


      .aiki-seal-mark {
        width:
          5.25rem;

        height:
          5.25rem;
      }


      .aiki-seal-jp {
        font-size:
          1.55rem;

        max-height:
          4.1rem;
      }


      .aiki-seal-romaji {
        font-size:
          .82rem;
      }


      .aiki-seal-gloss {
        font-size:
          .71rem;
      }


      .aiki-reveal-button {
        width:
          10.25rem;

        height:
          10.25rem;
      }


      .aiki-reveal-button-text {
        font-size:
          .77rem;
      }

    }


    /* =======================================================
       SMALL MOBILE
       ======================================================= */

    @media (max-width: 430px) {

      .aiki-seal {
        gap:
          .85rem;
      }


      .aiki-seal-mark {
        width:
          4.15rem;

        height:
          4.15rem;

        border-width:
          2.5px;
      }


      .aiki-seal-jp {
        max-height:
          3.25rem;

        font-size:
          1.27rem;
      }


      .aiki-seal-romaji {
        font-size:
          .71rem;

        letter-spacing:
          .17em;
      }


      .aiki-seal-gloss {
        max-width:
          11rem;

        font-size:
          .62rem;

        letter-spacing:
          .055em;
      }

    }


    /* =======================================================
       ACCESSIBILITY
       ======================================================= */

    @media (prefers-reduced-motion: reduce) {

      body.aiki-imprint-revealed .aiki-seal {
        animation:
          none;
      }


      .aiki-reveal-button {
        transition:
          none;
      }

    }

  `;


  document.head.appendChild(style);



  /* ---------------------------------------------------------
     FIND SECTION BY ITS ENGLISH TITLE
     --------------------------------------------------------- */

  function sectionByEnglishTitle(title) {

    return [
      ...document.querySelectorAll(".section")
    ].find(section => {

      const titleNode =
        section.querySelector(
          ".section-title .sub"
        );

      return (
        titleNode
          ?.textContent
          .trim()
        ===
        title
      );

    });

  }



  /* ---------------------------------------------------------
     CREATE ONE RETROSPECTIVE SEAL
     --------------------------------------------------------- */

  function createAikiSeal(
    sealData,
    index
  ) {

    const seal =
      document.createElement(
        "div"
      );


    seal.className =
      "aiki-seal" +
      (
        index === 0
          ? " aiki-seal-first"
          : ""
      );


    seal.style.setProperty(
      "--seal-order",
      index
    );


    seal.setAttribute(
      "aria-label",
      `${sealData.jp}, ${sealData.romaji}: ${sealData.gloss}`
    );


    const mark =
      document.createElement(
        "span"
      );


    mark.className =
      "aiki-seal-mark";


    const japanese =
      document.createElement(
        "span"
      );


    japanese.className =
      "aiki-seal-jp";


    japanese.textContent =
      sealData.jp;


    mark.appendChild(
      japanese
    );


    const copy =
      document.createElement(
        "span"
      );


    copy.className =
      "aiki-seal-copy";


    const romaji =
      document.createElement(
        "span"
      );


    romaji.className =
      "aiki-seal-romaji";


    romaji.textContent =
      sealData.romaji;


    const gloss =
      document.createElement(
        "span"
      );


    gloss.className =
      "aiki-seal-gloss";


    gloss.textContent =
      sealData.gloss;


    copy.append(
      romaji,
      gloss
    );


    seal.append(
      mark,
      copy
    );


    return seal;

  }



  /* ---------------------------------------------------------
     INSTALL THE DEVICE
     --------------------------------------------------------- */

  function enhanceAikiImprint() {

    const battleSection =
      sectionByEnglishTitle(
        "Ichi-no-Tani"
      );


    const finalSection =
      sectionByEnglishTitle(
        "Return"
      );


    if (
      !battleSection ||
      !finalSection
    ) {

      return;

    }



    /* -------------------------------------------------------
       FIND THE TEN BATTLE POSITIONS
       ------------------------------------------------------- */

    const battleGroups = [
      ...battleSection.querySelectorAll(
        ".en-group"
      )
    ];


    if (
      battleGroups.length <
      seals.length
    ) {

      return;

    }



    /* -------------------------------------------------------
       INSERT TEN HIDDEN RETROSPECTIVE SEALS
       ------------------------------------------------------- */

    seals.forEach(
      (
        sealData,
        index
      ) => {

        const group =
          battleGroups[index];


        const seal =
          createAikiSeal(
            sealData,
            index
          );


        group.prepend(
          seal
        );

      }
    );



    /* -------------------------------------------------------
       PLACE REVEAL CONTROL AT THE END OF THE ENTIRE STORY
       ------------------------------------------------------- */

    const finalEnglishColumn =
      finalSection.querySelector(
        ".en"
      ) ||
      finalSection.querySelector(
        ".en-col"
      ) ||
      finalSection.querySelector(
        ".english"
      );


    const finalTarget =
      finalEnglishColumn ||
      finalSection;


    const revealWrap =
      document.createElement(
        "div"
      );


    revealWrap.className =
      "aiki-reveal-wrap";


    const prelude =
      document.createElement(
        "div"
      );


    prelude.className =
      "aiki-reveal-prelude";


    prelude.textContent =
      "Now look back.";


    const revealButton =
      document.createElement(
        "button"
      );


    revealButton.type =
      "button";


    revealButton.className =
      "aiki-reveal-button";


    revealButton.setAttribute(
      "aria-expanded",
      "false"
    );


    const buttonText =
      document.createElement(
        "span"
      );


    buttonText.className =
      "aiki-reveal-button-text";


    buttonText.textContent =
      "SEE THE IMPRINT OF AIKI";


    revealButton.appendChild(
      buttonText
    );


    revealWrap.append(
      prelude,
      revealButton
    );


    finalTarget.appendChild(
      revealWrap
    );



    /* -------------------------------------------------------
       REVEAL AND RETURN TO KAMAE
       ------------------------------------------------------- */

    revealButton.addEventListener(
      "click",
      () => {

        if (
          document.body
            .classList
            .contains(
              "aiki-imprint-revealed"
            )
        ) {

          const firstSeal =
            battleSection.querySelector(
              ".aiki-seal-first"
            );


          firstSeal?.scrollIntoView({
            behavior:
              window.matchMedia(
                "(prefers-reduced-motion: reduce)"
              ).matches
                ? "auto"
                : "smooth",

            block:
              "start"
          });


          return;

        }



        document.body.classList.add(
          "aiki-imprint-revealed"
        );


        revealButton.classList.add(
          "is-revealed"
        );


        revealButton.setAttribute(
          "aria-expanded",
          "true"
        );


        buttonText.textContent =
          "AIKI IMPRINT REVEALED";


        const firstSeal =
          battleSection.querySelector(
            ".aiki-seal-first"
          );


        requestAnimationFrame(
          () => {

            requestAnimationFrame(
              () => {

                firstSeal?.scrollIntoView({

                  behavior:
                    window.matchMedia(
                      "(prefers-reduced-motion: reduce)"
                    ).matches
                      ? "auto"
                      : "smooth",

                  block:
                    "start"

                });

              }
            );

          }
        );

      }
    );

  }



  /* ---------------------------------------------------------
     RUN AFTER PAGE CONTENT EXISTS
     --------------------------------------------------------- */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      enhanceAikiImprint,
      {
        once: true
      }
    );

  }

  else {

    requestAnimationFrame(
      enhanceAikiImprint
    );

  }

})();