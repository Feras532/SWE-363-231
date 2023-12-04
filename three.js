let camera, scene, renderer;
let geometry, material, mesh;
let screensaverTimeout;

function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document
    .querySelector("#screensaver-canvas")
    .appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render(scene, camera);
}

function startScreensaver() {
  document.querySelector("#screensaver-canvas").style.display = "block";
  init();
  animate();
}

function resetScreensaverTimeout() {
  clearTimeout(screensaverTimeout);
  screensaverTimeout = setTimeout(startScreensaver, 60000);
}

// Reset the screensaver timeout whenever the user interacts with the page
window.addEventListener("mousemove", resetScreensaverTimeout);
window.addEventListener("keydown", resetScreensaverTimeout);

// Set the initial screensaver timeout
resetScreensaverTimeout();
