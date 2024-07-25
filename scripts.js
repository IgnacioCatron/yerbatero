const plantsData = {
    dolorCabeza: [
        "Menta",
        "Manzanilla",
        "Jengibre",
        "Lavanda"
    ],
    ansiedad: [
        "Lavanda",
        "Valeriana",
        "Manzanilla",
        "Pasiflora"
    ],
    digestión: [
        "Jengibre",
        "Hinojo",
        "Menta",
        "Manzanilla"
    ],
    insomnio: [
        "Pasiflora",
        "Tilo",
        "Valeriana",
        "Manzanilla"
    ],
    resfriado: [
        "Eucalipto",
        "Equinácea",
        "Jengibre",
        "Menta"
    ],
    dolorMuscular: [
        "Romero",
        "Árnica",
        "Menta",
        "Lavanda"
    ],
    estrés: [
        "Valeriana",
        "Lavanda",
        "Manzanilla",
        "Pasiflora"
    ],
    inflamación: [
        "Cúrcuma",
        "Jengibre",
        "Manzanilla",
        "Romero"
    ],
    tos: [
        "Eucalipto",
        "Menta",
        "Tomillo",
        "Jengibre"
    ]
};

const plantDetails = {
    Menta: {
        image: "images/menta.jpg",
        info: "La menta es una planta versátil conocida por sus propiedades analgésicas y antiinflamatorias, lo que la hace efectiva para aliviar dolores de cabeza y resfriados comunes. También es útil para mejorar la digestión y reducir los problemas estomacales. Su aroma refrescante y calmante ayuda a relajar los músculos y reducir la tensión, proporcionando alivio en casos de dolor muscular y tos.",
        preparation: "Infusión: Añadir 1 cucharadita de hojas secas de menta en una taza de agua hirviendo. Dejar reposar por 10 minutos y colar.",
        precautions: "No recomendado para personas con reflujo gastroesofágico. Evitar su uso prolongado."
    },
    Manzanilla: {
        image: "images/manzanilla.jpg",
        info: "La manzanilla es una planta muy conocida por sus efectos calmantes y antiinflamatorios. Es eficaz para aliviar el dolor de cabeza, reducir la ansiedad, mejorar la digestión y tratar problemas de insomnio. Además, puede ayudar a reducir la inflamación y proporcionar alivio en casos de estrés y resfriado común. Sus flores se utilizan en infusiones que son suaves y agradables al gusto.",
        preparation: "Infusión: Añadir 2 cucharaditas de flores secas de manzanilla en una taza de agua hirviendo. Dejar reposar por 10 minutos y colar.",
        precautions: "Evitar en personas alérgicas a las plantas de la familia de las asteráceas."
    },
    Jengibre: {
        image: "images/jengibre.jpg",
        info: "El jengibre es conocido por sus múltiples beneficios para la salud, especialmente en el alivio de problemas digestivos, dolores de cabeza, resfriados y tos. Sus propiedades antiinflamatorias también lo hacen efectivo para reducir la inflamación y el dolor muscular. Además, puede ayudar a mejorar la circulación sanguínea y fortalecer el sistema inmunológico.",
        preparation: "Infusión: Añadir 1 cucharadita de jengibre fresco rallado en una taza de agua hirviendo. Dejar reposar por 10 minutos y colar.",
        precautions: "No recomendado para personas con úlceras gástricas o reflujo gastroesofágico."
    },
    Lavanda: {
        image: "images/lavanda.jpg",
        info: "La lavanda es una planta aromática muy apreciada por sus propiedades relajantes y sedantes. Es eficaz para reducir la ansiedad, aliviar dolores de cabeza y estrés, y mejorar la calidad del sueño en casos de insomnio. También puede proporcionar alivio en casos de dolor muscular debido a su efecto calmante. Su aceite esencial es muy utilizado en aromaterapia y masajes.",
        preparation: "Aceite esencial: Añadir unas gotas a un difusor o aplicar en las sienes con un aceite portador.",
        precautions: "No ingerir el aceite esencial. Puede causar irritación en pieles sensibles."
    },
    Valeriana: {
        image: "images/valeriana.jpg",
        info: "La valeriana es una planta medicinal conocida por sus fuertes propiedades sedantes y tranquilizantes, lo que la hace muy eficaz para tratar la ansiedad, el estrés y el insomnio. También puede ayudar a reducir los dolores de cabeza y mejorar la calidad del sueño. Su uso prolongado puede llevar a una sensación general de relajación y bienestar.",
        preparation: "Infusión: Añadir 1 cucharadita de raíz seca de valeriana en una taza de agua hirviendo. Dejar reposar por 10 minutos y colar.",
        precautions: "No usar durante más de dos semanas consecutivas. Puede causar somnolencia."
    },
    Hinojo: {
        image: "images/hinojo.jpg",
        info: "El hinojo es conocido por sus propiedades digestivas y carminativas, lo que lo hace eficaz para aliviar la indigestión, los gases y otros problemas digestivos. Además, puede ayudar a reducir la inflamación y proporcionar alivio en casos de dolor muscular. Sus semillas se utilizan comúnmente en infusiones y como condimento en la cocina.",
        preparation: "Infusión: Añadir 1 cucharadita de semillas de hinojo en una taza de agua hirviendo. Dejar reposar por 10 minutos y colar.",
        precautions: "Evitar en personas con alergia al apio o zanahorias."
    },
    Pasiflora: {
        image: "images/pasiflora.jpg",
        info: "La pasiflora es una planta conocida por sus propiedades sedantes y calmantes, lo que la hace efectiva para tratar el insomnio, reducir la ansiedad y el estrés. También puede ser útil para aliviar el dolor de cabeza y mejorar la calidad del sueño. Su uso regular puede llevar a una mejora significativa en la relajación y el bienestar general.",
        preparation: "Infusión: Añadir 1 cucharadita de hojas secas de pasiflora en una taza de agua hirviendo. Dejar reposar por 10 minutos y colar.",
        precautions: "No usar durante el embarazo. Puede causar somnolencia durante el día."
    },
    Tilo: {
        image: "images/tilo.jpg",
        info: "El tilo es conocido por sus propiedades calmantes y relajantes, lo que lo hace muy eficaz para tratar el insomnio, reducir la ansiedad y el estrés. También puede ayudar a aliviar dolores de cabeza y mejorar la digestión. Sus flores son utilizadas en infusiones que son suaves y tienen un efecto tranquilizante en el sistema nervioso.",
        preparation: "Infusión: Añadir 1 cucharadita de flores de tilo en una taza de agua hirviendo. Dejar reposar por 10 minutos y colar.",
        precautions: "No usar en exceso. Puede interactuar con medicamentos sedantes."
    },
    Eucalipto: {
        image: "images/eucalipto.jpg",
        info: "El eucalipto es muy conocido por sus propiedades expectorantes y descongestionantes, lo que lo hace eficaz para aliviar los síntomas del resfriado, como la congestión nasal y la tos. También puede proporcionar alivio en casos de dolor muscular y dolores de cabeza debido a su efecto refrescante y antiinflamatorio. Su aceite esencial es ampliamente utilizado en inhalaciones y masajes.",
        preparation: "Inhalación: Añadir unas gotas de aceite esencial en un recipiente con agua caliente y respirar el vapor.",
        precautions: "No ingerir el aceite esencial. Puede causar irritación en personas con asma."
    },
    Equinácea: {
        image: "images/equinacea.jpg",
        info: "La equinácea es una planta muy conocida por sus propiedades inmunoestimulantes, lo que la hace eficaz para fortalecer el sistema inmunológico y combatir el resfriado común. También puede ayudar a reducir la inflamación y proporcionar alivio en casos de estrés y ansiedad. Sus raíces y flores se utilizan comúnmente en infusiones y suplementos.",
        preparation: "Infusión: Añadir 1 cucharadita de raíz seca de equinácea en una taza de agua hirviendo. Dejar reposar por 10 minutos y colar.",
        precautions: "No usar en personas con enfermedades autoinmunes."
    },
    Romero: {
        image: "images/romero.jpg",
        info: "El romero es conocido por sus propiedades analgésicas y antiinflamatorias, lo que lo hace eficaz para aliviar el dolor muscular y reducir la inflamación. También puede proporcionar alivio en casos de dolores de cabeza y mejorar la circulación sanguínea. Sus hojas y aceite esencial se utilizan comúnmente en infusiones y masajes terapéuticos.",
        preparation: "Aceite esencial: Aplicar unas gotas diluidas en un aceite portador sobre la zona afectada.",
        precautions: "No ingerir el aceite esencial. Puede causar irritación en pieles sensibles."
    },
    Árnica: {
        image: "images/arnica.jpg",
        info: "El árnica es ampliamente utilizado para tratar dolores musculares, reducir la inflamación y acelerar la recuperación de lesiones. También puede proporcionar alivio en casos de dolor de cabeza y estrés debido a su efecto calmante. Su uso tópico en forma de ungüento es muy efectivo para el tratamiento de contusiones y esguinces.",
        preparation: "Ungüento: Aplicar una pequeña cantidad sobre la zona afectada y masajear suavemente.",
        precautions: "No aplicar sobre heridas abiertas. Puede causar irritación en algunas personas."
    },
    Cúrcuma: {
        image: "images/curcuma.jpg",
        info: "La cúrcuma es un potente antiinflamatorio natural conocido por sus múltiples beneficios para la salud. Es eficaz para reducir la inflamación, aliviar dolores musculares y mejorar la digestión. También puede ayudar a fortalecer el sistema inmunológico y proporcionar alivio en casos de dolor de cabeza y resfriado común. Su raíz en polvo se utiliza comúnmente en infusiones y como especia en la cocina.",
        preparation: "Té: Añadir 1 cucharadita de cúrcuma en polvo en una taza de agua caliente. Dejar reposar por 10 minutos y colar.",
        precautions: "No usar en exceso. Puede interactuar con medicamentos anticoagulantes."
    },
    Tomillo: {
        image: "images/tomillo.jpg",
        info: "El tomillo es conocido por sus propiedades antisépticas y expectorantes, lo que lo hace eficaz para aliviar la tos y los síntomas del resfriado. También puede proporcionar alivio en casos de dolor de cabeza y estrés debido a su efecto calmante. Sus hojas se utilizan comúnmente en infusiones y como especia en la cocina.",
        preparation: "Infusión: Añadir 1 cucharadita de tomillo seco en una taza de agua hirviendo. Dejar reposar por 10 minutos y colar.",
        precautions: "Evitar en personas con alergias a las plantas de la familia de las lamiáceas."
    }
}


function updatePlants() {
    const dolenciaSelect = document.getElementById('dolencia');
    const plantasList = document.getElementById('plantas-list');
    const selectedDolencia = dolenciaSelect.value;
    
    // Clear previous list items
    plantasList.innerHTML = '';
    
    if (selectedDolencia && plantsData[selectedDolencia]) {
        plantsData[selectedDolencia].forEach(plantName => {
            const listItem = document.createElement('li');
            listItem.textContent = plantName;
            listItem.onclick = () => showPlantInfo(plantDetails[plantName]);
            plantasList.appendChild(listItem);
        });
    }
}

function showPlantInfo(plant) {
    document.getElementById('plant-title').textContent = plant.name;
    document.getElementById('plant-image').src = plant.image;
    document.getElementById('plant-info').textContent = plant.info;
    document.getElementById('plant-preparation').textContent = plant.preparation;
    document.getElementById('plant-precautions').textContent = plant.precautions;
    
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
