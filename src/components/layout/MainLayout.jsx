import { Box } from "@mui/material"

import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            
            {/* Background */}
            <Box sx={{ background: '#16191d'}}>
                
                {children}

                <Footer />
            </Box>
            
        </>
    )
}
