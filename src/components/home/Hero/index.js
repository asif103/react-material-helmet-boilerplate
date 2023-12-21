import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{width:"80vw"}}>

    <Slider {...settings}>
      <div>
        <img src="https://img.freepik.com/premium-photo/mountain-reflected-lake-with-cloudy-sky_168058-1997.jpg" />
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/mountain-reflected-lake-with-cloudy-sky_168058-1997.jpg" />
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/mountain-reflected-lake-with-cloudy-sky_168058-1997.jpg" />
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/mountain-reflected-lake-with-cloudy-sky_168058-1997.jpg" />
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/mountain-reflected-lake-with-cloudy-sky_168058-1997.jpg" />
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/mountain-reflected-lake-with-cloudy-sky_168058-1997.jpg" />
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/mountain-reflected-lake-with-cloudy-sky_168058-1997.jpg" />
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/mountain-reflected-lake-with-cloudy-sky_168058-1997.jpg" />
      </div>
    </Slider>
    </div>
  );
};

export default Hero;
