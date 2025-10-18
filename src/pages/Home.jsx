import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import apiService from '../services/api';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const plansData = await apiService.getPlans();
      setPlans(plansData);
    } catch (error) {
      console.error('Error fetching plans:', error);
      // Utiliser les plans par défaut en cas d'erreur
      setPlans(apiService.getDefaultPlans());
    } finally {
      setLoading(false);
    }
  };

  // Plans par défaut (fallback)
  const defaultPlans = [
    {
      name: "FREE",
      title: "Free",
      price: "0",
      description: "Pour découvrir la plateforme",
      features: [
        "10 SMS par jour (100 / mois)",
        "5 OTP par jour (50 / mois)",
        "1 appareil connecté",
        "Accès API + logs basiques",
        "Support communautaire"
      ],
      cta: "Commencer gratuitement",
      popular: false
    },
    {
      name: "STARTER",
      title: "Starter",
      price: "9.9",
      description: "Pour les petites entreprises",
      features: [
        "300 SMS par jour (5 000 / mois)",
        "100 OTP par jour (3 000 / mois)",
        "2 appareils connectés",
        "Webhooks & envoi en masse",
        "Email support réactif",
        "Logs détaillés"
      ],
      cta: "Démarrer maintenant",
      popular: true
    },
    {
      name: "PRO",
      title: "Pro",
      price: "29.9",
      description: "Pour les professionnels",
      features: [
        "2 000 SMS par jour (60 000 / mois)",
        "1 000 OTP par jour (30 000 / mois)",
        "5 appareils connectés",
        "Analytics avancées",
        "Support prioritaire",
        "Webhooks et envoi en masse"
      ],
      cta: "Essayer PRO",
      popular: false
    },
    {
      name: "ENTERPRISE",
      title: "Enterprise",
      price: "Sur devis",
      description: "Pour les grandes entreprises",
      features: [
        "Volume SMS et OTP illimités",
        "Appareils illimités",
        "Support dédié 24/7",
        "Marque blanche",
        "Serveur dédié / cluster",
        "SLA 99.9%"
      ],
      cta: "Nous contacter",
      popular: false
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZimSend",
    "description": "Plateforme SMS Gateway économique. Envoyez des SMS et codes OTP via API avec votre téléphone Android.",
    "url": "https://zimsend.com",
    "logo": "https://zimsend.com/logo.png",
    "sameAs": [
      "https://twitter.com/zimsend",
      "https://github.com/zimsendapi",
      "https://linkedin.com/company/zimsend"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "contact@zimsend.com"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "0",
      "highPrice": "29.9"
    }
  };

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Utilisez votre téléphone",
      description: "Transformez n'importe quel téléphone Android en passerelle SMS. Simple, rapide et économique."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Envoi instantané",
      description: "Vos SMS sont envoyés en moins d'une seconde, partout dans le monde."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "100% Sécurisé",
      description: "Vos données et messages sont protégés avec la meilleure sécurité disponible."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Interface simple",
      description: "Aucune connaissance technique requise. Tout est conçu pour être facile à utiliser."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Fiabilité 99.9%",
      description: "Vos messages sont sauvegardés et réessayés automatiquement en cas de problème."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: "Notifications en temps réel",
      description: "Recevez instantanément la confirmation que vos messages ont bien été livrés."
    }
  ];

  const advantages = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Votre téléphone, votre contrôle",
      description: "Utilisez votre propre téléphone Android et votre forfait",
      details: "Aucun coût supplémentaire, vous gardez le contrôle total"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Codes de vérification (OTP)",
      description: "Envoi sécurisé de codes de vérification pour vos applications",
      details: "Protégez vos utilisateurs avec des codes OTP fiables et instantanés"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Couverture mondiale",
      description: "Envoyez des SMS dans plus de 200 pays sans frais supplémentaires",
      details: "Une seule plateforme pour toutes vos communications internationales"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Configuration zéro",
      description: "Aucune configuration complexe, tout fonctionne immédiatement",
      details: "Interface intuitive pour tous, même sans connaissances techniques"
    }
  ];

  const useCases = [
    {
      title: "SMS Marketing",
      description: "Envoyez des promotions et offres spéciales à vos clients",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      title: "Codes de vérification",
      description: "Sécurisez l'inscription et connexion de vos utilisateurs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Rappels de rendez-vous",
      description: "Réduisez les absences avec des rappels automatiques",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Alertes importantes",
      description: "Notifiez vos utilisateurs des événements critiques",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      )
    },
    {
      title: "Notifications de livraison",
      description: "Informez vos clients de l'état de leurs commandes",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Support client",
      description: "Communiquez rapidement avec vos clients",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  // Transformer les données API en format compatible avec l'affichage
  const formatPlansForDisplay = (apiPlans) => {
    return apiPlans.map(plan => ({
      name: plan.id,
      title: plan.title,
      price: plan.price === null ? "Sur devis" : plan.price.toString(),
      description: plan.description,
      features: plan.features,
      cta: plan.cta,
      popular: plan.id === 'STARTER' // STARTER est populaire par défaut
    }));
  };

  // Utiliser les plans API si disponibles, sinon les plans par défaut
  const displayPlans = plans.length > 0 ? formatPlansForDisplay(plans) : defaultPlans;

  const stats = [
    { value: "99.9%", label: "Disponibilité garantie" },
    { value: "<1s", label: "Délai d'envoi" },
    { value: "24/7", label: "Support client" },
    { value: "200+", label: "Pays couverts" }
  ];

  return (
    <>
      <SEO
        title="SMS Gateway Économique avec Votre Téléphone Android"
        description="ZimSend : La solution SMS Gateway la moins chère. Envoyez des SMS et codes OTP via API avec votre téléphone Android. Plans à partir de 0€. API REST, Webhooks, Fiabilité 99.9%."
        keywords="sms gateway, api sms, otp sms, sms pas cher, sms api france, envoyer sms api, sms gateway economique, code otp, authentification 2fa, sms marketing, api sms rest, sms moins cher"
        canonical="/"
        structuredData={structuredData}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 pt-20">
        {/* Gradient orbs décoratifs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-custom"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-200/30 rounded-full blur-3xl animate-pulse-custom" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse-custom" style={{ animationDelay: '2s' }}></div>
        </div>
        {/* Icônes décoratives en arrière-plan - Plus belles et mieux placées */}
        <div className="absolute inset-0 overflow-hidden opacity-8">
          {/* Icon 1 - Top Left - Shield */}
          <svg className="absolute top-16 left-8 w-20 h-20 text-primary/20 animate-pulse-custom" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          
          {/* Icon 2 - Top Right - Rocket */}
          <svg className="absolute top-32 right-12 w-16 h-16 text-slate-300/30 animate-pulse-custom" style={{ animationDelay: '0.8s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          
          {/* Icon 3 - Middle Left - Smartphone */}
          <svg className="absolute top-1/2 left-16 w-24 h-24 text-primary/15 animate-pulse-custom" style={{ animationDelay: '1.2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          
          {/* Icon 4 - Bottom Right - Lightning */}
          <svg className="absolute bottom-40 right-8 w-18 h-18 text-slate-400/25 animate-pulse-custom" style={{ animationDelay: '1.6s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          
          {/* Icon 5 - Center Right - Check Circle */}
          <svg className="absolute top-1/3 right-1/4 w-14 h-14 text-primary/20 animate-pulse-custom" style={{ animationDelay: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          
          {/* Icon 6 - Bottom Left - Globe */}
          <svg className="absolute bottom-24 left-1/3 w-22 h-22 text-slate-300/20 animate-pulse-custom" style={{ animationDelay: '2.4s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          
          {/* Icon 7 - Top Center - Star */}
          <svg className="absolute top-20 left-1/2 transform -translate-x-1/2 w-12 h-12 text-primary/25 animate-pulse-custom" style={{ animationDelay: '2.8s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            {/* Badge amélioré */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
              <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-700 text-sm font-semibold">Solution SMS Professionnelle</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Utilisez votre téléphone
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                pour envoyer des SMS
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transformez votre smartphone Android en plateforme SMS professionnelle. 
              Toutes les fonctionnalités avec votre propre téléphone et votre forfait.
            </p>

            {/* CTA Buttons améliorés */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <a
                href="https://app.zimsend.com/register"
                className="group relative px-8 py-4 bg-primary text-white rounded-xl text-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 flex items-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Commencer gratuitement</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/documentation"
                className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-xl text-lg font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200/50 hover:-translate-y-1 flex items-center"
              >
                <span>Voir la documentation</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

            {/* Stats améliorées */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200/50">
                    <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              En 4 étapes simples, transformez votre téléphone en plateforme SMS professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Étape 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Créer un compte</h3>
              <p className="text-slate-600">Inscrivez-vous gratuitement sur notre plateforme web</p>
            </div>

            {/* Étape 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Télécharger l'APK</h3>
              <p className="text-slate-600">Installez notre application Android sur votre téléphone</p>
            </div>

            {/* Étape 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Connecter le téléphone</h3>
              <p className="text-slate-600">Ajoutez votre device et connectez-le à votre compte</p>
            </div>

            {/* Étape 4 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Commencer à envoyer</h3>
              <p className="text-slate-600">Utilisez votre forfait SMS et commencez immédiatement</p>
            </div>
          </div>

          {/* Prérequis */}
          <div className="mt-16 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Prérequis simples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
                <span className="text-slate-700 font-medium">Connexion Internet</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-700 font-medium">Forfait SMS</span>
              </div>
            </div>
            <p className="text-slate-600 mt-4 text-lg">
              C'est tout ! Votre téléphone Android devient votre plateforme SMS professionnelle
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Pourquoi choisir ZimSend ?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Une solution moderne qui révolutionne l'envoi de SMS pour votre entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{advantage.title}</h3>
                    <p className="text-slate-600 mb-3">{advantage.description}</p>
                    <p className="text-sm text-slate-500">{advantage.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Avantage principal */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Votre téléphone, votre contrôle</h3>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-slate-600">de contrôle avec votre téléphone</p>
              </div>
              <p className="text-slate-600 text-lg">
                <span className="font-bold text-primary">Utilisez votre forfait</span> et votre téléphone Android pour toutes les fonctionnalités SMS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Fonctionnalités complètes
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour vos communications SMS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-700 group-hover:text-primary transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Cas d'usage
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              ZimSend s'adapte à tous vos besoins de communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-primary mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{useCase.title}</h3>
                <p className="text-slate-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Supprimée */}

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Des plans pour tous les budgets
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Commencez gratuitement, évoluez selon vos besoins
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <span className="ml-3 text-slate-600">Chargement des plans...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'bg-slate-900 text-white border-2 border-slate-900 shadow-2xl'
                    : 'bg-white border-2 border-slate-200 hover:border-slate-300 hover:shadow-xl'
                } ${plan.name === 'ENTERPRISE' ? 'overflow-hidden' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase shadow-lg">
                      Populaire
                    </span>
                  </div>
                )}

                {/* Contenu de la carte avec blur pour ENTERPRISE */}
                <div className={plan.name === 'ENTERPRISE' ? 'blur-[2px]' : ''}>
                  <div className="text-center mb-8">
                    <h3 className={`text-lg font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                      {plan.title}
                    </h3>
                    <div className="mb-2">
                      {plan.price === "Sur devis" ? (
                        <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                          Sur devis
                        </span>
                      ) : (
                        <>
                          <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                            {plan.price}€
                          </span>
                          <span className={`text-lg ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>/mois</span>
                        </>
                      )}
                    </div>
                    <p className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <svg
                          className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-primary' : 'text-primary'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Overlay pour ENTERPRISE */}
                {plan.name === 'ENTERPRISE' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-[1px] z-10">
                    <div className="text-center px-4">
                      <p className="text-2xl font-bold text-slate-900 mb-2">Sur devis</p>
                      <p className="text-sm text-slate-600 mb-6">
                        Tarification personnalisée selon vos besoins
                      </p>
                      <a
                        href="/contact"
                        className="inline-block px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                      >
                        Nous contacter
                      </a>
                    </div>
                  </div>
                )}

                {/* Bouton normal pour les autres plans */}
                {plan.name !== 'ENTERPRISE' && (
                  <a
                    href={plan.name === 'ENTERPRISE' ? '/contact' : 'https://app.zimsend.com/register'}
                    className={`block w-full py-3 px-6 rounded-xl text-center font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30'
                        : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg'
                    }`}
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à économiser sur vos SMS ?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Rejoignez des centaines d'entreprises qui font confiance à ZimSend pour leurs communications SMS
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.zimsend.com/register"
              className="group px-8 py-4 bg-white text-primary rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 flex items-center"
            >
              Essayer gratuitement
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent text-white rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white hover:-translate-y-1"
            >
              Demander une démo
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
