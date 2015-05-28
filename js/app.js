(function () {

	// renderer instance
	// the `autoDetectRenderer` checks if WebGL is available or fallback canvas
	var renderer = PIXI.autoDetectRenderer(400, 300),

	// create pixi stage
	stage = new PIXI.Stage(0xFFFFFF);

	// place it in to the DOM
	document.querySelector('.ns-pixijs-test').appendChild(renderer.view);

}());