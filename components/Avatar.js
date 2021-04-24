import React from "react";

export default function Avatar({ url }) {
  return (
    <>
      <img
        loading="lazy"
        className="h-7 rounded-full cursor-pointer duration-150 transition hover:scale-def-110"
        src={url}
        alt="Profile picture"
      />
    </>
  );
}
