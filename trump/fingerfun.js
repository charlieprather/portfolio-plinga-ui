(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap6copy = function() {
	this.initialize(img.Bitmap6copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,535,75);// helper functions:

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


(lib.helpy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020100").s().p("AgsAHIAAgNIBZAAIAAANg");
	this.shape.setTransform(4.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.helpy, new cjs.Rectangle(0,0,9,1.4), null);


(lib.chin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#020100").p("AkxhuQAABpBgA7QBVA2B8gCQB7gBBXg3QBgg8AAhk");
	this.shape.setTransform(30.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.chin, new cjs.Rectangle(-1,-1,63.1,23.8), null);


(lib.armlong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#020100").p("Ak5mQIE9gVIE4M3IgxATg");
	this.shape.setTransform(4.5,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020100").s().p("Ak6mQIE9gUIE4M3IgxASg");
	this.shape_1.setTransform(4.6,42.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.armlong, new cjs.Rectangle(-27.9,-1,65,86.3), null);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.chin();
	this.instance.parent = this;
	this.instance.setTransform(36.7,83.6,1,0.226,0,0,0,30.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:30.8,regY:10.9,scaleX:0.64,scaleY:0.68,x:36.8,y:59.4},8,cjs.Ease.cubicInOut).to({regX:30.6,regY:0,scaleX:1,scaleY:0.23,x:36.7,y:83.6},7,cjs.Ease.cubicInOut).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkLEbQhuh1AAimIAAAAQAAilBuh1IAAAAQBvh1CcAAIAAAAQCcAABvB1IAAAAQBvB1AAClIAAAAQAACmhvB1IAAAAQhvB1icAAIAAAAQicAAhvh1g");
	var mask_graphics_1 = new cjs.Graphics().p("AjwD8QhjhoAAiUIAAAAQAAiTBjhpIAAAAQBkhoCMAAIAAAAQCNAABjBoIAAAAQBkBpAACTIAAAAQAACUhkBoIAAAAQhjBpiNAAIAAAAQiMAAhkhpg");
	var mask_graphics_2 = new cjs.Graphics().p("AjVDeQhYhcAAiCIAAAAQAAiBBYhcIAAAAQBZhcB8AAIAAAAQB9AABYBcIAAAAQBZBcAACBIAAAAQAACChZBcIAAAAQhYBch9AAIAAAAQh8AAhZhcg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai6C/QhNhPAAhwIAAAAQAAhvBNhPIAAAAQBOhPBsAAIAAAAQBtAABOBPIAAAAQBNBPAABvIAAAAQAABwhNBPIAAAAQhOBPhtAAIAAAAQhsAAhOhPg");
	var mask_graphics_4 = new cjs.Graphics().p("AifCgQhChCAAheIAAAAQAAhdBChDIAAAAQBChCBdAAIAAAAQBeAABCBCIAAAAQBCBDAABdIAAAAQAABehCBCIAAAAQhCBDheAAIAAAAQhdAAhChDg");
	var mask_graphics_5 = new cjs.Graphics().p("AiECCQg3g2AAhMIAAAAQAAhLA3g2IAAAAQA3g1BNAAIAAAAQBOAAA3A1IAAAAQA3A2AABLIAAAAQAABMg3A2IAAAAQg3A1hOAAIAAAAQhNAAg3g1g");
	var mask_graphics_6 = new cjs.Graphics().p("AhpBjQgsgpAAg6IAAAAQAAg5AsgpIAAAAQAsgpA9AAIAAAAQA+AAAsApIAAAAQAsApAAA5IAAAAQAAA6gsApIAAAAQgsApg+AAIAAAAQg9AAgsgpg");
	var mask_graphics_7 = new cjs.Graphics().p("AhOBEQghgcAAgoIAAAAQAAgnAhgcIAAAAQAggdAuAAIAAAAQAvAAAgAdIAAAAQAhAcAAAnIAAAAQAAAoghAcIAAAAQggAdgvAAIAAAAQguAAgggdg");
	var mask_graphics_8 = new cjs.Graphics().p("Ag0AmQgVgQAAgWIAAAAQAAgVAVgQIAAAAQAWgPAeAAIAAAAQAfAAAWAPIAAAAQAVAQAAAVIAAAAQAAAWgVAQIAAAAQgWAPgfAAIAAAAQgeAAgWgPg");
	var mask_graphics_9 = new cjs.Graphics().p("AhSBJQgjgeAAgrIAAAAQAAgqAjgeIAAAAQAigeAwAAIAAAAQAxAAAiAeIAAAAQAjAeAAAqIAAAAQAAArgjAeIAAAAQgiAegxAAIAAAAQgwAAgigeg");
	var mask_graphics_10 = new cjs.Graphics().p("AhxBsQgvgtAAg/IAAAAQAAg+AvgtIAAAAQAvgsBCAAIAAAAQBDAAAvAsIAAAAQAvAtAAA+IAAAAQAAA/gvAtIAAAAQgvAshDAAIAAAAQhCAAgvgsg");
	var mask_graphics_11 = new cjs.Graphics().p("AiQCPQg7g7AAhUIAAAAQAAhTA7g7IAAAAQA8g7BUAAIAAAAQBVAAA7A7IAAAAQA8A7AABTIAAAAQAABUg8A7IAAAAQg7A7hVAAIAAAAQhUAAg8g7g");
	var mask_graphics_12 = new cjs.Graphics().p("AiuCyQhJhKAAhoIAAAAQAAhnBJhKIAAAAQBIhKBmAAIAAAAQBnAABIBKIAAAAQBJBKAABnIAAAAQAABohJBKIAAAAQhIBKhnAAIAAAAQhmAAhIhKg");
	var mask_graphics_13 = new cjs.Graphics().p("AjNDVQhVhYAAh9IAAAAQAAh8BVhYIAAAAQBVhYB4AAIAAAAQB5AABVBYIAAAAQBVBYAAB8IAAAAQAAB9hVBYIAAAAQhVBYh5AAIAAAAQh4AAhVhYg");
	var mask_graphics_14 = new cjs.Graphics().p("AjsD4QhihnAAiRIAAAAQAAiQBihnIAAAAQBihnCKAAIAAAAQCLAABhBnIAAAAQBjBnAACQIAAAAQAACRhjBnIAAAAQhhBniLAAIAAAAQiKAAhihng");
	var mask_graphics_15 = new cjs.Graphics().p("AkLEbQhuh1AAimIAAAAQAAilBuh1IAAAAQBvh1CcAAIAAAAQCcAABvB1IAAAAQBvB1AAClIAAAAQAACmhvB1IAAAAQhvB1icAAIAAAAQicAAhvh1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:36.6,y:40.3}).wait(1).to({graphics:mask_graphics_1,x:36.6,y:40.4}).wait(1).to({graphics:mask_graphics_2,x:36.6,y:40.4}).wait(1).to({graphics:mask_graphics_3,x:36.6,y:40.4}).wait(1).to({graphics:mask_graphics_4,x:36.6,y:40.4}).wait(1).to({graphics:mask_graphics_5,x:36.7,y:40.3}).wait(1).to({graphics:mask_graphics_6,x:36.7,y:40.4}).wait(1).to({graphics:mask_graphics_7,x:36.7,y:40.4}).wait(1).to({graphics:mask_graphics_8,x:36.7,y:40.4}).wait(1).to({graphics:mask_graphics_9,x:36.7,y:40.4}).wait(1).to({graphics:mask_graphics_10,x:36.7,y:40.3}).wait(1).to({graphics:mask_graphics_11,x:36.7,y:40.3}).wait(1).to({graphics:mask_graphics_12,x:36.6,y:40.4}).wait(1).to({graphics:mask_graphics_13,x:36.6,y:40.4}).wait(1).to({graphics:mask_graphics_14,x:36.6,y:40.4}).wait(1).to({graphics:mask_graphics_15,x:36.6,y:40.3}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFFFA").s().p("AhGgPICNABQgeAegpAAQgoAAgegfg");
	this.shape.setTransform(36.6,75,3.565,3.565);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020100").s().p("AAABEQgnAAgfANQgggiAAgvQAAguAegiQAgAOAoAAQAoAAAggOQAfAhAAAvQAAAwghAhQgegNgoAAg");
	this.shape_1.setTransform(36.7,40.6,3.565,3.565);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAFFFA").s().p("AhHAKQAeggApAAQAqAAAeAfQggAOgoAAQgoAAgfgNg");
	this.shape_2.setTransform(36.6,8.3,3.565,3.565);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAFFFA").s().p("AhGgIQAggNAmAAQApAAAeANQgeAegpAAQgoAAgegeg");
	this.shape_3.setTransform(36.6,72.7,3.565,3.565);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,73.5,88.4);


(lib.fucker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020100").s().p("AkiHLIgBuVIElF6IEil4IAAOTg");
	this.shape.setTransform(494.7,428.7,3.565,3.565);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CE3C23").s().p("AglBtQgogyABgQQABgTATgsQAUgtANgKIAAgQIgWghIAfgfIAYAAIAeAeIgUAhIAAANIAbAlQAbAqADAhQAEAignAwIgnApQgTgWgVgZg");
	this.shape_1.setTransform(493.8,356.6,3.565,3.565);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9FCF9").s().p("AkijDIEdBcIEohZIkbGEg");
	this.shape_2.setTransform(494.3,334.8,3.565,3.565);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7CE4A").s().p("AkrCtQgRgzABhCQACicBQg6QBdhEBsgMQB9gOB3BGQBqBAgCAqQgBAVgWAIQAcAhgHBkQgGBggVAUQgPAPgTANIgQAKQAHjLgHgIIhWAbQhoAihaAAQhcAAhGgmIgkgWQgLgHAAAGIAADUQgegPgRg1g");
	this.shape_3.setTransform(497,86.1,3.565,3.565);

	this.instance = new lib.mouth();
	this.instance.parent = this;
	this.instance.setTransform(495.4,213,1,1,0,0,0,36.7,40.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E07D2A").s().p("Ag+HpIjSlEIgRg0IAAn/IBxhjIGGAAIBHBbIAFC8IAAGrIi5Ehg");
	this.shape_4.setTransform(494.9,228.3,3.565,3.565);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E07D2A").s().p("Ay6apIAGhRQAIh1gYicQgNhRgkhbQguhpgXg5QhZjYAAj2IAAy9QAAjCBNh7QA+hkBqgtQBTgjBWAFQBMAGAAAXIAAHMIAXAAIAAowQAAh8BUhOQBGhBB0gYQBigWBXAPQBVAOAAAgIAAFwIAYAAIAApXIJJAAIAAJPIAeAAIABirQAAirgBgDQArgpBVgLQBVgMBVAXQBdAZA4A7QA/BDAABkIAANNIAbAAIAAlfICKBYQCeBhBoA3QCPBKA1BrQBACDhJCvQghBMhuDaIjSGeQkSIhAABjIAAF8g");
	this.shape_5.setTransform(516,1200.5,3.565,3.565);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#020100").s().p("EgTFAouMAAAhRbMAmMAAAMAAABRbg");
	this.shape_6.setTransform(435.9,2772.9,3.565,3.565);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fucker, new cjs.Rectangle(0,0,1025.1,3702.2), null);


(lib.littlehand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fucker();
	this.instance.parent = this;
	this.instance.setTransform(5.6,20.2,0.011,0.011,0,0,0,513.3,1856.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.littlehand, new cjs.Rectangle(0,0,11.2,40.4), null);


// stage content:
(lib.fingerfun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 15
	this.instance = new lib.Bitmap6copy();
	this.instance.parent = this;
	this.instance.setTransform(41,28,0.853,0.853);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(134));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Eg3cBKMIAAgMIgUAAMAAAiK7IgBAAIAAhHIgBAAIAAoJIACAAIAAAGMBvPAAAIAAAmIAUAAMAAACTrgEgx0A38MBjqAAAMAAAhwOMhjqAAAg");
	this.shape.setTransform(357.1,474.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(134));

	// FlashAICB
	this.instance_1 = new lib.fucker();
	this.instance_1.parent = this;
	this.instance_1.setTransform(356.4,2103.1,1,1,0,0,0,512.5,1851);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({y:2119.1},0).to({scaleX:30.73,scaleY:30.73,x:-3383.3,y:46764.6},26,cjs.Ease.cubicOut).wait(24).to({scaleX:90.26,scaleY:90.26,x:-10616.9,y:137153.9},24,cjs.Ease.quartIn).wait(1));

	// littleback
	this.instance_2 = new lib.littlehand();
	this.instance_2.parent = this;
	this.instance_2.setTransform(433.5,627.3,1,0.089,0,0,0,5.6,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:470.7,y:626.9},23,cjs.Ease.quadOut).to({scaleY:1,x:478.1,y:627},36,cjs.Ease.quartOut).to({scaleX:30.73,scaleY:30.73,x:356.8,y:1396},26,cjs.Ease.cubicOut).wait(24).to({regX:5.7,scaleX:90.26,scaleY:90.26,x:364.7,y:3918.3},24,cjs.Ease.quartIn).wait(1));

	// arm
	this.instance_3 = new lib.armlong();
	this.instance_3.parent = this;
	this.instance_3.setTransform(434.4,546.3,0.202,0.946,5.2,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0,regY:0,scaleX:1,scaleY:0.95,rotation:0,y:546.2},23,cjs.Ease.quadOut).to({scaleY:0.95},36).to({scaleX:30.73,scaleY:29.27,x:-987.7,y:-1087.3},26,cjs.Ease.cubicOut).wait(24).to({scaleX:90.26,scaleY:85.97,x:-3589.1,y:-3372.6},24,cjs.Ease.quartIn).wait(1));

	// Layer_27
	this.instance_4 = new lib.helpy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(470,627.4,1,2.444,0,0,0,4.5,1.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({scaleX:1.81,scaleY:3.96,x:473.6,y:627.5},36).to({scaleX:55.5,scaleY:121.61,x:218.7,y:1408.1},26,cjs.Ease.cubicOut).wait(24).to({scaleX:163.04,scaleY:357.23,x:-51.6,y:3956.4},24,cjs.Ease.quartIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(199.9,471,1025.1,3954.3);
// library properties:
lib.properties = {
	id: '2C195DF6ECB3445CA91CF6195E1A1B6B',
	width: 712,
	height: 942,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Bitmap6copy.png", id:"Bitmap6copy"}
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
an.compositions['2C195DF6ECB3445CA91CF6195E1A1B6B'] = {
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