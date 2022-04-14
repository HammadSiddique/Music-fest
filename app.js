const mainMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

document.querySelectorAll('.close-nav').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = 'none';
  });
});

const artistsSection = document.querySelector('.artists-section');

const artistsList = [
  {
    name: 'Atif Aslam',
    title: 'Music artist',
    description: "Atif Aslam is one of the best artists in the history of Pakistan Music industry. Don't miss the oppurtunity to catch him alive.",
    img: 'img/atif.png',
  },
  {
    name: 'Ali Zafar',
    title: 'Music artist',
    description: 'Ali Zafar is one of the most talented artists who gave a new look to Urdu pop songs.',
    img: 'img/ali.png',
  },
  {
    name: 'Shae Gill',
    title: 'Music artist',
    description: 'Shae Gill is a young and talented singer. She has won a lot of hearts in the start of her career.',
    img: 'img/shae.png',
  },
  {
    name: 'Qurat-ul-Ain Balouch',
    title: 'Music artist',
    description: 'Qurat-ul-Ain-Baluch is one of the finest singers in Pakistan music industry. Witness her live in this fest. ',
    img: 'img/qnb.png',
  },
  {
    name: 'Shehzad Roy',
    title: 'Music artist',
    description: 'Shehzad roy is known for giving a new look to indie pop. Experience his music live here.',
    img: 'img/shehzad.png',
  },
  {
    name: 'Kashmir the Band',
    title: 'Music band',
    description: "Kashmir the Band is currently one of the best music bands in Pakistan ever. Can't wait to witness them live. So don't miss this.",
    img: 'img/kashmir.png',
  },
];

artistsSection.innerHTML = '';
for (let i = 0; i < artistsList.length; i += 1) {
  artistsSection.innerHTML += `
    <div class='artists'>
        <div class='artists-img'>
          <img src='${artistsList[i].img}' alt='${artistsList[i].name}' class='img1' />
        </div>
        <div class = 'artists-info'>
        <div class='artists-name'>
          <h4>${artistsList[i].name}</h4>
        </div>
          <div class='artists-title'>
            <h5> ${artistsList[i].title}</h5>
            <span></span>
          </div>
          <div class='artists-description'>
            <p>
              ${artistsList[i].description}
            </p>
            </div>
          </div>
  </div>
`;
}