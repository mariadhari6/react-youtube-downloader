import React, { useContext } from "react";
import { API_CONFIG, ENDPOINT } from "../config";
import { ItemContentContext } from "../contexts/ItemContent";
import { Video, Audio, ItemContent } from "../interface";

const SearchBar = (props: any) => {
  const [search, setSearch] = React.useState<string>();
  const itemContentContext: any = useContext(ItemContentContext);
  const fetchApi = (id: string | undefined): void => {
    props?.setLoading(true);
    const endPoint = ENDPOINT + id;
    const params: RequestInit = {
      headers: API_CONFIG,
    };
    fetch(endPoint, params)
      .then((response) => response.json())
      .then((data) => {
        if (data?.status === true) {
          const title: string = data?.title;
          const description: string = data?.description;
          const thumbnail: string = data?.thumbnails[1].url;
          const videos: any[] = [];
          data?.videos?.items.forEach((video: any) => {
            const itemVideo: Video = {
              url: video?.url,
              extension: video?.extension,
              sizeText: video?.sizeText,
              hasAudio: video?.hasAudio,
              quality: video?.quality,
            };
            videos.push(itemVideo);
          });
          const audios: any[] = [];
          data?.audios?.items.forEach((audio: any) => {
            const itemAudio: Audio = {
              url: audio?.url,
              extension: audio?.extension,
              sizeText: audio?.sizeText,
            };
            audios.push(itemAudio);
          });
          const itemContent: ItemContent = {
            title: title,
            description: description,
            thumbnail: thumbnail,
            videos: videos,
            audios: audios,
          };
          itemContentContext.setState(itemContent);
          setSearch("");
        } else throw new Error("Failed");
        props?.setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        props?.setLoading(false);
      });
  };
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    let first = search?.indexOf("v=");
    let last = search?.lastIndexOf("&");
    // for youtube watch
    let idVideo = search?.substring(Number(first) + 2, Number(last));

    if (first === -1 || last === -1) {
      first = search?.indexOf("be/");
      last = search?.lastIndexOf(search.charAt(search.length));
      // for youtube .be on app
      idVideo = search?.substring(Number(first) + 3, last);
    }
    if (first === -1 || last === -1) {
      first = search?.indexOf("shorts/");
      last = search?.lastIndexOf("?");
      if (last === -1) {
        last = search?.lastIndexOf(search.charAt(search.length));
      }
      // for youtube short
      idVideo = search?.substring(Number(first) + 7, last);
    }
    if (idVideo !== null) {
      fetchApi(idVideo);
      itemContentContext.setState((prevState: any) => null);
    }
  };
  return (
    <React.Fragment>
      <h1 className="font-mono text-5xl font-black">Vesper</h1>
      <p className="font-medium text-sm">a save and easy YouTube downloader</p>
      <form
        className="flex md:w-4/5 w-5/6 gap-5 justify-center"
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
