import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ThemeProvider,
  createTheme,
  TableContainer,
} from "@mui/material";
import "./table.css";
import { MaterialReactTable } from "material-react-table";

const OptionChain = ({ callsData, putsData, underlayingPrice, combinedData }) => {
  // console.log(combinedData);
  const data = [
    {
      strikePrice: 31500,
      expiryDate: "28-Sep-2023",
      PE: {
        strikePrice: 31500,
        expiryDate: "28-Sep-2023",
        underlying: "BANKNIFTY",
        identifier: "OPTIDXBANKNIFTY28-09-2023PE31500.00",
        openInterest: 0,
        changeinOpenInterest: 0,
        pchangeinOpenInterest: 0,
        totalTradedVolume: 0,
        impliedVolatility: 0,
        lastPrice: 0,
        change: 0,
        pChange: 0,
        totalBuyQuantity: 1875,
        totalSellQuantity: 0,
        bidQty: 990,
        bidprice: 3.05,
        askQty: 0,
        askPrice: 0,
        underlyingValue: 44648.1,
      },
      CE: {
        strikePrice: 31500,
        expiryDate: "28-Sep-2023",
        underlying: "BANKNIFTY",
        identifier: "OPTIDXBANKNIFTY28-09-2023CE31500.00",
        openInterest: 0,
        changeinOpenInterest: 0,
        pchangeinOpenInterest: 0,
        totalTradedVolume: 0,
        impliedVolatility: 0,
        lastPrice: 0,
        change: 0,
        pChange: 0,
        totalBuyQuantity: 2550,
        totalSellQuantity: 900,
        bidQty: 750,
        bidprice: 12350.95,
        askQty: 885,
        askPrice: 14463.35,
        underlyingValue: 44648.1,
      },
    },
    {
      strikePrice: 33000,
      expiryDate: "28-Sep-2023",
      CE: {
        strikePrice: 33000,
        expiryDate: "28-Sep-2023",
        underlying: "BANKNIFTY",
        identifier: "OPTIDXBANKNIFTY28-09-2023CE33000.00",
        openInterest: 0,
        changeinOpenInterest: 0,
        pchangeinOpenInterest: 0,
        totalTradedVolume: 0,
        impliedVolatility: 0,
        lastPrice: 0,
        change: 0,
        pChange: 0,
        totalBuyQuantity: 2550,
        totalSellQuantity: 885,
        bidQty: 750,
        bidprice: 11235.05,
        askQty: 885,
        askPrice: 12894.35,
        underlyingValue: 44648.1,
      },
      PE: {
        strikePrice: 33000,
        expiryDate: "28-Sep-2023",
        underlying: "BANKNIFTY",
        identifier: "OPTIDXBANKNIFTY28-09-2023PE33000.00",
        openInterest: 163,
        changeinOpenInterest: 0,
        pchangeinOpenInterest: 0,
        totalTradedVolume: 0,
        impliedVolatility: 0,
        lastPrice: 0,
        change: 0,
        pChange: 0,
        totalBuyQuantity: 3855,
        totalSellQuantity: 0,
        bidQty: 2970,
        bidprice: 3.05,
        askQty: 0,
        askPrice: 0,
        underlyingValue: 44648.1,
      },
    },
    {
      strikePrice: 33000,
      expiryDate: "28-Dec-2023",
      PE: {
        strikePrice: 33000,
        expiryDate: "28-Dec-2023",
        underlying: "BANKNIFTY",
        identifier: "OPTIDXBANKNIFTY28-12-2023PE33000.00",
        openInterest: 1.6666666666666667,
        changeinOpenInterest: 0,
        pchangeinOpenInterest: 0,
        totalTradedVolume: 0,
        impliedVolatility: 0,
        lastPrice: 0,
        change: 0,
        pChange: 0,
        totalBuyQuantity: 420,
        totalSellQuantity: 0,
        bidQty: 210,
        bidprice: 0.85,
        askQty: 0,
        askPrice: 0,
        underlyingValue: 44648.1,
      },
    },
    {
      strikePrice: 34500,
      expiryDate: "28-Sep-2023",
      CE: {
        strikePrice: 34500,
        expiryDate: "28-Sep-2023",
        underlying: "BANKNIFTY",
        identifier: "OPTIDXBANKNIFTY28-09-2023CE34500.00",
        openInterest: 63.333333333333336,
        changeinOpenInterest: 0,
        pchangeinOpenInterest: 0,
        totalTradedVolume: 0,
        impliedVolatility: 0,
        lastPrice: 0,
        change: 0,
        pChange: 0,
        totalBuyQuantity: 2535,
        totalSellQuantity: 885,
        bidQty: 750,
        bidprice: 9678.75,
        askQty: 885,
        askPrice: 11334.6,
        underlyingValue: 44648.1,
      },
      PE: {
        strikePrice: 34500,
        expiryDate: "28-Sep-2023",
        underlying: "BANKNIFTY",
        identifier: "OPTIDXBANKNIFTY28-09-2023PE34500.00",
        openInterest: 8.333333333333334,
        changeinOpenInterest: 0,
        pchangeinOpenInterest: 0,
        totalTradedVolume: 0,
        impliedVolatility: 0,
        lastPrice: 0,
        change: 0,
        pChange: 0,
        totalBuyQuantity: 2685,
        totalSellQuantity: 0,
        bidQty: 1800,
        bidprice: 3.2,
        askQty: 0,
        askPrice: 0,
        underlyingValue: 44648.1,
      },
    },
  ];
  const combinedColumns = [
    {
      header: "Calls(CE)",
      columns: [
        {
          header: "Bid Price",
          accessorFn: (row) => row.CE.bidprice,
        },
      ],
    },
    {
      header: "Puts (PE)",
      columns: [
        {
          header: "Bid Price",
          accessorFn: (row) => row.PE.bidprice,
        },
      ],
    },
  ];
  console.log(callsData);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff9800",
      },
      background: {
        default: "#ffffef",
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
          data={data}
          enableDensityToggle={false}
          // positionGlobalFilter="right"
          initialState={{
            pagination: {
              pageSize: 25,
              pageIndex: 0,
            },
            density: "compact",
          }}
          enableStickyHeader
        ></MaterialReactTable>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={3}
                  style={{ textAlign: "right", backgroundColor: "#FFF6F6", fontSize: "medium" }}
                >
                  <b style={{ marginRight: "15px", color: "#785859" }}>CALLS (CE)</b>
                </TableCell>
                <TableCell></TableCell>
                <TableCell style={{ textAlign: "left", backgroundColor: "#f1fbf6" }} colSpan={3}>
                  <b style={{ marginLeft: "15px", color: "#039855", fontSize: "medium" }}>
                    PUTS (PE)
                  </b>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bid Price</TableCell>
                <TableCell>Ask Price</TableCell>
                <TableCell>OI</TableCell>
                <TableCell>Strike Prices</TableCell>
                <TableCell>Bid Price</TableCell>
                <TableCell>Ask Price</TableCell>
                <TableCell>OI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {callsData.map((call, index) => (
                <TableRow key={index}>
                  <TableCell
                    style={{
                      backgroundColor: call.strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
                    }}
                  >
                    {call.bidprice}
                  </TableCell>

                  <TableCell
                    style={{
                      backgroundColor: call.strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
                    }}
                  >
                    {call.askPrice}
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: call.strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
                    }}
                  >
                    <div>{call.openInterest.toFixed(2)}</div>
                  </TableCell>
                  <TableCell style={{ backgroundColor: "E9ECF0" }}>
                    <div>
                      <button style={{ width: "70px", padding: "3px", border: "none" }}>
                        {call.strikePrice}
                      </button>
                    </div>
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: call.strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
                    }}
                  >
                    {putsData[index] ? putsData[index].bidprice : 0}{" "}
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: call.strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
                    }}
                  >
                    {putsData[index] ? putsData[index].askPrice : 0}
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: call.strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
                    }}
                  >
                    {putsData[index] ? putsData[index].openInterest.toFixed(2) : 0}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
