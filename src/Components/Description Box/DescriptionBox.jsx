import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (145)</div>
      </div>

      <div className="descriptionbox-description">
        <p>
          "Our e-commerce website offers a seamless online shopping experience,
          providing customers with a diverse range of products at their
          fingertips. From trendy fashion pieces to essential electronics, our
          platform caters to all needs and preferences. With user-friendly
          navigation and secure payment options, shopping with us is convenient
          and hassle-free. Explore our curated selection, enjoy exclusive deals,
          and have your purchases delivered right to your doorstep. Discover the
          joy of online shopping with our e-commerce website today!"
        </p>
        <p>
          Step into the world of endless possibilities with our e-commerce
          website. Serving as your virtual marketplace, we bring together a
          myriad of products from various categories, ensuring there's something
          for everyone. Whether you're hunting for the latest gadgets, stylish
          apparel, or home essentials, we've got you covered. Our platform
          offers a seamless browsing experience, allowing you to effortlessly
          explore and discover new treasures. With secure transactions and swift
          delivery, shopping with us is not just convenient, but also enjoyable.
          Embrace the convenience of modern shopping and embark on your online
          retail journey with us today!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
