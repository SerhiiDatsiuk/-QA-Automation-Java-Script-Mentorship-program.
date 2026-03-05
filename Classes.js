
/*Завдання*/
/*Описати кухню класами. Наприклад class Table(), Door(), Fridge(). і тд., 
написати в них різні методи, які притаманні цим обʼєктам. Зробити інстанси кожного класу, і викликати методи на них.*/


//---------Table class---------
class Table {
    constructor (type, color, size, material) {
    this.type = type;
    this.color = color;
    this.size = size;
    this.material = material;
}
displayTableInfo() {
    console.log (`Our table is ${this.type} type. It has ${this.color} color. Its size is ${this.size}. It made from ${this.material}`)
}

}


//---------Door class---------
class Door {
  constructor() {
    this.isOpen = false;
    this.isLocked = false;
  }

  open() {
    if (this.isLocked === true) {
      return "Door is locked";
    }

    if (this.isOpen === false) {
      this.isOpen = true;
      return "Door opened";
    }

    return "Door is already open";
  }
}



//---------Fridge class---------
class Fridge {
  constructor() {
    this.isOpen = false;
    this.products = [];
  }

  open() {
    if (this.isOpen === false) {
      this.isOpen = true;
      return "Fridge opened";
    }

    return "Fridge is already open";
  }

  addFood(product) {
    if (this.isOpen === false) {
      return "Open the fridge first";
    }

    this.products.push(product);
    return `${product} added`;
  }
}


//---------Dishwasher class---------

class Dishwasher {
  constructor() {
    this.isOn = true;       
    this.isRunning = false;  
  }

  start() {
    if (this.isOn === false) {
      return "Turn on the dishwasher first";
    }

    if (this.isRunning === true) {
      return "Dishwasher is already running";
    }

    this.isRunning = true;
    return "Dishwasher started";
  }

  stop() {
    if (this.isRunning === false) {
      return "Dishwasher is not running";
    }

    this.isRunning = false;
    return "Dishwasher stopped";
  }
}


// --------- Kitchen (composition) ----------
class Kitchen {
  constructor() {
    this.table = new Table('kitchen', 'white wood', 'height*wide*long -80cm*100cm*180cm', 'wood');
    this.door = new Door();
    this.fridge = new Fridge();
    this.dishwasher = new Dishwasher()
  }
}


const kitchen = new Kitchen ();

kitchen.table.displayTableInfo();

console.log(kitchen.door.open());

console.log(kitchen.fridge.open());

console.log(kitchen.fridge.addFood("Milk"));

console.log(kitchen.fridge.products);

console.log(kitchen.dishwasher.start());

console.log(kitchen.dishwasher.stop());