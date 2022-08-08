import { TableRow, TableCell, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { addComma, round } from '../../app/helper/helper';
import { Coin } from '../../app/model/coin';

interface Props {
    coin: Coin;
}

export default function CoinTable({ coin }: Props) {
  const history = useHistory();

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
      key={coin.name}
      onClick={() => history.push(`/single/${coin.id}`)}
      hover
    >
      <TableCell
        align="center"

        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          marginLeft: '5px',
        }}
      >
        <img width="40px" src={coin.image} alt={coin.image} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography textAlign="left" textTransform="uppercase" padding={1}>
            {coin.symbol}
          </Typography>
          <Typography textAlign="center" color="darkgrey" fontSize={12}>
            {coin.name}
          </Typography>
        </div>
      </TableCell>
      <TableCell align="right">
        $
        {addComma(coin.current_price)}
      </TableCell>
      <TableCell
        align="right"
        sx={{ color: coin.price_change_percentage_24h < 0 ? 'red' : 'rgb(14, 203, 129)' }}
      >
        {round(coin.price_change_percentage_24h)}
        %
      </TableCell>
      <TableCell align="right">
        $
        {addComma(coin.market_cap)}
      </TableCell>
      <TableCell align="right">
        $
        {addComma(coin.high_24h)}
      </TableCell>
    </TableRow>
  );
}
