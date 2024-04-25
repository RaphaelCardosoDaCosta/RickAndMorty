const input = document.getElementById('input');
const btnOk = document.getElementById('btnOK');
const character = document.getElementById('character');
const image = document.getElementById('image');

const container = document.getElementById('container');
const content = document.getElementById('content');

function getProfile (IDvalue) {
    const req = fetch(`https://rickandmortyapi.com/api/character/${IDvalue}`)
        .then((data) =>
            data.json());

    return req;
}


btnOk.addEventListener('click', async () => {
    const search = await getProfile(input.value);
    console.log(search)

    container.style.display = "none";
    character.style.display = "flex";
    
    const inArray = Object.entries(search);


    inArray.map((keys) => content.innerHTML = `<h3> name: ${search.name} </h3>
                                                <h3> origin: ${search.origin.name} </h3>
                                                <h3> species: ${search.species} </h3>
                                                <h3> gender: ${search.gender} </h3>
                                                <h3> status: ${search.status} </h3>`);

    image.src = search.image;
})












