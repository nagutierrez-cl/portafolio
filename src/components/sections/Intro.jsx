import { Box, Button, Container, IconButton , Link, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import { SocialIcons } from "../SocialIcons";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export const Intro = () => {

    const { t, i18n } = useTranslation();

    return (
        <Container maxWidth='md' sx={{ height: '100vh', display: 'flex',  justifyContent: 'center', flexDirection: 'column', gap: '5px' }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem'}}}>{t('welcome_message')}</Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '4rem'}, color: '#279EFF' }}>Nicolás Gutiérrez</Typography>
            <Typography className={`typewriter_${i18n.language}`} variant="h5">{t('position')}</Typography>

            <Box display='flex' gap={2} sx={{ flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'start', sm: 'center' } }}>
                <SocialIcons />

                <Link href='/CV/NicolasGutierrez.pdf' target='_blank'>
                    <Button variant="outlined">
                        CV - ES
                    </Button>
                </Link>

                {/* <Link href='/CV/EN-NicolasGutierrez.pdf' target='_blank'> */}
                    <Button variant="outlined" disabled>
                        CV - EN
                    </Button>
                {/* </Link> */}
            </Box>
            
            <Box sx={{ position: 'relative', top: '15%', display: 'flex', justifyContent: 'center' }}>
                <IconButton className="animation-float"  href="/#about">
                    <KeyboardDoubleArrowDownIcon sx={{ fontSize: '3rem' }}  />
                </IconButton>
            </Box>

        </Container>
    )
}
