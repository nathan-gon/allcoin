import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import AppCarousel from "../component/AppCarousel";
import banner from './banner.jpg'



export default function Header() {


    return (
        <Box display='flex' justifyContent='center'
            alignContent='center' flexDirection='column' >
            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
                <Typography
                    fontWeight='500'
                    variant="h2"
                    textAlign='center' >
                    All Coin List
                </Typography>
            </Link>
            <Divider />
            <Box sx={{
                backgroundColor: 'ButtonShadow',
            }} >
                <Typography letterSpacing={2}
                    color='Highlight'
                    textAlign='center'
                    variant="h4"
                    textTransform='uppercase'
                    fontWeight={500}>
                    Trending Coins
                </Typography>
            </Box>
            <AppCarousel />
            <Divider />

        </Box>

    )

}