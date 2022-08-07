using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace API.Dtos
{
    public class ChartDto
    {
        [JsonProperty("prices")]
        public List<List<decimal>> Prices { get; set; }


    }
}