const inquirer = require('inquirer');
const BasicCard = require('./BasicCard.js');
const ClozeCard = require('./ClozeCard.js');
const fs = require('fs');
const cardLibrary = require('./cardLibrary.json');

const input = process.argv.slice(2);

let cardArray = [];

for (var i = 0; i < cardLibrary.length; i++) {
    if (cardLibrary[i].type == 'basic') {
        currentCard = new BasicCard(cardLibrary[i].front, cardLibrary[i].back);
        // console.log(currentCard);

        console.log('card front: ' + currentCard.front);
        console.log('card back: ' + currentCard.back);
        console.log('============================');
    } 
    
    if (cardLibrary[i].type == 'cloze') {
        currentCard = new ClozeCard(cardLibrary[i].partial, cardLibrary[i].cloze, cardLibrary[i].fullText);
        // console.log(currentCard);

        console.log('card partial: ' + currentCard.partial);
        console.log('card cloze: ' + currentCard.cloze);
        console.log('card fullText: ' + currentCard.fullText);
        console.log('============================');
    }
}