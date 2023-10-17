import {
  Box,
  ThemeProvider,
  createTheme,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import "./table.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { allColumnView } from "Redux/OptionChainPage/ocAction";

const OptionChain = ({
  underlayingPrice,
  combinedData,
  CemaxOI,
  PeMaxOI,
  closeToStrikePrice,
}) => {
  const fontSize = useSelector((store) => store.OptionChainReducer.fontSize);
  const tableContainerRef = useRef(null);

  const {
    gamma,
    vega,
    theta,
    delta,
    volume,
    oiChange,
    oiChangePer,
    OI_lakh,
    bidprice,
    offerPrice,
    intrValFut,
    intrValSpot,
    timeValue,
    LTP,
    columnCount,
  } = useSelector((store) => store.OptionChainReducer);
  useEffect(() => {
    // Calculate the desired scroll positions (in pixels) to center the table content
    if (tableContainerRef.current) {
      const containerHeight = tableContainerRef.current.clientHeight;
      const containerWidth = tableContainerRef.current.clientWidth;
      const tableHeight = tableContainerRef.current.scrollHeight;
      const tableWidth = tableContainerRef.current.scrollWidth;

      const verticalScrollTo = Math.max(0, (tableHeight - containerHeight) / 2);
      const horizontalScrollTo = Math.max(0, (tableWidth - containerWidth) / 2);

      tableContainerRef.current.scrollTop = verticalScrollTo;
      tableContainerRef.current.scrollLeft = horizontalScrollTo;
    }
  }, [combinedData]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allColumnView());
  }, []);

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
        <div
          style={{ height: "100vh", overflow: "auto" }}
          ref={tableContainerRef}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={columnCount}
                  style={{
                    textAlign: "right",
                    backgroundColor: "#FFF6F6",
                    fontSize: "small",
                  }}
                >
                  <b style={{ marginRight: "15px", color: "#785859" }}>
                    CALLS{" "}
                  </b>
                </TableCell>
                <TableCell style={{ border: "none" }}></TableCell>
                <TableCell style={{ border: "none" }}></TableCell>
                <TableCell
                  style={{ textAlign: "left", backgroundColor: "#f1fbf6" }}
                  colSpan={columnCount}
                >
                  <b
                    style={{
                      marginLeft: "15px",
                      color: "#039855",
                      fontSize: "small",
                    }}
                  >
                    PUTS
                  </b>
                </TableCell>
              </TableRow>
              <TableRow>
                {gamma && <TableCell className="tbleHead">Gamma</TableCell>}
                {vega && <TableCell className="tbleHead">Vegga</TableCell>}
                {theta && <TableCell className="tbleHead">Thetta</TableCell>}
                {delta && <TableCell className="tbleHead">Delta</TableCell>}
                {volume && <TableCell className="tbleHead">Volume</TableCell>}
                {oiChange && (
                  <TableCell className="tbleHead">OI change</TableCell>
                )}
                {oiChangePer && (
                  <TableCell className="tbleHead">OI change %</TableCell>
                )}
                {OI_lakh && <TableCell className="tbleHead">OI Lakh</TableCell>}
                {bidprice && (
                  <TableCell className="tbleHead">Bid Price</TableCell>
                )}
                {offerPrice && (
                  <TableCell className="tbleHead">Offer Price</TableCell>
                )}
                {intrValFut && (
                  <TableCell className="tbleHead">Intr Value(Fut)</TableCell>
                )}
                {intrValSpot && (
                  <TableCell className="tbleHead">Intr Value(Spot)</TableCell>
                )}
                {timeValue && (
                  <TableCell className="tbleHead">Time Value</TableCell>
                )}
                {LTP && <TableCell className="tbleHead"> LTP</TableCell>}
                <TableCell className="tbleHead">Strike Prices</TableCell>
                <TableCell className="tbleHead">IV</TableCell>
                {LTP && <TableCell className="tbleHead">LTP</TableCell>}
                {timeValue && (
                  <TableCell className="tbleHead">Time Value</TableCell>
                )}
                {intrValSpot && (
                  <TableCell className="tbleHead">Intr Value(Spot)</TableCell>
                )}
                {intrValFut && (
                  <TableCell className="tbleHead">Intr Value(Fut)</TableCell>
                )}
                {offerPrice && (
                  <TableCell className="tbleHead">Offer Price</TableCell>
                )}
                {bidprice && (
                  <TableCell className="tbleHead">Bid Price</TableCell>
                )}
                {OI_lakh && <TableCell className="tbleHead">OI Lakh</TableCell>}
                {oiChangePer && (
                  <TableCell className="tbleHead">OI change %</TableCell>
                )}
                {oiChange && (
                  <TableCell className="tbleHead">OI change</TableCell>
                )}
                {volume && <TableCell className="tbleHead">Volume</TableCell>}
                {delta && <TableCell className="tbleHead">Delta</TableCell>}
                {theta && <TableCell className="tbleHead">Thetta</TableCell>}
                {vega && <TableCell className="tbleHead">Vegga</TableCell>}
                {gamma && <TableCell className="tbleHead">Gamma</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {combinedData.map((call, index) => {
                return (
                  <TableRow key={index} style={{ padding: "-5px" }}>
                    {gamma && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.cE_Gamma || 0}
                      </TableCell>
                    )}
                    {vega && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.cE_Vega || 0}
                      </TableCell>
                    )}
                    {theta && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.cE_Thetaa || 0}
                      </TableCell>
                    )}
                    {delta && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.cE_Delta || 0}
                      </TableCell>
                    )}
                    {volume && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.cE_totalTradedVolume || 0}
                      </TableCell>
                    )}
                    {oiChange && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.cE_changeinOpenInterest || 0}
                      </TableCell>
                    )}
                    {oiChangePer && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.cE_changeinOpenInterest || 0}
                      </TableCell>
                    )}
                    {OI_lakh && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "flex",
                            flexDirection: "row-reverse",
                            textAlign: "left",
                            backgroundColor:
                              call.cE_strikePrice !==
                              closeToStrikePrice.cE_strikePrice
                                ? call.cE_strikePrice < underlayingPrice
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
                                call.cE_strikePrice !==
                                closeToStrikePrice.cE_strikePrice
                                  ? call.cE_strikePrice < underlayingPrice
                                    ? "#fffee5"
                                    : "#f9f9f9"
                                  : "white",
                            }}
                          >
                            <Typography
                              fontSize={fontSize}
                              bgcolor={
                                call.cE_strikePrice !==
                                closeToStrikePrice.cE_strikePrice
                                  ? call.cE_strikePrice < underlayingPrice
                                    ? "#fffee5"
                                    : "#f9f9f9"
                                  : "white"
                              }
                            >
                              {call.cE_openInterest ? call.cE_openInterest : 0}
                            </Typography>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              width: `${
                                (call.cE_openInterest / CemaxOI) * 100
                              }%`,
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
                      </TableCell>
                    )}
                    {bidprice && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.cE_bidprice || 0}
                      </TableCell>
                    )}
                    {offerPrice && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.cE_offerPrice || 0}
                      </TableCell>
                    )}
                    {intrValFut && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.cE_offerPrice || 0}
                      </TableCell>
                    )}
                    {intrValSpot && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.cE_offerPrice || 0}
                      </TableCell>
                    )}
                    {timeValue && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.cE_offerPrice || 0}
                      </TableCell>
                    )}
                    {LTP && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.cE_strikePrice !==
                            closeToStrikePrice.cE_strikePrice
                              ? call.cE_strikePrice < underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.cE_lastPrice || 0}
                      </TableCell>
                    )}
                    <TableCell style={{ backgroundColor: "E9ECF0" }}>
                      <button
                        style={{
                          fontSize: fontSize,

                          width: "70px",
                          padding: "3px",
                          border: "none",
                        }}
                      >
                        {call.cE_strikePrice}
                      </button>
                    </TableCell>
                    <TableCell style={{ backgroundColor: "E9ECF0" }}>
                      <button
                        style={{
                          fontSize: fontSize,
                          width: "70px",
                          padding: "3px",
                          border: "none",
                        }}
                      >
                        {call.cE_impliedVolatility}
                      </button>
                    </TableCell>
                    {LTP && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.pE_lastPrice}
                      </TableCell>
                    )}
                    {timeValue && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {/* {call.pE_askPrice} */}0
                      </TableCell>
                    )}
                    {intrValSpot && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {/* {call.pE_openInterest} */}0
                      </TableCell>
                    )}
                    {intrValFut && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {/* {call.pE_openInterest} */}0
                      </TableCell>
                    )}{" "}
                    {offerPrice && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {/* {call.pE_openInterest} */}0
                      </TableCell>
                    )}{" "}
                    {bidprice && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.pE_bidprice}
                      </TableCell>
                    )}{" "}
                    {OI_lakh && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            backgroundColor:
                              call.pE_strikePrice !==
                              closeToStrikePrice.pE_strikePrice
                                ? call.pE_strikePrice > underlayingPrice
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
                              width: `${
                                (call.pE_openInterest / PeMaxOI) * 100
                              }%`,
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
                                call.pE_strikePrice !==
                                closeToStrikePrice.pE_strikePrice
                                  ? call.pE_strikePrice > underlayingPrice
                                    ? "#fffee5"
                                    : "#f9f9f9"
                                  : "white",
                              textAlign: "right",
                              marginLeft: "160px",
                            }}
                          >
                            <Typography fontSize={fontSize}>
                              {call.pE_openInterest ? call.pE_openInterest : 0}
                            </Typography>
                          </div>
                        </div>
                      </TableCell>
                    )}
                    {oiChangePer && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {/* {call.pE_bidprice} */}0
                      </TableCell>
                    )}
                    {oiChange && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.pE_changeinOpenInterest}
                      </TableCell>
                    )}
                    {volume && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.pE_totalTradedVolume}
                      </TableCell>
                    )}
                    {delta && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.pE_Delta}
                      </TableCell>
                    )}
                    {theta && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.pE_Thetaa}
                      </TableCell>
                    )}
                    {vega && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.pE_Vega}
                      </TableCell>
                    )}
                    {gamma && (
                      <TableCell
                        style={{
                          backgroundColor:
                            call.pE_strikePrice !==
                            closeToStrikePrice.pE_strikePrice
                              ? call.pE_strikePrice > underlayingPrice
                                ? "#fffee5"
                                : "#f9f9f9"
                              : "white",
                          fontSize: fontSize,
                        }}
                      >
                        {call.pE_Gamma}
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </ThemeProvider>
    </Box>
  );
};

