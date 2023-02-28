import React from "react";

function ShortenedURL({
  title,
  fullShortUrl,
  shortUrl,
  originalUrl,
  creationDate,
  creationTime,
}) {
  return (
    <div className="url-item">
      <div className="url-details">
        <div className="short-url">
          <a
            className="short-url-anchor"
            target="_blank"
            rel="noreferrer"
            href={fullShortUrl}
          >
            {shortUrl}
          </a>
        </div>
        <div className="url-description">
          <span className="url-details-title">{title}</span>
          {"    "}
          <div className="original-url">
            Original Url
            <span className="hidden-original-url">{originalUrl}</span>
          </div>
        </div>
      </div>

      <div className="url-time-date">
        Created on {creationDate} at {creationTime}
      </div>
    </div>
  );
}

export default ShortenedURL;
