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
                            <TableCell align="center">Coin</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">24 Change</TableCell>
                            <TableCell align="right">Market Cap</TableCell>
                            <TableCell align="right">High in 24h</TableCell>
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