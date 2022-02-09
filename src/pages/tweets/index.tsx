import { NextPage } from "next";

const TweetList: NextPage = () => {
  return (
    <div>
      <h1>Lista de Tweets</h1>
      <button onClick={() => alert('test')}>Mostrar Alerta</button>
    </div>
  );
};

export default TweetList