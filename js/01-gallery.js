import { galleryItems } from './gallery-items.js';
// Change code below this line

// Варіант №1
const galleryList = document.querySelector('.gallery')
const galleryMarkUp = createGalleryMarkUp(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkUp)
galleryList.addEventListener('click', onGalleryClick)

function createGalleryMarkUp(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
              <img class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"/>
            </a>
         </div>`;
  }).join('');
}

const galleryLink = document.querySelectorAll(".gallery__link");
for (const link of galleryLink) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  })
}

function onGalleryClick(e) {
  if (!e.target.classList.contains('gallery__image')) {
    return;
  } else {
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}"/>`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", function keyHandler(e) {
          console.log(e);
          if (e.key === 'Escape') {
            instance.close();
            document.removeEventListener("keydown", keyHandler);
          }
        })
        }
      });
    instance.show();
  }
}

// //Варіант №2
// //Створюємо розмітку через createElement

// for (const item of galleryItems) {
//   const gallery = document.querySelector(".gallery");

//   // створюємо div
//   const galleryDiv = document.createElement("div");
//   galleryDiv.className = "gallery__item";
//   gallery.append(galleryDiv);
    
//   // створюємо link
//   const galleryLink = document.createElement("a");
//   galleryLink.className = "gallery__link";
//   galleryLink.setAttribute("href", item.original);
//   galleryDiv.append(galleryLink);

//   // створюємо image
//   const galleryImg = document.createElement("img");
//   galleryImg.className = "gallery__image";
//   galleryImg.setAttribute("src", item.preview);
//   galleryImg.setAttribute("data-source", item.original);
//   galleryImg.setAttribute("alt", item.description);
//   galleryLink.append(galleryImg);
// }

// const galleryLink = document.querySelectorAll(".gallery__link");
// for (const link of galleryLink) {
//   link.addEventListener("click", (event) => {
//     event.preventDefault();
//   })
// }

// const galleryImage = document.querySelectorAll(".gallery__image");
// for (const image of galleryImage) {
//   image.addEventListener("click", () => {
//     const instance = basicLightbox.create(
//       `<img src="${image.getAttribute("data-source")}" width="100%" height="100%">`,
//       {
//         onShow: (instance) => {
//           document.addEventListener("keydown", function keyHandler(e) {
//             console.log(e);
//             if (e.key === 'Escape') {
//               instance.close();
//               document.removeEventListener("keydown", keyHandler);
//             }
//           })
//         }
//       });
//     instance.show();
//   })
// }