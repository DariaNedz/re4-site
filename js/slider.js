const characters = [
    {
        name: "Leon S. Kennedy",
        img: "images/leon.jpg",
        description: "Raccoon City survivor and U.S. government agent sent to rescue the president's daughter."
    },

    {
        name: "Ashley Graham",
        img: "images/ashley.jpg",
        description: "The daughter of the President of the U.S. who has been kidnapped by the Los Illuminados cult. Leon is sent to rescue her from a remote village."
    },

    {
        name: "Ada Wong",
        img: "images/ada.jpg",
        description: "A mysterious spy with unknown motives. Ada works for a secret organization and is searching for a sample of the Las Plagas parasite."
    },
    {
        name: "Luis Serra",
        img: "images/luis.png",
        description: "A former researcher connected to the Los Illuminados cult. Luis once worked on the Las Plagas parasite but later regretted his involvement."
    },

    {
        name: "Osmund Saddler",
        img: "images/osmund.jpg",
        description: "The leader of the Los Illuminados cult. He plans to use the Las Plagas parasite to control influential world leaders."
    },

    {
        name: "Ramon Salazar",
        img: "images/salazar.jpg",
        description: "The nobleman who controls the castle region. Descended from a long line of castellans, Salazar allowed the Los Illuminados cult to gain power."
    },

    {
        name: "Bitores Mendez",
        img: "images/mendez.jpg",
        description: "Village chief and one of the cult's strongest followers. Mendez oversees the infected villagers and enforces Saddler's rule."
    }
];

let index = 0;

function showCharacter() {
    document.getElementById("name").textContent = characters[index].name;
    document.getElementById("character-img").src = characters[index].img;
    document.getElementById("description").textContent = characters[index].description;
}

function next() {
    index++;

    if (index >= characters.length) {
        index = 0;
    }

    showCharacter();
}

function prev() {
    index--;

    if (index < 0) {
        index = characters.length - 1;
    }

    showCharacter();
}

showCharacter();

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.onclick = () => {
    document.body.classList.toggle("light");
};