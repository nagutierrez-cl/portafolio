import { Box, Typography } from '@mui/material'

export const SectionTitle = ({ title }) => {
  return (
    <Box display='flex' justifyContent='space-between' sx={{ mb: 10, flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="h2" sx={{ mr: 4 }}>{title}</Typography>
        <Box sx={{ height: '1px', backgroundColor: 'white', flex: 1, maxWidth: '80%' }} />
    </Box>
  )
}
