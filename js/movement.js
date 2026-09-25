class MovementController {

    constructor(player, camera) {

        this.player = player;
        this.camera = camera;
        this.keys = {};

        window.addEventListener("keydown", (e) => {

            this.keys[e.key.toLowerCase()] = true;

        });

        window.addEventListener("keyup", (e) => {

            this.keys[e.key.toLowerCase()] = false;

        });

    }

    update() {

        console.log(this.keys);

        let x = 0;
        let z = 0;

        if (this.keys["w"]) z += 1;
        if (this.keys["s"]) z -= 1;
        if (this.keys["a"]) x -= 1;
        if (this.keys["d"]) x += 1;

        // Sprint
        this.player.currentSpeed =
            this.keys["shift"]
                ? this.player.runSpeed
                : this.player.walkSpeed;

        if (x !== 0 || z !== 0) {

            // Get camera direction
            const forward = this.camera.getForwardRay().direction;
            forward.y = 0;
            forward.normalize();

            // Get camera right direction
            const right = new BABYLON.Vector3(
                forward.z,
                0,
                -forward.x
            );

            // Create movement direction
            const direction = forward.scale(z).add(right.scale(x));

            direction.normalize();

            direction.scaleInPlace(this.player.currentSpeed);

            this.player.mesh.position.addInPlace(direction);

            // Face movement direction

            const angle = Math.atan2(direction.x, direction.z);

            this.player.mesh.rotation.y = BABYLON.Scalar.Lerp(

                this.player.mesh.rotation.y,

                angle,

                this.player.rotationSpeed

            );

        }

    }

}