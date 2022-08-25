import Course from "./Course";
import courses from "./Courses_content.json";
console.log(courses);

function App() {
  return (
    <div className="courses-container">
      {courses.Courses.Python.map((course) => (
        <Course course={course} />
      ))}
    </div>
  );
}

export default App;
