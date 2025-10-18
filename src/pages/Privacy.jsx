const Privacy = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-custom-md p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
            Politique de confidentialité
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Dernière mise à jour : 17/10/2025
              {/* {new Date().toLocaleDateString('fr-FR')} */}
            </p>

            <p className="text-slate-600 mb-4">
              La présente Politique de confidentialité explique comment Abed Zim
              (ci-après « l’Éditeur », « nous », « notre » ou « nos ») collecte,
              utilise et protège les informations personnelles dans le cadre de
              l’utilisation de :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>son application mobile Android ZimSend,</li>
              <li>
                et de son API Cloud accessible via https://api.zimsend.com.
              </li>
            </ul>
            <p className="text-slate-600 mb-4">
              En utilisant ces services, l’utilisateur (ci-après « le Client »)
              accepte la présente politique.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              1. Responsable du traitement
            </h2>
            <p className="text-slate-600 mb-2">
              Le responsable du traitement des données est :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>Abed Zim</li>
              <li>Paris, France</li>
              <li>
                <a href="mailto:support@zimsend.com">support@zimsend.com</a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              2. Données collectées
            </h2>
            <p className="text-slate-600 mb-4">
              Nous collectons uniquement les données strictement nécessaires au
              fonctionnement du service. Les catégories de données traitées sont
              les suivantes :
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
              a. Données d’identification
            </h3>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>Nom, prénom (si fournis volontairement)</li>
              <li>Adresse e-mail du compte</li>
              <li>Clé API, mot de passe et identifiant client (clientId)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
              b. Données techniques
            </h3>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>Adresse IP utilisée lors des connexions API</li>
              <li>Logs d’accès et d’erreurs serveur</li>
              <li>
                Identifiants uniques de l’application (UUID Android, version de
                l’app)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
              c. Données liées aux SMS (traitement technique)
            </h3>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>
                Numéros de téléphone du destinataire et de l’expéditeur (ton
                utilisateur)
              </li>
              <li>
                Contenu du message (transmis temporairement pour envoi /
                réception)
              </li>
              <li>
                Statuts d’envoi et d’accusés de réception (delivery report)
              </li>
            </ul>
            <p className="text-slate-600 mb-4">
              ⚠️ Les messages et numéros ne sont jamais utilisés à des fins
              commerciales et sont supprimés automatiquement après traitement.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              3. Finalités du traitement
            </h2>
            <p className="text-slate-600 mb-2">
              Les données collectées sont utilisées uniquement pour :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>
                <span className="font-medium text-slate-800">
                  Assurer le fonctionnement du service :
                </span>
                <ul className="list-disc list-inside ml-5 mt-1">
                  <li>
                    Envoi et réception des SMS depuis le téléphone du Client ;
                  </li>
                  <li>Synchronisation entre l’application et l’API Cloud ;</li>
                  <li>
                    Transmission des logs d’état et de confirmation d’envoi.
                  </li>
                </ul>
              </li>
              <li className="mt-2">
                <span className="font-medium text-slate-800">
                  Sécuriser les accès :
                </span>
                <ul className="list-disc list-inside ml-5 mt-1">
                  <li>Authentification via clé API et clientId ;</li>
                  <li>Détection d’utilisation frauduleuse ou abusive.</li>
                </ul>
              </li>
              <li className="mt-2">
                <span className="font-medium text-slate-800">
                  Améliorer la fiabilité et la qualité du service :
                </span>
                <ul className="list-disc list-inside ml-5 mt-1">
                  <li>Analyse anonyme des performances et erreurs.</li>
                </ul>
              </li>
            </ul>
            <p className="text-slate-600 mb-4">
              Nous ne procédons à aucun profilage marketing et aucune revente de
              données.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              4. Durée de conservation des données
            </h2>
            <p className="text-slate-600 mb-4">
              Les données sont ensuite supprimées ou anonymisées.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-2 border-b border-slate-200">
                      Type de données
                    </th>
                    <th className="px-4 py-2 border-b border-slate-200">
                      Durée de conservation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-slate-200">
                      Identifiants de compte (email, clientId)
                    </td>
                    <td className="px-4 py-2 border-b border-slate-200">
                      Tant que le compte est actif
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-slate-200">
                      Journaux d’accès et d’erreurs
                    </td>
                    <td className="px-4 py-2 border-b border-slate-200">
                      30 jours
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-slate-200">
                      Contenu et métadonnées SMS
                    </td>
                    <td className="px-4 py-2 border-b border-slate-200">
                      Supprimés automatiquement après 24 à 72 heures
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-slate-200">
                      Données de facturation (si applicable)
                    </td>
                    <td className="px-4 py-2 border-b border-slate-200">
                      5 ans (obligation légale comptable)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              5. Partage des données
            </h2>
            <p className="text-slate-600 mb-4">
              Les données ne sont jamais revendues ni partagées avec des tiers,
              sauf :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>
                lorsque la loi l’exige (demande judiciaire ou autorité
                compétente) ;
              </li>
              <li>
                pour des besoins techniques strictement nécessaires (hébergeur,
                prestataire cloud).
              </li>
            </ul>
            <p className="text-slate-600 mb-4">
              Nos sous-traitants techniques sont soumis à des obligations
              strictes de confidentialité et hébergent les données au sein de
              l’UE ou dans un pays reconnu comme adéquat par la Commission
              européenne.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              6. Hébergement des données
            </h2>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>
                HOSTINGER INTERNATIONAL LTD, situés à 61 Lordou Vironos Street,
                6023 Larnaca, Chypre.
              </li>
              <li>Sauvegardes chiffrées (AES-256) ;</li>
              <li>Accès restreint aux seules personnes habilitées.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              7. Sécurité des informations
            </h2>
            <p className="text-slate-600 mb-4">
              Nous mettons en œuvre toutes les mesures techniques et
              organisationnelles nécessaires pour garantir la sécurité des
              données :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>Chiffrement des communications (HTTPS/TLS) ;</li>
              <li>
                Clés API générées de manière unique et stockées de façon
                chiffrée ;
              </li>
              <li>Audit et traçabilité des accès API ;</li>
              <li>Limitation stricte des permissions serveur.</li>
            </ul>
            <p className="text-slate-600 mb-4">
              L’utilisateur est également responsable de la sécurité de son
              appareil Android et de la confidentialité de ses identifiants API.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              8. Droits des utilisateurs (RGPD)
            </h2>
            <p className="text-slate-600 mb-2">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), chaque utilisateur dispose des droits suivants :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>Droit d’accès : obtenir les données le concernant ;</li>
              <li>Droit de rectification : corriger des données inexactes ;</li>
              <li>
                Droit à l’effacement : demander la suppression de ses données ;
              </li>
              <li>
                Droit à la portabilité : recevoir ses données dans un format
                structuré ;
              </li>
              <li>
                Droit d’opposition : refuser certains traitements non essentiels
                ;
              </li>
              <li>
                Droit à la limitation : suspendre temporairement un traitement.
              </li>
            </ul>
            <p className="text-slate-600 mb-4">
              📧 Pour exercer ces droits : Envoyez un e-mail à [adresse email du
              DPO ou de contact] avec pour objet « Demande RGPD ». Une réponse
              vous sera apportée sous 30 jours maximum.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              9. Cookies et traceurs
            </h2>
            <p className="text-slate-600 mb-4">
              Notre API et nos interfaces web n’utilisent pas de cookies
              publicitaires. Seuls des cookies techniques peuvent être déposés
              pour :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>maintenir une session utilisateur ;</li>
              <li>mesurer la performance du service (de manière anonyme).</li>
            </ul>
            <p className="text-slate-600 mb-4">
              Aucun cookie tiers ou tracking externe n’est utilisé.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              10. Transfert hors Union européenne
            </h2>
            <p className="text-slate-600 mb-4">
              Par défaut, les données sont traitées au sein de l’Espace
              Économique Européen (EEE). Si un transfert est nécessaire vers un
              pays tiers, il sera encadré par :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>
                des clauses contractuelles types de la Commission européenne, ou
              </li>
              <li>
                une décision d’adéquation garantissant un niveau de protection
                équivalent.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              11. Sous-traitance technique
            </h2>
            <p className="text-slate-600 mb-4">
              L’Éditeur peut faire appel à des prestataires pour :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>l’hébergement des serveurs,</li>
              <li>la gestion des sauvegardes,</li>
              <li>la supervision du service.</li>
            </ul>
            <p className="text-slate-600 mb-4">
              Ces prestataires : n’ont pas accès au contenu des SMS ; sont liés
              par contrat de confidentialité ; respectent la réglementation
              RGPD.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              12. Modifications de la politique
            </h2>
            <p className="text-slate-600 mb-4">
              Cette Politique de confidentialité peut être mise à jour à tout
              moment. L’utilisateur sera informé via l’application ou le site
              web en cas de modification substantielle. La version en vigueur
              est toujours disponible sur{" "}
              <a
                className="text-primary hover:underline"
                href="https://zimsend.com"
              >
                zimsend.com
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              13. Contact
            </h2>
            <p className="text-slate-600 mb-4">
              Pour toute question sur la confidentialité ou la protection des
              données :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>Abed Zim</li>
              <li>
                <a href="mailto:support@zimsend.com">support@zimsend.com</a>
              </li>
              <li>
                <a href="https://zimsend.com">zimsend.com</a>
              </li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
