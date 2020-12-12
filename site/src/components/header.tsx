import { Link } from "gatsby";
import React from "react";

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
        <div className="bg-gray-800 p-4 pt-6 pb-6 mt-8">
          <h1 className="text-2xl uppercase tracking-wide text-white">
            <Link to="/">{props.siteTitle}</Link>
          </h1>
        </div>
        <div className="h-1 bg-gradient-to-r from-red-500 via-indigo-500 to-blue-500"></div>
    </header>
  );
};

export default Header;
