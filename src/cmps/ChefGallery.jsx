import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
//change this.props.user.chef.imgUrl to arrray in FV_DB
export class ChefGallery  extends Component {
  componentDidMount(){
    
    console.log(this.props.user.chef.imgUrl.map(img => <img src={img} alt="Tasty Food"/>) , "img url")
  }

  render() {
     const {user} = this.props
    return (
      <div className="carousel">
    <Carousel swipeable={true} autoPlay infiniteLoop width={300} interval={4000} showThumbs={false} transitionTime="500">
    {this.props.user.chef.imgUrl.map(img => <img src={img} alt="Tasty Food"/>)}
          <img src="https://artzycafe.com/wp-content/uploads/2020/05/Vocations-in-Cooking.jpg" />
            <img src="assets/2.jpeg" />
            <img src="assets/3.jpeg" />
    
        </Carousel>
      </div>
    );
  }
}
// this.props.user.chef.imgUrl.map(img => <img src={img} alt="Tasty Food"/> )