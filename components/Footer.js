import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="grid w-full divide-y-1 divide-gray-300 bg-gray-100 text-sm color-gray-500">
        <div className="plr-8 ptb-3">
          <p>Georgia</p>
        </div>
        <div className="grid grid-columns-1">
          <div className="flex justify-center items-center md:col-span-2 lg:col-span-1">
            Carbon neutral since 2007
          </div>
          <div
            className="flex justify-center space-rl-8 md:justify-self-start"
            style={{ whiteSpace: "nowrap" }}
          >
            <p>Advertising</p>
            <p>Business</p>
            <p>How Search works</p>
          </div>
          <div className="flex justify-center space-rl-8 md:ml-auto">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
          </div>
        </div>
      </footer>
    </>
  );
}
