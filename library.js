class ColorChanger 
{
    constructor(elementId, color) 
    {
        this.elementId = elementId;
        this.color = color;
    }

    changeColor() 
    {
        const element = document.getElementById(this.elementId);
        if (element) 
            element.style.color = this.color;
        else 
            console.error(`Element with id ${this.elementId} not found`);
    }
}

export default ColorChanger;