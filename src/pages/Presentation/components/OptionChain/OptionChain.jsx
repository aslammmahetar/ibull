import { Box, ThemeProvider, createTheme } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import "./table.css";

const OptionChain = ({ data }) => {
  const combinedColumns = [
    {
      accessorKey: "type",
      header: "Type",
      size: 50,
      muiTableBodyCellProps: ({ cell }) => ({
        sx: {
          color: cell.getValue() === "CE" || "PE" ? "red" : undefined,
          fontWeight: cell.column.id === "age" && cell.getValue() > 40 ? "700" : "400",
        },
      }),
    },
    {
      accessorKey: "strikePrice",
      header: "Strike Price",
      size: 50,
      align: "center",
    },
    {
      accessorKey: "expiryDate",
      header: "Expiry Date",
      size: 50,
    },
    {
      accessorKey: "underlying",
      header: "CE Underlying",
      size: 50,
    },
    {
      accessorKey: "underlying",
      header: "PE Underlying",
      size: 50,
    },
    {
      accessorKey: "askPrice",
      header: "Ask Price",
      size: 50,
    },
    {
      accessorKey: "askQty",
      header: "Ask Quantity",
      size: 50,
    },
    {
      accessorKey: "bidprice",
      header: "Bid Price",
      size: 50,
    },
    {
      accessorKey: "bidQty",
      header: "Bid Quontity",
      size: 50,
    },
    {
      accessorKey: "totalSellQuantity",
      header: "Total sell quantitity",
      size: 50,
    },
    {
      accessorKey: "totalBuyQuantity",
      header: "Total Buy quantitity",
      size: 50,
    },
    {
      accessorKey: "pChange",
      header: "Price Change",
      size: 50,
    },
    {
      accessorKey: "change",
      header: "Change",
      size: 50,
    },
    {
      accessorKey: "lastPrice",
      header: "Last Price",
      size: 50,
    },
    {
      accessorKey: "impliedVolatility",
      header: "Implied Volatility",
      size: 50,
    },
    {
      accessorKey: "totalTradedVolume",
      header: "Total Trade Volume",
      size: 50,
      Cell: ({ cell }) => {
        return (
          <div style={{ display: "flex", justifyContent:"space-between" }}>
            <div
              style={{
                display: "block",
                width: `${cell.getValue()}%`,
                backgroundColor: "red",
                textAlign: "center",
                color: cell.getValue() === 0 ? "white" : "red",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              .
            </div>
            <p>{cell.getValue()}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "pchangeinOpenInterest",
      header: "P Change Open Interest",
      size: 50,
    },
    {
      accessorKey: "changeinOpenInterest",
      header: "Change in Open Interest",
      size: 50,
    },
    {
      accessorKey: "openInterest",
      header: "Open Interest",
      size: 50,
    },
    {
      accessorKey: "identifier",
      header: "Indentifier",
      size: 50,
    },
    {
      accessorKey: "underlying",
      header: "Underlying",
      size: 50,
    },
  ];
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
          muiTableBodyRowProps={({ row }) => ({
            sx: {
              backgroundColor: row.getValue("type") === "CE" ? "#F9F4DC" : "#EBFBFF",
            },
          })}
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
        />
      </ThemeProvider>
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
