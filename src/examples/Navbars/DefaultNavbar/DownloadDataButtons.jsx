import { Button } from "@mui/material";
import axios from "axios";
import MKBox from "components/MKBox";
import React from "react";

const DownloadDataButtons = () => {
  return (
    <div>
      <Button
        onClick={async () => {
          try {
            let req = await axios.post(
              "http://192.168.1.6/NSE/GetNSEData?interval=-15&symbol=1"
            );
            console.log(req.data);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        NIFTY
      </Button>
      <Button
        onClick={async () => {
          try {
            let req = await axios.post(
              "http://192.168.1.6/NSE/GetNSEData?interval=-15&symbol=2"
            );
            console.log(req.data);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        BANKNIFTY
      </Button>
      <Button
        onClick={async () => {
          try {
            let req = await axios.post(
              "http://192.168.1.6/NSE/GetNSEData?interval=-15&symbol=3"
            );
            console.log(req.data);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        FINNIFTY
      </Button>
    </div>
  );
};

export default DownloadDataButtons;
