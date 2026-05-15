import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const WORK_STUDIES = {

  'kwk-ops': {
    tag: 'Operations · Nonprofit',
    title: 'AI & technology strategy for Kode with Klossy',
    meta: [
      { label: 'My role',  value: 'Operations Intern' },
      { label: 'Timeline', value: 'January 2026 – Present' },
      { label: 'Team',     value: 'Kode with Klossy Operations' },
      { label: 'Methods',  value: 'AI Strategy · Airtable · Front · Logistics' },
    ],
    slides: [
      { type: 'placeholder', bg: '#E8EDE0', emoji: '⚙️', caption: 'The project' },
      { type: 'placeholder', bg: '#EDF4FB', emoji: '🤖', caption: 'AI strategy' },
      { type: 'placeholder', bg: '#F7E1C3', emoji: '📋', caption: 'Operations' },
      { type: 'placeholder', bg: '#EEF2F7', emoji: '📈', caption: 'Impact' },
    ],
    intro: 'Nonprofits don\'t have the luxury of wasted effort. At Kode with Klossy, I\'ve been figuring out how AI tools can do more of the operational heavy lifting — so the humans can focus on the mission.',
    stats: [
      { num: 'Clay', label: 'AI outreach tool evaluated' },
      { num: '2',    label: 'Platforms managed' },
      { num: '↑',    label: 'Outreach efficiency' },
    ],
    sections: [
      {
        label: 'The problem',
        heading: 'Outreach at scale is a systems problem.',
        body: 'Kode with Klossy reaches thousands of young women across the country. But grassroots outreach — the kind that actually builds community — doesn\'t scale automatically. I was brought in to think through how AI tools could extend the team\'s reach without losing the personal touch that makes the program work.',
        callout: '"The goal wasn\'t automation for its own sake. It was buying back time for the work that can\'t be automated."',
      },
      {
        label: 'What I did',
        heading: 'Evaluate, present, implement.',
        body: 'I led an AI and technology strategy project focused on enhancing grassroots outreach efficiency and nonprofit visibility. I researched and presented on the cost and effectiveness of tools like Clay, and drafted frameworks for outreach using Airtable. In parallel, I supervised technology management and scholar meals logistics interfaces.',
      },
      {
        label: 'What I learned',
        heading: 'The best tool is the one the team will actually use.',
        body: 'I came in with opinions about what tools would work. The team had constraints I hadn\'t anticipated — budget, training bandwidth, existing workflows. That gap between "technically optimal" and "practically adoptable" is something I think about in every product context now.',
      },
    ],
    prev: 'deloitte',
    next: 'sacm',
  },

  sacm: {
    tag: 'Wealth Management · AI',
    title: 'Platform evaluation & AI strategy at Service Academy Capital Management',
    meta: [
      { label: 'My role',  value: 'Summer Intern' },
      { label: 'Timeline', value: 'June – November 2025' },
      { label: 'Team',     value: 'Service Academy Capital Management' },
      { label: 'Methods',  value: 'Platform Evaluation · Executive Presentation · AI Strategy' },
    ],
    slides: [
      { type: 'placeholder', bg: '#F7E1C3', emoji: '📈', caption: 'The project' },
      { type: 'placeholder', bg: '#EDF4FB', emoji: '🔍', caption: 'Platform research' },
      { type: 'placeholder', bg: '#EEF2F7', emoji: '💼', caption: 'Executive findings' },
      { type: 'placeholder', bg: '#E8EDE0', emoji: '✅', caption: 'Outcomes' },
    ],
    intro: 'A 78% cost reduction isn\'t found — it\'s built. At SACM, I ran the research, facilitated the demos, and presented the findings that made it visible.',
    stats: [
      { num: '78%', label: 'Cost reduction identified' },
      { num: '2',   label: 'Platforms evaluated' },
      { num: '1',   label: 'Exec presentation delivered' },
    ],
    sections: [
      {
        label: 'The problem',
        heading: 'The firm\'s tools weren\'t keeping up with its ambitions.',
        body: 'Service Academy Capital Management needed to evaluate whether its current wealth management platforms were still the right fit. That meant getting into the weeds on Black Diamond and Advyzon, understanding the tradeoffs, and making a case to executive leadership.',
        callout: '"The 78% wasn\'t a rounding error. It was the difference between what they were paying and what they should have been."',
      },
      {
        label: 'What I did',
        heading: 'Research, demo, present, repeat.',
        body: 'I evaluated wealth management platforms including Black Diamond and Advyzon, facilitated live demos with firm members, and synthesized findings into a presentation for executive management. I also completed SACMGT training in core wealth management competencies.',
      },
      {
        label: 'What I learned',
        heading: 'Executive communication is its own skill.',
        body: 'Getting to a 78% cost reduction finding was the easy part. Getting leadership to act on it required translating technical platform comparisons into business terms, anticipating objections, and sequencing the argument carefully.',
      },
    ],
    prev: 'kwk-ops',
    next: 'civic',
  },

  civic: {
    tag: 'Civic Tech · Consulting',
    title: 'AAPI voter outreach & donor CRM infrastructure — Dot Movement Digital',
    meta: [
      { label: 'My role',  value: 'Summer Consultant' },
      { label: 'Timeline', value: 'May – August 2024' },
      { label: 'Team',     value: 'Dot Movement Digital & AAPI Victory Alliance' },
      { label: 'Methods',  value: 'Grant Research · CRM · Adobe Illustrator · Multimedia' },
    ],
    slides: [
      { type: 'placeholder', bg: '#F7E1C3', emoji: '🗳️', caption: 'Project overview' },
      { type: 'placeholder', bg: '#EEF2F7', emoji: '🔍', caption: 'Research' },
      { type: 'placeholder', bg: '#EDF4FB', emoji: '📋', caption: 'Deliverables' },
      { type: 'placeholder', bg: '#E8EDE0', emoji: '✅', caption: 'Impact' },
    ],
    intro: 'Civic engagement doesn\'t start with ballots — it starts with trust. At Dot Movement Digital, I worked on the infrastructure behind AAPI voter outreach.',
    stats: [
      { num: '500+', label: 'Donors organized in CRM' },
      { num: '3',    label: 'Grant sectors researched' },
      { num: '1',    label: 'Yahoo ad debuted at AAJA' },
    ],
    sections: [
      {
        label: 'The problem',
        heading: 'Civic infrastructure is invisible — until it breaks.',
        body: 'AAPI Victory Alliance had the mission and the momentum. What they needed was operational muscle: a donor database that actually worked, grant proposals that could compete, and outreach materials that spoke to the communities they were trying to reach.',
        callout: '"Voter outreach without infrastructure is just noise. We were building the signal."',
      },
      {
        label: 'What I did',
        heading: 'Research, build, ship — then do it again.',
        body: 'I conducted grant research across health, environment, and voter mobilization sectors. I worked with the Executive Director of AAPI Victory Alliance to organize a 500+ donor CRM database, redesigned curriculum materials using Adobe Illustrator, and produced a Yahoo advertisement that premiered at the AAJA conference.',
      },
      {
        label: 'What I learned',
        heading: 'Operational work is political work.',
        body: 'Every deliverable I touched was downstream of a larger question: whose voice gets amplified? This was where I learned that product thinking and civic impact aren\'t separate tracks.',
      },
    ],
    prev: 'sacm',
    next: 'thurman',
  },

  thurman: {
    tag: 'Policy · Legal Tech',
    title: 'EZ Merge: merger eligibility review app — Thurman Arnold Project',
    meta: [
      { label: 'My role',  value: 'Student Researcher' },
      { label: 'Timeline', value: 'October 2025 – Present' },
      { label: 'Team',     value: '6 student researchers + PI' },
      { label: 'Methods',  value: 'Regulatory Research · Web App Development · Policy Analysis' },
    ],
    slides: [
      { type: 'placeholder', bg: '#EEF2F7', emoji: '⚖️', caption: 'The project' },
      { type: 'placeholder', bg: '#EDF4FB', emoji: '🔍', caption: 'HSR research' },
      { type: 'placeholder', bg: '#F7E1C3', emoji: '💻', caption: 'EZ Merge app' },
      { type: 'placeholder', bg: '#E8EDE0', emoji: '🏛️', caption: 'NY AG presentation' },
    ],
    intro: 'Most merger reviews involve lawyers, spreadsheets, and a lot of back-and-forth. EZ Merge is our attempt to make that process legible.',
    stats: [
      { num: '$133.9M',  label: 'HSR threshold analyzed' },
      { num: '6',        label: 'Student researchers' },
      { num: 'May 2026', label: 'NY AG presentation' },
    ],
    sections: [
      {
        label: 'The problem',
        heading: 'Merger compliance is opaque — and that has consequences.',
        body: 'The Hart-Scott-Rodino Act requires parties to notify the FTC and DOJ before completing certain mergers. For smaller transactions, figuring out whether you even need to file is a complex, lawyer-dependent process with real costs.',
        callout: '"If the compliance process is only legible to expensive lawyers, it isn\'t really serving the public."',
      },
      {
        label: 'What I did',
        heading: 'Research the law. Build the tool. Present to the AG.',
        body: 'I conducted economic and regulatory research on HSR Act compliance for mergers under $133.9M, focusing on competitive effects in consumer-critical industries. I\'m helping develop EZ Merge — a web app that allows parties to submit merger transactions for eligibility review.',
      },
      {
        label: 'What I learned',
        heading: 'Good policy tools are also good UX problems.',
        body: 'Building EZ Merge forced me to think about regulatory compliance as a user experience. The questions sound like product questions because they are. The law is the constraint; clarity is the design goal.',
      },
    ],
    prev: 'civic',
    next: 'ub-neural',
  },

  'ub-neural': {
    tag: 'Research · Machine Learning',
    title: 'Neural network action prediction using ATARI-Head eye gaze data',
    meta: [
      { label: 'My role',  value: 'Student Researcher' },
      { label: 'Timeline', value: '2022 – 2024' },
      { label: 'Team',     value: 'Esfahani Lab, University at Buffalo' },
      { label: 'Methods',  value: 'MATLAB · Neural Networks · Eye Gaze Datasets' },
    ],
    slides: [
      { type: 'placeholder', bg: '#EDF4FB', emoji: '🧠', caption: 'The question' },
      { type: 'placeholder', bg: '#EEF2F7', emoji: '👁️', caption: 'Eye gaze data' },
      { type: 'placeholder', bg: '#F7E1C3', emoji: '⚙️', caption: 'Model building' },
      { type: 'placeholder', bg: '#E8EDE0', emoji: '📊', caption: 'Results' },
    ],
    intro: 'Can where you look predict what you\'ll do next? In the Esfahani Lab, I used eye gaze data from ATARI gameplay to find out.',
    stats: [
      { num: 'ATARI',  label: 'Head eye gaze dataset' },
      { num: 'MATLAB', label: 'Primary tool' },
      { num: '↑',      label: 'Action prediction accuracy' },
    ],
    sections: [
      {
        label: 'The question',
        heading: 'Eye gaze as a window into decision-making.',
        body: 'The ATARI-Head dataset captures where human players look while playing classic ATARI games. The hypothesis: gaze patterns carry signal about what action a player is about to take.',
        callout: '"The eyes move before the hands do. The question is whether the pattern is learnable."',
      },
      {
        label: 'What I did',
        heading: 'Build the model. Test the hypothesis.',
        body: 'I used the ATARI-Head eye gaze dataset and MATLAB to create neural network algorithms to predict player actions. This involved data preprocessing, model architecture decisions, training, and evaluation.',
      },
      {
        label: 'What I learned',
        heading: 'Data quality is the real bottleneck.',
        body: 'Noisy gaze data, inconsistent frame alignment, edge cases in gameplay — these upstream problems determined more of the outcome than any architectural choice I made. Start with the data, not the model.',
      },
    ],
    prev: 'thurman',
    next: 'ub-carbon',
  },

  'ub-carbon': {
    tag: 'Research · Environmental',
    title: 'Sorbent modification for carbon capture — presented in Japan',
    meta: [
      { label: 'My role',  value: 'Student Researcher' },
      { label: 'Timeline', value: '2022 – 2024' },
      { label: 'Team',     value: 'Lin Lab, University at Buffalo' },
      { label: 'Methods',  value: 'Materials Research · Conference Presentation · International Exchange' },
    ],
    slides: [
      { type: 'placeholder', bg: '#E8EDE0', emoji: '⚗️', caption: 'The research' },
      { type: 'placeholder', bg: '#EDF4FB', emoji: '🌍', caption: 'Carbon capture context' },
      { type: 'placeholder', bg: '#F7E1C3', emoji: '🇯🇵', caption: 'Sakura Science Japan' },
      { type: 'placeholder', bg: '#EEF2F7', emoji: '📢', caption: 'Presentation' },
    ],
    intro: 'Climate solutions live and die by material science. In the Lin Lab, I researched how sorbent modification could make carbon capture more effective — and took those findings to Japan.',
    stats: [
      { num: 'JST',     label: 'Japan Science & Technology Agency funded' },
      { num: '1',       label: 'International conference presentation' },
      { num: 'Lin Lab', label: 'University at Buffalo' },
    ],
    sections: [
      {
        label: 'The question',
        heading: 'Can we make carbon capture more efficient?',
        body: 'The Lin Lab\'s work focused on how modifying sorbents could improve CO₂ capture rates and integrate more smoothly with renewable energy systems in industrial applications.',
      },
      {
        label: 'What I did',
        heading: 'Research, iterate, present internationally.',
        body: 'I researched sorbent modification capabilities for carbon capture. I was invited to present at a conference at Ritsumeikan University in Japan through the Sakura Science Exchange Program, fully funded by the Japan Science and Technology Agency.',
        callout: '"Being invited to present internationally as an undergraduate researcher was a reminder that the work speaks for itself."',
      },
      {
        label: 'What I learned',
        heading: 'Science is a global conversation.',
        body: 'The questions I got from Japanese researchers pushed me to articulate assumptions I hadn\'t known I was making. That pressure-testing across languages and scientific traditions made the work better.',
      },
    ],
    prev: 'ub-neural',
    next: null,
  },
}

