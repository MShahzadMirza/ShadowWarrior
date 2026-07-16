class Player {

    constructor(scene) {

        this.scene = scene;

        // ==========================
        // Player Mesh
        // ==========================

        this.mesh = BABYLON.MeshBuilder.CreateCapsule(
            "player",
            {
                height: 2,
                radius: 0.5
            },
            scene
        );

        this.mesh.position = new BABYLON.Vector3(0, 1, 0);

        // ==========================
        // Material
        // ==========================

        const material = new BABYLON.StandardMaterial(
            "playerMaterial",
            scene
        );

        material.diffuseColor = new BABYLON.Color3(
            0.25,
            0.25,
            0.3
        );

        this.mesh.material = material;

        // ==========================
        // Movement Values
        // ==========================

        this.walkSpeed = 0.15;
        this.runSpeed = 0.30;

        this.currentSpeed = this.walkSpeed;

        this.rotationSpeed = 0.15;

        // Future
        this.health = 100;
        this.mana = 100;
        this.level = 1;

    }

}