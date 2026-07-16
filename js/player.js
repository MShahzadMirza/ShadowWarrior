class Player {

    constructor(scene) {

        this.scene = scene;

        // Create Player Mesh
        this.mesh = BABYLON.MeshBuilder.CreateCapsule(
            "player",
            {
                height: 2,
                radius: 0.5
            },
            scene
        );

        this.mesh.position.y = 1;

        // Player Material
        const material = new BABYLON.StandardMaterial(
            "playerMaterial",
            scene
        );

        material.diffuseColor = new BABYLON.Color3(
            0.2,
            0.2,
            0.25
        );

        this.mesh.material = material;

    }

}