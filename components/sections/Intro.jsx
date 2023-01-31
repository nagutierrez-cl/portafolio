import { Box, Button, Container, Link, Typography } from "@mui/material"
import { SocialIcons } from "../SocialIcons";

export const Intro = () => {
  return (
    <Container maxWidth='md' sx={{ height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '5px' }}>
        <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem'}}}>Hi, nice to meet you, I'm</Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '4.5rem'}, color: 'rgba(0, 113, 255, 1)' }}>Nicolás Gutiérrez</Typography>
        <Typography variant="body1">Full-Stack web developer</Typography>

        <Box display='flex' gap={3} sx={{ flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'start', sm: 'center' } }}>
          <SocialIcons />

          <Box>
            <Link href='/CV/EN-NicolasGutierrez.pdf' target='_blank' sx={{ mr: 3 }}>
                <Button variant="outlined">
                    CV - EN
                </Button>
            </Link>

            <Link href='/CV/NicolasGutierrez.pdf' target='_blank'>
                <Button variant="outlined">
                    CV - ES
                </Button>
            </Link>
          </Box>
        </Box>

    </Container>
  )
}
