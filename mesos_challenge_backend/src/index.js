import app from './app.js';
const startApp = () => {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => { console.log('El servidor esta listo para pedir peticiones en el puerto: ' + PORT); });

};

app.get('/', (request, response) => {
    response.send('<h1>ésta es la api del challenge de mesos</h1>');
});

startApp();
