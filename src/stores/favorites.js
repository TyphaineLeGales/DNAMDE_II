import { create } from 'zustand'

const useFavorites = create((set) ({
favorites: [],
addFavorites: (film) => set((state) => ({favorites: state.favorites.push(film) })),
removeFavorite: (film) => set((state) => ({favorites: state. favorites.filter(f => f.title !== film.title) })),
}))
