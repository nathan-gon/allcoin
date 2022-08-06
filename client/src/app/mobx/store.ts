
import { createContext, useContext } from "react";
import CoinStore from "./coinStore";



interface Store {
    coinStore: CoinStore;
}

export const store: Store = {
    coinStore: new CoinStore()

}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}