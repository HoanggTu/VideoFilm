document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const openIcon = document.getElementById("open-icon");
    const closeIcon = document.getElementById("close-icon");
    menuToggle.addEventListener("click", function (){
        mobileNav.classList.toggle("active");
        if(mobileNav.classList.contains("active")){
            openIcon.style.display ="none";
            closeIcon.style.display ="block";
        }else{
            openIcon.style.display ="block";
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
        title: "Paranormal Activity: The Marked Ones",
        image: "https://image.tmdb.org/t/p/w500/yz5klR3zBrUjS2rUuRJxKwTqWzX.jpg",
        genre: "Horror",
        duration: "1h 34min"
      },
      {
        title: "Venom",
        image: "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
        genre: "Action/Sci-fi",
        duration: "1h 52min"
      },
      {
        title: "The Nun",
        image: "https://image.tmdb.org/t/p/w500/xNxKtjrbK0UgHLlFfjAnG8G3Ffg.jpg",
        genre: "Horror",
        duration: "1h 36min"
      }
    ];

    const grid = document.getElementById("movieGrid");
    movies.forEach(movie => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-info">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-meta">${movie.genre} | ${movie.duration}</div>
        </div>
      `;
      grid.appendChild(card);
    });