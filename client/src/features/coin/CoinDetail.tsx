import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../../app/component/LoadingComponent';
import { round } from '../../app/helper/helper';
import { useStore } from '../../app/mobx/store';
import { ChartParmas, SingleCoin } from '../../app/model/coin';
import CoinChart from './CoinChart';

export default observer(() => {
  const { coinStore } = useStore();
  const { id } = useParams<{ id: string }>();
  const [coin, setCoin] = useState<SingleCoin | null>(null);
  const [loadig, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://localhost:7148/api/Coin/detail/${id}`)
      .then(res => {
        setCoin(res.data);
        coinStore.setChartParmas(new ChartParmas(id));
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loadig) return <LoadingComponent message="Loading Chart..." />;

  return (
    coin
        && (
        <Grid
          container
          sx={{ backgroundColor: 'ButtonShadow' }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item sm={3}>
            <Grid
              container
              height="100vh"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sm={2}>
                <img
                  style={{ borderRadius: '10px' }}
                  src={coin?.image}
                  alt={coin?.name}
                />
              </Grid>
              <Grid item sm={1} />
              <Grid item sm={1}>
                <Typography sx={{ fontWeight: '700' }}>
                  {coin?.name}
                </Typography>

              </Grid>
              <Grid item sm={1}>
                <Typography>
                  Rank:
                  {' '}
                  {coin?.marketCapRank}
                </Typography>

              </Grid>
              <Grid item sm={1}>
                <Typography>
                  Current Price:
                  {' '}
                  {round(coin!.marketDataCurrentPrice)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={8}>
            <CoinChart id={id} />
          </Grid>
          <Grid item sm={1} />
        </Grid>
        )
  );
});
