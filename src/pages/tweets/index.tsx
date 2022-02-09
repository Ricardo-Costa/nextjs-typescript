import { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios"

type Tweets = {
  text: string
}

const TweetList: NextPage = () => {
  const [tweets, setTweets] = useState<Tweets[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/tweets')
      .then( res => {
        setTweets(res.data)
      })
  }, [])

  return (
    <div>
      <h1>Lista de Tweets</h1>
      <ul>
        {tweets.map((t, key) => <li key={key}>{t.text}</li>)}
      </ul>
      <button onClick={() => alert('test')}>Mostrar Alerta</button>
    </div>
  );
};

export default TweetList