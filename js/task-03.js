const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');

const makeImagesMarkup = val => {
    const { img, url } = val;
    return `
        <li>
            <img url="${url}" alt="alt"></img>
        </li>
    `;
}

const makeImageFromArray = images.map(makeImagesMarkup)
  .join('');
galleryEl.insertAdjacentHTML('beforeend', makeImageFromArray);
// const makeImageFromArray = (array) => {
//     return array.map(arr => {
//         const liTag = document.createElement('li');
//         const imageTag = document.createElement('img');
//         imageTag.url = arr.url;
//         imageTag.alt = arr.alt;

//         liTag.appendChild(imageTag);

//         return liTag;
//     })
// }
// const imageElement = makeImageFromArray(images);
// galleryEl.append(...imageElement);