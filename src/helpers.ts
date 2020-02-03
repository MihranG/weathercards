import { IWeatherItem, IWeatherConditions, IDataForState } from './interfaces';
import moment from 'moment';

export const daylyWeatherCombiner = (
  list: IWeatherItem[],
  dayQty: number,
): IDataForState[] => {
  const objOfDays = list.reduce(
    (acc: { [s: number]: IDataForState }, item: IWeatherItem) => {
      const m = moment(item.dt * 1000);
      const day = m.date();
      if (!acc[day]) {
        if (Object.keys(acc).length < dayQty) {
          acc[day] = {
            date: item.dt,
            min: item.main.temp_min,
            max: item.main.temp_max,
            condition: item.weather.map(
              (weatherCondition: IWeatherConditions) => weatherCondition.main,
            ),
          };
        }
      } else {
        if (item.main.temp_min < acc[day].min) {
          acc[day].min = item.main.temp_min;
        }

        if (item.main.temp_max > acc[day].min) {
          acc[day].max = item.main.temp_max;
        }
        item.weather.forEach((weatherCondition: IWeatherConditions) => {
          if (acc[day].condition.indexOf(weatherCondition.main) === -1) {
            acc[day].condition.push(weatherCondition.main);
          }
        });
      }

      return acc;
    },
    {},
  );

  return Object.values(objOfDays);
};
