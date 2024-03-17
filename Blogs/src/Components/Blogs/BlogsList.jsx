import React, { useEffect, useState } from 'react'
import SingleBlog from './SingleBlog'
import productServices from './BlogServices'
import { Grid } from '@mui/material'
import BlogsTypography from '../SharedComponents/BlogsTypography'

/** Component starts here */
const BlogsList = () => {

  /** Local State of Component */
  const [blogsData, setBlogsData] = useState({
    blogs: [],
    isLoading: true
  })

  const getBlogsData = async() => {
    try {
      const response = await productServices.getAllBlogs()
      setBlogsData((prev)=>({
        ...prev,
        blogs: response,
        isLoading:false
      }))
    } catch (error) {
      setBlogsData((prev)=>({
        ...prev,
        isLoading:false
      }))
    }
  }

  useEffect(()=>{
    getBlogsData()
  },[])

  const {blogs, isLoading} = blogsData

  console.log('blogs', blogs)

  const handleClick = function (id){
    console.log('Selected', id)
  }
  
  let uniqueArray = [...new Set(blogs)];
  return (
    <>
    {
      isLoading ? <BlogsTypography textalign={'center'} sx={{marginTop:'25%'}}>Loading...</BlogsTypography> :
     <Grid container rowSpacing={8}>
    {
      uniqueArray?.map((item) => 
        <Grid key={item.id} item sm={12} md={4} lg={3} >
        <SingleBlog blogs={item} />
        </Grid>
        )
    }
    </Grid>
    }
    </>
  )
}

export default BlogsList