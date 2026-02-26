export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-type-button');
    this.selectedType = '';
    this.init();
  }
  init() {
    for (let i = 0; i < this.types.length; i++) {
      this.types[i].addEventListener('click', this.selectType.bind(this));
    }
  }
  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      this.types[i].classList.remove('is-active');
    }

    const target = event.currentTarget;
    target.classList.add('is-active');

    this.selectedType = target.innerText;
    this.updatePhoto();
  }
  updatePhoto() {
    const image = this.element.querySelector('.js-poutine__image');
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
