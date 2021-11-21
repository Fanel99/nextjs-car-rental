import { css } from '@emotion/react';
import { ReactNode } from 'react';
import Header from './Header';

const main = css`
  overflow: hidden;
  @media (min-width: 1024px) {
    overflow: visible;
  } ;
`;

type Props = {
  username?: string;
  // Only if you're using props.children
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div>
      <div>
        <Header username={props.username} />
        <main css={main}>{props.children}</main>
      </div>
    </div>
  );
}
