// Basic Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Sine wave parameters
let amplitude = 1;
let frequency = 1;

// Create the sine wave geometry
const sineWaveGeometry = new THREE.BufferGeometry();
const points = [];
const numPoints = 100;
for (let i = 0; i < numPoints; i++) {
    const x = (i / (numPoints - 1)) * 10 - 5;
    const y = amplitude * Math.sin(frequency * x);
    points.push(new THREE.Vector3(x, y, 0));
}
sineWaveGeometry.setFromPoints(points);

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const sineWave = new THREE.Line(sineWaveGeometry, material);
scene.add(sineWave);

camera.position.z = 5;

// Function to update the sine wave
function updateSineWave() {
    const positions = sineWaveGeometry.attributes.position.array;
    for (let i = 0; i < numPoints; i++) {
        const x = (i / (numPoints - 1)) * 10 - 5;
        positions[i * 3 + 1] = amplitude * Math.sin(frequency * x);
    }
    sineWaveGeometry.attributes.position.needsUpdate = true;
}

// Add event listeners for sliders
document.getElementById('amplitude').addEventListener('input', (event) => {
    amplitude = event.target.value;
    document.getElementById('ampValue').textContent = amplitude;
    updateSineWave();
});

document.getElementById('frequency').addEventListener('input', (event) => {
    frequency = event.target.value;
    document.getElementById('freqValue').textContent = frequency;
    updateSineWave();
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
