// class Circle
// {
//     constructor(radius)
//     {
//         this._radius = radius;
//     }
//     get radius()
//     {
//         return this._radius;
//     }
//     set radius(value)
//     {
//         if (value >= 0) {
//             this._radius = value;
//         } else {
//             console.log("Radius can`t be negative");
//         }
//     }
//     get diameter() 
//     {
//         return this._radius * 2;
//     }
//     getArea() {
//         return Math.PI * this._radius * this._radius;
//     }

//     getLength() {
//         return 2 * Math.PI * this._radius;
//     }
// }

// let c = new Circle(5);

// console.log("Radius:", c.radius);           
// console.log("Diameter:", c.diameter);          
// console.log("Area:", Math.round(c.getArea()));   
// console.log("Length:", Math.round(c.getLength())); 


class HtmlElement {
    constructor(tagName, isSelfClosing = false) {
        this.tagName = tagName;
        this.isSelfClosing = isSelfClosing;
        this.textContent = "";
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }

    setAttribute(name, value) {
        this.attributes.push({ name, value });
    }

    setStyle(property, value) {
        this.styles.push({ property, value });
    }

    appendChild(element) {
        this.children.push(element);
    }

    prependChild(element) {
        this.children.unshift(element);
    }

    setText(text) {
        this.textContent = text;
    }

    getHtml() {
        let attributes_ = this.attributes.map(attr => ` ${attr.name}="${attr.value}"`).join("");
        let style_ = this.styles.map(style => `${style.property}: ${style.value};`).join("");
        if (style_) {
            attributes_ += ` style="${style_}"`;
        }

        if (this.isSelfClosing) {
            return `<${this.tagName} ${attributes_} />`;
        }

        let childrenHtml = this.children.map(child => child.getHtml()).join("");
        return `<${this.tagName}${attributes_}>${this.textContent}${childrenHtml}</${this.tagName}>`;
    }
}

let wrapper = new HtmlElement("div");
wrapper.setAttribute("id", "wrapper");
wrapper.setStyle("display", "flex");

function create() {
    let block = new HtmlElement("div");
    block.setStyle("width", "300px");
    block.setStyle("margin", "10px");

    let h3 = new HtmlElement("h3");
    h3.setText("What is Lorem Ipsum?");

    let img = new HtmlElement("img", true);
    img.setAttribute("src", "img/lipsum.jpg");
    img.setAttribute("alt", "Lorem Ipsum");
    img.setStyle("width", "100%");

    let p = new HtmlElement("p");
    p.setStyle("text-align", "justify");
    p.setText(`"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`);

    let a = new HtmlElement("a");
    a.setAttribute("href", "https://www.lipsum.com/");
    a.setAttribute("target", "_blank");
    a.setText("More...");

    p.appendChild(a);

    block.appendChild(h3);
    block.appendChild(img);
    block.appendChild(p);

    return block;
}

wrapper.appendChild(create());

document.write(wrapper.getHtml());


class CssClass
{
    constructor(cssName)
    {
        this.cssName = cssName;
        this.styles = [];
    }

    setStyle(property, value)
    {
        let existing = this.styles.find(s => s.property === property);
        if (existing) {
            existing.value = value;
        } else {
            this.styles.push({ property, value });
        }
    }
    removeStyle(property)
    {
        this.styles = this.styles.filter(s => s.property !== property);
    }
    getCss()
    {
        const styleString = this.styles.map(s => `    ${s.property}: ${s.value};`).join("\n");

        return `.${this.cssName} {\n${styleString}\n}`;
    }
}

let myClass = new CssClass("wrapper");

myClass.setStyle("display", "flex");
myClass.setStyle("gap", "20px");
myClass.setStyle("padding", "10px");

console.log(myClass.getCss());



class HtmlBlock {
    constructor() {
        this.styles = [];
        this.rootElement = null; 
    }

    addStyle(cssClass) {
        this.styles.push(cssClass);
    }

    setRootElement(element) {
        this.rootElement = element;
    }

    getCode() {
        let stylesCode = this.styles.map(s => s.getCss()).join('\n');
        let htmlCode = this.rootElement.getHtml();

        return `<style>\n${stylesCode}\n</style>\n${htmlCode}`;
    }
}
