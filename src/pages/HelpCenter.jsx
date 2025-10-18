import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    {
      id: 'all',
      name: 'Tout',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 'getting-started',
      name: 'Démarrage',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'api',
      name: 'API & Intégration',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 'device',
      name: 'Configuration Device',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'billing',
      name: 'Facturation',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: 'troubleshooting',
      name: 'Dépannage',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ];

  const quickGuides = [
    {
      title: 'Démarrage rapide',
      description: 'Configurez votre premier device et envoyez votre premier SMS en 5 minutes',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      category: 'getting-started',
      link: 'https://docs.zimsend.com/guides/quickstart'
    },
    {
      title: 'Créer votre compte',
      description: "Inscrivez-vous et découvrez l'interface ZimSend",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      category: 'getting-started',
      link: 'https://app.zimsend.com/register'
    },
    {
      title: 'Connecter un device Android',
      description: 'Téléchargez l\'APK et configurez votre téléphone',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      category: 'device',
      link: 'https://docs.zimsend.com/guides/device-setup'
    },
    {
      title: 'Utiliser l\'API',
      description: 'Intégrez ZimSend dans votre application en quelques lignes',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      category: 'api',
      link: 'https://docs.zimsend.com/guides/authentication'
    },
    {
      title: 'Envoyer des SMS',
      description: 'Envoyez vos premiers messages via l\'API REST',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      category: 'api',
      link: 'https://docs.zimsend.com/guides/sending-sms'
    },
    {
      title: 'Configurer les webhooks',
      description: 'Recevez des notifications en temps réel sur vos événements',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      category: 'api',
      link: 'https://docs.zimsend.com/webhooks/overview'
    },
    {
      title: 'Codes OTP',
      description: 'Implémentez l\'authentification à deux facteurs',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      category: 'api',
      link: 'https://docs.zimsend.com/guides/otp'
    },
    {
      title: 'Gérer votre facturation',
      description: 'Consultez vos plans, factures et moyens de paiement',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      category: 'billing',
      link: '/pricing'
    }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'Qu\'est-ce que ZimSend ?',
      answer: 'ZimSend est une plateforme SMS Gateway qui vous permet d\'utiliser votre propre téléphone Android pour envoyer des SMS via une API. Contrairement aux services traditionnels, vous utilisez votre propre forfait SMS, ce qui vous permet de réduire vos coûts tout en gardant le contrôle total.'
    },
    {
      category: 'getting-started',
      question: 'Comment commencer avec ZimSend ?',
      answer: 'Pour commencer : 1) Créez un compte gratuit sur app.zimsend.com, 2) Téléchargez l\'application Android (APK) depuis votre dashboard, 3) Installez l\'APK sur votre téléphone Android, 4) Connectez votre device avec les identifiants fournis, 5) Générez une clé API et commencez à envoyer des SMS !'
    },
    {
      category: 'getting-started',
      question: 'Ai-je besoin de connaissances techniques ?',
      answer: 'Non ! L\'interface est conçue pour être simple et intuitive. Pour l\'utilisation basique (envoi de SMS via le dashboard), aucune connaissance technique n\'est requise. Si vous souhaitez intégrer l\'API dans votre application, des connaissances en développement sont nécessaires, mais nous fournissons des exemples de code et des SDKs pour faciliter l\'intégration.'
    },
    {
      category: 'device',
      question: 'Quels téléphones sont compatibles ?',
      answer: 'Tout téléphone Android avec la version 6.0 (Marshmallow) ou supérieure est compatible. Nous recommandons d\'utiliser un téléphone dédié pour ZimSend, avec une connexion Internet stable (WiFi ou données mobiles) et un forfait SMS actif.'
    },
    {
      category: 'device',
      question: 'Puis-je connecter plusieurs téléphones ?',
      answer: 'Oui ! Le nombre de téléphones que vous pouvez connecter dépend de votre plan : 1 device pour le plan FREE, 2 pour STARTER, 5 pour PRO et illimité pour ENTERPRISE. Cela vous permet de répartir la charge et d\'améliorer la fiabilité.'
    },
    {
      category: 'device',
      question: 'Mon téléphone doit-il rester allumé en permanence ?',
      answer: 'Oui, votre téléphone doit rester allumé et connecté à Internet pour pouvoir envoyer des SMS. Nous recommandons de le brancher sur secteur et de désactiver la mise en veille automatique. L\'application ZimSend est optimisée pour minimiser la consommation de batterie.'
    },
    {
      category: 'api',
      question: 'Comment obtenir ma clé API ?',
      answer: 'Connectez-vous à votre dashboard sur app.zimsend.com, allez dans la section "API Keys", puis cliquez sur "Générer une nouvelle clé". Conservez cette clé en lieu sûr, elle est nécessaire pour toutes vos requêtes API. Pour des raisons de sécurité, la clé n\'est affichée qu\'une seule fois.'
    },
    {
      category: 'api',
      question: 'Quels langages de programmation sont supportés ?',
      answer: 'ZimSend fournit une API REST standard qui peut être utilisée avec n\'importe quel langage. Nous proposons des SDKs officiels pour Node.js, Python et PHP. Des exemples de code sont disponibles dans notre documentation pour d\'autres langages comme Ruby, Go, Java, etc.'
    },
    {
      category: 'api',
      question: 'Comment suivre l\'état de mes SMS ?',
      answer: 'Vous pouvez suivre vos SMS de deux façons : 1) Via le dashboard en consultant les logs détaillés, 2) En utilisant les webhooks pour recevoir des notifications en temps réel (envoyé, délivré, échoué). Chaque SMS possède un ID unique pour le suivi.'
    },
    {
      category: 'api',
      question: 'Qu\'est-ce qu\'un webhook et comment le configurer ?',
      answer: 'Un webhook est une URL sur votre serveur que ZimSend appellera automatiquement lorsqu\'un événement se produit (SMS envoyé, délivré, échoué, etc.). Pour le configurer : allez dans Paramètres > Webhooks, ajoutez votre URL, sélectionnez les événements et validez. Consultez notre documentation pour plus de détails.'
    },
    {
      category: 'billing',
      question: 'Quel plan choisir ?',
      answer: 'Le plan FREE (gratuit) est parfait pour tester la plateforme avec 100 SMS/mois. Le plan STARTER (9.9€/mois) convient aux petites entreprises avec 5000 SMS/mois. Le plan PRO (29.9€/mois) est pour les professionnels nécessitant 60000 SMS/mois. Pour des volumes plus importants, contactez-nous pour un plan ENTERPRISE personnalisé.'
    },
    {
      category: 'billing',
      question: 'Comment fonctionne la facturation ?',
      answer: 'La facturation est mensuelle et basée sur votre plan. Tous les plans incluent un quota de SMS par mois. Si vous dépassez votre quota, votre compte sera limité jusqu\'au mois suivant (ou vous pouvez upgrader votre plan). Aucun frais caché, les prix sont fixes.'
    },
    {
      category: 'billing',
      question: 'Puis-je changer de plan à tout moment ?',
      answer: 'Oui ! Vous pouvez upgrader ou downgrader votre plan à tout moment depuis votre dashboard. En cas d\'upgrade, la différence est calculée au prorata. En cas de downgrade, le changement prend effet au prochain cycle de facturation.'
    },
    {
      category: 'billing',
      question: 'Y a-t-il des frais supplémentaires ?',
      answer: 'Non, il n\'y a aucun frais caché. Vous payez uniquement votre abonnement mensuel. Cependant, n\'oubliez pas que vous utilisez votre propre forfait SMS, donc vérifiez avec votre opérateur mobile les coûts des SMS selon votre forfait (souvent illimités dans les forfaits modernes).'
    },
    {
      category: 'troubleshooting',
      question: 'Mes SMS ne partent pas, que faire ?',
      answer: 'Vérifiez ces points : 1) Votre device Android est-il connecté et en ligne ? 2) Votre téléphone a-t-il du réseau mobile ? 3) Votre forfait SMS est-il actif ? 4) Avez-vous atteint votre quota mensuel ? 5) Le numéro destinataire est-il au bon format international (+33...) ? Consultez les logs dans votre dashboard pour plus de détails.'
    },
    {
      category: 'troubleshooting',
      question: 'Mon device se déconnecte régulièrement',
      answer: 'Cela peut être dû à : 1) Une connexion Internet instable - utilisez le WiFi si possible, 2) Le téléphone se met en veille - désactivez l\'économie d\'énergie pour l\'app ZimSend, 3) L\'application est fermée par Android - ajoutez ZimSend aux applications protégées. Consultez notre guide de configuration avancée pour les détails par constructeur.'
    },
    {
      category: 'troubleshooting',
      question: 'Comment déboguer mon intégration API ?',
      answer: 'Utilisez les logs détaillés dans votre dashboard pour voir toutes vos requêtes API. Vérifiez que : 1) Vos headers d\'authentification sont corrects (X-API-Key, X-Client-ID, X-Device-ID), 2) Le format JSON de votre requête est valide, 3) Le numéro destinataire est au format international. Consultez notre documentation API Reference pour les codes d\'erreur.'
    },
    {
      category: 'troubleshooting',
      question: 'Que signifient les codes d\'erreur ?',
      answer: 'Les principaux codes : 401 = Authentification invalide, 402 = Quota dépassé, 404 = Device non trouvé ou hors ligne, 422 = Format de données invalide, 500 = Erreur serveur. Consultez la page "Codes d\'erreur" de notre documentation pour la liste complète et les solutions.'
    }
  ];

  const supportChannels = [
    {
      title: 'Documentation',
      description: 'Guides complets, API Reference et tutoriels',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      link: 'https://docs.zimsend.com',
      linkText: 'Consulter la documentation'
    },
    {
      title: 'Support Email',
      description: 'Réponse sous 24h pour tous les plans',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: '/contact',
      linkText: 'Nous contacter'
    },
    {
      title: 'Communauté Discord',
      description: 'Échangez avec d\'autres utilisateurs',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      link: '#',
      linkText: 'Rejoindre Discord'
    },
    {
      title: 'Status Page',
      description: 'Vérifiez l\'état de nos services en temps réel',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: 'https://status.zimsend.com',
      linkText: 'Voir le status'
    }
  ];

  const popularArticles = [
    {
      title: 'Guide de démarrage rapide',
      description: 'Configurez votre premier device en 5 minutes',
      category: 'getting-started',
      readTime: '5 min',
      link: 'https://docs.zimsend.com/guides/quickstart'
    },
    {
      title: 'Envoyer votre premier SMS via l\'API',
      description: 'Exemples de code en Node.js, Python et PHP',
      category: 'api',
      readTime: '8 min',
      link: 'https://docs.zimsend.com/guides/sending-sms'
    },
    {
      title: 'Optimiser la connexion de votre device',
      description: 'Astuces pour maintenir votre device toujours connecté',
      category: 'device',
      readTime: '10 min',
      link: 'https://docs.zimsend.com/guides/device-optimization'
    },
    {
      title: 'Implémenter les codes OTP',
      description: 'Sécurisez votre application avec l\'authentification 2FA',
      category: 'api',
      readTime: '12 min',
      link: 'https://docs.zimsend.com/guides/otp'
    }
  ];

  const filteredGuides = quickGuides.filter(guide =>
    activeCategory === 'all' || guide.category === activeCategory
  );

  const filteredFaqs = faqs.filter(faq =>
    (activeCategory === 'all' || faq.category === activeCategory) &&
    (searchQuery === '' ||
     faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <SEO
        title="Centre d'aide - FAQ, Guides & Support"
        description="Centre d'aide ZimSend : FAQ complète, guides de démarrage, documentation API, support technique. Trouvez toutes les réponses à vos questions sur notre plateforme SMS Gateway."
        keywords="aide sms api, faq sms gateway, guide api sms, support sms, documentation sms api, tutoriel api sms, aide otp"
        canonical="/help-center"
      />
      <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 pt-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Centre d'aide ZimSend
          </h1>
          <p className="text-xl text-white/90 mb-10">
            Trouvez des réponses, consultez nos guides et apprenez à utiliser ZimSend
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher dans l'aide (ex: comment envoyer un SMS, configurer webhook...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 bg-white text-slate-900 rounded-xl shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
              />
              <svg
                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Quick Guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Guides rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGuides.map((guide, index) => (
            <a
              key={index}
              href={guide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className="text-primary mb-4">{guide.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                {guide.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {guide.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Popular Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Articles populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularArticles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-slate-600">
                {article.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Questions fréquentes
          {searchQuery && (
            <span className="text-lg text-slate-600 font-normal ml-3">
              ({filteredFaqs.length} résultat{filteredFaqs.length > 1 ? 's' : ''})
            </span>
          )}
        </h2>

        {filteredFaqs.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center">
            <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-slate-600 text-lg">
              Aucun résultat trouvé pour "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-primary hover:text-primary-dark font-semibold"
            >
              Réinitialiser la recherche
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      expandedFaq === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Support Channels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Besoin d'aide supplémentaire ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className="text-primary mb-4 flex justify-center">{channel.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {channel.title}
              </h3>
              <p className="text-slate-600 mb-4 text-sm">
                {channel.description}
              </p>
              {channel.link.startsWith('http') ? (
                <a
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary hover:text-primary-dark font-semibold transition-colors"
                >
                  {channel.linkText} →
                </a>
              ) : (
                <Link
                  to={channel.link}
                  className="inline-block text-primary hover:text-primary-dark font-semibold transition-colors"
                >
                  {channel.linkText} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Vous n'avez pas trouvé ce que vous cherchiez ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Notre équipe support est là pour vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Contacter le support
            </Link>
            <a
              href="https://docs.zimsend.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white"
            >
              Documentation complète
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HelpCenter;
