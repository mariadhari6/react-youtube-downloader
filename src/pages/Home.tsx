import React from "react";
import SearchBar from "../components/SearchBar";

const Home: React.FC = () => {
  return (
    <div className="flex w-screen min-h-screen items-center justify-center flex-col bg-gray-50 gap-2">
      <SearchBar />
    </div>
  );
};

export default Home;
