document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const openIcon = document.getElementById("open-icon");
    const openIcon2 = document.getElementById("open-icon2");
    const closeIcon = document.getElementById("close-icon");
    menuToggle.addEventListener("click", function (){
        mobileNav.classList.toggle("active");
        if(mobileNav.classList.contains("active")){
            openIcon.style.display ="none";
            openIcon2.style.display ="none";
            closeIcon.style.display ="block";
        }else{
            openIcon.style.display ="block";
            openIcon2.style.display ="block";
            closeIcon.style.display ="none";
        }
    });
// });
// document.addEventListener("DOMContentLoaded", function(){
    let scrollButton = document.querySelector("#scroll-button");
    scrollButton.addEventListener("click", function (event){
        event.preventDefault();    
        window.scrollTo({
          top:0,
          behavior:"smooth",
        });
    });
});
const movies = [
{
  title: "Attack on Titan",
  image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
  genre: "Action / Drama",
  duration: "25min/ep"
},
{
  title: "Jujutsu Kaisen",
  image: "https://cdn.myanimelist.net/images/anime/1801/110774.jpg",
  genre: "Supernatural / Battle",
  duration: "24min/ep"
},
{
  title: "Your Name",
  image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
  genre: "Romance / Drama",
  duration: "1h 46min"
},


  // Games
{
  title: "Hades",
  image: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
  genre: "Action / Roguelike",
  duration: "15-30min runs"
},
{
  title: "Hollow Knight",
  image: "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
  genre: "Adventure / Metroidvania",
  duration: "20-30 hrs"
},
{
  title: "Stardew Valley",
  image: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
  genre: "Farming / Life Sim",
  duration: "Endless"
},

  {
    title: "Terraria",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg",
    genre: "Adventure / Sandbox",
    duration: "Endless"
  },
  {
    title: "R.E.P.O",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2636710/header.jpg",
    genre: "Action / Roguelike",
    duration: "Quick Missions"
  },
  {
    title: "Liars.Bar",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2599460/header.jpg",
    genre: "Mystery / Puzzle",
    duration: "2-3 hrs"
  },
  {
  title: "Paincore",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2480720/header.jpg",
  genre: "Hardcore Shooter / Roguelike",
  duration: "Fast-paced runs"
},
{
  title: "Celeste",
  image: "https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg",
  genre: "Platformer / Story-rich",
  duration: "6-10 hrs"
},
{
  title: "Dead Cells",
  image: "https://cdn.akamai.steamstatic.com/steam/apps/588650/header.jpg",
  genre: "Roguelike / Action",
  duration: "30-50 hrs"
},
{
  title: "Don't Starve",
  image: "https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg",
  genre: "Survival / Indie",
  duration: "Endless"
},
{
  title: "Inside",
  image: "https://cdn.akamai.steamstatic.com/steam/apps/304430/header.jpg",
  genre: "Puzzle / Atmospheric",
  duration: "3-4 hrs"
},
{
  title: "Cyberpunk 2077",
  image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
  genre: "RPG / Open World",
  duration: "40-100 hrs"
}

];

const grid = document.getElementById("movieGrid");
  movies.forEach(movie => {
    const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" class="img_src">
        <div class="movie-info">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-meta">${movie.genre} | ${movie.duration}</div>
        </div>
      `;
  grid.appendChild(card);
});