import Slider from "react-slick";
import imgSlider1 from "../../assets/images/slider-image-1.jpeg";
import imgSlider2 from "../../assets/images/slider-image-2.jpeg";
import imgSlider3 from "../../assets/images/slider-image-3.jpeg";
import img1 from "../../assets/images/grocery-banner.png";
import img2 from "../../assets/images/grocery-banner-2.jpeg";


const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
      customPaging: () => (
    <div
      className="
        w-3 h-2 
        bg-gray-400 
        rounded-none 
      "
    />
  ),

  appendDots: dots => (
    <ul className="flex gap-2 justify-center mt-4">
      {dots}
    </ul>
  ),
  };
  return (
    <div className="py-7">
        <div className="flex flex-wrap justify-center items-center">
            <div className="w-2/3">
            <Slider {...settings}>
                <div>
                    <img src={imgSlider1} alt="slider1" className="w-full h-[400px]"/>
                    
                </div>
                <div>
                    <img src={imgSlider2} alt="slider2" className="w-full h-[400px]"/>
                    
                </div>
                <div>
                    <img src={imgSlider3} alt="slider3" className="w-full h-[400px]"/>
                    
                </div>
            </Slider>
            </div>
            <div className="w-1/3 mb-1">
            <img src={img1} alt="" className="w-full h-[200px]"/>
            <img src={img2} alt="" className="w-full h-[200px]"/>
            </div>
            
        </div>
    </div>
  );
}
export default HomeSlider;