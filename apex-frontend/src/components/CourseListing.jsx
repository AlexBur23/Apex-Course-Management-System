const CourseListing = ({ courseList }) => {
  return (
    <ul>
      {courseList.map((item) => (
        <li key={item.id} className="course-listing">
          Course: {item.course_number}, Title: {item.title}, Instructor:{" "}
          {item.instructor}, Professor: {item.professor}, Semester:{" "}
          {item.semester} {item.year}, Credit Hrs: {item.credit_hours}
        </li>
      ))}
    </ul>
  );
};

export default CourseListing;
