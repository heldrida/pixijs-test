(function () {

	// renderer instance
	var renderer = PIXI.autoDetectRenderer(400, 300),

	// create pixi stage
	stage = new PIXI.Stage(0xFFFFFF);

	// place it in to the DOM
	document.body.appendChild(renderer.view);

}());