export interface IAnimeCard {
    id?: string
    title: {
        english: string
        romaji: string
    }
    coverImage: {
        large: string
    }
    description: string
}