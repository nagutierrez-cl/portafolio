import { Box, Button, Container, Fade, IconButton, Modal, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from "react-i18next";

export const HRModal = ({ isModalOpen, setIsModalOpen }) => {

    const { t } = useTranslation();

    return (
        <Modal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            closeAfterTransition
            sx={{ 
                overflowY: 'auto',
                maxWidth: '100%',
                "&::-webkit-scrollbar": {
                    width: '8px'
                },
                "&::-webkit-scrollbar-thumb": {
                    border: '1px solid transparent',
                    backgroundClip: 'content-box',
                    borderRadius: '7px',
                    boxShadow: 'inset 0 0 0 10px'
                }
            }}
        >
            <Fade in={isModalOpen} >
                <Container maxWidth='lg' sx={{ backgroundColor: 'rgb(15, 22, 36)', p: { xs: 2, sm: 10 } }}>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography variant="h2">HR App</Typography>
                        <IconButton onClick={() => setIsModalOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <hr/>

                    <Typography sx={{ mb: 5, opacity: 1 }}>{ t('hhrr.intro' )}</Typography>
                
                    <Box display='flex' flexDirection='column' sx={{ gap: 4 }}>
                        <Typography variant='body1'>{ t('hhrr.login') }</Typography>
                        <Typography variant='body1'>{ t('hhrr.roles') }</Typography>
                        <img src='/HR/login.webp' className="modal-img" />

                        <Typography>{ t('hhrr.home') }</Typography>
                        <Typography>{ t('hhrr.disclaimer') }</Typography>
                        <img src='/projects/HHRR.webp' className="modal-img" />

                        <Typography>{ t('hhrr.modal_1' )}</Typography>
                        <img src='/HR/modal.webp' className="modal-img" />

                        <Typography>{ t('hhrr.modal_2' )}</Typography>

                        <Box>
                            <Typography variant="body2">{ t('hhrr.academic' )}</Typography>
                            <img src='/HR/academico.webp' className="modal-img" />
                        </Box>

                        <Box>
                            <Typography variant="body2">{ t('hhrr.tools') }</Typography>
                            <img src='/HR/herramientas.webp' className="modal-img" />
                        </Box>
                        
                        <Typography>{ t('hhrr.moreinfo') }</Typography>
                        <Typography>{ t('hhrr.implementation') }</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'end', mt: 6 }}>
                        <Button variant='outlined' onClick={() => setIsModalOpen(false)}>{ t('hhrr.closemodal') }</Button>
                    </Box>
                </Container>
            </Fade>
        </Modal>
    )
}
