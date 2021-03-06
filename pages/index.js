import Head from "next/head";
import Avatar from "../components/Avatar";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Head>
          <title>Google</title>
        </Head>

        <header className="flex w-full p-3 justify-between text-sm color-gray-700">
          <div className="flex space-rl-4 items-center">
            <p className="hover:underline cursor-pointer">About</p>
            <p className="hover:underline cursor-pointer">Store</p>
          </div>
          <div className="flex space-rl-4 items-center">
            <p className="hover:underline cursor-pointer">Gmail</p>
            <p className="hover:underline cursor-pointer">Images</p>
            <svg
              class="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
              style={{ fill: "#374151" }}
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
            <Avatar
              url={"https://avatars.githubusercontent.com/u/80542304?v=4"}
            />
          </div>
        </header>
        <form className="flex flex-col items-center w-4-5 mt-44 flex-grow">
          <Image
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            width="300"
            height="100"
          />
          <div className="flex w-full mt-5 hover:shadow-lg max-w-md focus-within:shadow-lg rounded-full border border-gray-200 plr-5 ptb-3 items-center sm:max-w-xl lg:max-w-2xl">
            <svg
              focusable="false"
              className="h-5 mr-3"
              style={{ fill: "#6b7280" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <input type="text" className="flex-grow focus:outline-none" />
            <svg
              class="h-5"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                fill="#4285f4"
              ></path>
              <path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
              <path
                d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                fill="#f4b400"
              ></path>
              <path
                d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                fill="#ea4335"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col w-1-2 space-tb-2 justify-center mt-8 sm:space-tb-0 sm:space-rl-4 sm:flex-row">
            <button
              style={{ background: "#f8f9fa" }}
              className="p-3 hover:google-btn rounded-md text-sm color-gray-800 focus:outline-none"
            >
              Google Search
            </button>
            <button
              className="p-3 hover:google-btn rounded-md text-sm color-gray-800 focus:outline-none"
              style={{ background: "#f8f9fa" }}
            >
              I'm Feeling Lucky
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
}
