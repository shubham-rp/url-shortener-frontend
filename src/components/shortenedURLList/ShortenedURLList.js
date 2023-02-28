import React from "react";
import ShortenedURL from "../shortenedURL";

function ShortenedURLList({ urlList = [] }) {
  return (
    <div className="url-list">
      {urlList.map((urlItem) => {
        return <ShortenedURL {...urlItem} />;
      })}
    </div>
  );
}

export default ShortenedURLList;
