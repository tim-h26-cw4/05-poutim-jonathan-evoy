import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-chef__order');
    this.poutinesActive = 0;
    this.init();
  }
  init() {
    const poutines = this.element.querySelectorAll(
      '[data-component="Poutine"]'
    );

    for (let i = 0; i < poutines.length; i++) {
      const poutine = new Poutine(poutines[i]);
      this.menu.push(poutine);
    }

    const button = this.element.querySelector('.js-send-order');
    button.addEventListener('click', this.sendOrder.bind(this));
  }
  sendOrder() {
    this.container.innerHTML = '';
    this.poutinesActive = 0;

    this.createHeader();

    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].selectedType) {
        this.poutinesActive++;
        this.createListItem(i);
      }
    }

    this.createFooter();
  }
  createHeader() {
    const header = document.createElement('h2');
    header.innerText = 'Voici le résumé de votre commande :';
    this.container.appendChild(header);
  }
  createListItem(poutineChecked) {
    const p = document.createElement('p');
    p.innerText = `Poutine #${this.poutinesActive} - ${this.menu[poutineChecked].selectedType}`;
    this.container.appendChild(p);
  }
  createFooter() {
    const p = document.createElement('p');
    p.innerText = `Nombre total de poutine(s) :  ${this.poutinesActive}`;
    this.container.appendChild(p);
  }
}
