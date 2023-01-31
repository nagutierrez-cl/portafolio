import { Box, Grid, Typography } from "@mui/material"

import { services } from "../../data"
import { SectionTitle } from "../SectionTitle"

export const Services = () => {
    return (
        <Box sx={{ my: 20 }}>
            <SectionTitle title='Services' />
            <Grid container spacing={5} justifyContent='center'>
                {
                    services.map(service => (
                        <Grid item xs={6} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} key={service.label}>
                            <Box sx={{ height: { xs: '60px', sm: '80px' }}}>
                                <img src={service.img} height='100%' />
                            </Box>
                            <Typography variant="body2" sx={{ mt: 1 }}>{service.label}</Typography>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}
