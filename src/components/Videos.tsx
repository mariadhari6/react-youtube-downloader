import React, { useContext } from "react";
import { ItemContentContext } from "../contexts/ItemContent";
const Videos: React.FC = () => {
  const itemContentContext: any = useContext(ItemContentContext);
  return (
    <React.Fragment>
      <div className="block lg:flex justify-between md:w-4/5 w-5/6 mt-3">
        <div className="flex gap-8 flex-col sm:flex-row h-full">
          <img
            src={itemContentContext?.state?.thumbnail}
            alt="thmbnail"
            className="rounded-lg sm:w-max sm:h-max"
          />
          <div>
            <h4 className="font-bold text-2xl capitalize">
              {itemContentContext?.state?.title}
            </h4>

            {itemContentContext?.state?.description
              ?.split("\n")
              .map((phrase: any, index: number) => {
                if (index < 3) {
                  return (
                    <div>
                      <p className="text-gray-500 text-sm">{phrase}</p>
                      {index === 2 && (
                        <p className="text-gray-500 text-sm">
                          {" "}
                          ... other descriptions
                        </p>
                      )}
                    </div>
                  );
                } else return null;
              })}
          </div>
        </div>
        <div className="grid grid-flow-col gap-1 h-fit mt-5 lg:mt-0">
          <select className="outline-none bg-transparent border-2 border-indigo-500 py-1 px-3 text-indigo-500 rounded font-medium cursor-pointer col-span-4">
            <option value="" className="text-white" disabled selected>
              Media
            </option>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
          </select>
          <select className="outline-none bg-transparent border-2 border-indigo-500 py-1 px-3 text-indigo-500 rounded font-medium cursor-pointer col-span-4">
            <option value="" className="text-white" disabled selected>
              Quality
            </option>
            <option value="360p">360</option>
            <option value="720p">720</option>
          </select>
          <button className="outline-none bg-transparent border-2 border-indigo-500 py-1 px-3 text-indigo-500 rounded font-medium hover:bg-indigo-500 hover:text-white col-span-4">
            Download
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Videos;
