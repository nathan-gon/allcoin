using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Pagination
{
    public class CoinParams : PaginationParams
    {
        // valid values: market_cap_desc, gecko_desc, gecko_asc
        //, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc
        public string Order { get; set; } = string.Empty;
        public string SearchTerm { get; set; } = string.Empty;


    }
}