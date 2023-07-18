import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to Our Movie Theatre</h1>
        <nav>
          <ul>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#showtimes">Showtimes</a></li>
            <li><a href="#tickets">Tickets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="movies">
          <h2>Movies</h2>
          {/* Add movie information and images here */}
        </section>

        <section id="showtimes">
          <h2>Showtimes</h2>
          {/* Add showtime information here */}
        </section>

        <section id="tickets">
          <h2>Tickets</h2>
          {/* Add ticket purchasing form here */}
        </section>

        <section id="contact">
          <h2>Contact</h2>
          {/* Add contact information and form here */}
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Your Movie Theatre. All rights reserved.</p>
      </footer>
    </div>
  );

}

export default MovieTheatreWebsite;