export default OptionChain;
{
  /* <MaterialReactTable
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
        /> */
}
// const combinedColumns = [
//   {
//     header: (
//       <div
//         style={{
//           textAlign: "right",
//           fontSize: "medium",
//           color: "#785859",
//         }}
//       >
//         Calls
//       </div>
//     ),

//     //
//     columns: [
//       {
//         id: "ceGamma",
//         header: <Typography>Gamma</Typography>,
//         accessorFn: (row) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   row.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
//                     ? row.cE_strikePrice < underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//               }}
//             >
//               <Typography fontSize={fontSize}>{row.cE_Gamma || 0}</Typography>
//             </div>
//           );
//         },
//       },
//       {
//         id: "ceVegga",
//         header: <Typography>Vega</Typography>,
//         accessorFn: (row) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   row.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
//                     ? row.cE_strikePrice < underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//               }}
//             >
//               <Typography fontSize={fontSize}>{row.cE_Vega || 0}</Typography>
//             </div>
//           );
//         },
//       },
//       {
//         id: "ceTheta",
//         header: <Typography>Theta</Typography>,
//         accessorFn: (row) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   row.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
//                     ? row.cE_strikePrice < underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//               }}
//             >
//               <Typography fontSize={fontSize}>{row.cE_Thetaa || 0}</Typography>
//             </div>
//           );
//         },
//       },
//       {
//         id: "ceDelta",
//         header: <Typography>Delta</Typography>,
//         accessorFn: (row) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   row.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
//                     ? row.cE_strikePrice < underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//               }}
//             >
//               <Typography fontSize={fontSize}>{row.cE_Delta || 0}</Typography>
//             </div>
//           );
//         },
//       },

