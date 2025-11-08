import React, { useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';

const Cieber: React.FC = () => {
  useEffect(() => {
    document.title = 'ciber.net';
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://cieber-free.vercel.app/';
    }, 1500); // 1.5-second delay before redirecting for a smoother UX

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20 flex flex-col justify-center items-center" style={{minHeight: 'calc(100vh - 16rem)'}}>
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Redirecting to Cieber.net...</h1>
            <p className="text-lg text-gray-400">
            You are now being redirected to our partner application.
            </p>
            <div className="mt-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
            </div>
            <p className="text-md text-gray-500 mt-8">
            If you are not redirected automatically, please{' '}
            <a href="https://cieber-free.vercel.app/" className="text-brand-primary hover:underline">
                click here
            </a>
            .
            </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Cieber;
