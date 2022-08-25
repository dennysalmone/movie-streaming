import { EVideoType } from "../enums/enum"

export interface IUserLogin {
    email: string,
    password: string
}

export interface IUserRegister {
    email: string,
    password: string,
    userName: string
}

export interface ITokenUser {
    token: string
    user: any
} 

export interface IMovie {
    poster_path: string,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,

    original_language: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
    media_type: string,
    title: string,
}

export interface ISeries {
    backdrop_path: string,
    first_air_date: string,
    genre_ids: number[],
    id: number,
    name: string,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number,
}

export interface ICardData {
    id: number
    poster_path: string,
    vote_average: number,
    name: string,
    videoType: EVideoType
}

export interface IMoviesResponce {
    results: IMovie[],
}

export interface ISeriesResponce {
    results: ISeries[],
}

export interface IGeneralResponce {
    results: (ISeries|IMovie)[],
}

export interface IDetailedSeries {
    adult: boolean,
    backdrop_path: string,
    created_by: any[],
    episode_run_time: number[],
    first_air_date: string,
    genres: {
        id: number,
        name: string,
    }[]
    length: number,
    homepage: string,
    id: number,
    in_production: boolean,
    languages: string[],
    last_air_date: string,
    last_episode_to_air: any,
    name: string,
    networks: any[],
    next_episode_to_air: null,
    number_of_episodes: 34,
    number_of_seasons: 4,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: any[],
    production_countries: any[],
    seasons: any[],
    spoken_languages: any[],
    status: string,
    tagline: string,
    type: string,
    vote_average: number,
    vote_count: number,
}

export interface IDetailedMovie {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: {
        id: number, 
        name: string, 
        poster_path: string, 
        backdrop_path: string
    }
    budget: number,
    genres: any[],
    homepage: string, 
    id: number,
    imdb_id: string, 
    original_language: string, 
    original_title: string, 
    overview: string, 
    popularity: number,
    poster_path: string, 
    production_companies: any[],
    production_countries: any[],
    release_date: string, 
    revenue: number,
    runtime: number,
    spoken_languages: any[],
    status: string, 
    tagline: string, 
    title: string, 
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export interface IIcons {
    name: string,
    file: string
}



