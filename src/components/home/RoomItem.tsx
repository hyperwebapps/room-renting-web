import { Box, Stack, Typography } from '@mui/material'
import grey from '@mui/material/colors/grey'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { RoomItemProps } from '../types'

export const RoomItem: FC<RoomItemProps> = ({ id }) => {
  return (
    <Link
      to={`/rooms/${id}`}
      style={{
        textDecoration: 'none',
        color: '#000',
      }}>
      <Stack direction="column" justifyContent="space-between" flexWrap="wrap">
        <img
          src="https://dummyimage.com/512x512.png/5fa2dd/ffffff"
          alt="no card"
          style={{
            width: '100%',
            borderRadius: 15,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: { xs: 1.5 },
            fontWeight: 'bold',
            fontSize: '1rem',
          }}>
          El Port de la Selva, Spain
          <Typography sx={{ fontSize: 16 }}>⭐ New</Typography>
        </Box>
        <Typography component="span" color={grey[600]}>
          Individual Host
        </Typography>
        <Typography
          component="span"
          sx={{ mt: 0.7, fontWeight: 'bold', fontSize: 15.5 }}>
          € 519
          <Typography component="span"> night</Typography>
        </Typography>
      </Stack>
    </Link>
  )
}
