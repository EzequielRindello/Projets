
let info = {

};

info.name=[
    { 
        name: 'Ezequiel Rindello',
        
    }
]

info.name.forEach((name) => {

    let fullName = document.createElement('label'); 
    fullName.textContent = name.name; 

    document.querySelector('#name').appendChild(fullName);   
})

info.favoriteFood=[
    { 
        uno: 'Asado',
        
    },
    { 
        dos: 'Guiso de lentejas',
        
    },
];

info.favoriteFood.forEach((favoriteFood) => {

    let favoriteFoodUno = document.createElement('li'); 
    favoriteFoodUno.textContent = favoriteFood.uno; 

    let favoriteFoodDos = document.createElement('li'); 
    favoriteFoodDos.textContent = favoriteFood.dos; 

   
    document.querySelector('#favorite-foods').appendChild(favoriteFoodUno);
    document.querySelector('#favorite-foods').appendChild(favoriteFoodDos); 
    
})

info.hobbies=[
    { 
        uno: "Jugar videojuegos",
    },
    { 
        dos: "Andar en bici",
    },
    { 
        tres: "Leer",
    },
];

info.hobbies.forEach((hobbies) => {

    let hobbiesUno = document.createElement('dt'); 
    hobbiesUno.textContent = hobbies.uno; 

    let hobbiesDos = document.createElement('dt'); 
    hobbiesDos.textContent = hobbies.dos; 

    let hobbiesTres = document.createElement('dt'); 
    hobbiesTres.textContent = hobbies.tres; 
   
    document.querySelector('#hobbies').appendChild(hobbiesUno);
    document.querySelector('#hobbies').appendChild(hobbiesDos); 
    document.querySelector('#hobbies').appendChild(hobbiesTres); 
    
})

info.placeLived = [ 
    { 
        place: 'Mexico',
        length: '2 years'
    },
    {
        place: 'Rosario',
        length: '21 years'
    },
]

info.placeLived.forEach((placeLived) => {
    let placeLivedPlace = document.createElement('dt'); 
    placeLivedPlace.textContent = placeLived.place; 
   
    let placeLivedLength = document.createElement('dd');
    placeLivedLength.textContent = placeLived.length;
   
    document.querySelector('#places-lived').appendChild(placeLivedPlace); 
    document.querySelector('#places-lived').appendChild(placeLivedLength);
})

