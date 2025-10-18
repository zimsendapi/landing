import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const OtpPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Service OTP par SMS - ZimSend",
    "description": "Envoyez des codes OTP (One-Time Password) par SMS pour sécuriser vos applications. Authentification à deux facteurs (2FA) fiable et économique.",
    "provider": {
      "@type": "Organization",
      "name": "ZimSend"
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://zimsend.com/otp-sms"
    }
  };

  return (
    <>
      <SEO
        title="OTP SMS - Codes de Vérification par SMS | Authentification 2FA"
        description="Envoyez des codes OTP (One-Time Password) par SMS pour sécuriser vos applications. Service d'authentification à deux facteurs (2FA) fiable, rapide et économique. À partir de 0€/mois."
        keywords="otp sms, code otp, otp par sms, authentification 2fa, two factor authentication, code de vérification sms, otp france, service otp, api otp, otp moins cher"
        canonical="/otp-sms"
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
              Service OTP par SMS Professionnel
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Sécurisez vos applications avec l'authentification à deux facteurs (2FA).
              Codes OTP livrés instantanément par SMS dans le monde entier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.zimsend.com/register"
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 shadow-xl"
              >
                Essayer gratuitement
              </a>
              <a
                href="https://docs.zimsend.com/guides/otp"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white"
              >
                Documentation OTP
              </a>
            </div>
          </div>
        </section>

        {/* Why OTP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Pourquoi utiliser des codes OTP par SMS ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Sécurité renforcée</h3>
              <p className="text-slate-600">
                Protégez vos utilisateurs contre le piratage avec l'authentification à deux facteurs (2FA).
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Conformité RGPD</h3>
              <p className="text-slate-600">
                Respectez les normes de sécurité et conformité RGPD pour protéger les données utilisateurs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Livraison instantanée</h3>
              <p className="text-slate-600">
                Codes OTP reçus en moins d'une seconde. Taux de délivrabilité de 99.9%.
              </p>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Comment fonctionnent les codes OTP ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Utilisateur demande connexion</h3>
                <p className="text-slate-600 text-sm">
                  L'utilisateur saisit son identifiant sur votre application
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Votre app génère un code</h3>
                <p className="text-slate-600 text-sm">
                  Votre backend génère un code aléatoire à usage unique
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">ZimSend envoie le SMS</h3>
                <p className="text-slate-600 text-sm">
                  Le code OTP est envoyé par SMS via notre API
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Utilisateur validé</h3>
                <p className="text-slate-600 text-sm">
                  L'utilisateur saisit le code et accède à son compte
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Intégration simple de l'OTP par SMS
          </h2>

          <div className="bg-slate-900 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">1. Générer et envoyer le code OTP</h3>
                <pre className="bg-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">
{`// Générer un code OTP
const otp = Math.floor(100000 +
  Math.random() * 900000);

// Stocker en DB avec expiration
await saveOTP(userId, otp, 5); // 5 min

// Envoyer via ZimSend
await fetch('https://api.zimsend.com/v1/sms/send', {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.ZIMSEND_API_KEY,
    'X-Client-ID': process.env.CLIENT_ID,
    'X-Device-ID': process.env.DEVICE_ID,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: userPhone,
    message: \`Votre code OTP: \${otp}\`
  })
});`}
                  </code>
                </pre>
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold mb-4">2. Vérifier le code OTP</h3>
                <pre className="bg-slate-800 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">
{`// Route de vérification
app.post('/verify-otp', async (req, res) => {
  const { userId, code } = req.body;

  // Récupérer le code stocké
  const stored = await getOTP(userId);

  // Vérifier validité
  if (!stored) {
    return res.status(400).json({
      error: 'Code expiré'
    });
  }

  if (stored.code !== code) {
    return res.status(400).json({
      error: 'Code invalide'
    });
  }

  // Supprimer le code
  await deleteOTP(userId);

  // Authentifier l'utilisateur
  const token = generateToken(userId);
  res.json({ success: true, token });
});`}
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
              Cas d'usage des codes OTP
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Connexion utilisateur</h3>
                <p className="text-slate-600 text-sm">
                  Authentification à deux facteurs pour la connexion à un compte
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Inscription / Création compte</h3>
                <p className="text-slate-600 text-sm">
                  Vérification du numéro de téléphone lors de l'inscription
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Réinitialisation mot de passe</h3>
                <p className="text-slate-600 text-sm">
                  Validation de l'identité avant de changer le mot de passe
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Validation de paiement</h3>
                <p className="text-slate-600 text-sm">
                  Confirmation des transactions financières sensibles
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Changement de paramètres</h3>
                <p className="text-slate-600 text-sm">
                  Sécuriser la modification d'informations sensibles
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Applications bancaires</h3>
                <p className="text-slate-600 text-sm">
                  Protection des opérations bancaires et virements
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Bonnes pratiques pour les codes OTP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                À faire
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Utiliser des codes de 6 chiffres minimum
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Définir une expiration (3-5 minutes)
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Limiter le nombre de tentatives (3-5 max)
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Permettre le renvoi après délai
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Stocker les codes de façon sécurisée (hashés)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                À éviter
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Codes trop courts (moins de 6 chiffres)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Expiration trop longue (plus de 10 min)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Pas de limite de tentatives
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Stocker les codes en clair
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Utiliser le même code plusieurs fois
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Tarification transparente pour les codes OTP
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Plan gratuit avec 50 OTP/mois. Passez à un plan payant pour plus de volume.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">FREE</div>
                <div className="text-3xl font-bold mb-4">0€/mois</div>
                <div className="text-white/90">50 OTP/mois</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div className="text-2xl font-bold mb-2">STARTER</div>
                <div className="text-3xl font-bold mb-4">9.9€/mois</div>
                <div className="text-white/90">3 000 OTP/mois</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">PRO</div>
                <div className="text-3xl font-bold mb-4">29.9€/mois</div>
                <div className="text-white/90">30 000 OTP/mois</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.zimsend.com/register"
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-slate-50 transition-all shadow-xl"
              >
                Commencer gratuitement
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
            Questions fréquentes sur les codes OTP
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Qu'est-ce qu'un code OTP ?</h3>
              <p className="text-slate-600">
                OTP signifie "One-Time Password" (mot de passe à usage unique). C'est un code temporaire
                envoyé par SMS utilisé pour l'authentification à deux facteurs (2FA).
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Combien de temps un code OTP est-il valide ?</h3>
              <p className="text-slate-600">
                La durée de validité dépend de votre implémentation. Nous recommandons 3 à 5 minutes
                pour un bon équilibre entre sécurité et expérience utilisateur.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Les codes OTP sont-ils sécurisés ?</h3>
              <p className="text-slate-600">
                Oui, les codes OTP via SMS sont une méthode d'authentification sécurisée recommandée par
                les experts. Ils ajoutent une couche de sécurité supplémentaire au-delà du simple mot de passe.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Puis-je personnaliser le message OTP ?</h3>
              <p className="text-slate-600">
                Oui, vous avez le contrôle total sur le contenu du SMS. Vous pouvez inclure le nom de votre
                application et un message personnalisé avec le code OTP.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OtpPage;
