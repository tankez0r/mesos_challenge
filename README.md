Conversor de monedas

Como desarrollador fullstack estarás expuesto para resolver desafíos en el backend y frontend, es por ello que tenemos el siguiente:

Crear una aplicación que permita realizar conversión de una moneda de origen (UF) a una moneda de destino (CLP), para una determinada fecha.
Mesos Challenge:

Este proyecto se hizo con el proposito de participar en el desafio propuesto por la empresa mesos.

La misma tenia como pauta desarrollar una aplicación fullstack que respondiera los siguientes requisitos:


La pantalla de conversión debe contener un input que permita el ingreso del monto a convertir de la moneda de origen y una selección de fecha sobre la cual se requiere hacer el cambio. Seleccionada la fecha debe indicar por pantalla en algún lugar el valor de la moneda para aquel día, así como el resultado de la operación, es decir:

Monto Conversión: mon1,75 UF

Fecha Conversión: 03-11-2021, valor moneda $30.217,89

Monto: $52.881

Se deben tener 2 menús la pantalla de conversión y un historial de conversiones realizadas por la aplicación el cual puede ser exportado a excel (no obligatorio); dicho historial debe contener:

- Fecha y hora de la actividad.

- Usuario de la solicitud

- Monto de origen

- Fecha conversión (la seleccionada)

- Valor de la moneda

- Monto de la conversión El servicio a utilizar para obtener la conversión de la moneda de origen es: https://mindicador.cl/, si tienes otra bienvenido.


El objetivo desde el frontend esta logrado, no así el backend.

FrontEnd:
dependencias: 
  "dependencies": {
    "formik": "2.2.9",
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "swr": "1.2.2",
    "yup": "0.32.11"
  },
  "devDependencies": {
    "autoprefixer": "10.4.2",
    "eslint": "8.9.0",
    "eslint-config-next": "12.1.0",
    "postcss": "8.4.6",
    "tailwindcss": "3.0.23"
  }
}

- ¿Que hace el frontEnd?
- Operaciones: La funcionalidad principal es sencilla, Dos input, uno del tipo num y otra del tipo date.
Una controla el monto a transformar(Puede ser decimal) y una fecha especifica (al pasarse de los limites la apí responde con un array vacio, esto esta controlado).
Luego de enviar esta información se realiza una peticion a una api de 3eros donde se obtiene información sobre los valores de la moneda de cambio para poder realizar las operaciones de multiplicar.
Formik se encarga de la gestión del formulario. tras enviarse los datos estos pasan por un componente llamado "Resultado" quien se encarga de procesar los datos.
-Iniciar sesión: El frontend iba a tener una relación directa con una api creada por mí para poder iniciar sesión solo ingresando un nombre de usuario, este luego desbloquea un boton donde se ofrece descargar los datos de sus operaciones durante la sesión en formato xls.



- ¿Cual era la idea y el trabajo del backend?

-El frontend ofreceria un sistema de logeo sencillo: Agregar un nombre de usuario, el backend se encargaba de limitar la sesión de este usuario entre 3 y 5 horas para poder obtener las operaciónes que necesita. 
Tambien así, se podrian realizar operaciones anonimas sin necesidad de que estas fuesen almacenadas en la sesión del usuario.
Llamamos operaciones anonimas a todas aquellas operaciones que se realizarían sin iniciar una sesión.
-El backend iba a encargarse de almacenar a los modelos de : Usuario, sesión y operaciones.
Estas relacionandose de la siguiente forma:

- Usuario hasMany operaciones;
- operaciones belongsTo Usuario;
- Usuario belongsTo sesion;

De esta forma nos aseguramos que cuando una sesión expire se elimine en cascada todas las operaciones de una sesión expirada.

En conclusión: Me pudo alcanzar el tiempo para realizar la aplicación completa, pero una librería fue el palo en la rueda. Sin poder resolver el problema, sospecho en que hay algo que se me escapo, dado que es la primera vez que trabajo con sesiones. Quizas deberia haber intentado con otra base de datos o con algo más sencillo. Pero me gusto aceptar el reto con ambición.
Espero su respuestas con ansias. Muchas gracias por la oportunidad, espero poder convencerlos con mi esfuerzo.






