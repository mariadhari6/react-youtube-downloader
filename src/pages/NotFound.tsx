import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex w-full items-center justify-center flex-col min-h-screen">
        <h1 className="text-8xl font-bold">404</h1>
        <h5 className="text-2xl font-medium">Page not found</h5>
        <p className="mt-4">
          We are sorry but the page you are looking for does not exist.
        </p>
        <p>
          You could return to{" "}
          <span className="text-blue-700 font-medium">
            <Link to="/">homepage</Link>
          </span>{" "}
          or search using the search box below
        </p>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
