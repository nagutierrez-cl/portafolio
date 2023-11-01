import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { SectionTitle } from "../SectionTitle"

export const About = () => {

    const { t } = useTranslation();

    return (
        <Box id='about' sx={{ my: 20 }}>
            <SectionTitle title={t('About Me')} />
            
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 5, md: 10 }, flexDirection: { xs: 'column', md: 'row' }, maxWidth: 'md', margin: 'auto' }}>
                <img src='/profile.jpeg' style={{ maxHeight: '250px', borderRadius: '20px' }} />

                <Typography variant="body1">
                    {t('About')}
                </Typography>
            </Box>
        </Box>
    )
}
