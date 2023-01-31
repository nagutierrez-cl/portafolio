import { AppBar, Box, Toolbar, Container, Button, useScrollTrigger, Slide } from '@mui/material'

const sections = ['about', 'skills', 'projects'];

export const Navbar = () => {

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
            <AppBar sx={{ backgroundColor: 'black' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <img src='/logow.png' height='50' />
                    
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 3 }}>
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

                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
}