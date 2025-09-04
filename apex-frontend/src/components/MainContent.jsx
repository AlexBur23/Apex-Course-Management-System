import React, { useState } from "react";
import courses from "../utils/courses.json";
import CourseListing from "./CourseListing";
import NavHeading from "./NavHeading";

const MainContent = () => {
  const [courseList, setCourseList] = useState(courses);

  const handleRemove = (id) => {
    setCourseList(courseList.filter((course) => course.id !== id));
  };

  return (
    <div className=" bg-gray-500">
      <NavHeading />
      <div>
        <CourseListing courseList={courseList} onRemove={handleRemove} />
      </div>
    </div>
  );
};

export default MainContent;
