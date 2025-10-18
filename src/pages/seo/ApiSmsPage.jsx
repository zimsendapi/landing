import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const ApiSmsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ZimSend API SMS",
    "applicationCategory": "BusinessApplication",
    "description": "API SMS professionnelle pour envoyer des SMS par programmation. Solution économique avec votre téléphone Android.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    }
  };

  return (
    <>
      <SEO
        title="API SMS REST - Envoi de SMS par API"
        description="API SMS REST simple et économique. Envoyez des SMS par programmation avec votre téléphone Android. Documentation complète, SDKs Node.js, Python, PHP. À partir de 0€/mois."
        keywords="api sms, api sms rest, envoyer sms api, api envoi sms, sms api france, rest api sms, api sms php, api sms python, api sms nodejs, sms gateway api"
        canonical="/api-sms"
        structuredData={structuredData}
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
              API SMS REST Professionnelle
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Intégrez l'envoi de SMS dans votre application en quelques lignes de code.
              API REST simple, fiable et économique avec votre téléphone Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.zimsend.com/register"
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 shadow-xl"
              >
                Essayer gratuitement
              </a>
              <a
                href="https://docs.zimsend.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white"
              >
                Documentation API
              </a>
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Une API SMS simple et puissante
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">API REST Standard</h3>
              <p className="text-slate-600">
                Interface REST classique avec JSON. Compatible avec tous les langages de programmation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Documentation complète</h3>
              <p className="text-slate-600">
                Guides détaillés, exemples de code, SDKs officiels et API Reference interactive.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Envoi instantané</h3>
              <p className="text-slate-600">
                Vos SMS partent en moins d'une seconde. Webhooks pour le suivi en temps réel.
              </p>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-slate-900 rounded-2xl p-8 mb-16">
            <h3 className="text-white text-xl font-semibold mb-6">Exemple d'envoi de SMS via l'API</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-400 text-sm mb-3">Node.js / JavaScript</p>
                <pre className="bg-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">
{`const response = await fetch(
  'https://api.zimsend.com/v1/sms/send',
  {
    method: 'POST',
    headers: {
      'X-API-Key': 'votre_cle_api',
      'X-Client-ID': 'votre_client_id',
      'X-Device-ID': 'votre_device_id',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to: '+33612345678',
      message: 'Bonjour depuis ZimSend!'
    })
  }
);

const data = await response.json();
console.log(data);`}
                  </code>
                </pre>
              </div>

              <div>
                <p className="text-slate-400 text-sm mb-3">Python</p>
                <pre className="bg-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">
{`import requests

url = "https://api.zimsend.com/v1/sms/send"

headers = {
    "X-API-Key": "votre_cle_api",
    "X-Client-ID": "votre_client_id",
    "X-Device-ID": "votre_device_id",
    "Content-Type": "application/json"
}

data = {
    "to": "+33612345678",
    "message": "Bonjour depuis ZimSend!"
}

response = requests.post(url,
    headers=headers, json=data)
print(response.json())`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Cas d'usage de l'API SMS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Codes OTP / 2FA</h3>
                <p className="text-slate-600 text-sm">Authentification à deux facteurs sécurisée</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Notifications</h3>
                <p className="text-slate-600 text-sm">Alertes et notifications transactionnelles</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Rappels</h3>
                <p className="text-slate-600 text-sm">Rappels de rendez-vous automatiques</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Marketing</h3>
                <p className="text-slate-600 text-sm">Campagnes SMS promotionnelles</p>
              </div>
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            SDKs et librairies officielles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://docs.zimsend.com/sdks/nodejs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Node.js SDK</h3>
              <p className="text-slate-600 mb-4">Librairie officielle pour Node.js et JavaScript</p>
              <code className="text-sm bg-slate-100 px-3 py-1 rounded">npm install @zimsend/sdk</code>
            </a>

            <a
              href="https://docs.zimsend.com/sdks/python"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Python SDK</h3>
              <p className="text-slate-600 mb-4">Librairie officielle pour Python 3.7+</p>
              <code className="text-sm bg-slate-100 px-3 py-1 rounded">pip install zimsend</code>
            </a>

            <a
              href="https://docs.zimsend.com/sdks/php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-3">PHP SDK</h3>
              <p className="text-slate-600 mb-4">Librairie officielle pour PHP 7.4+</p>
              <code className="text-sm bg-slate-100 px-3 py-1 rounded">composer require zimsend/sdk</code>
            </a>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Commencez à utiliser l'API SMS gratuitement
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Plan gratuit avec 100 SMS/mois. Aucune carte bancaire requise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.zimsend.com/register"
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-slate-50 transition-all shadow-xl"
              >
                Créer un compte gratuit
              </a>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-transparent text-white rounded-xl font-semibold hover:bg-white/10 transition-all border-2 border-white"
              >
                Voir tous les plans
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Questions fréquentes sur l'API SMS
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Comment obtenir une clé API ?</h3>
              <p className="text-slate-600">
                Inscrivez-vous sur app.zimsend.com, connectez un device Android, puis générez votre clé API
                depuis la section "API Keys" de votre dashboard.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Quel est le format de l'API ?</h3>
              <p className="text-slate-600">
                L'API ZimSend est une API REST standard utilisant JSON. Elle est compatible avec tous les
                langages de programmation modernes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Comment suivre l'état de mes SMS ?</h3>
              <p className="text-slate-600">
                Utilisez les webhooks pour recevoir des notifications en temps réel, ou consultez les logs
                détaillés dans votre dashboard. Chaque SMS a un ID unique pour le tracking.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Y a-t-il une limite de requêtes ?</h3>
              <p className="text-slate-600">
                Les limites dépendent de votre plan : 10 SMS/jour en FREE, 300/jour en STARTER, 2000/jour en PRO.
                Contactez-nous pour des volumes supérieurs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ApiSmsPage;
