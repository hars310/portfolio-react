

const frontendProjectsData = [
  {
    id: 1,
    title: "Ochi Design",
    description: "React,TailwindCSS,Framer Motion",
    imageUrl: "https://imgs.search.brave.com/s7_ZjU_-LvbXBlCioHT4JysVxIdOTZ2s9RwmB2DarSQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYXd3d2FyZHMu/Y29tL2F3YXJkcy9n/YWxsZXJ5LzIwMjIv/MDkvb2NoaS1pbnRl/cmlvci1pbWFnZTAz/LmpwZw",
    link: 'https://ochiclone.netlify.app/',
    code: "https://github.com/hars310/ochi-frontend"

  },

  {
    id: 2,
    title: "Clone gpt3",
    description: "React, Tailwind CSS",
    imageUrl: "https://imgs.search.brave.com/ECsuOZfAb9NM-QgFOKlMs9NA1D1j1LJupf0Lib6ULHg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMCplVGRzUGVZ/T1M3NVNud1hv",
    link: "https://clone-gpt3.netlify.app/",
    code: "https://clone-gpt3.netlify.app"
  },
  {
    id: 3,
    title: "NewsApp",
    description: "React,Tailwind CSS, NewsAPI",
    imageUrl: "https://imgs.search.brave.com/XN1A1CIOIeusU1uZR77tPw8EOxE5VVJm71zTAQwzypc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90ZWNo/cHJlc2lkZW50LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNC9uZXdzLWFw/cHMtaGVhZGVyLTEy/MDB4NjMwLWMtYXIx/LjkxLmpwZw",
    link: "https://github.com/hars310/newsApp_react",
    code: "https://github.com/hars310/newsApp_react",
  },
  {
    id: 4,
    title: "AI Image Generator",
    description: "HTML,CSS,JS, OpenAI API",
    imageUrl: "https://imgs.search.brave.com/TIW99wD8BiXPkW7tBuFTPhJJFTY4xp0Zqi3TThyRXeo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvM0Qtcm9ib3Qt/Z2lybC1nZW5lcmF0/ZWQtYnktRm90b3It/YWktZ2VuZXJhdG9y/LmpwZw",
    link: "https://github.com/hars310/ai-image-generator",
    code: "https://github.com/hars310/ai-image-generator"

  },



  // Add more projects here as needed
];

