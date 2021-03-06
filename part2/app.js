let baseUrl = 'https://deckofcardsapi.com/api/deck'

//1
async function valueSuit() {
    let req = await $.getJSON(`${baseUrl}/new/draw`)
    let {suit, value } = req.cards[0]
    console.log(`${value} of ${suit}`)
}

valueSuit()

//2
async function partTwo() {
    let firstReq = await $.getJSON(`${baseUrl}/new/draw/`)
    let deckId = firstReq.deck_id
    let {suit, value} = firstReq.cards[0]
    console.log(suit, value) 
    let secondReq = await $.getJSON(`${baseUrl}/${deckId}/draw/`)
    let suitTwo = secondReq.cards[0].suit
    let valueTwo = secondReq.cards[0].value
    console.log(suitTwo, valueTwo) 
}

partTwo()

// async function part2() {
//     let firstReq = await $.getJSON(`${baseUrl}/new/draw/`)
//     let deckId=firstReq.deck_id
//     let secondReq = await $.getJSON(`${baseUrl}/${deckId}/draw/`);
//     [firstReq, secondReq].forEach(card => {
//         let {suit, value} = card.cards[0]
//         console.log(`${value} of ${suit}`)
//     })
// }

// part2()



//3

async function init () {
    let $btn = $('button')
    let $gameBoard = $('#game-board')

    let deck = await $.getJSON(`${baseUrl}/new/shuffle/`);
    $btn.on('click', async function() {
        let card = await $.getJSON(`${baseUrl}/${deck.deck_id}/draw/`);
        let cardImg = card.cards[0].image;
        ///from solutioins
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $gameBoard.append(
            $('<img>', {
                src: cardImg,
                //from solutions
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                  }
            })
        )
    });
};

init();