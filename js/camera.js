class CameraController {

    constructor(scene, canvas, player) {

        this.scene = scene;
        this.canvas = canvas;
        this.player = player;

        // Camera settings
        this.distance = 8;
        this.height = 4;

        this.rotationY = 0;
        this.rotationX = 0.25;

        this.sensitivity = 0.003;

        // Create camera
        this.camera = new BABYLON.FreeCamera(
            "thirdPersonCamera",
            new BABYLON.Vector3(0, 4, -8),
            scene
        );

        this.camera.minZ = 0.1;

        // Mouse control
        canvas.addEventListener("click", () => {
            canvas.requestPointerLock();
        });

        document.addEventListener("mousemove", (event) => {

            if (document.pointerLockElement !== canvas) {
                return;
            }

            this.rotationY -= event.movementX * this.sensitivity;
            this.rotationX -= event.movementY * this.sensitivity;

            // Limit vertical rotation
            this.rotationX = Math.max(
                -0.2,
                Math.min(0.8, this.rotationX)
            );

        });

        // Make this the active camera
        scene.activeCamera = this.camera;
    }

    update() {

        const playerPosition = this.player.mesh.position;

        // Camera offset
        const offset = new BABYLON.Vector3(
            Math.sin(this.rotationY) * this.distance,
            this.height,
            Math.cos(this.rotationY) * this.distance
        );

        // Put camera behind player
        this.camera.position = playerPosition.add(offset);

        // Look toward player
        const target = playerPosition.clone();

        target.y += 1.2;

        this.camera.setTarget(target);
    }
}