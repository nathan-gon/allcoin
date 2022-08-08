import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import AliceCarousel from 'react-alice-carousel';
import { Box } from '@mui/system';
import { useHistory } from 'react-router-dom';
import { round } from '../helper/helper';
import { useStore } from '../mobx/store';

export default observer(() => {
  const { coinStore } = useStore();
  const { trending, getTrendingCoins } = coinStore;
  const history = useHistory();

  useEffect(() => {
    getTrendingCoins();
  }, [getTrendingCoins]);

  const items = trending.map(coin => (
    <Box
      onClick={() => history.push(`/single/${coin.id}`)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        textTransform: 'uppercase',
        backgroundColor: 'ButtonShadow',
      }}
    >
      <img
        src={coin?.image}
        alt={coin.name}
        height="80"
        style={{ marginBottom: 10 }}
      />
      <div>
        <span style={{ padding: '3px', fontWeight: '700' }}>{coin.symbol}</span>
        <span style={{
          fontWeight: '700',
          color: coin.price_change_percentage_24h < 0 ? 'red' : 'rgb(14, 203, 129)',
          padding: '3px',
        }}
        >
          {round(coin.price_change_percentage_24h)}
          %
        </span>
      </div>
    </Box>
  ));
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      autoPlay
      items={items}
    />
  );
});
