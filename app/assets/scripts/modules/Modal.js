import $ from "jquery";

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events(); // so listeners run as soon as page loades
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    // clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      // code foe ESC key
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false; // prevents default behaviour of scrolling up (when link is clicked)
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
  // above 2 methods arenot run directly but by event handlers, that's why we needed bind(this)
}

export default Modal;
