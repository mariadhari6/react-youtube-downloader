import React from "react";

const SearchBar: React.FC = () => {
  const [search, setSearch] = React.useState<string>();
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    const idVideo = search?.substring(
      search.indexOf("=") + 1,
      search.lastIndexOf("&")
    );
    console.log(idVideo);
  };
  return (
    <React.Fragment>
      <h1 className="font-mono text-5xl font-black">Vesper</h1>
      <p className="font-medium text-sm">a save and easy YouTube downloader</p>
      <form
        className="flex md:w-1/2 w-5/6 gap-5 justify-center"
        onSubmit={handleSubmit}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="any Youtube URL"
          className="outline-none w-full min-w-max py-2 px-4 drop-shadow-lg shadow-gray-500/20 rounded"
        />
        <button
          type="submit"
          className="bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 text-white py-2 px-4 rounded outline-none"
        >
          Download
        </button>
      </form>
    </React.Fragment>
  );
};

export default SearchBar;
