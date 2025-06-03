// let rectangle = {
//     width:200,
//     height:100,
//     backgroundColor:"blue",
//     border:"solid"
// }
// let elipse = {
//     width:200,
//     height:100,
//     backgroundColor:"blue",
//     border:"solid",
//     borderRadius:"50%"
// }
// let circle = {
//     width:200,
//     height:200,
//     backgroundColor:"blue",
//     border:"solid",
//     borderRadius:"50%"
class RootFigure {
    #name;
    constructor(width, height, id,bg_color, color="black")
    {
        this.width = width;
        this.height = height;
        this.bg_color = bg_color;
        this.color = color;
        this.style_figure = `width:${this.width}px; height:${this.height}px; background-color:${this.bg_color}; color:${this.color}; border:solid 3px; display:flex; justify-content:center; align-items:center; padding:10px;`;
        this.id = id;
    }   
    set(value)
    {
        this.#name = value.trim().length< 1? "Figure" : value.trim();
    }
    create()
    {
        document.writeln(`<div id = "${this.id}" style = "${this.style_figure}"> ${this.#name} </div>`)
    }
    getColor()
    {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    }
    generateColor()
    {
        document.getElementById(`${this.id}`).style.background = this.getColor();
    }
}

class Rectangle extends RootFigure {
    constructor(width, height, id,bg_color, color="black") 
    {
        super(width, height, id,bg_color, color);
    }
}

class Circle extends RootFigure
{
    constructor(width, id,bg_color, color="black")
    {
        super(width, width, id,bg_color, color);
        this.style_figure += "border-radius:50%;"
    }
}
let figure = new RootFigure(100, 200, "figure","blue", "lightblue");
figure.set("Figure");
figure.create();
// setTimeout(()=>{figure.generateColor()}, 2000);
let interval = setInterval(()=>{figure.generateColor()}, 2000);

setTimeout(()=>{clearInterval(interval)}, 10000)
// figure.generateColor();

let rectangle = new Rectangle(200,100, "rect","pink");
rectangle.set("Rectangle");
rectangle.create()

let circle = new Circle(200, "circle","orange")
circle.set("Circle")
circle.create()