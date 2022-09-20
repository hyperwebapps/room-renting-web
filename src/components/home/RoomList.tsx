import { Box, Container, Grid } from '@mui/material'
import { FC } from 'react'
import { RoomItem } from '.'

export const RoomList: FC = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: '4rem' }}>
      <Container
        maxWidth="lg"
        sx={{
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          color: '#000',
          position: 'relative',
        }}>
        <Grid container spacing={3}>
          <Grid item key={1} lg={3} md={4} sm={6} xs={12}>
            <RoomItem id="1" />
          </Grid>
          <Grid item key={2} lg={3} md={4} sm={6} xs={12}>
            <RoomItem id="2" />
          </Grid>
          <Grid item key={3} lg={3} md={4} sm={6} xs={12}>
            <RoomItem id="3" />
          </Grid>
          <Grid item key={1} lg={3} md={4} sm={6} xs={12}>
            <RoomItem id="4" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
