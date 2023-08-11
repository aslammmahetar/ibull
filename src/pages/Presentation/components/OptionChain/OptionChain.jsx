import { Box, ThemeProvider, createTheme, Typography } from "@mui/material";
import "./table.css";
import { MaterialReactTable } from "material-react-table";

const OptionChain = ({ underlayingPrice, combinedData }) => {
  const combinedColumns = [
    {
      header: (
        <div
          style={{
            textAlign: "right",
            fontSize: "medium",
            color: "#785859",
          }}
        >
          Calls(CE)
        </div>
      ),

      columns: [
        {
          id: "cebidprice",
          header: <Typography>Bid Price</Typography>,
          accessorFn: (row) => (
            <div
              style={{
                backgroundColor: row.strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
              }}
            >
              {row.combinedCEPE.CE_bidprice || 0}
            </div>
          ),
        },
        {
          id: "ceaksprice",
          header: <Typography>Ask price</Typography>,
          accessorFn: (row) => (
            <div
              style={{
                backgroundColor: row.strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
              }}
            >
              {row.combinedCEPE.CE_askPrice || 0}
            </div>
          ),
        },
        {
          id: "ceio",
          header: <Typography>OI</Typography>,
          accessorFn: (rows) => (
            <div
              style={{
                backgroundColor: rows.strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
              }}
            >
              {rows.combinedCEPE.CE_openInterest ? rows.combinedCEPE.CE_openInterest.toFixed(2) : 0}
            </div>
          ),
        },
      ],
    },
    {
      header: <Box color={"#ffffef"}>.</Box>,
      width: "50",
      columns: [
        {
          header: "Strike",
          accessorFn: (rows) => rows.strikePrice,
        },
      ],
    },
    {
      header: <div style={{ color: "#039855", fontSize: "medium" }}>Puts(PE)</div>,
      columns: [
        {
          id: "pebidprice",
          header: <Typography>Bid Price</Typography>,
          accessorFn: (rows) => (
            <div
              style={{
                backgroundColor: rows.strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
              }}
            >
              {rows.combinedCEPE.PE_bidprice || 0}
            </div>
          ),
        },
        {
          id: "peaskprice",
          header: <Typography>Ask price</Typography>,
          accessorFn: (rows) => (
            <div
              style={{
                backgroundColor: rows.strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
              }}
            >
              {rows.combinedCEPE.PE_askPrice || 0}
            </div>
          ),
        },
        {
          id: "peio",
          header: <Typography>OI</Typography>,
          accessorFn: (rows) => (
            <div
              style={{
                backgroundColor: rows.strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
              }}
            >
              {rows.combinedCEPE.PE_openInterest ? rows.combinedCEPE.PE_openInterest.toFixed(2) : 0}
            </div>
          ),
        },
      ],
    },
  ];
  const firstCol = combinedColumns[0];
  firstCol.headerCellProps = {
    sx: {
      backgroundColor: "lightblue",
    },
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff9800",
      },
      secondary: {
        main: "#00bcd4",
      },
    },
  });

  return (
    <Box className={"table-container"}>
      <ThemeProvider theme={theme}>
        <MaterialReactTable
          enableFullScreenToggle={false}
          columns={combinedColumns}
          data={combinedData}
          muiTableBodyRowProps={({ row }) => ({
            sx: {
              backgroundColor: "#EBFBFF",
            },
          })}
          enableDensityToggle={false}
          // positionGlobalFilter="right"
          enablePagination={false}
          initialState={{
            density: "compact",
          }}
          enableStickyHeader
          muiTableHeadCellProps={{
            align: "center",
          }}
        />
      </ThemeProvider>
    </Box>
  );
};

export default OptionChain;

/* */

// const data = [
//   {
//     name: {
//       firstName: "John",
//       lastName: "Doe",
//     },
//     address: "261 Erdman Ford",
//     city: "East Daphne",
//     state: "Kentucky",
//   },
//   {
//     name: {
//       firstName: "Jane",
//       lastName: "Doe",
//     },
//     address: "769 Dominic Grove",
//     city: "Columbus",
//     state: "Ohio",
//   },
//   {
//     name: {
//       firstName: "Joe",
//       lastName: "Doe",
//     },
//     address: "566 Brakus Inlet",
//     city: "South Linda",
//     state: "West Virginia",
//   },
//   {
//     name: {
//       firstName: "Kevin",
//       lastName: "Vandy",
//     },
//     address: "722 Emie Stream",
//     city: "Lincoln",
//     state: "Nebraska",
//   },
//   {
//     name: {
//       firstName: "Joshua",
//       lastName: "Rolluffs",
//     },
//     address: "32188 Larkin Turnpike",
//     city: "Omaha",
//     state: "Nebraska",
//   },
// ];
//  <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell
//                   colSpan={3}
//                   style={{ textAlign: "right", backgroundColor: "#FFF6F6", fontSize: "medium" }}
//                 >
//                   <b style={{ marginRight: "15px", color: "#785859" }}>CALLS (CE)</b>
//                 </TableCell>
//                 <TableCell></TableCell>
//                 <TableCell style={{ textAlign: "left", backgroundColor: "#f1fbf6" }} colSpan={3}>
//                   <b style={{ marginLeft: "15px", color: "#039855", fontSize: "medium" }}>
//                     PUTS (PE)
//                   </b>
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Bid Price</TableCell>
//                 <TableCell>Ask Price</TableCell>
//                 <TableCell>OI</TableCell>
//                 <TableCell>Strike Prices</TableCell>
//                 <TableCell>Bid Price</TableCell>
//                 <TableCell>Ask Price</TableCell>
//                 <TableCell>OI</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {callsData.map((call, index) => (
//                 <TableRow key={index}>
//                   <TableCell
//                     style={{
//                       backgroundColor: call.strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
//                     }}
//                   >
//                     {call.bidprice}
//                   </TableCell>

//                   <TableCell
//                     style={{
//                       backgroundColor: call.strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
//                     }}
//                   >
//                     {call.askPrice}
//                   </TableCell>
//                   <TableCell
//                     style={{
//                       backgroundColor: call.strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
//                     }}
//                   >
//                     <div>{call.openInterest.toFixed(2)}</div>
//                   </TableCell>
//                   <TableCell style={{ backgroundColor: "E9ECF0" }}>
//                     <div>
//                       <button style={{ width: "70px", padding: "3px", border: "none" }}>
//                         {call.strikePrice}
//                       </button>
//                     </div>
//                   </TableCell>
//                   <TableCell
//                     style={{
//                       backgroundColor: call.strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
//                     }}
//                   >
//                     {putsData[index] ? putsData[index].bidprice : 0}{" "}
//                   </TableCell>
//                   <TableCell
//                     style={{
//                       backgroundColor: call.strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
//                     }}
//                   >
//                     {putsData[index] ? putsData[index].askPrice : 0}
//                   </TableCell>
//                   <TableCell
//                     style={{
//                       backgroundColor: call.strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
//                     }}
//                   >
//                     {putsData[index] ? putsData[index].openInterest.toFixed(2) : 0}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
