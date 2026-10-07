const IMG = {
    e2005: "2005-messsi.jpg",
    e2014: "2014-messi.jpg",
    e2016: "messi-2016.jpg",
    e2021: "2021-messi.jpg",
    e2022: "que-mira-bobo.jpg",
    e18: "2022-messi.jpg",
    e2026: "2022-gente.jpg",

    f: [
        "familia.jpg",
        "niño.jpg",
        "hinchas.jpg",
        "bandera.jpg",
        "festejos.jpg",
        "tatuajes.jpg",
        "llorando.jpg",
        "casacas.jpg",
        "obelisco.jpg",
        "mdp.jpg",
        "abrazo.jpg"
    ],

    d: [
        "obelisco2.jpg",
        "familias.jpg",
        "personas.jpg"
    ]
};

const $ = (selector) => {
    return document.querySelector(selector);
};

function P(url, label, cls) {
    return `
        <div
            class="ph zoom ${cls || ''}"
            ${
                url
                    ? `style="background-image:url('${url}')"`
                    : ''
            }
        >
            ${
                url
                    ? ''
                    : `<i>${label}</i>`
            }
        </div>
    `;
}

const historia = [
    [
        "2005",
        "¿Quién es ese pibe?",
        "Debutó con la Mayor y lo echaron a los pocos minutos. Igual, ya se notaba que era distinto.",
        "e2005",
        "Foto: primeros años"
    ],
    [
        "2014",
        "Otra vez la final…",
        "Llegamos al Mundial de Brasil con la ilusión intacta. Se escapó en el alargue.",
        "e2014",
        "Foto: Brasil 2014"
    ],
    [
        "2016",
        "No te vayas.",
        "Otra final perdida y un mensaje que nadie quería leer. Todo el país le pidió que volviera.",
        "e2016",
        "Foto: Copa América 2016"
    ],
    [
        "2021",
        "POR FIN.",
        "Maracaná, la Copa América y el primer título con la Mayor. Se lloró en cada casa.",
        "e2021",
        "Foto: Maracaná"
    ],
    [
        "2022",
        "¿Qué mirás, bobo?",
        "La frase que se volvió remera, mural y chiste de sobremesa en todo el país.",
        "e2022",
        "Foto: Qatar"
    ],
    [
        "18.12.2022",
        "⭐⭐⭐",
        "La tercera estrella. El día en que todo lo que esperamos tuvo sentido.",
        "e18",
        "Foto: la calle ese día"
    ],
    [
        "2026",
        "Gracias, Leo.",
        "Veinte años después, solo queda agradecer.",
        "e2026",
        "Foto: tu recuerdo"
    ]
];

historia.forEach(
    ([year, title, description, image, label], index) => {

        const article =
            document.createElement("article");

        article.className = "pg rv";

        article.innerHTML = `
            <div
                class="pol"
                style="--r:${index % 2 ? 1.5 : -1.5}deg"
            >
                ${P(
                    IMG[image],
                    label
                )}

                <small>
                    ${year}
                </small>
            </div>

            <div>
                <div class="yr">
                    ${year}
                </div>

                <blockquote>
                    ${title}
                </blockquote>

                <p class="ex">
                    ${description}
                </p>
            </div>
        `;

        $("#al").appendChild(article);
    }
);

const recuerdos = [
    ["Familias mirando el partido", "a"],
    ["Chicos con la camiseta", ""],
    ["Hinchas en la calle", "b2"],
    ["Banderas", "c"],
    ["Festejos", ""],
    ["Gente llorando", "b2"],
    ["Tatuajes", ""],
    ["Camisetas", "c"],
    ["El Obelisco", "a"],
    ["Plazas", ""],
    ["Abrazos", ""]
];

$("#col").innerHTML =
    recuerdos
        .map(
            ([label, className], index) => {
                return P(
                    IMG.f[index],
                    label,
                    className
                );
            }
        )
        .join("");

const festejos = [
    "Foto: el Obelisco",
    "Foto: familias en la calle",
    "Foto: banderas y abrazos"
];

$("#fest").innerHTML =
    festejos
        .map(
            (label, index) => {
                return P(
                    IMG.d[index],
                    label,
                    index === 0 ? "w" : ""
                );
            }
        )
        .join("");

const tamanos = [
    3,
    5,
    8,
    12,
    17
];

$("#gr").innerHTML =
    tamanos
        .map(
            (value, index) => {
                return `
                    <div
                        class="g"
                        style="
                            --fs:clamp(
                                ${1.2 + value / 6}rem,
                                ${value * 0.9}vw,
                                ${value * 0.8}rem
                            );
                            --n:${index};
                            --o:${0.35 + index * 0.16};
                        "
                    >
                        Argentina
                    </div>
                `;
            }
        )
        .join("");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("in");

                        observer.unobserve(
                            entry.target
                        );
                    }
                }
            );
        },
        {
            threshold: 0.25
        }
    );

document
    .querySelectorAll(".rv")
    .forEach(
        element => observer.observe(element)
    );

const finalText = $("#ft");

function showText(text, final = false) {

    finalText.style.opacity = 0;

    setTimeout(
        () => {

            finalText.innerHTML = text;

            finalText.className =
                final ? "fin" : "";

            finalText.style.opacity = 1;

        },
        1100
    );
}

let started = false;

const finalObserver =
    new IntersectionObserver(
        (entries) => {

            if (
                entries[0].isIntersecting &&
                !started
            ) {

                started = true;

                setTimeout(
                    () => showText("20 años."),
                    200
                );

                setTimeout(
                    () => showText("207 partidos."),
                    3200
                );

                setTimeout(
                    () => showText("125 goles."),
                    6200
                );

                setTimeout(
                    () => showText("3 estrellas."),
                    9200
                );

                setTimeout(
                    () => {
                        finalText.style.opacity = 0;
                    },
                    12200
                );

                setTimeout(
                    () => {
                        showText(
                            "Gracias, Leo.",
                            true
                        );
                    },
                    13400
                );

                setTimeout(
                    () => {
                        showText(
                            "No te vas, Leo.<br><em>Te quedás acá.</em>",
                            true
                        );
                    },
                    17400
                );
            }
        },
        {
            threshold: 0.5
        }
    );

finalObserver.observe(
    $("#fin")
);