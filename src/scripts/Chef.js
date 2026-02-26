export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = this.element.querySelectorAll('[data-poutine]');
    this.init();
  }
  init() {}
}
