import axios from "axios";
import { GetStaticProps, NextPage } from "next";

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

const StaticPage: NextPage<TweetPageProps> = (props: TweetPageProps) => {
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

export default StaticPage

export const getStaticProps: GetStaticProps = async (context) => {

  console.log('Executa do lado do servidor...')

  // acessar db, etc

  // const { data: { posts }} = await axios.get('http://localhost:3000/api/posts/123')
  // const { data: posts } = await axios.get('http://localhost:3000/api/posts/123')
  const { data: posts } = await axios.get('https://tempapi.proj.me/api/L9nVDmoUc')

  console.log('------------------------------------------')
  console.log(posts)
  console.log('------------------------------------------')

  return {
    props: {
      name: 'Fulk Cycle',
      posts
    }
  }
}