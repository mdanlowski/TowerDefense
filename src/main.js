/* --to win a fight later-- */
// import * as Matter from "matter";

// export default class Main {
//   Engine = Matter.Engine
//   Render = Matter.Render
//   World = Matter.World
//   Bodies = Matter.Bodies

//   engine = this.Engine.create();

//   render = this.Render.create({
//       element: document.body,
//       engine: engine
//   });

//   boxA = this.Bodies.rectangle(400, 200, 80, 80)
//   boxB = this.Bodies.rectangle(450, 50, 80, 80)
//   ground = this.Bodies.rectangle(400, 610, 810, 60, { isStatic: true })

//   run(){
//     this.World.add(engine.world, [this.boxA, this.boxB, this.ground])
    
//     this.Engine.run(engine);
    
//     this.Render.run(render);
//   }
// }