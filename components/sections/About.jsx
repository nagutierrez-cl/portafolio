import { Box, Grid, Typography } from "@mui/material"
import { SectionTitle } from "../SectionTitle"

export const About = () => {
    return (
        <Box id='about' sx={{ my: 20 }}>
            <SectionTitle title='About me' />
            
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4} md={3} display='flex' alignItems='center' justifyContent='center'>
                    <img src='/profile.jpeg' style={{ maxHeight: '250px', borderRadius: '20px' }} />
                </Grid>

                <Grid item xs={12} sm={8} md={9} sx={{ margin: 'auto' }}>
                    <Typography variant="body1" style={{ textWrap: 'balance' }}>
                        I'm a web developer from Punta Arenas, Chile. 1+ years of experience as a full-stack developer.
                        I'm able to analyze and give possible solutions to customer's problems. 
                        I'm always open to new ideas or another ways to develop a certain feature,
                        I appreciate feedback when I did something right or when I could have done it in another way or better, it is always an opportunity to learn. 
                        <br />
                        <br />
                        I'm ready to give you my best.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
