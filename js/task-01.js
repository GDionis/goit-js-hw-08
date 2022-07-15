const categories = document.getElementById('categories').getElementsByClassName('item').length;
console.log('Number of categories: ', categories)

let title = document.getElementsByTagName('h2'),
    result = [];
for (let i = 0; i < title.length; i += 1){
        result.push(title[i].innerText)
}
console.log('Category: ', result[0])

let elements;
elements = document.querySelectorAll(".item")[0].querySelectorAll('li').length;
console.log('Elements: ', elements)

console.log('Category: ', result[1])
elements = document.querySelectorAll(".item")[1].querySelectorAll('li').length;
console.log('Elements: ', elements)

console.log('Category: ', result[2])
elements = document.querySelectorAll(".item")[2].querySelectorAll('li').length;
console.log('Elements: ', elements)