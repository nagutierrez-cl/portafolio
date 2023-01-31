import { Box, Grid, Typography } from "@mui/material"
import { SectionTitle } from "../SectionTitle"

export const About = () => {
    return (
        <Box id='about' sx={{ my: 20 }}>
            <SectionTitle title='About me' />
            
            <Grid container spacing={5}>
                <Grid item xs={12} sm={3} display='flex' alignItems='center' justifyContent='center'>
                    <img src='/profile.jpeg' style={{ maxHeight: '200px', borderRadius: '20px' }} />
                </Grid>

                <Grid item xs={12} sm={9} sx={{ margin: 'auto' }}>
                    <Typography variant="body1">
                        I'm a web developer from Punta Arenas, Chile with 1 year of experience working as a front-end developer with ReactJs.
                    </Typography>
                    <Typography variant="body1">
                        I have the knowledge to do back-end support tasks with NodeJs, using Sql and No-Sql databases.
                    </Typography>
                    <Typography variant="body1">
                        I'm capable to analyze and solve customer problems with the initiative to propose new ideas and solutions.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
