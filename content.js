/* =========================================================
   SEITO-RYŪ CONTENT

   CANONICAL MODEL

   ENGLISH IS CANONICAL.

   Japanese is a translation of the English content in this
   file and should not contain additional narrative material.

   Each section contains:
   - jpTitle
   - enTitle
   - one continuous Japanese block
   - one English paragraph stream

   Ichi-no-Tani English paragraphs may contain:
   - seal: "KAMAE"
   - seal: "MA-AI"
   - etc.

   Layout and reveal behavior belong in index.html / styles.css.
   ========================================================= */


/* =========================================================
   AIKI IMPRINT DATA
   ========================================================= */

const aikiSeals = {

  KAMAE: {
    jp: "構え",
    romaji: "KAMAE",
    gloss: "READINESS / POSITION"
  },

  "MA-AI": {
    jp: "間合い",
    romaji: "MA-AI",
    gloss: "INTERVAL / RELATIONSHIP"
  },

  SEN: {
    jp: "先",
    romaji: "SEN",
    gloss: "INITIATIVE"
  },

  "TAI-SABAKI": {
    jp: "体捌き",
    romaji: "TAI-SABAKI",
    gloss: "BODY REPOSITIONING"
  },

  IRIMI: {
    jp: "入身",
    romaji: "IRIMI",
    gloss: "ENTRY"
  },

  SHIKAKU: {
    jp: "死角",
    romaji: "SHIKAKU",
    gloss: "DEAD ANGLE / POSITION OF ADVANTAGE"
  },

  ATEMI: {
    jp: "当身",
    romaji: "ATEMI",
    gloss: "DISRUPTIVE STRIKE"
  },

  KUZUSHI: {
    jp: "崩し",
    romaji: "KUZUSHI",
    gloss: "BREAKING STRUCTURE"
  },

  WAZA: {
    jp: "技",
    romaji: "WAZA",
    gloss: "TECHNIQUE / ARISING ACTION"
  },

  NAGE: {
    jp: "投げ",
    romaji: "NAGE",
    gloss: "THROW / DISPLACEMENT"
  }

};



/* =========================================================
   SECTIONS
   ========================================================= */

