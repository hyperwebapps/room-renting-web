import { Box, AppBar, Button, Container } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const MainNavbar: FC = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={1}>
        <Container
          maxWidth="lg"
          sx={{
            alignItems: 'center',
            color: '#000',
            display: 'flex',
            py: '0.8rem',
            position: 'relative',
          }}>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <img
              src={process.env.PUBLIC_URL + '/logo.png'}
              alt="no logo"
              width="30rem"
              height="30rem"
            />
          </Box>
          <Button color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
        </Container>
      </AppBar>
    </Box>
  )
}
