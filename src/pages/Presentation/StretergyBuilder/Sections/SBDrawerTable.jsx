import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import { getReq } from "Redux/action";
import { stretergyCreating } from "Redux/sbAction";
import { MaterialReactTable } from "material-react-table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SBDrawerTable = () => {
  var expiryDates = [
    "13-Sep-2023",
    "20-Sep-2023",
    "28-Sep-2023",
    "04-Oct-2023",
    "11-Oct-2023",
    "26-Oct-2023",
    "30-Nov-2023",
    "28-Dec-2023",
    "28-Mar-2024",
    "27-Jun-2024",
  ];
  const [underlayingPrice, setUnderlayingPrice] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedExpiryDate, setSelectedExpiryDate] = useState("");
  const [callMax, setCallmaxOI] = useState(0);
  const [putMax, setPutmaxOI] = useState(0);

  const store = useSelector((store) => store.reducer.data);
  const ulValue = useSelector((store) => store.reducer.underlyingValue);
  const stretergyCreated = useSelector((store) => store.sbReducer.stretergyCreated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReq);
    setData(store);
    setSelectedExpiryDate(expiryDates[0]);
    setUnderlayingPrice(ulValue);
  }, [ulValue]);

  useEffect(() => {
    //filteration by the exprydates
    const filtered2 =
      store.length > 0 ? store.filter((item) => item.expiryDate === selectedExpiryDate) : [];
    let CEmaxOI = -Infinity;
    let PEmaxOI = -Infinity;

    //getting maximum values of openInterests
    for (let el of filtered2) {
      if (CEmaxOI < el.combinedCEPE.CE_openInterest) {
        CEmaxOI = el.combinedCEPE.CE_openInterest;
      }
      if (PEmaxOI < el.combinedCEPE.PE_openInterest) {
        PEmaxOI = el.combinedCEPE.PE_openInterest;
      }
    }
    setCallmaxOI(CEmaxOI);
    setPutmaxOI(PEmaxOI);
    setFilteredData(filtered2);
  }, [data, selectedExpiryDate]);
  const combinedColumns = [
    {
      id: "ceio",
      header: <Typography>OI</Typography>,
      accessorFn: (rows) => (
        <div
          className="main"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row-reverse",
            textAlign: "left",
            backgroundColor: rows.strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
          }}
        >
          <div
            style={{
              textAlign: "left",
              marginRight: "60%",
              display: "flex",
              padding: 7,
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: rows.strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
            }}
          >
            <div>
              <p>{rows.combinedCEPE.CE_openInterest ? rows.combinedCEPE.CE_openInterest : 0}</p>
            </div>
            <div className="bAndC" style={{ marginLeft: 5, width: "20px" }}>
              <button
                style={{
                  padding: 2,
                  paddingLeft: 5,
                  paddingRight: 5,
                  border: "solid black 1px",
                  backgroundColor: "whitesmoke",
                  marginRight: 5,
                }}
                onClick={() => dispatch(stretergyCreating())}
              >
                B
              </button>
              <button
                style={{
                  padding: 2,
                  paddingLeft: 5,
                  paddingRight: 5,
                  border: "solid black 1px",
                  backgroundColor: "whitesmoke",
                }}
              >
                S
              </button>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              width: `${(rows.combinedCEPE.CE_openInterest / callMax) * 100}%`,
              backgroundColor: "red",
              color: "red",
              // margin: "auto",
              marginTop: 6,
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
      header: "Strike",
      accessorFn: (rows) => rows.strikePrice,
    },
    {
      id: "peio",
      header: <Typography>OI</Typography>,
      accessorFn: (rows) => (
        <div
          className="main"
          style={{
            position: "relative",
            backgroundColor: rows.strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
            padding: 7,
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${(rows.combinedCEPE.CE_openInterest / putMax) * 100}%`,
              backgroundColor: "lightgreen",
              color: "lightgreen",
              marginTop: 6,
              zIndex: 0,
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              opacity: "0.5",
            }}
          >
            .
          </div>
          <div
            style={{
              // backgroundColor: rows.strikePrice > underlayingPrice ? "#fffee5" : "#f9f9f9",
              textAlign: "right",
              marginRight: "20%",
              width: "50%",
              // border: "solid black 1px",
              display: "flex",
              alignItems: "center",
              opacity: 0.5,
              padding: 2,
            }}
          >
            <div className="bAndC" style={{ marginLeft: 5, width: "20px" }}>
              <button
                style={{
                  padding: 2,
                  paddingLeft: 5,
                  paddingRight: 5,
                  border: "solid black 1px",
                  backgroundColor: "whitesmoke",
                  marginRight: 5,
                  zIndex: 999,
                }}
              >
                B
              </button>
              <button
                style={{
                  padding: 2,
                  paddingLeft: 5,
                  paddingRight: 5,
                  border: "solid black 1px",
                  backgroundColor: "whitesmoke",
                }}
              >
                S
              </button>
            </div>
            <div style={{ marginLeft: "30%" }}>
              <p>{rows.combinedCEPE.CE_openInterest ? rows.combinedCEPE.CE_openInterest : 0}</p>
            </div>
          </div>
        </div>
      ),
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
          data={filteredData}
          muiTableBodyRowProps={({ row }) => ({
            sx: {
              backgroundColor: "#EBFBFF",
            },
          })}
          enableHiding={false}
          enableTopToolbar={false}
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

export default SBDrawerTable;
