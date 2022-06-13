<script setup>
import { ref, computed, onMounted } from 'vue'
import api from '../api.js'

const profilePath = computed(() => profile_path => {
  if (profile_path) return "https://image.tmdb.org/t/p/w500/" + profile_path
  else return 'https://via.placeholder.com/300x450'
})

onMounted(() => {
  fetch(`https://api.themoviedb.org/3/person/popular?api_key=${api.key}`)
    .then(response => response.json())
    .then(data => {
      people.value = data.results;
      console.log(people.value)
    });
})

const people = ref([])

// const people = ref([
//   {
//     "adult": false,
//     "gender": 1,
//     "id": 224513,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/ilRyazdMJwN05exqhwK4tMKBYZs.jpg",
//         "genre_ids": [
//           878,
//           18
//         ],
//         "id": 335984,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Blade Runner 2049",
//         "overview": "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
//         "poster_path": "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
//         "release_date": "2017-10-04",
//         "title": "Blade Runner 2049",
//         "video": false,
//         "vote_average": 7.5,
//         "vote_count": 10741
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg",
//         "genre_ids": [
//           35,
//           80,
//           9648
//         ],
//         "id": 546554,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Knives Out",
//         "overview": "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
//         "poster_path": "/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
//         "release_date": "2019-11-27",
//         "title": "Knives Out",
//         "video": false,
//         "vote_average": 7.9,
//         "vote_count": 8813
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg",
//         "genre_ids": [
//           12,
//           28,
//           53
//         ],
//         "id": 370172,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "No Time to Die",
//         "overview": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
//         "poster_path": "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
//         "release_date": "2021-09-29",
//         "title": "No Time to Die",
//         "video": false,
//         "vote_average": 7.5,
//         "vote_count": 4108
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Ana de Armas",
//     "popularity": 161.736,
//     "profile_path": "/14uxt0jH28J9zn4vNQNTae3Bmr7.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 1,
//     "id": 1372369,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/5g0W5MUP75zyfluLhhVet15F71z.jpg",
//         "genre_ids": [
//           80,
//           18
//         ],
//         "id": 359940,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Three Billboards Outside Ebbing, Missouri",
//         "overview": "After seven months have passed without a culprit in her daughter's murder case, Mildred Hayes makes a bold move, painting three signs leading into her town with a controversial message directed at Bill Willoughby, the town's revered chief of police. When his second-in-command Officer Jason Dixon, an immature mother's boy with a penchant for violence, gets involved, the battle between Mildred and Ebbing's law enforcement is only exacerbated.",
//         "poster_path": "/vgvw6w1CtcFkuXXn004S5wQsHRl.jpg",
//         "release_date": "2017-12-01",
//         "title": "Three Billboards Outside Ebbing, Missouri",
//         "video": false,
//         "vote_average": 8.1,
//         "vote_count": 8518
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/oKX8t52F25bkWUWVXiAUfTXFnLA.jpg",
//         "genre_ids": [
//           35,
//           27,
//           53
//         ],
//         "id": 567609,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Ready or Not",
//         "overview": "A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.",
//         "poster_path": "/vOl6shtL0wknjaIs6JdKCpcHvg8.jpg",
//         "release_date": "2019-08-21",
//         "title": "Ready or Not",
//         "video": false,
//         "vote_average": 7,
//         "vote_count": 3182
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/tBhkqRxbANdYRhv7mLHfKEMcOZF.jpg",
//         "genre_ids": [
//           35,
//           27
//         ],
//         "id": 419479,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "The Babysitter",
//         "overview": "When Cole stays up past his bedtime, he discovers that his hot babysitter is part of a Satanic cult that will stop at nothing to keep him quiet.",
//         "poster_path": "/86a7GRVRCwfl7wdI4QadyvKa6Zu.jpg",
//         "release_date": "2017-10-13",
//         "title": "The Babysitter",
//         "video": false,
//         "vote_average": 6.1,
//         "vote_count": 2903
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Samara Weaving",
//     "popularity": 110.288,
//     "profile_path": "/7sHnBVEiJOzjdfzUHo9vvDLkoCH.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 3030323,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/mkIKdkBWcUZkjGl2ktzMlT28XL.jpg",
//         "first_air_date": "2022-04-02",
//         "genre_ids": [
//           18,
//           10759
//         ],
//         "id": 117067,
//         "media_type": "tv",
//         "name": "KinnPorsche The Series",
//         "origin_country": [
//           "TH"
//         ],
//         "original_language": "th",
//         "original_name": "คินน์พอร์ช เดอะ ซีรีส์ ลา ฟอร์เต้",
//         "overview": "Porsche, a down and about waiter who carries the hopes and dreams of his brother on his shoulders is thrust into the feuding world of the mafia. He reluctantly becomes a bodyguard for the major clan, which only brings more problems to his life. The main source of his strife is with Kinn, but the more obstacles and trials that they get through together the closer they become. The feelings of passion start to form between them and they soon fall in love with one another. Porsche has to encounter many mysteries that are too coincidental not to be connected. It all revolves around the death of his parents and the events of the will be a key variable in the transformation.",
//         "poster_path": "/hdPLe50HbZHsETXQRcIP8gw7cKz.jpg",
//         "vote_average": 8.5,
//         "vote_count": 14
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/lZJc4Dr4nQiBN4JJKP8r0djTcKw.jpg",
//         "first_air_date": "2022-02-19",
//         "genre_ids": [
//           35,
//           18
//         ],
//         "id": 139353,
//         "media_type": "tv",
//         "name": "Cutie Pie",
//         "origin_country": [
//           "TH"
//         ],
//         "original_language": "th",
//         "original_name": "นิ่งเฮียก็หาว่าซื่อ",
//         "overview": "The sons of two companies were engaged to each other. One doesn't want an arranged marriage while the other wants to win him over! Meet Gilayn Wang and Kuea Keerati soon.",
//         "poster_path": "/6Cw9dFcbjMElFuGnm1AKud7nM92.jpg",
//         "vote_average": 6.5,
//         "vote_count": 6
//       },
//       {
//         "adult": false,
//         "backdrop_path": null,
//         "first_air_date": "2020-01-19",
//         "genre_ids": [
//           35
//         ],
//         "id": 96478,
//         "media_type": "tv",
//         "name": "My Engineer",
//         "origin_country": [
//           "TH"
//         ],
//         "original_language": "th",
//         "original_name": "My Engineer มีช็อป มีเกียร์ มีเมียรึยังวะ",
//         "overview": "When Bon the popular engineering students start a revenge plan on Duen The innocent first year medical students slowly their feelings start to grow through roses that Duen Have to buy for Bon every day for a month. The series bring out the different side of each couple and their journey with friends and relationship. Join us and see how their feelings slowly evolved with each other through the 4 couples",
//         "poster_path": "/mL98LvcM7LaYJIQWXyTzqhI7ceJ.jpg",
//         "vote_average": 5.9,
//         "vote_count": 6
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Perth Nakhun Screaigh",
//     "popularity": 92.885,
//     "profile_path": "/cpl7vJNyceJssIw92fVED6Jgzdz.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 3030333,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/mkIKdkBWcUZkjGl2ktzMlT28XL.jpg",
//         "first_air_date": "2022-04-02",
//         "genre_ids": [
//           18,
//           10759
//         ],
//         "id": 117067,
//         "media_type": "tv",
//         "name": "KinnPorsche The Series",
//         "origin_country": [
//           "TH"
//         ],
//         "original_language": "th",
//         "original_name": "คินน์พอร์ช เดอะ ซีรีส์ ลา ฟอร์เต้",
//         "overview": "Porsche, a down and about waiter who carries the hopes and dreams of his brother on his shoulders is thrust into the feuding world of the mafia. He reluctantly becomes a bodyguard for the major clan, which only brings more problems to his life. The main source of his strife is with Kinn, but the more obstacles and trials that they get through together the closer they become. The feelings of passion start to form between them and they soon fall in love with one another. Porsche has to encounter many mysteries that are too coincidental not to be connected. It all revolves around the death of his parents and the events of the will be a key variable in the transformation.",
//         "poster_path": "/hdPLe50HbZHsETXQRcIP8gw7cKz.jpg",
//         "vote_average": 8.5,
//         "vote_count": 14
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Bible Wichapas Sumettikul",
//     "popularity": 90.413,
//     "profile_path": "/3QP5MVkDeisV076AyhtFLB2zYVh.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 85,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/jOh79POQu4hyVIseUxdQxTW7vOf.jpg",
//         "genre_ids": [
//           12,
//           14,
//           28
//         ],
//         "id": 22,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Pirates of the Caribbean: The Curse of the Black Pearl",
//         "overview": "Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
//         "poster_path": "/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
//         "release_date": "2003-07-09",
//         "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
//         "video": false,
//         "vote_average": 7.8,
//         "vote_count": 17440
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/8Qsr8pvDL3s1jNZQ4HK1d1Xlvnh.jpg",
//         "genre_ids": [
//           28,
//           12,
//           14
//         ],
//         "id": 259316,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Fantastic Beasts and Where to Find Them",
//         "overview": "In 1926, Newt Scamander arrives at the Magical Congress of the United States of America with a magically expanded briefcase, which houses a number of dangerous creatures and their habitats. When the creatures escape from the briefcase, it sends the American wizarding authorities after Newt, and threatens to strain even further the state of magical and non-magical relations.",
//         "poster_path": "/fLsaFKExQt05yqjoAvKsmOMYvJR.jpg",
//         "release_date": "2016-11-16",
//         "title": "Fantastic Beasts and Where to Find Them",
//         "video": false,
//         "vote_average": 7.3,
//         "vote_count": 16626
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/8zfRLCgKrLAc5SSnACz8ZqmeKAP.jpg",
//         "genre_ids": [
//           12,
//           14,
//           28
//         ],
//         "id": 58,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Pirates of the Caribbean: Dead Man's Chest",
//         "overview": "Captain Jack Sparrow works his way out of a blood debt with the ghostly Davy Jones to avoid eternal damnation.",
//         "poster_path": "/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
//         "release_date": "2006-07-06",
//         "title": "Pirates of the Caribbean: Dead Man's Chest",
//         "video": false,
//         "vote_average": 7.3,
//         "vote_count": 13433
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Johnny Depp",
//     "popularity": 89.914,
//     "profile_path": "/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 1136406,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
//         "genre_ids": [
//           12,
//           28,
//           878
//         ],
//         "id": 299536,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Avengers: Infinity War",
//         "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
//         "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
//         "release_date": "2018-04-25",
//         "title": "Avengers: Infinity War",
//         "video": false,
//         "vote_average": 8.3,
//         "vote_count": 24624
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
//         "genre_ids": [
//           12,
//           878,
//           28
//         ],
//         "id": 299534,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Avengers: Endgame",
//         "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
//         "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
//         "release_date": "2019-04-24",
//         "title": "Avengers: Endgame",
//         "video": false,
//         "vote_average": 8.3,
//         "vote_count": 21061
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/7FWlcZq3r6525LWOcvO9kNWurN1.jpg",
//         "genre_ids": [
//           12,
//           28,
//           878
//         ],
//         "id": 271110,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Captain America: Civil War",
//         "overview": "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
//         "poster_path": "/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
//         "release_date": "2016-04-27",
//         "title": "Captain America: Civil War",
//         "video": false,
//         "vote_average": 7.4,
//         "vote_count": 19815
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Tom Holland",
//     "popularity": 88.69,
//     "profile_path": "/2qhIDp44cAqP2clOgt2afQI07X8.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 1,
//     "id": 1620,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/xpFIaHL7Rm5kKLcEPDEMpjh4Xq6.jpg",
//         "genre_ids": [
//           12,
//           28,
//           878
//         ],
//         "id": 283995,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Guardians of the Galaxy Vol. 2",
//         "overview": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
//         "poster_path": "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
//         "release_date": "2017-04-19",
//         "title": "Guardians of the Galaxy Vol. 2",
//         "video": false,
//         "vote_average": 7.6,
//         "vote_count": 18314
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/zxWAv1A34kdYslBi4ekMDtgIGUt.jpg",
//         "genre_ids": [
//           28,
//           12,
//           14,
//           878
//         ],
//         "id": 566525,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Shang-Chi and the Legend of the Ten Rings",
//         "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
//         "poster_path": "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
//         "release_date": "2021-09-01",
//         "title": "Shang-Chi and the Legend of the Ten Rings",
//         "video": false,
//         "vote_average": 7.7,
//         "vote_count": 6504
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/7BdxZXbSkUiVeCRXKD3hi9KYeWm.jpg",
//         "genre_ids": [
//           16,
//           10751
//         ],
//         "id": 49444,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Kung Fu Panda 2",
//         "overview": "Po is now living his dream as The Dragon Warrior, protecting the Valley of Peace alongside his friends and fellow kung fu masters, The Furious Five - Tigress, Crane, Mantis, Viper and Monkey. But Po’s new life of awesomeness is threatened by the emergence of a formidable villain, who plans to use a secret, unstoppable weapon to conquer China and destroy kung fu. It is up to Po and The Furious Five to journey across China to face this threat and vanquish it. But how can Po stop a weapon that can stop kung fu? He must look to his past and uncover the secrets of his mysterious origins; only then will he be able to unlock the strength he needs to succeed.",
//         "poster_path": "/mtqqD00vB4PGRt20gWtGqFhrkd0.jpg",
//         "release_date": "2011-05-25",
//         "title": "Kung Fu Panda 2",
//         "video": false,
//         "vote_average": 6.9,
//         "vote_count": 5597
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Michelle Yeoh",
//     "popularity": 84.895,
//     "profile_path": "/6oxvfyrrM3YmhgFZSqc8ESqPZoC.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 21523,
//     "known_for": [
//       {
//         "backdrop_path": "/dpzC0ACzwkVporKvzZGvNFOBFr6.jpg",
//         "first_air_date": "2005-03-27",
//         "genre_ids": [
//           18
//         ],
//         "id": 1416,
//         "media_type": "tv",
//         "name": "Grey's Anatomy",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "Grey's Anatomy",
//         "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
//         "poster_path": "/zPIug5giU8oug6Xes5K1sTfQJxY.jpg",
//         "vote_average": 8.3,
//         "vote_count": 8022
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/bYimqNnizPUCnL5HOdoCW02IGmH.jpg",
//         "genre_ids": [
//           18,
//           35,
//           10749
//         ],
//         "id": 74643,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "The Artist",
//         "overview": "Hollywood, 1927: As silent movie star George Valentin wonders if the arrival of talking pictures will cause him to fade into oblivion, he sparks with Peppy Miller, a young dancer set for a big break.",
//         "poster_path": "/khtVL4abxYczXAWbo1wAz13CLx3.jpg",
//         "release_date": "2011-10-12",
//         "title": "The Artist",
//         "video": false,
//         "vote_average": 7.4,
//         "vote_count": 2704
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/kP2DsgcIwuubm3WBvmxJcWFKzL2.jpg",
//         "genre_ids": [
//           53,
//           18,
//           9648
//         ],
//         "id": 3594,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "The Number 23",
//         "overview": "Walter Sparrow is an animal control officer that becomes obsessed with a mysterious book that seems to be based on his own life. As soon as he opens the book, he notices strange parallels between what he reads and what he's experienced. But now he's worried that a fictional murder might materialize.",
//         "poster_path": "/mlNU8a1SkTu6cKA4LAoZxfNPng0.jpg",
//         "release_date": "2007-02-23",
//         "title": "The Number 23",
//         "video": false,
//         "vote_average": 6.4,
//         "vote_count": 2689
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Ed Lauter",
//     "popularity": 82.046,
//     "profile_path": "/5q1CNG6M4cKIrFjFmy7typjEPqt.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 3030319,
//     "known_for": [
//       {
//         "backdrop_path": "/mkIKdkBWcUZkjGl2ktzMlT28XL.jpg",
//         "first_air_date": "2022-04-02",
//         "genre_ids": [
//           18,
//           10759
//         ],
//         "id": 117067,
//         "media_type": "tv",
//         "name": "KinnPorsche The Series",
//         "origin_country": [
//           "TH"
//         ],
//         "original_language": "th",
//         "original_name": "คินน์พอร์ช เดอะ ซีรีส์ ลา ฟอร์เต้",
//         "overview": "Porsche, a down and about waiter who carries the hopes and dreams of his brother on his shoulders is thrust into the feuding world of the mafia. He reluctantly becomes a bodyguard for the major clan, which only brings more problems to his life. The main source of his strife is with Kinn, but the more obstacles and trials that they get through together the closer they become. The feelings of passion start to form between them and they soon fall in love with one another. Porsche has to encounter many mysteries that are too coincidental not to be connected. It all revolves around the death of his parents and the events of the will be a key variable in the transformation.",
//         "poster_path": "/hdPLe50HbZHsETXQRcIP8gw7cKz.jpg",
//         "vote_average": 8.5,
//         "vote_count": 14
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Mile Phakphum Romsaithong",
//     "popularity": 76.408,
//     "profile_path": "/CJNW34J8v1TZbD1jrloqFAMGKt.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 1,
//     "id": 2133998,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/uCFVXYHQl6v7ed45tgnrkeval5R.jpg",
//         "first_air_date": "2020-03-06",
//         "genre_ids": [
//           16
//         ],
//         "id": 100210,
//         "media_type": "tv",
//         "name": "Onii-chan Asa made Zutto Gyutte Shite!",
//         "origin_country": [
//           "JP"
//         ],
//         "original_language": "ja",
//         "original_name": "お兄ちゃん, 朝までずっとギュッてして!",
//         "overview": "Growing up I was a sickly child and due to this my parents designed an experiment to attempt to help me improve my immunity by hugging my sisters for extended periods each day.\n\nEventually this ended up growing into more than hugging as the closeness to my sisters stirred up feelings from within that I just couldn't ignore.",
//         "poster_path": "/fikdxPqIBSVXN5GWaUjXOxjQyl6.jpg",
//         "vote_average": 7.8,
//         "vote_count": 4
//       },
//       {
//         "adult": true,
//         "backdrop_path": "/52YBjMQcLfAZHQJjqnrXLBBY68X.jpg",
//         "first_air_date": "2015-10-09",
//         "genre_ids": [
//           16
//         ],
//         "id": 71309,
//         "media_type": "tv",
//         "name": "Ane Yome Quartet",
//         "origin_country": [
//           "JP"
//         ],
//         "original_language": "ja",
//         "original_name": "あねよめカルテット",
//         "overview": "The Hanabishi family and Hidaka family are next door neighbors. The fathers of both households could be called best friends, so they all get along like one big happy family. In particular, Hidaka family’s only son Kouki was raised lovingly by the four Hanabishi sisters like he was their own brother.\n\nOne day, the Hanabishi and Hidaka parents were preparing for a long term overseas business trip together. Kouki ended up living together with the four sisters. And one of them is promised to him as a fiance. But who should he choose?",
//         "poster_path": "/txyrzORWvGkvzCNoigDcnOY2CH8.jpg",
//         "vote_average": 9.7,
//         "vote_count": 3
//       },
//       {
//         "adult": true,
//         "backdrop_path": "/c8gEAWkWE5fibNfJ1oRZYST4Gct.jpg",
//         "first_air_date": "2021-12-17",
//         "genre_ids": [
//           16,
//           18
//         ],
//         "id": 153655,
//         "media_type": "tv",
//         "name": "Shishunki no Obenkyou",
//         "origin_country": [
//           "JP"
//         ],
//         "original_language": "ja",
//         "original_name": "思春期のお勉強",
//         "overview": "In the classroom during a test, Kaede Kasuga was having a hard time concentrating on something. She had been wondering what the penis on the boy’s crotch looked like. I really wanted to see it, and my desire to do so only grew. Naturally, I didn’t write anything on my answer sheet and got a zero. Kobayashi, who was sitting behind him, saw him and made fun of him. In a fit of pique, Kasuga decides to play a game to see who gets the highest score on the next test. He is momentarily confused by Kobayashi’s condition that the loser will do whatever he says, but agrees that if he wins, his wish will come true. Thus begins Kasuga’s intense study to fulfill his wish to see a penis.",
//         "poster_path": "/rYGKrGr2WblWNPBFX6dEFtXwmeC.jpg",
//         "vote_average": 9,
//         "vote_count": 2
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Mako Ayane",
//     "popularity": 76.137,
//     "profile_path": null
//   },
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 17178,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/mX3WOJPBzzl4kj4xU5lL7qfD6C3.jpg",
//         "genre_ids": [
//           28,
//           12,
//           14
//         ],
//         "id": 209112,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Batman v Superman: Dawn of Justice",
//         "overview": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
//         "poster_path": "/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
//         "release_date": "2016-03-23",
//         "title": "Batman v Superman: Dawn of Justice",
//         "video": false,
//         "vote_average": 5.9,
//         "vote_count": 15830
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg",
//         "genre_ids": [
//           28,
//           12,
//           14
//         ],
//         "id": 297802,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Aquaman",
//         "overview": "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
//         "poster_path": "/xLPffWMhMj1l50ND3KchMjYoKmE.jpg",
//         "release_date": "2018-07-06",
//         "title": "Aquaman",
//         "video": false,
//         "vote_average": 6.9,
//         "vote_count": 11748
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/hO97RyNjBIMfzfFpUjNhsm4zImh.jpg",
//         "genre_ids": [
//           878,
//           12,
//           9648
//         ],
//         "id": 70981,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Prometheus",
//         "overview": "A team of explorers discover a clue to the origins of mankind on Earth, leading them on a journey to the darkest corners of the universe. There, they must fight a terrifying battle to save the future of the human race.",
//         "poster_path": "/m7nZCtHJyDLncBUarfM5h5mrppx.jpg",
//         "release_date": "2012-05-30",
//         "title": "Prometheus",
//         "video": false,
//         "vote_average": 6.5,
//         "vote_count": 10235
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Patrick Wilson",
//     "popularity": 72.014,
//     "profile_path": "/tc1ezEfIY8BhCy85svOUDtpBFPt.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 3080902,
//     "known_for": [
//       {
//         "adult": true,
//         "backdrop_path": "/mTDEKhMEG26sRxaMURb0BakRqDb.jpg",
//         "first_air_date": "2020-11-27",
//         "genre_ids": [
//           16
//         ],
//         "id": 114110,
//         "media_type": "tv",
//         "name": "Oneshota The Animation",
//         "origin_country": [
//           "JP"
//         ],
//         "original_language": "ja",
//         "original_name": "おね→ショタ←おね THE ANIMATION",
//         "overview": "Would you like to live with two super sexy girls from another world? Our main character was incredibly lucky, and he became the chosen one who managed to seduce two girls adventurers from another world!\n\nAria is an elf Archer with huge Tits who behaves like an older sister. She is still a virgin and this is strange because the girl is just a stunning beauty. Aria fell in love with the main character at first sight and immediately decided to give him her first time.\n\nLulu is a beastman warrior who looks more like an ordinary nekomimi girl with a huge bushy tail. Nature also did not deprive it of 92/59/89 (G Cup). At first glance, she is strict and determined, but at heart she is a truly loving and caring sister. The pheromones that our main character exuded, incredibly strongly aroused her affection and obedience. The girl became like an obsessive next to our hero and her only goal was unrestrained sex...",
//         "poster_path": "/t9zs37JAgIQUqI11xd59d9KBQJg.jpg",
//         "vote_average": 10,
//         "vote_count": 2
//       },
//       {
//         "adult": true,
//         "backdrop_path": "/c8gEAWkWE5fibNfJ1oRZYST4Gct.jpg",
//         "first_air_date": "2021-12-17",
//         "genre_ids": [
//           16,
//           18
//         ],
//         "id": 153655,
//         "media_type": "tv",
//         "name": "Shishunki no Obenkyou",
//         "origin_country": [
//           "JP"
//         ],
//         "original_language": "ja",
//         "original_name": "思春期のお勉強",
//         "overview": "In the classroom during a test, Kaede Kasuga was having a hard time concentrating on something. She had been wondering what the penis on the boy’s crotch looked like. I really wanted to see it, and my desire to do so only grew. Naturally, I didn’t write anything on my answer sheet and got a zero. Kobayashi, who was sitting behind him, saw him and made fun of him. In a fit of pique, Kasuga decides to play a game to see who gets the highest score on the next test. He is momentarily confused by Kobayashi’s condition that the loser will do whatever he says, but agrees that if he wins, his wish will come true. Thus begins Kasuga’s intense study to fulfill his wish to see a penis.",
//         "poster_path": "/rYGKrGr2WblWNPBFX6dEFtXwmeC.jpg",
//         "vote_average": 9,
//         "vote_count": 2
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Yousef Shehab",
//     "popularity": 71.07,
//     "profile_path": null
//   },
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 7499,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
//         "genre_ids": [
//           18
//         ],
//         "id": 550,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Fight Club",
//         "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//         "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
//         "release_date": "1999-10-15",
//         "title": "Fight Club",
//         "video": false,
//         "vote_average": 8.4,
//         "vote_count": 24118
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/sMRwI5trKI6qhxYcjPgGghmPBef.jpg",
//         "genre_ids": [
//           28,
//           12,
//           14
//         ],
//         "id": 297761,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Suicide Squad",
//         "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
//         "poster_path": "/xFw9RXKZDvevAGocgBK0zteto4U.jpg",
//         "release_date": "2016-08-03",
//         "title": "Suicide Squad",
//         "video": false,
//         "vote_average": 5.9,
//         "vote_count": 18794
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/ilRyazdMJwN05exqhwK4tMKBYZs.jpg",
//         "genre_ids": [
//           878,
//           18
//         ],
//         "id": 335984,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Blade Runner 2049",
//         "overview": "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
//         "poster_path": "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
//         "release_date": "2017-10-04",
//         "title": "Blade Runner 2049",
//         "video": false,
//         "vote_average": 7.5,
//         "vote_count": 10741
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Jared Leto",
//     "popularity": 69.752,
//     "profile_path": "/i6zIpHiKBnaHtacJU6qgeoDjiw1.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 1,
//     "id": 1371297,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/oMaj75G2WFw66xI1TREg1hrToSg.jpg",
//         "genre_ids": [
//           28,
//           14,
//           878,
//           12
//         ],
//         "id": 268896,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Pacific Rim: Uprising",
//         "overview": "It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history. The PPDC now calls upon the best and brightest to rise up and become the next generation of heroes when the Kaiju threat returns.",
//         "poster_path": "/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg",
//         "release_date": "2018-03-21",
//         "title": "Pacific Rim: Uprising",
//         "video": false,
//         "vote_average": 6.1,
//         "vote_count": 4005
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/eFw5YSorHidsajLTayo1noueIxI.jpg",
//         "genre_ids": [
//           28,
//           53,
//           35
//         ],
//         "id": 509967,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "6 Underground",
//         "overview": "After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",
//         "poster_path": "/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg",
//         "release_date": "2019-12-10",
//         "title": "6 Underground",
//         "video": false,
//         "vote_average": 6.3,
//         "vote_count": 3758
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/s9I2LmQMYCanl6DvC3X1AOHs2r8.jpg",
//         "genre_ids": [
//           28,
//           53,
//           80,
//           12
//         ],
//         "id": 399361,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Triple Frontier",
//         "overview": "Struggling to make ends meet, former special ops soldiers reunite for a high-stakes heist: stealing $75 million from a South American drug lord.",
//         "poster_path": "/aBw8zYuAljVM1FeK5bZKITPH8ZD.jpg",
//         "release_date": "2019-03-06",
//         "title": "Triple Frontier",
//         "video": false,
//         "vote_average": 6.3,
//         "vote_count": 2557
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Adria Arjona",
//     "popularity": 69.389,
//     "profile_path": "/2xAwAxrjZrgfyrNYToBIjg1ZeRB.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 1,
//     "id": 6161,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/tTlAA0REGPXSZPBfWyTW9ipIv1I.jpg",
//         "genre_ids": [
//           28,
//           12,
//           878,
//           18
//         ],
//         "id": 315635,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Spider-Man: Homecoming",
//         "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
//         "poster_path": "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
//         "release_date": "2017-07-05",
//         "title": "Spider-Man: Homecoming",
//         "video": false,
//         "vote_average": 7.4,
//         "vote_count": 18592
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/vVBcIN68kFq681b4lObiNJhEVro.jpg",
//         "genre_ids": [
//           18,
//           10749
//         ],
//         "id": 453,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "A Beautiful Mind",
//         "overview": "John Nash is a brilliant but asocial mathematician fighting schizophrenia. After he accepts secret work in cryptography, his life takes a turn for the nightmarish.",
//         "poster_path": "/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
//         "release_date": "2001-12-11",
//         "title": "A Beautiful Mind",
//         "video": false,
//         "vote_average": 7.9,
//         "vote_count": 8505
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/7jR6xSOqnWCrm3OGhm06Y8jGCYS.jpg",
//         "genre_ids": [
//           80,
//           18
//         ],
//         "id": 641,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Requiem for a Dream",
//         "overview": "The hopes and dreams of four ambitious people are shattered when their drug addictions begin spiraling out of control. A look into addiction and how it overcomes the mind and body.",
//         "poster_path": "/a1BrBoErndBAYEZZEJaotIJ6CE1.jpg",
//         "release_date": "2000-10-06",
//         "title": "Requiem for a Dream",
//         "video": false,
//         "vote_average": 8,
//         "vote_count": 8097
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Jennifer Connelly",
//     "popularity": 68.374,
//     "profile_path": "/3oYDftEbM3YgBiHYcbbIPRNZrTL.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 86654,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/vm8C7lAob4hSn8MvHGa9RBLy7rR.jpg",
//         "genre_ids": [
//           35,
//           18,
//           53
//         ],
//         "id": 466272,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Once Upon a Time… in Hollywood",
//         "overview": "Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…",
//         "poster_path": "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
//         "release_date": "2019-07-24",
//         "title": "Once Upon a Time… in Hollywood",
//         "video": false,
//         "vote_average": 7.4,
//         "vote_count": 10460
//       },
//       {
//         "backdrop_path": "/vNnLAKmoczRlNarxyGrrw0KSOeX.jpg",
//         "first_air_date": "2012-10-10",
//         "genre_ids": [
//           80,
//           18,
//           9648,
//           10759
//         ],
//         "id": 1412,
//         "media_type": "tv",
//         "name": "Arrow",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "Arrow",
//         "overview": "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
//         "poster_path": "/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
//         "vote_average": 6.7,
//         "vote_count": 5031
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/sg5h0LzhJtkjOnXwT87OBVjB7qJ.jpg",
//         "genre_ids": [
//           35,
//           27,
//           14
//         ],
//         "id": 535581,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "The Dead Don't Die",
//         "overview": "In a small peaceful town, zombies suddenly rise to terrorize the town. Now three bespectacled police officers and a strange Scottish morgue expert must band together to defeat the undead.",
//         "poster_path": "/fgGzTEoNxptCRtEOpOPvIEdlxAq.jpg",
//         "release_date": "2019-05-15",
//         "title": "The Dead Don't Die",
//         "video": false,
//         "vote_average": 5.4,
//         "vote_count": 1930
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Austin Butler",
//     "popularity": 68.067,
//     "profile_path": "/2gHiYPXOq7RJLs4vTz5fUmSg8cd.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 1,
//     "id": 191228,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/dE0NoGwzU81sYTLY9gUGEzLjozG.jpg",
//         "genre_ids": [
//           18,
//           35,
//           10749
//         ],
//         "id": 84199,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "The First Time",
//         "overview": "Dave, a high school senior, spends most of his time pining away over a girl he can’t have. Aubrey, a junior with artistic aspirations, has a hot boyfriend who doesn’t quite understand her or seem to care. Although they go to different schools, Dave and Aubrey find themselves at the same party. When both head outside to get some air, they meet. A casual conversation sparks an instant connection, and, over the course of a weekend, things turn magical, romantic, complicated, and funny as Aubrey and Dave discover what it's like to fall in love for the first time.",
//         "poster_path": "/tG6jUndWd9FRuvI4j5Z2bhTuq0V.jpg",
//         "release_date": "2012-10-19",
//         "title": "The First Time",
//         "video": false,
//         "vote_average": 7,
//         "vote_count": 1917
//       },
//       {
//         "backdrop_path": "/jpR7mT5nFAzWSGPseLpfFisoUtN.jpg",
//         "first_air_date": "2010-03-27",
//         "genre_ids": [
//           35,
//           10751
//         ],
//         "id": 31251,
//         "media_type": "tv",
//         "name": "Victorious",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "Victorious",
//         "overview": "Aspiring singer Tori Vega navigates life while attending a performing arts high school called Hollywood Arts.",
//         "poster_path": "/4bXfaJXoiKOTPfb23Q9cuaNpE2x.jpg",
//         "vote_average": 8.2,
//         "vote_count": 1374
//       },
//       {
//         "backdrop_path": "/Acmi2eVIXff5fHG0XOFDGzhwqwr.jpg",
//         "first_air_date": "2007-09-08",
//         "genre_ids": [
//           35,
//           10751
//         ],
//         "id": 5371,
//         "media_type": "tv",
//         "name": "iCarly",
//         "origin_country": [
//           "US"
//         ],
//         "original_language": "en",
//         "original_name": "iCarly",
//         "overview": "Watch Carly, Sam, and Freddie, as they try to balance their everyday 8th grade lives with their newfound fame managing and starring in the most awesome show on the web.",
//         "poster_path": "/kP8Z51s9D8tiGnoRbL88db0e2jv.jpg",
//         "vote_average": 8,
//         "vote_count": 1158
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Victoria Justice",
//     "popularity": 64.716,
//     "profile_path": "/5L2gbireGntC3SgoL7cyBN8Hp5L.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 500,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/b4ZjgjOvbIJ6oJoiCJpnYNT50s2.jpg",
//         "genre_ids": [
//           28,
//           878
//         ],
//         "id": 137113,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Edge of Tomorrow",
//         "overview": "Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.",
//         "poster_path": "/uUHvlkLavotfGsNtosDy8ShsIYF.jpg",
//         "release_date": "2014-05-27",
//         "title": "Edge of Tomorrow",
//         "video": false,
//         "vote_average": 7.6,
//         "vote_count": 11638
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/Pv6vu1lxgct3GWhUXVVOMZwNlZ.jpg",
//         "genre_ids": [
//           28,
//           878,
//           12,
//           9648
//         ],
//         "id": 75612,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Oblivion",
//         "overview": "Jack Harper is one of the last few drone repairmen stationed on Earth.  Part of a massive operation to extract vital resources after decades of war with a terrifying threat known as the Scavs, Jack’s mission is nearly complete.  His existence is brought crashing down when he rescues a beautiful  stranger from a downed spacecraft.  Her arrival triggers a chain of events that  forces him to question everything he knows and puts the fate of humanity in his hands.",
//         "poster_path": "/oztWfZEhc8nBTG4qjvjmtIcorK2.jpg",
//         "release_date": "2013-04-10",
//         "title": "Oblivion",
//         "video": false,
//         "vote_average": 6.6,
//         "vote_count": 9238
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/hqyjzDRCs1N5gEsh2gklzPdsEFD.jpg",
//         "genre_ids": [
//           28,
//           53,
//           12
//         ],
//         "id": 56292,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Mission: Impossible - Ghost Protocol",
//         "overview": "Ethan Hunt and his team are racing against time to track down a dangerous terrorist named Hendricks, who has gained access to Russian nuclear launch codes and is planning a strike on the United States. An attempt to stop him ends in an explosion causing severe destruction to the Kremlin and the IMF to be implicated in the bombing, forcing the President to disavow them. No longer being aided by the government, Ethan and his team chase Hendricks around the globe, although they might still be too late to stop a disaster.",
//         "poster_path": "/7GCKNRbzcA4rJXAKoE8KS9IDnZP.jpg",
//         "release_date": "2011-12-07",
//         "title": "Mission: Impossible - Ghost Protocol",
//         "video": false,
//         "vote_average": 7,
//         "vote_count": 8297
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Tom Cruise",
//     "popularity": 62.936,
//     "profile_path": "/8qBylBsQf4llkGrWR3qAsOtOU8O.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 10859,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/en971MEXui9diirXlogOrPKmsEn.jpg",
//         "genre_ids": [
//           28,
//           12,
//           35
//         ],
//         "id": 293660,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Deadpool",
//         "overview": "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
//         "poster_path": "/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
//         "release_date": "2016-02-09",
//         "title": "Deadpool",
//         "video": false,
//         "vote_average": 7.6,
//         "vote_count": 26740
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg",
//         "genre_ids": [
//           28,
//           35,
//           12
//         ],
//         "id": 383498,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Deadpool 2",
//         "overview": "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
//         "poster_path": "/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
//         "release_date": "2018-05-10",
//         "title": "Deadpool 2",
//         "video": false,
//         "vote_average": 7.5,
//         "vote_count": 14671
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/nEcEy7iVOh04dzZWP2e6AcwpLvI.jpg",
//         "genre_ids": [
//           35,
//           14
//         ],
//         "id": 72105,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Ted",
//         "overview": "John Bennett, a man whose childhood wish of bringing his teddy bear to life came true, now must decide between keeping the relationship with the bear or his girlfriend, Lori.",
//         "poster_path": "/osJNr64CNyGhCzdlg6oHt3a6vNA.jpg",
//         "release_date": "2012-06-29",
//         "title": "Ted",
//         "video": false,
//         "vote_average": 6.4,
//         "vote_count": 10602
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Ryan Reynolds",
//     "popularity": 61.072,
//     "profile_path": "/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg"
//   },
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 2037,
//     "known_for": [
//       {
//         "adult": false,
//         "backdrop_path": "/ztZ4vw151mw04Bg6rqJLQGBAmvn.jpg",
//         "genre_ids": [
//           28,
//           878,
//           12
//         ],
//         "id": 27205,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "Inception",
//         "overview": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
//         "poster_path": "/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
//         "release_date": "2010-07-15",
//         "title": "Inception",
//         "video": false,
//         "vote_average": 8.4,
//         "vote_count": 31580
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/6fA9nie4ROlkyZAUlgKNjGNCbHG.jpg",
//         "genre_ids": [
//           18,
//           28,
//           80,
//           53
//         ],
//         "id": 155,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "The Dark Knight",
//         "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
//         "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//         "release_date": "2008-07-14",
//         "title": "The Dark Knight",
//         "video": false,
//         "vote_average": 8.5,
//         "vote_count": 27580
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/rV8g8ATRPIwUHC1rKRXEXBjbclu.jpg",
//         "genre_ids": [
//           28,
//           80,
//           18,
//           53
//         ],
//         "id": 49026,
//         "media_type": "movie",
//         "original_language": "en",
//         "original_title": "The Dark Knight Rises",
//         "overview": "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
//         "poster_path": "/85cWkCVftiVs0BVey6pxX8uNmLt.jpg",
//         "release_date": "2012-07-16",
//         "title": "The Dark Knight Rises",
//         "video": false,
//         "vote_average": 7.8,
//         "vote_count": 19509
//       }
//     ],
//     "known_for_department": "Acting",
//     "name": "Cillian Murphy",
//     "popularity": 55.89,
//     "profile_path": "/i8dOTC0w6V274ev5iAAvo4Ahhpr.jpg"
//   }
// ])

</script>

<template>
  <div class="container mx-auto px-4 pt-16">
    <div class="popular-movies pb-16">
      <h2 class="uppercase tracking-wider dark:text-amber-300 text-red-500 text-xl font-bold">Popular People</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div v-for="person in people" :key="person.id" class="mt-8">
          <router-link :to="`/person/${person.id}`">
            <img :src="profilePath(person.profile_path)" :alt="`Picture of ${person.name}`"
              class="hover:opacity-75 transition ease-in-out duration-150">
          </router-link>
          <div class="mt-2">
            <router-link :to="`/person/${person.id}`" class="text-lg mt-2 hover:text-gray-300">
              {{ person.name }}
            </router-link>
            <div class="flex items-center text-gray-400 text-sm mt-1">
              <div class="text-gray-400 text-sm">{{ person.known_for_department }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>