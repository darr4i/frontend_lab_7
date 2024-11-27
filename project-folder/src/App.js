import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import './style.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Image src="https://vgorode.ua/img/article/3872/6_main-v1577255306.jpg" />
    </div>
  );
}

export default App;
