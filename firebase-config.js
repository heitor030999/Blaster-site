// Configuração do Firebase para o site Blaster
const firebaseConfig = {
  apiKey: "AIzaSyCaqy8ZHh2F8JzKwqo2j4yPkGaXkVFdmBA",
  authDomain: "blaster-site.firebaseapp.com",
  projectId: "blaster-site",
  storageBucket: "blaster-site.appspot.com", // corrigido
  messagingSenderId: "1033435427207",
  appId: "1:1033435427207:web:793cc8cec9c869dedaa322",
  measurementId: "G-SQT2SKWB6G"
};

// Inicializa o Firebase (modo compatível com <script>)
firebase.initializeApp(firebaseConfig);
