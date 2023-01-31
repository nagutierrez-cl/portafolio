import { Box, Grid, Typography } from "@mui/material"

import { skills } from "../../data"
import { SectionTitle } from "../SectionTitle"

export const Skills = () => {
    return (
        <Box id='skills' sx={{ my: 20 }}>
            <SectionTitle title='Skills' />
            <Grid container spacing={5} justifyContent='center'>
                {
                    skills.map(skill => (
                        <Grid item xs={6} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} key={skill.label}>
                            <Box sx={{ height: { xs: '60px', sm: '80px' }}}>
                                <img src={skill.img} height='100%' />
                            </Box>
                            <Typography variant="body2" sx={{ mt: 1 }}>{skill.label}</Typography>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}
