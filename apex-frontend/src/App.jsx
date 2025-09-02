import "./App.css";
import apexLogo from "./assets/apex.svg";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Profile, CourseSchedule, CourseSearch } from "./pages";

function App() {
  return (
    <>
      <div>
        <img src={apexLogo} alt="The apex logo" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courseschedule" element={<CourseSchedule />} />
        <Route path="/coursesearch" element={<CourseSearch />} />
      </Routes>
    </>
  );
}

export default App;
