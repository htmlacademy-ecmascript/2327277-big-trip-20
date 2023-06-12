import AbstractView from '../framework/view/abstract-view.js';
import { formatStringToDateTime, formatStringToShortDate, formatStringToTime, getTimeDiff } from '../utils.js';
import he from 'he';

function createPointsViewTemplate ({point, pointDestinations, pointOffers}) {
  const {basePrice, dateFrom, dateTo, isFavorite, type} = point;

  function createOffersTemplate() {
    return (
      pointOffers.map((offer) => (
        `<li class="event__offer">
          <span class="event__offer-title">${offer.title}</span>
          +€&nbsp;
          <span class="event__offers-price">${offer.price}</span>
          </li>`
      )).join(' ')
    );
  }
  return (
    `<li class="trip-events__item">
        <div class="event">
        <time class="event__date" datetime="${formatStringToDateTime(dateFrom)}">${formatStringToShortDate(dateFrom)}</time>
          <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
          </div>
          <h3 class="event__title">${type} ${pointDestinations.name}</h3>
          <div class="event__schedule">
            <p class="event__time">
            <time class="event__start-time" datetime="${formatStringToTime(dateFrom)}">${formatStringToTime(dateFrom)}</time>
              &mdash;
              <time class="event__end-time" datetime="${formatStringToTime(dateTo)}">${formatStringToTime(dateTo)}</time>
            </p>
            <p class="event__duration">${getTimeDiff(dateFrom, dateTo)}</p>
          </div>
          <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${he.encode(basePrice.toString())}</span></span>
          </p>
          <h4 class="visually-hidden">Offers:</h4>
          <ul class="event__selected-offers">
          ${createOffersTemplate()}
          </ul>
          <button class="event__favorite-btn event__favorite-btn${isFavorite ? ' event__favorite-btn--active' : ''}" type="button">
            <span class="visually-hidden">Add to favorite</span>
            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
              <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
            </svg>
          </button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </div>
      </li>`

  );
}


export default class PointView extends AbstractView {
  #point = null;
  #pointDestinations = null;
  #pointOffers = null;
  #handleEditClick = null;
  #handleFavoriteClick = null;

  constructor({
    point,
    pointDestinations,
    pointOffers,
    onEditClick,
    onFavoriteClick
  }){
    super();
    this.#point = point;
    this.#pointDestinations = pointDestinations;
    this.#pointOffers = pointOffers;
    this.#handleEditClick = onEditClick;
    this.#handleFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createPointsViewTemplate({
      point:this.#point,
      pointDestinations:this.#pointDestinations,
      pointOffers:this.#pointOffers
    });
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };
}


