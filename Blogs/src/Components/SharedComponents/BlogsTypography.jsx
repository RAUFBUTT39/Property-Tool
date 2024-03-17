import React from 'react'
import {styled} from '@mui/material/styles';
import { Typography } from '@mui/material';

const BlogTypography = styled(Typography)(({theme, color, textalign, size='32px', weight='700', lineheight='28px'})=>({
    fontFamily: 'Manrope',
    color: color || theme.palette.primary.heading,
    fontSize: size,
    textAlign: textalign,
    fontWeight: weight,
    lineHeight: lineheight
}))

const BlogsTypography = (props) => {
    const {children, ...rest} = props
  return (
    <BlogTypography {...rest}>{children}</BlogTypography>
  )
}

export default BlogsTypography