let facts = [
    "'Panda'",
    "'Koala'",
    "'Polar'"
];

// Generate random quote

export function getFact() {
    const randomNumber = Math.floor(Math.random() * facts.length);

    let randomFact = facts[randomNumber];
    return randomFact;

    // document.getElementById("bearFactSection").innerhtml = facts[randomNumber];
}
