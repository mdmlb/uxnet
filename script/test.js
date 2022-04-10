import {
    getFirestore,
    doc,
    collection,
    addDoc,
    getDocs,
    getDoc,
    setDoc
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";



const auth = getAuth()
const db = getFirestore();
var userInfo;

//GAME
let contador = 0;

let texto0Actual;
let texto1Actual;
let texto2Actual;
let texto3Actual;
let texto4Actual;
let texto5Actual;
let texto6Actual;
let img;
let puntajeactual;
let nivelActual;
let nivel;

//FINAL SCORE
let aciertos = 0;


//ROLS
let uxRoles = [];

//UX RESEARCHER
let uxresearcher = 0;
let ur1 = 0;
let ur2 = 0;
let ur3 = 0;
let ur4 = 0;
let ur5 = 0;
let ur6 = 0;
let ur7 = 0;
let ur8 = 0;
let ur9 = 0;
let ur10 = 0;

//CONTENT STRATEGIST
let contentstrategist = 0;
let cs1 = 0;
let cs2 = 0;
let cs3 = 0;
let cs4 = 0;
let cs5 = 0;
let cs6 = 0;
let cs7 = 0;
let cs8 = 0;
let cs9 = 0;
let cs10 = 0;

//INTERACTION DESIGNER
let interactiondesigner = 0;
let id1 = 0;
let id2 = 0;
let id3 = 0;
let id4 = 0;
let id5 = 0;
let id6 = 0;
let id7 = 0;
let id8 = 0;
let id9 = 0;
let id10 = 0;

//UI DESIGNER
let uidesigner = 0;
let ud1 = 0;
let ud2 = 0;
let ud3 = 0;
let ud4 = 0;
let ud5 = 0;
let ud6 = 0;
let ud7 = 0;
let ud8 = 0;
let ud9 = 0;
let ud10 = 0;

//UX LEAD
let uxlead = 0;
let ul1 = 0;
let ul2 = 0;
let ul3 = 0;
let ul4 = 0;
let ul5 = 0;
let ul6 = 0;
let ul7 = 0;
let ul8 = 0;
let ul9 = 0;
let ul10 = 0;



//SKILLS

let uxSkills = [];

//Investigacion cuantitativa
let invescuant = 0;
let ict1 = 0;
let ict2 = 0;
let ict3 = 0;
let ict4 = 0;

//investigacion cualitativa
let invescual = 0;
let icl1 = 0;
let icl2 = 0;
let icl3 = 0;
let icl4 = 0;

//conocimiento en psicologia
let conopsic = 0;
let csp1 = 0;

//comunicacion escrita
let comuesc = 0;
let ce1 = 0;
let ce2 = 0;
let ce3 = 0;
let ce4 = 0;
let ce5 = 0;
let ce6 = 0;
let ce7 = 0;
let ce8 = 0;
let ce9 = 0;

//comunicacion oral
let comuora = 0;
let co1 = 0;
let co2 = 0;
let co3 = 0;
let co4 = 0;
let co5 = 0;

//comunicacion visual
let comuvis = 0;
let cv1 = 0;
let cv2 = 0;
let cv3 = 0;
let cv4 = 0;
let cv5 = 0;
let cv6 = 0;
let cv7 = 0;
let cv8 = 0;
let cv9 = 0;
let cv10 = 0;

//analisis de datos
let analidata = 0;
let ad1 = 0;
let ad2 = 0;

//escucha activa
let escuchaa = 0;
let ea1 = 0;

//estructuracion de la informacion
let estruinfo = 0;
let ei1 = 0;
let ei2 = 0;
let ei3 = 0;
let ei4 = 0;
let ei5 = 0;
let ei6 = 0;
let ei7 = 0;

//prototipado
let prototipado = 0;
let proto1 = 0;
let proto2 = 0;
let proto3 = 0;
let proto4 = 0;
let proto5 = 0;
let proto6 = 0;
let proto7 = 0;

//conocimiento en interaccion
let conointera = 0;
let ci1 = 0;
let ci2 = 0;
let ci3 = 0;
let ci4 = 0;
let ci5 = 0;
let ci6 = 0;
let ci7 = 0;
let ci8 = 0;

//capacidad de gestion
let capagest = 0;
let cg1 = 0;
let cg2 = 0;
let cg3 = 0;
let cg4 = 0;
let cg5 = 0;

//negociacion
let neg = 0;
let n1 = 0;
let n2 = 0;
let n3 = 0;

//liderazgo
let lid = 0;
let l1 = 0;
let l2 = 0;
let l3 = 0;
let l4 = 0;
let l5 = 0;

//habilidades en comun

//creatividad
let creati = 0;
let c1 = 0;

//actitud critica
let actcri = 0;
let ac1 = 0;

//adaptacion al cambio
let adapcam = 0;
let adc1 = 0;

//empatia
let empatia = 0;
let e1 = 0;

//manejo del tiempo
let mantim = 0;
let mm1 = 0;

//trabajo en equipo
let trabajoequipo = 0;
let t1 = 0;
let t2 = 0;

//Resistencia al trabajo bajo presion
let trabajopre = 0;
let tbp1 = 0;

//vision al futuro
let visfutu = 0;
let vf1 = 0;

//RESPUESTA
let respuestacorrecta;


const preguntas = [
    //UX RESEARCHER
    //1
    {
        pregunta: 'A qué método de investigación corresponde esta definición: “Consiste en comparar dos versiones de una misma página web o aplicación para comprobar cuál de las dos versiones es más eficiente. Estas variaciones se muestran de forma aleatoria a los distintos usuarios de la página web.”',
        src: '../../../img/test/vacio.svg',
    },
    //2
    {
        pregunta: '¿Del 1 al 6, qué tan de acuerdo estás con la siguiente frase? Mis habilidades de comunicación y conocimientos de psicología contribuyen en el desarrollo de la etapa de investigación de un proyecto. Siendo 1 nada de acuerdo, y 6 muy de acuerdo.',
        src: '../../../img/test/vacio.svg',
    },
    //3
    {
        pregunta: 'Ha llegado el último reporte de ventas de tu app de deporte, y un miembro de tu equipo tenía la tarea de presentar visualmente los países en los que más se ha vendido la app el último año. Esta persona te muestra el gráfico a continuación, ¿Cuál de las siguientes sugerencias es la más adecuada para presentar mejor la información?',
        src: '../../../img/test/pregunta3.svg',
    },
    //4
    {
        pregunta: 'Trabajas en una empresa de videojuegos, en la que últimamente se ha estado pensando en añadir una nueva funcionalidad a uno de sus videojuegos más vendidos, para conocer los pensamientos, opiniones y preferencias de los usuarios sobre esta nueva funcionalidad, decides utilizar el método de investigación:',
        src: '../../../img/test/vacio.svg',
    },
    //5
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Muchos me consideran una persona que sabe escuchar a los demás”',
        src: '../../../img/test/vacio.svg',
    },
    //6
    {
        pregunta: 'De acuerdo al último reporte de ventas de tu app de aprendizaje de idiomas, se descubrió que las instituciones educativas como colegios e institutos tecnológicos son los que más compran tu app. ¿Qué método usarías para recoger información y así entender cómo usan los usuarios tu app en estos ambientes?',
        src: '../../../img/test/vacio.svg',
    },
    //7
    {
        pregunta: 'Lee la siguiente frase: El tratamiento de datos personales dentro del aplicativo móvil debe estar regido mediante el marco legal de la Ley 1581 del 2012. ¿La anterior frase corresponde a?. ',
        src: '../../../img/test/vacio.svg',
    },
    //8
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Disfruto de reunir información para identificar el origen de un problema en particular”',
        src: '../../../img/test/vacio.svg',
    },
    //9
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Antes de avanzar a otras fases de un proyecto, me gusta tener una clara comprensión del problema”',
        src: '../../../img/test/vacio.svg',
    },
    //10
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Disfruto de hablar con los usuarios, durante la investigación de un proyecto, para conocer sus problemas, pensamientos, sentimientos y emociones”',
        src: '../../../img/test/vacio.svg',
    },

    //CONTENT STRATEGIST
    //11
    {
        pregunta: 'Una marca de ropa, que se define como fresca, divertida y juvenil, desea poner en su página principal un anuncio indicando que su colección llamada “Erizo” tiene un 50% de descuento. Escoge cuál de las siguientes opciones sería la más adecuada para la descripción de este anuncio.',
        src: '../../../img/test/pregunta11.svg',
    },
    //12
    {
        pregunta: 'Teniendo en cuenta la siguiente respuesta, de la sección de FAQ del producto de Cards Against Humanity, cuál crees que es el tono que fue usado para hacer este copy:',
        src: '../../../img/test/pregunta12.svg',
    },
    //13
    {
        pregunta: '¿Del 1 al 6, qué tan cómodo te sientes al realizar copywriting? Siendo 1 nada cómodo, y 6 muy cómodo.',
        src: '../../../img/test/vacio.svg',
    },
    //14
    {
        pregunta: '¿Del 1 al 6, qué tan de acuerdo estás con la siguiente frase? Soy capaz de definir y transmitir la personalidad de una marca a través de mi escritura. Siendo 1 nada de acuerdo, y 6 muy de acuerdo.',
        src: '../../../img/test/vacio.svg',
    },
    //15
    {
        pregunta: '¿Del 1 al 6, qué tan de acuerdo estás con la siguiente frase? Disfruto usar la empatía, datos, metas de la empresa y lógica para crear textos. Siendo 1 nada de acuerdo, y 6 muy de acuerdo.',
        src: '../../../img/test/vacio.svg',
    },
    //16
    {
        pregunta: 'Trabajas para una librería online, y eres el encargado de escribir el mensaje de error que le aparecerá a los usuarios cuando escriben una búsqueda que no arroja resultados. ¿Cuál de las siguientes acciones NO harías al escribir este mensaje de error?',
        src: '../../../img/test/vacio.svg',
    },
    //17
    {
        pregunta: 'Trabajas para una pastelería llamada Sugary, que pronto cumplirá 50 años, por lo que quieren dar descuentos a sus clientes durante ese día. Debido a lo anterior te piden revisar el mensaje que enviarán a sus clientes ¿Cuántos errores de ortografía puedes distinguir en el siguiente texto?',
        src: '../../../img/test/pregunta17.svg',
    },
    //18
    {
        pregunta: '¿Cuál de las siguientes llamadas a la acción es más probable que incite al usuario a dar click?',
        src: '../../../img/test/pregunta18.svg',
    },
    //19
    {
        pregunta: 'La siguiente es una imagen con diferentes fragmentos de un mismo newsletter, correspondiente al sitio web de The Ringer ¿En qué orden los unirías de manera que la información esté correctamente distribuida para que el usuario pueda entender fácilmente?',
        src: '../../../img/test/pregunta19.svg',
    },
    //20
    {
        pregunta: 'Estás rediseñando el menú global de la web de una papelería, ¿Cuáles crees que serían las etiquetas más acordes para los siguientes grupos de productos?',
        src: '../../../img/test/pregunta20.svg',
    },

    //INTERACTION DESIGNER
    //21
    {
        pregunta: '¿Cuántas de las siguientes herramientas de diseño y prototipado enlistadas a continuación sabes usar eficientemente?: Figma, Illustrator, Photoshop, Adobe XD, Sketch, Axure, Mockplus, Proto.io',
        src: '../../../img/test/vacio.svg',
    },
    //22
    {
        pregunta: '¿Cuándo se convierte un wireframe en un mockup?',
        src: '../../../img/test/vacio.svg',
    },
    //23
    {
        pregunta: 'Estás diseñando una aplicación para una biblioteca y quieres asegurarte de que la experiencia de registro sea reconocible para el usuario y funcione correctamente. ¿Qué podrías hacer y cómo implementarías esta característica en la aplicación?',
        src: '../../../img/test/vacio.svg',
    },
    //24
    {
        pregunta: '¿Qué es affordance?',
        src: '../../../img/test/vacio.svg',
    },
    //25
    {
        pregunta: '¿Cómo se podría mejorar este wireframe presentado a continuación?',
        src: '../../../img/test/pregunta25.svg',
    },
    //26
    {
        pregunta: 'Cuál es el nombre de lo que está representando en la imagen presentada a continuación:',
        src: '../../../img/test/pregunta26.svg',
    },
    //27
    {
        pregunta: 'Cuál principio de usabilidad de Nielsen se ve mayormente reflejado en la imagen inferior',
        src: '../../../img/test/pregunta27.svg',
    },
    //28
    {
        pregunta: 'Selecciona el nombre del patrón de interacción presentado en la imagen a continuación:',
        src: '../../../img/test/pregunta28.svg',
    },
    //29
    {
        pregunta: '¿Cuál es el propósito principal de los wireframes de alta fidelidad?',
        src: '../../../img/test/vacio.svg',
    },
    //30
    {
        pregunta: 'Cuál de los siguientes es un tipo de sistema de organización ambiguo',
        src: '../../../img/test/vacio.svg',
    },

    //UI DESIGNER
    //31
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Me gusta estar al tanto de las últimas tendencias de diseño, por lo que sigo a varias cuentas en redes sociales dedicadas a ello”',
        src: '../../../img/test/vacio.svg',
    },
    //32
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Transformar ideas en acción es lo que más disfruto.”',
        src: '../../../img/test/vacio.svg',
    },
    //33
    {
        pregunta: 'Al crear un formulario para un sitio web, ¿cuál de estos dos diseños recomendaría?',
        src: '../../../img/test/pregunta33.svg',
    },
    //34
    {
        pregunta: 'Una marca de joyería llamada Eleganx, la cual se describe como elegante, sofisticada y prestigiosa, te contacta para el rediseño de su logo. ¿Cuál tipografía crees que es la más adecuada para esta marca?',
        src: '../../../img/test/pregunta34.svg',
    },
    //35
    {
        pregunta: 'A continuación se presentan 4 pantallas, selecciona la que consideres es la que está mejor diseñada',
        src: '../../../img/test/pregunta35.svg',
    },
    //36
    {
        pregunta: 'Un amigo tuyo, el cual es abogado, quiere que le diseñes su branding personal. Tu amigo se identifica principalmente con 3 palabras: Honesto, profesional y práctico. ¿Cuál de las siguientes paletas de colores crees que se ajusta mejor a tu amigo?',
        src: '../../../img/test/pregunta36.svg',
    },
    //37
    {
        pregunta: '¿Qué nombre recibe el esquema de colores resaltado a continuación?',
        src: '../../../img/test/pregunta37.svg',
    },
    //38
    {
        pregunta: 'Selecciona a qué hacen referencia estas dos imágenes:',
        src: '../../../img/test/pregunta38.svg',
    },
    //39
    {
        pregunta: 'Elige a qué estilos de tipografía corresponden a cada una de las opciones de la siguiente imagen:',
        src: '../../../img/test/pregunta39.svg',
    },
    //40
    {
        pregunta: '¿Cuál de los siguientes botones es más probable que incite al usuario a darle click?',
        src: '../../../img/test/pregunta40.svg',
    },


    //UX LEAD
    //41
    {
        pregunta: '¿Del 1 al 6, qué tan cómodo te sientes justificando tus diseños oralmente? Siendo 1 nada cómodo, y 6 muy cómodo.',
        src: '../../../img/test/vacio.svg',
    },
    //42
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Tengo conocimientos básicos que pueden llevar a desarrollar todas las etapas de la metodología del doble diamante.”',
        src: '../../../img/test/vacio.svg',
    },
    //43
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Generalmente no tengo problema y me siento cómodo/a cuando tengo que hablar en público”',
        src: '../../../img/test/vacio.svg',
    },
    //44
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “A la hora de exponer diferentes puntos de vista me gusta exponer el mío y escuchar el de los demás para ver si así se genera una nueva visión al grupo.”',
        src: '../../../img/test/vacio.svg',
    },
    //45
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Cuando trabajo con un equipo, animo a todos a trabajar hacia los mismos objetivos generales.”',
        src: '../../../img/test/vacio.svg',
    },
    //46
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Soy alguien a quien la gente acude cuando se necesita tomar una decisión.”',
        src: '../../../img/test/vacio.svg',
    },
    //47
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “En una discusión, ceder no es señal de debilidad”',
        src: '../../../img/test/vacio.svg',
    },
    //48
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Suelo asumir la responsabilidad para resolver conflictos en mi equipo, en vez de ignorar los problemas o dejarle la responsabilidad sobre estos a otros”',
        src: '../../../img/test/vacio.svg',
    },
    //49
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Frecuentemente ocupo posiciones de liderazgo, ya que soy bueno guiando a las personas para tener un proyecto exitoso”',
        src: '../../../img/test/vacio.svg',
    },
    //50
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Las personas dentro de mis equipos de trabajo me consideran un modelo a seguir.”',
        src: '../../../img/test/vacio.svg',
    },

    //HABILIDADES EN COMUN
    //51
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Disfruto de usar mi imaginación para producir muchas ideas.”',
        src: '../../../img/test/vacio.svg',
    },
    //52
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Procuro mejorar en las habilidades en las que tengo falencias, tomando acciones para perfeccionarlas (tomar cursos, investigar más del tema en internet, etc.)”',
        src: '../../../img/test/vacio.svg',
    },
    //53
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Cuando las circunstancias cambian, puedo adaptarme para saber qué hacer.”',
        src: '../../../img/test/vacio.svg',
    },
    //54
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Siempre muestro empatía con las necesidades, sentimientos y motivaciones de los demás y me intereso activamente por sus preocupaciones.”',
        src: '../../../img/test/vacio.svg',
    },
    //55
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Administro efectivamente mi tiempo, por lo que generalmente planeo las cosas con anticipación”',
        src: '../../../img/test/vacio.svg',
    },
    //56
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Me siento más cómodo trabajando en grupo que solo”',
        src: '../../../img/test/vacio.svg',
    },
    //57
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Contribuyo de manera efectiva a las reuniones cuando no soy el líder. No trato de imponerme, ni dejo que los demás hagan todo”',
        src: '../../../img/test/vacio.svg',
    },
    //58
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Soy capaz de mantenerme tranquilo en situaciones de mucha presión o estrés”',
        src: '../../../img/test/vacio.svg',
    },
    //59
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Antes de tomar una decisión considero todas las variables positivas y negativas que pueda traer como consecuencia esta decisión”',
        src: '../../../img/test/vacio.svg',
    }
];

