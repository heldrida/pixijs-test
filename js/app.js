(function () {

	// renderer instance
	// the `autoDetectRenderer` checks if WebGL is available or fallback canvas
	var renderer = PIXI.autoDetectRenderer(400, 300, {backgroundColor : 0x1099bb}),

	// create pixi stage
	stage = new PIXI.Container();

	// place it in to the DOM
	document.querySelector('.ns-pixijs-test').appendChild(renderer.view);

	requestAnimationFrame(animate);

	function animate() {

		requestAnimationFrame(animate);

		skull.rotation += 0.01;

		skull.scale.x += 0.001;
		skull.scale.y += 0.001;

		// render the `stage` instance
		renderer.render(stage);

	}

	// create and add a sprite
	var texture = PIXI.Texture.fromImage('img/skull.png?201505281812'),

	// creates a texture from an image path
	skull = new PIXI.Sprite(texture);

	// center the sprite anchor point
	skull.anchor.x = 0.5;
	skull.anchor.y = 0.5;

	// move the psirce to the center of the render view
	skull.position.x = 200;
	skull.position.y = 150;

	stage.addChild(skull);

	/*
	// events
	skull.setInteractive(true);

	skull.click = function () {

		alert(1);

	}
	*/
	
}());