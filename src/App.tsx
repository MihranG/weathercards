import React from 'react';
import './App.css';
import CardComponent from './CardComponent';
import SearchComponent from './SearchComponent';
import ErrorComponent from './ErrorComponent';

import { weatherApiWithKey } from './Api';
import { daylyWeatherCombiner } from './helpers';
import { IDataForState } from './interfaces';

interface IState {
  data: IDataForState[];
  city: string;
  error: string;
}

enum Errors {
  NoSuchCity = 'No Such City',
}
class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      city: '',
      data: [],
      error: '',
    };
  }

  cityInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ city: e.target.value });
  };

  handleSearchClick = (city: string) => {
    weatherApiWithKey
      .getTheWeatherOfTheCity(city)
      .then(res => {
        if (res.cod !== '200') {
          this.setState({
            data: [],
            error: res.message ? res.message : `${Errors.NoSuchCity} ${city}`,
          });
        } else {
          this.setState({
            data: daylyWeatherCombiner(res.list, 3),
          });
        }
      })
      .catch(e => {
        this.setState({
          error: e,
          data: [],
        });
      });
  };

  render() {
    const { data, error } = this.state;
    return (
      <div className="App">
        <SearchComponent handleSearchClick={this.handleSearchClick} />
        {error ? (
          <ErrorComponent errorMessage={error} />
        ) : (
          <div className="card_wrapper">
            {data.map((item: IDataForState, index: number) => (
              <CardComponent
                key={index}
                date={item.date}
                min={item.min}
                max={item.max}
                condition={item.condition.reduce(
                  (acc: string, el: string) => `${acc}, ${el}`,
                )}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
