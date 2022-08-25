import Carousel from "./Carousel";
import Course from "./Course";
import courses from "./Courses_content.json";
console.log(courses);

function App() {
  return (
    <Carousel
      courses={courses.Courses.Python}
      autoplay={true}
      delay={10}
      courseWidth={"18rem"}
      courseHeight={"auto"}
      courseMargin={10}
    />
  );
}

export default App;
