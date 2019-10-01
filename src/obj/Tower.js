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
  constructor(position){
    this.px = position[0] || position.x;
    this.py = position[1] || position.y

    return Matter.Bodies.circle(this.px, this.py, 50);
  }
  
  draw(){
    
  }

}