//constructor for cloze card
function ClozeCard (fullText, cloze, partial) {
    this.text = text.split(cloze);
    this.cloze = cloze;
    this.partial = partial;
};

module.exports = ClozeCard;