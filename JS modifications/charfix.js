pc.Application.getApplication().once("postrender", () => {

    // ===== Override: setHeroSkin =====
    pc.app.scripts.list()[11].prototype.setHeroSkin = function () {
        const isDefault = this.heroSkin === 'Default';
        const skinName = isDefault
            ? `${this.hero}-${this.heroSkin}.jpg`
            : this.heroSkin;

        if (!skinName || !this.characterEntity) {
            this.weaponHolder.reparent(this.handEntity);
            return;
        }

        const isModelSkin =
            skinName.includes('Model-') || skinName.includes('.glb');

        if (isModelSkin) {
            const asset = this.app.assets.find(skinName);
            if (!asset) return;

            this.characterEntity.model.asset = asset.id;

            this.app.assets.get(asset.id).ready(() => {
                this.handEntity = this.characterEntity.findByName(this.handEntityName);
                this.weaponHolder.reparent(this.handEntity);
                console.log(`Loaded model skin ${this.username}`);
            });

        } else {
            const material = this.characterEntity.model.material.clone();
            const texture = pc.app.assets.find(`${this.hero}-${this.heroSkin}.jpg`);
            const meshes = this.characterEntity.model.meshInstances;

            if (meshes?.length) {
                meshes.forEach(mesh => (mesh.material = material));

                if (texture) {
                    material.diffuseMap = texture.resource;
                    material.update();
                }
            }

            this.weaponHolder.reparent(this.handEntity);
        }

        this.characterEntity.animation.play('Idle');
    };


    // ===== Override: createPlayer =====
    pc.app.scripts.list()[9].prototype.createPlayer = function (data) {
        const player = this.enemyEntity.clone();
        const enemy = player.script.enemy;

        player.enabled = true;

        // Assign data
        enemy.playerId = data.playerId;
        enemy.username = data.username;
        enemy.team = data.team;
        enemy.level = data.level;
        enemy.group = data.group;

        enemy.skin = data.skin;
        enemy.heroSkin = data.heroSkin;

        // Setup
        enemy.setUsername(data.username, data.team, data.level);
        enemy.killMessage = data.killMessage;

        enemy.weaponSkins = data.weaponSkins;
        enemy.setWeapon(data.weapon);
        enemy.setCharacterSkin(data.skin, 'Default', data.dance);

        this.playerHolder.addChild(player);
        this.players.push(player);
    };

    console.log('Force Default Skin');
});


// ===== Shin texture handling =====
let cachedShinTexture = null;

pc.app.on("Game:PlayerJoin", (state) => {
    if (!state) return;

    cachedShinTexture ||= pc.app.assets.find('Shin-Default.jpg');

    const game = pc.app.root.findByName("Game");
    const playerHolder = game?.findByName("PlayerHolder");

    if (!playerHolder?.children) return;

    const index = playerHolder.children.length - 1;
    if (index < 2) return;

    const player = playerHolder.children[index];
    const enemy = player?.script?.enemy;

    if (!enemy) return;

    if (enemy.skin !== 'Shin') {
        enemy.setCharacterSkin(enemy.skin, "Default", enemy.danceName);
        return;
    }

    const shin = player
        .findByName('ModelHolder')
        ?.findByName('Shin');

    if (
        shin?.model?.meshInstances?.length &&
        cachedShinTexture?.resource
    ) {
        const material = shin.model.meshInstances[0].material;
        material.diffuseMap = cachedShinTexture.resource;
        material.update();
    }
});


