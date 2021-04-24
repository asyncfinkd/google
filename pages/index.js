import Head from "next/head";
import Avatar from "../components/Avatar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Google</title>
      </Head>

      {/* Header */}

      <header className="flex w-full p-3 justify-between text-sm color-gray-700">
        {/* Left Position */}
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

      <form>
      </form>
    </>
  );
}
