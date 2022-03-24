//JUEGO
let contador = 0;

let texto0Actual;
let texto1Actual;
let texto2Actual;
let texto3Actual;
let texto4Actual;
let texto5Actual;
let texto6Actual;
let img;

let izquierda;
let derecha;

const preguntas = [
    //UX RESEARCHER
    //1
    {
        pregunta: 'A qué método de investigación corresponde esta definición: “Consiste en comparar dos versiones de una misma página web o aplicación para comprobar cuál de las dos versiones es más eficiente. Estas variaciones se muestran de forma aleatoria a los distintos usuarios de la página web.”',
        src: '',
    },
    //2
    {
        pregunta: '¿Del 1 al 6, qué tan de acuerdo estás con la siguiente frase? Mis habilidades de comunicación y conocimientos de psicología contribuyen en el desarrollo de la etapa de investigación de un proyecto. Siendo 1 nada de acuerdo, y 6 muy de acuerdo.',
        src: '#',
    },
    //3
    {
        pregunta: 'Ha llegado el último reporte de ventas de tu app de deporte, y un miembro de tu equipo tenía la tarea de presentar visualmente los países en los que más se ha vendido la app el último año. Esta persona te muestra el gráfico a continuación, ¿Qué sugerencias le harías para presentar mejor la información?',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //4
    {
        pregunta: 'Trabajas en una empresa de videojuegos, en la que últimamente se ha estado pensando en añadir una nueva funcionalidad a uno de sus videojuegos más vendidos, para conocer los pensamientos, opiniones y preferencias de los usuarios sobre esta nueva funcionalidad, decides utilizar el método de investigación:',
        src: '',
    },
    //5
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Muchos me consideran una persona que sabe escuchar a los demás”',
        src: '#',
    },
    //6
    {
        pregunta: 'De acuerdo al último reporte de ventas de tu app de aprendizaje de idiomas, se descubrió que las instituciones educativas como colegios e institutos tecnológicos son los que más compran tu app. ¿Qué método usarías para recoger información y así entender cómo usan los usuarios tu app en estos ambientes?',
        src: '#',
    },
    //7
    {
        pregunta: 'Lee la siguiente frase: El tratamiento de datos personales dentro del aplicativo móvil debe estar regido mediante el marco legal de la Ley 1581 del 2012. ¿Es la anterior frase una determinante de diseño correcta?. Explica por qué:',
        src: '#',
    },
    //8
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Disfruto de reunir información para identificar el origen de un problema en particular”',
        src: '#',
    },
    //9
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Antes de avanzar a otras fases de un proyecto, me gusta tener una clara comprensión del problema”',
        src: '#',
    },
    //10
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Disfruto de hablar con los usuarios, durante la investigación de un proyecto, para conocer sus problemas, pensamientos, sentimientos y emociones”',
        src: '#',
    },

    //CONTENT STRATEGIST
    //11
    {
        pregunta: '(+10 comunicación escrita, +10 content strategist) Una marca de ropa, que se define como fresca, divertida y juvenil, desea poner en su página principal un anuncio indicando que su colección llamada “Erizo” tiene un 50% de descuento. Escoge cuál de las siguientes opciones sería la más adecuada para la descripción de este anuncio.',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //12
    {
        pregunta: 'Teniendo en cuenta la siguiente respuesta, de la sección de FAQ del producto de Cards Against Humanity, cuál crees que es el tono que fue usado para hacer este copy:',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //13
    {
        pregunta: '¿Del 1 al 6, qué tan cómodo te sientes al realizar copywriting? Siendo 1 nada cómodo, y 6 muy cómodo.',
        src: '#',
    },
    //14
    {
        pregunta: '¿Del 1 al 6, qué tan de acuerdo estás con la siguiente frase? Soy capaz de definir y transmitir la personalidad de una marca a través de mi escritura. Siendo 1 nada de acuerdo, y 6 muy de acuerdo.',
        src: '#',
    },
    //15
    {
        pregunta: '¿Del 1 al 6, qué tan de acuerdo estás con la siguiente frase? Disfruto usar la empatía, datos, metas de la empresa y lógica para crear textos. Siendo 1 nada de acuerdo, y 6 muy de acuerdo.',
        src: '#',
    },
    //16
    {
        pregunta: 'Trabajas para una librería online, y un usuario ha hecho una búsqueda que no ha arrojado ningún resultado. Escribe a continuación el mensaje de error con el que se encontraría el usuario.',
        src: '#',
    },
    //17
    {
        pregunta: 'La empresa de postres para la que trabajas, quiere que escribas su newsletter del mes de mayo, invitando a sus clientes a disfrutar de los descuentos del día de la madre disponibles únicamente en su página web (www.postresitos.com). Escribe a continuación cómo sería esta newsletter.',
        src: '#',
    },
    //18
    {
        pregunta: '¿Cuál de las siguientes llamadas a la acción es más probable que incite al usuario a dar click?',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //19
    {
        pregunta: 'Mira la siguiente imagen, ¿Sientes que el texto está escrito de la mejor manera? Sí es así explica por qué. En cambio, si sientes que no es así, ¿Cómo lo presentarías?',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //20
    {
        pregunta: 'Estás rediseñando el menú global de la web de una papelería, escribe las etiquetas que serían acordes para los siguientes grupos de productos.',
        src: '#',
    },

    //INTERACTION DESIGNER
    //21
    {
        pregunta: '¿Cuántas de las siguientes herramientas de diseño y prototipado enlistadas a continuación sabes usar eficientemente?: Figma, Illustrator, Photoshop, Adobe XD, Sketch, Axure, Mockplus, Proto.io',
        src: '#',
    },
    //22
    {
        pregunta: '¿Cuándo se convierte un wireframe en un mockup?',
        src: '#',
    },
    //23
    {
        pregunta: 'Estás diseñando una aplicación para una biblioteca y quieres asegurarte de que la experiencia de registro sea reconocible para el usuario y funcione correctamente. ¿Qué podrías hacer y cómo implementarías esta característica en la aplicación?',
        src: '#',
    },
    //24
    {
        pregunta: '¿Qué es affordance?',
        src: '#',
    },
    //25
    {
        pregunta: '¿Cómo se podría mejorar este wireframe presentado a continuación?',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //26
    {
        pregunta: 'Cuál es el nombre de lo que está representando en la imagen presentada a continuación:',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //27
    {
        pregunta: 'Cuál principio de usabilidad de Nielsen se ve mayormente reflejado en la imagen inferior',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //28
    {
        pregunta: 'Selecciona el nombre del patrón de interacción presentado en la imagen a continuación:',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //29
    {
        pregunta: '¿Cuál es el propósito principal de los wireframes de alta fidelidad?',
        src: '#',
    },
    //30
    {
        pregunta: 'Cuál de los siguientes es un tipo de sistema de organización ambiguo (También podría ser poner varias imágenes y que pongan cómo se llama cada tipo de sistema de organización)',
        src: '#',
    },

    //UI DESIGNER
    //31
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Me gusta estar al tanto de las últimas tendencias de diseño, por lo que sigo a varias cuentas en redes sociales dedicadas a ello”',
        src: '#',
    },
    //32
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Transformar ideas en acción es lo que más disfruto.”',
        src: '#',
    },
    //33
    {
        pregunta: 'Al crear un formulario para un sitio web, ¿cuál de estos dos diseños recomendaría?',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //34
    {
        pregunta: 'Una marca de joyería llamada Eleganx, la cual se describe como elegante, sofisticada y prestigiosa, te contacta para el rediseño de su logo. ¿Cuál tipografía crees que es la más adecuada para esta marca?',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //35
    {
        pregunta: 'A continuación se presentan 4 pantallas, selecciona la que consideres es la que está mejor diseñada',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //36
    {
        pregunta: 'Un amigo tuyo, el cual es abogado, quiere que le diseñes su branding personal. Tu amigo se identifica principalmente con 3 palabras: Honesto, profesional y práctico. ¿Cuál de las siguientes paletas de colores crees que se ajusta mejor a tu amigo?',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //37
    {
        pregunta: '¿Qué nombre recibe el esquema de colores resaltado a continuación?',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //38
    {
        pregunta: 'Selecciona la imagen que hace referencia al concepto de kerning',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //39
    {
        pregunta: 'Elige a qué estilos de tipografía corresponden a cada una de las opciones de la siguiente imagen:',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },
    //40
    {
        pregunta: '¿Cuál de los siguientes botones es más probable que incite al usuario a darle click?',
        src: '../../../img/1page of descriptions/rolimgsq.svg',
    },


    //UX LEAD
    //41
    {
        pregunta: '¿Del 1 al 6, qué tan cómodo te sientes justificando tus diseños oralmente? Siendo 1 nada cómodo, y 6 muy cómodo.',
        src: '#',
    },
    //42
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Tengo conocimientos básicos que pueden llevar a desarrollar todas las etapas de la metodología del doble diamante.”',
        src: '#',
    },
    //43
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Generalmente no tengo problema y me siento cómodo/a cuando tengo que hablar en público”',
        src: '#',
    },
    //44
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “A la hora de exponer diferentes puntos de vista me gusta exponer el mío y escuchar el de los demás para ver si así se genera una nueva visión al grupo.”',
        src: '#',
    },
    //45
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Cuando trabajo con un equipo, animo a todos a trabajar hacia los mismos objetivos generales.”',
        src: '#',
    },
    //46
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Soy alguien a quien la gente acude cuando se necesita tomar una decisión.”',
        src: '#',
    },
    //47
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “En una discusión, ceder no es señal de debilidad”',
        src: '#',
    },
    //48
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Suelo asumir la responsabilidad para resolver conflictos en mi equipo, en vez de ignorar los problemas o dejarle la responsabilidad sobre estos a otros”',
        src: '#',
    },
    //49
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Frecuentemente ocupo posiciones de liderazgo, ya que soy bueno guiando a las personas para tener un proyecto exitoso”',
        src: '#',
    },
    //50
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Las personas dentro de mis equipos de trabajo me consideran un modelo a seguir.”',
        src: '#',
    },

    //HABILIDADES EN COMUN
    //51
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Disfruto de usar mi imaginación para producir muchas ideas.”',
        src: '#',
    },
    //52
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Procuro mejorar en las habilidades en las que tengo falencias, tomando acciones para perfeccionarlas (tomar cursos, investigar más del tema en internet, etc.)”',
        src: '#',
    },
    //53
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Cuando las circunstancias cambian, puedo adaptarme para saber qué hacer.”',
        src: '#',
    },
    //54
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Siempre muestro empatía con las necesidades, sentimientos y motivaciones de los demás y me intereso activamente por sus preocupaciones.”',
        src: '#',
    },
    //55
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Administro efectivamente mi tiempo, por lo que generalmente planeo las cosas con anticipación”',
        src: '#',
    },
    //56
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Me siento más cómodo trabajando en grupo que solo”',
        src: '#',
    },
    //57
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Contribuyo de manera efectiva a las reuniones cuando no soy el líder. No trato de imponerme, ni dejo que los demás hagan todo”',
        src: '#',
    },
    //58
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Soy capaz de mantenerme tranquilo en situaciones de mucha presión o estrés”',
        src: '#',
    },
    //59
    {
        pregunta: 'Del 1 al 6, siendo 1 muy en desacuerdo y 6 muy de acuerdo, qué tan de acuerdo estás con la siguiente afirmación: “Antes de tomar una decisión considero todas las variables positivas y negativas que pueda traer como consecuencia esta decisión”',
        src: '#',
    }
];

