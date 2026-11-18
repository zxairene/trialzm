
/* ==================================
   HER VOICE — WEBSITE JAVASCRIPT
================================== */

// PAGE ELEMENTS

const coverScreen = document.getElementById("coverScreen");
const archiveScreen = document.getElementById("archiveScreen");
const dashboardScreen = document.getElementById("dashboardScreen");

let currentFile = null;


// ==================================
// CONTENT FOR ALL SIX ARCHIVE FILES
// ==================================

const files = {

  movement: {
    title: "THE MOVEMENT",
    subtitle: "HER STORY. HER POWER.",
    symbol: "♀",

    infoTitle: "WHAT IS FEMINISM?",

    info: "Feminism is a social, political, and economic movement that advocates for equality between women and men. It challenges discrimination, unequal opportunities, and systems that have limited women's freedom and participation in society.",

    left: "Throughout history, women have experienced unequal treatment in education, employment, leadership, and decision-making. Feminism emerged to challenge these inequalities and demand that women receive the same rights, respect, and opportunities as everyone else. It encourages society to recognize unfair practices and work toward meaningful change.",

    right: "Feminism is not about making women superior to men. It is about creating a fair society where every person can make choices, express opinions, pursue ambitions, and live without discrimination based on gender. It recognizes that equality benefits individuals, families, communities, and society as a whole.",

    article: "https://www.globalmediajournal.com/open-access/feminism-understanding-the-movement-and-its-impact.php?aid=95399",

    cards: [

      {
        icon: "♀",
        title: "Understanding Feminism",
        text: "Feminism is the belief that women and men should have equal rights, responsibilities, and opportunities. It recognizes that gender inequality can exist in social institutions, workplaces, families, education, and government. Feminism works to identify and challenge these inequalities so that individuals are not limited by traditional expectations about gender."
      },

      {
        icon: "✊",
        title: "The Main Goals",
        text: "The movement advocates for equal opportunities, fair treatment, freedom of expression, access to education, economic independence, political participation, and protection from gender-based discrimination and violence. Its broader goal is to create a society where people can develop their abilities and pursue their ambitions without unfair barriers."
      },

      {
        icon: "⌛",
        title: "The Evolution",
        text: "Feminism has developed through different periods of activism. Earlier movements focused strongly on legal rights and voting. Later movements addressed workplace inequality, discrimination, representation, and the different experiences of women from different backgrounds. Today, feminist discussions continue to evolve as society faces new challenges."
      },

      {
        icon: "♡",
        title: "Its Impact on Society",
        text: "Feminist advocacy has contributed to conversations and reforms concerning education, employment, political participation, legal protection, and social expectations. It has encouraged people to question unfair practices and recognize women's contributions. The movement continues to inspire individuals and communities to work toward fairness and equal opportunities."
      }

    ]
  },


  rights: {
    title: "HER RIGHTS",
    subtitle: "EQUALITY IS A HUMAN RIGHT.",
    symbol: "⚖",

    infoTitle: "WOMEN DESERVE EQUALITY",

    info: "Women's rights are human rights. Every woman and girl deserves dignity, freedom, equal opportunities, safety, and the ability to participate fully in society. These rights should not depend on a person's gender, background, or social status.",

    left: "Women's rights include access to education, healthcare, fair employment, equal pay, political participation, freedom of expression, and protection against discrimination and violence. These rights allow women to make decisions about their lives and contribute to their communities. Respecting these rights also means recognizing that women deserve to be heard, represented, and treated fairly in every part of society.",

    right: "Although important progress has been made, barriers still exist in many parts of the world. Gender stereotypes, unequal opportunities, and discrimination continue to affect women and girls. Understanding women's rights helps people recognize inequality, challenge harmful practices, and support a society where women can live with dignity, freedom, and equal opportunities.",

    article: "https://www.unwomen.org/en/articles/explainer/what-is-feminism",

    cards: [

      {
        icon: "✎",
        title: "Right to Education",
        text: "Every girl and woman deserves access to quality education without discrimination. Education gives women the knowledge, confidence, and skills to pursue their goals, participate in society, and make informed decisions about their future. Equal access to education also helps reduce poverty and creates more opportunities for future generations."
      },

      {
        icon: "⚖",
        title: "Equal Opportunities",
        text: "Women deserve fair access to jobs, leadership positions, professional development, and economic opportunities. Their abilities and qualifications should be recognized without discrimination based on gender. Equal opportunities allow women to contribute their talents and become financially independent."
      },

      {
        icon: "♡",
        title: "Right to Safety",
        text: "Every woman and girl has the right to live free from harassment, abuse, exploitation, discrimination, and violence. Communities and institutions have a responsibility to promote safety, protection, and access to appropriate support. Every individual deserves to feel secure and respected in public and private spaces."
      },

      {
        icon: "✊",
        title: "Right to Participate",
        text: "Women have the right to express their opinions, vote, participate in public life, and contribute to decisions that affect their communities and countries. Their voices and experiences deserve to be represented and respected. Women's participation in leadership and decision-making helps create more inclusive societies."
      }

    ]
  },


  history: {
    title: "THE HISTORY",
    subtitle: "REMEMBER THOSE WHO FOUGHT.",
    symbol: "⌛",

    infoTitle: "THE JOURNEY OF FEMINISM",

    info: "The history of feminism tells the story of generations of people who challenged unequal laws, traditions, and social expectations. Their collective efforts helped expand women's rights and opened opportunities for future generations.",

    left: "Early feminist movements questioned the belief that women should be excluded from education, political participation, and public life. Over time, activists organized campaigns and demanded changes in laws and social institutions. Their efforts helped bring attention to the importance of women's freedom and equality.",

    right: "Learning about the history of feminism helps us understand that equality was not achieved instantly. It developed through advocacy, education, collective action, and the determination of people who believed that women's rights deserved recognition. Their work reminds us that progress requires continued awareness and participation.",

    cards: [

      {
        icon: "01",
        title: "Early Feminist Ideas",
        text: "During the eighteenth and nineteenth centuries, writers and reformers began challenging traditional ideas about women's roles. They argued that women deserved education, legal recognition, independence, and the same opportunities to develop their abilities. These early ideas helped establish the foundations of organized feminist movements."
      },

      {
        icon: "02",
        title: "The Fight for Voting Rights",
        text: "The first wave of feminism focused heavily on women's suffrage and legal rights. Activists organized demonstrations, campaigns, and political movements to demand that women be allowed to vote and participate in government. Their efforts contributed to important changes in political representation in different countries."
      },

      {
        icon: "03",
        title: "Workplace and Social Equality",
        text: "Later feminist movements brought attention to unequal pay, employment discrimination, reproductive rights, family responsibilities, and the unequal expectations placed on women in everyday life. Activists also questioned social structures that limited women's independence and opportunities."
      },

      {
        icon: "04",
        title: "Modern Feminism",
        text: "Contemporary feminism recognizes that women experience inequality in different ways depending on factors such as race, class, disability, culture, and economic circumstances. It continues to advocate for inclusion, representation, safety, and equal rights. Modern discussions also highlight the importance of listening to diverse experiences."
      }

    ]
  },


  voices: {
    title: "HER VOICES",
    subtitle: "SHE SPOKE. THE WORLD LISTENED.",
    symbol: "✧",

    infoTitle: "WOMEN WHO MADE HISTORY",

    info: "Across different countries and generations, women have used their voices, knowledge, courage, and leadership to challenge injustice and improve the lives of others. Their contributions remind us that change can begin with one person who refuses to remain silent.",

    left: "Women have made important contributions to education, science, politics, humanitarian work, journalism, literature, and human rights advocacy. Many have worked to protect vulnerable communities and create opportunities for women and girls. Their dedication demonstrates that leadership and courage are not limited by gender.",

    right: "Recognizing women leaders is important because their stories challenge stereotypes about what women can achieve. Their work also inspires younger generations to become informed, confident, compassionate, and active members of their communities. Learning about their achievements reminds us that every voice has the potential to make a difference.",

    article: "https://www.rescue.org/uk/article/10-women-leaders-activists-and-campaigners-making-world-better-place",

    cards: [

      {
        icon: "✎",
        title: "Malala Yousafzai",
        text: "Malala is a Pakistani education activist who advocates for every girl's right to learn. She became internationally recognized for speaking about girls' education and later received the Nobel Peace Prize in 2014. Her story continues to inspire young people to recognize the importance of education and stand up for equal opportunities."
      },

      {
        icon: "♡",
        title: "Sara Mardini",
        text: "Sara is a Syrian former competitive swimmer, lifeguard, and humanitarian activist. She became known for her humanitarian work supporting refugees and people fleeing dangerous conditions. Her experiences brought attention to the struggles of displaced people and the importance of compassion and human dignity."
      },

      {
        icon: "✧",
        title: "Halima Aden",
        text: "Halima is a Somali-American model and activist who challenged barriers in the fashion industry. She has also used her platform to advocate for children's rights and raise awareness about refugees. Her work highlights the importance of representation and allowing individuals to express their identities."
      },

      {
        icon: "✊",
        title: "Nadia Murad",
        text: "Nadia is an Iraqi Yazidi human rights activist and Nobel Peace Prize laureate. She advocates for survivors of sexual violence and works to promote justice and support for communities affected by conflict. Her advocacy has helped bring international attention to the protection and dignity of survivors."
      }

    ]
  },


  action: {
    title: "THE REVOLUTION",
    subtitle: "CHANGE STARTS WITH US.",
    symbol: "✊",

    infoTitle: "BE PART OF THE CHANGE",

    info: "A more equal society is built through everyday choices, awareness, respect, and collective action. Supporting women's rights does not always require a large platform. Even small efforts can help challenge discrimination and encourage fairness.",

    left: "We can contribute to equality by listening to women's experiences, respecting their decisions, questioning harmful stereotypes, sharing reliable information, and treating everyone fairly. These actions can begin at home, in school, online, and in our communities. Every person has the ability to encourage a more respectful and inclusive environment.",

    right: "Creating change is a shared responsibility. When people recognize inequality and choose to respond with respect and understanding, they help build communities where women and girls can feel valued, protected, and empowered. A better future begins when equality becomes something we practice, not simply something we talk about.",

    cards: [

      {
        icon: "♡",
        title: "Speak Up",
        text: "Use your voice responsibly when you witness discrimination, unfair treatment, or harmful stereotypes. Speaking up respectfully can help others recognize problems that might otherwise be ignored. Supporting someone who experiences unfair treatment can also remind them that they are not alone."
      },

      {
        icon: "✿",
        title: "Spread Awareness",
        text: "Share accurate information about feminism, gender equality, and women's rights. Learning from reliable sources and encouraging meaningful conversations can help reduce misunderstandings. Education allows people to recognize discrimination and understand why equal rights matter."
      },

      {
        icon: "✊",
        title: "Support One Another",
        text: "Listen to women's experiences without dismissing them. Respect personal choices, celebrate achievements, and encourage equal opportunities for everyone. Supporting others means creating an environment where people can express themselves without fear of judgment or discrimination."
      },

      {
        icon: "∞",
        title: "Be an Ally",
        text: "Practice fairness and respect in everyday situations. Challenge unfair expectations, support inclusive environments, and help create spaces where every person has the opportunity to succeed. Equality becomes stronger when people work together and take responsibility for their actions."
      }

    ]
  },


  help: {
    title: "FOR HER — THE HELP",
    subtitle: "YOU ARE NOT ALONE.",
    symbol: "♡",

    infoTitle: "A HELPING HAND FOR HER",

    info: "Every woman and girl deserves to feel safe, respected, and supported. This section is a small directory of Philippine emergency and support contacts that may be useful when someone experiences danger, harassment, abuse, or needs immediate assistance.",

    left: "If you or someone you know is in immediate danger, move to a safer place if possible and contact emergency services or a trusted adult. You do not have to face a difficult situation alone. Reaching out for help is an important step. You may also approach a trusted family member, teacher, guidance counselor, barangay official, or another responsible adult.",

    right: "Keep important contact numbers accessible. If a situation involves violence, exploitation, or abuse, seek help from appropriate authorities, a trusted adult, or a local support organization. If it is unsafe to make a call, ask a trusted person to help you contact the appropriate service. Your safety and well-being matter.",

    cards: [

      {
        icon: "🚨",
        title: "National Emergency — 911",
        text: "The Philippines' National Emergency Hotline connects people to emergency response services for urgent police, fire, rescue, and medical situations. If you or someone else is in immediate danger, call 911.",
        phone: "911"
      },

      {
        icon: "💜",
        title: "PNP Women and Children Protection",
        text: "The Philippine National Police Women and Children Protection Center provides assistance and referrals concerning violence and abuse involving women and children. Aleng Pulis text hotline: 0919-777-7377 or 0966-725-5961.",
        phone: "0966-725-5961"
      },

      {
        icon: "♡",
        title: "DSWD Assistance",
        text: "The Department of Social Welfare and Development provides social welfare and protective assistance. Its published text hotline is 0918-912-2813. You may also contact the appropriate local social welfare office.",
        phone: "0918-912-2813"
      },

      {
        icon: "✿",
        title: "Makabata Helpline — 1383",
        text: "Makabata 1383 is a child protection reporting and assistance channel for children who need help or protection. It can also help connect child protection concerns to appropriate authorities.",
        phone: "1383"
      },

      {
        icon: "⚖",
        title: "NBI Anti-VAWC Division",
        text: "The National Bureau of Investigation's Anti-Violence Against Women and Children Division handles reports and concerns involving violence against women and children. Main contact: (02) 8525-6028.",
        phone: "(02) 8525-6028"
      }

    ]
  }

};