const LEADERSHIP_STUDIES = {
  'ycs-bootcamp': {
    tag: 'Education · Community',
    title: 'Y/CS high school CS bootcamp — 600+ schools, 20 countries',
    meta: [
      { label: 'My role',  value: 'Co-Founder & Events Director' },
      { label: 'Timeline', value: '2023 – Present' },
      { label: 'Team',     value: 'Yale Computer Society' },
      { label: 'Methods',  value: 'Curriculum Design · Recruitment · Nonprofit Transition' },
    ],
    slides: [
      { type: 'placeholder', bg: '#F7E1C3', emoji: '💻', caption: 'The bootcamp' },
      { type: 'placeholder', bg: '#EDF4FB', emoji: '🌍', caption: 'Global reach' },
      { type: 'placeholder', bg: '#EEF2F7', emoji: '📚', caption: 'Curriculum' },
      { type: 'placeholder', bg: '#E8EDE0', emoji: '🏛️', caption: '501(c)(3) transition' },
    ],
    intro: 'There was no Y/CS winter bootcamp before we built it. Starting from zero, we recruited from 600+ schools across 20 countries and turned a one-time idea into a nonprofit.',
    stats: [
      { num: '600+',      label: 'Schools recruited from' },
      { num: '20',        label: 'Countries represented' },
      { num: '501(c)(3)', label: 'Nonprofit status achieved' },
    ],
    sections: [
      {
        label: 'The problem',
        heading: 'High school students don\'t need inspiration — they need access.',
        body: 'What\'s rare is a structured, rigorous week of CS education built by people who just went through the experience of learning it themselves. That\'s the gap Y/CS\'s first annual winter bootcamp was designed to fill.',
        callout: '"We didn\'t want to run a camp. We wanted to build the kind of camp we wished had existed."',
      },
      {
        label: 'What I did',
        heading: 'Build the program from scratch.',
        body: 'I co-founded Y/CS\'s first annual winter CS bootcamp. I led recruitment from 600+ schools across 20 countries, facilitated the 501(c)(3) transition, and designed workshops and showcases for 100+ student developers and 300+ prospective CS students.',
      },
      {
        label: 'What I learned',
        heading: 'Programs are products too.',
        body: 'Running the bootcamp with PM instincts — thinking about student experience end-to-end, iterating on curriculum, treating recruitment like user acquisition — made every phase sharper.',
      },
    ],
    prev: null,
    next: 'ycs-apps',
  },

  'ycs-apps': {
    tag: 'Product · Software',
    title: '2 Y/CS web apps — 600+ users in first week',
    meta: [
      { label: 'My role',  value: 'Marketing Head · Events Director' },
      { label: 'Timeline', value: '2023 – Present' },
      { label: 'Team',     value: 'Yale Computer Society Software Team' },
      { label: 'Methods',  value: 'Product Launch · Campus Marketing · Growth' },
    ],
    slides: [
      { type: 'placeholder', bg: '#EEF2F7', emoji: '🚀', caption: 'Launch' },
      { type: 'placeholder', bg: '#EDF4FB', emoji: '💻', caption: 'The apps' },
      { type: 'placeholder', bg: '#F7E1C3', emoji: '📣', caption: 'Campus campaigns' },
      { type: 'placeholder', bg: '#E8EDE0', emoji: '📈', caption: '600+ users' },
    ],
    intro: 'Building the app is one thing. Getting 600+ people to use it in the first week is another. That\'s a distribution problem — and it\'s the one I was responsible for.',
    stats: [
      { num: '2',    label: 'Web apps launched' },
      { num: '600+', label: 'Users in first week' },
      { num: '↑',    label: 'Student org engagement' },
    ],
    sections: [
      {
        label: 'The project',
        heading: 'Ship the product. Then get people to use it.',
        body: 'Y/CS launched two web applications for the Yale community. My role was on the growth side — figuring out how to get students to show up, sign up, and engage.',
        callout: '"600+ users in week one didn\'t happen by accident. It happened because we treated marketing as part of the product."',
      },
      {
        label: 'What I did',
        heading: 'Creative, targeted, and fast.',
        body: 'I achieved 600+ users within the first week through targeted campus campaigns across student organizations — coordinating messaging, timing the launch around peak activity, and making the product\'s value immediately legible.',
      },
      {
        label: 'What I learned',
        heading: 'Growth is a design problem.',
        body: 'Clarity at the moment of discovery is as important as any feature you build. The apps that get used are the ones easiest to understand in the first thirty seconds.',
      },
    ],
    prev: 'ycs-bootcamp',
    next: 'casa',
  },

  casa: {
    tag: 'Community · Operations',
    title: 'CASA — newsletter, $10K budget & board management for 1,200+ members',
    meta: [
      { label: 'My role',  value: 'Vice President' },
      { label: 'Timeline', value: '2023 – 2026' },
      { label: 'Team',     value: 'Chinese American Student Association, Yale' },
      { label: 'Methods',  value: 'Budget Management · Editorial · Event Production · Board Leadership' },
    ],
    slides: [
      { type: 'placeholder', bg: '#EEF2F7', emoji: '🏮', caption: 'The org' },
      { type: 'placeholder', bg: '#EDF4FB', emoji: '📰', caption: 'Newsletter' },
      { type: 'placeholder', bg: '#F7E1C3', emoji: '💰', caption: 'Budget & events' },
      { type: 'placeholder', bg: '#E8EDE0', emoji: '📊', caption: 'Impact' },
    ],
    intro: 'CASA isn\'t just a student org — it\'s community infrastructure for Asian American students at Yale. As VP, I\'ve been responsible for a lot of what keeps it running.',
    stats: [
      { num: '1,200+', label: 'Newsletter members (70%+ open rate)' },
      { num: '$10K',   label: 'Semi-annual budget managed' },
      { num: '$6K+',   label: 'Raised through tickets & grants' },
    ],
    sections: [
      {
        label: 'The role',
        heading: 'VP means a lot of different things.',
        body: 'At CASA, VP means running the newsletter, managing the board, overseeing the budget, and making sure events happen. I\'ve published a biweekly newsletter to 1,200+ members at a 70%+ open rate and managed a $10K semi-annual budget.',
        callout: '"A 70% open rate means people are actually reading it. That doesn\'t happen by accident."',
      },
      {
        label: 'What I did',
        heading: 'Lead, write, budget, repeat.',
        body: 'I managed a $10K semi-annual budget, raising $6K+ through ticket sales and grants. I manage a board of 25 members and publish a biweekly newsletter on Asian American issues to 1,200+ readers.',
      },
      {
        label: 'What I learned',
        heading: 'Managing people is the hardest part of any project.',
        body: 'CASA taught me that leadership is mostly about clarity: clear expectations, clear deadlines, clear accountability. When those things are in place, the work happens.',
      },
    ],
    prev: 'ycs-apps',
    next: null,
  },
}

