using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace API.Entities
{
    public class Coin
    {

        [JsonProperty("id")]
        public string Id { get; set; }
        [JsonProperty("symbol")]
        public string Symbol { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("image")]
        public string Image { get; set; }
        [JsonProperty("current_price")]
        public decimal Current_price { get; set; }
        [JsonProperty("market_cap", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Market_cap { get; set; }
        [JsonProperty("market_cap_rank", NullValueHandling = NullValueHandling.Ignore)]
        public int Market_cap_rank { get; set; }
        [JsonProperty("fully_diluted_valuation", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Fully_diluted_valuation { get; set; }
        [JsonProperty("total_volume", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Total_volume { get; set; }
        [JsonProperty("high_24h", NullValueHandling = NullValueHandling.Ignore)]
        public decimal High_24h { get; set; }
        [JsonProperty("low_24h", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Low_24h { get; set; }
        [JsonProperty("price_change_24h", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Price_change_24h { get; set; }
        [JsonProperty("price_change_percentage_24h", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Price_change_percentage_24h { get; set; }
        [JsonProperty("market_cap_change_24h", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Market_cap_change_24h { get; set; }
        [JsonProperty("market_cap_change_percentage_24h", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Market_cap_change_percentage_24h { get; set; }
        [JsonProperty("circulating_supply", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Circulating_supply { get; set; }
        [JsonProperty("total_supply", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Total_supply { get; set; }
        [JsonProperty("max_supply", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Max_supply { get; set; }
        [JsonProperty("ath", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Ath { get; set; }
        [JsonProperty("ath_change_percentage", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Ath_change_percentage { get; set; }
        [JsonProperty("ath_date")]
        public DateTime Ath_date { get; set; }
        [JsonProperty("atl", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Atl { get; set; }
        [JsonProperty("atl_change_percentage", NullValueHandling = NullValueHandling.Ignore)]
        public decimal Atl_change_percentage { get; set; }
        [JsonProperty("atl_date")]
        public DateTime Atl_date { get; set; }
        [JsonProperty("roi")]
        public object Roi { get; set; }
        [JsonProperty("last_updated")]
        public DateTime Last_updated { get; set; }

    }
}