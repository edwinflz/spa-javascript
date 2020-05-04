import router from './routes';

// Escucha la carga de router
window.addEventListener('load', router);

// Escucha el cambio de router
window.addEventListener('hashchange', router);