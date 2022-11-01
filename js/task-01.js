const mainList = document.querySelectorAll('.item');
// console.log(mainList);
console.log(`Number of categories: ${mainList.length}`);

mainList.forEach(categoia => {
    const subCategoriaTitle = categoia.querySelector('h2');
    const subCategoriaItem = categoia.querySelectorAll('li');
    
    console.log(`Category: ${subCategoriaTitle.textContent}`);
    console.log(`Elements: ${subCategoriaItem.length}`);
});