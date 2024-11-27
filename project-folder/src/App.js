import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard'; 
import './style.css'; 

function App() {
  const goods = [
    { name: 'Apple', cost: 15, img: 'https://t4.ftcdn.net/jpg/00/59/96/75/240_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg' },
    { name: 'Pear', cost: 20, img: 'https://t3.ftcdn.net/jpg/00/42/34/30/240_F_42343029_y7q7yWDO1hrmuZuIcmRqoaeI4IcjecIT.jpg' },
    { name: 'Grape', cost: 25, img: 'https://t3.ftcdn.net/jpg/01/56/26/38/240_F_156263893_NjL8agp6JEoPIHijmBpL1TJgdarmQeve.jpg' },
    { name: 'Peach', cost: 18, img: 'https://t3.ftcdn.net/jpg/03/00/59/16/240_F_300591692_sE2Zpz9hoU0H1Klz0JzRw1F74HO7vWne.jpg' },
    { name: 'Banana', cost: 12, img: 'https://t3.ftcdn.net/jpg/03/03/66/56/240_F_303665638_AvUUcS4St4a3zcqA4FoW0tCDyyo5RwYR.jpg' },
    { name: 'Orange', cost: 16, img: 'https://t3.ftcdn.net/jpg/00/56/01/00/240_F_56010077_UA98ADMw95rEB2hCuAlFOJkjdirrAAPV.jpg' },
  ];

  return (
    <div className="App">
      <Header />
      <Content />
      <Image src="https://vgorode.ua/img/article/3872/6_main-v1577255306.jpg" />

      <h1>Gallery of Goods</h1>
      <div className="goods-gallery">
        {goods.map((item, index) => (
          <GoodsCard
            key={index}
            name={item.name}
            cost={item.cost}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
