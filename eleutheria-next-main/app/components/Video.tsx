import React from "react";

export default function Video() {
  return (
    <div className="py-16 px-4 md:min-h-80 w-full">
      <h2 className="text-3xl font-bold text-center mb-8">Música Tema</h2>
      <div className="aspect-w-16 aspect-h-9 max-w-4xl h-auto mx-auto">
        <iframe
          src="https://www.youtube.com/embed/M4-_U2wbLXY"
          className="w-full min-h-[380px] border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
