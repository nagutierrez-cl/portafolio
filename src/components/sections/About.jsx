import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { SectionTitle } from "../SectionTitle"

export const About = () => {

    const { t } = useTranslation();

    return (
        <Box id='about' sx={{ mt: 25, mb: 25 }}>
            <SectionTitle title={t('about_me')} />
            
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 5, md: 10 }, flexDirection: { xs: 'column', md: 'row' }, maxWidth: 'md', margin: 'auto' }}>
                <img src='/profile.webp' style={{ maxHeight: '280px', borderRadius: '20px' }} />

                <Typography variant="body1">
                    {t('about_text')}
                </Typography>
            </Box>
        </Box>
    )
}
