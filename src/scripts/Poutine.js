export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('[data-type]');
    this.selectedType = '';
    this.init();
  }
  init() {}
}
