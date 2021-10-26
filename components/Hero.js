import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import pic from '../public/pictures/benz.jpg';
import pic1 from '../public/pictures/giulia.jpeg';
import pic2 from '../public/pictures/oldcar.jpg';

const container = css`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
`;

const heroWrapper = css`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 100vh;
  width: 100%;
  background-image: url(/pictures/oldcar.jpg);
  background-size: cover;
  margin-top: -64px;
`;

const heroHeader = css`
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  line-height: 1.5;
  color: #fff;
`;

const line1 = ' Welcome to ';
const line2 = 'oldie but goodie ';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.9,
      staggerChildren: 0.1,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

let count = 0;

function Hero() {
  return (
    <main css={container}>
      <div css={heroWrapper}>
        <div css={heroHeader}>
          <motion.h1 variants={sentence} initial="hidden" animate="visible">
            {line1.split('').map((char) => {
              return (
                <motion.span
                  key={char + 'animation' + count++}
                  variants={letter}
                >
                  {char}
                </motion.span>
              );
            })}
            <br />
            {line2.split('').map((char) => {
              return (
                <motion.span
                  key={char + 'animation' + count++}
                  variants={letter}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>
        </div>
      </div>
    </main>
  );
}

export default Hero;
