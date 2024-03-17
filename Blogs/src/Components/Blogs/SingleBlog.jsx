import {React, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea, useTheme } from '@mui/material';
import BlogsTypography from '../SharedComponents/BlogsTypography';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increaseViews } from '../../Redux/Slices/blogsSlice';

export default function SingleBlog({ blogs }) {

    // const [blogCount, setBlogCount] = useState(0)

    // const handleClick = function(e){
    //     console.log('Selected',e.target.value)    
    //   }

    
    const theme = useTheme()
      const navigate = useNavigate()
      const dispatch = useDispatch()
    return (
        <Card sx={{ width: 405, height: '606px' }} onClick={()=>{
            // setBlogCount((prev) => prev + 1)
            // console.log('countervalue', blogCount)
            // console.log('Blogs Id', blogs?.id)
            navigate( `/blogdetails/${blogs?.id}`)
            dispatch(increaseViews(blogs?.id))
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="266px"
                    width="405px"
                    image={blogs?.Image}
                    alt="blog image"
                />
                <CardContent>
                    <BlogsTypography color={theme.palette.primary.text} weight={600} size={'16px'} >
                        Posted on October 6th 2021
                    </BlogsTypography>
                    <BlogsTypography color={'blue'}>
                        {blogs?.id}
                    </BlogsTypography>
                    <BlogsTypography color={theme.palette.primary.heading} lineheight={'48px'}>
                        {blogs?.Title}
                    </BlogsTypography>
                    <BlogsTypography color={theme.palette.primary.paragraph} weight={600} size={'16px'} >
                        {blogs?.Subtitle?.slice(0,80)} Read more...
                    </BlogsTypography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}