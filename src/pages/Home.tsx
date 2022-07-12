import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Videos from "../components/Videos";
import { ItemContentContext } from "../contexts/ItemContent";
import { ItemContent } from "../interface";
const Home: React.FC = () => {
  const [state, setState] = useState<ItemContent | null>(null);
  const valContext = { state, setState };
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    console.log(state);
  }, [state]);
  // useEffect(() => {
  //   console.log(loading);
  // }, [loading]);
  return (
    <ItemContentContext.Provider value={valContext}>
      <div className="flex w-screen min-h-screen items-center justify-center flex-col bg-gray-50 gap-2">
        <SearchBar setLoading={setLoading} />
        {state && <Videos />}
        {loading && (
          <div className="lds-spinner mt-3">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </ItemContentContext.Provider>
  );
};

export default Home;
