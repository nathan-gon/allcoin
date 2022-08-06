import { makeAutoObservable, runInAction } from "mobx";
import httpClient from "../api/httpClient";
import { Coin, CoinPaigingParams } from "../model/coin";
import { MetaData } from "../model/pagination";



export default class CoinStore {
    coins: Coin[] = [];
    trending: Coin[] = [];
    metaData: MetaData | null = null;
    coinPaigingParams = new CoinPaigingParams();
    predicate = '';
    searchTerm = ''

    constructor() {
        makeAutoObservable(this)
    }

    setCoinPagingParams = (coinPaigingParams: CoinPaigingParams) => {
        this.coinPaigingParams = coinPaigingParams;
    }

    setPredicate = (predicate: string) => {
        this.predicate = predicate;
    }
    setSearchTerm = (searchTerm: string) => {
        this.searchTerm = searchTerm;
    }

    setMetaData = (metaData: MetaData) => {
        this.metaData = metaData;
    }

    get getparams() {
        const params = new URLSearchParams();
        params.append('pageNumber', this.coinPaigingParams.pageNumber.toString())
        params.append('pageSize', this.coinPaigingParams.pageSize.toString())
        if (this.predicate.length > 0)
            params.append('order', this.predicate)

        if (this.searchTerm.length > 0)
            params.append('searchTerm', this.searchTerm)


        return params;
    }


    getCoins = async () => {
        try {
            const coins = await httpClient.Coins.List(this.getparams);
            runInAction(() => {
                const { items, metaData } = coins
                this.coins = items;
                this.setMetaData(metaData)
                console.log(this.predicate);

            })

        } catch (error) {
            console.log(error)
        }
    }

    getTrendingCoins = async () => {
        try {
            var coins = await httpClient.Coins.trending();
            runInAction(() => {
                this.trending = coins;
                console.log(coins)
            })
        } catch (error) {
            console.log(error)
        }
    }



}   