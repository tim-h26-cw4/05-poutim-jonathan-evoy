import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-chef__order');
    this.init();
  }
  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = new Poutine(poutines[i]);
      this.menu.push(poutine);
    }

    const button = this.element.querySelector('.js-send-order');
    button.addEventListener('click', this.sendOrder.bind(this));
  }
  sendOrder() {
    this.container.innerHTML = '';

    var poutinesActive = 0;
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].selectedType) {
        poutinesActive++;
      }
    }

    const p = document.createElement('p');
    p.innerText = `Nombre total de poutine(s) :  ${poutinesActive}`;
    this.container.appendChild(p);
  }
}
