import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/photo-placeholder.png"
          alt="An image showing Yurii"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Yurii</h1>
      <p>
        I blog about web dev - especially frontend frameworks like Angular or
        React
      </p>
    </section>
  );
};

export default Hero;
