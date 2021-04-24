import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Google</title>
      </Head>

      {/* Header */}

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left Position */}
        <div className="flex space-rl-4 items-center">
          <p>About</p>
          <p>Store</p>
        </div>
        <div className="flex space-rl-4 items-center">
          <p>Gmail</p>
          <p>Images</p>
        </div>
      </header>
    </>
  );
}
