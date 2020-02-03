export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface IWeatherConditions {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface IWeatherItem {
  dt: number;
  main: IMain;
  weather: IWeatherConditions[];
  clouds: { all: number };
  wind: { speed: number; deg: number };
  sys: { pod: string };
  dt_txt: string;
}

export interface IDataForState {
  date: number;
  max: number;
  min: number;
  condition: string[];
}
