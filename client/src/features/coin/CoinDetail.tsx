import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios"
import DOMPurify from "dompurify";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { SingleCoin } from "../../app/model/coin"
import CoinChart from "./CoinChart";


export default function CoinDetail() {
    const { id } = useParams<{ id: string }>();
    const [coin, setCoin] = useState<SingleCoin | null>(null)
    const [loadig, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://localhost:7148/api/Coin/detail/${id}`)
            .then(res => setCoin(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id])

    if (loadig) return <h1> Loading ..... </h1>

    const script = `<div>hello</div>`

    return (

        <Grid container height='100vh'
            direction='column'
            justifyContent='center'
            alignItems='center'>
            <Grid item sm={2}>
                <img
                    style={{ borderRadius: '10px' }}
                    src={coin?.image} alt={coin?.name} />
            </Grid>
            <Grid item sm={1}>
                {coin?.name}
            </Grid>
            <Grid item sm={1}>
                <Typography>
                    Rank: {coin?.marketCapRank}
                </Typography>

            </Grid>
            <Grid item sm={2}>
                <CoinChart />
            </Grid>
        </Grid>

    )

}