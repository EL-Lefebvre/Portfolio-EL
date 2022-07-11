import { Box,Card, CardMedia } from '@mui/material'
import React from 'react'

const SkillsIcon = (src: any ) => {
  return (
      <Card>

<CardMedia src={src}  sx={{width: '50px', height: '50px'}}/>
      </Card>
  )
}

export default SkillsIcon