(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"EARTH_atlas_", frames: [[0,582,535,75],[0,0,2104,580]]}
];


// symbols:



(lib.DERSPIEGELcopy = function() {
	this.spriteSheet = ss["EARTH_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.earth = function() {
	this.spriteSheet = ss["EARTH_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC40D").s().p("ABxCyQgFgKgCgLQgFgXAMgGQAcgOAFgEQARgNAAgTIADgtQAAgVgNAGQgKAFgIAOQgHALgFAAQgHAAgHgmQgGggAAgTQAAgXgGgKQgLgRghAAIhQgLQgvgHgMASIgbAnQgNASAAANQAAAUgKA7QgKgVgMgzQgKgvgGgHQgPgRACgKQAGgUBBgaQBQggAngDQAvgEArAdQAsAdAYAkQAWAiAAAfQAAAUAEAxQACAugGAYIgLAtQgGAPgNAAg");
	this.shape.setTransform(0,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E16600").s().p("AiCCfQgNgGgJhDQgIg3AAgpQAAh4AUgKQAPgHAlgGQAjgHAXAAQAhAAAeAIQApAKACAVQAEAqATATIAOAWQAGAKAAgMQAAgRAYAOQAXAMgHAVIgSA4QgQAhgaAAQgOAAABAZQAAANADAMIhlATQhNANgbAAQgKAAgEgCg");
	this.shape_1.setTransform(2.4,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.8,-19.3,37.6,38.8);
p.frameBounds = [rect];


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC40D").s().p("ABxCyQgFgKgCgLQgFgXAMgGQAcgOAFgEQARgNAAgTIADgtQAAgVgNAGQgKAFgIAOQgHALgFAAQgHAAgHgmQgGggAAgTQAAgXgGgKQgLgRghAAIhQgLQgvgHgMASIgbAnQgNASAAANQAAAUgKA7QgKgVgMgzQgKgvgGgHQgPgRACgKQAGgUBBgaQBQggAngDQAvgEArAdQAsAdAYAkQAWAiAAAfQAAAUAEAxQACAugGAYIgLAtQgGAPgNAAg");
	this.shape.setTransform(0,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E16600").s().p("AiCCfQgNgGgJhDQgIg3AAgpQAAh4AUgKQAPgHAlgGQAjgHAXAAQAhAAAeAIQApAKACAVQAEAqATATIAOAWQAGAKAAgMQAAgRAYAOQAXAMgHAVIgSA4QgQAhgaAAQgOAAABAZQAAANADAMIhlATQhNANgbAAQgKAAgEgCg");
	this.shape_1.setTransform(2.4,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.8,-19.3,37.6,38.8);
p.frameBounds = [rect];


(lib.rightarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E16600").s().p("AgzCLIAQgPQASgPAGAAQAMAAgGg6QgHhBgnguIhJhWIgbgiQgIgUgFgVQgKgqANgHQAWgLAcgFQAlgHANANIAWAXQAIALAAAaQAAARAsA0QA1A9AWA8QAUA2AyBZQAdBFgxAlQg3ApgzARQgnAMgsAAg");
	this.shape.setTransform(16.9,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightarm, rect = new cjs.Rectangle(0,0,33.8,57.9), [rect]);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFFED").s().p("AgcgBQAKgHAOAAQATAAAOAKQgKAHgOAAIgBAAQgRAAgPgKg");
	this.shape.setTransform(4.4,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFFED").s().p("AgdAAQALgIAQgBQASAAAOAJQgLAKgQAAIgDAAQgRAAgMgKg");
	this.shape_1.setTransform(4.6,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#030106").s().p("AAAASQgQABgLAIQgOgKgCgPQgCgSARgLQAPALASAAQAOAAAKgHQANAKACANQACARgOALQgOgKgSAAg");
	this.shape_2.setTransform(4.4,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouth, rect = new cjs.Rectangle(0,0,8.8,7.3), [rect]);


(lib.map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.earth();
	this.instance.parent = this;
	this.instance.setTransform(-93.6,-25.8,0.089,0.089);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.map, rect = new cjs.Rectangle(-93.6,-25.8,187.4,51.7), [rect]);


(lib.leftarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Armature_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E16600").s().p("AhhB0IARgQQAdgbAhgwQAXgsgWg2QgyhQgSARQgGgLAEgjQAKhQCVAnQgUAagFAgQgDAVAIAVQAZBBAkByQgDATgIAVQgeBLhCAZQg5AeguAKQgehaAegeg");
	this.shape.setTransform(11.1,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.2,-0.3,22.6,47.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.gradient2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(0,0,0,0.6)"],[0,1],0,0,0,0,0,104.4).s().p("ArbLcQkvkwAAmsQAAmsEvkvQEvkvGsAAQGsAAEwEvQEvEvAAGsQAAGskvEwQkwEvmsAAQmsAAkvkvg");
	this.shape.setTransform(103.5,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gradient2, rect = new cjs.Rectangle(0,0,207,207), [rect]);


(lib.fatassmf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#080300").s().p("AgSgJQgFgKAHAAIAOACQAHAAAQAIIAAAdQgfgPgIgOg");
	this.shape.setTransform(5.5,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#080300").s().p("AgZgNIALgFQANgFAFAAIARgCQAJAAgGAMQgKATgnAUg");
	this.shape_1.setTransform(55,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#080300").s().p("AhyApIAAgxQAZAfBZgdQAogOBLgmIAAAoQgvAdg1AXQg4AZgiAAQgcAAgLgSg");
	this.shape_2.setTransform(39.9,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#080300").s().p("AAHAtQgsgVgvgiIAAgyQAeAdA2AUQA3ARAegGIAAAxQgGAMgRAAQgUAAgjgQg");
	this.shape_3.setTransform(17.9,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3BD99").s().p("AD1MqQgegYgiAJIgcAJQgQAGgMAAQgYAAAEhMQAKhtAAhBQAAg4gehYQgehXAAhtQAAh9gZhjIgZhLIgTBvQgUB4AAAmQAAAVgUCKQgUCJAABKQAABTgcATQgRANg3APQgpAUg2giQgvgdgSglQgLgVAgg8QAihBgFgYQgGgfgJhfIgPikQgGg9ANhBQAShEAFgjQADgUgch4QgoivgNhEQg/lRBbgeQCdBxC3glQBegTBLgvQATgKAtAvQAxA0AHA9QAoBbgEBsQgDBJgdB2QgkCOgGAqQgPBjAXBMQA1CwApDgQAoDkgOA0QgPAzgsAPQgNAEgNAAQgdAAgagUg");
	this.shape_4.setTransform(38.9,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fatassmf, rect = new cjs.Rectangle(0,0,77.8,166.1), [rect]);


(lib.fuckmouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.mouth = new lib.mouth();
	this.mouth.name = "mouth";
	this.mouth.parent = this;
	this.mouth.setTransform(4.4,3,1,0.795,0,0,0,4.4,3.7);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

}).prototype = getMCSymbolPrototype(lib.fuckmouth, rect = new cjs.Rectangle(0,0,8.8,5.8), [rect]);


(lib.fuckme = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.mouth = new lib.mouth();
	this.mouth.name = "mouth";
	this.mouth.parent = this;
	this.mouth.setTransform(4.5,3.9,1,1.03,0,0,0,4.5,3.8);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

}).prototype = getMCSymbolPrototype(lib.fuckme, rect = new cjs.Rectangle(0,0,8.8,7.5), [rect]);


(lib.earthmap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.map();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.earthmap, rect = new cjs.Rectangle(-84.5,-84.5,169,169), [rect]);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gradient
	this.instance = new lib.gradient2();
	this.instance.parent = this;
	this.instance.setTransform(7.5,-22.5,0.217,0.217,0,0,0,103.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(94));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AieCfIgOgPQg0g+AAhSQAAhSA0g8IAOgQQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCg");
	var mask_graphics_99 = new cjs.Graphics().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:7.5,y:0}).wait(99).to({graphics:mask_graphics_99,x:7.5,y:0}).wait(1));

	// Layer_4
	this.instance_1 = new lib.earthmap();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.3,48.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-42.3,y:-48.8},99).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CD1C").s().p("AC+DNQgQgEgNgHQgSgIgQgVQgUgagVgQQgWgQgtgVQgYgLgJgYQgMgigMgPQgJgJgNgEQgKgCAEgFIAGgEIgOACQgKADARAHQASAGAFAJIABAJQgGgMgLAEQgLAFABANQABAKAQAKQASAKAEAFQAEADAHASQAHAQAEACQAFACAHAGIAGAFQgFgEgJgBQgJgDgGgDQgEgEgEgGQgEgJgKgLQgGgGgSgLQgLgIgGgRQgEgKADgMQACgLgDgIQgFgLgUgIQgTgGgOACQgLABAEARQAEAOAOAUQAMARALAIIAhATQATAMAFASIACAPQgFgKgFgFQgDgEgNgHIgggSQgYgNgIgKQgIgLgEAEIgCACQABgKgNgUQgQgXgOADQgOACAHAKQAGAIAPALQALAHADARIABAJQgBgFgEgGQgGgJgHgHIgYgSQgTgRACgYIBchsICMhGQATgCAYAAQAvABAVAOQAcAUAKALQAOANAAANQAAAKAQAQIAQAOQgXgIgMgNQgHgIgHgRQgFgMgLgGIgYgLQgOgFABAMQAAANAJAAQAJgBAXAXQAXAZADARQADAPAXASIAXAQIgVgLQgXgLgFgOQgJgTgRgTQgTgVgGAMQgEALAJALQANAPAHALQAFAIABAKQAAAHAQAOQAHAIARAFQAMAFAEAHQAEAJALAOIALANQgJgEgKgMIgTgZQgIgIgLACQgMADgJgHQgKgIgFgMQgJgXgDgEQgJgRgNgDQgKgDgFAIQgGAJAEAKQAEALAMAFQALAFAGAHIAEAHIgHgIQgGgFgKgBQgRgDgPgSQgFgHgGgDQgFgDgCACQgCACAGALQAGAOALAKQALAKAGAKIAHANQgGgEgFgHIgFgLIgLgHQgKgHgFgJQgFgJgCgBIgCACIgNAEQgKAGAQAJQARAKAJANQAFAJAFAPQADAIANAJIANAIQgKgCgMgHQgLgIgGgLQgIgPgMgFQgQgGgLAQQgNARAFAKQACAFAdAiQAQASAaAOQAYAOATAZIAWAkQALATAVAMQAWAMALANIAGAKQgQgMgJgDg");
	this.shape.setTransform(17.1,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8CD1C").s().p("ABJDMQAUgagFg1QAAgGgYhLQgUg8AHg2IAQg/IAzhIQgoBPgGA1QgCAVAGAsQAJA4AhAqQANAPACAJQADAOgKAUQgTAogkASgAg0gzQgKgOgDgHQgFgRARgHIARgGQgEAEgDAFQgNAcAZA0gAiFiHIAAgBIAEAGIgEgFg");
	this.shape_1.setTransform(41.7,19.1,0.725,0.725,135);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8CD1C").s().p("AiyFAQgYgSgZgaQgyg0gGgmQgJgwABgSQAAgVAOgNQAMgLgCgrIgEgoQAQAggFAXIgPAnQgHARAJAXQAFAOAOAcQAIAVASgUQAMgMABgIQACABADgBQASgHAPgnQAJgYAKgrQAFgUgCgHQgFgOgBgbQAAgKgFgNIAIADQARAFACARQADAUgIARIgQAqQgIAdAIAYQAIAXAOgDQAOgDAKgYQAJgYgIgTQgHgRAHgdIAJgZIgCAZQABAWAIAMQAIAMgBAVIgFAhQgBANADAKQACAIAEAAQAFAAAGgTQAIgVgBgWQgCgXAGgRIAGgVQADAKgEANIgFARIAEAUQADASgEAPQgFAPACADQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIATAKQASAFgIgcQgJgeABgNQABgIAKgRQAHgNgHg/IgIg+QALANAJAxQAKAxgGAUQgIAbAIAiQAKAoAdgFQAPgCAMgFIACAEQALAVAlAfIARANQAOAHgLgZQgMgaANgWIAOgSQgGAUAKANQALANALgPQAKgMgGgcQgIgeAAgJQAAgJATgVIALgNIgGArQgBANAIAfQAFAUgMAZQgIAPgPAKQgPAKgGAMQgHASAOAeQANAbARANQAOAKAdgqQALgQABgdIADgsIAFAXQADAQgBAEQgBAOATAAIAdgcQgIAJgOAVQgSAcgDAPQgJArARANQASANAKgUQAEgHABgIIADAOQABAogbAYIjXARgAEYD9QgCgLAGgJIAIgLQgDAGgCALQgDAMgBALIgDgJgADwCSQgYgKgGgaQgIghARhBIASg3QgGATgDAtQgEAyAFASIAQA2IACAHIgHgEgAjoB/QgIgMABgWQABgtALgWQgEAoADAoQACAVADAKQgGgFgDgFgABPBsQAUgZgFg2QAAgFgYhLQgUg9AHg2IAQg+IAAgBQADBTAGArQAJA4AhAqQANAOACAJQADAOgKAVQgTAogkARIACgCgACZhVIANAWQAFAIAJAFQAHAEABAEQADAFAAAlgAixhmQAFgOAEgcIACgZQAFAMgFAfQgHApgBALQgIgRAFgLgABGkoQgLgkAKgkIALgcQABAKgFAlQgFAmAAARIgBgCg");
	this.shape_2.setTransform(29.8,27.7,0.725,0.725,135);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CD1C").s().p("AiyE2QgXgSgZgaQgyg0gHgmQgJgzAAgXQAAgdANgNQAMgLgBgjIgDggQARAhgBAbQgBAQgLAaQgHASAFATQAEALALAaQAIAVANgOQAOgPgLgJQgKgIABgyQACg0AOgVQANgSgFgtIgIgqIAMAiQALAmgIAUQgLAdgCAnQgCArATgHQAQgHADgWQACgeAEgUQADgOAKgKQAHgHgBghQgBgQgLgYQgJgSAEgMQAGgOADgcIADgZQAFANgDAZQgGApAAAGQgBASAOAJQAQAKACARQACAUgHASIgQApQgIAcAJARQAIAOAPgDQAOgDAGgPQAGgOgEgVQgGgmAKgcIAMgWQAAAFgHAbQgGAdAEAYIAIAeQAFAQgBALQgCANADAKQADAIAEAAQAEAAAHgTQAHgVgBgWQgBgXAFgRQACgGgBgVIgBgVQAEALABAaQABAYgBAIQgBAEACAPQABARgEAPQgEAPACADQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIATAKQASAFgIgcQgSg/ARghQAHgMgHg0IgJgzQALANAMA0QAMA0gGATQgHAZAIASQAKAXAdgEQAfgFAGgRQAEgJAFhBQACglgMgsQgLgoAGgwIAQg+QAIghgKgjQgLgkADgaIAFgSQADAfAHAMQANAWAHAVQAKAdgFAoQgGAxAGAoQAGApAaBHQAOAmgRAjQgXAxgCAdQgCAVAKATQAHANgJAAIgKgCIAQANQAPAHgMgZQgLgaAFgQIAIgLQgGAUARAHQARAHAMgQQAJgMgGgcQgIgeAAgJQAAgIAMgbIAFgNIAFAOQAFAJgCAZQgBANAHAfQAFAUgMAZQgHAPgQAKQgPAKgFAMQgIASAOAeQANAbARANQAPAKAMgWQALgTAIgnQAGgfgDgUIgPg4QgIghANgZIAOgSQgFAQAAALQAAAHAFAVIARA2QALAogCAUQgDAUAIAAIAEgCQgLAMgIAjQgJArASANQARAMAFgSQADgQgFgcQgEgUAOgVIAJgLQgDAGgDALQgEAQAAAPQAAAIAGAmQACAogbAYIjYARgACqhMIAIgkQACAKgDAvIgCAlQgJgWAEgkg");
	this.shape_3.setTransform(24.2,23.8,0.61,0.568,135);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8CD1C").s().p("AsCSzQhlhGhshlQjXjIgciUQgojFAAhaQABhzA4gyQAzgrgEiIIgNh9QBHCDgEBnQgFBAgtBlQgeBGAVBIQAQArAxBmQAjBQA4g3QA8g3gwgkQgsggAGjBQAJjKA8hUQA1hIgVivIggihIAzCEQAwCSgiBQQgyBzgHCVQgICpBPgdQBIgZANhWQAGh2AUhMQANg2ArgsQAbgbgEiAQgCg/gxhbQgnhIATguQAYg2APhtIAKhhQAZAzgQBiQgXCegBAZQgEBEA9AjQBDAmAIBCQAKBPgfBFQg7CDgKAhQghBtAnBAQAjA5BAgOQBAgMAhg6QAihAgkhIQgfhAAHg4IAPgsQgEA0ACAJQAFAtAkAvQBCBTgQCMQgHAyANAlQALAhARAAQAUAAAbhKQAhhRgFhYQgGhZAXhCIAbhRQANAmgPAzQgKAdgPAkIASBPQAMBGgQA6QgUA8AIAKQAFAFAHgFIBSAoQBNARgjhqQgkhxAWhdQAPg6AvhRQAegzgThcIgahWQAtAwAPBOQAPBPgZBMQgOApABBZQACBeAUBVQAyDgB2gvQBYgjAUjNIAHhmQABA4ASBIQAeBzApBAQAfAzAxAlQAYASATAIIBHAxQA+AcgyhjQgxhiAYg/IAggrQgaBNBJAbQBBAXAtgpQgeA8gRAwQgTA1gWAtQggBEA8B0QA4BrBKAxQA+AoA2hXQAvhKAiiXQAah3gPhQQgihwgchpQgjiAA2hhIA+hGQgXA+ACArQAAAdAVBRQAQAxA4CiQAxCagKBPQgLBNAgAAIATgGQgxArghCKQgmCnBLAxQBJAwAWhIQAPg8gXhtQgQhOA9hTIAmgpQgOAXgMArQgQA+gDA6QAAAgAcCTQAGCZhzBeIuhBCgALQFmQgjh0AAgkQAAggAvhnQAthegKgZQgNgggLg4IgJgzQAJAkAnA0QAjAwAGAnQAEAigNApQgRA4gGBXQgJB1gLApQgIAZgjBCQAEgmgMg7gAF9CzQCCiZARjdQACgfgCgbQAlBfBUCtQAqCCh6AVQiVAbhUAlQAXgYAWgbgAD5CMQgKAWgFAbQAFgsAKgFgAHulcQgFgCgCgDQgagdhUgrQhagug6hGQhDhUAMhUQAJg+AihBQATglAqhDQAhg7AIgzQAKhBgahNQguiNANhjIAXhFQALB2AgAxQA4BVAeBSQApBvgVCbQgaDAAaCZQAPBaAoB+IgDgIg");
	this.shape_4.setTransform(10.1,9.5,0.16,0.16,135,0,0,-1.2,152.8);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8CD1C").s().p("ABCD7QAVgagFg2QgBgFgYhLQgUg9AHg1IAQg/IBQimQghBKgVBcQgVBbAFAhQAIA5AiApQAMAQACAJQADANgKAVQgTAogjASgAg6gEQgLgOgCgHQgGgRARgHIARgGQgEAEgCAFQgOAbAaA0gAiLhZIAAAAIADAGIgDgGg");
	this.shape_5.setTransform(43.8,25.1,0.693,0.737,135);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8CD1C").s().p("AiyFAQgYgSgZgaQgyg0gGgmQgJgwABgSQAAgVAOgNQAMgLgCgrIgEgoQAQAggFAXIgPAnQgHARAJAXQAFAOAOAcQAIAVASgUQAMgMABgIQACABADgBQASgHAPgnQAJgYAKgrQACgKAHgOQADgEgBghQAAgEgJgKQgIgMgCgEIAIADQARAFACARQADAUgIARIgQAqQgIAdAIAYQAIAXAOgDQAOgDAKgYQAJgYgIgTQgHgRAHgdIAJgZIgCAZQABAWAIAMQAIAMgBAVIgFAhQgBANADAKQACAIAEAAQAFAAAGgTQAIgVgBgWQgCgXAGgRIAGgVQADAKgEANIgFARIAEAUQADASgEAPQgFAPACADQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIATAKQASAFgIgcQgJgeABgNQABgIAKgRQAHgNgHg/IgIg+QALANAJAxQAKAxgGAUQgIAbAIAiQAKAoAdgFQAPgCAMgFIACAEQALAVAlAfIARANQAOAHgLgZQgMgaANgWIAOgSQgGAUAKANQALANALgPQAKgMgGgcQgIgeAAgJQAAgJATgVIALgNIgGArQgBANAIAfQAFAUgMAZQgIAPgPAKQgPAKgGAMQgHASAOAeQANAbARANQAOAKAdgqQALgQABgdIADgsIAFAXQADAQgBAEQgBAOATAAIAdgcQgIAJgOAVQgSAcgDAPQgJArARANQASANAKgUQAEgHABgIIADAOQABAogbAYIjXARgAEYD9QgCgLAGgJIAIgLQgDAGgCALQgDAMgBALIgDgJgADwCSQgYgKgGgaQgIghARhBIASg3QgGATgDAtQgEAyAFASIAQA2IACAHIgHgEgAjoB/QgIgMABgWQABgtALgWQgEAoADAoQACAVADAKQgGgFgDgFgABPBsQAUgZgFg2QAAgFgYhLQgUg9AHg2IAQg+IAAgBQADBTAGArQAJA4AhAqQANAOACAJQADAOgKAVQgTAogkARIACgCgACZhVIANAWQAFAIAJAFQAHAEABAEQADAFAAAlgAixhmQAFgOAEgcIACgZQAFAMgFAfQgHApgBALQgIgRAFgLgABGkoQgLgkAKgkIALgcQABAKgFAlQgFAmAAARIgBgCg");
	this.shape_6.setTransform(30.2,30.4,0.693,0.737,135);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8CD1C").s().p("AsCSzQhlhGhshlQjXjIgciUQgojFAAhaQABhzA4gyQAzgrgEiIIgNh9QBHCDgEBnQgFBAgtBlQgeBGAVBIQAQArAxBmQAjBQA4g3QA8g3gwgkQgsggAGjBQAJjKA8hUQA1hIgVivIggihIAzCEQAwCSgiBQQgyBzgHCVQgICpBPgdQBIgZANhWQAGh2AUhMQANg2ArgsQAbgbgEiAQgCg/gxhbQgnhIATguQAYg2APhtIAKhhQAZAzgQBiQgXCegBAZQgEBEA9AjQBDAmAIBCQAKBPgfBFQg7CDgKAhQghBtAnBAQAjA5BAgOQBAgMAhg6QAihAgkhIQgfhAAHg4IAPgsQgEA0ACAJQAFAtAkAvQBCBTgQCMQgHAyANAlQALAhARAAQAUAAAbhKQAhhRgFhYQgGhZAXhCIAbhRQANAmgPAzQgKAdgPAkIASBPQAMBGgQA6QgUA8AIAKQAFAFAHgFIBSAoQBNARgjhqQgkhxAWhdQAPg6AvhRQAegzgThcIgahWQAtAwAPBOQAPBPgZBMQgOApABBZQACBeAUBVQAyDgB2gvQBYgjAUjNIAHhmQABA4ASBIQAeBzApBAQAfAzAxAlQAYASATAIIBHAxQA+AcgyhjQgxhiAYg/IAggrQgaBNBJAbQBBAXAtgpQgeA8gRAwQgTA1gWAtQggBEA8B0QA4BrBKAxQA+AoA2hXQAvhKAiiXQAah3gPhQQgihwgchpQgjiAA2hhIA+hGQgXA+ACArQAAAdAVBRQAQAxA4CiQAxCagKBPQgLBNAgAAIATgGQgxArghCKQgmCnBLAxQBJAwAWhIQAPg8gXhtQgQhOA9hTIAmgpQgOAXgMArQgQA+gDA6QAAAgAcCTQAGCZhzBeIuhBCgALQFmQgjh0AAgkQAAggAvhnQAthegKgZQgNgggLg4IgJgzQAJAkAnA0QAjAwAGAnQAEAigNApQgRA4gGBXQgJB1gLApQgIAZgjBCQAEgmgMg7gAFkDKQANgSAMgFQBpgjAqgtQAkgmgCg0QgBgZgThIQgRhCADgpQACgfgCgbQAlBfBUCtQAqCCh6AVQiVAbhUAlIAUgcgAD5CMQgKAWgFAbQAFgsAKgFgAHulcQgFgCgCgDQgagdhUgrQhtg2hEg+QhhhXALhRQAJg/ArhAQAZglA4hDQAwg8AOgyQAVhBgbhNQguiNANhjIAXhFQALB2AgAxQA4BVAeBSQApBvgVCbQgaDAAaCZQAPBaAoB+IgDgIg");
	this.shape_7.setTransform(9.3,10,0.158,0.158,135,0,0,-1.1,152.9);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_7}]},2).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},4).wait(11).to({_off:false},0).to({_off:true},4).wait(12).to({_off:false},0).to({_off:true},4).wait(11).to({_off:false},0).to({_off:true},4).wait(13).to({_off:false},0).to({_off:true},4).wait(16).to({_off:false},0).to({_off:true},4).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(5).to({_off:false},0).to({_off:true},4).wait(11).to({_off:false},0).to({_off:true},4).wait(12).to({_off:false},0).to({_off:true},4).wait(11).to({_off:false},0).to({_off:true},4).wait(13).to({_off:false},0).to({_off:true},4).wait(16).to({_off:false},0).to({_off:true},4).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(9).to({_off:false},0).to({_off:true},3).wait(12).to({_off:false},0).to({_off:true},3).wait(13).to({_off:false},0).to({_off:true},3).wait(12).to({_off:false},0).to({_off:true},3).wait(14).to({_off:false},0).to({_off:true},3).wait(17).to({_off:false},0).to({_off:true},3).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},2).wait(14).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-22.5,54.9,67.8);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-15,-22.5,70.6,74.7), rect=new cjs.Rectangle(-15,-22.5,53.7,64.8), rect, rect, rect, rect=new cjs.Rectangle(-15,-22.5,58.3,69.8), rect, rect, rect=new cjs.Rectangle(-15,-22.5,70.4,77.5), rect, new cjs.Rectangle(-15,-22.5,57.2,69.9), rect=new cjs.Rectangle(-15,-22.5,54.9,67.8), rect, rect, rect, new cjs.Rectangle(-15,-22.5,70.6,74.7), rect=new cjs.Rectangle(-15,-22.5,53.7,64.8), rect, rect, rect, rect=new cjs.Rectangle(-15,-22.5,58.3,69.8), rect, rect, rect=new cjs.Rectangle(-15,-22.5,70.4,77.5), rect, rect=new cjs.Rectangle(-15,-22.5,57.2,69.9), rect, rect=new cjs.Rectangle(-15,-22.5,54.9,67.8), rect, rect, rect, new cjs.Rectangle(-15,-22.5,70.6,74.7), rect=new cjs.Rectangle(-15,-22.5,53.7,64.8), rect, rect, rect, rect=new cjs.Rectangle(-15,-22.5,58.3,69.8), rect, rect, rect=new cjs.Rectangle(-15,-22.5,70.4,77.5), rect, new cjs.Rectangle(-15,-22.5,57.2,69.9), rect=new cjs.Rectangle(-15,-22.5,54.9,67.8), rect, rect, rect, new cjs.Rectangle(-15,-22.5,70.6,74.7), rect=new cjs.Rectangle(-15,-22.5,53.7,64.8), rect, rect, rect, rect=new cjs.Rectangle(-15,-22.5,58.3,69.8), rect, rect, rect=new cjs.Rectangle(-15,-22.5,70.4,77.5), rect, rect, rect, new cjs.Rectangle(-15,-22.5,57.2,69.9), rect=new cjs.Rectangle(-15,-22.5,54.9,67.8), rect, rect, rect, new cjs.Rectangle(-15,-22.5,70.6,74.7), rect=new cjs.Rectangle(-15,-22.5,53.7,64.8), rect, rect, rect, rect=new cjs.Rectangle(-15,-22.5,58.3,69.8), rect, rect, rect=new cjs.Rectangle(-15,-22.5,70.4,77.5), rect, rect=new cjs.Rectangle(-15,-22.5,57.2,69.9), rect, rect=new cjs.Rectangle(-15,-22.5,70.4,77.5), rect, rect, new cjs.Rectangle(-15,-22.5,57.2,69.9), rect=new cjs.Rectangle(-15,-22.5,54.9,67.8), rect, rect, rect, new cjs.Rectangle(-15,-22.5,70.6,74.7), rect=new cjs.Rectangle(-15,-22.5,53.7,64.8), rect, rect, rect, rect=new cjs.Rectangle(-15,-22.5,58.3,69.8), rect, rect, rect=new cjs.Rectangle(-15,-22.5,70.4,77.5), rect, rect=new cjs.Rectangle(-15,-22.5,57.2,69.9), rect, rect];


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fuckmouth();
	this.instance.parent = this;
	this.instance.setTransform(-3.9,12.9,1,1,0,0,0,4.4,2.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC40D").s().p("ABxCyQgFgKgCgLQgFgXAMgGQAcgOAFgEQARgNAAgTIADgtQAAgVgNAGQgKAFgIAOQgHALgFAAQgHAAgHgmQgGggAAgTQAAgXgGgKQgLgRghAAIhQgLQgvgHgMASIgbAnQgNASAAANQAAAUgKA7QgKgVgMgzQgKgvgGgHQgPgRACgKQAGgUBBgaQBQggAngDQAvgEArAdQAsAdAYAkQAWAiAAAfQAAAUAEAxQACAugGAYIgLAtQgGAPgNAAg");
	this.shape.setTransform(0,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E16600").s().p("AiCCfQgNgGgJhDQgIg3AAgpQAAh4AUgKQAPgHAlgGQAjgHAXAAQAhAAAeAIQApAKACAVQAEAqATATIAOAWQAGAKAAgMQAAgRAYAOQAXAMgHAVIgSA4QgQAhgaAAQgOAAABAZQAAANADAMIhlATQhNANgbAAQgKAAgEgCg");
	this.shape_1.setTransform(2.4,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[]},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.8,-19.3,37.6,38.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.8,-19.3,37.6,38.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib.EARTH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(478.5,769.5,0.435,0.435);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(1).to({regX:25.1,regY:21.4,scaleX:0.48,scaleY:0.48,x:487.7,y:775.7},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:0.1,x:485.8,y:772.4},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:483.9,y:769},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:0.2,x:481.9,y:765.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:479.7,y:761.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:0.3,x:477.5,y:757.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:475.2,y:753.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:472.8,y:749.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:0.4,x:470.3,y:745.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0.5,x:467.8,y:740.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:465.1,y:736},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:0.6,x:462.3,y:731.1},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:459.3,y:726.1},0).wait(1).to({scaleX:1.28,scaleY:1.28,rotation:0.7,x:456.4,y:720.9},0).wait(1).to({scaleX:1.36,scaleY:1.36,rotation:0.8,x:453.3,y:715.6},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:450.1,y:710},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:0.9,x:446.8,y:704.3},0).wait(1).to({scaleX:1.61,scaleY:1.61,rotation:1,x:443.3,y:698.4},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:439.8,y:692.3},0).wait(1).to({scaleX:1.79,scaleY:1.79,rotation:1.1,x:436.2,y:686},0).wait(1).to({scaleX:1.88,scaleY:1.88,rotation:1.2,x:432.4,y:679.7},0).wait(1).to({scaleX:1.98,scaleY:1.98,rotation:1.3,x:428.5,y:673},0).wait(1).to({scaleX:2.08,scaleY:2.08,rotation:1.4,x:424.5,y:666.3},0).wait(1).to({scaleX:2.18,scaleY:2.18,x:420.4,y:659.3},0).wait(1).to({scaleX:2.29,scaleY:2.29,rotation:1.5,x:416.2,y:652.1},0).wait(1).to({scaleX:2.4,scaleY:2.4,rotation:1.6,x:411.8,y:644.8},0).wait(1).to({scaleX:2.51,scaleY:2.51,rotation:1.7,x:407.3,y:637.2},0).wait(1).to({regX:0,regY:0,scaleX:2.62,scaleY:2.62,rotation:1.8,x:338.7,y:571.4},0).wait(1).to({regX:25.1,regY:21.4,scaleX:2.74,scaleY:2.74,rotation:1.9,x:397.9,y:621.5},0).wait(1).to({scaleX:2.87,scaleY:2.87,rotation:2,x:392.9,y:613.3},0).wait(1).to({scaleX:2.99,scaleY:2.99,rotation:2.1,x:387.8,y:604.8},0).wait(1).to({scaleX:3.12,scaleY:3.12,rotation:2.2,x:382.5,y:596.1},0).wait(1).to({scaleX:3.25,scaleY:3.25,rotation:2.4,x:377.2,y:587.3},0).wait(1).to({scaleX:3.39,scaleY:3.39,rotation:2.5,x:371.6,y:578.2},0).wait(1).to({scaleX:3.53,scaleY:3.53,rotation:2.6,x:365.9,y:569},0).wait(1).to({scaleX:3.67,scaleY:3.67,rotation:2.7,x:360,y:559.5},0).wait(1).to({scaleX:3.82,scaleY:3.82,rotation:2.9,x:354,y:549.8},0).wait(1).to({scaleX:3.97,scaleY:3.97,rotation:3,x:347.9,y:539.8},0).wait(1).to({scaleX:4.12,scaleY:4.12,rotation:3.1,x:341.6,y:529.7},0).wait(1).to({scaleX:4.28,scaleY:4.28,rotation:3.3,x:335,y:519.4},0).wait(1).to({scaleX:4.43,scaleY:4.43,rotation:3.4,x:328.4,y:508.8},0).wait(1).to({scaleX:4.6,scaleY:4.6,rotation:3.6,x:321.6,y:498},0).wait(1).to({scaleX:4.77,scaleY:4.77,rotation:3.7,x:314.6,y:487},0).wait(1).to({scaleX:4.94,scaleY:4.94,rotation:3.9,x:307.3,y:475.7},0).wait(1).to({scaleX:5.11,scaleY:5.11,rotation:4,x:299.9,y:464.2},0).wait(1).to({scaleX:5.29,scaleY:5.29,rotation:4.2,x:292.4,y:452.5},0).wait(1).to({scaleX:5.48,scaleY:5.48,rotation:4.4,x:284.6,y:440.5},0).wait(1).to({scaleX:5.66,scaleY:5.66,rotation:4.5,x:276.7,y:428.3},0).wait(1).to({scaleX:5.85,scaleY:5.85,rotation:4.7,x:268.5,y:415.9},0).wait(1).to({scaleX:6.05,scaleY:6.05,rotation:4.9,x:260.2,y:403.2},0).wait(1).to({scaleX:6.25,scaleY:6.25,rotation:5,x:251.6,y:390.3},0).wait(1).to({scaleX:6.45,scaleY:6.45,rotation:5.2,x:242.8,y:377.1},0).wait(1).to({scaleX:6.66,scaleY:6.66,rotation:5.4,x:233.8,y:363.7},0).wait(1).to({scaleX:6.87,scaleY:6.87,rotation:5.6,x:224.6,y:350},0).wait(1).to({scaleX:7.09,scaleY:7.09,rotation:5.8,x:215.1,y:336},0).wait(1).to({scaleX:7.31,scaleY:7.31,rotation:6,x:205.4,y:321.9},0).wait(1).to({scaleX:7.54,scaleY:7.54,rotation:6.2,x:195.5,y:307.4},0).wait(1).to({scaleX:7.77,scaleY:7.77,rotation:6.4,x:185.3,y:292.7},0).wait(1).to({scaleX:8,scaleY:8,rotation:6.6,x:174.8,y:277.7},0).wait(1).to({scaleX:8.24,scaleY:8.24,rotation:6.8,x:164.2,y:262.5},0).wait(1).to({scaleX:8.49,scaleY:8.49,rotation:7,x:153.2,y:246.9},0).wait(1).to({scaleX:8.74,scaleY:8.74,rotation:7.3,x:141.9,y:231.1},0).wait(1).to({scaleX:8.99,scaleY:8.99,rotation:7.5,x:130.4,y:215.1},0).wait(1).to({scaleX:9.26,scaleY:9.26,rotation:7.7,x:118.6,y:198.7},0).wait(1).to({scaleX:9.52,scaleY:9.52,rotation:8,x:106.5,y:182},0).wait(1).to({scaleX:9.79,scaleY:9.79,rotation:8.2,x:94.1,y:165.1},0).wait(1).to({scaleX:10.07,scaleY:10.07,rotation:8.5,x:81.3,y:147.8},0).wait(1).to({scaleX:10.35,scaleY:10.35,rotation:8.7,x:68.3,y:130.3},0).wait(1).to({scaleX:10.64,scaleY:10.64,rotation:9,x:54.9,y:112.4},0).wait(1).to({scaleX:10.93,scaleY:10.93,rotation:9.2,x:41.1,y:94.2},0).wait(1).to({scaleX:11.23,scaleY:11.23,rotation:9.5,x:27.1,y:75.7},0).wait(1).to({scaleX:11.54,scaleY:11.54,rotation:9.8,x:12.6,y:56.9},0).wait(1).to({scaleX:11.85,scaleY:11.85,rotation:10.1,x:-2.2,y:37.8},0).wait(1).to({scaleX:12.17,scaleY:12.17,rotation:10.3,x:-17.4,y:18.4},0).wait(1).to({scaleX:12.49,scaleY:12.49,rotation:10.6,x:-33,y:-1.4},0).wait(1).to({scaleX:12.83,scaleY:12.83,rotation:10.9,x:-49,y:-21.5},0).wait(1).to({scaleX:13.16,scaleY:13.16,rotation:11.2,x:-65.5,y:-41.9},0).wait(1).to({scaleX:13.51,scaleY:13.51,rotation:11.5,x:-82.3,y:-62.8},0).wait(1).to({scaleX:13.86,scaleY:13.86,rotation:11.9,x:-99.6,y:-83.9},0).wait(1).to({scaleX:14.22,scaleY:14.22,rotation:12.2,x:-117.4,y:-105.5},0).wait(1).to({scaleX:14.59,scaleY:14.59,rotation:12.5,x:-135.6,y:-127.3},0).wait(1).to({scaleX:14.96,scaleY:14.96,rotation:12.8,x:-154.4,y:-149.6},0).wait(1).to({scaleX:15.34,scaleY:15.34,rotation:13.2,x:-173.6,y:-172.2},0).wait(1).to({scaleX:15.73,scaleY:15.73,rotation:13.5,x:-193.4,y:-195.2},0).wait(1).to({scaleX:16.13,scaleY:16.13,rotation:13.9,x:-213.8,y:-218.6},0).wait(1).to({scaleX:16.53,scaleY:16.53,rotation:14.3,x:-234.7,y:-242.4},0).wait(1).to({scaleX:16.94,scaleY:16.94,rotation:14.6,x:-256.2,y:-266.6},0).wait(1).to({regX:-0.1,regY:-0.3,scaleX:17.36,scaleY:17.36,rotation:15,x:-602.3,y:-762.8},0).wait(1));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFD").s().p("EAw7A4jIAAgBMhizAAAMAAAhxEMBjxAAAIAAA8IgCAAMAAABwJgEgw8A3mMBh3AAAMAAAhvMMhh3AAAg");
	this.shape.setTransform(357.5,468.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(95));

	// DER SPIEGEL copy
	this.instance_1 = new lib.DERSPIEGELcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41,27,0.853,0.853);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95));

	// BOREDR
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Eg4FBTNMAAAilWIgWAAIAAhAIAWAAIAAgDIA9AAIAAADIBUAAIAAAfIPCAAIAAgVMApDAAAIAAASMA2LAAAMAAACUFMhvPAAAIAAgNIgUAAMAAAiK7IgBAAMAAACc9gEgxLAvHMBjqAAAMAAAhwNMhjqAAAg");
	this.shape_1.setTransform(354,528.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(95));

	// Armature_15
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFD").s().p("EAw7A4jIAAgBMhizAAAMAAAhxEMBjxAAAIAAA8IgCAAMAAABwJgEgw8A3mMBh3AAAMAAAhvMMhh3AAAg");
	this.shape_2.setTransform(356.5,479.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E16730").s().p("AiKBpQhghAgggwQgGgNgFgwQAMhCBKAKQA4AHAGBLQgdgdAFAMQANAdAwA2QAtAsBDgBQB0gUAWjfIB4BbQh6DwhzAVIgQABQg+AAhlhIg");
	this.shape_3.setTransform(529.5,582);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E16730").s().p("AiYDuQgPgEgpgZQgtgxA1g2QAognA/ApQgpAFANADQA+APCPhYQBNhqheiuICVAEQAvDxhOBrQgsA8iBAjQhaAcg2AAIgQAAg");
	this.shape_4.setTransform(522.6,606.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E16730").s().p("AhXFbQg3gMAAhLIAHgbQAWhJBIjIQAjicABiZICUARQgECogkCbQgnCug4BsIgGAZQgNA0gzAAQgMAAgNgDg");
	this.shape_5.setTransform(536,615);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E16730").s().p("ACmERIgZgLQgigRhggpQhSgphFhBQhihwgfjRICMg0QgDCoBhBwQBuB/CCgGIAXALQA9AbgbBGQgRAqgzAAQgNAAgPgDg");
	this.shape_6.setTransform(583.3,607.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E16730").s().p("AlGCFIASiTQCVBVCOgnQBPgWAvg+QAxg1AcgjIATgRQAyguA1A1QAnApgpA+QgIAJgNAKQgdAZhNBIQhHA9hXAjQgyAOg7AAQhqAAiEgug");
	this.shape_7.setTransform(616.1,576.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E16730").s().p("Ai9CWQDiAaAwhqQAbg8g+hEIhLhqIgKgXQgag+BDggQAzgXAtA7IALAaIA5CaQAeBkgPBPQgwBqkNBEg");
	this.shape_8.setTransform(585.5,549.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(88));

	// Armature_17
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E16730").s().p("AhkC5QhTgbg+j6IgBgDQgTg+BFgbQA0gTApA+Qg1DVBTAbQBkAgCKkEIBWB8QjcDChnAAQgPAAgNgEg");
	this.shape_9.setTransform(513.7,582.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E16730").s().p("AiODmIgDABQhBAEgJhKQgHg3BGgZQCkBaBJhPQBZhfh0jmICWAEQAxEthZBgQg8BCinAAQglAAgqgEg");
	this.shape_10.setTransform(535.9,614.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E16730").s().p("AjHE7QgvgdAYhGQBIhsBKh6QBYiVBZinICCBJQhaCqhZCUQhJB8hLBwIgCADQgWAfgfAAQgVAAgbgQg");
	this.shape_11.setTransform(546.8,614.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E16730").s().p("ABIEwQh/hkg/h8QhMiWgKjgICSggQgGC+BKCVQA/B9BxBEIACACQAoAzg2AzQgTARgXAAQgbAAghgXg");
	this.shape_12.setTransform(579.6,628.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E16730").s().p("AjPDGIACiVQETCFA4hQQAthCiyiQIgBgCQgVg+BDgdQA0gVAqA9QBsD1gtBCQgoA5i+AAQhLAAhhgJg");
	this.shape_13.setTransform(617.1,580.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E16730").s().p("AjHCkQEKghAah5QAVhkizhWIgBgCQggg5A8gpQAugfA1AzQCeC7gVBkQgaB6kgCIg");
	this.shape_14.setTransform(601.7,555.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).wait(88));

	// Armature_15
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E16730").s().p("AiKBpQhghAgggwQgGgNgFgwQAMhCBKAKQA4AHAGBLQgdgdAFAMQANAdAwA2QAtAsBDgBQB0gUAWjfIB4BbQh6DwhzAVIgQABQg+AAhlhIg");
	this.shape_15.setTransform(60.2,-20.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E16730").s().p("AiYDtQgPgDgpgZQgtgyA1g1QAognA/AoQgpAFANADQA+APCPhXQBNhqheiuICVAEQAvDwhOBrQgsA9iBAjQhaAcg2AAIgQgBg");
	this.shape_16.setTransform(78.2,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E16730").s().p("AhYFbQg2gMAAhLIAHgbQAWhJBIjIQAjibABiaICUASQgECogkCaQgmCug4BsIgHAZQgNA0gzAAQgMAAgOgDg");
	this.shape_17.setTransform(86.6,13.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E16730").s().p("ACmERIgZgMQgigRhggpQhSgphFhAQhihxgfjQICMg0QgDCoBhBvQBuCACCgGIAXAKQA9AcgbBGQgRAqgzAAQgNAAgPgDg");
	this.shape_18.setTransform(129,5.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E16730").s().p("AlGCFIASiTQCVBVCOgnQBPgWAvg+QAxg1AcgjIATgRQAyguA1A1QAnApgpA+QgIAJgNAKQgdAZhNBIQhHA9hXAjQgyAOg7AAQhqAAiEgug");
	this.shape_19.setTransform(151.8,-35.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E16730").s().p("Ai9CWQDiAaAwhqQAbg8g+hEIhLhqIgKgXQgag+BDggQAzgXAtA7IALAaIA5CaQAeBkgPBPQgwBqkNBEg");
	this.shape_20.setTransform(136.1,-57.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).wait(88));

	// Armature_17
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E16730").s().p("AhkC5QhTgbg+j6IgBgDQgTg+BFgbQA0gTApA+Qg1DVBTAbQBkAgCKkEIBWB8QjcDChnAAQgPAAgNgEg");
	this.shape_21.setTransform(33.2,-27.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E16730").s().p("AiODmIgDABQhBAEgJhKQgHg3BGgZQCkBaBJhPQBZheh0jmICWADQAxEthZBgQg8BBinAAQglAAgqgDg");
	this.shape_22.setTransform(51.1,-0.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E16730").s().p("AjHE7QgvgdAYhGQBIhsBKh6QBYiVBZinICCBKQhaCphZCUQhJB8hLBwIgCADQgWAfgfAAQgVAAgbgQg");
	this.shape_23.setTransform(64.9,10.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E16730").s().p("ABIEwQh/hlg/h8QhMiVgKjgICSggQgGC+BKCVQA/B8BxBFIACACQAoAzg2AyQgTASgXAAQgbAAghgXg");
	this.shape_24.setTransform(102.7,12.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E16730").s().p("AjPDGIACiVQETCFA4hQQAthCiyiQIgBgCQgVg+BDgdQA0gVAqA9QBsD1gtBCQgoA5i+AAQhLAAhhgJg");
	this.shape_25.setTransform(128.2,-37.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E16730").s().p("AjHCkQEKghAah5QAVhkizhWIgBgCQggg5A8gpQAugfA1AzQCeC7gVBkQgaB6kgCIg");
	this.shape_26.setTransform(130.8,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[]},1).wait(88));

	// shoes
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#080300").s().p("AiFBPQhBggAigXQASgMA/gMQAdgGAagbQAqgvAMgKIAlgFQAogFANAAQAQAAAZA3QAaA4gHAcQgJAihwAUQgtAIglAAQg/AAgrgWg");
	this.shape_27.setTransform(590.4,808.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#080300").s().p("AglCOQg2gVAEhXQAEhFAkhSQAKgKASgKQAigUAlAAQAoAAgFA5QgEA0gVAVQgKAKANAnQARA0AAAcQAAAsgeAKQgIACgKAAQgcAAgrgQg");
	this.shape_28.setTransform(557.8,794.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).to({state:[{t:this.shape_28},{t:this.shape_27}]},94).wait(1));

	// Layer_7
	this.instance_2 = new lib.fuckme();
	this.instance_2.parent = this;
	this.instance_2.setTransform(548.8,554,1,0.185,0,0,0,4.5,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:4.4,regY:4.2,scaleY:1.05,x:548.7,y:553.9},58).to({regX:4.5,regY:5,scaleY:1.35,x:548.8,y:554.6},29).wait(8));

	// head
	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(552.7,540.8);

	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(552.7,540.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},23).to({state:[{t:this.instance_4}]},11).to({state:[{t:this.instance_4}]},60).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},23).wait(72));

	// leftararm
	this.ikNode_7 = new lib.leftarm();
	this.ikNode_7.name = "ikNode_7";
	this.ikNode_7.parent = this;
	this.ikNode_7.setTransform(522.5,546.9,1,1,0,0,180,11.2,23.4);

	this.timeline.addTween(cjs.Tween.get(this.ikNode_7).to({_off:true},1).wait(6).to({_off:false,skewY:0,x:582.4,y:548.9},0).wait(88));

	// club
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AryCwQgLgIgGggQgGghAFgkQAMheBCgGQWziMAKgKIAAAeI1tCCIgMAAQgOABgKAIQggAVASBFQAUBJgqAaQgQAJgVAAQgTAAgMgIg");
	this.shape_29.setTransform(493.1,532.2,1,1,0,-10,170,77.5,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1).to({regY:-15.3,skewX:-59.7,skewY:120.3,x:489.1,y:593},0).wait(1).to({regX:77.6,skewX:-162.4,skewY:17.6,x:531,y:633.7},0).wait(1).to({regY:-15.2,rotation:-80.9,skewX:0,skewY:0,x:530.1,y:637.6},0).wait(1).to({rotation:-77.6,x:601.1,y:628.7},0).wait(1).to({rotation:-167.6,x:611,y:561.7},0).wait(1).to({rotation:3.6,x:600.1,y:532.7},0).wait(88).to({rotation:3.6},0).wait(1));

	// pants
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#080300").s().p("AgSgJQgFgKAHAAIAOACQAHAAAQAIIAAAdQgfgPgIgOg");
	this.shape_30.setTransform(540.9,644.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#080300").s().p("AgZgNIALgFQANgFAFAAIARgCQAJAAgGAMQgKATgnAUg");
	this.shape_31.setTransform(590.4,644.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#080300").s().p("AhyApIAAgxQAZAfBZgdQAogOBLgmIAAAoQgvAdg1AXQg4AZgiAAQgcAAgLgSg");
	this.shape_32.setTransform(575.3,650.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#080300").s().p("AAHAtQgsgVgvgiIAAgyQAeAdA2AUQA3ARAegGIAAAxQgGAMgRAAQgUAAgjgQg");
	this.shape_33.setTransform(553.3,649.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},94).wait(1));

	// pants
	this.instance_5 = new lib.fatassmf();
	this.instance_5.parent = this;
	this.instance_5.setTransform(574.6,722,1,1,0,0,0,38.9,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95));

	// rightarm
	this.rightarm = new lib.rightarm();
	this.rightarm.name = "rightarm";
	this.rightarm.parent = this;
	this.rightarm.setTransform(499.6,552.1,1,1,0,0,180,16.9,28.9);

	this.timeline.addTween(cjs.Tween.get(this.rightarm).to({_off:true},1).wait(6).to({_off:false,skewY:0,x:606.2},0).wait(88));

	// Layer_11
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("EggHAIwIAAgoMA/iAAAIAAw3IAtAAIAARfg");
	this.shape_34.setTransform(470.6,773.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("EhAsAHRIAAkYMA3hAAAIAAhBMBDTAAAIAApIIGlAAIAAOhg");
	this.shape_35.setTransform(304.2,881.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34}]}).to({state:[{t:this.shape_35},{t:this.shape_34}]},94).wait(1));

	// GRASS
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58AF32").s().p("EgyOALCQh6g1iKhRQkUiihRiKQhxjBElh1QFviVPZgWQcMgpKaiFQDOgpDBhIQDThPBrgZQDxg4C0gYQD6ggECAJQJ4AWNkEYIIiRTg");
	this.shape_36.setTransform(314.2,890.2,1.575,1.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(61.8,467.2,1216.8,1065);
p.frameBounds = [rect, new cjs.Rectangle(61.8,424.9,1216.8,1107.4), new cjs.Rectangle(61.8,446.8,1216.8,1085.4), new cjs.Rectangle(61.8,448.3,1216.8,1083.9), new cjs.Rectangle(61.8,448.9,1216.8,1083.3), new cjs.Rectangle(61.8,412.9,1216.8,1119.3), new cjs.Rectangle(61.8,384,1216.8,1148.3), rect=new cjs.Rectangle(61.8,467.2,1216.8,1065), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(61.8,459.3,1216.8,1072.9), new cjs.Rectangle(61.8,434.2,1216.8,1098.1), new cjs.Rectangle(61.8,408.5,1216.8,1123.8), new cjs.Rectangle(61.8,382.2,1216.8,1150), new cjs.Rectangle(61.8,355.6,1216.8,1176.7), new cjs.Rectangle(61.8,328.3,1216.8,1203.9), new cjs.Rectangle(61.8,300.5,1216.8,1231.7), new cjs.Rectangle(61.8,272.2,1216.8,1260.1), new cjs.Rectangle(61.8,243.2,1216.8,1289.1), new cjs.Rectangle(61.8,213.7,1216.8,1318.6), new cjs.Rectangle(61.8,183.5,1216.8,1348.7), new cjs.Rectangle(61.8,152.9,1216.8,1379.4), new cjs.Rectangle(44.6,121.5,1234.1,1410.7), new cjs.Rectangle(21.7,89.6,1256.9,1442.7), new cjs.Rectangle(-1.6,57.1,1280.2,1475.1), new cjs.Rectangle(-25.4,24.1,1304,1508.1), new cjs.Rectangle(-49.6,-9.6,1328.3,1541.9), new cjs.Rectangle(-74.3,-44.2,1352.9,1576.4), new cjs.Rectangle(-99.6,-79.3,1378.2,1611.5), new cjs.Rectangle(-125.4,-115.2,1404,1647.4), new cjs.Rectangle(-151.6,-151.7,1430.2,1683.9), new cjs.Rectangle(-178.5,-189.1,1457.1,1721.3), new cjs.Rectangle(-205.8,-226.8,1484.5,1759), new cjs.Rectangle(-233.8,-265.5,1512.4,1797.7), new cjs.Rectangle(-262.3,-305,1540.9,1837.3), new cjs.Rectangle(-291.4,-345,1570,1877.2), new cjs.Rectangle(-321.1,-386.1,1599.8,1918.4), new cjs.Rectangle(-351.4,-428.1,1630,1960.3), new cjs.Rectangle(-382.5,-470.4,1661.1,2002.7), new cjs.Rectangle(-414,-513.9,1692.6,2046.2), new cjs.Rectangle(-446.3,-558.2,1724.9,2090.4), new cjs.Rectangle(-479.2,-603.5,1757.8,2135.7), new cjs.Rectangle(-722.5,-849.5,2403.5,3265.9)];
// library properties:
lib.properties = {
	id: '6ED14764B52548FFA0BBF15A64B65C4A',
	width: 712,
	height: 942,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"EARTH_atlas_.png?1522581332396", id:"EARTH_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6ED14764B52548FFA0BBF15A64B65C4A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;