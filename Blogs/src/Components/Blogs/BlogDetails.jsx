import React, { useEffect, useState } from 'react'
import productServices from './BlogServices'
import { useParams } from 'react-router-dom'
import BlogsTypography from '../SharedComponents/BlogsTypography'
import { Grid, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const BlogDetails = () => {
  /** Local State of Component */
  const [singleBlog, setSingleBlog] = useState({
    blog: [],
    isLoading: true
  })
  const { id } = useParams()
  const theme = useTheme()
  const viewCount = useSelector((state) => state.blogs.viewCount)
  // console.log('views',viewCount[id]);
  // console.log('param',param);
  const getSingleBlogData = async () => {
    try {
      const response = await productServices.getSingleBlog(id)
      setSingleBlog((prev) => ({
        ...prev,
        blog: response,
        isLoading: false
      }))
    } catch (error) {
      setSingleBlog((prev) => ({
        ...prev,
        isLoading: false
      }))
    }
  }

  useEffect(() => {
    getSingleBlogData()
  }, [])

  const { blog, isLoading } = singleBlog

  console.log('blogssingle', blog);
  return (
    <div>
      {
        isLoading ? <BlogsTypography textalign={'center'} sx={{ marginTop: '25%' }}>Loading...</BlogsTypography> :
          <>
            <div style={{display: 'flex',gap:'30px', alignItems:'center'}}>
            <BlogsTypography color={theme.palette.primary.text} weight={600} size={'16px'} >
              Posted on October 6th 2021 
            </BlogsTypography>
            {viewCount[id] && <BlogsTypography size={'16px'} color={theme.palette.primary.text} weight={600} sx={{display:'flex', alignItems:'center'}}>
              <RemoveRedEyeOutlinedIcon /> {viewCount[id]}  views
            </BlogsTypography>}
            </div>
            <BlogsTypography color={theme.palette.primary.heading} lineheight={'56px'}>
              {blog?.Title}
            </BlogsTypography>
            <BlogsTypography color={theme.palette.primary.text} size={'16px'} lineheight={'28px'}>
              {blog?.Subtitle}
            </BlogsTypography>

            <img src={blog?.Image} alt="Blog Image"
              style={{ display: 'flex', margin: 'auto', width: '1280px', height: '512px' }}
            />
            <Grid container justifyContent={'center'} spacing={4}>
              {/* <Grid item sm={12} display={'flex'} justifyContent={'center'}>
        <img src={blog?.Image} alt="Blog Image" 
        // style={{display:'flex',margin:'auto', width:'1280px', height:'512px'}}
         />
        </Grid> */}
              <Grid item sm={12} md={6}>

                <BlogsTypography color={theme.palette.primary.heading} lineheight={'28px'}>
                  {blog?.Subtitle}
                </BlogsTypography>
                <BlogsTypography size={'16px'} color={theme.palette.primary.text} weight={600}>{blog?.Article}</BlogsTypography>
              </Grid>
            </Grid>
          </>
      }
    </div>
  )
}

export default BlogDetails