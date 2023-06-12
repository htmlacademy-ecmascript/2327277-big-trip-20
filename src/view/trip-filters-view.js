import AbstractView from '../framework/view/abstract-view.js';
import { capitalize } from '../utils.js';

function createFilterItem(filter, currentFilterType) {
  const {type, count} = filter;
  return (
    `<div class="trip-filters__filter">
  <input id="filter-${type}"
  class="trip-filters__filter-input  visually-hidden"
  type="radio"
  name="trip-filter"
  value="${type}" ${type === currentFilterType ? 'checked' : ''} ${count === 0 ? 'disabled' : ''}>
  <label class="trip-filters__filter-label"
  for="filter-${type}">
  ${capitalize(type)}
  </label>
</div>`
  );
}

function createFilterTemplate(filters, currentFilterType) {
  return (
    `<form class="trip-filters" action="#" method="get">
  ${filters.map((filter) => createFilterItem(filter, currentFilterType)).join('')}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
}


export default class FilterView extends AbstractView{
  #filters = null;
  #currentFilter = null;
  #handleFilterTypeChange = null;

  constructor({filters, currentFilterType, onFilterTypeChange}) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return createFilterTemplate(this.#filters, this.#currentFilter);
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };
}
