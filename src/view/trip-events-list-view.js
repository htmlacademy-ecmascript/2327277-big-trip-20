import { createElement } from '../render';

function createTripEventsListTemplate() {
  return (
    // eslint-disable-next-line quotes
    `<ul class="trip-events__list"></ul>`

  );
}

export default class TripEventsListView {
  getTemplate() {
    return createTripEventsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
