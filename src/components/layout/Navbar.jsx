import { AppBar, Box, Toolbar, Container, Button, useScrollTrigger, Slide, Select, MenuItem } from '@mui/material'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const sections = ['about', 'skills', 'projects'];

export const Navbar = () => {

    const { i18n } = useTranslation();

    const [lang, setLang] = useState(window.navigator.language.substring(0, 2) || 'en');
    
    const changeLang = (e) => {
        setLang(e.target.value)
        i18n.changeLanguage(e.target.value);
    }

    function HideOnScroll({ children }) {
        const trigger = useScrollTrigger();
      
        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    return (
        <HideOnScroll>
            <AppBar sx={{ backgroundColor: '#0d0f12' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <img src='/logow.png' height='50' />
                    
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 3 }}>

                            <Select
                                className="select_lang"
                                value={lang}
                                onChange={changeLang}
                                autoWidth
                                sx={{ border: 'none' }}
                            >
                                <MenuItem value="es"><img src="/locales/es.png" width="25px" /></MenuItem>
                                <MenuItem value="en"><img src="/locales/en.png" width="25px" /></MenuItem>
                            </Select>

                            <Box sx={{ display:{ xs: 'none', sm: 'flex' } }}>
                                {
                                    sections.map((section) => (
                                        <Button
                                            key={section}
                                            href={`#${section}`}
                                            sx={{ my: 1, color: 'primary', display: 'block' }}
                                        >
                                            {section}
                                        </Button>
                                    ))
                                }
                            </Box>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
}