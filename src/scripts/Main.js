import Icons from './utils/Icons.js';
import Chef from './Chef.js';

class Main {
  constructor() {
    this.init();
  }
  init() {
    // La ligne suivante devrait être au TOUT début du init() du Main
    Icons.load();

    const chefs = document.querySelectorAll('.chef');
    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];
      new Chef(chef);
    }
  }
}

new Main();
