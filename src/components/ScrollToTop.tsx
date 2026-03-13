import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
