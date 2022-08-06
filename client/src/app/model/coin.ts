export interface Coin {
    id: string
    symbol: string
    name: string
    image: string
    current_price: number
    market_cap: number
    market_cap_rank: number
    fully_diluted_valuation: number
    total_volume: number
    high_24h: number
    low_24h: number
    price_change_24h: number
    price_change_percentage_24h: number
    market_cap_change_24h: number
    market_cap_change_percentage_24h: number
    circulating_supply: number
    total_supply: number
    max_supply: number
    ath: number
    ath_change_percentage: number
    ath_date: Date
    atl: number
    atl_change_percentage: number
    atl_date: string
    roi: Date
    last_updated: string
}



export class CoinPaigingParams {
    pageNumber: number;
    pageSize: number;

    constructor(pageNumber = 1, pageSize = 10) {

        this.pageNumber = pageNumber;
        this.pageSize = pageSize;

    }

}


export interface SingleCoin {
    image: string
    name: string
    description: string
    marketCapRank: number
    marketDataCurrentPrice: number
    marketDataMarketCap: number
}