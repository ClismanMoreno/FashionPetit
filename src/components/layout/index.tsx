'use client';
import { useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrollX, setScrollX] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setScrollX(document.documentElement.clientWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {pathname === '/' ? (
        <main>{children}</main>
      ) : (
        <>
          {scrollX < 768 ? <Navbar /> : <Navbar />}
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
