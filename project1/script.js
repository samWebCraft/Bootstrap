const bodyParts = {
    head:{
        title:"Head",
        description:"The head contains the brain, eyes, ears, nose and mouth. The brain controls the entire body."
    },

    heart:{
        title:"Heart",
        description:"The heart pumps blood throughout the body and supplies oxygen to organs."
    },

    lungs:{
        title:"Lungs",
        description:"The lungs help us breathe by exchanging oxygen and carbon dioxide."
    },

    stomach:{
        title:"Stomach",
        description:"The stomach digests food using acids and enzymes."
    },

    liver:{
        title:"Liver",
        description:"The liver removes toxins, stores nutrients and produces bile."
    },

    legs:{
        title:"Legs",
        description:"Legs support the body's weight and help us walk, run and jump."
    }
};

function showInfo(part){
    document.getElementById("title").innerHTML = bodyParts[part].title;
    document.getElementById("description").innerHTML = bodyParts[part].description;
}