const respuestas = [
    //UX RESEARCHER
    //1
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //2
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //3
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //4
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //5
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //6
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //7
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //8
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //9
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //10
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },

    //CONTENT STRATEGIST
    //11
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //12
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //13
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //14
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //15
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //16
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //17
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //18
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //19
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //20
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },

    //INTERACTION DESIGNER
    //21
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //22
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //23
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //24
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //25
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //26
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //27
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //28
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //29
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //30
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },

    //UI DESIGNER
    //31
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //32
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //33
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //34
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //35
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //36
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //37
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //38
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //39
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //40
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },


    //UX LEAD
    //41
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //42
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //43
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //44
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //45
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //46
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //47
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //48
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //49
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //50
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },

    //HABILIDADES EN COMUN
    //51
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //52
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //53
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //54
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //55
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //56
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //57
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //58
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    },
    //59
    {
        respt1: 'a',
        respt2: 'a',
        respt3: 'a',
        respt4: 'a',
        respt5: 'a',
        respt6: 'a'
    }
];

const velocidad = [
    800, 600, 400, 300
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
const vamocontadr = document.querySelector ('.contador')

let nivelActual;

function cambiarTexto() {
    if (contador < 58) {
        texto0Actual = preguntas[contador];
        texto1Actual = respuestas[contador];
        texto2Actual = respuestas[contador];
        texto3Actual = respuestas[contador];
        texto4Actual = respuestas[contador];
        texto5Actual = respuestas[contador];
        texto6Actual = respuestas[contador];
        nivelActual = preguntas[contador];

        buenas= contador + 1;

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


//PASAR PAGINA
let btns = document.querySelector('.btn-testquestion');

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
})

//CONTAR

