function Favorites() {
    const favorites = useFavorites ((state) => state.favorites)
    return <div> <FilmList films={favorites}/></div>
    }

    export default Favorites