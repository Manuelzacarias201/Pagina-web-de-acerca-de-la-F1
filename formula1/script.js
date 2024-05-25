function showRaceDetails(race) {
    const raceDetails = {
        monaco: {
            circuito: "Circuito de Mónaco",
            vueltaRapida: "1:12.909 - Lewis Hamilton (2021)",
            maxGanador: "Ayrton Senna - 6 victorias",
            datosCuriosos: "El Gran Premio de Mónaco es conocido por ser uno de los más prestigiosos y difíciles del calendario.",
            imagen:"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monoco_Circuit.png"
        },
        canada: {
            circuito: "Circuito Gilles Villeneuve",
            vueltaRapida: "1:13.078 - Valtteri Bottas (2023)",
            maxGanador: "Lewis Hamilton - 7 victorias",
            datosCuriosos: "El circuito lleva el nombre del legendario piloto canadiense Gilles Villeneuve.",
            imagen: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png"
        },
        britain: {
            circuito: "Circuito de Silverstone",
            vueltaRapida: "1:27.097 - Max Verstappen (2023)",
            maxGanador: "Lewis Hamilton - 8 victorias",
            datosCuriosos: "Silverstone es conocido como el hogar del automovilismo británico y fue el escenario del primer Gran Premio de F1 en 1950.",
            imagen: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png"
        },
        spain: {
            circuito: "Circuito de Barcelona-Catalunya",
            vueltaRapida: "1:18.149 - Lewis Hamilton (2021)",
            maxGanador: "Michael Schumacher - 6 victorias",
            datosCuriosos: "El Gran Premio de España es una de las carreras más antiguas en el calendario de la F1, habiendo debutado en 1951. El circuito es conocido por su combinación de curvas rápidas y lentas, y es un lugar popular para las pruebas de pretemporada."
        },
        austria: {
            circuito: "Red Bull Ring",
            vueltaRapida: "1:05.619 - Carlos Sainz (2020",
            maxGanador: "Alain Prost - 3 victorias",
            datosCuriosos: " El Gran Premio de Austria ha sido parte del calendario de Fórmula 1 de forma intermitente desde 1964. El Red Bull Ring, anteriormente conocido como A1-Ring y Österreichring, es conocido por su pintoresco entorno alpino y sus secciones rápidas y fluidas. Desde su renovación y regreso al calendario en 2014, ha sido una carrera emocionante, a menudo influenciada por las condiciones meteorológicas variables.",
            imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit"
        }
    };

    const details = raceDetails[race];

    const detailsContainer = document.getElementById('race-details');
    detailsContainer.innerHTML = `
        <h3>Detalles del ${race.charAt(0).toUpperCase() + race.slice(1)}</h3>
        <img src="${details.imagen}" alt="${race.charAt(0).toUpperCase() + race.slice(1)}">
        <p><strong>Circuito:</strong> ${details.circuito}</p>
        <p><strong>Vuelta más rápida:</strong> ${details.vueltaRapida}</p>
        <p><strong>Máximo ganador:</strong> ${details.maxGanador}</p>
        <p><strong>Datos curiosos:</strong> ${details.datosCuriosos}</p>
    `;
    detailsContainer.style.display = 'block';
}

$(document).ready(function(){
    $('.news-grid').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.race-grid').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
$(document).ready(function(){
    $('.pilots-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});