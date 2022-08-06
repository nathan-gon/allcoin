using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Extensions
{
    public static class CoinExtensions
    {
        public static IQueryable<Coin> Sort(this IQueryable<Coin> query, string orderBy)
        {
            if (string.IsNullOrEmpty(orderBy))
            {
                query = query.OrderBy(x => x.Market_cap_rank);
                return query;
            }

            query = orderBy switch
            {
                "24HighPer_lowToHigh" => query.OrderBy(x => x.Price_change_percentage_24h),
                "24HighPer_highToLow" => query.OrderByDescending(x => x.Price_change_percentage_24h),
                _ => query.OrderBy(x => x.Market_cap_rank)
            };


            return query;


        }

        public static IQueryable<Coin> Search(this IQueryable<Coin> query, string searchTerm)
        {

            if (string.IsNullOrEmpty(searchTerm)) return query;

            return query.Where(x => x.Name.ToLower().Contains(searchTerm.Trim().ToLower()));


        }


    }
}