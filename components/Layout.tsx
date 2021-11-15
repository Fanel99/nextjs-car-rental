import { Elements } from '@stripe/react-stripe-js';
import { ReactNode } from 'react';
import Header from './Header';

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
        <main>{props.children}</main>
      </div>
    </div>
  );
}
