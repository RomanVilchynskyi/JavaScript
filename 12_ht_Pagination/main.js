let currentPage = 1;

function loadMovies(page) {
    $.get(`https://www.omdbapi.com/?s=movies&apikey=9e3753ca&page=${page}`, 
        function (data) {
        if (data.Response === "True") {
            const movies = data.Search;
            const total = parseInt(data.totalResults);
            const totalPages = Math.ceil(total / 10);

            $('#movie-list').empty();
            $('#page-info').text(`Page ${page} of ${totalPages}`);

            movies.forEach(function (movie) {
                const poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/180x260?text=No+Image";
                const card = `
          <div class="movie-card">
            <img src="${poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <p>${movie.Type}</p>
          </div>
        `;
                $('#movie-list').append(card);
            });
        } else {
            $('#movie-list').html(`<p>${data.Error}</p>`);
            $('#page-info').text(`Page ${page}`);
        }
    });
}

$('#prev').click(function () {
    if (currentPage > 1) {
        currentPage--;
        loadMovies(currentPage);
    }
});

$('#next').click(function () {
    currentPage++;
    loadMovies(currentPage);
});

$(document).ready(function () {
    loadMovies(currentPage);
});
