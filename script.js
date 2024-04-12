const input = document.getElementById('input');
const btnOk = document.getElementById('btnOK');
const character = document.getElementById('character');
const image = document.getElementById('image');

const container = document.getElementById('container');
const content = document.getElementById('content');

// const name = document.getElementById('name')
// const status = document.getElementById('status')
// const species = document.getElementById('species')
// const gender = document.getElementById('gender')



function getProfile (IDvalue) {
    const req = fetch(`https://rickandmortyapi.com/api/character/${IDvalue}`)
        .then((data) =>
            data.json());

    return req;
}

async function ex () {
    const requisicao = await getProfile(99);

    const sacar = Object.keys(requisicao);
    
    console.log(sacar)
}

ex();




btnOk.addEventListener('click', async () => {
    const search = await getProfile(input.value);
    console.log(search)

    container.style.display = "none";
    character.style.display = "flex";
    
    const inArray = Object.entries(search);

    let IDname = inArray[1];
    let IDstatus = inArray[2];
    let IDspecies = inArray[3];
    let IDgender = inArray[5];

    console.log(inArray)


    inArray.map((keys) => content.innerHTML += `<li> ${keys} </li>`)

    image.src = search.image;

    // content.innerHTML = `${"heloooow"}`

})












