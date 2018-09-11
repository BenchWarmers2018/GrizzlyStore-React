let facts = [
    "'Panda'",
    "'Koala'",
    "'Polar'"
];

// Generate random quote

function getFact() {
    const randomNumber = Math.floor(Math.random() * facts.length);
    document.getElementById("bearFactSection").innerhtml = facts[randomNumber];
}