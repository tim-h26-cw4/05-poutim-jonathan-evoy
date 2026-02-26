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
    const target = event.currentTarget;

    for (let i = 0; i < this.types.length; i++) {
      if (this.types[i] != target) this.types[i].classList.remove('is-active');
    }

    const isActive = target.classList.toggle('is-active');

    switch (isActive) {
      case true:
        this.selectedType = target.innerText;
        break;
      default:
        this.selectedType = '';
    }

    this.updatePhoto();
  }
  updatePhoto() {
    const image = this.element.querySelector('.js-poutine__image');
    if (this.selectedType) {
      image.classList.add('is-active');
      image.src = `assets/images/${this.selectedType}.png`;
    } else {
      image.classList.remove('is-active');
      image.src = 'assets/images/poutine.png';
    }
  }
}
