import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { productData } = props;
  const { title, brand, image_url, rating, price, id } = productData;

  return (
    <Link to={`/products/${id}`} className="no-underline">
      <div className="m-5 mr-0">
        <img src={image_url} alt="product" className="w-[300px] mb-2.5" />
        <h1 className="font-sans text-[22px] font-[450] text-[#1e293b]">{title}</h1>
        <p className="font-sans text-[18px] font-[450] text-[#64748b]">by {brand}</p>
        <div className="flex flex-row justify-between">
          <p className="font-sans text-[18px] font-[550] text-[#1e293b]">Rs {price}/-</p>
          <div className="bg-[#0967d2] w-[80px] h-[40px] flex justify-between items-center rounded-md mt-[-10px]">
            <p className="font-roboto text-[16px] font-[450] text-white ml-2">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="w-[20px] mr-2"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
