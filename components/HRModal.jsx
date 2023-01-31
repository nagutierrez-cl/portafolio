import { Box, Button, Container, Fade, IconButton, Modal, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

export const HRModal = ({ isModalOpen, setIsModalOpen }) => {

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

                    <Typography sx={{ mb: 5, opacity: 1 }}>Web app developed in MERN stack, using Redux for state management, login based on jsonwebtoken and file upload with multer. Styling with Css and Bootstrap 4. As it is Software with confidential information of a company, images will be presented instead of the code or a trial version.</Typography>
                
                    <Box display='flex' flexDirection='column' sx={{ gap: 4 }}>
                        <Typography variant='body1'>First of all there's a login page, which is automatically skipped if the user was previously logged in and has a valid token. There's 3 different roles: HR user, Risk Prevention user and Supervisor user.</Typography>
                        <Typography variant='body1'>HR are the only one who can add new entries and delete, RP are the ones who fill the exams and certifications for some tools, Supervisor can only read general info for possible hirings.</Typography>
                        <img src='/HR/login.png' className="modal-img" />

                        <Typography>Then the main screen is displayed, which includes a paginated table with all the employees entries including text fields to be able to filter. There's a previous filter according to the type of user logged in. Workers qualified as unwanted are highlighted in red.</Typography>
                        <Typography>The information presented below is fictitious.</Typography>
                        <img src='/HR/home.png' className="modal-img" />

                        <Typography>Double-clicking on a record opens a Modal (react-modal) with a form with the employee's information.</Typography>
                        <img src='/HR/modal.png' className="modal-img" />

                        <Typography>At the bottom of the modal, there is a more information section, in which there is a select that renders conditionally another components based on the chosen option. Some examples:</Typography>

                        <Box>
                            <Typography variant="body2">Academic information</Typography>
                            <img src='/HR/academico.png' className="modal-img" />
                        </Box>

                        <Box>
                            <Typography variant="body2">Authorized Tools</Typography>
                            <img src='/HR/herramientas.png' className="modal-img" />
                        </Box>
                        
                        <Typography>Where each one has information related to the selected option. There's an option to upload a file to each record if that's necessary, such as a certificate or anything related.</Typography>
                        <Typography>The company preferred the implementation of a local server, which was configured by the IT Manager</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'end', mt: 4 }}>
                        <Button variant='outlined' onClick={() => setIsModalOpen(false)}>Close Modal</Button>
                    </Box>
                </Container>
            </Fade>
        </Modal>
    )
}
