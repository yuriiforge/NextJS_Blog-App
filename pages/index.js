import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
  {
    title: 'getting-started-with-nextjs',
    image: 'getting-started-nextjs',
    expert: 'NextJs is a React framework for production',
    date: '2025-08-05',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'getting-started-with-nextjs',
    image: 'getting-started-nextjs',
    expert: 'NextJs is a React framework for production',
    date: '2025-08-05',
    slug: 'getting-started-with-nextjs2',
  },
  {
    title: 'getting-started-with-nextjs',
    image: 'getting-started-nextjs',
    expert: 'NextJs is a React framework for production',
    date: '2025-08-05',
    slug: 'getting-started-with-nextjs3',
  },
  {
    title: 'getting-started-with-nextjs',
    image: 'getting-started-nextjs',
    expert: 'NextJs is a React framework for production',
    date: '2025-08-05',
    slug: 'getting-started-with-nextjs4',
  },
];

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
};

export default HomePage;
