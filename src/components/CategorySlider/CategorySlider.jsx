
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Slider from "react-slick";

function CategorySlider() {
    const getAllCategories = async () => {
        return await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    }
    const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories
    });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: () => (
    <div
      className="
        w-3 h-2 
        mt-2
        bg-gray-400 
        rounded-none 
      "
    />
  ),

  appendDots: dots => (
    <ul className="flex gap-2 justify-center ">
      {dots}
    </ul>
  ),
  };
  return (
    <div className="py-6 mb-5">
      <Slider {...settings}>
        {data?.data.data.map((item ,index) => (
          <div key={index} >
            <img src={item.image} alt={item.name} className="w-full h-[200px]" />
            <h3 className="text-gray-700 text-center font-bold">{item.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategorySlider;
