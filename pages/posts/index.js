import AllPosts from '../../components/posts/all-posts';

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

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
