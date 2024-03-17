
import SearchProperties from "./Components/PropertySearchTool/SearchProperties"
import SearchReasultsTable from "./Components/PropertySearchTool/SearchReasultsTable"
import SearchReasulsTable from "./Components/PropertySearchTool/SelectedReasultsTable"
import PropertyToolTypography from "./Components/SharedComponents/PropertyToolTypography"


function App() {

  return (
    <>
    <PropertyToolTypography sx={{mt:4, mb:4}} align={'center'}>Property Search Tool</PropertyToolTypography>
    <SearchProperties />
    <SearchReasulsTable />
    <SearchReasultsTable />
    </>
  )
}

export default App
