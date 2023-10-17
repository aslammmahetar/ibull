import { Box, FormLabel, Stack, Switch, Typography } from "@mui/material";
import { toggleColumn } from "Redux/OptionChainPage/ocAction";
import React from "react";
import { useDispatch } from "react-redux";

const ColumnView = ({ views }) => {
  const dispatch = useDispatch();
  const handleToggle = (switchName) => () => {
    return dispatch(toggleColumn(switchName));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Stack>
        <Box>
          <Switch
            id="ltpChangePer"
            checked={views.LTP}
            onChange={handleToggle("LTP")}
          />
          <FormLabel color="black" style={{ fontSize: "medium" }}>
            LTP Change %
          </FormLabel>
        </Box>
        <Box>
          <Switch
            id="volume"
            checked={views.volume}
            onChange={handleToggle("volume")}
          />
          <FormLabel color="black" style={{ fontSize: "medium" }}>
            Volume
          </FormLabel>
        </Box>
        <Box>
          <Switch
            id="oichange"
            checked={views.OI_lakh}
            onChange={handleToggle("oiChange")}
          />
          <FormLabel color="black" style={{ fontSize: "medium" }}>
            OI Change
          </FormLabel>
        </Box>
        <Box>
          <Switch
            id="oichangeper"
            checked={views.oiChangePer}
            onChange={handleToggle("oiChangePer")}
          />
          <FormLabel color="black" style={{ fontSize: "medium" }}>
            OI Change %
          </FormLabel>
        </Box>

        <Box>
          <Switch id="iv" checked={views.IV} onChange={handleToggle("IV")} />
          <FormLabel color="black" style={{ fontSize: "medium" }}>
            IV
          </FormLabel>
        </Box>
        <Box>
          <Switch
            id="bidPrice"
            checked={views.bidprice}
            onChange={handleToggle("bidprice")}
          />
          <FormLabel color="black" style={{ fontSize: "medium" }}>
            Bid Price
          </FormLabel>
        </Box>
      </Stack>
      <Box>
        <Typography fontSize={"small"} mt={1}>
          Greeks
        </Typography>
        <Stack>
          <Box>
            <Switch
              id="delta"
              checked={views.delta}
              onChange={handleToggle("delta")}
            />
            <FormLabel color="black" style={{ fontSize: "medium" }}>
              Delta
            </FormLabel>
          </Box>{" "}
          <Box>
            <Switch
              id="gamma"
              checked={views.gamma}
              onChange={handleToggle("gamma")}
            />
            <FormLabel color="black" style={{ fontSize: "medium" }}>
              Gamma
            </FormLabel>
          </Box>{" "}
          <Box>
            <Switch
              id="theta"
              checked={views.theta}
              onChange={handleToggle("theta")}
            />
            <FormLabel color="black" style={{ fontSize: "medium" }}>
              Theta
            </FormLabel>
          </Box>{" "}
          <Box>
            <Switch
              id="vega"
              checked={views.vega}
              onChange={handleToggle("vega")}
            />
            <FormLabel color="black" style={{ fontSize: "medium" }}>
              Vega
            </FormLabel>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default ColumnView;
