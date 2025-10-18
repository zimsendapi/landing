const Legal = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-custom-md p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
            Mentions légales
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>

            <p className="text-slate-600 mb-4">
              Conformément à la loi n°2004-575 du 21 juin 2004 pour la Confiance
              dans l’économie numérique (LCEN), il est précisé aux utilisateurs
              du site [ton site / ton domaine] l’identité de l’éditeur du site
              et de l’application.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              1. Éditeur du site et de l’application
            </h2>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>Nom : Abed Zim</li>
              <li>
                Qualité : Développeur indépendant – Éditeur du logiciel ZimSend
              </li>
              <li>Adresse : Paris, France</li>
              <li>E-mail : contact@abedzim.com</li>
            </ul>
            {/* <p className="text-slate-600 mb-4">
              (Si tu es enregistré comme auto-entrepreneur)
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>Numéro SIRET : [ton numéro SIRET]</li>
              <li>Pays d’immatriculation : [France / Belgique / etc.]</li>
            </ul> */}

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              2. Hébergeur
            </h2>
            <p className="text-slate-600 mb-4">
              Le site et l’API sont hébergés par :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>HOSTINGER INTERNATIONAL LTD</li>
              <li>61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
              <li>Site web : https://hostinger.com</li>
              {/* <li>Téléphone : +357 25 310 333</li> */}
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              3. Objet du site
            </h2>
            <p className="text-slate-600 mb-4">
              Le site et l’application ont pour objet de fournir une solution
              logicielle d’automatisation d’envoi et de gestion de SMS à partir
              du téléphone de l’utilisateur.
            </p>
            <p className="text-slate-600 mb-4">
              L’éditeur ne fournit aucun service de télécommunication : il met à
              disposition un logiciel autonome fonctionnant avec la carte SIM et
              le réseau mobile de l’utilisateur.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              4. Responsabilité
            </h2>
            <p className="text-slate-600 mb-4">
              L’éditeur ne saurait être tenu responsable :
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>
                des coûts, erreurs ou pannes liées aux opérateurs mobiles,
              </li>
              <li>de l’usage illégal ou abusif de l’application,</li>
              <li>
                ou des dommages indirects liés à l’utilisation du service.
              </li>
            </ul>
            <p className="text-slate-600 mb-4">
              Chaque utilisateur est responsable des messages qu’il envoie via
              son propre téléphone et réseau.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              5. Protection des données
            </h2>
            <p className="text-slate-600 mb-4">
              Les traitements de données effectués via le site et l’application
              sont décrits dans la Politique de confidentialité, accessible ici
              :
              <br />
              👉{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Politique de confidentialité
              </a>
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              6. Contact
            </h2>
            <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
              <li>📧 Email : contact@zimsend.com</li>
              <li>📍 Adresse : Paris, France</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              7. Droit applicable
            </h2>
            <p className="text-slate-600 mb-4">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux de Paris seront seuls compétents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
