import courses from "../utils/courses.json";
import CourseListing from "./CourseListing";

const MainContent = () => {
  const courseList = courses;
  console.log(courseList);

  return (
    <div>
      <CourseListing courseList={courseList} />
    </div>
  );
};

export default MainContent;
