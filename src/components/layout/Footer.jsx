import { Box, Container, Typography } from "@mui/material"
import { SocialIcons } from "../SocialIcons";

export const Footer = () => {
    return (
        <Container maxWidth='lg'>

            <hr />

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between', alignItems: 'center', mt: 3, pb: 2 }}>
                <img src='/logow.svg' height='50' />
                <SocialIcons />
            </Box>

            {/* Responsive */}
            <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', py: 3, gap: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
                    <img src='/logow.svg' height='50' />
                    <SocialIcons />
                </Box>
            </Box>

        </Container>
    )
}
