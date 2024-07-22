// Define your Book class here:
class Book {
    constructor(title, author, copyDate, ISBN, numPages, numChecked, discarded) {
        this.title = title;
        this.author = author;
        this.copyDate = copyDate;
        this.ISBN = ISBN;
        this.numPages = numPages;
        this.numChecked = numChecked;
        this.discarded = discarded;

    }

    checkout( uses = 1) {
        this.numChecked += uses; 
    }
}

// Define your Manual and Novel classes here:
class Novel extends Book {
    constructor(title, author, copyDate, ISBN, numPages, numChecked, discarded) {
        super(title, author, copyDate, ISBN, numPages, numChecked, discarded);
    }

    usesDiscard() {
        if (this.numChecked >= 100) {
            this.discarded = "Yes";
        }
    }

}
class Manual extends Book {
    constructor(title, author, copyDate, ISBN, numPages, numChecked, discarded) {
        super(title, author, copyDate, ISBN, numPages, numChecked, discarded);
    }
yearDiscard(currentYear) {
    if (currentYear - this.copyDate > 5) {
        this.discarded = "Yes";
    }
}

}
// Declare the objects for exercises 2 and 3 here:
let pridePrejudice = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");
let shuttleManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

// Code exercises 4 & 5 here:
shuttleManual.yearDiscard(2024);
pridePrejudice.checkout(5);
console.log(shuttleManual.discarded);