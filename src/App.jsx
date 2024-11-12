import React from "react";
import { SlSocialSpotify } from "react-icons/sl";
import axios from "axios";
import { useState } from "react";

function App() {
  const [URL, setURL] = useState("");

  const handleURL = (e) => {
    e.preventDefault();
    setURL(e.target.value);
  };
  const downloadSong = async () => {
    // setURL("")
    const options = {
      method: "GET",
      url: "https://spotify-downloader9.p.rapidapi.com/downloadSong",
      params: {
        songId: `${URL}`,
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "spotify-downloader9.p.rapidapi.com",
      },
    };

    try {
      const rspn = await axios.request(options);
      // console.log(rspn.data.data.downloadLink)
      window.location.href = rspn.data.data.downloadLink;
    } catch (error) {
      console.log(error);
    }
  };

  downloadSong();

  return (
    <div className="h-screen w-screen bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-600 via-lime-400 to-green-600 flex items-center justify-center flex-col gap-y-4">
      <div className="flex items-center justify-center gap-x-2 text-xl font-bold">
        <SlSocialSpotify size={50} />
        <p>Song Downloader</p>
      </div>

      <div className="flex gap-x-2">
        <input
          type="url"
          className="h-10 w-[450px] outline-none px-3 rounded-3xl hover:outline-black"
          onChange={handleURL} value={URL}
          />
        <button
          className="bg-black text-white h-10 px-3 rounded-3xl font-semibold hover:bg-white hover:text-black hover:font-bold"
          onClick={downloadSong}
          >Download
       </button>
      </div>
    </div>
    // <div className="h-screen w-screen bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-700 via-green-700 to-green-500 flex items-center justify-center">
    //   <div className="flex flex-col text-center justify-center gap-y-4">
    //     <div className="flex items-center justify-center gap-x-2 text-xl font-bold">
    //       <SlSocialSpotify size={50} />
    //       <p>Song Downloader</p>
    //     </div>

    //     <div>
    //       <input type="url" className="bg-black text-white rounded-3xl px-2 " />
    //     </div>
    //     <div className="flex justify-center">
    //       <button className="w-24 bg-yellow-200 rounded-xl text-center justify-center  hover:bg-lime-500 hover:text-amber-900 ">
    //         Download
    //       </button>
    //     </div>
    //   </div>
    // </div>

    // <div className="h-screen w-screen bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-700 via-green-700 to-green-500 flex items-center justify-center flex-col gap-y-3">
    //   <div className="flex flex-col text-center justify-center gap-y-4">
    //     <div className="flex items-center justify-center gap-x-2 text-xl font-bold">
    //       <SlSocialSpotify size={50} />
    //       <p>Song Downloader</p>
    //     </div>

    //     <div className="flex flex-col gap-y-3 text-center justify-center">
    //       <input
    //         type="url"
    //         className="bg-black text-white rounded-3xl px-2 "
    //         onChange={handleURL}
    //       />
    //       <div className="flex justify-center">
    //         <button className="w-24 bg-yellow-200 rounded-xl text-center justify-center  hover:bg-lime-500 hover:text-amber-900 ">
    //           Download
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
