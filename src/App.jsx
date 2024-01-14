import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';
import image4 from './assets/11.jpg';
import image5 from './assets/12.jpg';
import image6 from './assets/13.jpg';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: 'center',
    infinite: false,
    centerPadding: '60px',
    slidesToShow: 5,
    speed: 500,
    afterChange: (current) => setCurrentSlide(current),
  };

  const data = [
    {
      text: 'text for card',
      img: image1,
    },
    {
      text: 'text for card',
      img: image2,
    },
    {
      text: 'text for card',
      img: image3,
    },
    {
      text: 'text for card',
      img: image4,
    },
    {
      text: 'text for card',
      img: image5,
    },
    {
      text: 'text for card',
      img: image6,
    },
    {
      text: 'text for card',
      img: image1,
    },
    {
      text: 'text for card',
      img: image2,
    },
    {
      text: 'text for card',
      img: image3,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <h2>Center Mode</h2>
      <Slider {...settings} className="">
        {data.map((item, i) => {
          const marginValue =
            i === currentSlide
              ? 'mt-16 border border-greeen-500'
              : i === currentSlide + 1
              ? 'mt-8 border border-greeen-500'
              : i === currentSlide + 2
              ? ''
              : i === currentSlide - 3 || i === currentSlide + 3
              ? 'mt-8 border border-greeen-500'
              : i === currentSlide - 4 || i === currentSlide + 4
              ? 'mt-16'
              : '';
          return (
            <div
              key={i}
              className={`border border-transparent mx-6  h-[50vh] rounded-lg ${marginValue}`}
            >
              <img
                src={item.img}
                className="object-cover mx-auto   w-10/12 h-full rounded-lg"
                alt={`Slider Image ${i + 1}`}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default App;