// ==================================
// PAGE TRANSITIONS
// ==================================

function showScreen(screen) {

  coverScreen.hidden = true;
  archiveScreen.hidden = true;
  dashboardScreen.hidden = true;

  screen.hidden = false;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ==================================
// OPEN AND BACK BUTTONS
// ==================================

document.getElementById("openButton").addEventListener("click", () => {
  showScreen(archiveScreen);
});

document.getElementById("backCover").addEventListener("click", () => {
  showScreen(coverScreen);
});

document.getElementById("backArchive").addEventListener("click", () => {
  showScreen(archiveScreen);
});


// ==================================
// OPEN AN ARCHIVE FOLDER
// ==================================

document.querySelectorAll(".folder").forEach(folder => {

  folder.addEventListener("click", () => {

    const fileName = folder.dataset.file;

    openFile(fileName);

  });

});


// ==================================
// LOAD INDIVIDUAL DASHBOARD
// ==================================

function openFile(fileName) {

  const file = files[fileName];

  if (!file) return;

  currentFile = fileName;

  document.getElementById("dashboardTitle").textContent = file.title;

  document.getElementById("dashboardSubtitle").textContent = file.subtitle;

  document.getElementById("heroSymbol").textContent = file.symbol;

  document.getElementById("heroInfoTitle").textContent = file.infoTitle;

  document.getElementById("heroInfoText").textContent = file.info;

  document.getElementById("infoLeft").textContent = file.left;

  document.getElementById("infoRight").textContent = file.right;

  document.getElementById("informationLabel").textContent =
    file.title + " / INFORMATION";

  // Show article button only when an article exists

  document.getElementById("readButton").hidden = !file.article;

  document.getElementById("readButtonTwo").hidden = !file.article;

  // Show WE LOVE YOU only in the help folder

  document.getElementById("weLoveYouButton").hidden =
    fileName !== "help";

  // Reset the dashboard

  document.getElementById("selectedDetail").hidden = true;

  document.getElementById("searchInput").value = "";

  renderCards(file.cards);

  showScreen(dashboardScreen);

}


// ==================================
// CREATE INTERACTIVE CARDS
// ==================================

function renderCards(cards) {

  const grid = document.getElementById("collectionGrid");

  grid.innerHTML = "";

  if (cards.length === 0) {

    grid.innerHTML = "<p class='empty-message'>No matching files found.</p>";

    return;

  }

  cards.forEach((card, index) => {

    const button = document.createElement("button");

    button.className = "collection-card";

    if (card.phone) {
      button.classList.add("emergency-card");
    }

    const number = document.createElement("span");
    number.className = "card-number";
    number.textContent = "FILE / " + String(index + 1).padStart(2, "0");

    const symbol = document.createElement("span");
    symbol.className = "card-symbol";
    symbol.textContent = card.icon;

    const title = document.createElement("strong");
    title.textContent = card.title;

    const arrow = document.createElement("span");
    arrow.className = "card-arrow";
    arrow.textContent = "↗";

    button.append(number, symbol, title, arrow);

    button.addEventListener("click", () => {
      showCardDetail(card);
    });

    grid.appendChild(button);

  });

}


// ==================================
// SHOW FULL CARD INFORMATION
// ==================================

function showCardDetail(card) {

  const detail = document.getElementById("selectedDetail");

  document.getElementById("detailTitle").textContent = card.title;

  document.getElementById("detailText").textContent = card.text;

  // Remove previous phone button

  const oldLink = document.getElementById("phoneLink");

  if (oldLink) {
    oldLink.remove();
  }

  // Add clickable phone number for help contacts

  if (card.phone) {

    const phoneLink = document.createElement("a");

    phoneLink.id = "phoneLink";

    phoneLink.href = "tel:" + card.phone.replace(/[^\d+]/g, "");

    phoneLink.className = "soft-button";

    phoneLink.textContent = "CALL " + card.phone;

    detail.appendChild(phoneLink);

  }

  detail.hidden = false;

  detail.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}


// ==================================
// CLOSE INFORMATION
// ==================================

document.getElementById("closeDetail").addEventListener("click", () => {

  document.getElementById("selectedDetail").hidden = true;

});


// ==================================
// EXTERNAL ARTICLE LINKS
// ==================================

function openArticle() {

  const file = files[currentFile];

  if (file && file.article) {

    window.open(
      file.article,
      "_blank",
      "noopener,noreferrer"
    );

  }

}

document.getElementById("readButton").addEventListener("click", openArticle);

document.getElementById("readButtonTwo").addEventListener("click", openArticle);


// ==================================
// WE LOVE YOU BUTTON
// ==================================

document.getElementById("weLoveYouButton").addEventListener("click", () => {

  window.open(
    "https://www.youtube.com/watch?v=bXBPvXikVNc",
    "_blank",
    "noopener,noreferrer"
  );

});


// ==================================
// DASHBOARD NAVIGATION
// ==================================

function navigateSection(section) {

  if (section === "overview") {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

  if (section === "topics") {

    document.getElementById("collectionPanel").scrollIntoView({
      behavior: "smooth"
    });

  }

  if (section === "about") {

    const file = files[currentFile];

    if (file) {
      showCardDetail(file.cards[0]);
    }

  }

  if (section === "action") {

    const file = files[currentFile];

    if (file) {

      const card = currentFile === "help"
        ? file.cards[0]
        : file.cards[file.cards.length - 1];

      showCardDetail(card);

    }

  }

}

document.querySelectorAll("[data-section]").forEach(button => {

  button.addEventListener("click", () => {

    navigateSection(button.dataset.section);

  });

});


// ==================================
// OTHER DASHBOARD BUTTONS
// ==================================

document.getElementById("exploreButton").addEventListener("click", () => {

  navigateSection("topics");

});

document.getElementById("scrollButton").addEventListener("click", () => {

  navigateSection("topics");

});

document.getElementById("dashboardLogo").addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ==================================
// SEARCH FUNCTION
// ==================================

document.getElementById("searchInput").addEventListener("input", event => {

  if (!currentFile) return;

  const search = event.target.value.toLowerCase();

  const filteredCards = files[currentFile].cards.filter(card => {

    return (
      card.title.toLowerCase().includes(search) ||
      card.text.toLowerCase().includes(search)
    );

  });

  renderCards(filteredCards);

});


// ==================================
// START WEBSITE
// ==================================

showScreen(coverScreen);
