import { GetServerSideProps, NextPage } from "next";

type TweetPageProps = {
  name: string
}

const TweetPage: NextPage<TweetPageProps> = (props: TweetPageProps) => {
  // console.log(props)
  return (
    <div>
      <h1>Meu Tweet</h1>
      <p>Vales: {props.name}</p>
    </div>
  );
};

export default TweetPage

export const getServerSideProps: GetServerSideProps = async (context) => {

  console.log('Executa do lado do servidor...')

  // acessar db, etc

  return {
    props: {
      name: 'Fulk Cycle'
    }
  }
}