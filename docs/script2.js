let spikesSlider, innerRatioSlider, outerRatioSlider;
let spikes = 5, innerRatio = 0.5, outerRatio = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    // Create sliders
    spikesSlider = createSlider(3, 20, 5, 1);
    spikesSlider.position(20, 40);
    spikesSlider.input(updateValues);

    innerRatioSlider = createSlider(0.1, 1, 0.5, 0.1);
    innerRatioSlider.position(20, 90);
    innerRatioSlider.input(updateValues);

    outerRatioSlider = createSlider(1, 2, 1, 0.1);
    outerRatioSlider.position(20, 140);
    outerRatioSlider.input(updateValues);

    // Update initial values
    updateValues();
}

function updateValues() {
    spikes = spikesSlider.value();
    innerRatio = innerRatioSlider.value();
    outerRatio = outerRatioSlider.value();

    // Update the displayed values
    document.getElementById('spikesValue').innerText = spikes;
    document.getElementById('innerRatioValue').innerText = innerRatio;
    document.getElementById('outerRatioValue').innerText = outerRatio;
}

function draw() {
    background(255);
    translate(width / 2, height / 2);

    fill(255, 100, 150, 150);
    noStroke();
    drawStar(0, 0, 100 * outerRatio, 50 * innerRatio, spikes);

    fill(255, 50, 100);
    drawStar(0, 0, 50, 25 * innerRatio, spikes);
}

function drawStar(x, y, radius1, radius2, npoints) {
    let angle = 360 / npoints;
    let halfAngle = angle / 2.0;

    beginShape();
    for (let a = 0; a < 360; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
