import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const heroWrapper = css`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 100vh;
  width: 100%;
  background-image: url(/pictures/bg3.jpeg);
  background-size: cover;
  margin-top: -64px;
`;

const heroHeader = css`
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  line-height: 1.5;
`;

const line1 = ' Welcome to Unique Rental';
const line2 = ' Are you ready  to have some fun?';

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
    <div css={heroWrapper}>
      <div css={heroHeader}>
        <motion.h1 variants={sentence} initial="hidden" animate="visible">
          {line1.split('').map((char) => {
            return (
              <motion.span key={char + 'animation' + count++} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
          {line2.split('').map((char) => {
            return (
              <motion.span key={char + 'animation' + count++} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
      </div>
    </div>
  );
}

export default Hero;