const fullStackProjectsData = [
  {
    id: 1,
    title: "Chat App",
    description: "React, Tailwind CSS, NodeJS, Express, MongoDB, Socket IO",
    imageUrl: "https://imgs.search.brave.com/X9oFxrfYz7HfMFFenYYBN60FLrv1hBVLnJQcaDrMs_8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZW5k/YmlyZC5zZm8zLmRp/Z2l0YWxvY2VhbnNw/YWNlcy5jb20vY21z/L1R1dG9yaWFsLWlt/YWdlLWVzc2VudGlh/bC1jaGF0LWFwcC1m/ZWF0dXJlcy10by1i/dWlsZC5qcGc",
    link: "https://baat-cheet-424l.onrender.com/",
    code: "https://github.com/hars310/Chat-app"
  },
  {
    id: 2,
    title: "Pinterest Clone",
    description: "Tailwind CSS, EJS, Express, NodeJS, MongoDB",
    imageUrl: "https://imgs.search.brave.com/a83NkaqqDTj3tcAegECcA0_yJbGN7l351PRdOQhRHRo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzLzQxOF9w/aW50ZXJlc3QuanBn",
    link: "https://github.com/hars310/pinterest-clone",
    code: "https://github.com/hars310/pinterest-clone"
  },


  {
    id: 3,
    title: "News App",
    description: "React, Tailwind CSS, NodeJS, Express",
    imageUrl: "https://imgs.search.brave.com/bpXoyyPV77Ob7Pi-Jyf5N6hKCXyYwGWLYY0MfMh9-vY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/MzM2MjYzOC9waG90/by9vbmxpbmUtc2hv/cHBpbmctY29uY2Vw/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9bVhBRXN2NVpI/VWZsNzMyTFZZRi1S/RTRYbTBZT2pWTHAw/cmlVbVpWdGJ2ND0",
    link: "https://newsapp-4f8o.onrender.com/",
    code: "https://github.com/hars310/NEWSAPP_WITH_BACKEND"
  },
  // {
  //   id: 4,
  //   title: "Zoom Clone",
  //   description: "React, Tailwind CSS, NodeJS, Express, MongoDB",
  //   imageUrl: "https://imgs.search.brave.com/yY6dVAvpWFp-UbyMdPH3rq2fAonEO4j4Ma-MOo_v77M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDIvWm9vbS1TeW1i/b2wtNzAweDM5NC5q/cGc",
  //   link: "",
  //   code: ""
  // },
  // {
  //   id: 5,
  //   title: "Youtube Clone",
  //   description: "React, Tailwind CSS, NodeJS, Express, MongoDB",
  //   imageUrl: "https://imgs.search.brave.com/PhL0gJPOLEArCK_uTAE0hJsS424Pd-hCzuXIH_Aw1-E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzM0LzMxLzk2/LzM2MF9GXzYzNDMx/OTYzMF90eHRnbVBM/RUVROG80emF4ZWMy/V0tyTFdVQnFkQkJR/bi5qcGc",
  //   link: "",
  //   code: ""
  // }, {
  //   id: 6,
  //   title: "Spotify Clone",
  //   description: "React, Tailwind CSS, NodeJS, Express, MongoDB",
  //   imageUrl: "https://imgs.search.brave.com/u-U_RzDFRGpZTgA7WgvCriJVbEgAmqbG5BTMvXDBoCk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIz/Njk3NDQ5OS9waG90/by9pbi10aGlzLXBo/b3RvLWlsbHVzdHJh/dGlvbi10aGUtc3Bv/dGlmeS1sb2dvLXNl/ZW4tZGlzcGxheWVk/LW9uLWEtbGFwdG9w/LXNjcmVlbi1iZWhp/bmQtYS1wYWlyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1G/c2Ita1N1OHE5b0Jp/TnVka0MxWDZ2b0Nr/THIyZmt3WUE1Vktz/b2R2dXVRPQ",
  //   link: "https://spotify-harsh.netlify.app/",
  //   code: "https://github.com/hars310/spotify-clone"
  // }
];
const basicProjects = [
  {
    id: 1,
    title: "Calculator",
    description: "HTML, CSS, JS",
    imageUrl: `https://imgs.search.brave.com/SG68dOv67I5a-bCH2Io6jwlN7zEOg7kwRzcFihSsxsQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/OTk3MjUwMi9waG90/by9jYWxjdWxhdG9y/LWJ1dHRvbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9N2RI/d1huMkFTc1RySkky/WTlhYmhfVnVXcFZi/ZXdIMVJBNFVJUXg5/elo3bz0`,
    link: "https://harshkrcalculator.netlify.app/",
    code: "https://github.com/hars310/Calculator-using-js"
  },
  {
    id: 2,
    title: "Sopey Ecommerce",
    description: "HTML, CSS, JS",
    imageUrl: 'https://sopey.netlify.app/img/hero.jpg',
    link: "https://sopey.netlify.app",
    code: "https://github.com/hars310/Sopey-Ecommerce_Website"
  },
  {
    id: 3,
    title: "To  Do List App",
    description: "HTML, CSS, JS",
    imageUrl: `https://imgs.search.brave.com/NkwJ1YuVnPxzkUoTFNLNNLH9vu3XM8kpuPd-GBglRxQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXZl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wNi90by1k/by1saXN0LmpwZw`,
    link: "https://webappnotes.netlify.app/",
    code: "https://github.com/hars310/NotesApp"
  },
  {
    id: 4,
    title: "Weather App",
    description: "HTML, CSS, JS",
    imageUrl: `https://imgs.search.brave.com/P1fTfgK24my3T8wjrjfPahWaLoqOoezpx_c5d9ZvJ-g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU3/OTQyNDYzL3Bob3Rv/L3dlYXRoZXItYXBw/LWljb24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXQ3bkpm/T3V1RExDaFhxT2Z6/THczZkxjTDZxLVZa/X0Vmc0pjaWNxclN3/SGM9`,
    link: "https://harsh-weather-project.netlify.app/",
    code: "https://github.com/hars310/weather-app"
  },
  {
    id: 5,
    title: "Password Generator",
    description: "HTML, CSS, JS",
    imageUrl: `https://imgs.search.brave.com/Ebl6Pfon2XdVRV4GYRhF1uoio9DMQDtsf2m2FMFsALE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xcGFz/c3dvcmQuY29tL2lt/Zy9yZWRlc2lnbi9w/YXNzd29yZC1nZW5l/cmF0b3IvbGFwdG9w/Ljg0ZTIzMjk0Yjk5/MTJkMDEwYTM5YjAy/MzIxMTE5Yjk4LnN2/Zw.svg`,
    link: 'https://harshkr-password.netlify.app/',
    code: "https://github.com/hars310/PasswordGenerator"
  },
  {
    id: 6,
    title: "Tic Tac Toe Game",
    description: "HTML, CSS, JS",
    imageUrl: `https://imgs.search.brave.com/81ws-487ck7QPcU8fFsKAyNlJVSFVEhumUY1goOlecA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/MjA5NDgzMC9waG90/by90aWMtdGFjLXRv/ZS1nYW1lLTNkLXJl/bmRlcmluZy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9OU9z/bnZTTWhmWVVIUFBz/Y3diQklXN2NkUWdp/dmc3UWl5d0JvenRa/YW5hST0`,
    link: "https://harshkrtictactoe.netlify.app/",
    code: "https://github.com/hars310/Tic-tac-toe-game"
  }


];
export { frontendProjectsData, fullStackProjectsData, basicProjects };


