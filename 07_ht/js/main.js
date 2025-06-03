class Selector
{
    constructor(cssName)
    {
        this.cssName = cssName;
        this.styles = [];
    }

    addProperty(name, value)
    {
        let existing = this.styles.find(s => s.name === name);
        if (existing) {
            existing.value = value;
        } else {
            this.styles.push({ name, value });
        }
    }
    removeProperty(name)
    {
        this.styles = this.styles.filter(s => s.name !== name);
    }
    getCss()
    {
        const getstyle = this.styles.map(s => `${s.name}: ${s.value};`).join("\n");

        return `.${this.cssName} {\n${getstyle}\n}`;
    }
}

let myClass = new Selector("test");

myClass.addProperty("display", "flex");
myClass.addProperty("gap", "20px");
myClass.addProperty("padding", "10px");

console.log(myClass.getCss());
myClass.removeProperty("gap");
console.log(myClass.getCss());

class Button 
{
    constructor(width, height, btnText)
    {
        this.width = width;
        this.height = height;
        this.btnText = btnText;
    }
    ShowBtn()
    {
        document.write(`<button style="width:${this.width}px; height:${this.height}px;">${this.btnText}</button>`)
    }
}

class BootstrapButton extends Button
{   
    constructor(width, height, btnText, color)
    {
        super(width, height, btnText); 
        this.color = color;       
    }   
    showBtn()
    {
        document.write(`<button style="width:${this.width}px; height:${this.height}px; background-color:${this.color};">${this.btnText}</button>`);
    }
}

let test = new BootstrapButton(200, 60, "Bootstrap Button", "green");
test.showBtn();
