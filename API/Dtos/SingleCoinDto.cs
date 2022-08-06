using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace API.Dtos
{
    public class SingleCoinDto
    {
        [JsonProperty("image.large")]
        public string Image { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("description.en")]
        public string Description { get; set; }
        [JsonProperty("market_cap_rank")]
        public int MarketCapRank { get; set; }
        [JsonProperty("market_data.current_price.usd")]
        public decimal MarketDataCurrentPrice { get; set; }
        [JsonProperty("market_data.market_cap.usd")]
        public decimal MarketDataMarketCap { get; set; }









    }
}



