import React from "react";

import { IoIosAlert, IoIosCheckmarkCircle } from "react-icons/io";

function ResponseHandler({
  onResponseWindowClick,
  responseData,
  isResponseOk,
}) {
  let responseMessage = "";
  let newUrl = "";

  if (isResponseOk) {
    responseMessage = "Here's your shortened URL:";
    newUrl = "https://" + responseData;
  } else {
    switch (responseData) {
      case 1:
        responseMessage = "No URL was specified(Empty URL) ";
        break;
      case 2:
        responseMessage = "Invalid URL";
        break;
      case 3:
        responseMessage =
          "You have sent too many requests. Try again after some time";
        break;
      case 4:
        responseMessage = "Sorry, your IP Address has been blocked";
        break;
      case 5:
        responseMessage = "Shortcode is already taken. Try again";
        break;
      default:
      case 6:
      case 7:
      case 8:
      case 9:
        responseMessage = "Something went wrong. Try Again";
        break;
      case 10:
        responseMessage = "You are trying to shorten a disallowed link";
    }
  }
  return (
    <div className="response-handler">
      <div className="response-message">
        {isResponseOk ? (
          <div>
            <div className="success-message">
              <div className="checkmark-icon">
                <IoIosCheckmarkCircle />
              </div>
              {responseMessage}
            </div>

            <div className="short-url">
              <a
                className="short-url-anchor"
                target="_blank"
                rel="noreferrer"
                href={newUrl}
              >
                {responseData}
              </a>
            </div>
          </div>
        ) : (
          <div className="alert-message">
            <div className="alert-icon">
              <IoIosAlert />
            </div>{" "}
            {responseMessage}
          </div>
        )}{" "}
      </div>
      <div className="response-button-div">
        <button
          className={isResponseOk ? "create-new-link-button" : "retry-button"}
          onClick={onResponseWindowClick}
        >
          {isResponseOk ? "Create Another Link" : "Retry / Create a New Link"}
        </button>
      </div>
    </div>
  );
}

export default ResponseHandler;