const SCHOOL_STUDIES = {
  cryptic: {
    tag: 'NLP · Machine Learning · Linguistics',
    title: 'The Minute Cryptic Decrypted',
    meta: [
      { label: 'My role',  value: 'Researcher & Engineer' },
      { label: 'Team',     value: 'Amanda, Gbemiga, Miya' },
      { label: 'Course',   value: 'Linguistics / CS' },
      { label: 'Methods',  value: 'ML · NLP · GloVe' },
    ],
    slides: [
      { type: 'placeholder', bg: '#EDF4FB', emoji: '✏️', caption: 'The Minute Cryptic Decrypted' },
      { type: 'placeholder', bg: '#EEF2F7', emoji: '🧠', caption: 'Classification pipeline' },
      { type: 'placeholder', bg: '#E8EFF8', emoji: '📊', caption: '69% classification accuracy' },
      { type: 'placeholder', bg: '#F0F4FA', emoji: '🔤', caption: 'GloVe semantic ranking' },
    ],
    intro: 'Mini cryptic crosswords are one of my favorite things — so naturally I tried to build a machine that could solve them.',
    stats: [
      { num: '69%', label: 'Classification accuracy' },
      { num: '67%', label: 'Correct answer in candidate list' },
      { num: '39',  label: 'Hand-labeled puzzles' },
    ],
    sections: [
      {
        label: 'The problem',
        heading: 'Can a computer solve wordplay?',
        body: 'Minute Cryptic is a daily crossword where every clue has two parts: a definition and a wordplay mechanism. We wanted to know if a computational pipeline could crack them — and what that reveals about how AI handles human linguistic nuance.',
        callout: '"Success here would signal a deeper grasp of human humor and sarcasm — nuances that remain notoriously difficult for AI."',
      },
      {
        label: 'What we built',
        heading: 'A two-stage pipeline: classify, then solve.',
        body: 'We manually collected and labeled 39 puzzles. Our system first classifies the puzzle type using logistic regression with GloVe embeddings, then routes it to a specialized solving algorithm. Cosine similarity ranks candidates to pick the best answer.',
      },
      {
        label: 'Results & what I learned',
        heading: 'Anagrams loved us. Hiddens did not.',
        body: 'Anagrams hit 100% recall in classification but struggled at solving. Hidden puzzles were the opposite: perfect solve rate once correctly classified, but weak at classification. Overall 38% end-to-end accuracy, correct answer in candidate list 67% of the time.',
      },
    ],
    links: [{ label: 'Read the paper →', href: '/cryptic-paper.pdf' }],
    prev: null,
    next: 'roswell',
  },

  roswell: {
    tag: 'Research · Cancer Biology',
    title: 'ST6GAL1 & triple-negative breast cancer metastasis — Roswell Park',
    meta: [
      { label: 'My role',  value: 'NIH-Funded Research Fellow' },
      { label: 'Timeline', value: 'June – August 2022' },
      { label: 'Team',     value: 'Roswell Park Comprehensive Cancer Center' },
      { label: 'Methods',  value: 'Cell Line Experiments · Statistical Analysis · Symposium Presentation' },
    ],
    slides: [
      { type: 'placeholder', bg: '#EDF4FB', emoji: '🔬', caption: 'Research question' },
      { type: 'placeholder', bg: '#EEF2F7', emoji: '🧬', caption: 'Experiments' },
      { type: 'placeholder', bg: '#F7E1C3', emoji: '🗂️', caption: 'Analysis' },
      { type: 'placeholder', bg: '#E8EDE0', emoji: '💡', caption: 'Findings' },
    ],
    intro: 'Triple-negative breast cancer is one of the hardest to treat — and one of the least understood. This summer, I tried to understand one small piece of why it spreads.',
    stats: [
      { num: 'NIH',  label: 'Funded fellowship' },
      { num: 'TNBC', label: 'High-mortality subtype studied' },
      { num: '1',    label: 'Symposium presentation delivered' },
    ],
    sections: [
      {
        label: 'The question',
        heading: 'What triggers metastasis in triple-negative breast cancer?',
        body: 'My research focused on the glycoprotein ST6GAL1 and its relationship to metastasis — using breast cancer cell lines to identify what triggers cancer cells to spread.',
        callout: '"The question wasn\'t whether ST6GAL1 mattered. The question was how."',
      },
      {
        label: 'What I did',
        heading: 'Experiments, collaboration, and a lot of patience.',
        body: 'I conducted experiments with breast cancer cell lines, collaborated with lab members, used statistical analysis to interpret results, and presented findings at Roswell Park\'s summer research symposium.',
      },
      {
        label: 'What I learned',
        heading: 'Scientific rigor is a form of respect.',
        body: 'Every control condition, every replication — that discipline was respect for the people this research might one day affect. Build carefully, test honestly, don\'t skip steps.',
      },
    ],
    prev: 'cryptic',
    next: 'microplastics',
  },

  microplastics: {
    tag: 'Research · Environmental',
    title: 'Ionization to reduce PET microplastics in water treatment',
    meta: [
      { label: 'My role',  value: 'Independent Researcher' },
      { label: 'Timeline', value: '2021 – 2023' },
      { label: 'Team',     value: 'International Student Science Fair' },
      { label: 'Methods',  value: 'Experimental Design · Ionization · Poster & Presentation' },
    ],
    slides: [
      { type: 'placeholder', bg: '#F7E1C3', emoji: '🧪', caption: 'The experiment' },
      { type: 'placeholder', bg: '#EDF4FB', emoji: '💧', caption: 'Water treatment' },
      { type: 'placeholder', bg: '#E8EDE0', emoji: '🏆', caption: 'Awards' },
      { type: 'placeholder', bg: '#EEF2F7', emoji: '📢', caption: 'Presentation' },
    ],
    intro: 'Microplastics are everywhere — including water we treat and release. I built an ionization-based approach to filter them out more efficiently.',
    stats: [
      { num: '1st', label: 'Best Poster Prize' },
      { num: '1st', label: 'Best Presentation Prize' },
      { num: '50+', label: 'International schools competing' },
    ],
    sections: [
      {
        label: 'The problem',
        heading: 'PET microplastics slip through conventional water treatment.',
        body: 'I researched whether ionization — specifically, ionized carbon rods in a parallel plate structure — could improve PET microplastic removal rates in water waste treatment plants.',
      },
      {
        label: 'What I did',
        heading: 'Design, experiment, present internationally.',
        body: 'I designed and ran experiments using ionized carbon rods, analyzed results, and presented at the international competition — winning First Place in Best Poster and Best Presentation among 50+ international schools.',
        callout: '"Winning isn\'t the point. But it confirmed the work was real."',
      },
      {
        label: 'What I learned',
        heading: 'Independent research is a different kind of hard.',
        body: 'No lab infrastructure, no team, no established protocol. I had to figure out the experimental design myself and make judgment calls at every step.',
      },
    ],
    prev: 'roswell',
    next: 'covid-website',
  },

  'covid-website': {
    tag: 'Health Equity · Web',
    title: 'COVID-19 misconceptions website for diverse communities — Weill Cornell',
    meta: [
      { label: 'My role',  value: 'CCEEI Intern' },
      { label: 'Timeline', value: '2021 – 2022' },
      { label: 'Team',     value: 'Weill Cornell Medicine' },
      { label: 'Methods',  value: 'Web Development · Health Communication · Capstone' },
    ],
    slides: [
      { type: 'placeholder', bg: '#E8EDE0', emoji: '🌐', caption: 'The website' },
      { type: 'placeholder', bg: '#EDF4FB', emoji: '🦠', caption: 'COVID context' },
      { type: 'placeholder', bg: '#F7E1C3', emoji: '🤝', caption: 'Community focus' },
      { type: 'placeholder', bg: '#EEF2F7', emoji: '💉', caption: 'Vaccine equity' },
    ],
    intro: 'Vaccine hesitancy is a response to a system that hasn\'t always been trustworthy. This capstone project tried to meet communities where they actually were.',
    stats: [
      { num: '1',   label: 'Website shipped as capstone' },
      { num: '↑',   label: 'Health equity focus' },
      { num: 'WCM', label: 'Weill Cornell Medicine' },
    ],
    sections: [
      {
        label: 'The context',
        heading: 'Misinformation travels faster than facts.',
        body: 'COVID-19 misinformation spread rapidly through communities historically underserved by public health institutions. I built something to help.',
        callout: '"If a website about vaccines only reaches people who already trust vaccines, it\'s not doing the work."',
      },
      {
        label: 'What I did',
        heading: 'Learn the science. Build the communication.',
        body: 'I co-created a website addressing common misconceptions about COVID-19, vaccinations, and health equity — designed to empower diverse communities to make informed decisions.',
      },
      {
        label: 'What I learned',
        heading: 'Science communication is a design problem.',
        body: 'Figuring out how to present information in a way that felt trustworthy and relevant to communities with real reasons for skepticism — that was the challenge.',
      },
    ],
    prev: 'microplastics',
    next: 'kwk-web',
  },

  'kwk-web': {
    tag: 'Web · HTML/CSS/JS',
    title: 'Medical disparities website — Kode with Klossy 2021',
    meta: [
      { label: 'My role',  value: 'Scholar' },
      { label: 'Timeline', value: 'Summer 2021' },
      { label: 'Team',     value: 'Kode with Klossy cohort' },
      { label: 'Methods',  value: 'HTML · CSS · JavaScript · Collaborative Build' },
    ],
    slides: [
      { type: 'placeholder', bg: '#F7E1C3', emoji: '🩺', caption: 'The project' },
      { type: 'placeholder', bg: '#E8EDE0', emoji: '💻', caption: 'Building it' },
      { type: 'placeholder', bg: '#EDF4FB', emoji: '🤝', caption: 'Collaboration' },
      { type: 'placeholder', bg: '#EEF2F7', emoji: '🚀', caption: 'Ship it' },
    ],
    intro: 'My first shipped project. Built in a summer, with a team of scholars I\'d just met, using languages I\'d learned weeks before.',
    stats: [
      { num: '1',    label: 'Website shipped' },
      { num: '3',    label: 'Languages learned' },
      { num: '2021', label: 'Year everything started' },
    ],
    sections: [
      {
        label: 'The project',
        heading: 'Build something that matters in the time you have.',
        body: 'We built a website on medical disparities — the documented gaps in healthcare access and outcomes across race, income, and geography — making that data legible to people who didn\'t already know the statistics.',
      },
      {
        label: 'What I did',
        heading: 'Learn fast. Build together. Ship.',
        body: 'I collaborated with fellow scholars, dividing responsibilities and integrating code under a tight deadline — all while actively learning the languages we were using.',
        callout: '"I didn\'t know what I was doing. That was the point."',
      },
      {
        label: 'What I learned',
        heading: 'Shipping something imperfect is better than shipping nothing.',
        body: 'The website wasn\'t flawless. But it was real and said something we cared about. That\'s why I keep coming back to projects at the intersection of technology and social impact.',
      },
    ],
    prev: 'covid-website',
    next: 'kwk-app',
  },

  'kwk-app': {
    tag: 'Mobile · Swift',
    title: 'Sustainability app for Gen Z — Kode with Klossy 2022',
    meta: [
      { label: 'My role',  value: 'Scholar' },
      { label: 'Timeline', value: 'Summer 2022' },
      { label: 'Team',     value: 'Kode with Klossy cohort' },
      { label: 'Methods',  value: 'Swift · Mobile App Development · User Research' },
    ],
    slides: [
      { type: 'placeholder', bg: '#E8EDE0', emoji: '🌱', caption: 'The app' },
      { type: 'placeholder', bg: '#EDF4FB', emoji: '📱', caption: 'Mobile development' },
      { type: 'placeholder', bg: '#EEF2F7', emoji: '♻️', caption: 'Sustainability focus' },
      { type: 'placeholder', bg: '#F7E1C3', emoji: '🚀', caption: 'Ship it' },
    ],
    intro: 'Year two. New language, new platform, same question: what do you build when you have a week and a cause you care about?',
    stats: [
      { num: '1',    label: 'Mobile app shipped' },
      { num: 'Swift', label: 'Language learned' },
      { num: 'Gen Z', label: 'Target audience' },
    ],
    sections: [
      {
        label: 'The project',
        heading: 'Sustainability, but make it actually usable.',
        body: 'I built a final project targeting younger generations to be more sustainable. The design challenge was making it feel like something you\'d actually open, not install and forget.',
      },
      {
        label: 'What I did',
        heading: 'Learn Swift. Ship a product.',
        body: 'I learned Swift and mobile app development in compressed time, made product decisions about scope and features, and collaborated with scholars to ship a working app.',
        callout: '"The best sustainability app is one that doesn\'t feel like a sustainability app."',
      },
      {
        label: 'What I learned',
        heading: 'Mobile design constraints are a creative forcing function.',
        body: 'A small screen, a finite battery, a distracted user — mobile design forces you to be ruthless about what matters. That discipline carries into every project.',
      },
    ],
    prev: 'kwk-web',
    next: 'chicago-bikes',
  },

  'chicago-bikes': {
    tag: 'Data · Civic',
    title: 'Mapping Chicago bike accidents to advocate for safer lanes',
    meta: [
      { label: 'My role',  value: 'Independent Researcher' },
      { label: 'Timeline', value: '2022 – 2024' },
      { label: 'Team',     value: 'University at Buffalo (side project)' },
      { label: 'Methods',  value: 'Data Analysis · Mapping · Civic Advocacy' },
    ],
    slides: [
      { type: 'placeholder', bg: '#EDF4FB', emoji: '🚲', caption: 'The project' },
      { type: 'placeholder', bg: '#F7E1C3', emoji: '🗺️', caption: 'The maps' },
      { type: 'placeholder', bg: '#EEF2F7', emoji: '📊', caption: 'The data' },
      { type: 'placeholder', bg: '#E8EDE0', emoji: '🏛️', caption: 'The argument' },
    ],
    intro: 'Data doesn\'t change policy on its own. But a map that shows exactly where cyclists are getting hurt — that\'s harder to ignore.',
    stats: [
      { num: '1',    label: 'City analyzed' },
      { num: 'Maps', label: 'Primary deliverable' },
      { num: '↑',    label: 'Case for bike lane safety' },
    ],
    sections: [
      {
        label: 'The question',
        heading: 'Where are cyclists getting hurt, and why?',
        body: 'I mapped Chicago bike accidents to build an evidence-based case to convince city authorities to implement safety measures in bicycle lanes.',
      },
      {
        label: 'What I did',
        heading: 'Turn accident data into a spatial argument.',
        body: 'I sourced and cleaned accident data, built visualizations that made geographic patterns legible, and framed the output as an argument — not just a data product.',
        callout: '"The point wasn\'t to show that accidents happen. The point was to show where, and why that\'s fixable."',
      },
      {
        label: 'What I learned',
        heading: 'Data visualization is an act of persuasion.',
        body: 'Choosing the right map projection, color scale, and aggregation weren\'t aesthetic decisions — they were rhetorical ones. This sharpened my instinct for the difference between data that\'s accurate and data that\'s actionable.',
      },
    ],
    prev: 'kwk-app',
    next: null,
  },
}

