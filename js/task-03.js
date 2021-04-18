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
galleryEl.classList.add('list-images')
// galleryEl.style.display = 'grid';
// galleryEl.style.gridTemplateColumns = '1fr 1fr 1fr';
// galleryEl.style.gridAutoRows = 'min-content';
// galleryEl.style.gridGap = '5px';
// galleryEl.style.padding = '5px 5px';
// galleryEl.style.margin = '0px';
// galleryEl.style.backgroundColor = 'teal';


const makeImagesMarkup = val => {
    const { url, alt } = val;
    return `
        <li class="list-images__item">
            <img class="list-images__image" src="${url}" alt="${alt}"></img>
        </li>
    `;
}

const makeImageFromArray = images.map(makeImagesMarkup)
  .join('');
galleryEl.insertAdjacentHTML('beforeend', makeImageFromArray);




