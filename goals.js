const microGoals = [

    // =========================================================
    // CHASTITY / SELF-CONTROL
    // =========================================================

    {
        id: "chastity-notice",
        category: "Chastity",
        subcategory: "Awareness",
        task: "Notice when an impulse appears without immediately reacting to it.",
        frequency: 3,
        active: true
    },
    {
        id: "chastity-trigger",
        category: "Chastity",
        subcategory: "Awareness",
        task: "Notice what was happening just before an impulse appeared.",
        frequency: 3,
        active: true
    },
    {
        id: "chastity-emotion",
        category: "Chastity",
        subcategory: "Awareness",
        task: "Notice what emotion I was experiencing when an impulse appeared.",
        frequency: 2,
        active: true
    },
    {
        id: "chastity-environment",
        category: "Chastity",
        subcategory: "Awareness",
        task: "Notice whether my environment affected my self-control.",
        frequency: 2,
        active: true
    },
    {
        id: "chastity-pause",
        category: "Chastity",
        subcategory: "Pausing",
        task: "Pause before reacting to an impulse.",
        frequency: 3,
        active: true
    },
    {
        id: "chastity-change",
        category: "Chastity",
        subcategory: "Pausing",
        task: "Change what I am doing when I notice an impulse.",
        frequency: 3,
        active: true
    },
    {
        id: "chastity-environment-change",
        category: "Chastity",
        subcategory: "Pausing",
        task: "Move to a different environment when I need to redirect my attention.",
        frequency: 2,
        active: true
    },
    {
        id: "chastity-alternative",
        category: "Chastity",
        subcategory: "Alternatives",
        task: "Use one healthy alternative activity when I need to redirect my attention.",
        frequency: 3,
        active: true
    },
    {
        id: "chastity-creative",
        category: "Chastity",
        subcategory: "Alternatives",
        task: "Spend a few minutes doing something creative instead of following an impulse.",
        frequency: 2,
        active: true
    },
    {
        id: "chastity-purposeful",
        category: "Chastity",
        subcategory: "Alternatives",
        task: "Redirect my attention toward something useful.",
        frequency: 2,
        active: true
    },
    {
        id: "chastity-recovery",
        category: "Chastity",
        subcategory: "Recovery",
        task: "If I struggled today, identify one thing I learned from it.",
        frequency: 2,
        active: true
    },
    {
        id: "chastity-reset",
        category: "Chastity",
        subcategory: "Recovery",
        task: "Return to my normal routine after a difficult moment instead of giving up on the day.",
        frequency: 2,
        active: true
    },


    // =========================================================
    // VOCABULARY
    // =========================================================

    {
        id: "vocab-find",
        category: "Vocabulary",
        subcategory: "Discovering",
        task: "Find one unfamiliar word.",
        frequency: 3,
        active: true
    },
    {
        id: "vocab-definition",
        category: "Vocabulary",
        subcategory: "Discovering",
        task: "Look up the definition of one new word.",
        frequency: 3,
        active: true
    },
    {
        id: "vocab-pronunciation",
        category: "Vocabulary",
        subcategory: "Discovering",
        task: "Learn how to pronounce one new word.",
        frequency: 2,
        active: true
    },
    {
        id: "vocab-origin",
        category: "Vocabulary",
        subcategory: "Discovering",
        task: "Find the origin or etymology of one word.",
        frequency: 2,
        active: true
    },
    {
        id: "vocab-synonym",
        category: "Vocabulary",
        subcategory: "Understanding",
        task: "Find two synonyms for a word I learned.",
        frequency: 3,
        active: true
    },
    {
        id: "vocab-antonym",
        category: "Vocabulary",
        subcategory: "Understanding",
        task: "Find an antonym for a word I learned.",
        frequency: 2,
        active: true
    },
    {
        id: "vocab-explain",
        category: "Vocabulary",
        subcategory: "Understanding",
        task: "Explain a new word without looking at its definition.",
        frequency: 2,
        active: true
    },
    {
        id: "vocab-compare",
        category: "Vocabulary",
        subcategory: "Understanding",
        task: "Compare two similar words and figure out how they differ.",
        frequency: 2,
        active: true
    },
    {
        id: "vocab-sentence",
        category: "Vocabulary",
        subcategory: "Using",
        task: "Write one sentence using a new word.",
        frequency: 3,
        active: true
    },
    {
        id: "vocab-conversation",
        category: "Vocabulary",
        subcategory: "Using",
        task: "Use one new word naturally in conversation.",
        frequency: 2,
        active: true
    },
    {
        id: "vocab-precision",
        category: "Vocabulary",
        subcategory: "Using",
        task: "Replace one vague word with a more precise word.",
        frequency: 3,
        active: true
    },
    {
        id: "vocab-swearing-notice",
        category: "Vocabulary",
        subcategory: "Replacing Swearing",
        task: "Notice one moment when I wanted to swear.",
        frequency: 3,
        active: true
    },
    {
        id: "vocab-swearing-replace",
        category: "Vocabulary",
        subcategory: "Replacing Swearing",
        task: "Replace one swear with a more precise description.",
        frequency: 3,
        active: true
    },
    {
        id: "vocab-emotion",
        category: "Vocabulary",
        subcategory: "Replacing Swearing",
        task: "Find a more precise word for what I am feeling.",
        frequency: 3,
        active: true
    },
    {
        id: "vocab-disagreement",
        category: "Vocabulary",
        subcategory: "Replacing Swearing",
        task: "Describe a disagreement without insulting anyone.",
        frequency: 2,
        active: true
    },


    // =========================================================
    // LATIN + BIBLE
    // =========================================================

    {
        id: "latin-word",
        category: "Latin",
        subcategory: "Vocabulary",
        task: "Learn one Latin word.",
        frequency: 3,
        active: true
    },
    {
        id: "latin-meaning",
        category: "Latin",
        subcategory: "Vocabulary",
        task: "Write the English meaning of one Latin word.",
        frequency: 3,
        active: true
    },
    {
        id: "latin-pronunciation",
        category: "Latin",
        subcategory: "Vocabulary",
        task: "Practice pronouncing one Latin word.",
        frequency: 2,
        active: true
    },
    {
        id: "latin-root",
        category: "Latin",
        subcategory: "Vocabulary",
        task: "Find an English word connected to a Latin root.",
        frequency: 2,
        active: true
    },
    {
        id: "latin-noun",
        category: "Latin",
        subcategory: "Grammar",
        task: "Identify one noun in a Latin sentence.",
        frequency: 2,
        active: true
    },
    {
        id: "latin-verb",
        category: "Latin",
        subcategory: "Grammar",
        task: "Identify one verb in a Latin sentence.",
        frequency: 2,
        active: true
    },
    {
        id: "latin-case",
        category: "Latin",
        subcategory: "Grammar",
        task: "Figure out the case of one Latin noun.",
        frequency: 2,
        active: true
    },
    {
        id: "latin-tense",
        category: "Latin",
        subcategory: "Grammar",
        task: "Identify the tense of one Latin verb.",
        frequency: 2,
        active: true
    },
    {
        id: "latin-ending",
        category: "Latin",
        subcategory: "Grammar",
        task: "Find out why one Latin word has its particular ending.",
        frequency: 2,
        active: true
    },
    {
        id: "latin-verse-read",
        category: "Latin Bible",
        subcategory: "Verse Learning",
        task: "Read one short Latin Bible verse aloud.",
        frequency: 2,
        active: true
    },
    {
        id: "latin-verse-translate",
        category: "Latin Bible",
        subcategory: "Verse Learning",
        task: "Translate one short Latin Bible verse.",
        frequency: 2,
        active: true
    },
    {
        id: "latin-verse-words",
        category: "Latin Bible",
        subcategory: "Verse Learning",
        task: "Break a Latin Bible verse into individual words and meanings.",
        frequency: 2,
        active: true
    },
    {
        id: "latin-verse-memory",
        category: "Latin Bible",
        subcategory: "Verse Learning",
        task: "Recite part of a Latin Bible verse from memory.",
        frequency: 2,
        active: true
    },
    {
        id: "latin-verse-full",
        category: "Latin Bible",
        subcategory: "Verse Learning",
        task: "Recite a short Latin Bible verse from memory.",
        frequency: 1,
        active: true
    },


    // =========================================================
    // PERSPECTIVE / THINKING
    // =========================================================

    {
        id: "perspective-thought",
        category: "Perspective",
        subcategory: "Having Thoughts",
        task: "Write down one thought I had today.",
        frequency: 3,
        active: true
    },
    {
        id: "perspective-i-think",
        category: "Perspective",
        subcategory: "Having Thoughts",
        task: "Finish the sentence: 'I think...'",
        frequency: 3,
        active: true
    },
    {
        id: "perspective-reason",
        category: "Perspective",
        subcategory: "Having Thoughts",
        task: "Write one reason why I think something.",
        frequency: 3,
        active: true
    },
    {
        id: "perspective-evidence",
        category: "Perspective",
        subcategory: "Having Thoughts",
        task: "Write down one piece of evidence for my interpretation.",
        frequency: 2,
        active: true
    },
    {
        id: "perspective-knowledge",
        category: "Perspective",
        subcategory: "Having Thoughts",
        task: "Separate what I know from what I am assuming.",
        frequency: 2,
        active: true
    },
    {
        id: "perspective-uncertain",
        category: "Perspective",
        subcategory: "Uncertainty",
        task: "Say 'I'm not sure' when I genuinely do not know.",
        frequency: 2,
        active: true
    },
    {
        id: "perspective-confidence",
        category: "Perspective",
        subcategory: "Uncertainty",
        task: "Give myself a rough confidence level for one idea.",
        frequency: 2,
        active: true
    },
    {
        id: "perspective-change",
        category: "Perspective",
        subcategory: "Uncertainty",
        task: "Identify what information could change my mind.",
        frequency: 2,
        active: true
    },
    {
        id: "perspective-speak",
        category: "Perspective",
        subcategory: "Speaking Without Validation",
        task: "Say one opinion without immediately asking if I am right.",
        frequency: 3,
        active: true
    },
    {
        id: "perspective-wait",
        category: "Perspective",
        subcategory: "Speaking Without Validation",
        task: "Wait for someone to respond instead of immediately re-explaining myself.",
        frequency: 3,
        active: true
    },
    {
        id: "perspective-disagree",
        category: "Perspective",
        subcategory: "Speaking Without Validation",
        task: "Allow someone to disagree with one of my ideas.",
        frequency: 2,
        active: true
    },
    {
        id: "perspective-no-apology",
        category: "Perspective",
        subcategory: "Speaking Without Validation",
        task: "Share an idea without apologising for having an opinion.",
        frequency: 2,
        active: true
    },
    {
        id: "perspective-repeat-notice",
        category: "Perspective",
        subcategory: "Repetition",
        task: "Notice when I start repeating an explanation.",
        frequency: 3,
        active: true
    },
    {
        id: "perspective-repeat-stop",
        category: "Perspective",
        subcategory: "Repetition",
        task: "Catch myself before unnecessarily repeating an explanation.",
        frequency: 3,
        active: true
    },
    {
        id: "perspective-clarify",
        category: "Perspective",
        subcategory: "Repetition",
        task: "Explain something again only when clarification is actually needed.",
        frequency: 2,
        active: true
    },
    {
        id: "perspective-ask",
        category: "Perspective",
        subcategory: "Learning From Others",
        task: "Ask someone why they have a different opinion.",
        frequency: 2,
        active: true
    },
    {
        id: "perspective-compare",
        category: "Perspective",
        subcategory: "Learning From Others",
        task: "Compare someone else's reasoning with my original reasoning.",
        frequency: 2,
        active: true
    },
    {
        id: "perspective-update",
        category: "Perspective",
        subcategory: "Learning From Others",
        task: "Change my opinion when I encounter stronger reasoning.",
        frequency: 1,
        active: true
    },
    {
        id: "perspective-keep",
        category: "Perspective",
        subcategory: "Learning From Others",
        task: "Keep my original opinion when I still have good reasons for it.",
        frequency: 1,
        active: true
    },


    // =========================================================
    // SELF-PERCEPTION
    // =========================================================

    {
        id: "selfperception-notice",
        category: "Self-Perception",
        subcategory: "Awareness",
        task: "Notice one harsh thought I had about myself.",
        frequency: 3,
        active: true
    },
    {
        id: "selfperception-factual",
        category: "Self-Perception",
        subcategory: "Awareness",
        task: "Replace one judgment about myself with a factual description.",
        frequency: 3,
        active: true
    },
    {
        id: "selfperception-action",
        category: "Self-Perception",
        subcategory: "Awareness",
        task: "Separate something I did from who I am as a person.",
        frequency: 2,
        active: true
    },
    {
        id: "selfperception-correction",
        category: "Self-Perception",
        subcategory: "Receiving Correction",
        task: "Accept one correction without insulting myself.",
        frequency: 2,
        active: true
    },
    {
        id: "selfperception-dontknow",
        category: "Self-Perception",
        subcategory: "Receiving Correction",
        task: "Admit that I do not know something without putting myself down.",
        frequency: 2,
        active: true
    },
    {
        id: "selfperception-credit",
        category: "Self-Perception",
        subcategory: "Awareness",
        task: "Write down one thing I handled well today.",
        frequency: 2,
        active: true
    },
    {
        id: "selfperception-learning",
        category: "Self-Perception",
        subcategory: "Awareness",
        task: "Write down one thing I learned today.",
        frequency: 3,
        active: true
    },
    {
        id: "selfperception-comparison",
        category: "Self-Perception",
        subcategory: "Awareness",
        task: "Notice one moment when I compared myself with someone else.",
        frequency: 2,
        active: true
    },


    // =========================================================
    // GROUNDEDNESS
    // =========================================================

    {
        id: "grounding-one",
        category: "Groundedness",
        subcategory: "Presence",
        task: "Do one task without trying to multitask.",
        frequency: 3,
        active: true
    },
    {
        id: "grounding-break",
        category: "Groundedness",
        subcategory: "Presence",
        task: "Take a short break without feeling like I need to be productive.",
        frequency: 2,
        active: true
    },
    {
        id: "grounding-fun",
        category: "Groundedness",
        subcategory: "Presence",
        task: "Do something simply because I enjoy it.",
        frequency: 2,
        active: true
    },
    {
        id: "grounding-outside",
        category: "Groundedness",
        subcategory: "Presence",
        task: "Spend a few minutes noticing what is around me.",
        frequency: 2,
        active: true
    },
    {
        id: "grounding-reset",
        category: "Groundedness",
        subcategory: "Reset",
        task: "Pause and take a few calm minutes when I feel overwhelmed.",
        frequency: 3,
        active: true
    },
    {
        id: "grounding-one-day",
        category: "Groundedness",
        subcategory: "Perspective",
        task: "Remind myself that one difficult day does not erase my progress.",
        frequency: 2,
        active: true
    },
    {
        id: "grounding-not-perfect",
        category: "Groundedness",
        subcategory: "Perspective",
        task: "Notice one thing I can improve without expecting myself to be perfect.",
        frequency: 2,
        active: true
    },
    {
        id: "grounding-rest",
        category: "Groundedness",
        subcategory: "Basic Care",
        task: "Give myself enough time to rest instead of treating rest as wasted time.",
        frequency: 2,
        active: true
    }
];