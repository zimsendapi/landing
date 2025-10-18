import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import apiService from '../services/api';

const Pricing = () => {
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
      subtitle: "Testez sans engagement",
      price: "0",
      features: [
        "10 SMS / jour (100 / mois)",
        "5 OTP / jour (50 / mois)",
        "1 appareil connecté",
        "Accès API + logs basiques",
        "Support communautaire"
      ],
      cta: "Commencer gratuitement",
      popular: false,
      color: "slate",
      icon: "🆓"
    },
    {
      name: "STARTER",
      title: "Starter",
      subtitle: "Le plan parfait pour démarrer sérieusement",
      price: "9.9",
      features: [
        "300 SMS / jour (5 000 / mois)",
        "100 OTP / jour (3 000 / mois)",
        "2 appareils connectés",
        "Webhooks & envoi en masse",
        "Email support réactif",
        "Logs détaillés"
      ],
      cta: "Démarrer maintenant",
      popular: true,
      color: "primary",
      icon: "🚀"
    },
    {
      name: "PRO",
      title: "Pro",
      subtitle: "La puissance pour les entreprises",
      price: "29.9",
      features: [
        "2 000 SMS / jour (60 000 / mois)",
        "1 000 OTP / jour (30 000 / mois)",
        "5 appareils connectés",
        "Analytics avancées",
        "Webhooks, envoi en masse, logs",
        "Support prioritaire"
      ],
      cta: "Essayer PRO",
      popular: false,
      color: "emerald",
      icon: "💼"
    },
    {
      name: "ENTERPRISE",
      title: "Enterprise",
      subtitle: "Sur mesure pour les grands volumes",
      price: "Sur devis",
      features: [
        "Volume SMS et OTP illimités",
        "Appareils illimités",
        "Serveur dédié / cluster privé",
        "Marque blanche",
        "SLA 99.9% garanti",
        "Support dédié 24/7"
      ],
      cta: "Nous contacter",
      popular: false,
      color: "purple",
      icon: "🏢"
    }
  ];

  // Transformer les données API en format compatible avec l'affichage
  const formatPlansForDisplay = (apiPlans) => {
    return apiPlans.map(plan => ({
      name: plan.id,
      title: plan.title,
      subtitle: plan.subtitle,
      price: plan.price === null ? "Sur devis" : plan.price.toString(),
      features: plan.features,
      cta: plan.cta,
      popular: plan.id === 'STARTER', // STARTER est populaire par défaut
      color: plan.id === 'FREE' ? 'slate' : 
             plan.id === 'STARTER' ? 'primary' : 
             plan.id === 'PRO' ? 'emerald' : 'purple',
      icon: plan.id === 'FREE' ? '🆓' : 
            plan.id === 'STARTER' ? '🚀' : 
            plan.id === 'PRO' ? '💼' : '🏢'
    }));
  };

  // Utiliser les plans API si disponibles, sinon les plans par défaut
  const displayPlans = plans.length > 0 ? formatPlansForDisplay(plans) : defaultPlans;

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Votre téléphone, votre contrôle",
      description: "Utilisez votre propre téléphone Android et votre forfait SMS"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Envoi instantané",
      description: "Vos SMS sont envoyés en moins d'une seconde"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fiabilité 99.9%",
      description: "Disponibilité garantie avec sauvegarde automatique"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Couverture mondiale",
      description: "Envoyez des SMS dans plus de 200 pays"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: "Notifications en temps réel",
      description: "Recevez instantanément la confirmation de livraison"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "API complète",
      description: "Intégration facile avec votre système existant"
    }
  ];

  const faqs = [
    {
      question: "Puis-je changer de plan à tout moment ?",
      answer: "Oui, vous pouvez passer à un plan supérieur à tout moment. Le changement prend effet immédiatement et vous serez facturé au prorata."
    },
    {
      question: "Que se passe-t-il si je dépasse mes quotas ?",
      answer: "Les SMS supplémentaires sont facturés à 0.05€ par SMS. Vous recevrez une notification avant d'atteindre vos limites."
    },
    {
      question: "Puis-je utiliser plusieurs téléphones ?",
      answer: "Oui, selon votre plan. Le plan STARTER permet 2 téléphones, PRO permet 5 téléphones, et ENTERPRISE permet un nombre illimité."
    },
    {
      question: "Y a-t-il des frais de configuration ?",
      answer: "Non, il n'y a aucun frais de configuration. Vous payez uniquement votre abonnement mensuel."
    },
    {
      question: "Puis-je annuler mon abonnement ?",
      answer: "Oui, vous pouvez annuler votre abonnement à tout moment. Vous gardez l'accès jusqu'à la fin de votre période de facturation."
    },
    {
      question: "Quels types de SMS puis-je envoyer ?",
      answer: "Vous pouvez envoyer tous types de SMS : marketing, notifications, codes OTP, rappels, etc. Nous respectons les réglementations anti-spam."
    }
  ];

  const getPlanColorClasses = (color) => {
    const colors = {
      slate: {
        bg: 'bg-slate-50',
        border: 'border-slate-200',
        text: 'text-slate-900',
        button: 'bg-slate-900 text-white hover:bg-slate-800'
      },
      primary: {
        bg: 'bg-primary/5',
        border: 'border-primary',
        text: 'text-slate-900',
        button: 'bg-primary text-white hover:bg-primary-dark'
      },
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-slate-900',
        button: 'bg-emerald-600 text-white hover:bg-emerald-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-slate-900',
        button: 'bg-purple-600 text-white hover:bg-purple-700'
      }
    };
    return colors[color] || colors.slate;
  };

  return (
    <>
      <SEO
        title="Tarifs - Plans à partir de 0€"
        description="Plans SMS Gateway économiques : Gratuit jusqu'à 100 SMS/mois, Starter 9.9€, Pro 29.9€. API SMS, OTP, Webhooks inclus. Aucune carte bancaire requise pour commencer."
        keywords="tarif sms api, prix sms gateway, sms pas cher, api sms gratuit, plan sms, abonnement sms api, sms moins cher, prix otp sms"
        canonical="/pricing"
      />
      <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient orbs décoratifs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-custom"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-200/30 rounded-full blur-3xl animate-pulse-custom" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Des tarifs transparents
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                pour tous les budgets
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Commencez gratuitement et évoluez selon vos besoins.
              Aucun frais caché, aucune surprise.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <span className="ml-3 text-slate-600">Chargement des plans...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayPlans.map((plan, index) => {
              const colorClasses = getPlanColorClasses(plan.color);
              return (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                    plan.popular
                      ? `${colorClasses.bg} ${colorClasses.border} border-2 shadow-2xl`
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
                    <div className="text-center mb-6">
                      <h3 className={`text-xl font-bold mb-1 ${plan.popular ? colorClasses.text : 'text-slate-900'}`}>
                        {plan.title}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-4">{plan.subtitle}</p>
                      <div className="mb-2">
                        {plan.price === "Sur devis" ? (
                          <span className={`text-3xl font-bold ${plan.popular ? colorClasses.text : 'text-slate-900'}`}>
                            Sur devis
                          </span>
                        ) : (
                          <>
                            <span className={`text-5xl font-bold ${plan.popular ? colorClasses.text : 'text-slate-900'}`}>
                              {plan.price}€
                            </span>
                            <span className={`text-lg ${plan.popular ? 'text-slate-600' : 'text-slate-600'}`}>/mois</span>
                          </>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <svg
                            className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-primary' : 'text-primary'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className={`text-sm ${plan.popular ? 'text-slate-700' : 'text-slate-700'}`}>
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
                          ? `${colorClasses.button} shadow-lg shadow-primary/30`
                          : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>
              );
            })}
            </div>
          )}
        </div>
      </section>

      {/* Plans détaillés Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Choisissez le plan qui vous correspond
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Des solutions adaptées à chaque étape de votre croissance
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <span className="ml-3 text-slate-600">Chargement des détails...</span>
            </div>
          ) : (
            <div className="space-y-16">
            {displayPlans.map((plan, index) => {
              const planData = plans.find(p => p.id === plan.name);
              const bgColor = plan.name === 'FREE' ? 'from-slate-50' :
                             plan.name === 'STARTER' ? 'from-primary/5' :
                             plan.name === 'PRO' ? 'from-emerald-50' : 'from-purple-50';
              const borderColor = plan.name === 'FREE' ? 'border-slate-200' :
                                 plan.name === 'STARTER' ? 'border-primary' :
                                 plan.name === 'PRO' ? 'border-emerald-200' : 'border-purple-200';
              const textColor = plan.name === 'FREE' ? 'text-primary' :
                               plan.name === 'STARTER' ? 'text-primary' :
                               plan.name === 'PRO' ? 'text-emerald-600' : 'text-purple-600';
              
              return (
                <div key={index} className={`bg-gradient-to-br ${bgColor} to-white rounded-2xl p-8 md:p-12 border ${plan.name === 'STARTER' ? 'border-2 shadow-lg' : ''} ${borderColor}`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="text-5xl mr-4">{plan.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{plan.title}</h3>
                        <p className={`${textColor} font-medium`}>{plan.subtitle}</p>
                      </div>
                    </div>
                    {plan.popular && (
                      <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                        POPULAIRE
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    {planData?.description || 'Description du plan'}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">✅ Ce que vous obtenez :</h4>
                      <ul className="space-y-2 text-slate-700">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${plan.name === 'FREE' ? 'bg-primary/5' : 
                                   plan.name === 'STARTER' ? 'bg-white border border-primary/20' :
                                   plan.name === 'PRO' ? 'bg-emerald-50 border border-emerald-200' : 
                                   'bg-purple-50 border border-purple-200'} rounded-xl p-6`}>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        <strong>💡 Parfait pour :</strong> {plan.name === 'ENTERPRISE' ? 
                          'Contactez-nous pour une offre personnalisée adaptée à votre activité et vos volumes d\'envoi.' :
                          'Découvrir et tester la plateforme selon vos besoins.'}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Fonctionnalités incluses
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tous les plans incluent ces fonctionnalités essentielles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-slate-600">
              Tout ce que vous devez savoir sur nos tarifs
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
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
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Rejoignez des centaines d'entreprises qui font confiance à ZimSend pour leurs communications SMS
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.zimsend.com/register"
              className="group px-8 py-4 bg-white text-primary rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 flex items-center"
            >
              Commencer gratuitement
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

export default Pricing;
