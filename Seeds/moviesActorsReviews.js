const db = require('../db')
const { Movie, Actor, Review } = require('../Models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Movie.deleteMany({});
        await Actor.deleteMany({});
        await Review.deleteMany({});
        console.log('All collection reset');
    } catch (error) {
        console.error('Error resetting collections:', error);
    }
  }


const main = async () => {
await resetCollections()
  const movie1 = await new Movie({
    title: 'Evolution',
    description: 'Evolution is a sci-fi comedy about a group of scientists who must save the world from an alien organism that evolves at an astonishing rate.',
    genre: 'Comedy',
    releaseDate: '2001-08-06',
    duration: 96,
    image: '../images/Evolution.jpg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mAVs05GzChs?si=C2fR5-KExcWHUKo6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie1.save()

  const movie2 = await new Movie({
    title: 'Red',
    description: 'RED is an action-comedy about a retired black-ops agent who reunites his old team to uncover a deadly conspiracy after being targeted by assassins.',
    genre: 'Action & adventure',
    releaseDate: '2010-15-10',
    duration: 111,
    image: '../images/RED.jpg',
    link: '<<iframe width="560" height="315" src="https://www.youtube.com/embed/sDarp2tvdQo?si=W9BMWWoBTibJZ1op" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie2.save()

  const movie3 = await new Movie({
    title: 'The Purge',
    description: 'The Purge is a dystopian horror-thriller where, in a future America, all crime is legal for one night a year, leading to a night of survival for a family held captive in their home.',
    genre: 'Thriller',
    releaseDate: '2013-07-06',
    duration: 85,
    image: '../images/ThePurge.jpg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hY1dfvBN95E?si=fxP__PCn4BhZkGnS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie3.save()

  const movie4 = await new Movie({
    title: 'In Time',
    description: 'In Time is a sci-fi thriller set in a future where time is the currency, and a young man fights against the system to bring equality to society.',
    genre: 'Science fiction',
    releaseDate: '2011-28-10',
    duration: 109,
    image: '../images/InTime.jpg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-18tkr36TbY?si=tsc2Ta5DQN-mprhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie4.save()

  const movie5 = await new Movie({
    title: 'Rio',
    description: 'Rio is a colorful animated adventure about a domesticated macaw named Blu who travels to Rio de Janeiro, where he finds friendship, love, and learns to embrace his wild side.',
    genre: 'Animation',
    releaseDate: '2011-15-06',
    duration: 96,
    image: '../images/Rio.jpg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hVUxbbKFCDw?si=aRkSIgvLc-S2zvs_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie5.save()

  const movie6 = await new Movie({
    title: 'Enemy At The Gates',
    description: 'Enemy at the Gates is a war drama set during the Battle of Stalingrad, focusing on the intense sniper duel between a Russian and a German marksman.',
    genre: 'Drama',
    releaseDate: '2001-16-03',
    duration: 131,
    image: '../images/enemyatthegates.jpeg',
    link: '<<iframe width="560" height="315" src="https://www.youtube.com/embed/tAW9PbzEVpI?si=dCZS9X4qSN7WjrVZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie6.save()

  const movie7 = await new Movie({
    title: 'Jeepers Creepers',
    description: 'Jeepers Creepers is a horror film about two siblings who encounter a terrifying creature while driving home for spring break.',
    genre: 'Horror',
    releaseDate: '2001-31-08',
    duration: 90,
    image: '../images/JeepersCreepers.jpeg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Sz2fFa2RKRo?si=BQEcNmYmVX_VTJQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie7.save()

  const movie8 = await new Movie({
    title: 'Three Wishes for Cinderella',
    description: 'Three Wishes for Cinderella is a charming fairy tale film about a young Cinderella who, with the help of three magical hazel nuts, pursues her dreams and wins the heart of a prince.',
    genre: 'Romance',
    releaseDate: '2022-01',
    duration: 111,
    image: '../images/threewishesforcinderella.jpeg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AU0w2Uq9tNU?si=boIh-1Ie0-7ioFb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie8.save()

  const movie9 = await new Movie({
    title: 'Super Size Me',
    description: 'Super Size Me is a documentary film where filmmaker Morgan Spurlock explores the effects of consuming fast food by exclusively eating McDonalds meals for 30 days.',
    genre: 'Documentary',
    releaseDate: '2004-07-05',
    duration: 100,
    image: '../images/SuperSizeMe.jpeg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zKQGAv8gtBA?si=FoOKMeGYaa8aBQ4j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie9.save()






  const actors = [
    {
      name: 'David Duchovny',
      bio: 'David Duchovny is an American actor, known for his roles as Fox Mulder in "The X-Files" and Hank Moody in "Californication," also pursuing writing and music.',
      dob: '1960-08-07',
      movie: movie1._id
    },
    {
      name: 'Bruce Willis',
      bio: 'Bruce Willis is an American actor known for his roles in action films such as Die Hard, as well as his versatile performances across various genres.',
      dob: '1955-03-19',
      movie: movie2._id
    },
    {
      name: 'Ethan Hawke',
      bio: 'Ethan Hawke is an American actor acclaimed for his roles in a wide range of films, from the coming-of-age classic "Dead Poets Society" to intense crime dramas like "Training Day.',
      dob: '1970-08-06',
      movie: movie3._id
    },
    {
      name: 'Justin Timberlake',
      bio: 'Justin Timberlake is an American singer-songwriter, actor, and producer, known for his successful music career with *NSYNC and as a solo artist, as well as his acting roles in films such as "The Social Network" and "In Time',
      dob: '1981-01-31',
      movie: movie4._id
    },
    {
      name: 'Jesse Eisenberg',
      bio: 'Jesse Eisenberg is an American actor known for his roles in films such as "The Social Network," "Zombieland," and "Rio," as well as his talent for portraying complex and intellectually-driven characters.',
      dob: '1983-08-05',
      movie: movie5._id
    },
    {
      name: 'Jude Law',
      bio: 'Jude Law is a British actor known for his versatile performances in films such as "The Talented Mr. Ripley," "Cold Mountain," and "Enemy at the Gates," as well as his stage work and philanthropic endeavors.',
      dob: '1982-12-29',
      movie: movie6._id
    },
    {
        name: 'Justin Long',
        bio: 'Justin Long is an American actor known for his versatile roles in films such as "Dodgeball," "Accepted," and "Jeepers Creepers," as well as his distinctive voice work in animated movies and commercials.',
        dob: '1982-12-29',
        movie: movie7._id
      },
    {
      name: 'Astrid Smeplass',
      bio: 'Astrid Smeplass, known professionally as Astrid S, is a Norwegian singer-songwriter and actress known for her pop hits and her role in the 2021 adaptation of Three Wishes for Cinderella.',
      dob: '1996-08-29',
      movie: movie8._id
    },
    {
        name: 'Morgan Spurlock',
        bio: 'Morgan Spurlock is an American documentary filmmaker, producer, and television presenter best known for his film Super Size Me, which explores the impact of fast food on health.',
        dob: '1970-11-07',
        movie: movie9._id
      }

    ]
    await Actor.insertMany(actors)
  console.log('Created products!')


      const reviews = [
        {
          rating: 'PG-13',
          movieReview: 'Evolution is a fun and entertaining sci-fi comedy that delivers laughs with its quirky characters and outlandish alien encounters.',
          movie: movie1._id
        },
        {
          rating: 'PG-13',
          movieReview: 'RED is a highly entertaining action-comedy that combines thrilling sequences with a stellar ensemble cast delivering sharp, humorous performances.',
          movie: movie2._id
        },
        {
          rating: 'R',
          movieReview: 'The Purge is a tense and provocative thriller that explores the dark side of human nature with a chillingly unique premise.',
          movie: movie3._id
        },
        {
          rating: 'PG-13',
          movieReview: 'In Time offers a stylish and intriguing sci-fi premise, though its execution and social commentary are somewhat underdeveloped.',
          movie: movie4._id
        },
        {
          rating: 'G',
          movieReview: 'Rio is a vibrant and visually stunning animated film that delights with its charming characters and infectious musical numbers.',
          movie: movie5._id
        },
        {
          rating: 'R',
          movieReview: 'Enemy at the Gates is a gripping war drama that captivates with its intense sniper duels and strong performances amidst the backdrop of the Battle of Stalingrad.',
          movie: movie6._id
        },
        {
          rating: 'R',
          movieReview: 'Justin Long is an American actor known for his versatile roles in films such as "Dodgeball," "Accepted," and "Jeepers Creepers," as well as his distinctive voice work in animated movies and commercials.',
          movie: movie7._id
        },
        {
          rating: 'TV-PG',
          movieReview: 'A modern retelling of the classic fairy tale, Three Wishes for Cinderella A Romance at Snowtime follows the enchanting journey of Cinderella as she navigates love and destiny with a magical twist.',
          movie: movie8._id
         },
         {
           rating: 'TV-PG',
           movieReview: 'Super Size Me is a groundbreaking documentary where filmmaker Morgan Spurlock explores the impact of fast food on health by exclusively eating McDonalds meals for 30 days.',
           movie: movie9._id
         }
  ]

  await Review.insertMany(reviews)
  console.log('Created products!')
}

const run = async () => {
  await main()
  db.close()
}

run()


