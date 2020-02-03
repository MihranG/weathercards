class WeatherAPI {
  url: string;
  key: string;
  constructor(key: string) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast';
    this.key = key;
  }

  getTheWeatherOfTheCity(city: string) {
    const request = `${this.url}?q=${city}&units=metric&cnt=24&appid=${this.key}`;
    return fetch(request).then(res => res.json());
  }
}

export const weatherApiWithKey = new WeatherAPI(
  '929b5079e5d11278793fbf86fabb00fc',
);
