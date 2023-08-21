export function movieReducer(state, action) {
  switch (action.type) {
    case "like":
      const newData = state.movies.map((movie) => {
        if (action.id === movie.id) {
          return {
            ...movie,
            isLike: !movie.isLike,
          };
        } else {
          return {
            ...movie,
          };
        }
      });
      return {
        ...state,
        movies: newData,
      };
    default:
      return state;
  }
}
export const initialReducer = {
  movies: [
    { title: "Movie 1", id: 1, genre: ["Action", "Drama"], isLike: true },
    { title: "Movie 2", id: 2, genre: ["Crime", "Action"], isLike: true },
    { title: "Movie 3", id: 3, genre: ["Drama"], isLike: false },
    { title: "Movie 4", id: 4, genre: ["Comedi"], isLike: false },
    { title: "Movie 5", id: 5, genre: ["Action", "Comedi"], isLike: false },
    { title: "Movie 6", id: 6, genre: ["Crime", "Comedi"], isLike: false },
    { title: "Movie 7", id: 7, genre: ["History"], isLike: false },
    { title: "Movie 8", id: 8, genre: ["comedi", "Drama"], isLike: false },
    { title: "Movie 9", id: 9, genre: ["History"], isLike: false },
  ],
};
// movie.id === action.id
//   ? {
//       ...movie,
//       isLike: !isLike,
//     }
//   : { ...movie };
