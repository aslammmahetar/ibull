import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import GlobalSettingTab from "./GlobalSettingTab";
import ColumnView from "./ColumnView";
import { useDispatch, useSelector } from "react-redux";
import { ltpView } from "Redux/OptionChainPage/ocAction";
import { greekView } from "Redux/OptionChainPage/ocAction";
import { allColumnView } from "Redux/OptionChainPage/ocAction";

export default function ViewSettingsTab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

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
    IV,
  } = useSelector((store) => store.OptionChainReducer);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Global Settings" value="1" />
            <Tab
              onClick={() => dispatch(ltpView())}
              label="LTP View"
              value="2"
            />
            <Tab
              onClick={() => dispatch(greekView())}
              label="Greek View"
              value="3"
            />
            <Tab
              onClick={() => dispatch(allColumnView())}
              label="All Column View"
              value="4"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <GlobalSettingTab />
        </TabPanel>
        <TabPanel value="2">
          <ColumnView
            views={{
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
              IV,
            }}
          />
        </TabPanel>
        <TabPanel value="3">
          <ColumnView
            views={{
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
              IV,
            }}
          />
        </TabPanel>
        <TabPanel value="4">
          <ColumnView
            views={{
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
              IV,
            }}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
