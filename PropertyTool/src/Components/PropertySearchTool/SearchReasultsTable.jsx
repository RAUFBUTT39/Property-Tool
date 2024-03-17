import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import {useDispatch, useSelector} from 'react-redux'
import { styled } from '@mui/material';
import PropertyToolTypography from '../SharedComponents/PropertyToolTypography';
import { updateSelectProperty } from '../../Redux/Slices/propertyToolSlice';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.graybackgroundlight,
    color: theme.palette.primary.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.primary.graybackgrounddark,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const headCells = [
  {
    id: 'Address',
    numeric: false,
    disablePadding: true,
    label: 'Address',
  },
  {
    id: 'Post_Code',
    numeric: false,
    disablePadding: false,
    label: 'Post Code',
  },
  {
    id: 'Property_Type',
    numeric: false,
    disablePadding: false,
    label: 'Property Type',
  },
  {
    id: 'No_of_Rooms',
    numeric: true,
    disablePadding: false,
    label: 'No Of Rooms',
  },
  {
    id: 'floor_area',
    numeric: true,
    disablePadding: false,
    label: 'Floor Area',
  },
];

function EnhancedTableHead(props) {

  return (

    <TableHead>
      <TableRow>
        <StyledTableCell >
        </StyledTableCell>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
              {headCell.label}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const SearchReasultsTable = () => {
//   const [selected, setSelected] = React.useState([]);

// const propertyData = useSelector((state) => state.propertytool.propertyData)
const searchedProperties = useSelector((state) => state.propertytool.searchedProperty)

const dispatch = useDispatch()
// console.log('Table Data', propertyData)
  return (
    <Box sx={{ width: '100%' }}>
      <PropertyToolTypography>Search results</PropertyToolTypography>
      <Paper sx={{ width: '100%', mt: 4 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            // aria-labelledby="tableTitle"
          >
            <EnhancedTableHead />
            <TableBody>
              {searchedProperties.map((row, index) => {

                return (
                  <StyledTableRow
                    hover
                    key={row.id}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                      sx={{
                        color: 'primary',
                        '&.Mui-checked': {
                          color: 'blue',
                        },
                      }}
                      onChange={()=>{
                        dispatch(updateSelectProperty(row))
                      }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      // id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.Address}
                    </TableCell>
                    <TableCell align="left">{row.PostCode}</TableCell>
                    <TableCell align="left">{row.PropertyType}</TableCell>
                    <TableCell align="center">{row.NoOfRooms}</TableCell>
                    <TableCell align="center">{row.FloorArea}</TableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default SearchReasultsTable
