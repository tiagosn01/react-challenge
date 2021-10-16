import { ReactNode } from 'react';
import Header from '../Header';
import './styles.css';

interface DeafultLayoutProps {
  children: ReactNode
}

function DefaultLayout({ children }: DeafultLayoutProps) {
  return (
    <>
      <Header />
      <div className="container">
        {children}
      </div>
    </>
  );
}

export default DefaultLayout;
