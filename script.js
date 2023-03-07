const generateBtn = document.querySelector('.generate-btn');
const cardTitle = document.querySelector('.card-title');
const cardSeason = document.querySelector('.card-season');
const cardEpisode = document.querySelector('.card-episode');
const cardImg = document.querySelector('.card-img');
const episodes = [
  {
    title: 'Simpsons Roasting on an Open Fire',
    season: 1,
    episode: 1,
    imgSrc: 'https://www.simpsonsworld.com/assets/img/fox-sheared.jpg'
  },
  {
    title: 'Bart the Genius',
    season: 1,
    episode: 2,
    imgSrc: 'https://www.simpsonsworld.com/assets/img/fox-sheared.jpg'
  },
  {
    title: 'Homer\'s Odyssey',
    season: 1,
    episode: 3,
    imgSrc: 'https://www.simpsonsworld.com/assets/img/fox-sheared.jpg'
  },
  // Agrega más episodios aquí
];

function getRandomEpisode() {
  const randomIndex = Math.floor(Math.random() * episodes.length);
  return episodes[randomIndex];
}

function displayEpisode() {
  const episode = getRandomEpisode();
  cardTitle.innerText = episode.title;
  cardSeason.innerText = `Season ${episode.season}`;
  cardEpisode.innerText = `Episode ${episode.episode}`;
  cardImg.setAttribute('src', episode.imgSrc);
}

generateBtn.addEventListener('click', displayEpisode);
