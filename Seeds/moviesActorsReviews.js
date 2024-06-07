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
      const review1 = await new Review({
        rating: 'NR',
        movieReview: 'Not-Rated'
      })
      await review1.save()
    
      const review2 = await new Review({
          rating: 'R',
          movieReview: 'Restricted: R - Under 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them.'
      })
      await review2.save()
    
      const review3 = await new Review({
          rating: 'PG-13',
          movieReview: 'Rated PG-13: Parents strongly cautioned Some material may be inappropriate for children under 13. Rated R: Restricted Under 17 requires accompanying parent or adult guardian. Rated X: No one under 17 admitted.'
      })
      await review3.save()

      const review4 = await new Review({
        rating: 'PG',
        movieReview: 'PG stands for "Parental Guidance Suggested" and is a rating given to movies and other media by the Motion Picture Association (MPA). It means that some material in the content may not be suitable for children and that parents are encouraged to provide guidance. PG-rated content may include mild bad language, but aggressive or frequent use of words may result in a higher rating.'
    })
    await review4.save()




    const movies = [
      {
        title: 'Bad President',
        description: 'Bad President is a satirical comedy film depicting the chaotic and absurd events that unfold when an inept man becomes President of the United States.',
        genre: 'Comedy',
        releaseDate: '2020-30-10',
        duration: 86,
        image: '../images/movies/BadPresident.jpeg',
        link: 'https://www.youtube.com/embed/0g_6-qMkq-k?si=3kOXFx2WxjiGjWey',
        review: review1._id
      },
      {
        title: 'Fallen',
        description: 'Fallen is a crime thriller where a detective tracks down a serial killer who is able to transfer his spirit to new hosts, creating a chilling cat-and-mouse game of good versus evil.',
        genre: 'Action & adventure',
        releaseDate: '1998-16-01',
        duration: 124,
        image: '../images/movies/Fallen.jpeg',
        link: 'https://www.youtube.com/embed/J86cfW4RMCA?si=39nFQYE3yyDoxRpJ',
        review: review2._id
      },
      {
        title: 'The Ravine',
        description: 'The Ravine is a drama film centered around a tragic event that unravels the lives of multiple families living in a suburban neighborhood.',
        genre: 'Thriller',
        releaseDate: '2021-07-06',
        duration: 112,
        image: '../images/movies/TheRavine.jpeg',
        link: 'https://www.youtube.com/embed/Lv9T8ZmVLCY?si=XfFTq9GvTli7L39A',
        review: review2._id
      },
      {
        title: 'Alpha Code',
        description: 'The Alpha Code is a sci-fi thriller following a cryptographer as he delves into a mysterious code that unlocks a dangerous secret threatening humanitys future.',
        genre: 'Science fiction',
        releaseDate: '2023-16-07',
        duration: 109,
        image: '../images/movies/AlphaCode.jpeg',
        link: 'https://www.youtube.com/embed/9nvZzuQep6A?si=hRHp43ZzQvDII9N7',
        review: review3._id
      },
      {
        title: 'The Stolen Princess',
        description: 'The Stolen Princess is an animated fantasy adventure where a brave young hero sets out on a quest to rescue a princess kidnapped by an evil sorcerer.',
        genre: 'Animation',
        releaseDate: '2018-07-03',
        duration: 85,
        image: '../images/movies/TheStolenPrincess.jpeg',
        link: 'https://www.youtube.com/embed/zomYZpaHoNw?si=Q5aPb85t_BNM1QLV',
        review: review4._id
      },
      {
        title: 'Devil in a Blue Dress',
        description: 'Devil in a Blue Dress is a neo-noir mystery film where a reluctant detective navigates the treacherous world of 1940s Los Angeles to solve a high-stakes case involving a missing woman.',
        genre: 'Drama',
        releaseDate: '1995-29-09',
        duration: 102,
        image: '../images/movies/DevilInBlueDress.jpeg',
        link: 'https://www.youtube.com/embed/Xi90v8cVBsU?si=tIBVVfqeey7fFHwE',
        review: review2._id
      },
      {
        title: 'Day of the Dead',
        description: 'Day of the Dead is a horror film where a group of survivors must fend off hordes of flesh-eating zombies while seeking refuge in an underground bunker.',
        genre: 'Horror',
        releaseDate: '1985-08-04',
        duration: 102,
        image: '../images/movies/DayOfTheDead.jpeg',
        link: 'https://www.youtube.com/embed/ArEnBmZgpxo?si=wQBj2dDH1ScBAdD0',
        review: review2._id
        },
      {
        title: 'Three Wishes for Cinderella',
        description: 'Three Wishes for Cinderella is a charming fairy tale film about a young Cinderella who, with the help of three magical hazel nuts, pursues her dreams and wins the heart of a prince.',
        genre: 'Romance',
        releaseDate: '2022-01',
        duration: 111,
        image: '../images/movies/threewishesforcinderella.jpeg',
        link: 'https://www.youtube.com/embed/AU0w2Uq9tNU?si=boIh-1Ie0-7ioFb8',
        review: review4._id
      },
      {
        title: 'Tales of the Men In Black',
        description: 'Tales of the Men In Black: The Documentary is a speculative exploration into the real-life origins and alleged activities of the enigmatic government agency, blending fact with fiction.',
        genre: 'Documentary',
        releaseDate: '2023-07-03',
        duration: 86,
        image: '../images/movies/TalesOfTheMenInBlack.jpeg',
        link: 'https://www.youtube.com/embed/B01CNlpKjMQ?si=ZfdtB1rZb5rFIsMJ',
        review: review3._id
        }
  
      ]
      await Movie.insertMany(movies)
    console.log('Created movies!')

    const actors = [
      {
        image: '../images/actors/EddieGriffin.jpg',
        name: 'Eddie Griffin',
        bio: 'Eddie Griffin is a versatile comedian and actor known for his sharp wit and energetic performances, spanning stand-up comedy, television, and film.',
        dob: '1968-15-07',
      },
      {
        image: '../images/actors/DenzelWashington.jpg',
        name: 'Denzel Washington',
        bio: 'Denzel Washington is an iconic actor and filmmaker renowned for his powerful performances, compelling characters, and dedication to excellence in the world of cinema.',
        dob: '1954-28-12',
      },
      {
        image: '../images/actors/EricDane.jpg',
        name: 'Eric Dane',
        bio: 'Eric Dane is an American actor known for his roles in television series such as Greys Anatomy and The Last Ship, as well as appearances in films like Marley & Me and X-Men: The Last Stand.',
        dob: '1972-11-09',
      },
      {
        image: '../images/actors/DeniseRichards.jpg',
        name: 'Denise Richards',
        bio: 'Denise Richards is an American actress known for her roles in films like "Wild Things" and "The World Is Not Enough," as well as her appearances on reality TV shows.',
        dob: '1971-17-04',
      },
      {
        image: '../images/actors/AlysonLeighRosenfeld.jpg',
        name: ' Alyson Leigh Rosenfeld',
        bio: 'Alyson Leigh Rosenfeld is an American voice actress known for her roles in various animated series and films, including providing the voice of Mila in The Stolen Princess.',
        dob: '1987-21-03',
      },
      {
        image: '../images/actors/DonCheadle.jpg',
        name: 'Don Cheadle',
        bio: 'Don Cheadle is an American actor known for his versatile performances in film and television, acclaimed for roles ranging from Hotel Rwanda to Oceans Eleven, and notably portraying Mouse in Devil in a Blue Dress.',
        dob: '1964-29-12',
      },
      {
          image: '../images/actors/LoriCardille.jpg',
          name: 'Lori Cardille',
          bio: 'Lori Cardille is an American actress best known for her role as Sarah Bowman in George A. Romeros 1985 horror film Day of the Dead',
          dob: '1954-15-07',
        },
      {
        image: '../images/actors/AstridSmeplass.jpg',
        name: 'Astrid Smeplass',
        bio: 'Astrid Smeplass, known professionally as Astrid S, is a Norwegian singer-songwriter and actress known for her pop hits and her role in the 2021 adaptation of Three Wishes for Cinderella.',
        dob: '1996-08-29',
      },
      {
          image: '../images/actors/JohnMKeel.jpeg',
          name: 'John M. Keel',
          bio: 'John A. Keel was an American journalist and influential ufologist best known for his book "The Mothman Prophecies," which explores paranormal phenomena and cryptids.',
          dob: '1930-25-03',
        }
  
      ]
      await Actor.insertMany(actors)
    console.log('Created actors!')
    }

    const run = async () => {
      await main()
      db.close()
    }
    
    run()