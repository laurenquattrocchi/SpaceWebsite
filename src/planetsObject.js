const planets = {
    Earth: {
        caption: "Earth is the third planet from the Sun and the \
            fifth largest planet in the Solar System with the highest \
            density. It is currently the only known location where life \
            is present.",
        fun: "The Earth is so big that if it were hallowed, almost \
            50 moons could fit inside it.",
        dist: "1 AU or 147 million km / 91 million mi.",
        time: "365 days",
        temp: "The highest temperatures on Earth can reach up to more \
            than 110 degrees Fahrenheit / 48 degrees Celsius, and the \
            lowest around -126 degrees Fahrenheit / -88 degrees Celsius, \
            maybe even lower."
    },
    Jupiter: {
        caption: "Jupiter is the fifth planet from the Sun and the largest \
            planet of the Solar System. It is the oldest planet of the Solar \
            System thus it was the first to take shape out of the remains of \
            the solar nebula.",
        fun: "It is the biggest planet of the Solar System. It is also twice \
            as massive as all the other planets combined, having 318 times \
            the mass of Earth.",
        dist: "average distance of 5.2 AU (its closest approach is at 4.9 AU \
            and at its farthest 5.4 AU)",
        time: "12 Earth years",
        temp: "Data suggests that the temperature on Jupiter varies from -145 \
            degrees Celsius / -234 degrees Fahrenheit in the clouds too much \
            higher temperatures near the planet’s center. Some estimates \
            concluded that it would get even hotter than the surface of the Sun."
    },
    Mars:{
        caption: "Mars is the fourth planet from the Sun and the second-smallest \
            planet with a thin atmosphere, having the surface features reminiscent \
            of the impact craters of the Moon, and the valleys, deserts and \
            polar ice caps of Earth. It is the most widely searched planet for life.",
        fun: "Mars has the tallest volcano/mountain in the entire Solar System, \
            named Olympus Mons at a height of 13 miles / 21 kilometers and \
            also the biggest canyon, Valles Marines.",
        dist: "227.9 million km / 141.6 million mi or 1.5 AU",
        time: "once every 1.88 Earth years, or once every 686.93 Earth days",
        temp: "-80 degrees Fahrenheit / -60 degrees Celsius, in winter, near \
            the poles, temperatures can get down to -195 degrees F / -125 \
            degrees C."
    },
    Mercury:{
        caption: "Mercury is the closest planet to the Sun but, perhaps \
            surprisingly, it does not have the highest temperatures. It is \
            the second densest planet of the Solar System, but also the \
            smallest planet. The structure of Mercury makes it the most \
            similar planet to Earth.",
        fun: "One Mercury solar day or one full day-night cycle, equals 176 \
            Earth days—just over two years on Mercury. (Reminder, one year \
            on Mercury is 88 Earth days)",
        dist: "57.91 million kilometers / 35.98 miles or 0.4 AU away.",
        time: "every 88 days ",
        temp: "During the day, temperatures on the surface can reach up to \
            800 degrees Fahrenheit / 430 degrees Celsius, because the planet \
            has no atmosphere to retain that heat, nighttime temperatures on \
            the surface can drop to -290 degrees Fahrenheit / -180 degrees \
            Celsius - these changes in temperature are the most drastic in \
            the entire Solar System."
    },
    Neptune:{
        caption: "Neptune is the fourth largest and the farthest planet of \
            the Solar System with the most powerful wind speeds out of all \
            the planets. It is the smallest of the gas giants and is the \
            first planet to be discovered by mathematical predictions in 1846.",
        fun: "Neptune is the coldest of all planets in the solar system and fastest wind \
            speed of any planet ",
        dist: "average distance of 2.8 billion miles/4.5 billion kilometers\
            or 30 AU away from the Sun, being the furthest of the eight planets",
        time: "165 years.",
        temp: "average temperature of -214 degrees Celsius;-353 degrees Fahrenheit"
    },
    Saturn:{
        caption:"Saturn is the sixth planet from the Sun, with the largest \
            planetary rings in the Solar System. It is the second-largest \
            planet after Jupiter, and recently, with many other moons being \
            discovered, it surpassed the number of Jupiter’s moons and is \
            now considered the planet with the most numerous satellites.",
        fun: "Saturn now has 82 confirmed moons.The largest moon of Saturn \
            is named Titan. It’s the second biggest moon in the Solar System \
            after Jupiter’s moon Ganymede. Titan is even bigger than the \
            planet Mercury.",
        dist: "9.6 AU",
        time: "completing one trip around the Sun or a year, in about 29.5 \
            Earth years",
        temp: "temperature of Saturn’s upper atmosphere is on average about \
            -175C (-285F), quite cold for a gas giant, while below the clouds \
            it gets considerably hotter."
    },
    Uranus:{
        caption: "Uranus is the seventh planet discovered in the Solar \
            System that also led to the discovery of the last planet, \
            Neptune. They are both referred to as ice giants. Officially \
            recognized in 1781 after many observations in the past, it \
            is the third-largest planet of the Solar System",
        fun: "It also has the shortest day. One rotation on Uranus takes \
            about 17 hours.",
        dist: "average distance of 19.2 AU",
        time: "84 years to complete an orbit of the Sun, the longest \
            from all the planets in the solar system.",
        temp: "Uranus has the coldest planetary atmosphere in the solar \
            system, -224 degrees Celsius;-371 degrees Fahrenheit."
    },
    Venus:{
        caption: "Venus is the second planet from the Sun and the \
            sixth-largest. Together with Mercury, they are the only planets \
            without a satellite, even though Mercury is closer to the sun, \
            Venus is the hottest planet.",
        fun: "It is the only planet named after a female deity and it is the \
            brightest planet in the Solar System, Venus reflects 70% of \
            all the sunlight it receives which is why it shines so brightly.",
        dist: "second closest planet to the Sun, at a distance of 108.2 \
            million km/ 67.24 mi or 0.7 AU ",
        time: "225 days to complete one trip around the sun or in other \
            words one Venusian year is 225 Earth days",
        temp: "average of 465 degrees Celsius, 900 degrees Fahrenheit, \
            hot enough to melt lead."
    },
    Sun:{
        caption: "The Sun is the heart of our solar system and its gravity \
            is what keeps every planet and particle in orbit. This yellow \
            dwarf star is just one of billions like it across the Milky Way \
            galaxy.",
        fun: "Sun is by far the largest object in the solar system. It \
            contains more than 99.8% of the total mass of the Solar System",
        dist: " ",
        time: " ",
        temp: "Sun's core (approximately the inner 25% of its radius) are \
            temperature is 15.6 million Kelvin"
    },
    Moon:{
        caption: "The Moon, otherwise known as Luna, is the only natural \
            satellite of Earth. It was created 4.6 billion years ago, and \
            it is widely accepted that it was created when Earth collided \
            with a planet-sized object called Theia. It’s the fifth-largest \
            moon in our solar system and is the second brightest object in \
            the sky (after the Sun).",
        fun: "The Moon rotates synchronously, i.e. it is locked in phase with \
            its orbit so that the same side is always facing toward the Earth.",
        dist: "150 kilometres",
        time: "As the Moon completes each 27.3-day orbit around Earth, \
            both Earth and the Moon are moving around the Sun.",
        temp: "-233 to 123 °C"
    }
}

export function planet_info(planet) {
    var info = Object.values(planets[planet])
    console.log('info', info)
    return info;
  }