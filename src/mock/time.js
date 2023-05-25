import { Duration } from '../const.js';
import dayjs from 'dayjs';
import { getRandomInteger } from '../utils.js';


let date = dayjs().subtract(getRandomInteger(0, Duration.DAY), 'day').toDate();

export function getDate ({next}) {
  const minsGap = getRandomInteger(0, Duration.MIN);
  const hoursGap = getRandomInteger(1, Duration.HOUR);
  const daysGap = getRandomInteger(0, Duration.DAY);

  if(next) {
    date = dayjs(date)
      .add(minsGap, 'minute')
      .add(hoursGap, 'hour')
      .add(daysGap, 'day')
      .toDate();
  }
  return date;
}
