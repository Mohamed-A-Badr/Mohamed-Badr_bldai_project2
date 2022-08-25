import React from "react";

const Course = ({ course }) => {
  return (
    <div class="card">
      <img src={course.img} alt="course banner" />
      <div>
        <h3 class="fw-bold">{course.title}</h3>
        <p>{course.author}</p>
        <div class="rating">
          <span class="total-rate">{course.total_rate}</span>
          <i class="fa fa-star checked"></i>
          <i class="fa fa-star checked"></i>
          <i class="fa fa-star checked"></i>
          <i class="fa fa-star checked"></i>
          <i class="fa fa-star-half-full"></i>
          <span class="no-of-ratings">{course.no_of_ratings}</span>
        </div>
      </div>
      <div class="course-price">
        <p class="new-price">{course.new_Price}</p>
        <p class="discount">{course.discount}</p>
      </div>
    </div>
  );
};

export default Course;
