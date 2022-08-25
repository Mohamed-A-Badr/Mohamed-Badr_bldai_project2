import React from "react";
import Course from "./Course";

class Carousel extends React.Component {
  state = {
    nowIndex: 0,
  };

  computeLeft = () => {
    const { courseWidth, courseHeight, courseMargin } = this.props;
    const { nowIndex } = this.state;
    console.log("nowIndex", nowIndex);
    let leftSpan = parseInt(`${-nowIndex * parseInt(courseWidth)}`);
    return {
      left:
        courseWidth.toString().match(/[%vw]/) != null
          ? `calc(${leftSpan}% - ${courseMargin * 2 * nowIndex}px)`
          : `${leftSpan - courseMargin * 2 * nowIndex}px`,
    };
  };

  changeImagePosition = (index) => {
    const { courses, block } = this.props;
    const { nowIndex } = this.state;
    // (1 + 1 + 3) % 3
    this.setState({
      nowIndex: (nowIndex + index + courses.length) % courses.length,
    });
  };

  render() {
    const { courses, courseMargin, courseWidth, courseHeight } = this.props;
    return (
      <div className="carouselContainer">
        <div className="carouselArea">
          <div style={this.computeLeft()} className="courses">
            {courses.map((course) => {
              return <Course course={course} />;
            })}
          </div>
        </div>

        <div
          onClick={() => this.changeImagePosition(-2)}
          className="controlLeft"
        >
          <i className="fa fa-angle-left" />
        </div>
        <div
          onClick={() => this.changeImagePosition(2)}
          className="controlRight"
        >
          <i className="fa fa-angle-right" />
        </div>
      </div>
    );
  }
}

export default Carousel;
