// =========================================
// Shadow Warrior
// Main Game File
// =========================================

// Get the canvas
const canvas = document.getElementById('renderCanvas');

// Create Babylon Engine
const engine = new BABYLON.Engine(canvas, true);

// =========================================
// Create Scene
// =========================================

const createScene = () => {
    // Create Scene
    const scene = new BABYLON.Scene(engine);

    // Sky Color
    scene.clearColor = new BABYLON.Color4(0.55, 0.8, 1.0, 1);

    // =====================================
    // Camera
    // =====================================

    const camera = new BABYLON.FollowCamera(
    'camera',
    new BABYLON.Vector3(0, 5, -10),
    scene
);

camera.lockedTarget = player.mesh;
camera.radius = 8;
camera.heightOffset = 3;
camera.rotationOffset = 180;

    camera.attachControl(canvas, true);
    // Disable Babylon keyboard controls
    camera.inputs.removeByType("ArcRotateCameraKeyboardMoveInput");

    camera.lowerRadiusLimit = 10;
    camera.upperRadiusLimit = 80;

    // =====================================
    // Lighting
    // =====================================

    const hemiLight = new BABYLON.HemisphericLight(
        'hemiLight',
        new BABYLON.Vector3(0, 1, 0),
        scene,
    );

    hemiLight.intensity = 0.9;

    const sunLight = new BABYLON.DirectionalLight(
        'sunLight',
        new BABYLON.Vector3(-1, -2, -1),
        scene,
    );

    sunLight.position = new BABYLON.Vector3(20, 40, 20);
    sunLight.intensity = 1.2;

    // =====================================
    // Ground
    // =====================================

    const ground = BABYLON.MeshBuilder.CreateGround(
        'ground',
        {
            width: 200,
            height: 200,
        },
        scene,
    );

    const groundMaterial = new BABYLON.StandardMaterial(
        'groundMaterial',
        scene,
    );

    groundMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.6, 0.2);

    ground.material = groundMaterial;
    const player = new Player(scene);

    BABYLON.SceneLoader.ImportMesh(
        "",
        "assets/models/",
        "warrior.glb",
        scene,
        function (meshes) {

            const warrior = meshes[0];

            player.model = warrior;
            player.mesh.isVisible = false;

            warrior.position.copyFrom(player.mesh.position);

            warrior.scaling = new BABYLON.Vector3(1, 1, 1);

            console.log("Warrior Loaded!");
        }
    );
    const movement = new MovementController(player);

    return {
        scene,
        player,
        movement,
        camera,
    };
};

// Create Scene
const game = createScene();

const scene = game.scene;
const player = game.player;
const movement = game.movement;
const camera = game.camera;

// =========================================
// Render Loop
// =========================================

engine.runRenderLoop(() => {

    movement.update();

    if (player.model) {
    player.model.position.copyFrom(player.mesh.position);
    player.model.rotation.y = player.mesh.rotation.y;
}

    const target = player.mesh.position.clone();
    target.y += 1.2;

    camera.target.copyFrom(target);

    scene.render();

    document.getElementById("fps").textContent =
        "FPS: " + Math.round(engine.getFps());

});

// =========================================
// Resize
// =========================================

window.addEventListener('resize', () => {
    engine.resize();
});
