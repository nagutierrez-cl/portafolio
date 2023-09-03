import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoIcon from '@mui/icons-material/Info';

import { projects, skills } from '../../data'
import { SectionTitle } from '../SectionTitle';
import { useState } from 'react';
import { HRModal } from '../HRModal';

export const Projects = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Box id='projects' sx={{ my: 20 }}>
            <SectionTitle title='Projects' />
            <Grid container spacing={{ xs: 4, lg: 8 }} justifyContent='center'>
                {
                    projects.map(project => (
                        <Grid item xs={12} sm={6} md={4} key={project.title}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    sx={{ height: 175, backgroundSize: 'contain' }}
                                    image={project.img}
                                    title={project.title}
                                />
                                <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                                        {project.description}
                                    </Typography>
                                    
                                    <Typography variant="body1" sx={{ mt: 3 }}>
                                        Technologies:
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'wrap', gap: '20px', mt: 2 }}>
                                        {
                                            project.technologies.map(tech => (
                                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px', width: '80px' }} key={`${project.title}-${tech}`}>
                                                    <img src={ (skills.find(skill => skill.label === tech)).img } height='25' />
                                                    <Typography variant='body2'>
                                                        {tech}
                                                    </Typography>
                                                </Box>
                                            ))
                                        }
                                    </Box>
                                </CardContent>
                                
                                <CardActions>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-around', flex: 1, mb: 2 }}>
                                        {
                                            project.title === 'Freelance HR App' 
                                                ?   <Button variant='outlined' startIcon={<InfoIcon />} onClick={() => setIsModalOpen(true)}>More info</Button>
                                                : 
                                                    <>
                                                        <Button variant="outlined" startIcon={<GitHubIcon />} href={project.github} target='_blank' disabled={!project.github}>Github</Button>
                                                        <Button variant="outlined" startIcon={<LaunchIcon />} href={project.url} target='_blank' disabled={!project.url}>Demo</Button>
                                                    </>
                                        }
                                    </Box>
                                </CardActions>
                                
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>

            <HRModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

        </Box>
    )
}
