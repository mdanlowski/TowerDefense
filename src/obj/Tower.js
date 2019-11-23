/* @learning
* An important difference between function declarations and class declarations is 
* that function declarations are hoisted and class declarations are not.
* You first need to declare your class and then access it, otherwise code
* like the following will throw a ReferenceError:
* 
* const p = new Rectangle(); // => ReferenceError
* class Rectangle {}
*/

class Tower {
  constructor(position, hexColor){
    this.px = position[0] || position.x;
    this.py = position[1] || position.y
    
    this.matter = Matter.Bodies.circle(this.px, this.py, 30,
      {
        isStatic: true,
        render: {
          fillStyle: hexColor
        }
      }
      );
      // this.instance['gameInterface'] = {};
      // this.instance.gameInterface.attack = this.attack;
      this.matter.attack = this.attack.bind(this);
      
      return this.matter;
    }
    
    attack(target){
      // console.log(this);

      let targetVector = new GameEngine.vector(
        [target.position.x - this.px, target.position.y - this.py]
      );
      targetVector.normalize();

      // debugger
      let bullet = Matter.Bodies.circle(
        this.px + 30, this.py + 30, 10,
        {
          render: {
            fillStyle: "#FF0000",
            lineWidth: 1
          }
        }
      );
      
      // concat to bullet props
      bullet.force.x = targetVector.x;
      bullet.force.y = targetVector.y;
      bullet.mass = 40;
      bullet.friction = 0;
      bullet.frictionAir = 0;
      
      console.log(bullet.speed)
      return World.add(engine.world, bullet);
    }
    
  }

  const GameEngine = {
    vector: function(positionArray){
      this.x = positionArray[0];
      this.y = positionArray[1];
      
      this.normalize = function(){
        let mag = Math.sqrt(this.x**2 + this.y**2);
        this.x = this.x / mag;
        this.y = this.y / mag;
      }

    }
  }