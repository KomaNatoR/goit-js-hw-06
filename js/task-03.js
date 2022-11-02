const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');
listEl.classList.add('task3-list');

const arrayOfImages = images.map(image => 
  `<li>
    <img src="${image.url}" alt="${image.alt}" width="100">
  </li>`  
  )
  .join('');

listEl.insertAdjacentHTML("afterbegin", arrayOfImages);


    // const itemEl = document.createElement('li');
    // const image = document.createElement('img');
    // // image.classList.add('task3-itemImg');
    // image.src = element.url;
    // image.alt = element.alt;
    // image.width = '100';

    // itemEl.append(image);

    // return itemEl;


  // console.log(arrayOfImages);
// listEl.append(...arrayOfImages);

// const itemEl = document.createElement('li');
// const image = document.createElement('img');
// image.src = images[0].url;
// image.alt = images[0].alt;
// itemEl.append(image);
// listEl.append(itemEl);

// console.log(listEl);
