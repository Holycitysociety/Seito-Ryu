/* =========================================================
   AIKI IMPRINT REVEAL

   FIRST READING:
   The battle appears without analytical labels.

   AFTER THE COMPLETE ENGI:
   The reader may choose SEE THE IMPRINT OF AIKI.

   That action:
   1. reveals the ten retrospective seals,
   2. returns smoothly to KAMAE,
   3. leaves every seal visible thereafter.

   AIKI intentionally receives no individual seal.
   The complete revealed pattern is the imprint of aiki.
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


  /* =======================================================
     STYLES
     ======================================================= */

  const style = document.createElement("style");

  style.textContent = `

    /* -------------------------------------------------------
       THE RETROSPECTIVE IMPRINT

       No large rectangular card.

       Only the Japanese term receives the red seal enclosure.
       Romaji and interpretation remain outside the stamp.
       ------------------------------------------------------- */

    .aiki-seal{
      display:none;

      align-items:center;
      gap:.72rem;

      width:100%;
      max-width:100%;

      margin:0 0 1.15em 0;

      color:var(--shu);

      opacity:0;

      transform:
        translateY(7px)
        scale(.97);

      transform-origin:left center;
    }


    body.aiki-imprint-revealed .aiki-seal{
      display:flex;

      opacity:1;

      transform:none;

      animation:
        aiki-seal-arrive
        .42s
        ease
        both;

      animation-delay:
        calc(var(--seal-order, 0) * 45ms);
    }


    /* -------------------------------------------------------
       JAPANESE SEAL

       This is the actual visual stamp.

       Deliberately compact.
       Deliberately imperfectly round-cornered rather than
       looking like a modern UI card.
       ------------------------------------------------------- */

    .aiki-seal-stamp{
      flex:0 0 auto;

      display:flex;
      align-items:center;
      justify-content:center;

      min-width:3.75rem;
      min-height:3.75rem;

      padding:.46rem .52rem;

      border:
        3px
        solid
        var(--shu);

      border-radius:18%;

      background:
        rgba(176,42,32,.025);

      box-shadow:
        inset
        0
        0
        0
        1px
        rgba(176,42,32,.20);

      transform:
        rotate(-.7deg);
    }


    .aiki-seal-jp{
      display:block;

      font-family:var(--brush);

      font-size:1.55rem;

      font-weight:700;

      line-height:1;

      letter-spacing:.06em;

      white-space:nowrap;

      color:var(--shu);
    }


    /* -------------------------------------------------------
       EXPLANATORY TEXT

       Outside the seal.
       ------------------------------------------------------- */

    .aiki-seal-copy{
      display:flex;
      flex-direction:column;

      min-width:0;

      padding-top:.06rem;
    }


    .aiki-seal-romaji{
      display:block;

      font-family:var(--jp-body);

      font-size:.88rem;

      font-weight:600;

      line-height:1.1;

      letter-spacing:.22em;

      white-space:nowrap;

      color:var(--shu);
    }


    .aiki-seal-gloss{
      display:block;

      margin-top:.32rem;

      font-family:var(--jp-body);

      font-size:.72rem;

      font-weight:600;

      line-height:1.25;

      letter-spacing:.055em;

      color:var(--shu);
    }


    /* KAMAE is the destination after revelation. */

    .aiki-seal-first{
      scroll-margin-top:
        calc(
          var(--header-h)
          + 32px
        );
    }


    @keyframes aiki-seal-arrive{

      from{
        opacity:0;

        transform:
          translateY(7px)
          scale(.97);
      }

      to{
        opacity:1;

        transform:none;
      }

    }


    /* =======================================================
       FINAL REVEAL CONTROL
       ======================================================= */

    .aiki-reveal-wrap{
      display:flex;

      justify-content:center;

      width:100%;

      margin:
        3.8rem
        0
        1.75rem;

      padding:
        2rem
        0
        .75rem;

      border-top:
        1px
        solid
        rgba(176,42,32,.20);
    }


    /*
       Rounded, seal-like control.

       The text means this cannot literally be circular,
       so the control uses a soft stamped cartouche rather
       than the previous hard rectangular UI box.
    */

    .aiki-reveal-button{
      appearance:none;
      -webkit-appearance:none;

      display:inline-flex;

      align-items:center;
      justify-content:center;

      min-height:3.65rem;

      padding:
        .92rem
        1.65rem
        .86rem;

      border:
        2px
        solid
        var(--shu);

      border-radius:999px;

      background:
        rgba(242,231,219,.34);

      box-shadow:
        inset
        0
        0
        0
        1px
        rgba(176,42,32,.13);

      color:
        var(--shu);

      font:inherit;

      font-size:.74rem;

      font-weight:700;

      line-height:1.2;

      letter-spacing:.13em;

      text-align:center;

      text-transform:uppercase;

      cursor:pointer;

      transition:
        background-color .18s ease,
        color .18s ease,
        transform .18s ease,
        opacity .18s ease;
    }


    .aiki-reveal-button:hover,
    .aiki-reveal-button:focus-visible{

      background:
        var(--shu);

      color:
        var(--folio);

      outline:none;

      transform:
        translateY(-1px);
    }


    .aiki-reveal-button:active{
      transform:
        translateY(1px);
    }


    .aiki-reveal-button.is-revealed{
      opacity:.66;
      cursor:default;
      transform:none;
    }


    /* -------------------------------------------------------
       MOBILE
       ------------------------------------------------------- */

    @media(max-width:759px){

      .aiki-seal{
        gap:.65rem;
      }


      .aiki-seal-stamp{
        min-width:3.55rem;
        min-height:3.55rem;

        padding:.42rem .48rem;
      }


      .aiki-seal-jp{
        font-size:1.45rem;
      }


      .aiki-seal-romaji{
        font-size:.82rem;
      }


      .aiki-seal-gloss{
        font-size:.68rem;
      }


      .aiki-reveal-wrap{
        margin-top:3rem;
      }


      .aiki-reveal-button{
        width:88%;

        max-width:21rem;

        padding-left:1rem;
        padding-right:1rem;
      }

    }


    /* -------------------------------------------------------
       DESKTOP
       ------------------------------------------------------- */

    @media(min-width:760px){

      .aiki-seal-stamp{
        min-width:4.15rem;
        min-height:4.15rem;
      }


      .aiki-seal-jp{
        font-size:1.7rem;
      }


      .aiki-seal-romaji{
        font-size:.92rem;
      }


      .aiki-seal-gloss{
        font-size:.74rem;
      }


      .aiki-reveal-button{
        min-width:21rem;
      }

    }


    /* -------------------------------------------------------
       ACCESSIBILITY
       ------------------------------------------------------- */

    @media(prefers-reduced-motion:reduce){

      body.aiki-imprint-revealed .aiki-seal{
        animation:none;
      }


      .aiki-reveal-button{
        transition:none;
      }

    }

  `;


  document.head.appendChild(style);



  /* =======================================================
     HELPERS
     ======================================================= */

  function sectionByEnglishTitle(title){

    return [
      ...document.querySelectorAll(".section")
    ].find(section =>

      section
        .querySelector(".section-title .sub")
        ?.textContent
        .trim()

      === title

    );

  }



  function getFinalEnglishGroup(){

    /*
       Put the reveal control at the genuine bottom of the
       complete Engi, not beneath the naming passage.

       This intentionally does not depend upon a particular
       final section title. If another section is added later,
       the button naturally moves to the new end.
    */

    const groups =
      [
        ...document.querySelectorAll(
          ".section .en-group"
        )
      ];


    return groups[
      groups.length - 1
    ] || null;

  }



  /* =======================================================
     ENHANCEMENT
     ======================================================= */

  function enhanceAikiImprint(){

    const battleSection =
      sectionByEnglishTitle(
        "Ichi-no-Tani"
      );


    if(!battleSection){
      return;
    }



    /*
       Each English narrative group in Ichi-no-Tani corresponds
       to one point subsequently recognized in the chain.

       Nothing is shown on the initial reading.
    */

    const battleGroups =
      [
        ...battleSection.querySelectorAll(
          ".en-group"
        )
      ];


    if(
      battleGroups.length
      <
      seals.length
    ){
      return;
    }



    seals.forEach(
      (
        sealData,
        index
      ) => {

        const group =
          battleGroups[index];


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
          `${sealData.romaji}: ${sealData.gloss}`
        );


        /*
           Only the kanji belongs inside the stamped border.

           Romaji and English interpretation sit outside it.
        */

        seal.innerHTML = `

          <span class="aiki-seal-stamp">

            <span class="aiki-seal-jp">
              ${sealData.jp}
            </span>

          </span>


          <span class="aiki-seal-copy">

            <span class="aiki-seal-romaji">
              ${sealData.romaji}
            </span>

            <span class="aiki-seal-gloss">
              ${sealData.gloss}
            </span>

          </span>

        `;


        group.prepend(
          seal
        );

      }
    );



    /* =====================================================
       REVEAL CONTROL AT THE END OF THE COMPLETE STORY
       ===================================================== */

    const finalEnglishGroup =
      getFinalEnglishGroup();


    if(!finalEnglishGroup){
      return;
    }


    const revealWrap =
      document.createElement(
        "div"
      );


    revealWrap.className =
      "aiki-reveal-wrap";


    const revealButton =
      document.createElement(
        "button"
      );


    revealButton.type =
      "button";


    revealButton.className =
      "aiki-reveal-button";


    revealButton.textContent =
      "SEE THE IMPRINT OF AIKI";


    revealButton.setAttribute(
      "aria-expanded",
      "false"
    );


    revealWrap.appendChild(
      revealButton
    );


    /*
       This is now appended after Yoshioka's final words.

       The reader therefore completes the entire Engi before
       being offered the second reading.
    */

    finalEnglishGroup.appendChild(
      revealWrap
    );



    /* =====================================================
       REVELATION
       ===================================================== */

    revealButton.addEventListener(
      "click",
      () => {

        if(
          document.body.classList.contains(
            "aiki-imprint-revealed"
          )
        ){
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


        revealButton.textContent =
          "AIKI IMPRINT REVEALED";


        const firstSeal =
          battleSection.querySelector(
            ".aiki-seal-first"
          );


        /*
           Give the browser one complete render cycle to expose
           the hidden seals before calculating the scroll target.
        */

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



  /* =======================================================
     START
     ======================================================= */

  if(
    document.readyState
    ===
    "loading"
  ){

    document.addEventListener(
      "DOMContentLoaded",
      enhanceAikiImprint,
      {
        once:true
      }
    );

  }

  else{

    requestAnimationFrame(
      enhanceAikiImprint
    );

  }

})();