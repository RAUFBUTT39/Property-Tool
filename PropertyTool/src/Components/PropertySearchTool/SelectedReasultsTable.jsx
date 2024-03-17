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
import {useSelector} from 'react-redux'
import { styled, useTheme } from '@mui/material';
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
    disablePadding: false,
    label: 'Address',
  },
  {
    id: 'Post_Code',
    numeric: false,
    disablePadding: false,
    label: 'Post Code',
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

const SearchReasulsTable = () => {

 const theme =useTheme()
const selectedData = useSelector((state) => state.propertytool.selectedProperty)

// console.log('Selected Properties', selectedData)

  return (
    <Box sx={{ width: '100%' }}>
      
      <PropertyToolTypography>Selected properties</PropertyToolTypography>
      {
        selectedData.length !=0 ? 
        <Paper sx={{ width: '100%', mb: 4, mt: 4 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            // aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              // numSelected={selected.length}
              // rowCount={rows.length}
            />
            <TableBody>
              {selectedData.map((row, index) => {
                // const isItemSelected = isSelected(row.id);
                // const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <StyledTableRow
                    hover
                    key={row.id}
                  >
                    <TableCell
                      // component="th"
                      scope="row"
                      padding="normal"
                    >
                      {row.Address}
                    </TableCell>
                    <TableCell align="left">{row.PostCode}</TableCell>
                    <TableCell align="center">{row.NoOfRooms}</TableCell>
                    <TableCell align="center">{row.FloorArea}</TableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper> : <PropertyToolTypography sx={{mt: 4, mb:4}} color={theme.palette.primary.text} size={'21px'} align={'center'}>Select Properties below</PropertyToolTypography>
      }
    </Box>
  );
}

export default SearchReasulsTable
