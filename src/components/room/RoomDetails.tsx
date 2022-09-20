import { Box, Container } from '@mui/material'
import { FC } from 'react'

export const RoomDetails: FC = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 0, mt: '4rem' }}>
        <Container
          sx={{
            maxWidth: { sm: 'lg', xs: 'none' },
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            color: '#000',
            position: 'relative',
          }}>
          Hello
        </Container>
      </Box>
    </div>
  )
}
