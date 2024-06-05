const db = require('../DB')
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
    title: 'Bad President',
    description: 'Bad President is a satirical comedy film depicting the chaotic and absurd events that unfold when an inept man becomes President of the United States.',
    genre: 'Comedy',
    releaseDate: '2020-30-10',
    duration: 86,
    image: '../images/BadPresident.jpeg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0g_6-qMkq-k?si=3kOXFx2WxjiGjWey" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie1.save()

  const movie2 = await new Movie({
    title: 'Fallen',
    description: 'Fallen is a crime thriller where a detective tracks down a serial killer who is able to transfer his spirit to new hosts, creating a chilling cat-and-mouse game of good versus evil.',
    genre: 'Action & adventure',
    releaseDate: '1998-16-01',
    duration: 124,
    image: '../images/Fallen.jpeg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/J86cfW4RMCA?si=39nFQYE3yyDoxRpJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie2.save()

  const movie3 = await new Movie({
    title: 'The Ravine',
    description: 'The Ravine is a drama film centered around a tragic event that unravels the lives of multiple families living in a suburban neighborhood.',
    genre: 'Thriller',
    releaseDate: '2021-07-06',
    duration: 112,
    image: '../images/TheRavine.jpeg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Lv9T8ZmVLCY?si=XfFTq9GvTli7L39A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie3.save()

  const movie4 = await new Movie({
    title: 'Alpha Code',
    description: 'The Alpha Code is a sci-fi thriller following a cryptographer as he delves into a mysterious code that unlocks a dangerous secret threatening humanitys future.',
    genre: 'Science fiction',
    releaseDate: '2023-16-07',
    duration: 109,
    image: '../images/AlphaCode.jpeg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9nvZzuQep6A?si=hRHp43ZzQvDII9N7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie4.save()

  const movie5 = await new Movie({
    title: 'The Stolen Princess',
    description: 'The Stolen Princess is an animated fantasy adventure where a brave young hero sets out on a quest to rescue a princess kidnapped by an evil sorcerer.',
    genre: 'Animation',
    releaseDate: '2018-07-03',
    duration: 85,
    image: '../images/TheStolenPrincess.jpeg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zomYZpaHoNw?si=Q5aPb85t_BNM1QLV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie5.save()

  const movie6 = await new Movie({
    title: 'Devil in a Blue Dress',
    description: 'Devil in a Blue Dress is a neo-noir mystery film where a reluctant detective navigates the treacherous world of 1940s Los Angeles to solve a high-stakes case involving a missing woman.',
    genre: 'Drama',
    releaseDate: '1995-29-09',
    duration: 102,
    image: '../images/DevilInBlueDress.jpeg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Xi90v8cVBsU?si=tIBVVfqeey7fFHwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie6.save()

  const movie7 = await new Movie({
    title: 'Day of the Dead',
    description: 'Day of the Dead is a horror film where a group of survivors must fend off hordes of flesh-eating zombies while seeking refuge in an underground bunker.',
    genre: 'Horror',
    releaseDate: '1985-08-04',
    duration: 102,
    image: '../images/DayOfTheDead.jpeg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ArEnBmZgpxo?si=wQBj2dDH1ScBAdD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
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
    title: 'Tales of the Men In Black',
    description: 'Tales of the Men In Black: The Documentary is a speculative exploration into the real-life origins and alleged activities of the enigmatic government agency, blending fact with fiction.',
    genre: 'Documentary',
    releaseDate: '2023-07-03',
    duration: 86,
    image: '../images/TalesOfTheMenInBlack.jpeg',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/B01CNlpKjMQ?si=ZfdtB1rZb5rFIsMJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  })
  await movie9.save()






  const actors = [
    {
      name: 'Eddie Griffin',
      bio: 'Eddie Griffin is a versatile comedian and actor known for his sharp wit and energetic performances, spanning stand-up comedy, television, and film.',
      dob: '1968-15-07',
      movie: movie1._id
    },
    {
      name: 'Denzel Washington',
      bio: 'Denzel Washington is an iconic actor and filmmaker renowned for his powerful performances, compelling characters, and dedication to excellence in the world of cinema.',
      dob: '1954-28-12',
      movie: movie2._id,
    },
    {
      name: 'Eric Dane',
      bio: 'Eric Dane is an American actor known for his roles in television series such as Greys Anatomy and The Last Ship, as well as appearances in films like Marley & Me and X-Men: The Last Stand.',
      dob: '1972-11-09',
      movie: movie3._id
    },
    {
      name: 'Denise Richards',
      bio: 'Denise Richards is an American actress known for her roles in films like "Wild Things" and "The World Is Not Enough," as well as her appearances on reality TV shows.',
      dob: '1971-17-04',
      movie: movie4._id
    },
    {
      name: ' Alyson Leigh Rosenfeld',
      bio: 'Alyson Leigh Rosenfeld is an American voice actress known for her roles in various animated series and films, including providing the voice of Mila in The Stolen Princess.',
      dob: '1987-21-03',
      movie: movie5._id
    },
    {
      name: 'Don Cheadle',
      bio: 'Don Cheadle is an American actor known for his versatile performances in film and television, acclaimed for roles ranging from Hotel Rwanda to Oceans Eleven, and notably portraying Mouse in Devil in a Blue Dress.',
      dob: '1964-29-12',
      movie: movie6._id
    },
    {
        name: 'Lori Cardille',
        bio: 'Lori Cardille is an American actress best known for her role as Sarah Bowman in George A. Romeros 1985 horror film Day of the Dead',
        dob: '1954-15-07',
        movie: movie7._id
      },
    {
      name: 'Astrid Smeplass',
      bio: 'Astrid Smeplass, known professionally as Astrid S, is a Norwegian singer-songwriter and actress known for her pop hits and her role in the 2021 adaptation of Three Wishes for Cinderella.',
      dob: '1996-08-29',
      movie: movie8._id
    },
    {
        name: 'John M. Keel',
        bio: 'John A. Keel was an American journalist and influential ufologist best known for his book "The Mothman Prophecies," which explores paranormal phenomena and cryptids.',
        dob: '1930-25-03',
        movie: movie9._id
      }

    ]
    await Actor.insertMany(actors)
  console.log('Created products!')


      const reviews = [
        {
          rating: 'NR',
          movieReview: 'Bad President A cringe-worthy attempt at satire that misses the mark with its predictable humor and lackluster performances.',
          movie: movie1._id
        },
        {
          rating: 'R',
          movieReview: 'Fallen A gripping supernatural thriller that keeps you guessing until the very end, with stellar performances and a haunting atmosphere.',
          movie: movie2._id
        },
        {
          rating: 'R',
          movieReview: 'The Ravine A powerful and emotionally charged drama that skillfully explores themes of redemption and forgiveness amidst tragedy.',
          movie: movie3._id
        },
        {
          rating: 'PG-13',
          movieReview: 'Alpha Code A compelling blend of science fiction and drama, though somewhat uneven in pacing, offers an intriguing exploration of family dynamics and the mysteries of the universe.',
          movie: movie4._id
        },
        {
          rating: 'PG',
          movieReview: 'The Stolen Princess A whimsical and enchanting animated adventure that delights both children and adults with its charming characters and magical storytelling.',
          movie: movie5._id
        },
        {
          rating: 'R',
          movieReview: 'Devil in a Blue Dress A stylish and atmospheric neo-noir with a standout performance by Denzel Washington, delivering a gripping tale of intrigue and racial tension in 1940s Los Angeles.',
          movie: movie6._id
        },
        {
          rating: 'R',
          movieReview: 'Day of the Dead A lackluster remake that fails to capture the essence of Romeros classic, relying too heavily on gore and lacking the depth of its predecessor.',
          movie: movie7._id
        },
        {
          rating: 'PG',
          movieReview: 'A modern retelling of the classic fairy tale, Three Wishes for Cinderella A Romance at Snowtime follows the enchanting journey of Cinderella as she navigates love and destiny with a magical twist.',
          movie: movie8._id
         },
         {
           rating: 'PG',
           movieReview: 'Tales of the Men in Black documentary A fascinating behind-the-scenes exploration of the real-life inspirations and cultural impact behind the iconic Men in Black phenomenon, offering intriguing insights into conspiracy theories and government secrecy.',
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


