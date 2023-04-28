const schedule = document.querySelector('.schedule');
const spks = document.querySelector('.ContainerSpk');
const bcontainer = document.querySelector('.bContainer');
const logo = document.querySelector('.Logo');
const past = document.querySelector('.past');
const footer = document.querySelector('.footer_hidde');
const spksc = document.querySelector('.speakers_container');
const about = document.querySelector('.about_link');
const description1 = document.querySelector('.description1');
const description = document.querySelector('.description2');
const hello = document.querySelector('.hello');
const date = document.querySelector('.date');
const locationc = document.querySelector('.location');
const homel = document.querySelector('.home_link');
const mprogram = document.querySelector('.MainProgram');

for (let i = 0; i < 5; i += 1) {
  const elementli = document.createElement('li');
  schedule.append(elementli);
  elementli.className = 'Event';
  elementli.innerHTML = `
    <ul class="eElements">
    <li class="eElement${(i + 1)}" id="eElementc">
      <div class="eimg"></div>
      <p class="etittle"></p>
      <p class="edescription"></p>
    </li>
   </ul>
   `;
}

const speakersdata = [
  {
    img: 'img/spk1.png',
    name: 'Phil Spendcer',
    job: 'He currently holds the position of CEO of Gaming at Microsea.',
    look: 'He currently holds the position of CEO of Gaming at Microsea.',
  },
  {
    img: 'img/spk1.png',
    name: 'Phil Spendcer',
    job: 'He currently holds the position of CEO of Gaming at Microsea.',
    look: 'He currently holds the position of CEO of Gaming at Microsea.',
  },
  {
    img: 'img/spk1.png',
    name: 'Phil Spendcer',
    job: 'He currently holds the position of CEO of Gaming at Microsea.',
    look: 'He currently holds the position of CEO of Gaming at Microsea.',
  },

  {
    img: 'img/spk1.png',
    name: 'Phil Spendcer',
    job: 'He currently holds the position of CEO of Gaming at Microsea.',
    look: 'He currently holds the position of CEO of Gaming at Microsea.',
  },

  {
    img: 'img/spk1.png',
    name: 'Phil Spendcer',
    job: 'He currently holds the position of CEO of Gaming at Microsea.',
    look: 'He currently holds the position of CEO of Gaming at Microsea.',
  },

  {
    img: 'img/spk1.png',
    name: 'Phil Spendcer',
    job: 'He currently holds the position of CEO of Gaming at Microsea.',
    look: 'He currently holds the position of CEO of Gaming at Microsea.',
  },
];


for (let i = 0; i < 6; i += 1) {
  const spk = document.createElement('div');
  spk.className = 'spk';
  spks.appendChild(spk);
  spk.innerHTML = `
  <div class="photo_container">
    <img src="img/chess-background 1.png" alt="backgroundchess" class="chess">
    <img src="${speakersdata[i].img}" alt="photo of speaker" class="spkimg">
  </div>
  <div class="spkrdescription">
    <p id="name">${speakersdata[i].name}</p>
    <p id="job">${speakersdata[i].job}</p>
    <hr class=line_2>
    <p id="look">${speakersdata[i].look}</p>
  </div>
  `;
}

const Sbutton = document.createElement('button');
const Sbutton2 = document.createElement('button');
bcontainer.appendChild(Sbutton);
bcontainer.appendChild(Sbutton2);
Sbutton.className = "see_more";
Sbutton2.className = "see_less";
Sbutton2.classList.toggle('HideB');
Sbutton.innerHTML = `See More<img src="img/sonnycandra 1.png" alt="down arrow" class="Darrow">`;
Sbutton2.innerHTML = `See Less<img src="img/sonnycandra 2.png" alt="down arrow" class="Darrow">`;


Sbutton.addEventListener('click', () => {
  spks.classList.toggle('open');
  logo.classList.toggle('open');
  past.classList.toggle('open');
  footer.classList.toggle('open');
  Sbutton2.classList.toggle('HideB');
  Sbutton.classList.toggle('HideB');
});
Sbutton2.addEventListener('click', () => {
  spks.classList.toggle('open');
  logo.classList.toggle('open');
  past.classList.toggle('open');
  footer.classList.toggle('open');
  Sbutton2.classList.toggle('HideB');
  Sbutton.classList.toggle('HideB');
});

about.addEventListener('click', () => {
  spksc.classList.toggle('HideB');
  mprogram.classList.toggle('HideB');
  description.classList.toggle('descriptionchange');
  description.classList.toggle('expand');
  description1.classList.toggle('expand');
  hello.classList.toggle('expand');
  date.classList.toggle('expand');
  date.classList.toggle('datechange');
  locationc.classList.toggle('expand');
  locationc.classList.toggle('locationchange');
  logo.classList.toggle('open');
  past.classList.toggle('open');
});

homel.addEventListener('click', () => {
  spksc.classList.remove('HideB');
  description.classList.remove('descriptionchange');
  description.classList.remove('expand');
  description1.classList.remove('expand');
  hello.classList.remove('expand');
  date.classList.remove('expand');
  date.classList.remove('datechange');
  locationc.classList.remove('expand');
  locationc.classList.remove('locationchange');
  logo.classList.toggle('open');
  past.classList.toggle('open');
});

const m_menu = document.querySelector('.mbl-menu');
const hamb = document.querySelector('.hamimg');
const imgclose = document.querySelector('.img-close');
const homeb = document.querySelector('.m-menu-tag1');
const aboutm = document.querySelector('.m-menu-tag2');
const sponsorb = document.querySelector('.m-menu-tag3');

function menubuttonc() {
  m_menu.classList.toggle('mbl-menu_visible');
  spks.classList.remove('open');
  logo.classList.remove('open');
  past.classList.remove('open');
  footer.classList.remove('open');
  Sbutton.classList.toggle('HideB');
  Sbutton2.classList.toggle('HideB');
}
function menubutton() {
  m_menu.classList.toggle('mbl-menu_visible');
  spks.classList.toggle('open');
  logo.classList.toggle('open');
  past.classList.toggle('open');
  footer.classList.toggle('open');
  Sbutton.classList.toggle('HideB');
  Sbutton2.classList.toggle('HideB');
}

hamb.addEventListener('click', () => {
  m_menu.classList.toggle('mbl-menu_visible');
});
imgclose.addEventListener('click', () => {
  m_menu.classList.toggle('mbl-menu_visible');
});

homeb.addEventListener('click', menubuttonc);
sponsorb.addEventListener('click', menubutton);
aboutm.addEventListener('click', menubutton);