const Terms = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-custom-md p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
            Conditions Générales d’Utilisation (CGU)
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Dernière mise à jour : 17/10/2025
              {/* {new Date().toLocaleDateString('fr-FR')} */}
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              1. Présentation du service
            </h2>
            <p className="text-slate-600 mb-4">
              Abed Zim (ci-après « l’Éditeur ») met à disposition une solution
              logicielle composée :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>
                d’une application Android ZimSend installée sur le téléphone de
                l’utilisateur,
              </li>
              <li>
                et d’une API cloud sécurisée permettant d’envoyer, recevoir et
                gérer des SMS à partir du téléphone connecté.
              </li>
            </ul>
            <p className="text-slate-600 mb-4">
              Chaque utilisateur (ci-après « le Client ») utilise sa propre
              carte SIM, son réseau mobile et son appareil pour l’envoi et la
              réception de SMS.
            </p>
            <p className="text-slate-600 mb-4">
              L’Éditeur ne fournit aucun service télécom, mais un outil logiciel
              d’automatisation et de gestion.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              2. Objet du contrat
            </h2>
            <p className="text-slate-600 mb-4">
              Les présentes Conditions Générales d’Utilisation ont pour objet de
              définir :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>les modalités d’accès et d’utilisation de la solution,</li>
              <li>les droits et obligations de l’Éditeur et du Client,</li>
              <li>
                les conditions de traitement des données et de responsabilité.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              3. Accès au service
            </h2>
            <p className="text-slate-600 mb-4">Le Client accède au service :</p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>via l’application mobile Android,</li>
              <li>
                et via l’API REST fournie par l’Éditeur, sécurisée par clé API,
                mot de passe, et clientId.
              </li>
            </ul>
            <p className="text-slate-600 mb-4">
              Chaque compte est strictement personnel. Le Client est responsable
              de la confidentialité de ses identifiants et de l’usage de son
              compte.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              4. Fonctionnement du système
            </h2>
            <p className="text-slate-600 mb-4">
              Les SMS sont émis depuis le téléphone du Client via sa propre
              carte SIM et son opérateur mobile.
            </p>
            <p className="text-slate-600 mb-4">
              L’API de l’Éditeur agit uniquement comme interface logicielle pour
              gérer et synchroniser les envois.
            </p>
            <p className="text-slate-600 mb-4">
              Les messages, journaux d’envoi et métadonnées peuvent être
              transmis temporairement au serveur pour traitement technique (par
              exemple : accusés de réception, logs, statistiques).
            </p>
            <p className="text-slate-600 mb-4">
              L’Éditeur n’est pas responsable des coûts SMS facturés par
              l’opérateur mobile du Client.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              5. Responsabilité du Client
            </h2>
            <p className="text-slate-600 mb-2">Le Client s’engage à :</p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>
                N’utiliser la solution que dans un cadre légal et conforme (ex :
                notifications, alertes, OTP, communication client).
              </li>
              <li>
                Ne pas envoyer de messages non sollicités (spam, publicité,
                prospection sans consentement).
              </li>
              <li>
                Ne pas utiliser le service à des fins frauduleuses (usurpation,
                phishing, OTP illégitimes, arnaques).
              </li>
              <li>
                Respecter la réglementation RGPD et les lois locales relatives
                aux données personnelles et aux télécommunications.
              </li>
              <li>
                Assumer l’entière responsabilité du contenu, du volume et des
                destinataires des SMS envoyés via son appareil.
              </li>
            </ul>
            <p className="text-slate-600 mb-4">
              Tout manquement à ces obligations pourra entraîner la suspension
              immédiate du compte sans préavis.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              6. Responsabilité de l’Éditeur
            </h2>
            <p className="text-slate-600 mb-2">L’Éditeur s’engage à :</p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>fournir un service stable, sécurisé et documenté ;</li>
              <li>assurer la confidentialité des données traitées ;</li>
              <li>corriger les erreurs logicielles identifiées.</li>
            </ul>
            <p className="text-slate-600 mb-2">Cependant, l’Éditeur :</p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>
                n’est pas responsable des retards, pertes ou erreurs d’envoi dus
                à l’opérateur télécom du Client ;
              </li>
              <li>
                ne garantit pas la délivrabilité ou la réception des messages ;
              </li>
              <li>
                ne peut être tenu responsable de l’usage illégal ou abusif du
                service par un Client.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              7. Données personnelles et RGPD
            </h2>
            <p className="text-slate-600 mb-4">
              L’Éditeur agit en qualité de sous-traitant technique au sens du
              RGPD. Les données traitées (numéros de téléphone, contenus de
              messages, journaux) sont :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>
                collectées uniquement pour la bonne exécution du service ;
              </li>
              <li>chiffrées en transit (HTTPS/TLS) ;</li>
              <li>supprimées automatiquement après [durée, ex. 30 jours].</li>
            </ul>
            <p className="text-slate-600 mb-4">
              Le Client reste responsable du traitement des données de ses
              propres utilisateurs finaux.
            </p>
            <p className="text-slate-600 mb-4">
              Conformément au RGPD, le Client peut exercer ses droits (accès,
              rectification, suppression) via : 📧 [adresse email de contact
              DPO].
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              8. Sécurité
            </h2>
            <p className="text-slate-600 mb-4">
              L’Éditeur met en œuvre toutes les mesures nécessaires pour assurer
              :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>la sécurité des serveurs et bases de données,</li>
              <li>la protection contre l’accès non autorisé,</li>
              <li>la traçabilité des accès API.</li>
            </ul>
            <p className="text-slate-600 mb-4">
              Le Client est toutefois responsable : de la sécurité de son
              appareil Android, et de la protection de ses identifiants API.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              9. Tarification
            </h2>
            <p className="text-slate-600 mb-4">
              L’accès à la plateforme est proposé selon les conditions
              tarifaires précisées sur [ton site / contrat]. Les coûts liés à
              l’envoi de SMS (opérateur mobile) restent à la charge du Client.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              10. Suspension et résiliation
            </h2>
            <p className="text-slate-600 mb-4">
              L’Éditeur peut suspendre temporairement ou définitivement le
              compte du Client en cas :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>
                d’utilisation frauduleuse, illégale ou contraire aux présentes
                CGU ;
              </li>
              <li>
                d’activité anormale détectée (spam, volume excessif, etc.) ;
              </li>
              <li>de non-paiement des frais éventuels.</li>
            </ul>
            <p className="text-slate-600 mb-4">
              Le Client peut résilier à tout moment en désinstallant
              l’application et supprimant son compte.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              11. Propriété intellectuelle
            </h2>
            <p className="text-slate-600 mb-4">
              L’ensemble des éléments du service (logiciels, API, documentation,
              interfaces, marques) est la propriété exclusive de l’Éditeur. Le
              Client obtient une licence non exclusive, personnelle et non
              transférable pour utiliser la solution.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              12. Droit applicable
            </h2>
            <p className="text-slate-600 mb-4">
              Les présentes CGU sont régies par le droit [de ton pays]. En cas
              de litige, les tribunaux compétents seront ceux du ressort de [ta
              ville / juridiction].
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              13. Contact
            </h2>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>support@zimsend.com</li>
              <li>https://zimsend.com</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
