import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-chef_order');
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
  sendOrder() {}
}
