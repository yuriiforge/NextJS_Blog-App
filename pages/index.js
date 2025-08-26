import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props) => {
  const { posts } = props;

  return (
    <div>
      <Head>
        <title>Yurii's blog</title>
        <meta name="description" content="I post about programming" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
