import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
//change this.props.user.chef.imgUrl to arrray in FV_DB
export class ChefGallery  extends Component {

  render() {
     const {user} = this.props
    return (
      <div className="carousel">
    <Carousel swipeable={true} autoPlay infiniteLoop width={300} interval={4000} showThumbs={false} transitionTime="500">
    {user.chef.imgs.map(img => <div className="carousel-img" style={{backgroundImage: "url(" + img +")" , height :180, width : 300}} key={user._id}  />)}
            
        </Carousel>
      </div>
    );
  }
}
// {user.chef.imgUrl.map(img => <img src={img} alt="Tasty Food" key={user._id} />)}
