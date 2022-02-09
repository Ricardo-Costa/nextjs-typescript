import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { ReactComponentElement } from "react";

type TweetPageProps = {
  name: string
  posts: Post[]
}

type Post = {
  title: string,
  body: string
}

const ShowPosts = (props: { posts: Post[] }) => {
  return (
    <>
    <ul>
      {
        props.posts.map((p, key) => <li key={key}>{p.body}</li>)
      }
    </ul>
    </>
  )
}

const TweetPage: NextPage<TweetPageProps> = (props: TweetPageProps) => {
  // console.log(props)
  const { posts } = props
  return (
    <div>
      <h1>Meu Tweet</h1>
      <p>Vales: {props.name}</p>
      <ShowPosts posts={posts}></ShowPosts>
    </div>
  );
};

export default TweetPage

export const getServerSideProps: GetServerSideProps = async (context) => {

  console.log('Executa do lado do servidor...')

  // acessar db, etc

  // const { data: { posts }} = await axios.get('http://localhost:3000/api/posts/123')
  const { data: posts } = await axios.get('http://localhost:3000/api/posts/123')

  return {
    props: {
      name: 'Fulk Cycle',
      posts
    }
  }
}