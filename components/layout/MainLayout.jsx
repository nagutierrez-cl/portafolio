import { Box } from "@mui/material"

import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            
            {/* Background */}
            <Box sx={{ background: 'linear-gradient(0deg, rgba(0,31,70,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)', height: '100%', width: '100%', position: 'fixed', zIndex: '-1' }} />
            
            {children}

            <Footer />
        </>
    )
}