//       {
//         id: "ceVolume",
//         header: <Typography>Volume</Typography>,
//         accessorFn: (row) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   row.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
//                     ? row.cE_strikePrice < underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//               }}
//             >
//               <Typography fontSize={fontSize}>{row.cE_totalTradedVolume || 0}</Typography>
//             </div>
//           );
//         },
//       },
//       {
//         id: "ceOichange",
//         header: <Typography>OI change</Typography>,
//         accessorFn: (row) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   row.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
//                     ? row.cE_strikePrice < underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//               }}
//             >
//               <Typography fontSize={fontSize}>{row.cE_changeinOpenInterest || 0}</Typography>
//             </div>
//           );
//         },
//       },
//       {
//         id: "ceOichangepercent",
//         header: <Typography>OI Change %</Typography>,
//       },
//       {
//         id: "ceio",
//         header: <Typography>OI-Lakh</Typography>,
//         accessorFn: (rows) => (
//           <div
//             style={{
//               position: "relative",
//               display: "flex",
//               flexDirection: "row-reverse",
//               textAlign: "left",
//               backgroundColor:
//                 rows.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
//                   ? rows.cE_strikePrice < underlayingPrice
//                     ? "#fffee5"
//                     : "#f9f9f9"
//                   : "white",
//             }}
//           >
//             <div
//               style={{
//                 textAlign: "left",
//                 marginRight: "170px",
//                 backgroundColor:
//                   rows.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
//                     ? rows.cE_strikePrice < underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//               }}
//             >
//               <Typography
//                 fontSize={fontSize}
//                 bgcolor={
//                   rows.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
//                     ? rows.cE_strikePrice < underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white"
//                 }
//               >
//                 {rows.cE_openInterest ? rows.cE_openInterest : 0}
//               </Typography>
//             </div>
//             <div
//               style={{
//                 position: "absolute",
//                 width: `${(rows.cE_openInterest / CemaxOI) * 100}%`,
//                 backgroundColor: "red",
//                 color: "red",
//                 borderTopLeftRadius: "10px",
//                 borderBottomLeftRadius: "10px",
//                 opacity: "0.5",
//               }}
//             >
//               .
//             </div>
//           </div>
//         ),
//       },
//       {
//         id: "cebidprice",
//         header: <Typography>Bid Price</Typography>,
//         accessorFn: (row) => (
//           <div
//             style={{
//               backgroundColor:
//                 row.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
//                   ? row.cE_strikePrice < underlayingPrice
//                     ? "#fffee5"
//                     : "#f9f9f9"
//                   : "white",
//             }}
//           >
//             <Typography fontSize={fontSize}>{row.cE_bidprice || 0}</Typography>
//           </div>
//         ),
//       },
//       {
//         id: "ceOfferPrice",
//         header: <Typography>Offer Price</Typography>,
//       },
//       {
//         id: "ceIntrValFut",
//         header: <Typography>Intr Value(Fut)</Typography>,
//       },
//       {
//         id: "ceIntrValSpot",
//         header: <Typography>Intr Value(Spot)</Typography>,
//       },
//       {
//         id: "timeVal",
//         header: <Typography>Time Value</Typography>,
//       },
//       //

