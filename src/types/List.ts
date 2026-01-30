import type { CardType } from "./Card";

export interface ListType {
    title: string,
    background_color: string,
    cards: CardType[],
    isArchived: boolean
}