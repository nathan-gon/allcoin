import { MenuItem, Menu, Button, Fade } from "@mui/material";
import { useState } from "react";

interface Props {
    setPredicate: (predicate: string) => void
}

export default function AppMenu({ setPredicate }: Props) {


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                onClick={handleClick}
                variant='contained' >
                fliter
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem
                    onClick={() => setPredicate("24HighPer_highToLow")}
                >
                    24High Per
                </MenuItem>
                <MenuItem
                    onClick={() => setPredicate("24HighPer_lowToHigh")}
                >
                    24Low per
                </MenuItem>
                <MenuItem
                    onClick={() => setPredicate("")}
                >
                    Market Rank
                </MenuItem>
            </Menu>
        </>

    )

}