//       //
//       {
//         id: "ceLTP",
//         header: <Typography>LTP</Typography>,
//         accessorFn: (row) => (
//           <div
//             style={{
//               backgroundColor:
//                 row.cE_strikePrice !== closeToStrikePrice.cE_strikePrice
//                   ? row.cE_strikePrice < underlayingPrice
//                     ? "#fffee5"
//                     : "#f9f9f9"
//                   : "white",
//             }}
//           >
//             {row.cE_lastPrice}
//           </div>
//         ),
//       },
//     ],
//   },
//   //
//   {
//     header: <Box color={"#ffffef"}>.</Box>,
//     width: "50",
//     columns: [
//       {
//         header: "Strike",
//         accessorFn: (rows) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   rows.cE_strikePrice === closeToStrikePrice.cE_strikePrice ? "white" : "",
//               }}
//             >
//               <Typography fontSize={fontSize}>{rows.cE_strikePrice}</Typography>
//             </div>
//           );
//         },
//       },
//       {
//         header: "IV",
//         accessorFn: (rows) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   rows.cE_strikePrice === closeToStrikePrice.cE_strikePrice ? "white" : "",
//               }}
//             >
//               <Typography fontSize={fontSize}>{rows.cE_impliedVolatility}</Typography>
//             </div>
//           );
//         },
//       },
//     ],
//   },
//   //
//   {
//     header: <div style={{ color: "#039855", fontSize: "medium" }}>Puts</div>,
//     columns: [
//       {
//         id: "peLTP",
//         header: <Typography>LTP</Typography>,
//         accessorFn: (row) => (
//           <div
//             style={{
//               backgroundColor:
//                 row.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
//                   ? row.pE_strikePrice > underlayingPrice
//                     ? "#fffee5"
//                     : "#f9f9f9"
//                   : "white",
//             }}
//           >
//             {row.pE_lastPrice}
//           </div>
//         ),
//       },
//       {
//         id: "petimeVal",
//         header: <Typography>Time Value</Typography>,
//       },
//       {
//         id: "peIntrValSpot",
//         header: <Typography>Intr Value(Spot)</Typography>,
//       },
//       {
//         id: "peIntrValFut",
//         header: <Typography>Intr Value(Fut)</Typography>,
//       },
//       {
//         id: "peOfferPrice",
//         header: <Typography>Offer Price</Typography>,
//       },
//       {
//         id: "pebidprice",
//         header: <Typography>Bid Price</Typography>,
//         accessorFn: (rows) => (
//           <div
//             style={{
//               backgroundColor:
//                 rows.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
//                   ? rows.pE_strikePrice > underlayingPrice
//                     ? "#fffee5"
//                     : "#f9f9f9"
//                   : "white",
//             }}
//           >
//             <Typography fontSize={fontSize}>
//               <Typography fontSize={fontSize}>{rows.pE_bidprice || 0}</Typography>
//             </Typography>
//           </div>
//         ),
//       },
//       {
//         id: "peio",
//         header: <Typography>OI-Lakh</Typography>,
//         accessorFn: (rows) => (
//           <div
//             style={{
//               position: "relative",
//               backgroundColor:
//                 rows.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
//                   ? rows.pE_strikePrice > underlayingPrice
//                     ? "#fffee5"
//                     : "#f9f9f9"
//                   : "white",
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: `${(rows.pE_openInterest / PeMaxOI) * 100}%`,
//                 backgroundColor: "lightgreen",
//                 color: "lightgreen",
//                 borderTopRightRadius: "10px",
//                 borderBottomRightRadius: "10px",
//                 opacity: "0.5",
//               }}
//             >
//               .
//             </div>
//             <div
//               style={{
//                 backgroundColor:
//                   rows.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
//                     ? rows.pE_strikePrice > underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//                 textAlign: "right",
//                 // marginRight: "20px",
//               }}
//             >
//               <Typography fontSize={fontSize}>
//                 {rows.pE_openInterest ? rows.pE_openInterest : 0}
//               </Typography>
//             </div>
//           </div>
//         ),
//       },
//       {
//         id: "peOichangepercent",
//         header: <Typography>OI Change %</Typography>,
//       },
//       {
//         id: "peOichange",
//         header: <Typography>OI change</Typography>,
//         accessorFn: (row) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   row.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
//                     ? row.pE_strikePrice > underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//               }}
//             >
//               <Typography fontSize={fontSize}>{row.pE_changeinOpenInterest || 0}</Typography>
//             </div>
//           );
//         },
//       },
//       //
//       {
//         id: "peVolume",
//         header: <Typography>Volume</Typography>,
//         accessorFn: (row) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   row.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
//                     ? row.pE_strikePrice > underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//               }}
//             >
//               <Typography fontSize={fontSize}>{row.pE_totalTradedVolume || 0}</Typography>
//             </div>
//           );
//         },
//       },
//       {
//         id: "pePOP",
//         header: <Typography>POP</Typography>,
//       },
//       {
//         id: "pePCR",
//         header: <Typography>PCR</Typography>,
//       },
//       {
//         id: "peDelta",
//         header: <Typography>Delta</Typography>,
//         accessorFn: (row) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   row.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
//                     ? row.pE_strikePrice > underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//               }}
//             >
//               <Typography fontSize={fontSize}>{row.pE_Delta || 0}</Typography>
//             </div>
//           );
//         },
//       },
//       {
//         id: "peTheta",
//         header: <Typography>Theta</Typography>,
//         accessorFn: (row) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   row.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
//                     ? row.pE_strikePrice > underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//               }}
//             >
//               <Typography fontSize={fontSize}>{row.pE_Thetaa || 0}</Typography>
//             </div>
//           );
//         },
//       },
//       {
//         id: "peVegga",
//         header: <Typography>Vega</Typography>,
//         accessorFn: (row) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   row.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
//                     ? row.pE_strikePrice > underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//               }}
//             >
//               <Typography fontSize={fontSize}>{row.pE_Vegga || 0}</Typography>
//             </div>
//           );
//         },
//       },
//       {
//         id: "peGamma",
//         header: <Typography>Gamma</Typography>,
//         accessorFn: (row) => {
//           return (
//             <div
//               style={{
//                 backgroundColor:
//                   row.pE_strikePrice !== closeToStrikePrice.pE_strikePrice
//                     ? row.pE_strikePrice > underlayingPrice
//                       ? "#fffee5"
//                       : "#f9f9f9"
//                     : "white",
//               }}
//             >
//               <Typography fontSize={fontSize}>{row.pE_Gamma || 0}</Typography>
//             </div>
//           );
//         },
//       },
//     ],
//   },
// ];

// ///
// const firstCol = combinedColumns[0];
// firstCol.headerCellProps = {
//   sx: {
//     backgroundColor: "lightblue",
//   },
// };
