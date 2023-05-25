export const OFFER_COUNT = 5;
export const DESTINATION_COUNT = 5;
export const POINT_COUNT = 5;

export const WAYPOINT_TYPES = ['Check-in', 'Sightseeing', 'Restaurant', 'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight'];

export const DESTINATIONS = ['Amsterdam', 'Chamonix', 'Geneva', 'Rome', 'New York'];

export const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'Fusce tristique felis at fermentum pharetra.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.'
];

export const TRIP_OFFERS = ['Order Uber', 'Add luggage', 'Switch to comfort', 'Rent a car', 'Add breakfast', 'Book tickets', 'Lunch in city'];

export const DEFAULT_POINT = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: 'taxi',
};

export const Price = {
  MIN: 1,
  MAX: 1000
};

export const Duration = {
  HOUR: 5,
  DAY: 5,
  MIN: 59
};

export const DATE_FORMAT = 'DD/MM/YY HH:mm';