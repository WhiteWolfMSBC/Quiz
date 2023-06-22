import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'


function Home() {
    return (
        <Box>
            <Box sx={{ marginTop: "7%", bgcolor: "#cfd8dc", height: "70vh", width: "45%", marginLeft: "29%", borderRadius: "9px", boxShadow: "16" }}>
                <Box sx={{ paddingTop: "17%", fontSize: "25px" ,fontWeight:"700" }}>
                    Hello!! MY_MOST_FAVOURITE_PERSON🥰
                </Box>

                <Box sx={{ marginTop: "10%" , fontSize:"17px" }}>
                    Here is a little message for you.😁I know , I know <br></br> You are excited 🤩
                     what is a message for me but clam down......This is only for you😎
                </Box>

                <Box sx={{marginTop:"7%" , fontSize:"17px"}}>
                    So are you ready ?? Click this Button👇!!
                </Box>
                <Box sx={{marginTop:"7%"}}>
                <Button variant="outlined"><Link className='item_link' to={'/quiz'}>Ready😋</Link></Button>
                </Box>
               
            </Box>

        </Box>
    );
}

export default Home;
