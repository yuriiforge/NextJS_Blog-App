import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}.png`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => (
            <div
              style={{
                width: '600px',
                height: '300px',
                margin: '1rem auto',
                position: 'relative',
              }}
            >
              <img
                {...props}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
