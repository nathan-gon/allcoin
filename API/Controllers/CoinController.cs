using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Extensions;
using API.Pagination;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;
using API.Dtos;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class CoinController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        public CoinController()
        {
            _httpClient = new HttpClient();

        }


        [HttpGet("list")]
        public async Task<IActionResult> List([FromQuery] CoinParams coinParams)
        {
            var lists = await _httpClient.GetAsync("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false");

            var content = await lists.Content.ReadAsStringAsync();

            var json = JsonConvert.DeserializeObject<List<Coin>>(content);

            if (json == null) return NotFound();

            var query = json.AsQueryable().Sort(coinParams.Order).Search(coinParams.SearchTerm);


            var toReturn = PagedList<Coin>.Create(query, coinParams.PageNumber, coinParams.PageSize);

            Response.AddPaginationHeader(toReturn.MetaData);

            return Ok(toReturn);

        }



        [HttpGet("all")]
        public async Task<IActionResult> GetAllCoins()
        {
            var lists = await _httpClient.GetAsync("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false");

            var content = await lists.Content.ReadAsStringAsync();

            var json = JsonConvert.DeserializeObject<List<Coin>>(content);
            if (json == null) return NotFound();
            return Ok(json);

        }

        [HttpGet("trending")]
        public async Task<ActionResult<PagedList<Coin>>> GetTrending()
        {
            var lists = await _httpClient.GetAsync("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h");

            var content = await lists.Content.ReadAsStringAsync();

            var json = JsonConvert.DeserializeObject<List<Coin>>(content);

            if (json == null) return NotFound();

            return Ok(json);

        }

        [HttpGet("detail/{id}")]
        public async Task<ActionResult<PagedList<Coin>>> Detail(string id)
        {
            var lists = await _httpClient.GetAsync($"https://api.coingecko.com/api/v3/coins/{id}");

            var content = await lists.Content.ReadAsStringAsync();

            var json = JsonConvert.DeserializeObject<dynamic>(content);

            if (json == null) return NotFound(new ProblemDetails { Title = "no single coin" });

            var singCoin = new SingleCoinDto
            {
                Image = json.image.large,
                Name = json.name,
                Description = json.description.en,
                MarketCapRank = json.market_cap_rank,
                MarketDataCurrentPrice = json.market_data.current_price.usd,
                MarketDataMarketCap = json.market_data.market_cap.usd,
            };
            return Ok(singCoin);
        }

        [HttpGet("chart")]
        public async Task<IActionResult> GetChart(string id = "bitcoin", string days = "1")
        {

            var lists = await _httpClient.GetAsync($"https://api.coingecko.com/api/v3/coins/{id}/market_chart?vs_currency=usd&days={days}");

            var content = await lists.Content.ReadAsStringAsync();

            var json = JsonConvert.DeserializeObject<ChartDto>(content);


            if (json == null) return NotFound(new ProblemDetails { Title = "there is no chart data" });

            return Ok(json.Prices);

        }







    }
}