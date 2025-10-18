// Service API pour récupérer les données depuis le backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.zimsend.com';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`API Error for ${endpoint}:`, error);
      throw error;
    }
  }

  // Récupérer les plans de pricing
  async getPlans() {
    try {
      return await this.request('/api/v1/billing/plans');
    } catch (error) {
      console.error('Error fetching plans:', error);
      // Retourner les plans par défaut en cas d'erreur
      return this.getDefaultPlans();
    }
  }

  // Plans par défaut en cas d'erreur API
  getDefaultPlans() {
    return [
      {
        id: 'FREE',
        title: 'Free',
        subtitle: 'Testez sans engagement',
        description: 'Découvrez la plateforme, testez votre intégration API et vos envois SMS sans frais.',
        price: 0,
        smsDaily: 10,
        smsMonthly: 100,
        otpDaily: 5,
        otpMonthly: 50,
        devices: 1,
        apiRate: 5,
        features: [
          '10 SMS / jour (100 / mois)',
          '5 OTP / jour (50 / mois)',
          '1 appareil connecté',
          'Accès API et logs basiques',
          'Support communautaire',
        ],
        cta: 'Commencer gratuitement',
      },
      {
        id: 'STARTER',
        title: 'Starter',
        subtitle: 'Le plan parfait pour démarrer sérieusement',
        description: 'Automatisez vos envois de SMS et OTP avec un volume adapté aux petits projets.',
        price: 9.9,
        smsDaily: 300,
        smsMonthly: 5000,
        otpDaily: 100,
        otpMonthly: 3000,
        devices: 2,
        apiRate: 30,
        features: [
          '300 SMS / jour (5 000 / mois)',
          '100 OTP / jour (3 000 / mois)',
          '2 appareils connectés',
          'Webhooks et envoi en masse',
          'Email support',
          'Logs détaillés',
        ],
        cta: 'Passer au Starter',
      },
      {
        id: 'PRO',
        title: 'Pro',
        subtitle: 'La puissance pour les entreprises',
        description: 'Gérez de gros volumes d\'envoi avec fiabilité, performance et support prioritaire.',
        price: 29.9,
        smsDaily: 2000,
        smsMonthly: 60000,
        otpDaily: 1000,
        otpMonthly: 30000,
        devices: 5,
        apiRate: 100,
        features: [
          '2 000 SMS / jour (60 000 / mois)',
          '1 000 OTP / jour (30 000 / mois)',
          '5 appareils connectés',
          'Analytics et suivi de livraison',
          'Webhooks et envoi en masse',
          'Support prioritaire',
        ],
        cta: 'Choisir le plan Pro',
      },
      {
        id: 'ENTERPRISE',
        title: 'Enterprise',
        subtitle: 'Sur mesure pour les grands volumes',
        description: 'Infrastructure dédiée, marque blanche et accompagnement personnalisé.',
        price: null,
        smsDaily: null,
        smsMonthly: null,
        otpDaily: null,
        otpMonthly: null,
        devices: null,
        apiRate: 500,
        features: [
          'Volume et appareils illimités',
          'Serveur ou cluster privé',
          'Marque blanche',
          'SLA 99.9%',
          'Support dédié 24/7',
        ],
        cta: 'Nous contacter',
      },
    ];
  }
}

// Instance singleton
const apiService = new ApiService();

export default apiService;
