
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// IMPORTANTE: Substitua com a configuração do seu projeto Firebase.
// Crie um arquivo .env.local na raiz do seu projeto e adicione suas chaves.
// Exemplo: VITE_FIREBASE_API_KEY="sua-chave-aqui"
// Fix: Cast `import.meta` to `any` to access the `env` property. This is necessary because the TypeScript environment is not configured with Vite's client types.
const env = (import.meta as any).env;
const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.VITE_FIREBASE_DATABASE_URL,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Obtém uma referência para o serviço de banco de dados
export const db = getDatabase(app);
