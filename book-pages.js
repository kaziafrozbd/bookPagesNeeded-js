function pageRequirements(book1, book2, book3){
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;
    const totalBook1Pages = book1Pages * book1;
    const totalBook2Pages = book2Pages * book2;
    const totalBook3Pages = book3Pages * book3;
    const totalPages = totalBook1Pages + totalBook2Pages + totalBook3Pages;
    return totalPages;
}
const totalPagesNeeded = pageRequirements(4, 3, 5);
console.log(totalPagesNeeded);