const ALL_STUDIES = { ...WORK_STUDIES, ...LEADERSHIP_STUDIES, ...SCHOOL_STUDIES }

const BACK_LINKS = {
  ...Object.fromEntries(Object.keys(WORK_STUDIES).map(k => [k, '/projects'])),
  ...Object.fromEntries(Object.keys(LEADERSHIP_STUDIES).map(k => [k, '/projects'])),
  ...Object.fromEntries(Object.keys(SCHOOL_STUDIES).map(k => [k, '/projects'])),
}

const STAT_COLORS = ['yellow', 'blue', 'peach']

function SlideShow({ slides }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % slides.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [slides.length])

  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent(i => (i + 1) % slides.length)

  return (
    <div className="detail-header">
      <div
        className="detail-header__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="detail-header__slide"
            style={{ background: slide.type === 'placeholder' ? slide.bg : undefined }}
          >
            {slide.type === 'image'
              ? <img src={slide.src} alt={slide.caption} />
              : <>
                  <span style={{ fontSize: '4rem' }}>{slide.emoji}</span>
                  <span style={{ fontSize: '0.9rem', opacity: 0.7, letterSpacing: '0.08em' }}>
                    {slide.caption}
                  </span>
                </>
            }
          </div>
        ))}
      </div>
      <button className="detail-header__btn detail-header__btn--prev" onClick={prev}>←</button>
      <button className="detail-header__btn detail-header__btn--next" onClick={next}>→</button>
      <div className="detail-header__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`detail-header__dot ${i === current ? 'detail-header__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default function ProjectDetails() {
  const { id } = useParams()
  const p = ALL_STUDIES[id]
  const backLink = BACK_LINKS[id] ?? '/projects'

  if (!p) return (
    <main style={{ padding: '8rem 2rem', textAlign: 'center' }}>
      <p>Project not found.</p>
      <Link to="/projects" className="link--accent">← back to projects</Link>
    </main>
  )

  return (
    <main className="detail-page">
      <SlideShow slides={p.slides} />

      <div className="detail-body">
        <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>{p.tag}</p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: '2rem', lineHeight: 1.15 }}>
          {p.title}
        </h1>
      </div>

      <div className="detail-meta">
        {p.meta.map(m => (
          <div key={m.label} className="detail-meta__item">
            <div className="detail-meta__label">{m.label}</div>
            <div className="detail-meta__value">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="detail-body">
        <p className="detail-intro">{p.intro}</p>

        <div className="detail-stats">
          {p.stats.map((stat, i) => (
            <div key={stat.label} className={`detail-stat card--${STAT_COLORS[i % 3]}`}>
              <span className="detail-stat__num">{stat.num}</span>
              <span className="detail-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>

        {p.sections.map(sec => (
          <div key={sec.label} className="detail-section">
            <p className="detail-section__label">{sec.label}</p>
            <h2>{sec.heading}</h2>
            <p>{sec.body}</p>
            {sec.callout && <div className="detail-callout">{sec.callout}</div>}
          </div>
        ))}

        {p.links && (
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            {p.links.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="btn btn--primary">
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="detail-nav">
          {p.prev ? <Link to={`/projects/${p.prev}`} className="link--accent">← previous</Link> : <span />}
          <Link to={backLink} className="link--muted">all projects</Link>
          {p.next ? <Link to={`/projects/${p.next}`} className="link--accent">next →</Link> : <span />}
        </div>
      </div>
    </main>
  )
}