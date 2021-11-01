import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import video from '../public/video/classic.mp4';

const containerFullWidth = css`
  max-width: 1920px;
  background-color: #191919;
  position: relative;
`;

const container = css`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
`;

const heroWrapper = css`
  display: flex;
  justify-content: center;
  align-self: center;
  height: calc(100vh - 128px);
  video {
    object-fit: cover;
    width: 100%;
  }
`;

const heroHeader = css`
  font-size: 36px;
  display: flex;
  text-align: center;
  line-height: 1.5;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Hero() {
  return (
    <div css={containerFullWidth}>
      <div css={heroWrapper}>
        <video
          autoplay="autoplay"
          muted
          src={require('/public/video/classic.mp4')}
        />
      </div>
      <div css={heroHeader}>
        <h1>Text text text</h1>
      </div>
    </div>
  );
}

export default Hero;
