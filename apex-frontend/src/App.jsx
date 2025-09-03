import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Profile, CourseSchedule, CourseSearch } from "./pages";
import { Header, Sidebar, MainContent } from "./components/components.js";
import React from "react";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <aside className="w-25 bg-gray-900 min-h-screen">{<Sidebar />}</aside>
        <main className="flex-1">{<MainContent />}</main>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courseschedule" element={<CourseSchedule />} />
        <Route path="/coursesearch" element={<CourseSearch />} />
      </Routes>
    </div>
  );
}

export default App;