const sections = [


/* =========================================================
   ENGI
   ========================================================= */

{
  jpTitle: "聖都流縁起",
  enTitle: "Seito-ryū Engi – The Founding Lore",

  jp: `
聖都流は、二〇二六年、サウスカロライナ州チャールストンに設立された、形成途上にある武道校である。その創流における探究領域は武産合気であり、柔術と合気道という継承された技術体系を通してこれを探究する。本校はホーリー・シティ・ソサエティの庇護のもとに設立され、「聖都」という名はそこから取られている。
  `,

  en: [
    {
      text: "Seito-ryū is a martial school in formation, established in Charleston, South Carolina, in 2026. Its founding field of inquiry is Takemusu Aiki, investigated through the inherited technical bodies of Jujutsu and Aikidō. It is established under the patronage of the Holy City Society, from which the name Seito, 聖都, ‘Holy City,’ is taken."
    }
  ]
},



/* =========================================================
   SEPTEMBER 10
   ========================================================= */

{
  jpTitle: "二〇二六年九月十日",
  enTitle: "nobody, somewhere",

  jp: `
それは一週間ほど前、ごく普通の理由から始まった。私はもう一度稽古をしたかった。失っていたものを取り戻したかった。つまり、身体の可動性を完全に取り戻し、自分が知っていた合気とのつながりを新たにしたかったのである。私は馬にも乗る。だから、もし落馬したときには、身体に受身の仕方を思い出してほしかった。古い本を引っぱり出した。少しずつ記憶が戻り、やがて私は、自分がどう稽古したいのか、どう稽古する必要があるのかを考えるようになった。そんなふうに稽古できる場所はどこにあるのか。自分が流派を組織することまで考えるとは思っていなかった。

それまで、真剣に決着をつける必要のなかった問いが一つあった。もし自分が稽古の場を立ち上げるのなら、私はいったいどの系譜を受け取っているのか。

よく知られた部分は知っていた。植芝盛平は武田惣角に学び、その惣角の背後には、大東流がさらに古い源氏の継承を受け継ぐという伝承があった。古い名は以前から耳にしていたが、それぞれが頭の中ではっきり分かれてはいなかった。その週、私は初めて本気で気になった。

祈りの最中、その問いがまた戻ってきた。中世の源氏に遡るとされる武術が、どのようにして惣角がやがて植芝に教える大東流になったのか。

ほとんどの人はもう帰っていた。私は残っていた。しばらくして、一人の老人も残っていることに気づいた。前にも目には入っていたのだろうが、本当に意識してはいなかった。ただ静かにそこにいて、特に急いで行く場所などないように見えた。

やがて彼はこちらを見て、どこから来たのか、そして何を考えているのかと尋ねた。

「サウスカロライナ州チャールストンです。ええと、系譜のことを」と私は言った。「合気道をご存じですか。どこで稽古するか考えているところなんです」

「ホーリー・シティか」と彼はうなずいた。「多くの人は新羅三郎源義光から話を始める」

「!?」

「名前は知っています」と私は言った。「それ以上は、あまり」

「そこが古い柔術の継承の始まりだ。大東流の伝承では、その名そのものも、大東三郎として記憶される義光へ遡る。だが、それは物語の半分にすぎない」

私がそれを知らないことを、彼は少し面白がっているようだった。

「ほら……もう少し後のことだ……源平合戦の頃……」

「そうだ……思い出した」
  `,

  en: [
    {
      text: "It began about a week ago, for ordinary reasons. I wanted to practice again, to regain things I had lost. Namely, full mobility, and renew what I knew of Aiki. I also ride horses, so, if I come off, I want to remember how to fall. I got out the old books. Things began coming back to me, and before long I found myself contemplating how I want to train, how I need to train. where can I train like that? I had not expected to consider organizing a ryuha."
    },

    {
      text: "There was a question I had never had much reason to settle before. If I was going to establish a practice, what exactly was the lineage I was receiving?"
    },

    {
      text: "I knew the familiar part. Morihei Ueshiba studied under Takeda Sōkaku, and behind Sōkaku stood Daitō-ryū's claim to a much older Minamoto inheritance. I had heard the ancient names before, but they had never separated themselves clearly in my mind. That week, for the first time, I got really curious."
    },

    {
      text: "I was at prayers when the question returned. How had an art said to descend from the medieval Minamoto become the Daitō-ryū that Sōkaku eventually taught to Ueshiba?"
    },

    {
      text: "Most of the people had left. I stayed behind. After a while I realized that an elderly man stayed behind too. I noticed him earlier without really noticing him. He was simply there, quiet, as though there was nowhere in particular to be."
    },

    {
      text: "Eventually he looked over and asked where I came from, and what I was contemplating."
    },

    {
      text: "‘Charleston, SC. Uh, lineage,’ I said. ‘Do you know Aikidō? I’m thinking about where to train.’"
    },

    {
      text: "'The Holy City, he nodded. ‘A lot of people begin with Shinra Saburō Minamoto no Yoshimitsu.’"
    },

    {
      text: "‘!?’"
    },

    {
      text: "‘I know the name,’ I said. ‘Not much more than that.’"
    },

    {
      text: "‘That is where the old jūjutsu inheritance begins. The Daitō-ryū tradition traces its name itself to Yoshimitsu, remembered as Daitō Saburō. But that is only one half of the story.’"
    },

    {
      text: "He seemed amused that I did not know this."
    },

    {
      text: "‘You see…It was a bit later…during the Genpei War…’"
    },

    {
      text: "‘Yes..., I remember.’"
    }
  ]
},



/* =========================================================
   YOSHIMITSU
   ========================================================= */

{
  jpTitle: "義光と武の継承",
  enTitle: "Yoshimitsu and the Martial Inheritance",

  jp: `
「誰も合気を一つの武術の名として考えるよりずっと前から、源氏はすでに苛烈な武の継承を持っていた。源義光はその始まり近くに立つ人物だ。そこから、打つこと、組むこと、関節を制すること、自らの均衡を保ち、相手の均衡を奪うことが伝わった。そうした方法は彼の子孫を通じて甲斐源氏へ、そしてその中の武田家へと伝わっていった。大東流の技術的な身体は、すでにそこにあった。強く、実際的だった」

「義光から三代ほど後、もう一つの教えが源氏の世界へ入ってきた。それは戦場から来たのではない。山から来たのだ……」
  `,

  en: [
    {
      text: "‘Long before anyone thought of Aiki as the name of an art, the Minamoto already possessed a leathal martial inheritance. Minamoto no Yoshimitsu stood near its beginning. From him came how to strike, grapple, control a joint, keep one’s balance and take another’s. Those methods passed through his descendants into the Kai-Genji, and among them into the house of Takeda. The technical body of Daitō-ryū was already there. Strong and practical."
    },

    {
      text: "‘Three generations after Yoshimitsu, another teaching entered the Minamoto world. It did not come from a battlefield. It came from a mountain…"
    }
  ]
},



/* =========================================================
   KURAMA
   ========================================================= */

{
  jpTitle: "鞍馬と法",
  enTitle: "Kurama and the Law",

  jp: `
「牛若丸という高貴な少年がいた。父は殺され、家は没落し、まだ若いうちに都の北にある鞍馬山へ送られた」

「そこで少年は、鞍馬僧正坊、鬼一法眼、大天狗のもとに入った。法眼は虎の巻、Tora no Maki Scroll の守り手だった……」

「そこにあったのは、技の目録よりも深い秘法だった。法とは、現実そのものに内在する秩序だ」

「そこには、こういう言葉があった。『法に従って見よ。そうすれば、ふさわしい働きは自ら現れる』」

「少年は十六歳頃に鞍馬を離れ、北の平泉へ向かった。そこで藤原秀衡が彼を保護した。彼はそこに六年間いた。それは重要だ。聖なる山で教えを受けることと、それを日々の暮らし、稽古、退屈、誇り、そして歳を重ねることの中で運び続けることは別のことだ。少年は比類なき武人へと成長した」

「そして一一八〇年、分裂していた源氏の諸家は戦によって引き寄せられた……若者は平泉から南へ下り、兄の頼朝に加わった。その頃には、もう別の名を持っていた……」

「源義経」
  `,

  en: [
    {
      text: "‘There was a noble youth called Ushiwakamaru. His father had been killed, his house had fallen, and while still young he was sent to Mount Kurama north of the capital."
    },

    {
      text: "‘There the boy came under the instruction of Sojobo, the Great Tengu, Kiichi Hōgen, the keeper of the 虎の巻, Tora no Maki Scroll…"
    },

    {
      text: "‘It taught a secret law deeper than a catalogue of techniques. The Law is the order inherent in reality."
    },

    {
      text: "‘There was a saying from this: “See according to the Law, and the appropriate action will reveal itself.”"
    },

    {
      text: "‘The boy left Kurama at about sixteen and went north to Hiraizumi, where Fujiwara no Hidehira gave him protection. He stayed there for six years. That matters. A teaching received on a sacred mountain is one thing. Carrying it through ordinary days, through training, boredom, and pride, and growing older, is another. The boy became a peerless warrior."
    },

    {
      text: "‘Then, in 1180, the divided Minamoto houses were drawn together by war…and the young man rode south from Hiraizumi to join his elder brother Yoritomo. By then he had another name…"
    },

    {
      text: "‘Minamoto no Yoshitsune."
    }
  ]
},



/* =========================================================
   YOSHITSUNE LEARNS TO SEE
   ========================================================= */

{
  jpTitle: "義経は見ることを学ぶ",
  enTitle: "Yoshitsune Learns to See",

  jp: `
「義経が伝説になるのは、他の者には見えない可能性を見るからだ。地形は機会になる。敵の予測は弱点になる。不可能だと思われていた道こそ、まさに進む価値のある道となる。そして関係そのものを変えられるなら、力に必ずしも正面から対抗する必要はない」

「これは単なる戦略ではなかった。鞍馬で出会った法の、生成的な表現だった。義経は、あらかじめ決められた答えの中から一つを選ぶだけではない。彼は場全体を見る。地形、時機、予測、力、動き、心理、関係、そして機会。法に従って見よ。そうすれば、ふさわしい働きは自ら現れる」

「後世の人々は、義経を単なる剣士としてではなく、完全な武人の像として記憶することになる。馬と弓、刃と組討、戦略と指揮、地形、欺き、時機、そして人を治めること。無数の家と流派が、その継承の一部を運ぶことになる。残ったものもあれば、他の伝統へ溶け込んだものもあり、完全に消えたものもある」
  `,

  en: [
    {
      text: "‘Yoshitsune becomes legendary because he sees possibilities others do not. Terrain becomes opportunity. Enemy expectation becomes vulnerability. The route believed impossible becomes precisely the route worth taking, and force need not always be opposed if the relationship itself can be changed."
    },

    {
      text: "‘This was not merely strategy. It was the generative expression of the Law he encountered at Kurama. Yoshitsune did not simply select from predetermined answers. He perceived the whole field: terrain, timing, expectation, force, movement, psychology, relationship, and opportunity. See according to the Law, and the appropriate action will reveal itself."
    },

    {
      text: "‘Later generations would remember Yoshitsune not merely as a swordsman, but as an image of the complete warrior: horse and bow, blade and grappling, strategy and command, terrain, deception, timing, and the governance of men. Countless houses and ryūha would carry pieces of that inheritance. Some endured. Some merged into other traditions. Some disappeared entirely."
    }
  ]
},



/* =========================================================
   CAMPAIGN
   ========================================================= */

{
  jpTitle: "戦陣による伝承",
  enTitle: "Campaign as Transmission",

  jp: `
「義経はこれらの者たちと、戦という坩堝の中で暮らし、ともに軍を進めた。彼らは計画し、稽古し、戦い、適応し、生き残り、そしてまた戦った。指揮官は指揮官から学び、異なる家に属する方法が戦場と稽古の場で交わった。失敗には代償があった。働いたものは記憶され、磨かれ、伝えられた」

「源氏の軍勢そのものが、伝承の環境となった。四年間、稽古は軍陣という条件の中で生きられた。一一八四年までに、その編成は試金石へ到達した」

「義経は、その見方から働くことを身につけていた。他の者たちも彼とともに働いた。彼の直弟子たちは、その最小編成の規模にちなみ、『殊なる勇士七十余騎』と呼ばれた。実際にはさらに多かったことだろう。そして彼の近しい内輪には、十二人の『相従ふ輩』、すなわち源氏の指揮官であり、彼の親族でもある者たちがいた」

「四年間、軍陣が彼らの試験場だった」

「そして一ノ谷が来た」
  `,

  en: [
    {
      text: "‘Yoshitsune lived and campaigned with these men inside the crucible of war. They planned, trained, fought, adapted, survived, and fought again. Commanders learned from commanders; methods belonging to different houses met in the field and practice. What failed carried consequences. What worked was remembered, refined, and passed on."
    },

    {
      text: "‘The Minamoto host itself became the environment of transmission. For four years, the practice was lived under campaign conditions. By 1184, that formation had reached its proving ground."
    },

    {
      text: "‘Yoshitsune had learned to operate from that way of seeing. Others operated with him. His direct students were called the (Japanese) Seventy Distinguished Warriors, from the size of their minimum formation, though there were doubtless more; his close inner circle consisted of the twelve Aishitagau Yakara (Japanese), the Minamoto commanders."
    },

    {
      text: "‘For four years, campaign had been their testing ground."
    },

    {
      text: "‘Then came Ichi-no-Tani."
    }
  ]
},



/* =========================================================
   ICHI-NO-TANI
   ========================================================= */

{
  jpTitle: "一ノ谷",
  enTitle: "Ichi-no-Tani",

  jp: `
「平氏は海と山にはさまれた強固な陣を占めている。その防御は、軍勢が来ると予想される進路へ向けられている。海岸は戦場を狭める。道は監視できる。背後には山が城壁のように立ち上がる」

「源範頼は正面軍を受け持つ。義経は後方を受け持つ」

「その下に相従ふ輩がいる」

「正面には七人の名がある」

「武田信義、加賀美遠光、その子の小笠原長清、一条忠頼、板垣兼信、武田有義、そして石和信光」

「義経とともに後方の側面にいるのは五人」

「安田義定、田代信綱、大内惟義、中原親能、そして佐原十郎義連。一説には三浦義連ともいう」

「眼前にあるのは一ノ谷。海、道、山、そして敵の戦力。それらが合わさって、両軍の間にある現実を定めている。険しい背後の地形は、騎馬による侵入を排除しているように見える。平氏にとって、背後は山に守られている」

「源氏は正面の進路で交戦を始める。平氏は予想していたものを見て、当然そのように応じる。兵は持ち場へ走る。弓は向きを変える。槍が集まる。注意は狭まっていく」

「だが義経は、平氏が用意した戦場を受け入れない。彼らの防御が除外していた可能性に働きかけることで、主導を取る。山そのものが進路になる」

「そう……多くの者が知るように、十二人の相従ふ輩のうち五人には、来る戦いでそれぞれ個別の役割が与えられた。板垣兼信と武田有義は、正面の甲斐源氏指揮に残る。安田義定は後方の指揮を保つ。大内惟義と中原親能は、幕僚として義経の側に残る。七人が残る。我らが武田信義、加賀美遠光、小笠原長清、一条忠頼、石和信光、田代信綱、そして佐原十郎義連」

「その七人こそ、これまで認められてこなかった非凡な隊長たちだ。それぞれが九騎を伴う。十騎ずつ七組……七十余騎が義経の周囲に集う。古い記録は彼らを『殊なる勇士七十余騎』と記憶する」

「源氏軍は、正面の線へただ兵力を足すだけではない。義経と田代信綱は、準備された防御を回り込む運動を構想する」

「寅の刻！　虎の刻だ。義経と七十余騎は鵯越へ向かう。彼らは崖際へ出る。斜面は急だ。鎧は重い。だが、馬は勇敢な動物だ」

「そこで彼らは騎り下る」

「騎馬の分遣隊は、平氏が通行不能とみなしていた背後の進路を貫き、防御空間へ後方から侵入する」

「これで戦場の優位を得た。義経の軍勢は平氏の後背を見下ろす高所に位置を取り、そこは攻撃に対して無防備である」

「下では、源氏による正面への圧力が続いている。そこへ背後が爆発する。叫び。騎馬。そこにはあり得ないはずだった攻撃。突然の襲撃が防御体系全体を衝撃する。兵たちは、正面から危険が迫り続ける中で、背後にも応じなければならない」

「注意は分かれる。安全だった背後は、もう安全ではない。結束が崩れる。防御はその一体性を失う」

「義経は崩れた平氏の隊形へ押し込む。平氏が秩序を回復する前に、その開きを利用する」

「陣地は崩れる。平氏は準備していた防御から押し出され、崩壊は退却と潰走へ変わる。速やかに！」
  `,

  en: [

    {
      seal: "KAMAE",
      text: "‘The Taira hold a strong position between sea and mountain. Their defense is toward the approaches an army is expected to use. The coast narrows the field. The roads can be watched. Behind them the mountain rises like a fortress wall."
    },

    {
      text: "‘Minamoto no Noriyori holds the main front. Yoshitsune holds the rear."
    },

    {
      text: "‘Under them are the Aishitagau Yakara."
    },

    {
      text: "‘Seven are named in the front:"
    },

    {
      text: "‘Takeda Nobuyoshi, Kagami Tōmitsu, and his son Ogasawara Nagakiyo, Ichijō Tadayori, Itagaki Kanenobu, Takeda Ariyoshi, and Isawa Nobumitsu."
    },

    {
      text: "‘Five are in the rear flank with Yoshitsune:"
    },

    {
      text: "‘Yasuda Yoshisada, Tashiro Nobutsuna, Ōuchi Koreyoshi, Nakahara Chikayoshi, and Sahara Jūrō Yoshitsura, some call Miura Yoshitsura."
    },

    {
      seal: "MA-AI",
      text: "‘Before them lies Ichi-no-Tani: sea, roads, mountain, and enemy strength. Together they define the reality between the armies. The steep rear terrain seems to exclude mounted entry. To the Taira, their back is covered by the mountain."
    },

    {
      text: "‘The front approaches are engaged by the Minamoto. The Taira see what they expect to see, and naturally they answer it. Men run to their stations. Bows turn. Spears gather. Attention narrows."
    },

    {
      seal: "SEN",
      text: "‘But Yoshitsune does not accept the field the Taira prepared for him. He takes the initiative by acting on a possibility their defense has excluded. The mountain itself becomes the approach."
    },

    {
      text: "‘So...many know, five of the twelve Aishitagau Yakara were assigned individual roles in the coming battle. Itagaki Kanenobu and Takeda Ariyoshi remain with the Kai-Genji command at the front. Yasuda Yoshisada holds the rear command. Ōuchi Koreyoshi and Nakahara Chikayoshi remain with Yoshitsune as aides-de-camp. Seven remain: Our man, Takeda Nobuyoshi, Kagami Tōmitsu, Ogasawara Nagakiyo, Ichijō Tadayori, Isawa Nobumitsu, Tashiro Nobutsuna, and Sahara Jūrō Yoshitsura."
    },

    {
      text: "‘Those seven are the unrecognized captains of the extraordinary. Each brings nine mounted men. Seven groups of ten… seventy some ods riders gathered around Yoshitsune. The old record remembers the 殊なる勇士七十余騎, kotonaru yūshi nanajū-yo-ki."
    },

    {
      seal: "TAI-SABAKI",
      text: "‘The Minamoto host doesn't merely add more forces to the front line. Yoshitsune and Tashiro Nobutsuna concieve a movement around the prepared defense."
    },

    {
      text: "‘Tora no koku! The Hour of the Tiger. Yoshitsune and the seventy move toward Hiyodorigoe. They come to the edge. The slope is steep. Armor is heavy. But, horses are brave animals."
    },

    {
      seal: "IRIMI",
      text: "‘So they ride."
    },

    {
      text: "‘The mounted detachment penetrates through the rear approach the Taira have treated as impassable and enters the defensive space from behind."
    },

    {
      seal: "SHIKAKU",
      text: "‘Now, they have field advantage. Yoshitsune’s force establishes itself high above the Taira’s rear position from which attack is undefended."
    },

    {
      seal: "ATEMI",
      text: "‘Below them, the Minamoto pressure on the front continues. Then the rear erupts. Shouting. Riders. Attack where there could be none. The sudden assault shocks the whole defensive system. Men must answer behind them while danger still presses in front."
    },

    {
      seal: "KUZUSHI",
      text: "‘Attention divides. The secure rear is no longer secure. Cohesion breaks. The defense loses its integrity."
    },

    {
      seal: "WAZA",
      text: "‘Yoshitsune presses into the broken Taira formations. The opening is exploited before the Taira can restore their order "
    },

    {
      seal: "NAGE",
      text: "‘The position gives way. The Taira are displaced from the defense they had prepared, and collapse becomes withdrawal and flight. Quickly!"
    }

  ]
},



/* =========================================================
   SEEING AIKI
   ========================================================= */

{
  jpTitle: "合気を見る",
  enTitle: "Seeing Aiki",

  jp: `
彼は身を引いた。

「あとになって……土埃が収まってから……合気が見えるようになる」

「構え。間合い。先。体捌き。入身。死角。当身。崩し。技。投げ」

彼は間を置いた。

「そして、そのすべてを通して合気を探せ」

「生きた遭遇がその姿を現したあとで、はじめてその型を認識する」

「四年間、軍陣が彼らの試験場だった。戦場が免許を与えた」
  `,

  en: [
    {
      text: "He sat back."
    },

    {
      text: "‘Only afterward… when the dust settles… can the Aiki be seen."
    },

    {
      class: "sequence",
      text: "‘Kamae. Ma-ai. Sen. Tai-sabaki. Irimi. Shikaku. Atemi. Kuzushi. Waza. Nage.’"
    },

    {
      text: "He paused."
    },

    {
      text: ""
    },

    {
      class: "closing",
      text: "‘And through all of it, find Aiki."
    },

    {
      text: "‘You recognize the pattern after the living encounter has revealed it."
    },

    {
      text: "‘For four years, campaign had been their testing ground. The battlefield gave the menkyo."
    }
  ]
},



/* =========================================================
   TWO INHERITANCES
   ========================================================= */

{
  jpTitle: "二つの継承が出会う",
  enTitle: "The Two Inheritances Meet",

  jp: `
「そしてそこで……二つの継承が出会った。大東流の柔術は義光を通って来た。義経を通して、合気が武田の継承へ入った。武田信義はその両方を受け取り、保存し、先へ運んだ」

「だが、義経の教えは全体のまま残らなかった。継承は異なる家と流派を通って移り、それぞれが事情に応じて必要なものを保存した。小笠原は武人の形を伝えた。礼法、弓術、弓馬術、身体、弓、馬、そして正しい関係。武田本流はより大きな戦の術を継承し、それは後世、武田信玄と武田流へつながった。そして大東流は、武田家の個人戦闘の継承を運び続けた」
  `,

  en: [
    {
      text: "‘And there… the two inheritances met. The jūjutsu of Daitō-ryū had come through Yoshimitsu. Through Yoshitsune, Aiki entered the inheritance of Takeda. Takeda Nobuyoshi received both, preserved them, and carried them forward."
    },

    {
      text: "‘But Yoshitsune's teachings did not remain whole. The inheritance moved through different houses and ryūha, each preserving what circumstance required. Ogasawara carried the warrior’s form: reihō, kyūjutsu, and kyūbajutsu, body, bow, horse, and right relationship. Main branch Takeda continued the larger art of war, which in later generations gave rise to Takeda Shingen and Takeda-ryū. And Daitō-ryū carried forward the personal combat inheritance of the Takeda house."
    },

    {
      text: ""
    }
  ]
},



/* =========================================================
   AIZU
   ========================================================= */

{
  jpTitle: "会津へ",
  enTitle: "Into Aizu",

  jp: `
「大東流は武田の代々を通り、やがて会津へ入った。そこで武術を取り巻く世界が変わった。開かれた戦場は城となった。鎧は礼装へ変わった。丘は廊下や座敷になった。男は武器を帯びていることもあれば、抜くことを禁じられていることもある。礼法が距離を支配した。技術的には巧みな行為であっても、政治的には惨事になり得た」

「だから、古い問題は小さくなったが、単純にはならなかった。かつて丘と軍勢の間で測られていたものが、二人の身体の間の空間へ圧縮された。鞍馬は見る方法を教えた。一ノ谷は、それを軍勢の規模で示した。会津で大東流は、それを二つの身体の狭い間へ押し込み、後に合気と呼ばれる働きがそこで磨かれた」

「そして会津の武田惣角が現れた。彼を通じて、大東流は近代日本へ入った。惣角は恐るべき技術体系を持っていたが、大東流の内部では、合気という言葉がそのより深い働きを区別するようになった」
  `,

  en: [
    {
      text: "‘Daitō-ryū passed through the Takeda generations and, in time, into Aizu. There the world around the art changed. The open battlefield became the castle. Armor gave way to formal clothing. Hills became corridors and chambers. A man might be armed, or forbidden to draw at all. Etiquette governed distance. A technically skillful act could still become a political disaster."
    },

    {
      text: "‘So the old problem became smaller without becoming simpler. What had once been measured across hills and formations was compressed into the space between two people. Kurama had taught a way of seeing. Ichi-no-Tani had shown it across an army. In Aizu, Daitō-ryū pressed it into the narrow interval between two bodies, and the operation later called Aiki was refined there."
    },

    {
      text: "‘Then came Takeda Sōkaku of Aizu. Through him, Daitō-ryū entered modern Japan. Sōkaku had a formidable technical body, but within Daitō-ryū the word aiki came to distinguish its deeper operation."
    }
  ]
},



/* =========================================================
   SOKAKU TO UESHIBA
   ========================================================= */

{
  jpTitle: "惣角から植芝へ",
  enTitle: "From Sōkaku to Ueshiba",

  jp: `
「惣角の最も重要な弟子の一人が植芝盛平だった。一九二二年、惣角が植芝の住んでいた綾部で教えた頃には、その区別は現存する呼称に現れるほど明確になっていた。大東流合気柔術」

「植芝は合気をさらに先へ運んだ。彼は、合気を単に技をより優れて行う方法として満足しなかった。成熟した理解の中で、彼はこれを武産合気、Takemusu Aiki、生成する合気と呼んだ」

合気は技を磨くだけではない。その最高の働きにおいて、合気は技を生む。
  `,

  en: [
    {
      text: "‘Among Sōkaku’s most important students was Morihei Ueshiba. By the time Sōkaku taught at Ayabe in 1922, where Ueshiba was living, the distinction was explicit enough to appear in surviving terminology: Daitō-ryū Aiki-jūjutsu."
    },

    {
      text: "‘Ueshiba carried aiki farther. He did not remain satisfied with aiki as merely a superior way to perform a technique. In his mature understanding, he called this 武産合気, Takemusu Aiki, generative aiki."
    },

    {
      class: "closing",
      text: " Aiki does not merely polish technique. At its highest operation, aiki gives birth to technique."
    }
  ]
},



/* =========================================================
   TAKEMUSU AIKI
   ========================================================= */

{
  jpTitle: "武産合気と合気実験場",
  enTitle: "Takemusu Aiki and the Aiki Jikkenjō",

  jp: `
「この物語こそ、君の問いへの正しい答えであり、君がどう応じるべきかを定める」

「だが、もし君の目的が本当に武産合気なら、稽古はいつまでも、問いが発せられる前からすべての答えが分かっている世界に留まることはできない」

「源氏には、そのような不確実性を作り出す必要はなかった。戦が十分以上に与えていた。彼らの戦場は試験だった。現実で、容赦がなく、絶対的だった。……それを合気実験場、Aiki Jikkenjō と呼ぼう」

「武産合気を主題とする新しい流派を興すべきだ」

「だから、君の夢の学校にとっての問いは、合気がもう一度、技を生み出すことのできる条件を作れるかどうかだ……」

「知る者は少ないが、君の大先生はこのことをかなりよく知っていた」
  `,

  en: [
    {
      text: "‘This story, the right answer to your question, dictates your response. "
    },

    {
      text: "‘But if your object is truly Takemusu Aiki, practice cannot remain forever in a world where every answer is known before the question is asked."
    },

    {
      class: "sequence",
      text: "‘The Minamoto did not need to create such uncertainty. War gave them more than enough. Their battlefield was a test, real, unforgiving and absolute. Let's call it... the 合気実験場, Aiki Jikkenjō."
    },

    {
      class: "closing",
      text: "‘You should form a new ryuha with Takemusu Aiki as the subject."
    },

    {
      text: "‘So the question for your dream school is whether conditions can be created in which aiki once again gives birth to technique… …’"
    },

    {
      text: "‘You know, Ōsensei knew quite a bit about all this and he would love it arising from the Holy City school.’"
    }
  ]
},



/* =========================================================
   RETURN
   ========================================================= */

{
  jpTitle: "帰還",
  enTitle: "Return",

  jp: `
一瞬、自分がどこにいるのかを忘れていた。私はまったく別の場所へ行っていた。義光から鞍馬へ、鞍馬から源平合戦へ、一ノ谷の斜面を下り、源氏の離散を経て会津へ入り、そこから惣角、植芝、武産合気へ。老人は一度も書き物を見ず、名前を探すこともなく、一度も糸を失わずに語った。

気づいたときには、老人はもうゆっくりと扉へ向かっていた。

「すみません」と私は呼びかけた。「お名前は？」

「吉岡だ」

「新しい道場、うまくやりなさいよ、若いの！」
  `,

  en: [
    {
      text: "For a moment I forgot where I was. I was somewhere else entirely. I had followed him from Yoshimitsu to Kurama, from Kurama into the Genpei War, down the slope at Ichi-no-Tani, through the scattering of the Minamoto, into Aizu, then forward to Sōkaku, Ueshiba, and Takemusu Aiki. He spoke without notes, without searching for a name, without losing the thread once."
    },

    {
      text: "By the time I noticed, the old man was already making his way slowly toward the door."
    },

    {
      text: "‘Excuse me sir,’ I called. ‘What's your name?’"
    },

    {
      text: ""
    },

    {
      text: "‘I’m Yoshioka.’"
    },

    {
      text: "‘Good luck with your new school, son!’"
    }
  ],

  revealAikiImprint: true
}

];