import Head from "next/head";
import Avatar from "../components/Avatar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Google</title>
      </Head>

      {/* Header */}

      <header className="flex w-full p-5 justify-between text-sm color-gray-700">
        {/* Left Position */}
        <div className="flex space-rl-4 items-center">
          <p className="hover:underline cursor-pointer">About</p>
          <p className="hover:underline cursor-pointer">Store</p>
        </div>
        <div className="flex space-rl-4 items-center">
          <p className="hover:underline cursor-pointer">Gmail</p>
          <p className="hover:underline cursor-pointer">Images</p>
          <Avatar
            url={"https://avatars.githubusercontent.com/u/80542304?v=4"}
          />
        </div>
      </header>
    </>
  );
}
