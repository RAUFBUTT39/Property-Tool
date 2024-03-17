import React from 'react'
import {styled} from '@mui/material/styles';
import { Typography } from '@mui/material';

const PropertyTypography = styled(Typography)(({theme, color, textalign, size='32px', weight='700', lineheight='28px'})=>({
    fontFamily: 'Manrope',
    color: color || theme.palette.primary.heading,
    fontSize: size,
    textAlign: textalign,
    fontWeight: weight,
    lineHeight: lineheight
}))

const PropertyToolTypography = (props) => {
    const {children, ...rest} = props
  return (
    <PropertyTypography {...rest}>{children}</PropertyTypography>
  )
}

export default PropertyToolTypography