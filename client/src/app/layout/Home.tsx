import { Container, Box, TextField, Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import CoinList from "../../features/coin/CoinList";
import AppMenu from "../component/AppMenu";
import AppPagination from "../component/AppPagination";
import LoadingComponent from "../component/LoadingComponent";
import { useStore } from "../mobx/store";
import { CoinPaigingParams } from "../model/coin";


const Home = () => {
  const { coinStore } = useStore();
  const { 
    coins, 
    searchTerm,
    metaData,
    coinPaigingParams,
    predicate, 
    getCoins, 
    setCoinPagingParams, 
    setPredicate, 
    setSearchTerm, 
  } = coinStore || {};
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCoins()
        .catch(err => console.log(err))
    setLoading(false)
  }, [coinPaigingParams, predicate, searchTerm, getCoins])


  function handleChange(e: any) {
    setSearchTerm(e?.target?.value ?? '');
  }

  function handlePageChange(page: number) {
    const parmas = new CoinPaigingParams(page);
    setCoinPagingParams(parmas);
  }

  if (loading) return <LoadingComponent message="Loading Coins wait a moment please" />

  return (
    <Container sx={{
      display: 'flex', 
      justifyContent: 'center', 
      flexDirection: 'column', 
      width: '75%',
    }} >
      <Box marginTop={6} display='flex' justifyContent='space-between' >
        <TextField onChange={handleChange}
          fullWidth
          sx={{ width: '500px' }}
          label='Search by name'
          value={searchTerm} 
        />
        <AppMenu setPredicate={setPredicate} />
      </Box>
      <Grid marginTop={3} container>
        <Grid item xs={12} sm={12}>
          <Box display='flex' alignItems='center'
            justifyContent='center'
            flexDirection='column' 
          >
            <CoinList coins={coins} />
          </Box>
          {
            metaData 
              && (
                <AppPagination
                  metaData={metaData}
                  onPageChange={handlePageChange}
                />
              )
          }
        </Grid>
      </Grid>
    </Container >
  );
};

export default observer(Home); 