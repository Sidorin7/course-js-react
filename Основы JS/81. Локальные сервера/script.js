"use strict";

class Rectange {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea(){
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectange{// extends - наследуется от 
  constructor(height, width, text, bgColor){
    super(height,width); // вызывает тоже самое, которое было у родителя. ВСЕГДА ИДЕТ 1 СТРОЧКОЙ ПОСЛЕ КОНСТРУКТОРА
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps(){
    console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25,10,'hello world', 'red')
div.showMyProps();
console.log(div.calcArea());

// const square = new Rectange(10,10);

// const long = new Rectange(20,100)

// console.log(long.calcArea());
// console.log(square.calcArea());



class FigureSquare{
  constructor(s,h){
    this.s = s;
    this.h = h;
  }
  calcVolume(){
    return `Объем кватрата: ${this.s * this.h}`
  }
}
const volume = new FigureSquare(10,15);
console.log(volume.calcVolume());