import { Avatar, Box, Container, Typography } from '@mui/material'
import { FC } from 'react'
import Divider from '@mui/material/Divider'

interface Props {
  window?: () => Window
}

export const RoomDetails: FC<Props> = (props: Props) => {
  return (
    <div>
      <Box>
        <Container
          disableGutters
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#000',
            flexWrap: 'wrap',
          }}>
          <Box component="div" sx={{ width: '100%', zIndex: -1, mt: '-6rem' }}>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=960"
              alt="no card"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              alignItems: 'start',
              flexWrap: 'wrap',
              zIndex: 1,
              mt: '-6rem',
              backgroundColor: 'white',
            }}>
            <Box
              component="div"
              sx={{
                py: '1.3rem',
                px: '0.4rem',
                width: '100%',
              }}>
              <Typography component="div" variant="h5" sx={{ mb: '0.8rem' }}>
                Sunflower House
              </Typography>
              <Box component="span">
                ⭐ New · 136 reviews · El Port de la Selva, Spain
              </Box>
              <Divider sx={{ width: '100%', mt: '1.5rem' }} />
            </Box>
            <Box
              component="div"
              sx={{ pb: '1.3rem', px: '0.4rem', width: '100%' }}>
              <Box
                component="div"
                sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  fontWeight="500"
                  fontSize="1.3rem"
                  sx={{ width: '45%' }}>
                  Entire cabin hosted by Jan Henrik
                </Typography>
                <Avatar
                  src="https://a0.muscache.com/im/pictures/user/f654eeec-5aa5-48b6-ae59-7cba6a7d4c7d.jpg?im_w=240"
                  alt="no owner"
                  sx={{ width: '3rem', height: '3rem' }}
                />
              </Box>
              <Box component="span" fontWeight="200">
                6 guests · 3 bedrooms · 3 beds · 2 baths
              </Box>
              <Divider sx={{ width: '100%', mt: '1.5rem' }} />
            </Box>
            <Box
              component="div"
              sx={{
                py: '1rem',
                px: '0.4rem',
                width: '100%',
              }}>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  flexWrap: 'wrap',
                }}>
                <Avatar
                  src="https://a0.muscache.com/im/pictures/user/f654eeec-5aa5-48b6-ae59-7cba6a7d4c7d.jpg?im_w=240"
                  alt="no owner"
                  sx={{ width: '3rem', height: '3rem' }}
                />
                <Typography
                  component="span"
                  fontWeight="500"
                  fontSize="1.3rem"
                  sx={{
                    ml: '1.3rem',
                    width: '85%',
                  }}>
                  Entire cabin hosted by Jan Henrik Entire cabin hosted by Jan
                  Henrik
                </Typography>
              </Box>
              <Divider sx={{ width: '100%', mt: '1.5rem' }} />
            </Box>
          </Container>
        </Container>
      </Box>
    </div>
  )
}
