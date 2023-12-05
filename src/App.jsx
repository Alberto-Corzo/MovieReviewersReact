import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import { AuthProvider } from './providers/AuthProvider';
import Home from './pages/Home';
import Review from './pages/Review';
import NavBar from './components/NavBar';

const movies = [
  {
    title: "Inception",
    image: "https://i.blogs.es/89d7af/inception-poster/450_1000.jpg",
    genre: "Sci-Fi",
    synopsis: "Inception es una película de ciencia ficción que explora el mundo de los sueños y la realidad.",
    largeSynopsis: "Inception, dirigida por Christopher Nolan, es un thriller psicológico que sumerge a los espectadores en un laberinto de sueños dentro de sueños. La trama sigue a Dom Cobb, un ladrón de ideas, mientras lidera un equipo para implantar o robar secretos a través de la tecnología de la invasión de los sueños. Con impresionantes efectos visuales y giros inesperados, Inception desafía la percepción de la realidad y ofrece una experiencia cinematográfica única."
  },
  {
    title: "The Shawshank Redemption",
    image: "https://image.tmdb.org/t/p/original/xSnM4ahmz692msbMTBsfBWHvR3M.jpg",
    genre: "Drama",
    synopsis: "The Shawshank Redemption sigue la historia de un hombre encarcelado que encuentra esperanza en circunstancias desesperadas.",
    largeSynopsis: "The Shawshank Redemption, basada en la novela de Stephen King, es un drama carcelario que narra la increíble historia de Andy Dufresne. Condenado por un crimen que no cometió, Andy encuentra amistad y redención en Shawshank, desafiando las adversidades. La película, dirigida por Frank Darabont, es aclamada por su emotiva narrativa y actuaciones memorables."
  },
  // Repite el patrón para las demás películas
  {
    title: "The Dark Knight",
    image: "https://i.pinimg.com/originals/d1/67/9e/d1679e77c03855afcc018a952941d5b5.jpg",
    genre: "Action",
    synopsis: "The Dark Knight es una película de superhéroes que presenta al icónico personaje de Batman luchando contra el crimen en Gotham City.",
    largeSynopsis: "The Dark Knight, dirigida por Christopher Nolan, es el segundo capítulo de la trilogía de Batman. Con Heath Ledger como el Joker, la película sigue a Batman mientras enfrenta la anarquía desatada por el villano. Con escenas de acción épicas y una trama intensa, The Dark Knight se destaca como una de las mejores películas de superhéroes."
  },
  {
    title: "Pulp Fiction",
    image: "https://image.tmdb.org/t/p/original/gSnbhR0vftfJ2U6KpGmR7WzZlVo.jpg",
    genre: "Crime",
    synopsis: "Pulp Fiction es una película de crimen que entrelaza varias historias en Los Ángeles.",
    largeSynopsis: "Pulp Fiction, dirigida por Quentin Tarantino, es una obra maestra del cine contemporáneo. Con su estructura no lineal, la película presenta historias entrelazadas de criminales, boxeadores y gánsteres en Los Ángeles. Con diálogos ingeniosos y escenas memorables, Pulp Fiction se ha convertido en un clásico del cine moderno."
  },
  {
    title: "Forrest Gump",
    image: "https://image.tmdb.org/t/p/w440_and_h660_face/azV6hV99lYkdhydsQbJCI6FqMl4.jpg",
    genre: "Drama",
    synopsis: "Forrest Gump sigue la vida de un hombre con habilidades excepcionales mientras vive a través de eventos históricos.",
    largeSynopsis: "Forrest Gump, dirigida por Robert Zemeckis, es un viaje épico a través de la vida de Forrest, un hombre con discapacidad intelectual. Desde su infancia hasta su vida adulta, Forrest se encuentra en el centro de eventos históricos clave. Con Tom Hanks en el papel principal, la película es conmovedora y llena de lecciones de vida inolvidables."
  },
  {
    title: "The Matrix",
    image: "https://image.tmdb.org/t/p/original/pEoqbqtLc4CcwDUDqxmEDSWpWTZ.jpg",
    genre: "Sci-Fi",
    synopsis: "The Matrix es una película de ciencia ficción que explora la realidad simulada y la rebelión contra las máquinas.",
    largeSynopsis: "The Matrix, dirigida por los hermanos Wachowski, es un hito en el género de ciencia ficción. La película sigue a Neo, interpretado por Keanu Reeves, mientras descubre la verdad detrás de la realidad aparente. Con efectos visuales revolucionarios y una trama envolvente, The Matrix ha dejado una marca duradera en la cultura cinematográfica."
  },
  {
    title: "Titanic",
    image: "https://image.tmdb.org/t/p/original/vpsvHLkoeKUjceIMeNSqCp3xEyY.jpg",
    genre: "Romance",
    synopsis: "Titanic narra la trágica historia de amor entre dos pasajeros a bordo del famoso barco.",
    largeSynopsis: "Titanic, dirigida por James Cameron, es un épico romántico que se desarrolla durante el trágico hundimiento del RMS Titanic. La película sigue la historia de amor entre Jack, interpretado por Leonardo DiCaprio, y Rose, interpretada por Kate Winslet. Con impresionantes escenas visuales y una emotiva banda sonora, Titanic se ha convertido en un clásico del cine romántico."
  },
  {
    title: "Avatar",
    image: "https://image.tmdb.org/t/p/original/yqayiDD4OFQkpDzny6NEDD1I3up.jpg",
    genre: "Sci-Fi",
    synopsis: "Avatar es una película de ciencia ficción que se desarrolla en un planeta alienígena y aborda temas de colonización y ecología.",
    largeSynopsis: "Avatar, dirigida por James Cameron, transporta a los espectadores al mundo de Pandora, donde los humanos buscan recursos mientras chocan con la cultura nativa. La película destaca por sus impresionantes efectos visuales y su mensaje ambiental. Avatar se convirtió en la película más taquillera de todos los tiempos, marcando un hito en la historia del cine."
  },
  {
    title: "The Godfather",
    image: "https://image.tmdb.org/t/p/original/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
    genre: "Crime",
    synopsis: "The Godfather es una película de crimen que sigue la vida de la familia mafiosa Corleone en Nueva York.",
    largeSynopsis: "The Godfather, dirigida por Francis Ford Coppola, es una obra maestra del cine de crimen. La película sigue la historia de la familia Corleone y su líder, Don Vito Corleone, interpretado por Marlon Brando. Con una narrativa intensa y actuaciones magistrales, The Godfather es considerada una de las mejores películas de la historia del cine."
  },
];


function App() {
  return (
    <Router>
      <AuthProvider>

        <NavBar />
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/home" 
          element={
            <ProtectedRoute>
              <Home movies={movies} />
            </ProtectedRoute>
          } />

          <Route path="/review/:movieTitle" 
                element={
                  <ProtectedRoute>
                    <Review movies={movies} />
                </ProtectedRoute>
                } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;