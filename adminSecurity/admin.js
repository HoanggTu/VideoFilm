document.addEventListener("DOMContentLoaded", initAdmin);
// start
function initAdmin(){
    loadMovies();
    document.getElementById("movieForm").addEventListener("submit", saveMovie)
}
// read and save
function getMovies() {
  return JSON.parse(
    localStorage.getItem("movies") || "[]"
  );
}
function saveMovies(arr) {
  localStorage.setItem("movies", JSON.stringify(arr));
}
// movie interfaces
function loadMovies() {
  const movies = getMovies();
  const tbody  = document.querySelector("#movieTable tbody");
  tbody.innerHTML = "";     // xóa hết dòng cũ
  movies.forEach((m, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i+1}</td>
      <td>${m.title}</td>
      <td><img src="${m.image}" style="height:50px"></td>
      <td>${m.genre}</td>
      <td>${m.duration}</td>
      <td>
        <button onclick="editMovie(${i})">Sửa</button>
        <button onclick="deleteMovie(${i})">Xóa</button>
      </td>`;
    tbody.appendChild(tr);
  });
}
// add new movie plapla
function saveMovie(e) {
  e.preventDefault();  // chặn form submit mặc định
  const idx = document.getElementById("editIndex").value;
  const movie = {
    title:    document.getElementById("title").value,
    image:    document.getElementById("image").value,
    genre:    document.getElementById("genre").value,
    duration: document.getElementById("duration").value
  };
  const movies = getMovies();
  if (idx === "") {
    movies.push(movie);       // thêm mới
  } else {
    movies[+idx] = movie;     // ghi đè phần tử tại vị trí idx
  }
  saveMovies(movies);         // lưu mảng mới lên localStorage
  resetForm();                
  loadMovies();               // render lại bảng
}
// trans inf
function editMovie(i) {
  const m = getMovies()[i];
  document.getElementById("editIndex").value = i;
  document.getElementById("title").value     = m.title;
  document.getElementById("image").value     = m.image;
  document.getElementById("genre").value     = m.genre;
  document.getElementById("duration").value  = m.duration;
}
// delete movie
function deleteMovie(i) {
  if (!confirm("Xác nhận xóa phim này?")) return;
  const movies = getMovies();
  movies.splice(i, 1);   // loại bỏ phần tử thứ i
  saveMovies(movies);
  loadMovies();
}
// return login
function resetForm() {
  document.getElementById("movieForm").reset();
  document.getElementById("editIndex").value = "";
}

// function logout() {
//   localStorage.removeItem("isLoggedIn");
//   window.location.href = "index.html";
// }
import { animate } from 'animejs';

animate('span', {
  // Property keyframes
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: (_, i) => i * 50, // Function based value
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true
});

