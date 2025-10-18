import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/pricing', label: 'Tarifs' },
    { path: 'https://docs.zimsend.com', label: 'Documentation', external: true },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-slate-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="ZimSend" 
              className="h-5 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative text-sm font-medium transition-all duration-200 py-2 ${
                    scrolled
                      ? 'text-slate-700 hover:text-primary'
                      : 'text-slate-700 hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm font-medium transition-all duration-200 py-2 ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : scrolled
                      ? 'text-slate-700 hover:text-primary'
                      : 'text-slate-700 hover:text-primary'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://app.zimsend.com/login"
              className={`hidden sm:block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                scrolled
                  ? 'text-slate-700 hover:text-primary'
                  : 'text-slate-700 hover:text-primary'
              }`}
            >
              Se connecter
            </a>
            <a
              href="https://app.zimsend.com/register"
              className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Commencer gratuitement
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;