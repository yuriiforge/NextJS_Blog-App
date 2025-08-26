import Image from 'next/image';
import Link from 'next/link';

import classes from './post-item.module.css';

const PostItem = (props) => {
  const { title, image, expert, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}.png`;
  console.log(imagePath);
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link legacyBehavior href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{expert}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
