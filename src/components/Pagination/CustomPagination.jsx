import * as React from 'react';
import Pagination from '@mui/material/Pagination';

const CustomPagination = ({ count = 1, setPage }) => {
    const handleChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '10px'
            }}
        >
            <Pagination
                showFirstButton
                showLastButton
                count={count}
                onChange={(event, newPage) => handleChange(newPage)}
            />
        </div>
    )
}

export default CustomPagination