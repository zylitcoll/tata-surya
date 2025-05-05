export const planetsData = [
  {
    id: "mercury",
    name: "Mercury",
    shortDescription: "The smallest and closest planet to the Sun",
    description: "Mercury is the smallest planet in our solar system and the closest to the Sun. It's a rocky planet with a surface covered in craters, similar to our Moon.",
    overview: "Mercury is the first planet from the Sun and the smallest planet in our Solar System. It's a rocky world with a heavily cratered surface. The planet has no atmosphere to speak of, and no moons. Mercury is not much larger than Earth's Moon and has a similar appearance - a barren, gray and dusty place.",
    atmosphere: "Mercury has a very thin atmosphere made up of atoms blasted off its surface by the solar wind. Because Mercury is so hot, these atoms quickly escape into space. This atmosphere is extremely thin and not at all like the atmospheres of planets like Earth or Venus.",
    gradient: "mercury-gradient",
    image: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    model: "/mercury.glb",
    modelScale: 2.0,
    facts: {
      diameter: "4,879 km (0.38 × Earth)",
      day: "59 Earth days",
      year: "88 Earth days",
      moons: "0",
      distanceFromSun: "57.9 million km",
      temperature: "-173°C to 427°C"
    },
    funFacts: [
      "Mercury is the fastest planet, orbiting the Sun every 88 Earth days.",
      "Despite being closest to the Sun, it's not the hottest planet (Venus is).",
      "A day on Mercury is longer than its year!",
      "Mercury's surface looks very similar to our Moon.",
      "The planet has a large iron core that takes up about 60% of its mass."
    ],
    exploration: {
      overview: "Only two spacecraft have visited Mercury so far because it's difficult to reach. The planet's proximity to the Sun makes it challenging for spacecraft to orbit without being pulled into the Sun.",
      missions: [
        {
          name: "Mariner 10",
          year: "1974-1975",
          description: "The first spacecraft to visit Mercury. It flew by the planet three times and mapped about 45% of Mercury's surface."
        },
        {
          name: "MESSENGER",
          year: "2008-2015",
          description: "This spacecraft orbited Mercury for four years, mapping the entire planet and discovering evidence of water ice at the poles."
        },
        {
          name: "BepiColombo",
          year: "2018-Present",
          description: "This joint mission between Europe and Japan is currently on its way to Mercury and will study the planet's composition, geology, and magnetic field."
        }
      ]
    }
  },
  {
    id: "venus",
    name: "Venus",
    shortDescription: "The hottest planet with thick toxic clouds",
    description: "Venus is the second planet from the Sun and the hottest planet in our solar system. It's covered in thick, toxic clouds that trap heat, making it even hotter than Mercury.",
    overview: "Venus is often called Earth's twin because it's similar in size and structure, but the two planets couldn't be more different. Venus has a thick atmosphere that traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with temperatures hot enough to melt lead.",
    atmosphere: "Venus has a very thick atmosphere made mostly of carbon dioxide with clouds of sulfuric acid. The pressure on Venus's surface is 92 times greater than Earth's - similar to the pressure you would feel 900 meters deep in Earth's oceans! This thick atmosphere traps heat and keeps Venus extremely hot.",
    gradient: "venus-gradient",
    image: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    model: "/venus.glb",
    modelScale: 2.2,
    facts: {
      diameter: "12,104 km (0.95 × Earth)",
      day: "243 Earth days",
      year: "225 Earth days",
      moons: "0",
      distanceFromSun: "108.2 million km",
      temperature: "462°C (average)"
    },
    funFacts: [
      "Venus rotates backwards compared to other planets.",
      "A day on Venus is longer than its year!",
      "Venus is the brightest natural object in the night sky after the Moon.",
      "The atmospheric pressure on Venus is 92 times greater than Earth's.",
      "You could see the sunrise in the west and set in the east on Venus."
    ],
    exploration: {
      overview: "Venus has been visited by more than 40 spacecraft, but its extreme conditions make it difficult to explore. The surface pressure and heat destroy spacecraft quickly.",
      missions: [
        {
          name: "Venera Program",
          year: "1961-1984",
          description: "Soviet missions that included the first spacecraft to land on another planet. Venera 13 survived on the surface for 127 minutes and sent back the first color photos of Venus."
        },
        {
          name: "Magellan",
          year: "1989-1994",
          description: "NASA mission that mapped 98% of Venus's surface using radar to see through the thick clouds."
        },
        {
          name: "Venus Express",
          year: "2005-2014",
          description: "European Space Agency mission that studied Venus's atmosphere and discovered evidence of recent volcanic activity."
        },
        {
          name: "Akatsuki",
          year: "2015-Present",
          description: "Japanese mission currently orbiting Venus and studying its weather patterns and surface."
        }
      ]
    }
  },
  {
    id: "earth",
    name: "Earth",
    shortDescription: "Our home planet, the only known world with life",
    description: "Earth is our home planet and the only place in the universe currently known to harbor life. It's the third planet from the Sun and has a perfect environment for life to thrive.",
    overview: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth's surface is covered with water, with oceans making up most of this. The rest consists of continents and islands, with many rivers and lakes. Earth's atmosphere is mostly nitrogen and oxygen, and it has a strong magnetic field that protects us from the Sun's harmful radiation.",
    atmosphere: "Earth's atmosphere is composed of 78% nitrogen, 21% oxygen, and small amounts of other gases like carbon dioxide, water vapor, and argon. This thin layer of gases protects us from harmful radiation, keeps the planet warm through the greenhouse effect, and provides the air we breathe. The atmosphere also helps distribute water across the planet's surface.",
    gradient: "earth-gradient",
    image: "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    model: "/earth.glb",
    modelScale: 2.3,
    facts: {
      diameter: "12,742 km",
      day: "24 hours",
      year: "365.25 days",
      moons: "1 (the Moon)",
      distanceFromSun: "149.6 million km",
      temperature: "-88°C to 58°C"
    },
    funFacts: [
      "Earth is the only planet not named after a god.",
      "Earth has a powerful magnetic field created by its iron core.",
      "70% of Earth's surface is covered in water.",
      "Earth's atmosphere is 78% nitrogen and 21% oxygen.",
      "Earth is the only planet where liquid water exists on the surface."
    ],
    exploration: {
      overview: "Earth has been explored extensively by humans throughout history. Space exploration has given us a unique perspective on our home planet.",
      missions: [
        {
          name: "First Human Spaceflight",
          year: "1961",
          description: "Yuri Gagarin became the first human to orbit Earth, giving us a new perspective on our planet."
        },
        {
          name: "Apollo Missions",
          year: "1968-1972",
          description: "Astronauts traveled to the Moon, taking the famous 'Earthrise' photo showing Earth as a small blue marble in space."
        },
        {
          name: "Earth Observing System",
          year: "1999-Present",
          description: "NASA's series of satellites that continuously monitor Earth's climate, oceans, land, and atmosphere."
        },
        {
          name: "International Space Station",
          year: "2000-Present",
          description: "A space station that orbits Earth where astronauts live and conduct scientific research, observing Earth from above."
        }
      ]
    }
  },
  {
    id: "mars",
    name: "Mars",
    shortDescription: "The red planet with ancient river valleys",
    description: "Mars is the fourth planet from the Sun, often called the 'Red Planet' because of its reddish appearance. It has valleys, deserts, and polar ice caps, similar to Earth.",
    overview: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. Mars is often called the 'Red Planet' because of the iron oxide (rust) on its surface that gives it a reddish appearance. Mars has features similar to Earth's, including polar ice caps, canyons, and ancient river beds, which suggests that liquid water once flowed on the surface.",
    atmosphere: "Mars has a very thin atmosphere composed mostly of carbon dioxide (96%), with some nitrogen and argon. The atmosphere is too thin to support liquid water on the surface today, but evidence suggests Mars once had a thicker atmosphere and flowing water. The thin atmosphere also means Mars experiences extreme temperature variations and cannot protect the surface from meteor impacts or solar radiation.",
    gradient: "mars-gradient",
    image: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    model: "/mars.glb",
    modelScale: 2.2,
    facts: {
      diameter: "6,779 km (0.53 × Earth)",
      day: "24.6 hours",
      year: "687 Earth days",
      moons: "2 (Phobos and Deimos)",
      distanceFromSun: "227.9 million km",
      temperature: "-153°C to 20°C"
    },
    funFacts: [
      "Mars has the largest volcano in the solar system, Olympus Mons.",
      "Mars has seasons like Earth because it's tilted on its axis.",
      "Mars has the longest and deepest canyon called Valles Marineris.",
      "Evidence suggests liquid water once flowed on Mars.",
      "A year on Mars is nearly twice as long as a year on Earth."
    ],
    exploration: {
      overview: "Mars is one of the most explored planets in our solar system, with numerous rovers, landers, and orbiters sent to study its surface and atmosphere.",
      missions: [
        {
          name: "Viking 1 & 2",
          year: "1976",
          description: "The first spacecraft to successfully land on Mars and send back images of the surface."
        },
        {
          name: "Mars Pathfinder & Sojourner",
          year: "1997",
          description: "First rover mission to Mars. Sojourner was a small rover that explored the area around the Pathfinder lander."
        },
        {
          name: "Spirit & Opportunity",
          year: "2004-2018",
          description: "Twin rovers that explored different regions of Mars, finding evidence of past water on the planet's surface."
        },
        {
          name: "Curiosity",
          year: "2012-Present",
          description: "A car-sized rover exploring Gale Crater, searching for evidence of past habitable environments."
        },
        {
          name: "Perseverance & Ingenuity",
          year: "2021-Present",
          description: "The newest rover and the first helicopter (drone) on Mars, searching for signs of ancient life and testing new technologies."
        }
      ]
    }
  },
  {
    id: "jupiter",
    name: "Jupiter",
    shortDescription: "The largest planet with a great red spot",
    description: "Jupiter is the largest planet in our solar system. It's a gas giant made mostly of hydrogen and helium with a famous Great Red Spot - a giant storm that has lasted for hundreds of years.",
    overview: "Jupiter is the fifth planet from the Sun and the largest in our Solar System. It's a gas giant made mostly of hydrogen and helium, similar to the Sun. Jupiter has no solid surface like Earth does - if you tried to stand on Jupiter, you would sink into its gaseous layers. The planet is known for its colorful bands of clouds and the Great Red Spot, a giant storm that has been raging for at least 400 years.",
    atmosphere: "Jupiter's atmosphere is the largest planetary atmosphere in the Solar System. It's made up of about 90% hydrogen and 10% helium with small amounts of other gases. The atmosphere has distinct bands of clouds in different colors, created by ammonia crystals, sulfur, and mixtures of these gases. Jupiter's famous Great Red Spot is a massive storm bigger than Earth that has been observed since at least the 1600s.",
    gradient: "jupiter-gradient",
    image: "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    model: "/jupiter.glb",
    modelScale: 3.0,
    facts: {
      diameter: "139,820 km (11 × Earth)",
      day: "9.9 hours",
      year: "11.9 Earth years",
      moons: "79+ (including Io, Europa, Ganymede, and Callisto)",
      distanceFromSun: "778.5 million km",
      temperature: "-145°C (average cloud temperature)"
    },
    funFacts: [
      "Jupiter's Great Red Spot is a storm larger than Earth that has existed for over 400 years.",
      "Jupiter has the strongest magnetic field of any planet.",
      "If Jupiter were just a bit larger, it might have become a star.",
      "Jupiter rotates faster than any other planet, completing a day in just 10 hours.",
      "Jupiter has rings, but they're much fainter than Saturn's."
    ],
    exploration: {
      overview: "Several spacecraft have visited Jupiter to study its atmosphere, moons, and magnetic field. Its strong radiation makes it challenging to explore up close.",
      missions: [
        {
          name: "Pioneer 10 & 11",
          year: "1973-1974",
          description: "These were the first spacecraft to fly by Jupiter, sending back the first close-up images."
        },
        {
          name: "Voyager 1 & 2",
          year: "1979",
          description: "These spacecraft captured detailed images of Jupiter and its moons, discovering Jupiter's rings and volcanic activity on Io."
        },
        {
          name: "Galileo",
          year: "1995-2003",
          description: "This spacecraft orbited Jupiter for eight years, studying the planet and its moons in detail and dropping a probe into Jupiter's atmosphere."
        },
        {
          name: "Juno",
          year: "2016-Present",
          description: "Currently orbiting Jupiter, Juno is studying the planet's composition, gravity field, magnetic field, and polar magnetosphere."
        }
      ]
    }
  },
  {
    id: "saturn",
    name: "Saturn",
    shortDescription: "The ringed planet with over 80 moons",
    description: "Saturn is the sixth planet from the Sun and the second-largest in our solar system. It's famous for its beautiful rings made of ice, rock, and dust particles.",
    overview: "Saturn is the sixth planet from the Sun and the second-largest planet in our Solar System, after Jupiter. It's a gas giant made mostly of hydrogen and helium. Saturn is best known for its stunning ring system, which is made up of seven main rings with gaps between them. These rings are made mostly of water ice, with some rocky debris and dust.",
    atmosphere: "Saturn's atmosphere is similar to Jupiter's - mostly hydrogen and helium. It has yellow and gold bands, but they're fainter and wider than Jupiter's. Saturn's clouds are not as colorful because they're covered by a layer of haze. The planet has incredibly fast winds that can reach speeds of 1,800 km/h (1,100 mph) at the equator - the fastest in the solar system.",
    gradient: "saturn-gradient",
    image: "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    model: "/saturn.glb",
    modelScale: 2.8,
    facts: {
      diameter: "116,460 km (9.1 × Earth)",
      day: "10.7 hours",
      year: "29.5 Earth years",
      moons: "82+ (including Titan and Enceladus)",
      distanceFromSun: "1.43 billion km",
      temperature: "-178°C (average)"
    },
    funFacts: [
      "Saturn has the most extensive ring system of any planet.",
      "Saturn is the least dense planet - it would float in water if there were a bathtub big enough!",
      "Saturn's moon Titan has rivers, lakes, and seas, but they're filled with liquid methane, not water.",
      "Saturn's rings are mostly made of water ice pieces ranging from tiny dust-sized particles to chunks as big as houses.",
      "A day on Saturn is just 10.7 hours long, but a year is 29.5 Earth years."
    ],
    exploration: {
      overview: "Several spacecraft have visited Saturn to study its rings, atmosphere, and many moons. Its distance from Earth makes it challenging to explore.",
      missions: [
        {
          name: "Pioneer 11",
          year: "1979",
          description: "The first spacecraft to fly by Saturn, providing the first close-up images of the planet and its rings."
        },
        {
          name: "Voyager 1 & 2",
          year: "1980-1981",
          description: "These spacecraft flew by Saturn, studying its rings in detail and discovering several new moons."
        },
        {
          name: "Cassini-Huygens",
          year: "2004-2017",
          description: "This mission orbited Saturn for 13 years, sending back thousands of images and vast amounts of data about the planet, its rings, and moons. The Huygens probe landed on Titan, giving us our only direct observations of this mysterious moon's surface."
        }
      ]
    }
  },
  {
    id: "uranus",
    name: "Uranus",
    shortDescription: "The sideways planet with icy blue color",
    description: "Uranus is the seventh planet from the Sun. It's an ice giant with a blue-green color due to methane in its atmosphere. Uniquely, Uranus rotates on its side, like a rolling ball.",
    overview: "Uranus is the seventh planet from the Sun and the third-largest by diameter. It's an ice giant, different from the gas giants (Jupiter and Saturn) because it contains more 'ices' such as water, ammonia, and methane. Uranus appears blue-green because of methane in its atmosphere, which absorbs red light. The most unique feature of Uranus is that it rotates on its side, with its axis pointed nearly 90 degrees away from the 'up-and-down' orientation of most planets.",
    atmosphere: "Uranus's atmosphere is made mostly of hydrogen and helium, with a small amount of methane that gives the planet its blue-green color. Below this is a layer of clouds made of water, ammonia, and methane ice. Uranus doesn't have dramatic bands like Jupiter and Saturn - it appears as a fairly uniform blue-green ball, though when viewed with powerful telescopes, some cloud features can be seen.",
    gradient: "uranus-gradient",
    image: "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    model: "/uranus.glb",
    modelScale: 2.5,
    facts: {
      diameter: "50,724 km (4 × Earth)",
      day: "17.2 hours",
      year: "84 Earth years",
      moons: "27",
      distanceFromSun: "2.87 billion km",
      temperature: "-224°C (average)"
    },
    funFacts: [
      "Uranus rotates sideways, with its poles where most planets have their equator.",
      "This tilted rotation might have been caused by a giant impact long ago.",
      "Uranus was the first planet discovered using a telescope.",
      "The planet has faint rings, discovered in 1977.",
      "Uranus's moons are named after characters from Shakespeare and Alexander Pope's works."
    ],
    exploration: {
      overview: "Uranus has only been visited by one spacecraft due to its great distance from Earth. Much of what we know comes from observations with telescopes.",
      missions: [
        {
          name: "Voyager 2",
          year: "1986",
          description: "The only spacecraft to fly by Uranus. It passed about 81,500 km from the planet's cloud tops, discovering 10 new moons and two new rings."
        },
        {
          name: "Hubble Space Telescope",
          year: "1990-Present",
          description: "While not a dedicated mission to Uranus, the Hubble Space Telescope has provided valuable observations of the planet, including images of aurora activity and seasonal changes in its atmosphere."
        },
        {
          name: "Future Missions",
          year: "Planned",
          description: "NASA and other space agencies have proposed missions to Uranus, but none have been approved yet. A dedicated orbiter would help us learn much more about this mysterious ice giant."
        }
      ]
    }
  },
  {
    id: "neptune",
    name: "Neptune",
    shortDescription: "The windy blue planet furthest from the Sun",
    description: "Neptune is the eighth and farthest planet from the Sun. It's an ice giant with a deep blue color caused by methane in its atmosphere. Neptune has the strongest winds in our solar system.",
    overview: "Neptune is the eighth and farthest known planet from the Sun. Like Uranus, Neptune is classified as an ice giant because its composition is different from gas giants like Jupiter and Saturn. Neptune has a deep blue color due to methane in its atmosphere. It's the windiest planet in our solar system, with winds that can reach speeds of 2,100 km/h (1,300 mph) - faster than the speed of sound on Earth!",
    atmosphere: "Neptune's atmosphere is made up mostly of hydrogen and helium, with small amounts of methane that give the planet its blue color. Below this are clouds of ammonia, water, and ammonia hydrogen sulfide. The atmosphere has visible weather patterns, including dark spots similar to Jupiter's Great Red Spot, though these spots on Neptune appear and disappear over periods of years.",
    gradient: "neptune-gradient",
    image: "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    model: "/neptune.glb",
    modelScale: 2.5,
    facts: {
      diameter: "49,244 km (3.9 × Earth)",
      day: "16.1 hours",
      year: "165 Earth years",
      moons: "14",
      distanceFromSun: "4.5 billion km",
      temperature: "-214°C (average)"
    },
    funFacts: [
      "Neptune has the strongest winds in the solar system, reaching 2,100 km/h.",
      "It was discovered through mathematical predictions rather than observation.",
      "Neptune has completed only one orbit around the Sun since its discovery in 1846.",
      "Neptune's moon Triton orbits backwards and is probably a captured dwarf planet.",
      "Neptune has a Great Dark Spot similar to Jupiter's Great Red Spot, but it comes and goes."
    ],
    exploration: {
      overview: "Due to its extreme distance from Earth, Neptune has only been visited by one spacecraft. Most of our knowledge comes from telescope observations.",
      missions: [
        {
          name: "Voyager 2",
          year: "1989",
          description: "The only spacecraft to visit Neptune. It flew by in August 1989, coming within 4,950 km of the planet's north pole and providing the first close-up images of the blue planet."
        },
        {
          name: "Hubble Space Telescope",
          year: "1990-Present",
          description: "The Hubble Space Telescope has observed Neptune regularly, tracking changes in its atmosphere, including the appearance and disappearance of dark spots and clouds."
        },
        {
          name: "James Webb Space Telescope",
          year: "2022-Present",
          description: "The new James Webb Space Telescope has provided some of the best new images of Neptune, showing its rings with extraordinary clarity."
        }
      ]
    }
  },
  {
    id: "pluto",
    name: "Pluto",
    shortDescription: "The dwarf planet with a heart-shaped region",
    description: "Pluto used to be considered the ninth planet but is now classified as a dwarf planet. It's a small, icy world with a heart-shaped region on its surface called 'Tombaugh Regio'.",
    overview: "Pluto was considered the ninth planet in our solar system until 2006, when astronomers reclassified it as a 'dwarf planet.' Pluto is located in the Kuiper Belt, a region of icy bodies beyond Neptune's orbit. Despite its small size, Pluto has five moons. The largest, Charon, is so big compared to Pluto that they orbit each other, like a double planet system.",
    atmosphere: "Pluto has a very thin atmosphere that expands when it comes closer to the Sun in its orbit and collapses as it moves farther away. The atmosphere is made mostly of nitrogen, with small amounts of methane and carbon monoxide. When Pluto is closest to the Sun, its surface ice sublimates (changes directly from solid to gas), creating this temporary atmosphere.",
    gradient: "pluto-gradient",
    image: "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    model: "/pluto.glb",
    modelScale: 1.5,
    facts: {
      diameter: "2,377 km (0.18 × Earth)",
      day: "6.4 Earth days",
      year: "248 Earth years",
      moons: "5 (Charon, Nix, Hydra, Kerberos, and Styx)",
      distanceFromSun: "5.9 billion km (average)",
      temperature: "-229°C (average)"
    },
    funFacts: [
      "Pluto was reclassified from a planet to a dwarf planet in 2006.",
      "Pluto has a heart-shaped region on its surface named Tombaugh Regio.",
      "Some parts of Pluto's surface are reddish-brown due to tholins, complex organic compounds.",
      "Pluto and its largest moon, Charon, orbit each other like a double planet system.",
      "Pluto's orbit is more elliptical than the planets, sometimes bringing it closer to the Sun than Neptune."
    ],
    exploration: {
      overview: "Due to its small size and extreme distance from Earth, Pluto was difficult to study until recently. It has only been visited by one spacecraft.",
      missions: [
        {
          name: "New Horizons",
          year: "2015",
          description: "NASA's New Horizons spacecraft conducted a flyby of Pluto in July 2015, providing the first close-up images of the dwarf planet and revealing a surprisingly complex and active world with mountains, glaciers, and a heart-shaped plain."
        },
        {
          name: "Hubble Space Telescope",
          year: "1990-Present",
          description: "Before New Horizons, the Hubble Space Telescope provided the best images of Pluto, helping astronomers discover four of Pluto's five known moons."
        }
      ]
    }
  }
];