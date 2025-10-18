import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 text-slate-700 relative overflow-hidden border-t border-slate-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.png" alt="ZimSend" className="h-5 w-auto" />
            </Link>
            <p className="text-slate-600 leading-relaxed mb-6">
              Plateforme SMS Gateway professionnelle. Fiabilité 99.9%, sécurité
              maximale, API moderne.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group shadow-sm"
              >
                <svg
                  className="w-5 h-5 text-slate-600 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a> */}
              <a
                href="https://www.x.com/zimsend"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group shadow-sm"
              >
                <svg
                  className="w-5 h-5 text-slate-600 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://github.com/zimsendapi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group shadow-sm"
              >
                <svg
                  className="w-5 h-5 text-slate-600 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/zimsend"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group shadow-sm"
              >
                <svg
                  className="w-5 h-5 text-slate-600 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-slate-900 font-bold mb-6">Produit</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/pricing"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Tarifs
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="https://docs.zimsend.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Documentation
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://app.zimsend.com"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Dashboard
                  </span>
                </a>
              </li>
              {/* <li>
                <a
                  href="https://docs.zimsend.com/api-reference/api-overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    API Reference
                  </span>
                </a>
              </li> */}
              <li>
                <a
                  href="https://status.zimsend.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Status
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-slate-900 font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/help-center"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Centre d'aide
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Communauté
                  </span>
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Guides
                  </span>
                </a>
              </li> */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-slate-900 font-bold mb-6">Légal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Conditions générales
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Confidentialité
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Mentions légales
                  </span>
                </Link>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Cookies
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Sécurité
                  </span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 text-sm mb-4 md:mb-0">
              © {currentYear} ZimSend. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-slate-600 hover:text-primary text-sm transition-colors duration-200"
              >
                Français
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-primary text-sm transition-colors duration-200"
              >
                English
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
