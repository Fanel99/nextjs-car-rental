import { css } from '@emotion/react';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  textarea: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    padding: 10,
    margin: '20px 0',
    minHeight: 100,
    width: 300,
  },
  button: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

const button = css`
  border: '1px solid #a9a9a9';
  max-width: 200px;
  padding: 10;
  cursor: pointer;
`;

function CommentsRatings() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9',
  };

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  return (
    <div css={styles.container}>
      <div style={styles.stars}>
        {stars.map((_, star) => {
          return (
            <FaStar
              key={star.id}
              size={20}
              onClick={() => handleClick(star + 1)}
              onMouseOver={() => handleMouseOver(star + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > star
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: 'pointer',
              }}
            />
          );
        })}
      </div>
      <textarea placeholder="What's your experience?" style={styles.textarea} />

      <button css={button}>Add Comment</button>
    </div>
  );
}

export default CommentsRatings;
