import { ThemeProvider } from "@emotion/react";
import { Box, Typography, createTheme } from "@mui/material";
import { getReq } from "Redux/action";
import { MaterialReactTable } from "material-react-table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MSDrawerTable = ({ setSelectedExpiryDate, expiryDates, selectedExpiryDate }) => {
  const [underlayingPrice, setUnderlayingPrice] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [callMax, setCallmaxOI] = useState(0);
  const [putMax, setPutmaxOI] = useState(0);

  const store = useSelector((store) => store.reducer.data);
  console.log(store);
  const ulValue = useSelector((store) => store.reducer.underlyingValue);
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
    console.log(filtered2);
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
    // console.log(filtered);
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
              display: "flex",
              padding: 7,
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              backgroundColor: rows.strikePrice < underlayingPrice ? "#fffee5" : "#f9f9f9",
            }}
          >
            <p>{rows.combinedCEPE.CE_openInterest ? rows.combinedCEPE.CE_openInterest : 0}</p>
            <input type="checkbox" style={{ zIndex: 1, cursor: "pointer" }} />
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
      size: 40,
    },
    {
      header: "Strike",
      accessorFn: (rows) => rows.strikePrice,
      size: 40,
    },
    {
      id: "peio",
      header: <Typography>OI</Typography>,
      size: 40,
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
              // border: "solid black 1px",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
            }}
          >
            <input type="checkbox" style={{ zIndex: 1, cursor: "pointer" }} />
            <p style={{ zIndex: 1 }}>
              {rows.combinedCEPE.CE_openInterest ? rows.combinedCEPE.CE_openInterest : 0}
            </p>
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

export default MSDrawerTable;
