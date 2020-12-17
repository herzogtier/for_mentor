// import templatesCadrGallery from '../templates/cardGallery.hbs';
// // import slider from './slider.js';
// // import templatesCardCategory from '../templates/category.hbs';


// const cardGallaryMarkup = document.querySelector('.gallery');

// function cardGalleryMarcup(data) {
//   const markup = templatesCadrGallery(data);
//   cardGallaryMarkup.insertAdjacentHTML('beforeend', markup);     
// }
// cardGalleryMarcup();


// function fetchCountryByName() { 

//   return fetch('https://callboard-backend.herokuapp.com/call/?page=1')
//     .then(response => {
//       return response.json();
//     }).then(({ businessAndServices }) => { return businessAndServices });
// };

// fetchCountryByName().then((data) => { 
//   console.log(data);
//   cardGalleryMarcup(data)
// });

// // console.log(cardGalleryMarcup);
// // __________________________


// // function rendercategory(image) {
// //     const markup = categoryCard(image);
// //     currBit.insertAdjacentHTML('beforeend', markup);
    
// // };

// //  function loadImages() { 
// //     return fetchCountryByName()
// //         .then(rendercategory);
        
    
// // };

  
import templatesCadrGallery from '../templates/cardGallery.hbs';
import templatesCategory from '../templates/category.hbs';
import { addSlider } from './slider.js';

import { BASE_URL } from '../constans/index.js'
import { Object } from 'core-js';

const cardGallaryMarkup = document.querySelector('.gallery');
const cardCategoryMarkup = document.querySelector('.main');
const translationCategory = {
        sales: 'Розпродаж',
        property: 'Нерухомість',
        transport: 'Транспорт',
        work: 'Робота',
        electronics: 'Електроніка',
        'business and services': 'Бізнес та послуги',
        'recreation and sport': 'Відпочинок та спорт',
        free: 'Віддам безкоштовно',
        trade: 'Обмін',
}


/*===============функция для рендеринга карточки товара=================*/
// function cardGalleryMarcup(res) {
//   const markupGallery = templatesCadrGallery(res);
//   return cardGallaryMarkup.insertAdjacentHTML('beforeend', markupGallery);    
// }
// cardGalleryMarcup();

/*===============функция для рендеринга категории товара=================*/
// function cardCategoryMarcup(res) {
//   const markupCategory = templatesCategory(res);
//   cardCategoryMarkup.insertAdjacentHTML('beforeend', markupCategory);    
// }



// function fetchCategorys() {  /* <--- попробовать вставить 2 параметр для, category*/

//   return fetch(`${BASE_URL}/call/?page=1`)
//     .then(response =>
//     {
//       return response.json();
//     }).then(respjson => { 
     
//       for (let key in respjson) { 
//         let carts = cardCategoryMarcup(respjson[key]);
//         console.log(carts);
        
//       } 
//     })
// };

// console.log(templatesCategory);


/*===========Ф-я для создания масива категорий (Запрос GET)===================*/
// let getCategory = async () => {
//    return await fetch(`${BASE_URL}/call/?page=1`)
//     .then(response => response.json())
//       .then(result => {
//         console.log("result",result);
//         return result;
//       });
// }

// let addMarcup = (categories) => {
//   console.log("+++addMarcup", categories);
//   let marcup = categories.map(category => `<div class="category" data-category=${category}>${category}</div>`); // Надо заинжектить между дивами переведенные категории!!!
//   console.log("marcup", marcup);
//   cardCategoryMarkup.innerHTML = marcup;
//   }

//   let start = async () => {
//     let categories = await getCategory();
//     console.log("++++ start",categories);
//     addMarcup(categories);
    
//   }
//   start();




// function fetchCategorys() { 
//   return fetch(`${BASE_URL}/call/?page=2`)
//     .then(response => {
      
//       return response.json();
//     })
//     .then(respjson => {
//       // console.log(respjson);
//       let marcup = templatesCategory(Object.keys(respjson));
//       cardCategoryMarkup.insertAdjacentHTML('beforeend', marcup);
//       // console.log(marcup);
//       return respjson;
//     })
//     .then(respon => { 
//       let cardmarcup = '';
//       for (let rend in respon) {

//         cardmarcup = templatesCadrGallery(respon[rend]);
//         console.log(cardmarcup);
//         cardGallaryMarkup.insertAdjacentHTML('beforeend', cardmarcup);
        
//       }
 
//     })
// };
//   fetchCategorys();

function renderCard(categories) { 
  for (let card in categories) { 
    cardGallaryMarkup.insertAdjacentHTML('beforeend', categories[card])
  }
}

function fetchCategories() { 
  fetch(`${BASE_URL}/call/?page=1`)
    .then(r => r.json())
    .then(categories => {
      console.log(categories);
      for (let category in categories) { 
        cardCategoryMarkup.insertAdjacentHTML('beforeend', `<div class="category" data-category="category">${category}<ul class="gallery"></ul></div>`);
        renderCard(categories);
      }
      // return categories;
    })
    // .then(objCategories => { 
    //   // console.log(objCategories);
    //   for (let catData in objCategories) {
    //     let cardmarcup = templatesCadrGallery(objCategories[catData]);
    //     console.log(cardmarcup);

    //   }
    // })
}

fetchCategories();
      
       // let cardmarcup = templatesCadrGallery(respon);
      // cardGallaryMarkup.insertAdjacentHTML('beforeend', cardmarcup);
      // console.log(respon);
      // console.log(cardmarcup);
  
  
  
  
      // cardGalleryMarcup(categorySlider);
      // addSlider();

      // console.log(tem/platesCadrGallery(categorySlider));
      // for (let value in categorySlider) { 
      //   let carts = templatesCadrGallery(categorySlider[value]);
      //   console.log(categorySlider[value]);
      //   cardGallaryMarkup.insertAdjacentHTML('beforeend', carts);
        // console.log('carts');

      // }
    
    // }).then(//forin)




      // const res = response.json().map((resp) => {
      //   return console.log(resp);
      // .then(({ free }) => { return free });

// fetchCategorys(1).then((res) => { 
  // console.log(Object.getOwnPropertyNames(res));
  // res.map((resp) => { 
  //   return console.log(resp)
  // });
  // cardCategoryMarcup(res);
  // addSlider();
// });
// fetchCategorys(3).then((res) => { 
//   console.log(res);
//   cardGalleryMarcup(res);
//   addSlider();
// });
// fetchCategorys(2).then((res) => { 
//   console.log(res);
//   cardGalleryMarcup(res);
//   addSlider();
// });
// fetchCategorys(1).then((res) => { 
//   console.log(res);
//   cardGalleryMarcup(res);
//   addSlider();
// });