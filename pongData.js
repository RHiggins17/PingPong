var pongObjects = 
{ 
"COMMENT": "Pong Board",
"type": "node",
"name": "rootNode",

"children":
[
	{
		"COMMENT": "CAMERA LOOKING AT ORIGIN FROM ALONG THE Z AXIS",
		"type": "perspectiveCamera",
		"name": "camera1",
		"eye": [0, 0, 20],
		"center": [0, 0, 0],
		"vup": [0, 1, 0],
		"fov": 30
	},
	{
		"COMMENT": "DIRECTIONAL LIGHT",
		"type": "directionalLight",
		"name": "light1",
		"color": [1, 1, 0.5],
		"position": [0.5, 1, 0.5]
	},
	{
		"COMMENT": "DIRECTIONAL LIGHT",
		"type": "directionalLight",
		"name": "light2",
		"color": [0.3, 0.3, 1],
		"position": [-0.5, -1, 0.5]
	},
	{
		"COMMENT": "DIRECTIONAL LIGHT",
		"type": "directionalLight",
		"name": "light2",
		"color": [0.3, 0.3, 0.3],
		"position": [0, 0, 1]
	},
	{
		"COMMENT": "ball",
		"type": "mesh",
		"name": "ball",
		"translate": [0, 0, 0],
		"scale": [0.5, 0.5, 0.5],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sphereMat",
			"diffuseColor": [0.0, 0.8, 0.8]
		}
	},
	{
		"COMMENT": "Left Rectangle",
		"type": "mesh",
		"name": "leftRect",
		"translate": [-5.0, 0, 0],
		"scale" : [0.1, 1.5, 1.0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "cubeMat",
			"diffuseColor": [1.0, 0.0, 1.0],
		}
	},
	{
		"COMMENT": "Right Rectangle",
		"type": "mesh",
		"name": "rightRect",
		"translate": [5.0, 0, 0],
		"scale" : [0.1, 1.5, 1.0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "cubeMat",
			"diffuseColor": [1.0, 0.0, 1.0],
		}
	}
]
};

