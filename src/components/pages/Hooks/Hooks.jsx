import React, { useEffect, useState } from "react";
import "./Hooks.css";

export const Hooks = () => {
  <h1>Generador de tweets</h1>

  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const [limit, setLimit] = useState("");

  useEffect(() => {
    if (tweet.length == 255) {
      setLimit("");
    } else {
      setLimit("");
    }
  }, [tweet]);

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const handlePublish = () => {
    if (tweet.length > 0) {
      setTweets([...tweets, tweet]);
      setTweet("");
    }
  };

  const handleArchive = () => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
    setTweets([]);
  };

  const handleShowArchive = () => {
    const archivedTweets = JSON.parse(localStorage.getItem("tweets"));
    if (archivedTweets) {
      setTweets(archivedTweets);
    }
  };

  return (
  
      <div className="container1">
        <h1 className="generator">Generador de Tweets</h1>

        <div className="container">
        <h1 className="generator1">Publica tu tweet</h1>
        <textarea
          className="txt-tweet"
          placeholder="Escribe un tweet (max 255 caracteres)"
          maxLength="255"
          value={tweet}
          onChange={handleChange}
        />
        
        <div className="limit">
          <p className={limit}>{255 - tweet.length}</p>
        </div>

        <div className="">
          <button
            className="button1"
            onClick={handlePublish}>
            Publicar
          </button>

          <button
            className="button2"
            onClick={handleArchive}>
            Archivar
          </button>

          <button
            className="button3"
            onClick={handleShowArchive}>
            Mostrar Archivados
          </button>

          <h1 className="generator1">Aqui veras tu tweet actual y los archivados</h1>
        </div>

        <ul className="ul,li">
          {tweets.map((tweet, i) => (
            <li key={i} className="">
              {tweet}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
