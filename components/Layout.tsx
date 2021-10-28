import { ReactNode } from 'react';

type Props = {
  // Only if you're using props.children
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
}
