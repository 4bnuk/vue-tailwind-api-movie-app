<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import api from '../api.js'
import MovieCard from '../components/MovieCard.vue';

onMounted(() => {
  // TODO async
  // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api.key}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     popularMovies.value = data.results.slice(0, 10);
  //     console.log('popularMovies', popularMovies.value)
  //   });
  // fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api.key}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     upcomingMovies.value = data.results.slice(0, 10);
  //     console.log('upcomingMovies', upcomingMovies.value)
  //   });
  // fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api.key}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     nowPlayingMovies.value = data.results.slice(0, 10);
  //     console.log('nowPlayingMovies', nowPlayingMovies.value)
  //   });
  // fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api.key}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     genres.value = data.genres;
  //     console.log('genres', genres.value)
  //   });
})

const popularMovies = ref([
  {
    "adult": false,
    "backdrop_path": "/gG9fTyDL03fiKnOpf2tr01sncnt.jpg",
    "genre_ids": [
      28,
      878,
      14
    ],
    "id": 526896,
    "original_language": "en",
    "original_title": "Morbius",
    "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
    "popularity": 7169.532,
    "poster_path": "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
    "release_date": "2022-03-30",
    "title": "Morbius",
    "video": false,
    "vote_average": 6.4,
    "vote_count": 1258
  },
  {
    "adult": false,
    "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
    "genre_ids": [
      28,
      12,
      35,
      10749
    ],
    "id": 752623,
    "original_language": "en",
    "original_title": "The Lost City",
    "overview": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
    "popularity": 6354.295,
    "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
    "release_date": "2022-03-24",
    "title": "The Lost City",
    "video": false,
    "vote_average": 6.7,
    "vote_count": 844
  },
  {
    "adult": false,
    "backdrop_path": "/lQxZLeWNdZINBzyzdPr5NbRHL8m.jpg",
    "genre_ids": [
      28,
      12,
      14
    ],
    "id": 338953,
    "original_language": "en",
    "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
    "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
    "popularity": 7879.738,
    "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
    "release_date": "2022-04-06",
    "title": "Fantastic Beasts: The Secrets of Dumbledore",
    "video": false,
    "vote_average": 6.7,
    "vote_count": 1127
  },
  {
    "adult": false,
    "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
    "genre_ids": [
      28,
      14,
      35,
      10751,
      12,
      878
    ],
    "id": 675353,
    "original_language": "en",
    "original_title": "Sonic the Hedgehog 2",
    "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
    "popularity": 6006.356,
    "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    "release_date": "2022-03-30",
    "title": "Sonic the Hedgehog 2",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 1719
  },
  {
    "adult": false,
    "backdrop_path": "/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg",
    "genre_ids": [
      28,
      12,
      14,
      53
    ],
    "id": 639933,
    "original_language": "en",
    "original_title": "The Northman",
    "overview": "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    "popularity": 4351.856,
    "poster_path": "/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
    "release_date": "2022-04-07",
    "title": "The Northman",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 1205
  },
  {
    "adult": false,
    "backdrop_path": "/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg",
    "genre_ids": [
      28,
      12
    ],
    "id": 335787,
    "original_language": "en",
    "original_title": "Uncharted",
    "overview": "A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.",
    "popularity": 2988.082,
    "poster_path": "/tlZpSxYuBRoVJBOpUrPdQe9FmFq.jpg",
    "release_date": "2022-02-10",
    "title": "Uncharted",
    "video": false,
    "vote_average": 7.2,
    "vote_count": 2157
  },
  {
    "adult": false,
    "backdrop_path": "/xHrp2pq73oi9D64xigPjWW1wcz1.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "id": 414906,
    "original_language": "en",
    "original_title": "The Batman",
    "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    "popularity": 2867.96,
    "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "release_date": "2022-03-01",
    "title": "The Batman",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 4855
  },
  {
    "adult": false,
    "backdrop_path": "/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg",
    "genre_ids": [
      14,
      28,
      12
    ],
    "id": 453395,
    "original_language": "en",
    "original_title": "Doctor Strange in the Multiverse of Madness",
    "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    "popularity": 2895.221,
    "poster_path": "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    "release_date": "2022-05-04",
    "title": "Doctor Strange in the Multiverse of Madness",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 1967
  },
  {
    "adult": false,
    "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 634649,
    "original_language": "en",
    "original_title": "Spider-Man: No Way Home",
    "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    "popularity": 2855.953,
    "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    "release_date": "2021-12-15",
    "title": "Spider-Man: No Way Home",
    "video": false,
    "vote_average": 8.1,
    "vote_count": 13110
  },
  {
    "adult": false,
    "backdrop_path": "/hcNM0HjfPonIzOVy6LVTDBXSfMq.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 864116,
    "original_language": "en",
    "original_title": "A Day to Die",
    "overview": "A disgraced parole officer is indebted to a local gang leader and forced to pull off a series of dangerous drug heists within twelve hours in order to pay the $2 million dollars he owes, rescue his kidnapped pregnant wife, and settle a score with the city's corrupt police chief, who is working with the gang leader and double-crossed him years ago.",
    "popularity": 2626.486,
    "poster_path": "/8Kce1utfytAG5m1PbtVoDzmDZJH.jpg",
    "release_date": "2022-03-04",
    "title": "A Day to Die",
    "video": false,
    "vote_average": 5.6,
    "vote_count": 28
  }
])
const genres = ref([
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
])
const upcomingMovies = ref([
  {
    "adult": false,
    "backdrop_path": "/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 818397,
    "original_language": "en",
    "original_title": "Memory",
    "overview": "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
    "popularity": 1741.464,
    "poster_path": "/4Q1n3TwieoULnuaztu9aFjqHDTI.jpg",
    "release_date": "2022-04-28",
    "title": "Memory",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 153
  },
  {
    "adult": false,
    "backdrop_path": "/9Fv41b6nEBGrSprFDVpO6GA94Wi.jpg",
    "genre_ids": [
      12,
      28,
      878,
      53
    ],
    "id": 507086,
    "original_language": "en",
    "original_title": "Jurassic World Dominion",
    "overview": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
    "popularity": 510.112,
    "poster_path": "/w4c0GTpmEQ1CZQNHndTv2PPgf2p.jpg",
    "release_date": "2022-06-01",
    "title": "Jurassic World Dominion",
    "video": false,
    "vote_average": 8,
    "vote_count": 4
  },
  {
    "adult": false,
    "backdrop_path": "/lD8dFIk9wDEvOwZw0RB47e346io.jpg",
    "genre_ids": [
      18,
      36,
      10749
    ],
    "id": 698508,
    "original_language": "en",
    "original_title": "Redeeming Love",
    "overview": "A retelling of the biblical book of Hosea set against the backdrop of the California Gold Rush of 1850.",
    "popularity": 366.559,
    "poster_path": "/pDc2HxQtC0MlKD4QfRvmKREEyhc.jpg",
    "release_date": "2022-01-21",
    "title": "Redeeming Love",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 66
  },
  {
    "adult": false,
    "backdrop_path": "/9bbxqz1iPEfZN9Xi2ZjJhkp5JRo.jpg",
    "genre_ids": [
      16,
      878,
      28
    ],
    "id": 610150,
    "original_language": "ja",
    "original_title": "ドラゴンボール超：スーパーヒーロー",
    "overview": "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
    "popularity": 285.41,
    "poster_path": "/yBXy2vBwU2ashl7nJYNvGBPYf5C.jpg",
    "release_date": "2022-06-11",
    "title": "Dragon Ball Super: Super Hero",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/ggEKIzP5An3vnSfj271ApaJYtQw.jpg",
    "genre_ids": [
      10751,
      16,
      28,
      12,
      35
    ],
    "id": 438148,
    "original_language": "en",
    "original_title": "Minions: The Rise of Gru",
    "overview": "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
    "popularity": 151.422,
    "poster_path": "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    "release_date": "2022-05-30",
    "title": "Minions: The Rise of Gru",
    "video": false,
    "vote_average": 10,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": "/2oXQpm0wfOkIL0jBJABbL5AfMs6.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 760104,
    "original_language": "en",
    "original_title": "X",
    "overview": "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
    "popularity": 108.908,
    "poster_path": "/woTQx9Q4b8aO13jR9dsj8C9JESy.jpg",
    "release_date": "2022-03-17",
    "title": "X",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 401
  },
  {
    "adult": false,
    "backdrop_path": "/vwpxy4kmQyW5aBJ3uxhQM6koU6H.jpg",
    "genre_ids": [
      10751,
      16
    ],
    "id": 743439,
    "original_language": "en",
    "original_title": "PAW Patrol: Jet To The Rescue",
    "overview": "A royal relative steals a gem with the power to make things fly, the Paw Patrol takes to the skies to stop him and save Barkingburg.",
    "popularity": 128.328,
    "poster_path": "/qHcn3PbjVHxBweDZxWpYH3JfugS.jpg",
    "release_date": "2020-09-10",
    "title": "PAW Patrol: Jet To The Rescue",
    "video": false,
    "vote_average": 7,
    "vote_count": 136
  },
  {
    "adult": false,
    "backdrop_path": "/1qnPtYPw9HeyTGctvv6fOHZtx2x.jpg",
    "genre_ids": [
      16,
      878,
      12,
      28,
      10751
    ],
    "id": 718789,
    "original_language": "en",
    "original_title": "Lightyear",
    "overview": "Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.",
    "popularity": 115.511,
    "poster_path": "/tbUhPhir8TGDkD8RruiBAJE9Nd3.jpg",
    "release_date": "2022-06-15",
    "title": "Lightyear",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/y0LhmaMYpFkIfrUlOpJYTVMH2eA.jpg",
    "genre_ids": [
      18
    ],
    "id": 592695,
    "original_language": "en",
    "original_title": "Pleasure",
    "overview": "20-year-old Bella Cherry leaves her small town in Sweden and heads for Los Angeles with the aim of becoming the world's next big porn star, but the road to her goal turns out to be bumpier than she imagined.",
    "popularity": 65.898,
    "poster_path": "/t3SEI2YI81oO3nEgjJ9jMAIKApY.jpg",
    "release_date": "2021-10-08",
    "title": "Pleasure",
    "video": false,
    "vote_average": 6.2,
    "vote_count": 135
  },
  {
    "adult": false,
    "backdrop_path": "/uZTxMG8VJqt5krHuX5VwVtrdquY.jpg",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "id": 758330,
    "original_language": "en",
    "original_title": "Good Luck to You, Leo Grande",
    "overview": "Nancy Stokes doesn’t know good sex. Whatever it may be, Nancy, a retired schoolteacher, is pretty sure she has never had it, but she is determined to finally do something about that. She even has a plan: It involves an anonymous hotel room, and a young sex worker who calls himself Leo Grande.",
    "popularity": 73.185,
    "poster_path": "/5wQydIQYho2wz1suPOoPoNgMzCm.jpg",
    "release_date": "2022-06-17",
    "title": "Good Luck to You, Leo Grande",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
  }
])
const nowPlayingMovies = ref([
  {
    "adult": false,
    "backdrop_path": "/gG9fTyDL03fiKnOpf2tr01sncnt.jpg",
    "genre_ids": [
      28,
      878,
      14
    ],
    "id": 526896,
    "original_language": "en",
    "original_title": "Morbius",
    "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
    "popularity": 7169.532,
    "poster_path": "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
    "release_date": "2022-03-30",
    "title": "Morbius",
    "video": false,
    "vote_average": 6.4,
    "vote_count": 1258
  },
  {
    "adult": false,
    "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
    "genre_ids": [
      28,
      12,
      35,
      10749
    ],
    "id": 752623,
    "original_language": "en",
    "original_title": "The Lost City",
    "overview": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
    "popularity": 6354.295,
    "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
    "release_date": "2022-03-24",
    "title": "The Lost City",
    "video": false,
    "vote_average": 6.7,
    "vote_count": 844
  },
  {
    "adult": false,
    "backdrop_path": "/lQxZLeWNdZINBzyzdPr5NbRHL8m.jpg",
    "genre_ids": [
      28,
      12,
      14
    ],
    "id": 338953,
    "original_language": "en",
    "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
    "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
    "popularity": 7879.738,
    "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
    "release_date": "2022-04-06",
    "title": "Fantastic Beasts: The Secrets of Dumbledore",
    "video": false,
    "vote_average": 6.7,
    "vote_count": 1127
  },
  {
    "adult": false,
    "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
    "genre_ids": [
      28,
      14,
      35,
      10751,
      12,
      878
    ],
    "id": 675353,
    "original_language": "en",
    "original_title": "Sonic the Hedgehog 2",
    "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
    "popularity": 6006.356,
    "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    "release_date": "2022-03-30",
    "title": "Sonic the Hedgehog 2",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 1719
  },
  {
    "adult": false,
    "backdrop_path": "/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg",
    "genre_ids": [
      28,
      12,
      14,
      53
    ],
    "id": 639933,
    "original_language": "en",
    "original_title": "The Northman",
    "overview": "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    "popularity": 4351.856,
    "poster_path": "/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
    "release_date": "2022-04-07",
    "title": "The Northman",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 1205
  },
  {
    "adult": false,
    "backdrop_path": "/xHrp2pq73oi9D64xigPjWW1wcz1.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "id": 414906,
    "original_language": "en",
    "original_title": "The Batman",
    "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    "popularity": 2867.96,
    "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "release_date": "2022-03-01",
    "title": "The Batman",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 4855
  },
  {
    "adult": false,
    "backdrop_path": "/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg",
    "genre_ids": [
      14,
      28,
      12
    ],
    "id": 453395,
    "original_language": "en",
    "original_title": "Doctor Strange in the Multiverse of Madness",
    "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    "popularity": 2895.221,
    "poster_path": "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    "release_date": "2022-05-04",
    "title": "Doctor Strange in the Multiverse of Madness",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 1967
  },
  {
    "adult": false,
    "backdrop_path": "/figlwUsXXFehX3IebdjqNLV6vWk.jpg",
    "genre_ids": [
      28,
      53
    ],
    "id": 628900,
    "original_language": "en",
    "original_title": "The Contractor",
    "overview": "After being involuntarily discharged from the U.S. Special Forces, James Harper decides to support his family by joining a private contracting organization alongside his best friend and under the command of a fellow veteran. Overseas on a covert mission, Harper must evade those trying to kill him while making his way back home.",
    "popularity": 2227.466,
    "poster_path": "/rJPGPZ5soaG27MK90oKpioSiJE2.jpg",
    "release_date": "2022-03-10",
    "title": "The Contractor",
    "video": false,
    "vote_average": 6.6,
    "vote_count": 259
  },
  {
    "adult": false,
    "backdrop_path": "/fEe5fe82qHzjO4yej0o79etqsWV.jpg",
    "genre_ids": [
      16,
      35,
      10751,
      80
    ],
    "id": 629542,
    "original_language": "en",
    "original_title": "The Bad Guys",
    "overview": "When the infamous Bad Guys are finally caught after years of countless heists and being the world’s most-wanted villains, Mr. Wolf brokers a deal to save them all from prison.",
    "popularity": 2256.045,
    "poster_path": "/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
    "release_date": "2022-03-17",
    "title": "The Bad Guys",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 517
  },
  {
    "adult": false,
    "backdrop_path": "/dW3fQJrshh2wYDoW4HUA7ZabsN1.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 763285,
    "original_language": "en",
    "original_title": "Ambulance",
    "overview": "Decorated veteran Will Sharp, desperate for money to cover his wife's medical bills, asks for help from his adoptive brother Danny. A charismatic career criminal, Danny instead offers him a score: the biggest bank heist in Los Angeles history: $32 million.",
    "popularity": 1683.392,
    "poster_path": "/zT5ynZ0UR6HFfWQSRf2uKtqCyWD.jpg",
    "release_date": "2022-03-16",
    "title": "Ambulance",
    "video": false,
    "vote_average": 7,
    "vote_count": 686
  }
])

</script>

<template>
  <div class="container mx-auto px-4 pt-16">
    <div class="popular-movies pb-16">
      <h2 class="uppercase tracking-wider text-amber-300 text-xl font-bold">Popular Movies</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div v-for="popularMovie in popularMovies" :key="popularMovie.id" class="mt-8">
          <MovieCard :movie="popularMovie" :genres="genres" />
        </div>
      </div>
    </div>

    <div class="upcoming-movies py-16">
      <h2 class="uppercase tracking-wider text-amber-300 text-xl font-bold">Upcoming Movies</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div v-for="upcomingMovie in upcomingMovies" :key="upcomingMovie.id" class="mt-8">
          <MovieCard :movie="upcomingMovie" :genres="genres" />
        </div>
      </div>
    </div>

    <div class="now-playing-movies py-16">
      <h2 class="uppercase tracking-wider text-amber-300 text-xl font-bold">Now Playing Movies</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div v-for="nowPlayingMovie in nowPlayingMovies" :key="nowPlayingMovie.id" class="mt-8">
          <MovieCard :movie="nowPlayingMovie" :genres="genres" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
