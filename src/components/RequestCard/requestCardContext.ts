import { TradeRequest } from "interfaces/pokemon";
import { createContext } from "react";

export interface IRequestCardContext {
    tradeRequest: TradeRequest,
}

export const RequestCardContext = createContext<IRequestCardContext>({
    tradeRequest: {
        id: 0,
        trade: {
            id: 0,
            collection: {
                id: 0,
                pokemon: {
                    id: 0,
                    name: "",
                    sprite: ""
                }
            },
            pokemonsWanted: []
        },
        collection: {
            id: 0,
            pokemon: {
                id: 0,
                name: "",
                sprite: ""
            }
        }
    }
})