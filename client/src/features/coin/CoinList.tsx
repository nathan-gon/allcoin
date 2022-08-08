import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { observer } from "mobx-react-lite"
import { Coin } from "../../app/model/coin"
import CoinTable from "./CoinTable"




interface Props {
    coins: Coin[]
}

export default observer(function CoinList({ coins }: Props) {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead
                        sx={{ backgroundColor: 'ButtonShadow' }}>
                        <TableRow>
                            <TableCell sx={{ width: '20%' }} align="center">Coin</TableCell>
                            <TableCell sx={{ width: '20%' }} align="center">Price</TableCell>
                            <TableCell sx={{ width: '20%' }} align="center">24h Change</TableCell>
                            <TableCell sx={{ width: '20%' }} align="center">Market Cap</TableCell>
                            <TableCell sx={{ width: '20%' }} align="center">24h High %</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            coins.map((coin) => (
                                <CoinTable key={coin.id} coin={coin} />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>


    )
})