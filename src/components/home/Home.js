import React, { useState, useEffect } from "react";
import axios from "axios";

import InputForm from "../input-form";
import ShortenedURLList from "../shortenedURLList";
import ResponseHandler from "../response-handler";
import Loading from "../loading";

// Remaining
// Response Window
// handle different types of response/ errors

function Home() {
  const [urlList, setUrlList] = useState(() => {
    const saved = localStorage.getItem("urlList");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isInputWindow, setIsInputWindow] = useState(true);
  const [isResponseOk, setIsResponseOk] = useState();
  const [responseData, setResponseData] = useState();

  useEffect(() => {
    localStorage.setItem("urlList", JSON.stringify(urlList));
  }, [urlList]);

  const handleURLRequest = (url, title) => {
    setIsLoading(true);
    setIsInputWindow(false);

    axios
      .get("https://api.shrtco.de/v2/shorten?url=" + url)
      .then((response) => {
        let date = new Date();
        let fullShortUrl = response.data.result.full_short_link; // with https://
        let shortUrl = response.data.result.short_link;

        axios
          .post("https://url-shortener-backend-tz69.onrender.com/create-url", {
            originalUrl: url,
            title: title,
            shortUrl: shortUrl,
          })
          .then(function (response) {
            console.log(response);
            alert("Url Shortner link has been sent to DB ");
          })
          .catch(function (error) {
            console.log(error);
          });

        // const body = {
        //   url,
        //   title,
        //   shortUrl,
        // };
        // console.log("body => ", body);
        // try {
        //   // const response = await fetch("http://localhost:8080/create-user", {
        //   const response = fetch("http://localhost:8000/create-url", {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(body),
        //   });

        //   response.json().then((res) => {
        //     console.log(res.message, res.data);
        //     alert(res.message);
        //   });
        // } catch (error) {
        //   console.log(error);
        // }

        setIsResponseOk(response.data.ok);
        setResponseData(shortUrl);

        setIsLoading(false);

        setUrlList([
          {
            key: urlList.length + 1,
            title: title,
            fullShortUrl: fullShortUrl,
            shortUrl: shortUrl,
            originalUrl: url,
            creationDate: date.toLocaleDateString(),
            creationTime: date.toLocaleTimeString("en-us", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }),
          },
          ...urlList,
        ]);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsResponseOk(error.response.data.ok);
        setResponseData(error.response.data.error_code);
      });
  };

  const handleResponseWindowClick = () => {
    setIsInputWindow(true);
  };

  return (
    <div className="home">
      {isInputWindow ? (
        <InputForm onURLRequest={handleURLRequest} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <ResponseHandler
          onResponseWindowClick={handleResponseWindowClick}
          responseData={responseData}
          isResponseOk={isResponseOk}
        />
      )}

      <ShortenedURLList urlList={urlList} />
    </div>
  );
}

export default Home;
