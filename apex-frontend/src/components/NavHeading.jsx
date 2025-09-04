import { useState } from "react";
import { Link, Navigate } from "react-router";

const NavHeading = () => {
  const [heading, setHeading] = useState("Home");
  //still working on this, maybe a dynamic tree?
  return (
    <h1 className="px-10 py-5 bg-gray-400 text-3xl text-black shadow-2xl hover:text-indigo-900 hover:scal2-101">
      <Link to="/">{heading}</Link>
    </h1>
  );
};

export default NavHeading;
