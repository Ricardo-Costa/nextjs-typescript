import { GetServerSideProps, NextPage } from "next";

type TweetPageProps = {
  name: string
}

const TweetPage: NextPage<TweetPageProps> = (props: TweetPageProps) => {
  console.log(props)
  return (
    <div>
      <h1>Meu Tweet</h1>
      <p>Vales: {props.name}</p>
    </div>
  );
};

export default TweetPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      name: 'Fulk Cycle'
    }
  }
}