import axios from 'axios';
// Se crea instancia http con valores default
const apiGeo = axios.create( {
    baseURL: "https://apis.datos.gob.ar/georef/api"
});
// Interceptor para enviar datos recibidos y checar errores
apiGeo.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedError) {
        // Loggear mensaje de error a un servicio como Sentry
        // Mostrar error genérico al usuario
        return Promise.reject(error);
    }
    }
);

export default apiGeo;





