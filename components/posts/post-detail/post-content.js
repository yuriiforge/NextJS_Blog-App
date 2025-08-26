import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
  title: 'getting-started-with-nextjs',
  image: 'getting-started-nextjs',
  date: '2025-08-05',
  slug: 'getting-started-with-nextjs2',
  content: '# This is a first post',
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}.png`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
