
      const generateBtn = document.querySelector('.generate-btn');
      const cardTitle = document.querySelector('.card-title');
      const cardSeasonEpisode = document.querySelector('.card-season-episode');
      const cardImg = document.querySelector('.card-img');
      const apiKey = 'b96b6953ec3b68b4949fd4bdd9886094';
      const seriesId = 456; // ID de los Simpson en TMDB
      const episodes = [
        {
          title: 'Simpsons Roasting on an Open Fire',
          season: 1,
          episode: 1,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BZjJjMzMwOTctODk5ZC00NWM4LTgyNjAtNjNmN2I1OTc5OTAyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'
        },
        {
            title: 'Bart the Genius',
            season: 1,
            episode: 2,
            imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNjk5OWZmZGEtZjdiOS00NWRkLTk2MTAtYzJhNDYxYzUwZWNkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'
        },
        {
            title: "Homer's Odyssey",
            season: 1,
            episode: 3,
            imgSrc:
            'https://m.media-amazon.com/images/M/MV5BZTIxMDk3MTEtNDExYi00MDBhLTljMmMtZjI0Y2I1YTlkZGY1XkEyXkFqcGdeQXVyMjI4OTg3MTc@._V1_.jpg'
        },
        {
            title: "There's No Disgrace Like Home",
            season: 1,
            episode: 4,
            imgSrc:
            'https://m.media-amazon.com/images/M/MV5BZDdiMjQxOWYtN2FhMC00MWQwLTljMTMtZDIwMzQzY2Q4MTQ3XkEyXkFqcGdeQXVyMjI4OTg3MTc@._V1_.jpg'
        },
        {
            title: 'Bart the General',
            season: 1,
            episode: 5,
            imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMWM0MWNiMDQtNTc5Mi00MGYyLTlhZjUtYmE1YTRmNDRmMjc2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'
        },
        {
            title: 'Moaning Lisa',
            season: 1,
            episode: 6,
            imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNTFkZDVhODktYWI5NC00Yzc0LTg4ZmEtZjY1MGRjMDdkYTZiXkEyXkFqcGdeQXVyMjI4OTg3MTc@._V1_FMjpg_UX1280_.jpg'
        },
        {
            title: 'The Call of the Simpsons',
            season: 1,
            episode: 7,
            imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNTYyMGNkODYtMmZlZC00MmZiLTk5YTUtODMyZmUzNjU2NWI4XkEyXkFqcGdeQXVyMjI4OTg3MTc@._V1_FMjpg_UX1280_.jpg'
        },
        {
            title: 'The Telltale Head',
            season: 1,
            episode: 8,
            imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMzhhNTM3ZDYtYWQ3OS00NDU2LTk4MGEtOGZmMWUwODlmMjQyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1280_.jpg'
        },
        
        {
            title: 'Life on the Fast Lane',
            season: 1,
            episode: 9,
            imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNjY3NzExYWYtNGFlZC00NmJkLTlhZjQtN2RlYWIyMTYzYWYwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1280_.jpg'
        },
        {
            title: "Homer's Night Out",
            season: 1,
            episode: 10,
            imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNDRkZmJlZGItNDc2NC00YTQ0LTk1NWYtODEyNGUwYzYyZmU5XkEyXkFqcGdeQXVyMjI4OTg3MTc@._V1_.jpg'
        },
        {
            title: 'The Crepes of Wrath',
            season: 1,
            episode: 11,
            imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMDI3NmNlMGItNzg1ZC00ZWZhLTg3ZjItZWY0ZmI5MTIwODdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'
        },
        {
            title: "Krusty Gets Busted",
            season: 1,
            episode: 12,
            imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNjdkNjY4OWEtMGQwNi00YWQyLTgzODItNmQ3ZmJhODhhOGJiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'
        },
        {
            title: "Some Enchanted Evening",
            season: 1,
            episode: 13,
            imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNmI0YjUyMzItMjM1ZS00NWJkLTkxZGMtZWI2NWFiOTljYWNlXkEyXkFqcGdeQXVyNTU3MDE0MjQ@._V1_.jpg'
        },
        {
          title: 'Bart Gets an F',
          season: 2,
          episode: 1,
          imgSrc: 'https://image.tmdb.org/t/p/w500//riUlQPXphtJBmn1cO9nppKdczt0.jpg'
        },
        {
          title: 'Simpson and Delilah',
          season: 2,
          episode: 2,
          imgSrc: ''
        },
        {
          title: 'Treehouse of Horror',
          season: 2,
          episode: 3,
          imgSrc: ''
        },
        {
          title: 'Two Cars in Every Garage and Three Eyes on Every Fish',
          season: 2,
          episode: 4,
          imgSrc: ''
        },
        {
          title: "Dancin' Homer",
          season: 2,
          episode: 5,
          imgSrc: ''
        },
        {
          title: 'Dead Putting Society',
          season: 2,
          episode: 6,
          imgSrc: ''
        },
        {
          title: 'Bart vs. Thanksgiving',
          season: 2,
          episode: 7,
          imgSrc: ''
        },
        {
          title: 'Bart the Daredevil',
          season: 2,
          episode: 8,
          imgSrc: ''
        },
        {
          title: 'Itchy & Scratchy & Marge',
          season: 2,
          episode: 9,
          imgSrc: ''
        },
        {
          title: 'Bart Gets Hit by a Car',
          season: 2,
          episode: 10,
          imgSrc: ''
        },
        {
          title: 'One Fish, Two Fish, Blowfish, Blue Fish',
          season: 2,
          episode: 11,
          imgSrc: ''
        },
        {
          title: 'The Way We Was',
          season: 2,
          episode: 12,
          imgSrc: ''
        },
        {
          title: 'Homer vs. Lisa and the 8th Commandment',
          season: 2,
          episode: 13,
          imgSrc: ''
        },
        {
          title: 'Principal Charming',
          season: 2,
          episode: 14,
          imgSrc: ''
        },
        {
          title: 'Oh Brother, Where Art Thou?',
          season: 2,
          episode: 15,
          imgSrc: ''
        },
        {
          title: "Bart's Dog Gets an F",
          season: 2,
          episode: 16,
          imgSrc: ''
        },
        {
          title: 'Old Money',
          season: 2,
          episode: 17,
          imgSrc: ''
        },
        {
          title: 'Brush with Greatness',
          season: 2,
          episode: 18,
          imgSrc: ''
        },
        {
          title: "Lisa's Substitute",
          season: 2,
          episode: 19,
          imgSrc: ''
        },
        {
          title: 'The War of the Simpsons',
          season: 2,
          episode: 20,
          imgSrc: ''
        },
        {
          title: 'Three Men and a Comic Book',
          season: 2,
          episode: 21,
          imgSrc: ''
        },
        {
          title: 'Blood Feud',
          season: 2,
          episode: 22,
          imgSrc: ''
        },
        {
          title: 'Stark Raving Dad',
          season: 3,
          episode: 1,
          imgSrc: ''
        },
        {
          title: 'Mr. Lisa Goes to Washington',
          season: 3,
          episode: 2,
          imgSrc: ''
        },
        {
          title: 'When Flanders Failed',
          season: 3,
          episode: 3,
          imgSrc: ''
        },
        {
          title: 'Bart the Murderer',
          season: 3,
          episode: 4,
          imgSrc: ''
        },
        {
          title: 'Homer Defined',
          season: 3,
          episode: 5,
          imgSrc: ''
        },
        {
          title: 'Like Father, Like Clown',
          season: 3,
          episode: 6,
          imgSrc: ''
        },
        {
          title: 'Treehouse of Horror II',
          season: 3,
          episode: 7,
          imgSrc: ''
        },
        {
          title: "Lisa's Pony",
          season: 3,
          episode: 8,
          imgSrc: ''
        },
        {
          title: "Saturdays of Thunder",
          season: 3,
          episode: 9,
          imgSrc: ''
        },
        {
          title: "Flaming Moe's",
          season: 3,
          episode: 10,
          imgSrc: ''
        },
        {
          title: 'Burns Verkaufen der Kraftwerk',
          season: 3,
          episode: 11,
          imgSrc: ''
        },
        {
          title: 'I Married Marge',
          season: 3,
          episode: 12,
          imgSrc: ''
        },
        {
          title: 'Radio Bart',
          season: 3,
          episode: 13,
          imgSrc: ''
        },
        {
          title: 'Lisa the Greek',
          season: 3,
          episode: 14,
          imgSrc: ''
        },
        {
          title: 'Homer Alone',
          season: 3,
          episode: 15,
          imgSrc: ''
        },
        {
          title: 'Bart the Lover',
          season: 3,
          episode: 16,
          imgSrc: ''
        },
        {
          title: 'Homer at the Bat',
          season: 3,
          episode: 17,
          imgSrc: ''
        },
        {
          title: 'Separate Vocations',
          season: 3,
          episode: 18,
          imgSrc: ''
        },
        {
          title: 'Dog of Death',
          season: 3,
          episode: 19,
          imgSrc: ''
        },
        {
          title: 'Colonel Homer',
          season: 3,
          episode: 20,
          imgSrc: ''
        },
        {
          title: 'Black Widower',
          season: 3,
          episode: 21,
          imgSrc: ''
        },
        {
          title: 'The Otto Show',
          season: 3,
          episode: 22,
          imgSrc: ''
        },
        {
          title: "Bart's Friend Falls in Love",
          season: 3,
          episode: 23,
          imgSrc: ''
        },
        {
          title: 'Brother, Can You Spare Two Dimes?',
          season: 3,
          episode: 24,
          imgSrc: ''
       }

        ];

      function getRandomEpisode() {
        const randomIndex = Math.floor(Math.random() * episodes.length);
        return episodes[randomIndex];
      }

      function displayEpisode() {
        const episode = getRandomEpisode();
        cardTitle.innerText = episode.title;
        cardSeasonEpisode.innerText = `Temporada ${episode.season}, Episodio ${episode.episode}`;
        cardImg.setAttribute('src', episode.imgSrc);
        cardImg.style.maxWidth = "100%";
        cardImg.style.height = "auto";
  }


      generateBtn.addEventListener('click', displayEpisode);
      
      const getEpisodeInfo = (episode) => {
        const url = `https://api.themoviedb.org/3/tv/${seriesId}/season/${episode.season}/episode/${episode.episode}?api_key=${apiKey}`;

        return fetch(url)
          .then(response => response.json())
          .then(data => {
            const imgUrl = `https://image.tmdb.org/t/p/original${data.still_path}`;
            episode.imgSrc = imgUrl;
            return episode;
          })
      .catch(error => {
      console.error(error);
    });
};

        Promise.all(episodes.map(getEpisodeInfo))
          .then(episodes => {
            console.log(episodes);
        });