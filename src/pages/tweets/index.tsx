import { NextPage } from "next";

const TweetList: NextPage = (props) => {
  return (
    <div>
      <h1>Lista de Tweets</h1>
      <p>Vales: {props.key}</p>
    </div>
  );
};

export default TweetList

export const getServerSideProps = async (context) => {
  return {
    props: {
      key: 'value'
    }
  }
}