const respuestas = [
    //UX RESEARCHER
    //1
    {
        respt1: 'Tree-testing',
        respt2: 'Investigación comparativa',
        respt3: 'Investigación correlacional',
        respt4: 'A/B testing - Prueba A/B',
        respt5: 'Ninguna de las anteriores',
        respt6: 'No lo sé'
    },
    //2
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //3
    {
        respt1: 'Poner el año al que corresponde la información',
        respt2: 'Cambiar los colores del gráfico',
        respt3: 'Poner los porcentajes dentro del gráfico',
        respt4: 'Cambiar el tipo de gráfico',
        respt5: 'Quitar los decimales de los números',
        respt6: 'Ninguna de las anteriores'
    },
    //4
    {
        respt1: 'Prueba de usabilidad',
        respt2: 'Customer journey map',
        respt3: 'Encuesta',
        respt4: 'Focus group',
        respt5: 'Todas las anteriores',
        respt6: 'Ninguna de las anteriores'
    },
    //5
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //6
    {
        respt1: 'Encuesta',
        respt2: 'Entrevista',
        respt3: 'Focus group',
        respt4: 'Observación contextual',
        respt5: 'Todas las anteriores',
        respt6: 'Ninguna de las anteriores'
    },

    //7
    {
        respt1: 'Insight',
        respt2: 'Determinante',
        respt3: 'Objetivo específico',
        respt4: 'Requerimiento',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //8
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //9
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //10
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },

    //CONTENT STRATEGIST
    //11
    {
        respt1: 'Solo por hoy, tienes un 50% de descuento en las prendas de la colección “Erizo” ',
        respt2: '¡Siempre te tenemos en cuenta! Por eso, te damos un 50% de descuento en las prendas de nuestra colección “Erizo”',
        respt3: 'Alguna ves quisiste un erizo de mascota? Si? Pues eso es un delito, asi que mejor te damos un 50% de descuento en nuestra coleccion “Erizo”',
        respt4: '15% menos adorable que un erizo real, pero 60% más duradero y ahora con un 50% de descuento',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //12
    {
        respt1: 'Amigable',
        respt2: 'Honesto',
        respt3: 'Despreocupado',
        respt4: 'Irreverente',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //13
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //14
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //15
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //16
    {
        respt1: 'Usar algo de humor en el mensaje de error',
        respt2: 'Explicar al usuario por qué ha ocurrido el error',
        respt3: 'Dar posibles soluciones para salir del error',
        respt4: 'Poner el mensaje en mayúsculas para llamar la atención del usuario',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //17
    {
        respt1: '4',
        respt2: '5',
        respt3: '6',
        respt4: '7',
        respt5: '8',
        respt6: 'Ninguna de las anteriores'
    },
    //18
    {
        respt1: 'Explora una nueva colección',
        respt2: 'Conoce más',
        respt3: 'Empieza a comprar',
        respt4: 'Compra ahora y ahorra $4,50',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //19
    {
        respt1: '1, 2, 3, 4, 5, 6',
        respt2: '4, 5, 1, 3, 2, 6',
        respt3: '5, 4, 1, 2, 6, 3',
        respt4: '5, 3, 2, 1, 6, 4',
        respt5: '4, 5, 6, 3, 2, 1',
        respt6: 'No lo sé'
    },
    //20
    {
        respt1: '1- Plumas, 2- Lienzos, 3- Accesorios, 4- Pintura',
        respt2: '1- Oficina, 2- Para escribir, 3- Útiles, 4- Manualidades',
        respt3: '1- Instrumentos para escribir, 2, Bitácoras, 3- Complementos, 4- Pintura',
        respt4: '1- Escritura, 2- Papeles, 3- Escolar, 4- Arte',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },

    //INTERACTION DESIGNER
    //21
    {
        respt1: 'No sé usar ninguna',
        respt2: '1',
        respt3: '2',
        respt4: '3',
        respt5: 'Sé usar más de 3',
        respt6: 'Sé usar más de 3, además de otras que no se encuentran en la lista'
    },
    //22
    {
        respt1: 'Cuando se incorporan breakpoints responsivos que pueden ejecutarse en diferentes dispositivos y resoluciones',
        respt2: 'Cuando se enriquece con el diseño visual, interacciones y animaciones usando HTML y CSS',
        respt3: 'Cuando se agregan elementos en los que se puede hacer clic para permitir que el usuario experimente con el contenido y las interacciones en la interfaz',
        respt4: 'Cuando se incorporan esquemas de color, estilo visual y tipografía para mostrar cómo se verá el producto final',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //23
    {
        respt1: 'Hablar con compañeros de profesión para ver qué diseñarían y usar sus ideas en la aplicación',
        respt2: 'Reunirse con los usuarios para evaluar sus ideas sobre diferentes procesos de registro, luego sintetizar estos datos y aplicar los hallazgos al diseño de la aplicación',
        respt3: 'Evaluar varios diseños de sitios web para obtener los elementos de diseño que pueden usarse en el diseño de la aplicación, para así copiarlos y aplicarlos a todas las pantallas',
        respt4: 'Revisar algunas aplicaciones similares existentes y analizar sus procesos de registro y patrones de diseño, para después utilizar patrones similares a los procesos más utilizados y establecidos',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //24
    {
        respt1: 'Un conjunto de ayudas de navegación secundarias que indican a los usuarios dónde se encuentran en un sitio web',
        respt2: 'Una colección de materiales que ayudan a definir el estilo específico de un producto',
        respt3: 'Un sistema de líneas horizontales y verticales que proporcionan una base estructural para el diseño y el diseño de la página',
        respt4: 'Un grupo de propiedades de un objeto que ayudan al usuario a percibir lo que se puede hacer con el objeto',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //25
    {
        respt1: 'Enumerar los elementos y especificar a qué corresponden',
        respt2: 'Poner las imágenes, títulos y el texto del diseño final',
        respt3: 'Poner distintos colores a los elementos',
        respt4: 'Poner títulos, anotaciones y quitar el lorem ipsum por texto real',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //26
    {
        respt1: 'Userflow',
        respt2: 'Wireframes',
        respt3: 'Prototipo de alta',
        respt4: 'Wireflow',
        respt5: 'Mockup',
        respt6: 'No lo sé'
    },
    //27
    {
        respt1: 'Reconocer antes que recordar',
        respt2: 'Prevención de errores',
        respt3: 'Diseño estético y minimalista',
        respt4: 'Visibilidad del estado del sistema',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //28
    {
        respt1: 'Carrusel',
        respt2: 'Categorización',
        respt3: 'Modal',
        respt4: 'Cards',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //29
    {
        respt1: 'Para mostrar la estructura de la página',
        respt2: 'Para impresionar a las partes interesadas',
        respt3: 'Para mostrar el diseño final',
        respt4: 'Para mostrar las interacciones de los elementos UI',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //30
    {
        respt1: 'Organización geográfica',
        respt2: 'Organización cronológica',
        respt3: 'Organización social',
        respt4: 'Organización por tema',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },

    //UI DESIGNER
    //31
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //32
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //33
    {
        respt1: 'No escogería ninguno',
        respt2: 'Los dos están bien',
        respt3: 'El de la izquierda',
        respt4: 'El de la derecha',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //34
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //35
    {
        respt1: '4',
        respt2: '3',
        respt3: '2',
        respt4: '1',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //36
    {
        respt1: '4',
        respt2: '3',
        respt3: '2',
        respt4: '1',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //37
    {
        respt1: 'Colores análogos',
        respt2: 'Tríada',
        respt3: 'Colores monocromáticos',
        respt4: 'Colores complementarios',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //38
    {
        respt1: '1- Tracking, 2- Kerning',
        respt2: '1- Kerning, 2-Leading',
        respt3: '1- Leading, 2- Kerning',
        respt4: '1- Kerning, 2-Tracking',
        respt5: '1-Tracking, 2-Leading',
        respt6: 'No lo sé'
    },
    //39
    {
        respt1: '1-Decorativa, 2-Serif, 3-Sans-serif, 4-Script',
        respt2: '1-Sans-serif, 2-Decorativa, 3-Serif, 4-Script',
        respt3: '1-Serif, 2-Decorativa, 3-Sans-serif, 4-Script',
        respt4: '1-Serif, 2-Script, 3-Sans-serif, 4-Decorativa',
        respt5: 'No lo sé',
        respt6: 'Ninguna de las anteriores'
    },
    //40
    {
        respt1: 'Los tres colores incitarían al usuario a dar click',
        respt2: 'Ninguno de los tres incitarían al usuario a dar click',
        respt3: '1',
        respt4: '2',
        respt5: '3',
        respt6: 'No lo sé'
    },


    //UX LEAD
    //41
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //42
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //43
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //44
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //45
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //46
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //47
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //48
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //49
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //50
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },

    //HABILIDADES EN COMUN
    //51
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //52
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //53
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //54
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //55
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //56
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //57
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //58
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    },
    //59
    {
        respt1: '1',
        respt2: '2',
        respt3: '3',
        respt4: '4',
        respt5: '5',
        respt6: '6'
    }
];

const respuestascorrect = [
    //UX RESEARCHER
    //1
    {
        respt1: '1'
    },
    //2
    {
        respt1: '1'
    },
    //3
    {
        respt1: '1'
    },
    //4
    {
        respt1: '1'
    },
    //5
    {
        respt1: '1'
    },
    //6
    {
        respt1: '1'
    },
    //7
    {
        respt1: '1'
    },
    //8
    {
        respt1: '1'
    },
    //9
    {
        respt1: '1'
    },
    //10
    {
        respt1: '1'
    },

    //CONTENT STRATEGIST
    //41
    {
        respt1: '1'
    },
    //42
    {
        respt1: '1'
    },
    //43
    {
        respt1: '1'
    },
    //44
    {
        respt1: '1'
    },
    //45
    {
        respt1: '1'
    },
    //46
    {
        respt1: '1'
    },
    //47
    {
        respt1: '1'
    },
    //48
    {
        respt1: '1'
    },
    //49
    {
        respt1: '1'
    },
    //50
    {
        respt1: '1'
    },

    //INTERACTION DESIGNER
    //41
    {
        respt1: '1'
    },
    //42
    {
        respt1: '1'
    },
    //43
    {
        respt1: '1'
    },
    //44
    {
        respt1: '1'
    },
    //45
    {
        respt1: '1'
    },
    //46
    {
        respt1: '1'
    },
    //47
    {
        respt1: '1'
    },
    //48
    {
        respt1: '1'
    },
    //49
    {
        respt1: '1'
    },
    //50
    {
        respt1: '1'
    },

    //UI DESIGNER
    //41
    {
        respt1: '1'
    },
    //42
    {
        respt1: '1'
    },
    //43
    {
        respt1: '1'
    },
    //44
    {
        respt1: '1'
    },
    //45
    {
        respt1: '1'
    },
    //46
    {
        respt1: '1'
    },
    //47
    {
        respt1: '1'
    },
    //48
    {
        respt1: '1'
    },
    //49
    {
        respt1: '1'
    },
    //50
    {
        respt1: '1'
    },


    //UX LEAD
    //41
    {
        respt1: '1'
    },
    //42
    {
        respt1: '1'
    },
    //43
    {
        respt1: '1'
    },
    //44
    {
        respt1: '1'
    },
    //45
    {
        respt1: '1'
    },
    //46
    {
        respt1: '1'
    },
    //47
    {
        respt1: '1'
    },
    //48
    {
        respt1: '1'
    },
    //49
    {
        respt1: '1'
    },
    //50
    {
        respt1: '1'
    },

    //HABILIDADES EN COMUN
    //51
    {
        respt1: '1'
    },
    //52
    {
        respt1: '1'
    },
    //53
    {
        respt1: '1'
    },
    //54
    {
        respt1: '1'
    },
    //55
    {
        respt1: '1'
    },
    //56
    {
        respt1: '1'
    },
    //57
    {
        respt1: '1'
    },
    //58
    {
        respt1: '1'
    },
    //59
    {
        respt1: '1'
    }
];

const puntaje = [
    0, 20, 40, 60, 80, 100
];

//CAMBIAR CONTENIDO
const p = document.querySelector('.pregunta');

const r1 = document.querySelector('.respuesta1');
const r2 = document.querySelector('.respuesta2');
const r3 = document.querySelector('.respuesta3');
const r4 = document.querySelector('.respuesta4');
const r5 = document.querySelector('.respuesta5');
const r6 = document.querySelector('.respuesta6');
const imag = document.querySelector('.imagquestion');
const vamocontadr = document.querySelector('.contador')

function cambiarTexto() {
    if (contador < 59) {
        texto0Actual = preguntas[contador];
        texto1Actual = respuestas[contador];
        texto2Actual = respuestas[contador];
        texto3Actual = respuestas[contador];
        texto4Actual = respuestas[contador];
        texto5Actual = respuestas[contador];
        texto6Actual = respuestas[contador];
        nivelActual = preguntas[contador];
        puntajeactual = puntaje[nivel];

        let buenas = contador + 1;

        p.innerHTML = texto0Actual.pregunta;
        r1.innerHTML = texto1Actual.respt1;
        r2.innerHTML = texto2Actual.respt2;
        r3.innerHTML = texto3Actual.respt3;
        r4.innerHTML = texto4Actual.respt4;
        r5.innerHTML = texto5Actual.respt5;
        r6.innerHTML = texto6Actual.respt6;
        vamocontadr.innerHTML = "Pregunta " + buenas + "/59";


        imag.setAttribute('src', nivelActual.src);
    }
}
cambiarTexto();


//results

function graphic() {
    //////////////////////////////  Gráfico 2

    const ctx2 = document.getElementById('myChart2').getContext('2d');

    let uxValueRoles = [uxresearcher, contentstrategist, interactiondesigner, uidesigner, uxlead];
    console.log(uxValueRoles);

    //guardar los nombres de los roles de la base de datos en un arreglo
    let uxNameRoles = ["UX Researcher", "Content Strategist", "Interaction Designer", "UI Designer", "UX Lead"];
    console.log(uxNameRoles);

    //Datos que van dentro del gráfico de barras (con los arreglos creados antes)
    var rolesUX2 = {

        labels: uxNameRoles,
        datasets: [{
            //label: 'My First Dataset',
            data: uxValueRoles,
            backgroundColor: [
                "#694FFD",
                "#FF971D",
                "#94B9FF",
                "#EF6A77",
                "#2A1C7C"
            ],
            borderColor: '#04041B',
        }]
    };

    Chart.defaults.color = "white";

    //BARRA GRAFICA
    //Crear el gráfico de barras a partir de los datos anteriores (además aquí se ponen los estilos)
    const myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: rolesUX2,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true,
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: "rgba(100, 100, 100, 0.9)"
                    },
                },
                x: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    grid: {
                        color: "rgba(100, 100, 100, 0.9)"
                    },
                }
            }
        }

    })
}

function resultskills() {
    const bskill1 = document.querySelector('.bs_1');
    const bskill2 = document.querySelector('.bs_2');
    const bskill3 = document.querySelector('.bs_3');
    const bskill4 = document.querySelector('.bs_4');
    const bskill5 = document.querySelector('.bs_5');
    const bskill6 = document.querySelector('.bs_6');
    const bskill7 = document.querySelector('.bs_7');
    const bskill8 = document.querySelector('.bs_8');
    const bskill9 = document.querySelector('.bs_9');
    const bskill10 = document.querySelector('.bs_10');
    const bskill11 = document.querySelector('.bs_11');
    const bskill12 = document.querySelector('.bs_12');
    const bskill13 = document.querySelector('.bs_13');
    const bskill14 = document.querySelector('.bs_14');
    const bskill15 = document.querySelector('.bs_15');
    const bskill16 = document.querySelector('.bs_16');
    const bskill17 = document.querySelector('.bs_17');
    const bskill18 = document.querySelector('.bs_18');
    const bskill19 = document.querySelector('.bs_19');
    const bskill20 = document.querySelector('.bs_20');
    const bskill21 = document.querySelector('.bs_21');
    const bskill22 = document.querySelector('.bs_22');

    const porcentajeskill1 = document.querySelector('.bss_1');
    const porcentajeskill2 = document.querySelector('.bss_2');
    const porcentajeskill3 = document.querySelector('.bss_3');
    const porcentajeskill4 = document.querySelector('.bss_4');
    const porcentajeskill5 = document.querySelector('.bss_5');
    const porcentajeskill6 = document.querySelector('.bss_6');
    const porcentajeskill7 = document.querySelector('.bss_7');
    const porcentajeskill8 = document.querySelector('.bss_8');
    const porcentajeskill9 = document.querySelector('.bss_9');
    const porcentajeskill10 = document.querySelector('.bss_10');
    const porcentajeskill11 = document.querySelector('.bss_11');
    const porcentajeskill12 = document.querySelector('.bss_12');
    const porcentajeskill13 = document.querySelector('.bss_13');
    const porcentajeskill14 = document.querySelector('.bss_14');
    const porcentajeskill15 = document.querySelector('.bss_15');
    const porcentajeskill16 = document.querySelector('.bss_16');
    const porcentajeskill17 = document.querySelector('.bss_17');
    const porcentajeskill18 = document.querySelector('.bss_18');
    const porcentajeskill19 = document.querySelector('.bss_19');
    const porcentajeskill20 = document.querySelector('.bss_20');
    const porcentajeskill21 = document.querySelector('.bss_21');
    const porcentajeskill22 = document.querySelector('.bss_22');

    bskill1.innerHTML = comuora + "%";
    porcentajeskill1.style.width = comuora + "%";
    bskill2.innerHTML = comuesc + "%";
    porcentajeskill2.style.width = comuesc + "%";
    bskill3.innerHTML = empatia + "%";
    porcentajeskill3.style.width = empatia + "%";
    bskill4.innerHTML = trabajoequipo + "%";
    porcentajeskill4.style.width = trabajoequipo + "%";
    bskill5.innerHTML = analidata + "%";
    porcentajeskill5.style.width = analidata + "%";
    bskill6.innerHTML = escuchaa + "%";
    porcentajeskill6.style.width = escuchaa + "%";
    bskill7.innerHTML = neg + "%";
    porcentajeskill7.style.width = neg + "%";
    bskill8.innerHTML = actcri + "%";
    porcentajeskill8.style.width = actcri + "%";
    bskill9.innerHTML = conopsic + "%";
    porcentajeskill9.style.width = conopsic + "%";
    bskill10.innerHTML = visfutu + "%";
    porcentajeskill10.style.width = visfutu + "%";
    bskill11.innerHTML = capagest + "%";
    porcentajeskill11.style.width = capagest + "%";
    bskill12.innerHTML = comuvis + "%";
    porcentajeskill12.style.width = comuvis + "%";
    bskill13.innerHTML = mantim + "%";
    porcentajeskill13.style.width = mantim + "%";
    bskill14.innerHTML = adapcam + "%";
    porcentajeskill14.style.width = adapcam + "%";
    bskill15.innerHTML = prototipado + "%";
    porcentajeskill15.style.width = prototipado + "%";
    bskill16.innerHTML = estruinfo + "%";
    porcentajeskill16.style.width = estruinfo + "%";
    bskill17.innerHTML = creati + "%";
    porcentajeskill17.style.width = creati + "%";
    bskill18.innerHTML = conointera + "%";
    porcentajeskill18.style.width = conointera + "%";
    bskill19.innerHTML = trabajopre + "%";
    porcentajeskill19.style.width = trabajopre + "%";
    bskill20.innerHTML = lid + "%";
    porcentajeskill20.style.width = lid + "%";
    bskill21.innerHTML = invescuant + "%";
    porcentajeskill21.style.width = invescuant + "%";
    bskill22.innerHTML = invescual + "%";
    porcentajeskill22.style.width = invescual + "%";
}

let clicked = false;

//PASAR PAGINA
let btns = document.querySelector('.btn-testquestion');
const questioncont = document.querySelectorAll('.questioncont');


questioncont.forEach(function (elem, index) {

    elem.addEventListener('click', function (event) {
        respuestacorrecta = respuestas[contador];

        //console.log(elem,index)
        if (contador < 59) {

            //RESPUESTA 1
            if (elem.querySelector('.respuesta1')) {
                console.log("respuesta 1")

                //UX RESEARCHER
                /* Pregunta uno */
                if (contador == 0) {
                    console.log("pregunta 1 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //ux researcher
                            ur1 = 0;

                            //investigacion cuantitativa 30
                            ict1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dos */
                if (contador == 1) {
                    console.log("segunda pregunta")

                    if (!clicked) {
                        console.log("dio click respuesta 1")
                        clicked = true

                        if (clicked = true && ur2 == 0) {
                            //ux researcher
                            ur2 = 0;

                            //conocimiento en psicologia 100
                            csp1 = 0;

                            //comunicacion escrita 10
                            ce1 = 0;

                            //comunicacion oral 10
                            co1 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta tres */
                if (contador == 2) {
                    console.log("3 pregunta //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur3 = 0;

                            //analisis de datos 50
                            ad1 = 0;

                            //investigacion cuantitativa 30
                            ict2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta cuatro */
                if (contador == 3) {
                    console.log("4 pregunta //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur4 = 0;

                            //investigacion cualitativa 30
                            icl1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cinco */
                if (contador == 4) {
                    console.log("segunda pregunta respuesta 3")

                    if (!clicked) {
                        console.log("dio click")
                        clicked = true
                        console.log("puede")

                        if (clicked = true) {
                            //ux researcher
                            ur5 = 0;

                            //escucha activa 40
                            ea1 = 0;

                            console.log("valor de co1 " + ea1)
                            console.log("valor ur5 " + ur5)
                            console.log("valor de ux researcher " + uxresearcher)
                            clicked = false
                        }
                    }
                }

                /* Pregunta seis */
                if (contador == 5) {
                    console.log("pregunta 6 respuesta 1//////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur6 = 0;

                            //investigacion cualitativa
                            icl2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta siete */
                if (contador == 6) {
                    console.log("pregunta 7 respuesta 1 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur7 = 0;

                            //analisis de datos 50
                            ad2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta ocho */
                if (contador == 7) {
                    console.log("Primera 8 respuesta 1 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur8 = 0;

                            //investigacion cuantitativa 20
                            ict3 = 0;

                            //investigacion cualitativa 20
                            icl3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta nueve */
                if (contador == 8) {
                    console.log("Pregunta 9 respuesta 1 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur9 = 0;

                            //investigacion cuantitativa 20
                            ict4 = 0;

                            //investigacion cualitativa 20
                            icl4 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta diez */
                if (contador == 9) {
                    console.log("Pregunta 9 respuesta 1 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur10 = 0;

                            //Comunicacion oral 20
                            co2 = 0;

                            clicked = false
                        }
                    }
                }

                //CONTENT STRATEGIST
                /* Pregunta once */
                if (contador == 10) {
                    console.log("11 pregunta respuesta 1 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs1 = 0;

                            //Comunicacion escrita 10
                            ce2 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta doce */
                if (contador == 11) {
                    console.log("12 pregunta respuesta 1 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs2 = 0;

                            //Comunicacion escrita 10
                            ce3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta trece */
                if (contador == 12) {
                    console.log("13 pregunta respuesta 1////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs3 = 0;

                            //Comunicacion escrita 10
                            ce4 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta catorce */
                if (contador == 13) {
                    console.log("14 pregunta respuesta 4////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs4 = 0;

                            //Comunicacion escrita 20
                            ce5 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta quince */
                if (contador == 14) {
                    console.log("15 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs5 = 0;

                            //Comunicacion escrita 10
                            ce6 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dieciseis */
                if (contador == 15) {
                    console.log("16 pregunta respuesta 1 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs6 = 0;

                            //Comunicacion escrita 10
                            ce7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta diecisiete */
                if (contador == 16) {
                    console.log("17 pregunta respuesta 1 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs7 = 0;

                            //Comunicacion escrita 10
                            ce8 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dieciocho */
                if (contador == 17) {
                    console.log("18 pregunta respuesta 1 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs8 = 0;

                            //Comunicacion escrita 10
                            ce9 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta diecinueve */
                if (contador == 18) {
                    console.log("19 pregunta respuesta 1 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs9 = 0;

                            //estructuracion de la informacion 10
                            ei1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte */
                if (contador == 19) {
                    console.log("20 pregunta respuesta 1 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs10 = 0;

                            //estructuracion de la informacion 10
                            ei2 = 0;

                            clicked = false
                        }

                    }
                }

                //INTERACTION DESIGNER
                /* Pregunta veinte-uno */
                if (contador == 20) {
                    console.log("21 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id1 = 0;

                            //Prototipado 20
                            proto1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-dos */
                if (contador == 21) {
                    console.log("22 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id2 = 0;

                            //Prototipado 20
                            proto2 = 0;

                            //conocimiento de interaccion 10
                            ci1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-tres */
                if (contador == 22) {
                    console.log("23 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id3 = 0;

                            //conocimiento de interaccion 20
                            ci2 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-cuatro */
                if (contador == 23) {
                    console.log("24 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id4 = 0;

                            //conocimiento de interaccion 20
                            ci3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-cinco */
                if (contador == 24) {
                    console.log("25 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id5 = 0;

                            //Prototipado 20
                            proto3 = 0;

                            //estructuracion de la informacion 20
                            ei3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-seis */
                if (contador == 25) {
                    console.log("26 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id6 = 0;

                            //Prototipado 10
                            proto4 = 0;

                            //estructuracion de la informacion 20
                            ei4 = 0;

                            //conocimiento en interaccion 10
                            ci4 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-siete */
                if (contador == 26) {
                    console.log("27 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id7 = 0;

                            //conocimiento en interaccion 10
                            ci5 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-ocho */
                if (contador == 27) {
                    console.log("28 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id8 = 0;

                            //estructuracion de la informacion 20
                            ei5 = 0;

                            //conocimiento en interaccion 10
                            ci6 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-nueve */
                if (contador == 28) {
                    console.log("29 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id9 = 0;

                            //Prototipado 10
                            proto5 = 0;

                            //conocimiento en interaccion 10
                            ci7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta */
                if (contador == 29) {
                    console.log("30 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id10 = 0;

                            //estructuracion de la informacion 20
                            ei6 = 0;

                            //conocimiento en interaccion 10
                            ci8 = 0;

                            clicked = false
                        }

                    }
                }

                //UI DESGINER
                /* Pregunta treinta-uno */
                if (contador == 30) {
                    console.log("31 pregunta  respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud1 = 0;

                            //comunicacion visual 10
                            cv1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-dos */
                if (contador == 31) {
                    console.log("32 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud2 = 0;

                            //comunicacion visual 10
                            cv2 = 0;

                            //prototipado 10
                            proto6 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-tres */
                if (contador == 32) {
                    console.log("33 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud3 = 0;

                            //comunicacion visual 10
                            cv3 = 0;

                            //prototipado 10
                            proto7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-cuatro */
                if (contador == 33) {
                    console.log("34 pregunta  respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud4 = 0;

                            //comunicacion visual 10
                            cv4 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-cinco */
                if (contador == 34) {
                    console.log("35 pregunta  respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud5 = 0;

                            //comunicacion visual 10
                            cv5 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-seis */
                if (contador == 35) {
                    console.log("36 pregunta  respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud6 = 0;

                            //comunicacion visual 10
                            cv6 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-siete */
                if (contador == 36) {
                    console.log("37 pregunta  respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud7 = 0;

                            //comunicacion visual 10
                            cv7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-ocho */
                if (contador == 37) {
                    console.log("38 pregunta  respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud8 = 0;

                            //comunicacion visual 10
                            cv8 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-nueve */
                if (contador == 38) {
                    console.log("39 pregunta  respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud9 = 0;

                            //comunicacion visual 10
                            cv9 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta */
                if (contador == 39) {
                    console.log("40 pregunta  respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud10 = 0;

                            //comunicacion visual 10
                            cv10 = 0;

                            clicked = false
                        }

                    }
                }


                //UXLEAD
                /* Pregunta cuarenta-uno */
                if (contador == 40) {
                    console.log("41 pregunta  respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul1 = 0;

                            //comunicacion oral 30
                            co3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-dos */
                if (contador == 41) {
                    console.log("42 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul2 = 0;

                            //capacidad de gestion
                            cg1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-tres */
                if (contador == 42) {
                    console.log("43 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul3 = 0;

                            //comunicacion oral 30
                            co4 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-cuatro */
                if (contador == 43) {
                    console.log("44 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul4 = 0;

                            //comunicacion oral 10
                            co5 = 0;

                            //capacidad de gestion 10
                            cg2 = 0;

                            //negociacion 10
                            n1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-cinco */
                if (contador == 44) {
                    console.log("45 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul5 = 0;

                            //capacidad de gestion 10
                            cg3 = 0;

                            //liderazgo 20
                            l1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-seis */
                if (contador == 45) {
                    console.log("46 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul6 = 0;

                            //capacidad de gestion 10
                            cg4 = 0;

                            //liderazgo
                            l2 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-siete */
                if (contador == 46) {
                    console.log("47 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul7 = 0;

                            //negociacion 10
                            n2 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-ocho */
                if (contador == 47) {
                    console.log("48 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul8 = 0;

                            //capacidad de gestion 10
                            cg5 = 0;

                            //liderazgo
                            l3 = 0;

                            //negociacion 10
                            n3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-nueve */
                if (contador == 48) {
                    console.log("49 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul9 = 0;

                            //liderazgo
                            l4 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta */
                if (contador == 49) {
                    console.log("50 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true && ul10 == 0) {

                            //Content strategist
                            ul10 = 0;

                            //liderazgo
                            l5 = 0;

                            clicked = false
                        }

                    }
                }


                //HABILIDADES EN COMUN

                /* Pregunta cincuenta-uno */
                if (contador == 50) {
                    console.log("51 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Creatividad
                            c1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-dos */
                if (contador == 51) {
                    console.log("52 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //actitud critica
                            ac1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-tres */
                if (contador == 52) {
                    console.log("53 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //adaptacion al cambio
                            adc1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-cuatro */
                if (contador == 53) {
                    console.log("54 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Empatia
                            e1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-cinco */
                if (contador == 54) {
                    console.log("55 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Manejo del tiempo 100
                            mm1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-seis */
                if (contador == 55) {
                    console.log("56 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Trabajo en equipo
                            t1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-siete */
                if (contador == 56) {
                    console.log("57 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Trabajo en equipo
                            t2 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-ocho */
                if (contador == 57) {
                    console.log("58 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Resistencia al trabajo bajo presion
                            tbp1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-nueve */
                if (contador == 58) {
                    console.log("59 pregunta respuesta 1 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Vision al futuro
                            vf1 = 0;

                            clicked = false
                        }

                    }
                }


            }

            //RESPUESTA 2
            if (elem.querySelector('.respuesta2')) {

                //UX RESEARCHER
                /* Pregunta uno */
                if (contador == 0) {
                    console.log("pregunta 1 respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //ux researcher
                            ur1 = 0;

                            //investigacion cuantitativa 30
                            ict1 = 0;
                            clicked = false
                        }

                    }
                }

                /* Pregunta dos */
                if (contador == 1) {
                    console.log("segunda pregunta")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur2 = 2;

                            //conocimiento en psicologia 100
                            csp1 = 20;

                            //comunicacion escrita 10
                            ce1 = 2;

                            //comunicacion oral 10
                            co1 = 2;

                            clicked = false
                        }
                    }
                }

                /* Pregunta tres */
                if (contador == 2) {
                    console.log("3 pregunta respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur3 = 0;

                            //analisis de datos 50
                            ad1 = 0;

                            //investigacion cuantitativa 30
                            ict2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta cuatro */
                if (contador == 3) {
                    console.log("4 pregunta respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur4 = 0;

                            //investigacion cualitativa 30
                            icl1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cinco */
                if (contador == 4) {
                    console.log("segunda pregunta respuesta 3")

                    if (!clicked) {
                        console.log("dio click")
                        clicked = true
                        console.log("puede")

                        if (clicked = true) {
                            //ux researcher
                            ur5 = 2;

                            //escucha activa 40
                            ea1 = 20;

                            clicked = false
                        }
                    }
                }

                /* Pregunta seis */
                if (contador == 5) {
                    console.log("pregunta 6 respuesta 2//////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur6 = 0;

                            //investigacion cualitativa
                            icl2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta siete */
                if (contador == 6) {
                    console.log("pregunta 7 respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur7 = 0;

                            //analisis de datos 50
                            ad2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta ocho */
                if (contador == 7) {
                    console.log("Primera 8 respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur8 = 2;

                            //investigacion cuantitativa 20
                            ict3 = 4;

                            //investigacion cualitativa 20
                            icl3 = 4;

                            clicked = false
                        }

                    }
                }

                /* Pregunta nueve */
                if (contador == 8) {
                    console.log("Pregunta 9 respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur9 = 2;

                            //investigacion cuantitativa 20
                            ict4 = 4;

                            //investigacion cualitativa 20
                            icl4 = 4;

                            clicked = false
                        }
                    }
                }

                /* Pregunta diez */
                if (contador == 9) {
                    console.log("Pregunta 9 respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur10 = 2;

                            //Comunicacion oral 20
                            co2 = 4;

                            clicked = false
                        }
                    }
                }


                //CONTENT STRATEGIST
                /* Pregunta once */
                if (contador == 10) {
                    console.log("11 pregunta respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs1 = 0;

                            //Comunicacion escrita 10
                            ce2 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta doce */
                if (contador == 11) {
                    console.log("12 pregunta respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs2 = 0;

                            //Comunicacion escrita 10
                            ce3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta trece */
                if (contador == 12) {
                    console.log("13 pregunta respuesta 2////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs3 = 2;

                            //Comunicacion escrita 10
                            ce4 = 2;

                            clicked = false
                        }

                    }
                }

                /* Pregunta catorce */
                if (contador == 13) {
                    console.log("14 pregunta respuesta 2////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs4 = 2;

                            //Comunicacion escrita 20
                            ce5 = 4;

                            clicked = false
                        }

                    }
                }

                /* Pregunta quince */
                if (contador == 14) {
                    console.log("15 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs5 = 2;

                            //Comunicacion escrita 10
                            ce6 = 2;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dieciseis */
                if (contador == 15) {
                    console.log("16 pregunta respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs6 = 0;

                            //Comunicacion escrita 10
                            ce7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta diecisiete */
                if (contador == 16) {
                    console.log("17 pregunta respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs7 = 0;

                            //Comunicacion escrita 10
                            ce8 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dieciocho */
                if (contador == 17) {
                    console.log("18 pregunta respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs8 = 0;

                            //Comunicacion escrita 10
                            ce9 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta diecinueve */
                if (contador == 18) {
                    console.log("19 pregunta respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs9 = 0;

                            //estructuracion de la informacion 10
                            ei1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte */
                if (contador == 19) {
                    console.log("20 pregunta respuesta 2 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs10 = 0;

                            //estructuración de la información 10
                            ei2 = 0;

                            clicked = false
                        }

                    }
                }

                //INTERACTION DESIGNER
                /* Pregunta veinte-uno */
                if (contador == 20) {
                    console.log("21 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id1 = 2;

                            //Prototipado 20
                            proto1 = 4;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-dos */
                if (contador == 21) {
                    console.log("22 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id2 = 0;

                            //Prototipado 20
                            proto2 = 0;

                            //conocimiento de interaccion 10
                            ci1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-tres */
                if (contador == 22) {
                    console.log("23 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id3 = 0;

                            //conocimiento de interaccion 20
                            ci2 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-cuatro */
                if (contador == 23) {
                    console.log("24 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id4 = 0;

                            //conocimiento de interaccion 20
                            ci3 = 0;

                            console.log("valor de id4 " + id4)
                            console.log("valor de interation designer " + interactiondesigner)
                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-cinco */
                if (contador == 24) {
                    console.log("25 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id5 = 0;

                            //Prototipado 20
                            proto3 = 0;

                            //estructuracion de la informacion 20
                            ei3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-seis */
                if (contador == 25) {
                    console.log("26 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id6 = 0;

                            //Prototipado 10
                            proto4 = 0;

                            //estructuracion de la informacion 20
                            ei4 = 0;

                            //conocimiento en interaccion 10
                            ci4 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-siete */
                if (contador == 26) {
                    console.log("27 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id7 = 0;

                            //conocimiento en interaccion 10
                            ci5 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-ocho */
                if (contador == 27) {
                    console.log("28 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id8 = 0;

                            //estructuracion de la informacion 20
                            ei5 = 0;

                            //conocimiento en interaccion 10
                            ci6 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-nueve */
                if (contador == 28) {
                    console.log("29 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id9 = 0;

                            //Prototipado 10
                            proto5 = 0;

                            //conocimiento en interaccion 10
                            ci7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta */
                if (contador == 29) {
                    console.log("30 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id10 = 0;

                            //estructuracion de la informacion 20
                            ei6 = 0;

                            //conocimiento en interaccion 10
                            ci8 = 0;

                            clicked = false
                        }

                    }
                }

                //UI DESGINER
                /* Pregunta treinta-uno */
                if (contador == 30) {
                    console.log("31 pregunta  respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud1 = 2;

                            //comunicacion visual 10
                            cv1 = 2;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-dos */
                if (contador == 31) {
                    console.log("32 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud2 = 2;

                            //comunicacion visual 10
                            cv2 = 2;

                            //prototipado 10
                            proto6 = 2;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-tres */
                if (contador == 32) {
                    console.log("33 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud3 = 0;

                            //comunicacion visual 10
                            cv3 = 0;

                            //prototipado 10
                            proto7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-cuatro */
                if (contador == 33) {
                    console.log("34 pregunta  respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud4 = 0;

                            //comunicacion visual 10
                            cv4 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-cinco */
                if (contador == 34) {
                    console.log("35 pregunta  respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud5 = 0;

                            //comunicacion visual 10
                            cv5 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-seis */
                if (contador == 35) {
                    console.log("36 pregunta  respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud6 = 0;

                            //comunicacion visual 10
                            cv6 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-siete */
                if (contador == 36) {
                    console.log("37 pregunta  respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud7 = 0;

                            //comunicacion visual 10
                            cv7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-ocho */
                if (contador == 37) {
                    console.log("38 pregunta  respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud8 = 0;

                            //comunicacion visual 10
                            cv8 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-nueve */
                if (contador == 38) {
                    console.log("39 pregunta  respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud9 = 0;

                            //comunicacion visual 10
                            cv9 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta */
                if (contador == 39) {
                    console.log("40 pregunta  respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud10 = 0;

                            //comunicacion visual 10
                            cv10 = 0;

                            clicked = false
                        }

                    }
                }


                //UXLEAD
                /* Pregunta cuarenta-uno */
                if (contador == 40) {
                    console.log("41 pregunta  respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul1 = 2;

                            //comunicacion oral 30
                            co3 = 6;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-dos */
                if (contador == 41) {
                    console.log("42 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul2 = 2;

                            //capacidad de gestion
                            cg1 = 4;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-tres */
                if (contador == 42) {
                    console.log("43 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul3 = 2;

                            //comunicacion oral 30
                            co4 = 6;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-cuatro */
                if (contador == 43) {
                    console.log("44 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul4 = 2;

                            //comunicacion oral 10
                            co5 = 2;

                            //capacidad de gestion 10
                            cg2 = 4;

                            clicked = false

                            //negociacion 10
                            n1 = 6;
                        }

                    }
                }

                /* Pregunta cuarenta-cinco */
                if (contador == 44) {
                    console.log("45 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul5 = 2;

                            //capacidad de gestion 10
                            cg3 = 4;

                            //liderazgo 20
                            l1 = 4;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-seis */
                if (contador == 45) {
                    console.log("46 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul6 = 2;

                            //capacidad de gestion 10
                            cg4 = 4;

                            //liderazgo
                            l2 = 4;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-siete */
                if (contador == 46) {
                    console.log("47 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul7 = 2;

                            //negociacion 10
                            n2 = 8;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-ocho */
                if (contador == 47) {
                    console.log("48 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul8 = 2;

                            //capacidad de gestion 10
                            cg5 = 4;

                            //liderazgo
                            l3 = 4;

                            //negociacion 10
                            n3 = 6;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-nueve */
                if (contador == 48) {
                    console.log("49 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul9 = 2;

                            //liderazgo
                            l4 = 4;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta */
                if (contador == 49) {
                    console.log("50 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul10 = 2;

                            //liderazgo
                            l5 = 4;

                            clicked = false
                        }

                    }
                }


                //HABILIDADES EN COMUN

                /* Pregunta cincuenta-uno */
                if (contador == 50) {
                    console.log("51 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Creatividad
                            c1 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-dos */
                if (contador == 51) {
                    console.log("52 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //actitud critica
                            ac1 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-tres */
                if (contador == 52) {
                    console.log("53 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //adaptacion al cambio
                            adc1 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-cuatro */
                if (contador == 53) {
                    console.log("54 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Empatia
                            e1 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-cinco */
                if (contador == 54) {
                    console.log("55 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Manejo del tiempo 100
                            mm1 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-seis */
                if (contador == 55) {
                    console.log("56 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Trabajo en equipo
                            t1 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-siete */
                if (contador == 56) {
                    console.log("57 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Trabajo en equipo
                            t2 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-ocho */
                if (contador == 57) {
                    console.log("58 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Resistencia al trabajo bajo presion
                            tbp1 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-nueve */
                if (contador == 58) {
                    console.log("59 pregunta respuesta 2 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Vision al futuro
                            vf1 = 20;

                            clicked = false
                        }

                    }
                }


            }

            //RESPUESTA 3
            if (elem.querySelector('.respuesta3')) {

                console.log("respuesta 3")
                //UX RESEARCHER
                /* Pregunta uno */
                if (contador == 0) {
                    console.log("pregunta 1 respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //ux researcher
                            ur1 = 0;

                            //investigacion cuantitativa 30
                            ict1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dos */
                if (contador == 1) {
                    console.log("2 pregunta respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur2 = 4;

                            //conocimiento en psicologia 100
                            csp1 = 40;

                            //comunicacion escrita 10
                            ce1 = 4;

                            //comunicacion oral 10
                            co1 = 4;

                            clicked = false
                        }
                    }
                }

                /* Pregunta tres */
                if (contador == 2) {
                    console.log("3 pregunta respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur3 = 0;

                            //analisis de datos 50
                            ad1 = 0;

                            //investigacion cuantitativa 30
                            ict2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta cuatro */
                if (contador == 3) {
                    console.log("4 pregunta respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur4 = 0;

                            //investigacion cualitativa 30
                            icl1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cinco */
                if (contador == 4) {
                    console.log("5 pregunta respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur5 = 4;

                            //escucha activa 40
                            ea1 = 40;

                            clicked = false
                        }
                    }
                }

                /* Pregunta seis */
                if (contador == 5) {
                    console.log("pregunta 6 respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur6 = 0;

                            //investigacion cualitativa
                            icl2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta siete */
                if (contador == 6) {
                    console.log("pregunta 7 respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur7 = 0;

                            //analisis de datos 50
                            ad2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta ocho */
                if (contador == 7) {
                    console.log("Primera 8 respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur8 = 4;

                            //investigacion cuantitativa 20
                            ict3 = 8;

                            //investigacion cualitativa 20
                            icl3 = 8;

                            clicked = false
                        }

                    }
                }

                /* Pregunta nueve */
                if (contador == 8) {
                    console.log("Pregunta 9 respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur9 = 4;

                            //investigacion cuantitativa 20
                            ict4 = 8;

                            //investigacion cualitativa 20
                            icl4 = 8;

                            clicked = false
                        }
                    }
                }

                /* Pregunta diez */
                if (contador == 9) {
                    console.log("Pregunta 9 respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur10 = 4;

                            //Comunicacion oral 20
                            co2 = 8;

                            clicked = false
                        }
                    }
                }


                //CONTENT STRATEGIST
                /* Pregunta once */
                if (contador == 10) {
                    console.log("11 pregunta respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs1 = 0;

                            //Comunicacion escrita 10
                            ce2 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta doce */
                if (contador == 11) {
                    console.log("12 pregunta respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs2 = 0;

                            //Comunicacion escrita 10
                            ce3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta trece */
                if (contador == 12) {
                    console.log("13 pregunta respuesta 3////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs3 = 4;

                            //Comunicacion escrita 10
                            ce4 = 4;

                            clicked = false
                        }

                    }
                }

                /* Pregunta catorce */
                if (contador == 13) {
                    console.log("14 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs4 = 4;

                            //Comunicacion escrita 20
                            ce5 = 8;

                            clicked = false
                        }

                    }
                }

                /* Pregunta quince */
                if (contador == 14) {
                    console.log("15 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs5 = 4;

                            //Comunicacion escrita 10
                            ce6 = 4;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dieciseis */
                if (contador == 15) {
                    console.log("16 pregunta respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs6 = 0;

                            //Comunicacion escrita 10
                            ce7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta diecisiete */
                if (contador == 16) {
                    console.log("17 pregunta respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs7 = 0;

                            //Comunicacion escrita 10
                            ce8 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dieciocho */
                if (contador == 17) {
                    console.log("18 pregunta respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs8 = 0;

                            //Comunicacion escrita 10
                            ce9 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta diecinueve */
                if (contador == 18) {
                    console.log("19 pregunta respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs9 = 0;

                            //estructuracion de la informacion 10
                            ei1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte */
                if (contador == 19) {
                    console.log("20 pregunta respuesta 3 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs10 = 0;

                            //estructuración de la información 10
                            ei2 = 0;

                            clicked = false
                        }

                    }
                }

                //INTERACTION DESIGNER
                /* Pregunta veinte-uno */
                if (contador == 20) {
                    console.log("21 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id1 = 4;

                            //Prototipado 20
                            proto1 = 8;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-dos */
                if (contador == 21) {
                    console.log("22 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id2 = 0;

                            //Prototipado 20
                            proto2 = 0;

                            //conocimiento de interaccion 10
                            ci1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-tres */
                if (contador == 22) {
                    console.log("23 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id3 = 0;

                            //conocimiento de interaccion 20
                            ci2 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-cuatro */
                if (contador == 23) {
                    console.log("24 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id4 = 0;

                            //conocimiento de interaccion 20
                            ci3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-cinco */
                if (contador == 24) {
                    console.log("25 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id5 = 0;

                            //Prototipado 20
                            proto3 = 0;

                            //estructuracion de la informacion 20
                            ei3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-seis */
                if (contador == 25) {
                    console.log("26 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id6 = 0;

                            //Prototipado 10
                            proto4 = 0;

                            //estructuracion de la informacion 20
                            ei4 = 0;

                            //conocimiento en interaccion 10
                            ci4 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-siete */
                if (contador == 26) {
                    console.log("27 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id7 = 0;

                            //conocimiento en interaccion 10
                            ci5 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-ocho */
                if (contador == 27) {
                    console.log("28 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id8 = 0;

                            //estructuracion de la informacion 20
                            ei5 = 0;

                            //conocimiento en interaccion 10
                            ci6 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-nueve */
                if (contador == 28) {
                    console.log("29 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id9 = 0;

                            //Prototipado 10
                            proto5 = 0;

                            //conocimiento en interaccion 10
                            ci7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta */
                if (contador == 29) {
                    console.log("30 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id10 = 0;

                            //estructuracion de la informacion 20
                            ei6 = 0;

                            //conocimiento en interaccion 10
                            ci8 = 0;

                            clicked = false
                        }

                    }
                }

                //UI DESGINER
                /* Pregunta treinta-uno */
                if (contador == 30) {
                    console.log("31 pregunta  respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud1 = 4;

                            //comunicacion visual 10
                            cv1 = 4;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-dos */
                if (contador == 31) {
                    console.log("32 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud2 = 4;

                            //comunicacion visual 10
                            cv2 = 4;

                            //prototipado 10
                            proto6 = 4;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-tres */
                if (contador == 32) {
                    console.log("33 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud3 = 0;

                            //comunicacion visual 10
                            cv3 = 0;

                            //prototipado 10
                            proto7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-cuatro */
                if (contador == 33) {
                    console.log("34 pregunta  respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud4 = 0;

                            //comunicacion visual 10
                            cv4 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-cinco */
                if (contador == 34) {
                    console.log("35 pregunta  respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud5 = 0;

                            //comunicacion visual 10
                            cv5 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-seis */
                if (contador == 35) {
                    console.log("36 pregunta  respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud6 = 0;

                            //comunicacion visual 10
                            cv6 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-siete */
                if (contador == 36) {
                    console.log("37 pregunta  respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud7 = 0;

                            //comunicacion visual 10
                            cv7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-ocho */
                if (contador == 37) {
                    console.log("38 pregunta  respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud8 = 0;

                            //comunicacion visual 10
                            cv8 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-nueve */
                if (contador == 38) {
                    console.log("39 pregunta  respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud9 = 0;

                            //comunicacion visual 10
                            cv9 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta */
                if (contador == 39) {
                    console.log("40 pregunta  respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud10 = 0;

                            //comunicacion visual 10
                            cv10 = 0;

                            clicked = false
                        }

                    }
                }



                //UXLEAD
                /* Pregunta cuarenta-uno */
                if (contador == 40) {
                    console.log("41 pregunta  respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul1 = 4;

                            //comunicacion oral 30
                            co3 = 12;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-dos */
                if (contador == 41) {
                    console.log("42 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul2 = 4;

                            //capacidad de gestion
                            cg1 = 8;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-tres */
                if (contador == 42) {
                    console.log("43 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul3 = 4;

                            //comunicacion oral 30
                            co4 = 12;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-cuatro */
                if (contador == 43) {
                    console.log("44 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul4 = 4;

                            //comunicacion oral 10
                            co5 = 4;

                            //capacidad de gestion 10
                            cg2 = 8;

                            //negociacion 10
                            n1 = 12;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-cinco */
                if (contador == 44) {
                    console.log("45 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul5 = 4;

                            //capacidad de gestion 10
                            cg3 = 8;

                            //liderazgo 20
                            l1 = 8;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-seis */
                if (contador == 45) {
                    console.log("46 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul6 = 4;

                            //capacidad de gestion 10
                            cg4 = 8;

                            //liderazgo
                            l2 = 8;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-siete */
                if (contador == 46) {
                    console.log("47 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul7 = 4;

                            //negociacion 10
                            n2 = 16;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-ocho */
                if (contador == 47) {
                    console.log("48 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul8 = 4;

                            //capacidad de gestion 10
                            cg5 = 8;

                            //liderazgo
                            l3 = 8;

                            //negociacion 10
                            n3 = 12;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-nueve */
                if (contador == 48) {
                    console.log("49 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul9 = 4;

                            //liderazgo
                            l4 = 8;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta */
                if (contador == 49) {
                    console.log("50 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true && ul10 == 0) {

                            //Content strategist
                            ul10 = 4;

                            //liderazgo
                            l5 = 8;

                            clicked = false
                        }

                    }
                }


                //HABILIDADES EN COMUN

                /* Pregunta cincuenta-uno */
                if (contador == 50) {
                    console.log("51 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Creatividad
                            c1 = 40;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-dos */
                if (contador == 51) {
                    console.log("52 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //actitud critica
                            ac1 = 40;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-tres */
                if (contador == 52) {
                    console.log("53 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //adaptacion al cambio
                            adc1 = 40;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-cuatro */
                if (contador == 53) {
                    console.log("54 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Empatia
                            e1 = 40;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-cinco */
                if (contador == 54) {
                    console.log("55 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Manejo del tiempo 100
                            mm1 = 40;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-seis */
                if (contador == 55) {
                    console.log("56 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Trabajo en equipo
                            t1 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-siete */
                if (contador == 56) {
                    console.log("57 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Trabajo en equipo
                            t2 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-ocho */
                if (contador == 57) {
                    console.log("58 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Resistencia al trabajo bajo presion
                            tbp1 = 40;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-nueve */
                if (contador == 58) {
                    console.log("59 pregunta respuesta 3 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Vision al futuro
                            vf1 = 40;

                            clicked = false
                        }

                    }
                }


            }

            //RESPUESTA 4
            if (elem.querySelector('.respuesta4')) {

                //UX RESEARCHER

                /* Pregunta uno */
                if (contador == 0) {
                    console.log("pregunta 1 respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //ux researcher
                            ur1 = 10;

                            //investigacion cuantitativa 30
                            ict1 = 30;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dos*/
                if (contador == 1) {
                    console.log("pregunta 2 respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur2 = 6;

                            //conocimiento en psicologia 100
                            csp1 = 60;

                            //comunicacion escrita 10
                            ce1 = 6;

                            //comunicacion oral 10
                            co1 = 6;

                            clicked = false
                        }
                    }
                }

                /* Pregunta tres */
                if (contador == 2) {
                    console.log("3 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher&& ur3 == 0
                            ur3 = 10;

                            //analisis de datos 50
                            ad1 = 50;

                            //investigacion cuantitativa 30
                            ict2 = 30;

                            clicked = false
                        }
                    }
                }

                /* Pregunta cuatro */
                if (contador == 3) {
                    console.log("4 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher && ur4 == 0
                            ur4 = 10;

                            //investigacion cualitativa 30
                            icl1 = 30;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cinco */
                if (contador == 4) {
                    console.log("5 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur5 = 6;

                            //escucha activa 100
                            ea1 = 60;

                            clicked = false
                        }
                    }
                }

                /* Pregunta seis */
                if (contador == 5) {
                    console.log("pregunta 6 respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher && ur6 == 0
                            ur6 = 10;

                            //investigacion cualitativa
                            icl2 = 30;

                            clicked = false
                        }
                    }
                }

                /* Pregunta siete */
                if (contador == 6) {
                    console.log("pregunta 7 respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher && ur7 == 0
                            ur7 = 10;

                            //analisis de datos 50
                            ad2 = 50;

                            clicked = false
                        }
                    }
                }

                /* Pregunta ocho */
                if (contador == 7) {
                    console.log("Pregunta 8 respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur8 = 6;

                            //investigacion cuantitativa 20
                            ict3 = 12;

                            //investigacion cualitativa 20
                            icl3 = 12;

                            clicked = false
                        }

                    }
                }

                /* Pregunta nueve */
                if (contador == 8) {
                    console.log("Pregunta 9 respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur9 = 6;

                            //investigacion cuantitativa 20
                            ict4 = 12;

                            //investigacion cualitativa 20
                            icl4 = 12;

                            clicked = false
                        }
                    }
                }

                /* Pregunta diez */
                if (contador == 9) {
                    console.log("Pregunta 10 respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur10 = 6;

                            //Comunicacion oral 20
                            co2 = 12;

                            clicked = false
                        }
                    }
                }


                //CONTENT STRATEGIST

                /* Pregunta once */
                if (contador == 10) {
                    console.log("11 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && cs1 == 0
                            cs1 = 10;

                            //Comunicacion escrita 10
                            ce2 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta doce */
                if (contador == 11) {
                    console.log("12 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && cs2 == 0
                            cs2 = 10;

                            //Comunicacion escrita 10
                            ce3 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta trece */
                if (contador == 12) {
                    console.log("13 pregunta respuesta 4////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs3 = 6;

                            //Comunicacion escrita 10
                            ce4 = 6;

                            clicked = false
                        }

                    }
                }

                /* Pregunta catorce */
                if (contador == 13) {
                    console.log("14 pregunta respuesta 4////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs4 = 6;

                            //Comunicacion escrita 20
                            ce5 = 12;

                            clicked = false
                        }

                    }
                }

                /* Pregunta quince */
                if (contador == 14) {
                    console.log("15 pregunta respuesta 4////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs5 = 6;

                            //Comunicacion escrita 10
                            ce6 = 6;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dieciseis */
                if (contador == 15) {
                    console.log("16 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && cs6 == 0
                            cs6 = 10;

                            //Comunicacion escrita 10
                            ce7 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta diecisiete */
                if (contador == 16) {
                    console.log("17 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && cs7 == 0
                            cs7 = 10;

                            //Comunicacion escrita 10
                            ce8 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dieciocho */
                if (contador == 17) {
                    console.log("18 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && cs8 == 0
                            cs8 = 10;

                            //Comunicacion escrita 10
                            ce9 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta diecinueve */
                if (contador == 18) {
                    console.log("19 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && cs9 == 0
                            cs9 = 10;

                            //estructuracion de la informacion 10
                            ei1 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte */
                if (contador == 19) {
                    console.log("20 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && cs10 == 0
                            cs10 = 10;

                            //estructuración de la información 10
                            ei2 = 10;

                            clicked = false
                        }

                    }
                }


                //INTERACTION DESIGNER

                /* Pregunta veinte-uno */
                if (contador == 20) {
                    console.log("21 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id1 = 6;

                            //Prototipado 20
                            proto1 = 12;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-dos */
                if (contador == 21) {
                    console.log("22 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && id2 == 0
                            id2 = 10;

                            //Prototipado 20
                            proto2 = 20;

                            //conocimiento de interaccion 10
                            ci1 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-tres */
                if (contador == 22) {
                    console.log("23 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && id3 == 0
                            id3 = 10;

                            //conocimiento de interaccion 20
                            ci2 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-cuatro */
                if (contador == 23) {
                    console.log("24 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && id4 == 0
                            id4 = 10;

                            //conocimiento de interaccion 20
                            ci3 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-cinco */
                if (contador == 24) {
                    console.log("25 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && id5 == 0
                            id5 = 10;

                            //Prototipado 20
                            proto3 = 20;

                            //estructuracion de la informacion 20
                            ei3 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-seis */
                if (contador == 25) {
                    console.log("26 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && id6 == 0
                            id6 = 10;

                            //Prototipado 10
                            proto4 = 10;

                            //estructuracion de la informacion 20
                            ei4 = 20;

                            //conocimiento en interaccion 10
                            ci4 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-siete */
                if (contador == 26) {
                    console.log("27 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && id7 == 0
                            id7 = 10;

                            //conocimiento en interaccion 10
                            ci5 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-ocho */
                if (contador == 27) {
                    console.log("28 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && id8 == 0
                            id8 = 10;

                            //estructuracion de la informacion 20
                            ei5 = 20;

                            //conocimiento en interaccion 10
                            ci6 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-nueve */
                if (contador == 28) {
                    console.log("29 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && id9 == 0
                            id9 = 10;

                            //Prototipado 10
                            proto5 = 10;

                            //conocimiento en interaccion 10
                            ci7 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta */
                if (contador == 29) {
                    console.log("30 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && id10 == 0
                            id10 = 10;

                            //estructuracion de la informacion 20
                            ei6 = 20;

                            //conocimiento en interaccion 10
                            ci8 = 10;

                            clicked = false
                        }

                    }
                }



                //UI DESGINER

                /* Pregunta treinta-uno */
                if (contador == 30) {
                    console.log("31 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud1 = 6;

                            //comunicacion visual 10
                            cv1 = 6;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-dos */
                if (contador == 31) {
                    console.log("32 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud2 = 6;

                            //comunicacion visual 10
                            cv2 = 6;

                            //prototipado 10
                            proto6 = 6;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-tres */
                if (contador == 32) {
                    console.log("33 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && ud3 == 0
                            ud3 = 10;

                            //comunicacion visual 10
                            cv3 = 10;

                            //prototipado 10
                            proto7 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-cuatro */
                if (contador == 33) {
                    console.log("34 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && ud4 == 0
                            ud4 = 10;

                            //comunicacion visual 10
                            cv4 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-cinco */
                if (contador == 34) {
                    console.log("35 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && ud5 == 0
                            ud5 = 10;

                            //comunicacion visual 10
                            cv5 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-seis */
                if (contador == 35) {
                    console.log("36 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && ud6 == 0
                            ud6 = 10;

                            //comunicacion visual 10
                            cv6 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-siete */
                if (contador == 36) {
                    console.log("37 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && ud7 == 0
                            ud7 = 10;

                            //comunicacion visual 10
                            cv7 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-ocho */
                if (contador == 37) {
                    console.log("38 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && ud8 == 0
                            ud8 = 10;

                            //comunicacion visual 10
                            cv8 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-nueve */
                if (contador == 38) {
                    console.log("39 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && ud9 == 0
                            ud9 = 10;

                            //comunicacion visual 10
                            cv9 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta */
                if (contador == 39) {
                    console.log("40 pregunta respuesta 4 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist && ud10 == 0
                            ud10 = 10;

                            //comunicacion visual 10
                            cv10 = 10;

                            clicked = false
                        }

                    }
                }


                //UXLEAD

                /* Pregunta cuarenta-uno */
                if (contador == 40) {
                    console.log("41 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul1 = 6;

                            //comunicacion oral 30
                            co3 = 18;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-dos */
                if (contador == 41) {
                    console.log("42 pregunta  respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul2 = 6;

                            //capacidad de gestion
                            cg1 = 12;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-tres */
                if (contador == 42) {
                    console.log("43 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul3 = 6;

                            //comunicacion oral 30
                            co4 = 18;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-cuatro */
                if (contador == 43) {
                    console.log("44 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul4 = 6;

                            //comunicacion oral 10
                            co5 = 6;

                            //capacidad de gestion 10
                            cg2 = 12;

                            //negociacion 10
                            n1 = 18;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-cinco */
                if (contador == 44) {
                    console.log("45 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul5 = 6;

                            //capacidad de gestion 10
                            cg3 = 12;

                            //liderazgo 20
                            l1 = 12;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-seis */
                if (contador == 45) {
                    console.log("46 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul6 = 6;

                            //capacidad de gestion 10
                            cg4 = 12;

                            //liderazgo
                            l2 = 12;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-siete */
                if (contador == 46) {
                    console.log("47 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul7 = 6;

                            //negociacion 10
                            n2 = 24;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-ocho */
                if (contador == 47) {
                    console.log("48 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul8 = 6;

                            //capacidad de gestion 10
                            cg5 = 12;

                            //liderazgo
                            l3 = 12;

                            //negociacion 10
                            n3 = 18;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-nueve */
                if (contador == 48) {
                    console.log("49 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul9 = 6;

                            //liderazgo
                            l4 = 12;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta */
                if (contador == 49) {
                    console.log("50 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul10 = 6;

                            //liderazgo
                            l5 = 12;

                            clicked = false
                        }

                    }
                }

                //HABILIDADES EN COMUN

                /* Pregunta cincuenta-uno */
                if (contador == 50) {
                    console.log("51 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Creatividad
                            c1 = 60;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-dos */
                if (contador == 51) {
                    console.log("52 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //actitud critica
                            ac1 = 60;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-tres */
                if (contador == 52) {
                    console.log("53 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //adaptacion al cambio
                            adc1 = 60;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-cuatro */
                if (contador == 53) {
                    console.log("54 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Empatia
                            e1 = 60;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-cinco */
                if (contador == 54) {
                    console.log("55 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Manejo del tiempo 100
                            mm1 = 60;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-seis */
                if (contador == 55) {
                    console.log("56 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Trabajo en equipo
                            t1 = 30;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-siete */
                if (contador == 56) {
                    console.log("57 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Trabajo en equipo
                            t2 = 30;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-ocho */
                if (contador == 57) {
                    console.log("58 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Resistencia al trabajo bajo presion
                            tbp1 = 30;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-nueve */
                if (contador == 58) {
                    console.log("59 pregunta respuesta 4 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Vision al futuro
                            vf1 = 60;

                            clicked = false
                        }

                    }
                }

            }

            //RESPUESTA 5
            if (elem.querySelector('.respuesta5')) {

                //UX RESEARCHER
                /* Pregunta uno */
                if (contador == 0) {
                    console.log("pregunta 1 respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //ux researcher
                            ur1 = 0;

                            //investigacion cuantitativa 30
                            ict1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dos */
                if (contador == 1) {
                    console.log("2 pregunta respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur2 = 8;

                            //conocimiento en psicologia 100
                            csp1 = 80;

                            //comunicacion escrita 10
                            ce1 = 8;

                            //comunicacion oral 10
                            co1 = 8;

                            clicked = false
                        }
                    }
                }

                /* Pregunta tres */
                if (contador == 2) {
                    console.log("3 pregunta respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur3 = 0;

                            //analisis de datos 50
                            ad1 = 0;

                            //investigacion cuantitativa 30
                            ict2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta cuatro */
                if (contador == 3) {
                    console.log("4 pregunta respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur4 = 0;

                            //investigacion cualitativa 30
                            icl1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cinco */
                if (contador == 4) {
                    console.log("5 pregunta respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        console.log("dio click")
                        clicked = true
                        console.log("puede")

                        if (clicked = true) {
                            //ux researcher
                            ur5 = 8;

                            //escucha activa 40
                            ea1 = 80;

                            clicked = false
                        }
                    }
                }

                /* Pregunta seis */
                if (contador == 5) {
                    console.log("pregunta 6 respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur6 = 0;

                            //investigacion cualitativa
                            icl2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta siete */
                if (contador == 6) {
                    console.log("pregunta 7 respuesta 5  //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur7 = 0;

                            //analisis de datos 50
                            ad2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta ocho */
                if (contador == 7) {
                    console.log("pregunta 8 respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur8 = 8;

                            //investigacion cuantitativa 20
                            ict3 = 16;

                            //investigacion cualitativa 20
                            icl3 = 16;

                            clicked = false
                        }

                    }
                }

                /* Pregunta nueve */
                if (contador == 8) {
                    console.log("Pregunta 9 respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur9 = 8;

                            //investigacion cuantitativa 20
                            ict4 = 16;

                            //investigacion cualitativa 20
                            icl4 = 16;

                            clicked = false
                        }
                    }
                }

                /* Pregunta diez */
                if (contador == 9) {
                    console.log("Pregunta 9 respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur10 = 8;

                            //Comunicacion oral 20
                            co2 = 16;

                            clicked = false
                        }
                    }
                }


                //CONTENT STRATEGIST
                /* Pregunta once */
                if (contador == 10) {
                    console.log("11 pregunta respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs1 = 0;

                            //Comunicacion escrita 10
                            ce2 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta doce */
                if (contador == 11) {
                    console.log("12 pregunta respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs2 = 0;

                            //Comunicacion escrita 10
                            ce3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta trece */
                if (contador == 12) {
                    console.log("13 pregunta respuesta 5////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs3 = 8;

                            //Comunicacion escrita 10
                            ce4 = 8;

                            clicked = false
                        }

                    }
                }

                /* Pregunta catorce */
                if (contador == 13) {
                    console.log("14 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs4 = 8;

                            //Comunicacion escrita 20
                            ce5 = 16;

                            clicked = false
                        }

                    }
                }

                /* Pregunta quince */
                if (contador == 14) {
                    console.log("15 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs5 = 8;

                            //Comunicacion escrita 10
                            ce6 = 8;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dieciseis */
                if (contador == 15) {
                    console.log("16 pregunta respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs6 = 0;

                            //Comunicacion escrita 10
                            ce7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta diecisiete */
                if (contador == 16) {
                    console.log("17 pregunta respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs7 = 0;

                            //Comunicacion escrita 10
                            ce8 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dieciocho */
                if (contador == 17) {
                    console.log("18 pregunta respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs8 = 0;

                            //Comunicacion escrita 10
                            ce9 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta diecinueve */
                if (contador == 18) {
                    console.log("19 pregunta respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs9 = 0;

                            //estructuracion de la informacion 10
                            ei1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte */
                if (contador == 19) {
                    console.log("20 pregunta respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs10 = 0;

                            //estructuración de la información 10
                            ei2 = 0;

                            clicked = false
                        }

                    }
                }

                //INTERACTION DESIGNER
                /* Pregunta veinte-uno */
                if (contador == 20) {
                    console.log("21 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id1 = 8;

                            //Prototipado 20
                            proto1 = 16;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-dos */
                if (contador == 21) {
                    console.log("22 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id2 = 0;

                            //Prototipado 20
                            proto2 = 0;

                            //conocimiento de interaccion 10
                            ci1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-tres */
                if (contador == 22) {
                    console.log("23 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id3 = 0;

                            //conocimiento de interaccion 20
                            ci2 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-cuatro */
                if (contador == 23) {
                    console.log("24 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id4 = 0;

                            //conocimiento de interaccion 20
                            ci3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-cinco */
                if (contador == 24) {
                    console.log("25 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id5 = 0;

                            //Prototipado 20
                            proto3 = 0;

                            //estructuracion de la informacion 20
                            ei3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-seis */
                if (contador == 25) {
                    console.log("26 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id6 = 0;

                            //Prototipado 10
                            proto4 = 0;

                            //estructuracion de la informacion 20
                            ei4 = 0;

                            //conocimiento en interaccion 10
                            ci4 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-siete */
                if (contador == 26) {
                    console.log("27 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id7 = 0;

                            //conocimiento en interaccion 10
                            ci5 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-ocho */
                if (contador == 27) {
                    console.log("28 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id8 = 0;

                            //estructuracion de la informacion 20
                            ei5 = 0;

                            //conocimiento en interaccion 10
                            ci6 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-nueve */
                if (contador == 28) {
                    console.log("29 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id9 = 0;

                            //Prototipado 10
                            proto5 = 0;

                            //conocimiento en interaccion 10
                            ci7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta */
                if (contador == 29) {
                    console.log("30 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id10 = 0;

                            //estructuracion de la informacion 20
                            ei6 = 0;

                            //conocimiento en interaccion 10
                            ci8 = 0;

                            clicked = false
                        }

                    }
                }

                //UI DESGINER
                /* Pregunta treinta-uno */
                if (contador == 30) {
                    console.log("31 pregunta  respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud1 = 8;

                            //comunicacion visual 10
                            cv1 = 8;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-dos */
                if (contador == 31) {
                    console.log("32 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud2 = 8;

                            //comunicacion visual 10
                            cv2 = 8;

                            //prototipado 10
                            proto6 = 8;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-tres */
                if (contador == 32) {
                    console.log("33 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud3 = 0;

                            //comunicacion visual 10
                            cv3 = 0;

                            //prototipado 10
                            proto7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-cuatro */
                if (contador == 33) {
                    console.log("34 pregunta  respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud4 = 0;

                            //comunicacion visual 10
                            cv4 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-cinco */
                if (contador == 34) {
                    console.log("35 pregunta  respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud5 = 0;

                            //comunicacion visual 10
                            cv5 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-seis */
                if (contador == 35) {
                    console.log("36 pregunta  respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud6 = 0;

                            //comunicacion visual 10
                            cv6 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-siete */
                if (contador == 36) {
                    console.log("37 pregunta  respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud7 = 0;

                            //comunicacion visual 10
                            cv7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-ocho */
                if (contador == 37) {
                    console.log("38 pregunta  respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud8 = 0;

                            //comunicacion visual 10
                            cv8 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-nueve */
                if (contador == 38) {
                    console.log("39 pregunta  respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud9 = 0;

                            //comunicacion visual 10
                            cv9 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta */
                if (contador == 39) {
                    console.log("40 pregunta  respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud10 = 0;

                            //comunicacion visual 10
                            cv10 = 0;

                            clicked = false
                        }

                    }
                }


                //UXLEAD
                /* Pregunta cuarenta-uno */
                if (contador == 40) {
                    console.log("41 pregunta  respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul1 = 8;

                            //comunicacion oral 30
                            co3 = 24;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-dos */
                if (contador == 41) {
                    console.log("42 pregunta  respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul2 = 8;

                            //capacidad de gestion
                            cg1 = 16;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-tres */
                if (contador == 42) {
                    console.log("43 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul3 = 8;

                            //comunicacion oral 30
                            co4 = 24;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-cuatro */
                if (contador == 43) {
                    console.log("44 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul4 = 8;

                            //comunicacion oral 10
                            co5 = 8;

                            //capacidad de gestion 10
                            cg2 = 16;

                            //negociacion 10
                            n1 = 24;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-cinco */
                if (contador == 44) {
                    console.log("45 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul5 = 8;

                            //capacidad de gestion 10
                            cg3 = 16;

                            //liderazgo 20
                            l1 = 16;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-seis */
                if (contador == 45) {
                    console.log("46 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul6 = 8;

                            //capacidad de gestion 10
                            cg4 = 16;

                            //liderazgo
                            l2 = 16;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-siete */
                if (contador == 46) {
                    console.log("47 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul7 = 8;

                            //negociacion 10
                            n2 = 32;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-ocho */
                if (contador == 47) {
                    console.log("48 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul8 = 8;

                            //capacidad de gestion 10
                            cg5 = 16;

                            //liderazgo
                            l3 = 16;

                            //negociacion 10
                            n3 = 24;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-nueve */
                if (contador == 48) {
                    console.log("49 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul9 = 8;

                            //liderazgo
                            l4 = 16;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta */
                if (contador == 49) {
                    console.log("50 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul10 = 8;

                            //liderazgo
                            l5 = 16;

                            clicked = false
                        }

                    }
                }


                //HABILIDADES EN COMUN

                /* Pregunta cincuenta-uno */
                if (contador == 50) {
                    console.log("51 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Creatividad
                            c1 = 80;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-dos */
                if (contador == 51) {
                    console.log("52 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //actitud critica
                            ac1 = 80;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-tres */
                if (contador == 52) {
                    console.log("53 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //adaptacion al cambio
                            adc1 = 80;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-cuatro */
                if (contador == 53) {
                    console.log("54 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Empatia
                            e1 = 80;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-cinco */
                if (contador == 54) {
                    console.log("55 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Manejo del tiempo 100
                            mm1 = 80;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-seis */
                if (contador == 55) {
                    console.log("56 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Trabajo en equipo
                            t1 = 40;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-siete */
                if (contador == 56) {
                    console.log("57 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Trabajo en equipo
                            t2 = 40;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-ocho */
                if (contador == 57) {
                    console.log("58 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Resistencia al trabajo bajo presion
                            tbp1 = 80;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-nueve */
                if (contador == 58) {
                    console.log("59 pregunta respuesta 5 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Vision al futuro
                            vf1 = 80;

                            clicked = false
                        }

                    }
                }

            }

            //RESPUESTA 6
            if (elem.querySelector('.respuesta6')) {

                //UX RESEARCHER
                /* Pregunta uno */
                if (contador == 0) {
                    console.log("pregunta 1 respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //ux researcher
                            ur1 = 0;

                            //investigacion cuantitativa 30
                            ict1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dos */
                if (contador == 1) {
                    console.log("segunda pregunta respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur2 = 10;

                            //conocimiento en psicologia 100
                            csp1 = 100;

                            //comunicacion escrita 10
                            ce1 = 10;

                            //comunicacion oral 10
                            co1 = 10;

                            clicked = false
                        }
                    }
                }

                /* Pregunta tres */
                if (contador == 2) {
                    console.log("3 pregunta respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur3 = 0;

                            //analisis de datos 50
                            ad1 = 0;

                            //investigacion cuantitativa 30
                            ict2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta cuatro */
                if (contador == 3) {
                    console.log("4 pregunta respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur4 = 0;

                            //investigacion cualitativa 30
                            icl1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cinco */
                if (contador == 4) {
                    console.log("5 pregunta respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur5 = 10;

                            //escucha activa 40
                            ea1 = 100;

                            clicked = false
                        }
                    }
                }

                /* Pregunta seis */
                if (contador == 5) {
                    console.log("pregunta 6 respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur6 = 0;

                            //investigacion cualitativa
                            icl2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta siete */
                if (contador == 6) {
                    console.log("pregunta 7 respuesta 6  //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur7 = 0;

                            //analisis de datos 50
                            ad2 = 0;

                            clicked = false
                        }
                    }
                }

                /* Pregunta ocho */
                if (contador == 7) {
                    console.log("pregunta 8 respuesta 5 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur8 = 10;

                            //investigacion cuantitativa 20
                            ict3 = 20;

                            //investigacion cualitativa 20
                            icl3 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta nueve */
                if (contador == 8) {
                    console.log("Pregunta 9 respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur9 = 10;

                            //investigacion cuantitativa 20
                            ict4 = 20;

                            //investigacion cualitativa 20
                            icl4 = 20;

                            clicked = false
                        }
                    }
                }

                /* Pregunta diez */
                if (contador == 9) {
                    console.log("Pregunta 10 respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {
                            //ux researcher
                            ur10 = 10;

                            //Comunicacion oral 20
                            co2 = 20;

                            clicked = false
                        }
                    }
                }


                //CONTENT STRATEGIST
                /* Pregunta once */
                if (contador == 10) {
                    console.log("11 pregunta respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs1 = 0;

                            //Comunicacion escrita 10
                            ce2 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta doce */
                if (contador == 11) {
                    console.log("12 pregunta respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs2 = 0;

                            //Comunicacion escrita 10
                            ce3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta trece */
                if (contador == 12) {
                    console.log("13 pregunta respuesta 6////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs3 = 10;

                            //Comunicacion escrita 10
                            ce4 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta catorce */
                if (contador == 13) {
                    console.log("14 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs4 = 10;

                            //Comunicacion escrita 20
                            ce5 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta quince */
                if (contador == 14) {
                    console.log("15 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs5 = 10;

                            //Comunicacion escrita 10
                            ce6 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dieciseis */
                if (contador == 15) {
                    console.log("16 pregunta respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs6 = 0;

                            //Comunicacion escrita 10
                            ce7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta diecisiete */
                if (contador == 16) {
                    console.log("17 pregunta respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs7 = 0;

                            //Comunicacion escrita 10
                            ce8 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta dieciocho */
                if (contador == 17) {
                    console.log("18 pregunta respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs8 = 0;

                            //Comunicacion escrita 10
                            ce9 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta diecinueve */
                if (contador == 18) {
                    console.log("19 pregunta respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs9 = 0;

                            //estructuracion de la informacion 10
                            ei1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte */
                if (contador == 19) {
                    console.log("20 pregunta respuesta 6 //////////////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            cs10 = 0;

                            //estructuración de la información 10
                            ei2 = 0;

                            clicked = false
                        }

                    }
                }

                //INTERACTION DESIGNER
                /* Pregunta veinte-uno */
                if (contador == 20) {
                    console.log("21 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id1 = 10;

                            //Prototipado 20
                            proto1 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-dos */
                if (contador == 21) {
                    console.log("22 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id2 = 0;

                            //Prototipado 20
                            proto2 = 0;

                            //conocimiento de interaccion 10
                            ci1 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-tres */
                if (contador == 22) {
                    console.log("23 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id3 = 0;

                            //conocimiento de interaccion 20
                            ci2 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-cuatro */
                if (contador == 23) {
                    console.log("24 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id4 = 0;

                            //conocimiento de interaccion 20
                            ci3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-cinco */
                if (contador == 24) {
                    console.log("25 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id5 = 0;

                            //Prototipado 20
                            proto3 = 0;

                            //estructuracion de la informacion 20
                            ei3 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-seis */
                if (contador == 25) {
                    console.log("26 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id6 = 0;

                            //Prototipado 10
                            proto4 = 0;

                            //estructuracion de la informacion 20
                            ei4 = 0;

                            //conocimiento en interaccion 10
                            ci4 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-siete */
                if (contador == 26) {
                    console.log("27 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id7 = 0;

                            //conocimiento en interaccion 10
                            ci5 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-ocho */
                if (contador == 27) {
                    console.log("28 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id8 = 0;

                            //estructuracion de la informacion 20
                            ei5 = 0;

                            //conocimiento en interaccion 10
                            ci6 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta veinte-nueve */
                if (contador == 28) {
                    console.log("29 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id9 = 0;

                            //Prototipado 10
                            proto5 = 0;

                            //conocimiento en interaccion 10
                            ci7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta */
                if (contador == 29) {
                    console.log("30 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            id10 = 0;

                            //estructuracion de la informacion 20
                            ei6 = 0;

                            //conocimiento en interaccion 10
                            ci8 = 0;

                            clicked = false
                        }

                    }
                }

                //UI DESGINER
                /* Pregunta treinta-uno */
                if (contador == 30) {
                    console.log("31 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud1 = 10;

                            //comunicacion visual 10
                            cv1 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-dos */
                if (contador == 31) {
                    console.log("32 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud2 = 10;

                            //comunicacion visual 10
                            cv2 = 10;

                            //prototipado 10
                            proto6 = 10;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-tres */
                if (contador == 32) {
                    console.log("33 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud3 = 0;

                            //comunicacion visual 10
                            cv3 = 0;

                            //prototipado 10
                            proto7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-cuatro */
                if (contador == 33) {
                    console.log("34 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud4 = 0;

                            //comunicacion visual 10
                            cv4 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-cinco */
                if (contador == 34) {
                    console.log("35 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud5 = 0;

                            //comunicacion visual 10
                            cv5 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-seis */
                if (contador == 35) {
                    console.log("36 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud6 = 0;

                            //comunicacion visual 10
                            cv6 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-siete */
                if (contador == 36) {
                    console.log("37 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud7 = 0;

                            //comunicacion visual 10
                            cv7 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-ocho */
                if (contador == 37) {
                    console.log("38 pregunta  respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud8 = 0;

                            //comunicacion visual 10
                            cv8 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta treinta-nueve */
                if (contador == 38) {
                    console.log("39 pregunta  respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud9 = 0;

                            //comunicacion visual 10
                            cv9 = 0;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta */
                if (contador == 39) {
                    console.log("40 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ud10 = 0;

                            //comunicacion visual 10
                            cv10 = 0;

                            clicked = false
                        }

                    }
                }


                //UXLEAD
                /* Pregunta cuarenta-uno */
                if (contador == 40) {
                    console.log("41 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul1 = 10;

                            //comunicacion oral 30
                            co3 = 30;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-dos */
                if (contador == 41) {
                    console.log("42 pregunta  respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul2 = 10;

                            //capacidad de gestion
                            cg1 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-tres */
                if (contador == 42) {
                    console.log("43 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul3 = 10;

                            //comunicacion oral 30
                            co4 = 30;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-cuatro */
                if (contador == 43) {
                    console.log("44 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul4 = 10;

                            //comunicacion oral 10
                            co5 = 10;

                            //capacidad de gestion 10
                            cg2 = 20;

                            //negociacion 10
                            n1 = 30;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-cinco */
                if (contador == 44) {
                    console.log("45 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul5 = 10;

                            //capacidad de gestion 10
                            cg3 = 20;

                            //liderazgo 20
                            l1 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-seis */
                if (contador == 45) {
                    console.log("46 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul6 = 10;

                            //capacidad de gestion 10
                            cg4 = 20;

                            //liderazgo 20
                            l2 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-siete */
                if (contador == 46) {
                    console.log("47 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul7 = 10;

                            //negociacion 10
                            n2 = 40;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-ocho */
                if (contador == 47) {
                    console.log("48 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul8 = 10;

                            //capacidad de gestion 10
                            cg5 = 20;

                            //liderazgo
                            l3 = 20;

                            //negociacion 10
                            n3 = 30;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cuarenta-nueve */
                if (contador == 48) {
                    console.log("49 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul9 = 10;

                            //liderazgo
                            l4 = 20;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta */
                if (contador == 49) {
                    console.log("50 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Content strategist
                            ul10 = 10;

                            //liderazgo
                            l5 = 20;

                            clicked = false
                        }

                    }
                }


                //HABILIDADES EN COMUN

                /* Pregunta cincuenta-uno */
                if (contador == 50) {
                    console.log("51 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Creatividad
                            c1 = 100;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-dos */
                if (contador == 51) {
                    console.log("52 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //actitud critica
                            ac1 = 100;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-tres */
                if (contador == 52) {
                    console.log("53 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //adaptacion al cambio
                            adc1 = 100;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-cuatro */
                if (contador == 53) {
                    console.log("54 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Empatia
                            e1 = 100;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-cinco */
                if (contador == 54) {
                    console.log("55 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Manejo del tiempo 100
                            mm1 = 100;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-seis */
                if (contador == 55) {
                    console.log("56 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Trabajo en equipo
                            t1 = 50;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-siete */
                if (contador == 56) {
                    console.log("57 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Trabajo en equipo
                            t2 = 50;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-ocho */
                if (contador == 57) {
                    console.log("58 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Resistencia al trabajo bajo presion
                            tbp1 = 100;

                            clicked = false
                        }

                    }
                }

                /* Pregunta cincuenta-nueve */
                if (contador == 58) {
                    console.log("59 pregunta respuesta 6 ////////////////////////////////////////")

                    if (!clicked) {
                        clicked = true

                        if (clicked = true) {

                            //Vision al futuro
                            vf1 = 100;

                            clicked = false
                        }

                    }
                }

            }

            //TOTAL

            //ROLS

            //UX RESEARCHER
            uxresearcher = ur1 + ur2 + ur3 + ur4 + ur5 + ur6 + ur7 + ur8 + ur9 + ur10;


            //CONTENT STRATEGIST
            contentstrategist = cs1 + cs2 + cs3 + cs4 + cs5 + cs6 + cs7 + cs8 + cs9 + cs10;


            //INTERACTION DESIGNER
            interactiondesigner = id1 + id2 + id3 + id4 + id5 + id6 + id7 + id8 + id9 + id10;


            //UI DESIGNER
            uidesigner = ud1 + ud2 + ud3 + ud4 + ud5 + ud6 + ud7 + ud8 + ud9 + ud10;


            //UX LEAD
            uxlead = ul1 + ul2 + ul3 + ul4 + ul5 + ul6 + ul7 + ul8 + ul9 + ul10;


            //SKILLS

            //INVESTIGACION CUANTITATIVA
            invescuant = ict1 + ict2 + ict3 + ict4;
            console.log("investigacion cuantitativa " + invescuant)

            //INVESTIGACION CUALITATIVA
            invescual = icl1 + icl2 + icl3 + icl4;
            console.log("investigacion cualitativa " + invescual)

            //CONOCIMIENTO EN PSICOLOGIA
            conopsic = csp1;
            console.log("conocimiento en psicologia  " + conopsic)

            //COMUNICACION ESCRITA
            comuesc = ce1 + ce2 + ce3 + ce4 + ce5 + ce6 + ce7 + ce8 + ce9;
            console.log("comunicacion escrita " + comuesc)

            //COMUNICACION ORAL
            comuora = co1 + co2 + co3 + co4 + co5;
            console.log("investigacion oral " + comuora)

            //COMUNICACION VISUAL
            comuvis = cv1 + cv2 + cv3 + cv4 + cv5 + cv6 + cv7 + cv8 + cv9 + cv10;
            console.log("investigacion visual " + comuvis)

            //ANALISIS DE DATOS
            analidata = ad1 + ad2;
            console.log("analisis de datos " + analidata)

            //ESCUCHA ACTIVA
            escuchaa = ea1;
            console.log("escucha activa " + escuchaa)

            //ESTRUCTURACION DE LA INFORMACION
            estruinfo = ei1 + ei2 + ei3 + ei4 + ei5 + ei6;
            console.log("estructuracion de la informacion " + estruinfo)

            //PROTOTIPADO
            prototipado = proto1 + proto2 + proto3 + proto4 + proto5 + proto6 + proto7;
            console.log("prototipado " + prototipado)

            //CONOCIMIENTO EN INTERACCION
            conointera = ci1 + ci2 + ci3 + ci4 + ci5 + ci6 + ci7 + ci8;
            console.log("conocimiento en interaccion " + conointera)

            //CAPACIDAD DE GESTION
            capagest = cg1 + cg2 + cg3 + cg4 + cg5;
            console.log("capacidad de gestion " + capagest)

            //NEGOCIACION
            neg = n1 + n2 + n3;
            console.log("negociacion " + neg)

            //LIDERAZGO
            lid = l1 + l2 + l3 + l4 + l5;
            console.log("liderazgo  " + lid)

            //CREATIVIDAD
            creati = c1;
            console.log("creatividad " + creati)

            //ACTITUD CRITICA
            actcri = ac1;
            console.log("actitud critia " + actcri)

            //ADAPTACION AL CAMBIO
            adapcam = adc1;
            console.log("adaptacion al cambio " + adapcam)

            //EMPATIA
            empatia = e1;
            console.log("empatia " + empatia)

            //MANEJO DEL TIEMPO
            mantim = mm1;
            console.log("manejo del tiempo " + mantim)

            //TRABAJO EN EQUIPO
            trabajoequipo = t1 + t2;
            console.log("trabajo en equipo " + trabajoequipo)

            //TRABAJO BAJO PRESION
            trabajopre = tbp1;
            console.log("resistencia al trabajo bajo presion " + trabajopre)

            //VISION AL FUTURO
            visfutu = vf1;
            console.log("vision al futuro " + visfutu)

            console.log("UX Reseacher " + uxresearcher)
            console.log("Content strategist " + contentstrategist)
            console.log("Interaction designer " + interactiondesigner)
            console.log("UI designer " + uidesigner)
            console.log("UX lead " + uxlead)
        }


    });
});


btns.addEventListener('click', function (event) {
    contador++;
    console.log('buenas')
    if (contador % 59 == 0) {
        preguntas++;
        respuestas++;
        console.log('nivel' + preguntas);
        console.log('nivel' + respuestas);
    }
    cambiarTexto();
    //resultados();

    //MOSTRAR PANTALLA DE RESULTADOS
    if (contador == 60) {

        //guardar en objetos los datos de los roles
        const oral = {
            nameSkill: "Comunicación oral",
            value: comuora,
        }

        const written = {
            nameSkill: "Comunicación escrita",
            value: comuesc,
        }

        const empathy = {
            nameSkill: "Empatía",
            value: empatia,
        }

        const team = {
            nameSkill: "Trabajo en equipo",
            value: trabajoequipo,
        }

        const analysis = {
            nameSkill: "Análisis de datos",
            value: analidata,
        }

        const listening = {
            nameSkill: "Escucha activa",
            value: escuchaa,
        }

        const cuantitativa = {
            nameSkill: "Investigación cuantitativa",
            value: invescuant,
        }

        const cualitativa = {
            nameSkill: "Investigación cualitativa",
            value: invescual,
        }

        const psicologia = {
            nameSkill: "Conocimientos en psicología",
            value: conopsic,
        }

        const visual = {
            nameSkill: "Comunicación visual",
            value: comuvis,
        }

        const information = {
            nameSkill: "Estruturación de la información",
            value: estruinfo,
        }

        const wireframing = {
            nameSkill: "Prototipado",
            value: prototipado,
        }

        const conoInteraction = {
            nameSkill: "Conocimiento en interacción",
            value: conointera,
        }

        const gestion = {
            nameSkill: "Capacidad de gestion",
            value: capagest,
        }

        const negotiation = {
            nameSkill: "Negociación",
            value: neg,
        }

        const leadership = {
            nameSkill: "Liderazgo",
            value: lid,
        }

        const creativity = {
            nameSkill: "Creatividad",
            value: creati,
        }

        const critical = {
            nameSkill: "Actitud crítica",
            value: escuchaa,
        }

        const change = {
            nameSkill: "Adaptación al cambio",
            value: adapcam,
        }

        const time = {
            nameSkill: "Manejo del tiempo",
            value: mantim,
        }

        const pressure = {
            nameSkill: "Resistencia al trabajo bajo presión",
            value: trabajopre,
        }

        const future = {
            nameSkill: "Visión al futuro",
            value: visfutu,
        }

        uxSkills.push(oral, written, empathy, team, analysis, listening, cuantitativa, cualitativa, psicologia, visual, information, wireframing, conoInteraction, gestion, negotiation, leadership, creativity, critical, change, time, pressure, future);

        const researcher = {
            nameRole: "UX Researcher",
            value: uxresearcher,
        }

        const content = {
            nameRole: "Content Strategist",
            value: contentstrategist,
        }

        const interaction = {
            nameRole: "Interaction Designer",
            value: interactiondesigner,
        }

        const ui = {
            nameRole: "UI Designer",
            value: uidesigner,
        }

        const lead = {
            nameRole: "UX Lead",
            value: uxlead,
        }

        uxRoles.push(researcher, content, interaction, ui, lead);

        onAuthStateChanged(auth, async (user) => {
            if (user) {
                console.log(user);
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                const docRef = doc(db, "users", uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    const data = docSnap.data();
                    userInfo = data;
                    userInfo.uid = user.uid;
                    console.log(userInfo);

                    if (userInfo) {
                        await setDoc(doc(db, "uxSkills", uid), {
                            skills: uxSkills,
                        })

                        await setDoc(doc(db, "uxRoles", uid), {
                            roles: uxRoles,
                        })


                            .then(function () {
                                //window.location.href = './html/home.html';
                            });
                    }

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }

            }
        });

        const resultados = document.querySelector('.resul');

        resultados.classList.add('resul--mostrar');

        graphic();
        resultskills();

    }
 });
    //si funciona, pero se debe cambiar mejor en la misma pantalla la opcion de agregar portafolio
    /*if (contador == 60) {
        btns.setAttribute('href', '../../../index.html');
    }*/

