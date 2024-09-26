import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum
          enim fuga facilis quam perspiciatis fugiat sapiente tenetur, tempora
          est esse distinctio molestias nihil, voluptas voluptates? Sit tenetur
          accusantium praesentium?
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam vero
          commodi, qui laudantium atque perferendis molestias minus maxime velit
          explicabo, optio repudiandae dolor quos. Nemo architecto voluptate ex
          molestiae vitae.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
