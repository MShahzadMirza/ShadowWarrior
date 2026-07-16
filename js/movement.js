class MovementController {

    constructor(player) {

        this.player = player;

        this.keys = {};

        window.addEventListener("keydown", (e) => {

            this.keys[e.key.toLowerCase()] = true;

        });

        window.addEventListener("keyup", (e) => {

            this.keys[e.key.toLowerCase()] = false;

        });

    }

    update() {

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

            const direction = new BABYLON.Vector3(x, 0, z);

            direction.normalize();

            direction.scaleInPlace(this.player.currentSpeed);

            this.player.mesh.moveWithCollisions(direction);

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