import { Box, ThemeProvider, createTheme, Typography } from "@mui/material";
import "./table.css";
import { MaterialReactTable } from "material-react-table";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

const OptionChain = ({ underlayingPrice, combinedData, CemaxOI, PeMaxOI, closeToStrikePrice }) => {
  const fontSize = useSelector((store) => store.reducer.fontSize);
  const tableContainerRef = useRef(null);
  console.log(combinedData);

  useEffect(() => {
    if (tableContainerRef.current) {
      const tableContainer = tableContainerRef.current;

      // Calculate the desired scrollTop value to scroll to the center
      const tableCenterY = tableContainer.scrollHeight / 2;

      // Set the scrollTop property to scroll to the center
      tableContainer.scrollTop = tableCenterY;
    }
  }, []);

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
          Calls
        </div>
      ),

      //
      columns: [
        {
          id: "ceGamma",
          header: <Typography>Gamma</Typography>,
        },
        {
          id: "ceVegga",
          header: <Typography>Vega</Typography>,
        },
        {
          id: "ceTheta",
          header: <Typography>Theta</Typography>,
        },
        {
          id: "ceDelta",
          header: <Typography>Delta</Typography>,
        },
        {
          id: "cePCR",
          header: <Typography>PCR</Typography>,
        },
        {
          id: "cePOP",
          header: <Typography>POP</Typography>,
        },
        {
          id: "ceVolume",
          header: <Typography>Volume</Typography>,
          accessorFn: (row) => {
            return (
              <div
                style={{
                  backgroundColor:
                    row.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
                      ? row.cE_strikePrice < underlayingPrice
                        ? "#fffee5"
                        : "#f9f9f9"
                      : "white",
                }}
              >
                <Typography fontSize={fontSize}>{row.cE_totalTradedVolume || 0}</Typography>
              </div>
            );
          },
        },
        {
          id: "ceOichange",
          header: <Typography>OI change</Typography>,
          accessorFn: (row) => {
            return (
              <div
                style={{
                  backgroundColor:
                    row.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
                      ? row.cE_strikePrice < underlayingPrice
                        ? "#fffee5"
                        : "#f9f9f9"
                      : "white",
                }}
              >
                <Typography fontSize={fontSize}>{row.cE_changeinOpenInterest || 0}</Typography>
              </div>
            );
          },
        },
        {
          id: "ceOichangepercent",
          header: <Typography>OI Change %</Typography>,
        },
        {
          id: "ceio",
          header: <Typography>OI-Lakh</Typography>,
          accessorFn: (rows) => (
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row-reverse",
                textAlign: "left",
                backgroundColor:
                  rows.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
                    ? rows.cE_strikePrice < underlayingPrice
                      ? "#fffee5"
                      : "#f9f9f9"
                    : "white",
              }}
            >
              <div
                style={{
                  textAlign: "left",
                  marginRight: "170px",
                  backgroundColor:
                    rows.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
                      ? rows.cE_strikePrice < underlayingPrice
                        ? "#fffee5"
                        : "#f9f9f9"
                      : "white",
                }}
              >
                <Typography
                  fontSize={fontSize}
                  bgcolor={
                    rows.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
                      ? rows.cE_strikePrice < underlayingPrice
                        ? "#fffee5"
                        : "#f9f9f9"
                      : "white"
                  }
                >
                  {rows.cE_openInterest ? rows.cE_openInterest : 0}
                </Typography>
              </div>
              <div
                style={{
                  position: "absolute",
                  width: `${(rows.cE_openInterest / CemaxOI) * 100}%`,
                  backgroundColor: "red",
                  color: "red",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  opacity: "0.5",
                }}
              >
                .
              </div>
            </div>
          ),
        },
        {
          id: "cebidprice",
          header: <Typography>Bid Price</Typography>,
          accessorFn: (row) => (
            <div
              style={{
                backgroundColor:
                  row.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
                    ? row.cE_strikePrice < underlayingPrice
                      ? "#fffee5"
                      : "#f9f9f9"
                    : "white",
              }}
            >
              <Typography fontSize={fontSize}>{row.cE_bidprice || 0}</Typography>
            </div>
          ),
        },
        {
          id: "ceOfferPrice",
          header: <Typography>Offer Price</Typography>,
        },
        {
          id: "ceIntrValFut",
          header: <Typography>Intr Value(Fut)</Typography>,
        },
        {
          id: "ceIntrValSpot",
          header: <Typography>Intr Value(Spot)</Typography>,
        },
        {
          id: "timeVal",
          header: <Typography>Time Value</Typography>,
        },
        //

        //
        {
          id: "ceLTP",
          header: <Typography>LTP</Typography>,
          accessorFn: (row) => (
            <div
              style={{
                backgroundColor:
                  row.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
                    ? row.cE_strikePrice < underlayingPrice
                      ? "#fffee5"
                      : "#f9f9f9"
                    : "white",
              }}
            >
              {row.cE_lastPrice}
            </div>
          ),
        },
      ],
    },
    //
    {
      header: <Box color={"#ffffef"}>.</Box>,
      width: "50",
      columns: [
        {
          header: "Strike",
          accessorFn: (rows) => {
            return (
              <div
                style={{
                  backgroundColor:
                    rows.cE_strikePrice === closeToStrikePrice.cE_strikePrice ? "white" : "",
                }}
              >
                <Typography fontSize={fontSize}>{rows.cE_strikePrice}</Typography>
              </div>
            );
          },
        },
        {
          header: "IV",
          accessorFn: (rows) => {
            return (
              <div
                style={{
                  backgroundColor:
                    rows.cE_strikePrice === closeToStrikePrice.cE_strikePrice ? "white" : "",
                }}
              >
                <Typography fontSize={fontSize}>{rows.cE_impliedVolatility}</Typography>
              </div>
            );
          },
        },
      ],
    },
    //
    {
      header: <div style={{ color: "#039855", fontSize: "medium" }}>Puts</div>,
      columns: [
        {
          id: "peLTP",
          header: <Typography>LTP</Typography>,
          accessorFn: (row) => (
            <div
              style={{
                backgroundColor:
                  row.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
                    ? row.pE_strikePrice > underlayingPrice
                      ? "#fffee5"
                      : "#f9f9f9"
                    : "white",
              }}
            >
              {row.pE_lastPrice}
            </div>
          ),
        },
        {
          id: "petimeVal",
          header: <Typography>Time Value</Typography>,
        },
        {
          id: "peIntrValSpot",
          header: <Typography>Intr Value(Spot)</Typography>,
        },
        {
          id: "peIntrValFut",
          header: <Typography>Intr Value(Fut)</Typography>,
        },
        {
          id: "peOfferPrice",
          header: <Typography>Offer Price</Typography>,
        },
        {
          id: "pebidprice",
          header: <Typography>Bid Price</Typography>,
          accessorFn: (rows) => (
            <div
              style={{
                backgroundColor:
                  rows.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
                    ? rows.pE_strikePrice > underlayingPrice
                      ? "#fffee5"
                      : "#f9f9f9"
                    : "white",
              }}
            >
              <Typography fontSize={fontSize}>
                <Typography fontSize={fontSize}>{rows.pE_bidprice || 0}</Typography>
              </Typography>
            </div>
          ),
        },
        {
          id: "peio",
          header: <Typography>OI-Lakh</Typography>,
          accessorFn: (rows) => (
            <div
              style={{
                position: "relative",
                backgroundColor:
                  rows.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
                    ? rows.pE_strikePrice > underlayingPrice
                      ? "#fffee5"
                      : "#f9f9f9"
                    : "white",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: `${(rows.pE_openInterest / PeMaxOI) * 100}%`,
                  backgroundColor: "lightgreen",
                  color: "lightgreen",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  opacity: "0.5",
                }}
              >
                .
              </div>
              <div
                style={{
                  backgroundColor:
                    rows.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
                      ? rows.pE_strikePrice > underlayingPrice
                        ? "#fffee5"
                        : "#f9f9f9"
                      : "white",
                  textAlign: "right",
                  // marginRight: "20px",
                }}
              >
                <Typography fontSize={fontSize}>
                  {rows.pE_openInterest ? rows.pE_openInterest : 0}
                </Typography>
              </div>
            </div>
          ),
        },
        {
          id: "peOichangepercent",
          header: <Typography>OI Change %</Typography>,
        },
        {
          id: "peOichange",
          header: <Typography>OI change</Typography>,
          accessorFn: (row) => {
            return (
              <div
                style={{
                  backgroundColor:
                    row.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
                      ? row.cE_strikePrice < underlayingPrice
                        ? "#fffee5"
                        : "#f9f9f9"
                      : "white",
                }}
              >
                <Typography fontSize={fontSize}>{row.pE_changeinOpenInterest || 0}</Typography>
              </div>
            );
          },
        },
        //
        {
          id: "peVolume",
          header: <Typography>Volume</Typography>,
          accessorFn: (row) => {
            return (
              <div
                style={{
                  backgroundColor:
                    row.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
                      ? row.pE_strikePrice > underlayingPrice
                        ? "#fffee5"
                        : "#f9f9f9"
                      : "white",
                }}
              >
                <Typography fontSize={fontSize}>{row.pE_totalTradedVolume || 0}</Typography>
              </div>
            );
          },
        },
        {
          id: "pePOP",
          header: <Typography>POP</Typography>,
        },
        {
          id: "pePCR",
          header: <Typography>PCR</Typography>,
        },
        {
          id: "peDelta",
          header: <Typography>Delta</Typography>,
        },
        {
          id: "peTheta",
          header: <Typography>Theta</Typography>,
        },
        {
          id: "peVegga",
          header: <Typography>Vega</Typography>,
        },
        {
          id: "peGamma",
          header: <Typography>Gamma</Typography>,
        },
      ],
    },
  ];

  ///
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

  ///
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
          enablePagination={false}
          initialState={{
            density: "compact",
          }}
          enableColumnFilters={false}
          enableStickyHeader
          enableGlobalFilter={false}
          muiTableHeadCellProps={{
            align: "center",
          }}
        />
      </ThemeProvider>
      {/* <TableContainer component={Paper}>
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
            {combinedData.map((call, index) => (
              <TableRow key={index}>
                <TableCell
                  style={{
                    backgroundColor: call.cE_strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
                  }}
                >
                  {call.bidprice}
                </TableCell>

                <TableCell
                  style={{
                    backgroundColor: call.cE_strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
                  }}
                >
                  {call.cE_askPrice}
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: call.cE_strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
                  }}
                >
                  <div>{call.cE_openInterest}</div>
                </TableCell>
                <TableCell style={{ backgroundColor: "E9ECF0" }}>
                  <div>
                    <button style={{ width: "70px", padding: "3px", border: "none" }}>
                      {call.cE_strikePrice}
                    </button>
                  </div>
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: call.pE_strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
                  }}
                >
                  {call.pE_bidprice}
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: call.pE_strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
                  }}
                >
                  {call.pE_askPrice}
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: call.pE_strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
                  }}
                >
                  {call.pE_openInterest}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </Box>
  );
};

export default OptionChain;

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
