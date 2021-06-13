import React from "react";
import Carousel from "react-material-ui-carousel";
import "../styles/Carousel.css";

const CarouselReviews = () => {
  const reviews = [
    {
      name: "Theodore Frey",
      date: "January 27, 2020",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nisl pretium fusce id. Congue nisi vitae suscipit tellus mauris.",
    },
    {
      name: "Kathie Simon",
      date: "July 14, 2020",
      review:
        "Porttitor eget dolor morbi non arcu risus. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Tincidunt eget nullam non nisi est sit amet facilisis magna.",
    },
    {
      name: "Rosalia Villa",
      date: "December 1, 2020",
      review:
        "Volutpat sed cras ornare arcu. Sit amet consectetur adipiscing elit. Lacinia quis vel eros donec ac odio tempor orci dapibus. Lacinia quis vel eros donec ac odio tempor orci dapibus.",
    },
    {
      name: "Anton Cain",
      date: "January 6, 2021",
      review:
        "Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Velit dignissim sodales ut eu sem. Bibendum ut tristique et egestas quis ipsum gravida. Adipiscing diam donec adipiscing tristique.",
    },
    {
      name: "Ariel Acosta",
      date: "May 29, 2021",
      review:
        "Aliquet risus feugiat in ante metus. Cras fermentum odio eu feugiat pretium. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Eget aliquet nibh praesent tristique magna sit amet.",
    },
  ];

  return (
    <div className="carousel-container">
      <Carousel
        navButtonsProps={{
          style: {
            opacity: 1,
            backgroundColor: "orchid",
            marginTop: "30px",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            color: "black",
            marginBottom: "30px",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "orchid",
          },
        }}
      >
        {reviews.map((items, index) => {
          return (
            <div className="review-info" key={index}>
              <h1 className="name">{items.name}</h1>
              <h3 className="date">{items.date}</h3>
              <p className="review">{items.review}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselReviews;
