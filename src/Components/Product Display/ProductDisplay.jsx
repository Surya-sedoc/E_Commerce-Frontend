import React, { useContext } from 'react';
import './ProductDisplay.css';
import stat_icon from '../Assets/star_icon.png';
import start_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={stat_icon} alt="" />
          <img src={stat_icon} alt="" />
          <img src={stat_icon} alt="" />
          <img src={stat_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(136)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight garment, typically crafted from knitted fabric, the
          t-shirt is a versatile staple in any wardrobe. Featuring a snug fit,
          it boasts a round neckline and short sleeves, making it suitable for
          various occasions. Whether worn as an undershirt for added warmth or
          as a standalone outer garment, its comfort and simplicity make it a
          timeless choice for both men and women alike. With its effortless
          style and practical design, the t-shirt effortlessly complements a
          wide range of outfits, from casual ensembles to more formal attire.
          Its enduring popularity and widespread appeal have solidified its
          status as a fashion essential, beloved by individuals of all ages and
          backgrounds.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category :</span> Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest, Most Selling
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
