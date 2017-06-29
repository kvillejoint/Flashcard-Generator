//constructor for basic card
function BasicCard (front, back) {
    this.front = front;
    this.back = back;
};


// // Creating a new card for each question using our BasicCard constructor
//   for (var i = 0; i < cardData.length; i++) {
//     currentCard = new BasicCard(cardData[i].front, cardData[i].back);
//     cardArray.push(currentCard);
//   }

module.exports = BasicCard;