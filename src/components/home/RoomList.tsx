import { Box, Container, Grid } from '@mui/material'
import { FC } from 'react'
import { RoomItem } from '.'
import { RoomItemProps } from '../types'

export const RoomList: FC = () => {
  const rooms: RoomItemProps[] = [
    {
      id: '6333f6a80506d7d712437cb1',
    },
    {
      id: '6333f6a8c87f851c692e0d02',
    },
    {
      id: '6333f6a8f005188e12289917',
    },
    {
      id: '6333f6a841fe8cffea04506f',
    },
  ]

  return (
    <Box sx={{ flexGrow: 1, mt: '4rem' }}>
      <Container
        maxWidth="lg"
        sx={{
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          color: '#000',
        }}>
        <Grid container spacing={3}>
          {rooms.map((room, index) => (
            <Grid item key={index} lg={3} md={4} sm={6} xs={12}>
              <RoomItem id={room.id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
