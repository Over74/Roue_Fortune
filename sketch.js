// sketch.js
let angle = 0;
let spinning = false;
let spinSpeed = 0;
let resultDiv;

function setup() {
    createCanvas(600, 600);
    wheel = new Wheel(width / 2, height / 2, 250, wheelOptions);
    let spinButton = select('#spinButton');
    resultDiv = select('#result');
}

function draw() {
    background(255);
    wheel.show();
    drawArrow(); // Draw the arrow indicating the current segment

    if (spinning) {
        angle += spinSpeed;
        spinSpeed *= 0.99; // Damping
        if (spinSpeed < 0.001) {
            spinSpeed = 0;
            spinning = false;
            // Determine the result
            let resultIndex = Math.floor(((TWO_PI - (angle % TWO_PI)) / TWO_PI) * wheelOptions.length);
            let result = wheelOptions[resultIndex].label;

            if (result === "100€ de\nréduction") {
                resultDiv.html(`Félicitations, vous avez gagné 100€ de réduction !`);
            } else if (result.includes("Lot")) {
                resultDiv.html(`Félicitations, vous avez gagné ${result} !`);
            } else if (result === "Rien") {
                resultDiv.html(`Désolé, vous n'avez rien gagné.`);
            } else {
                resultDiv.html(`Félicitations, vous avez gagné ${result} !`);
            }
        }
    }
}

function startSpin() {
    if (!spinning) {
        spinSpeed = random(0.2, 0.5);
        spinning = true;
        resultDiv.html(''); // Clear previous result
    }
}

function drawArrow() {
    push();
    translate(width / 2 + wheel.radius + 20, height / 2); // Adjust position to right
    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(2);
    beginShape();
    vertex(20, -10); // Adjust shape coordinates
    vertex(20, 10);
    vertex(0, 0);
    endShape(CLOSE);
    pop();
}

class Wheel {
    constructor(x, y, radius, options) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.options = options;
    }

    show() {
        push();
        translate(this.x, this.y);
        rotate(angle);
        let angleStep = TWO_PI / this.options.length;
        for (let i = 0; i < this.options.length; i++) {
            fill(this.options[i].color);
            arc(0, 0, this.radius * 2, this.radius * 2, i * angleStep, (i + 1) * angleStep, PIE);
            fill(255);
            textAlign(CENTER, CENTER);
            let textSizeToFit = min(16, (this.radius / this.options.length) * 0.6); // Adjust text size dynamically
            textSize(textSizeToFit);
            push();
            rotate((i + 0.5) * angleStep);
            translate(this.radius * 0.6, 0);
            rotate(HALF_PI);
            displayText(this.options[i].label); // Use the displayText function to handle multiline text
            pop();
        }
        pop();
    }
}

function displayText(label) {
    let lines = label.split('\n');
    let lineHeight = textAscent() + textDescent();
    for (let i = 0; i < lines.length; i++) {
        text(lines[i], 0, (i - lines.length / 2) * lineHeight);
    }
}

// Updated wheel options with alternating chances
let wheelOptions = [
    { label: "100€ de\nréduction", color: '#FFC107' },    // Big Prize
    { label: "Rien", color: '#CDDC39' },                 // Nothing
    { label: "5% de\nréduction", color: '#9C27B0' },          // Small Prize
    { label: "Rien", color: '#CDDC39' },                 // Nothing
    { label: "Un Mug", color: '#9C27B0' },          // Small Prize
    { label: "Rien", color: '#CDDC39' },                 // Nothing
    { label: "Une Serviette", color: '#9C27B0' },          // Small Prize
    { label: "Rien", color: '#CDDC39' },                 // Nothing
    { label: "10% de\nréduction", color: '#9C27B0' },          // Small Prize
    { label: "Rien", color: '#CDDC39' },                 // Nothing
    { label: "Bon d'achat\n10€", color: '#9C27B0' },          // Small Prize
    { label: "Rien", color: '#CDDC39' },                 // Nothing
    { label: "Bon d'achat\n50€", color: '#9C27B0' },          // Small Prize
];
