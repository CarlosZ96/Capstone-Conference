const schedule = document.querySelector('.schedule');
const spks = document.querySelector('.ContainerSpk');
const bcontainer = document.querySelector('.bContainer');
const logo = document.querySelector('.Logo');
const past = document.querySelector('.past');
const footer = document.querySelector('.footer_hidde');

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

