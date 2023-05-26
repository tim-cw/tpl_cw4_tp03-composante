import ComponentFactory from './ComponentFactory';
import Icons from './utils/Icons';

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');

    new ComponentFactory();
    // Ne pense même pas instancier ta composante ici dans le Main. Utilise les techniques qu'on a vu! ;)

    Icons.load();
  }
}
new Main();
