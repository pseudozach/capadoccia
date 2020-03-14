/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Animation = require('Animation');
const Materials = require('Materials');
const Reactive = require('Reactive');
// const Textures = require('Textures');
// const Shaders = require('Shaders');
// const Audio = require('Audio');
// Load in the patches module
// const Patches = require('Patches');
// const TouchGestures = require('TouchGestures');
// const DeviceMotion = require('DeviceMotion');

// Use export keyword to make a symbol available in scripting debug console
// export const Diagnostics = require('Diagnostics');

let point1 = Reactive.pack3(0,0,0);
let delta1 = Reactive.pack3(0.035,0.035,0.035);

const particleSystem0 = Scene.root.find("emitter0");
particleSystem0.angularVelocity = point1;
particleSystem0.angularVelocityDelta = delta1;

const particleSystem1 = Scene.root.find("emitter1");
particleSystem1.angularVelocity = point1;
particleSystem1.angularVelocityDelta = delta1;

const particleSystem2 = Scene.root.find("emitter2");
particleSystem2.angularVelocity = point1;
particleSystem2.angularVelocityDelta = delta1;

const particleSystem3 = Scene.root.find("emitter3");
particleSystem3.angularVelocity = point1;
particleSystem3.angularVelocityDelta = delta1;

const particleSystem4 = Scene.root.find("emitter4");
particleSystem4.angularVelocity = point1;
particleSystem4.angularVelocityDelta = delta1;

// const plane = Scene.root.find('plane0');
// const planeTransform = plane.transform;
// const deviceWorldTransform = DeviceMotion.worldTransform;

// // Bind the rotation of the device to the plane
// // planeTransform.rotationX = deviceWorldTransform.rotationX;
// // planeTransform.rotationY = deviceWorldTransform.rotationY;
// // planeTransform.rotationZ = deviceWorldTransform.rotationZ;

// particleSystem0.angularVelocity = Reactive.pack3(0,deviceWorldTransform.rotationY.div(9),0);
// particleSystem1.angularVelocity = Reactive.pack3(0,deviceWorldTransform.rotationY.div(9),0);
// particleSystem2.angularVelocity = Reactive.pack3(0,deviceWorldTransform.rotationY.div(9),0);
// particleSystem3.angularVelocity = Reactive.pack3(0,deviceWorldTransform.rotationY.div(9),0);
// particleSystem4.angularVelocity = Reactive.pack3(0,deviceWorldTransform.rotationY.div(9),0);

// let color1 = Reactive.HSVA(0.5,0.5,0.5,100);
// let colordelta1 = Reactive.HSVA(0.2,0.2,0.2,0);
// particleSystem.colorModulationHSVA = color1;
// particleSystem.colorModulationHSVADelta = colordelta1;

// particleSystem.scale = 0.5;

// let rot1 = Reactive.pack3(5,5,5);
// particleSystem.particleRotation = rot1;

// angularVelocityDelta
// colorModulationHSVA
// colorModulationHSVADelta

// const plane = Scene.root.find('plane0');
// // Register a tap gesture on the text node
// TouchGestures.onTap(plane).subscribe(function() {
// 	// Edit the text through the NativeUI module
// 	// NativeUI.enterTextEditMode(textNodeName);
// 	delta1 = Reactive.pack3(45,45,45);
// 	particleSystem0.angularVelocity = point1;
// 	particleSystem0.angularVelocityDelta = delta1;
// 	Diagnostics.log('Console message logged from the script.');
// });



// const randoMaterial = Materials.get("defaultMaterial2");


// const mic = Scene.root.find("Microphone");


// Get the 'myText' string from the Patch Editor
// const myString = Patches.getScalarValue('editorToScriptVar');

// const driver = Animation.timeDriver({ durationMilliseconds : 1000});
// const sampler = Animation.samplers.linear(
//     [1, 1, 1, 1],
//     [0, 0, 0, 1]
// );
// const colorAnimation = Animation.animate(
//     driver,
//     sampler
// );


// randoMaterial.setTexture(
//     Reactive.pack4(
//         colorAnimation.get(0),
//         colorAnimation.get(1),
//         colorAnimation.get(2),
//         colorAnimation.get(3)
//     ), 
//     {textureSlotName: Shaders.DefaultMaterialTextures.DIFFUSE}
// ); 



// var texSig = Textures.get('dotted-hot-air-balloon-80').signal;//optional for your use
// var packedCol = Reactive.pack4(1, 0.5, 0.7, 1);
// var newCol = Reactive.mul(texSig, packedCol);//optional for your use

// const textureSlot = Shaders.DefaultMaterialTextures.DIFFUSE;

// randoMaterial.setTextureSlot(newCol, {textureSlotName: textureSlot});





// particleSystem.birthrate = 35;

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');
