// 75au_develop_a_real-.ts

interface ServiceConfig {
  id: string;
  name: string;
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  auth: {
    username: string;
    password: string;
  };
}

interface APIConfig {
  services: ServiceConfig[];
  timeout: number;
  retryCount: number;
  logger: {
    level: 'DEBUG' | 'INFO' | 'ERROR';
  };
}

const apiConfig: APIConfig = {
  services: [
    {
      id: 'service-1',
      name: 'Service 1 API',
      endpoint: 'https://service-1.com/api',
      method: 'GET',
      auth: {
        username: 'service-1-username',
        password: 'service-1-password',
      },
    },
    {
      id: 'service-2',
      name: 'Service 2 API',
      endpoint: 'https://service-2.com/api',
      method: 'POST',
      auth: {
        username: 'service-2-username',
        password: 'service-2-password',
      },
    },
  ],
  timeout: 5000,
  retryCount: 3,
  logger: {
    level: 'INFO',
  },
};

export default apiConfig;