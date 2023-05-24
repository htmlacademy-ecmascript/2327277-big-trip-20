
import { getRandomInteger } from '../utils.js';
import { Price } from '../const.js';

export function generateOffer (type) {
  return {
    id: crypto.randomUUID(),
    title: `Offer ${type}`,
    price: getRandomInteger(Price.MIN, (Price.MAX / 10))
  };
}
