import React, { Component } from 'react';

class Content extends Component {
  render() {
    const hobbies = ["Дизайн", "Йога", "Шопінг", "Книжки"];
    const films = [
      '"Щасливий день смерті", 2017',
      '"Мінлива хмарність, часом фрикадельки", 2009',
      '"Ходячий замок", 2004',
    ];

    return (
      <main>
        <h3>Мої хобі:</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>

        <h3>Улюблені фільми:</h3>
        <ol>
          {films.map((film, index) => (
            <li key={index}>{film}</li>
          ))}
        </ol>

        <h3 id="city-title">Моє улюблене місто: Львів</h3>
        <p id="city-desc">
          Львів - це місто, яке зачаровує своєю атмосферою. Вузькі вулички, старовинні
          будівлі, кав'ярні на кожному кроці. Місто завжди сповнене життя та культурних заходів.
        </p>
      </main>
    );
  }
}

export default Content;
