 const baseURL="http://numbersapi.com";


//1
const favNum=6;

async function numFact(){
    let res = await axios.get(`${baseURL}/${favNum}?json`)
console.log(res)
}

numFact()



//2
const favNums=[1,2,3,];

async function getNumsData(){
    let factData = 
    await $.getJSON(`${baseURL}/${favNums}?json`)

    $('<ul>').appendTo('body')
    for(let [key, value] of Object.entries(factData)) {
        $('<li>').text(value).appendTo('ul')
    }
}

getNumsData()

//3
async function  getMoreNumFacts(){
    let res = await Promise.all([
            $.getJSON(`${baseURL}/${favNum}?json`),
            $.getJSON(`${baseURL}/${favNum}?json`),
            $.getJSON(`${baseURL}/${favNum}?json`),
            $.getJSON(`${baseURL}/${favNum}?json`),
    ]).then(facts => {
        facts.forEach(data => $('body').append(`<p>${data.text}</p>`));
    })
}

getMoreNumFacts()
