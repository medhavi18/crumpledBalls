class Waste{
    constructor(x, y, radius){
        var options = {
            restitution: 0.3,
            density: 0.5,
            friction: 0.5,
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        image(this.image, 0, 10, this.radius/2, this.radius/2);
        pop();
    }
}