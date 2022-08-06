import { Box, Typography, Pagination } from "@mui/material";
import { useState } from "react";
import { MetaData } from "../model/pagination";

interface Props {
    metaData: MetaData;
    onPageChange: (page: number) => void;

}


export default function AppPagination({ metaData, onPageChange }: Props) {
    const { currentPage, totalCount, totalPages, pageSize } = metaData
    const [pageNumber, setPageNumber] = useState(currentPage)

    function handlePageChange(page: number) {
        setPageNumber(page);
        onPageChange(page);
    }


    return (
        <Box marginTop={5}
            marginBottom={10}
            display='flex'
            justifyContent='center'
            alignItems='center'>

            <Pagination
                color='secondary'
                size='large'
                count={totalPages}
                page={pageNumber}
                onChange={(e, page) => handlePageChange(page)}
            />
        </Box>
    )

}