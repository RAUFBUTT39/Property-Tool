import { Route, Routes } from "react-router-dom"
import BlogsList from "./Components/Blogs/BlogsList"
import BlogsTypography from "./Components/SharedComponents/BlogsTypography"
import BlogDetails from "./Components/Blogs/BlogDetails"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<BlogsList />}/>
      <Route path="/blogdetails/:id" element={<BlogDetails />}/>
    </Routes>
      
    </>
  )
}

export default App
