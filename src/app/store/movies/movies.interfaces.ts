import { ICardData } from "src/app/modules/shared/interfaces/interfaces"
import { ECondition } from "./movies.enums"

export interface IState {
    movies: IMoviesValues
}

export interface IMoviesValues {
    [key:number]: {
        status: ECondition,
        card: ICardData
    }
}
