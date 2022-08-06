using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;

namespace API.SignalR
{
    public class CoinHub : Hub
    {
        private readonly HttpClient _HttpClient;
        public CoinHub()
        {
            _HttpClient = new HttpClient();
        }

        public async Task SendCoinList()
        {
            var lists = await _HttpClient.GetAsync("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false");

            string content = await lists.Content.ReadAsStringAsync();

            await Clients.All.SendAsync("ReceiveList", content);


        }



    }
}