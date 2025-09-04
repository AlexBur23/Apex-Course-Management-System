const CourseListing = ({ courseList, onRemove }) => {
  return (
    <ul>
      {courseList.map((item) => (
        <li
          key={item.id}
          className="course-listing flex items-center w-auto mb-2 p-2 bg-white rounded shadow"
        >
          <span>
            Course: {item.course_number}, Title: {item.title}, Instructor:{" "}
            {item.instructor}, Professor: {item.professor}, Semester:{" "}
            {item.semester} {item.year}, Credit Hrs: {item.credit_hours}
          </span>
          <button
            className="bg-green-400 ml-auto mr-7 px-4 py-2 rounded shadow-md hover:bg-green-300 active:bg-green-500 active:shadow-sm"
            onClick={() => onRemove(item.id)}
          >
            Drop
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CourseListing;
