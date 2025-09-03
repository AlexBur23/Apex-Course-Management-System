import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Profile, CourseSchedule, CourseSearch } from "./pages";
import { Header, Sidebar } from "./components/components.js";
import React from "react";

function App() {
  return (
    <>
      <div>{<Header />}</div>
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
