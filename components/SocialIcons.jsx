import { Box, IconButton, Link } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const SocialIcons = () => {
  return (
    <Box display='flex' gap={2} alignItems='center'>
        <Link href="https://www.linkedin.com/in/nagutierrez-cl/" target='_blank'>
            <IconButton>
                <LinkedInIcon sx={{ color: 'white', fontSize: '2rem' }} />
            </IconButton>
        </Link>

        <Link href='https://github.com/nagutierrez-cl' target='_blank'>
            <IconButton>
                <GitHubIcon sx={{ color: 'white', fontSize: '2rem' }} />
            </IconButton>
        </Link>
    </Box>
  )
}
