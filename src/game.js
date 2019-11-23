var Engine = Matter.Engine,
    Common = Matter.Common,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Events = Matter.Events,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      wireframes: false,
      width: 1000,
      height: 800,
      // showAngleIndicator: true
    }
});

// create two boxes and a ground
var towerBase = new Tower([200, 200], "#00FF10");
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
Events.on(towerBase, "afterAdd", etest)

// add all of the bodies to the world
World.add(
  engine.world,
  [ boxA, boxB, towerBase ]

);

engine.world.gravity.y = 0;

// add mouse control
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
          stiffness: 0.0002,
          render: {
              visible: true
          }
      }
  });

World.add(engine.world, mouseConstraint);

render.mouse = mouse;

Engine.run(engine);
Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);


Events.on(mouseConstraint, 'mousedown', etest)

function etest(){
  if(this.body == null || this.body == undefined) return;
  try {
    this.body.attack(boxA);
  } catch(TypeError) {
    // fn not supported
  }
}

var lastBulletPositionPoint = {x: towerBase.position.x, y: towerBase.position.y}

Events.on(render, 'afterRender', function() {
  var mouse = mouseConstraint.mouse,
      context = render.context,
      startPoint = lastBulletPositionPoint,
      endPoint = boxA.position;

  // COOL ciekierap
  // var collisions = Query.ray(bodies, startPoint, endPoint);

  Render.startViewTransform(render);

  context.beginPath();
  context.moveTo(startPoint.x, startPoint.y);
  context.lineTo(endPoint.x, endPoint.y);
  context.strokeStyle = '#fff';
  context.lineWidth = 0.5;
  context.stroke();
  context.fillStyle = 'rgba(255,165,0,0.7)';
  context.fill();

  Render.endViewTransform(render);
});

// mainGameLoop();