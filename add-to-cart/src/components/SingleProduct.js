import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();

  // Calculate the number of full stars and half star
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;

  // Create an array of star icons based on the fullStars
  const starIcons = Array.from({ length: fullStars }, (_, index) => (
    <FontAwesomeIcon icon={faStar} key={index} className="text-yellow-500" />
  ));

  // Add a half star icon if needed
  if (hasHalfStar) {
    starIcons.push(<FontAwesomeIcon icon={faStarHalf} key="half-star" className="text-yellow-500" />);
  }

  return (
    <div className="flex flex-col justify-between items-center ease-in-out duration-300 border-2 text-xxl text-black w-full p-2 gap-2 rounded-lg" key={product.id}>
      <p className="text-ellipsis font-bold mt-4 justify-self-start text-center self-center font-[Poppins] text-2xl capitalize">
        {product.title}
      </p>
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-64 w-auto object-cover hover:object-contain duration-500 ease-in-out aspect-square rounded-xl"
      />
      <p className="font-sans pl-4 pr-4 mt-2 mb-2 max-h-36 w-full text-ellipsis overflow-hidden">
        {product.description ? product.description : "No description available"}
      </p>
      {product.discountPercentage > 0 ? (
        <p className="font-bold text-2xl text-red-800 bottom-0 ">
          ${Math.round(
            product.price - (product.price * product.discountPercentage) / 100
          )}
          <span className="text-sm absolute opacity-40 font-bold ml-2 line-through">
            ${product.price}
          </span>
        </p>
      ) : null}
  
      <div className="flex flex-row justify-center items-center justify-self-end self-center mt-2">
        {starIcons}{" "}
        <span className="text-lg opacity-20 font-bold ml-2">
          {product.rating}
        </span>
      </div>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="w-full font-bold font-sans border-2 border-red-800 border-opacity-50 uppercase bg-slate-100 rounded-lg text-black hover:bg-red-800 hover:text-white"
      >
        Add to Cart
      </button>
    </div>
  );
  
};

export default SingleProduct;
