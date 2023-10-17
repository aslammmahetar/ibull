import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import { Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";

import { SettingsIcon } from "@chakra-ui/icons";
import ViewSettingsTab from "./ViewSettingTabs";
import { ltpView } from "Redux/OptionChainPage/ocAction";
import { greekView } from "Redux/OptionChainPage/ocAction";
import { allColumnView } from "Redux/OptionChainPage/ocAction";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function SettingsDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={{ xs: "column", md: "row" }} // Adjust the layout for different screen sizes
        bgcolor={"whitesmoke"}
        // padding={{ xs: 2, md: 4 }} // Adjust padding for different screen sizes
      >
        <Box display={"flex"} marginBottom={{ xs: 2, md: 0 }}>
          <Box className="left-div" marginRight={{ xs: 2, md: 3 }}>
            <Button
              endIcon={<ExpandMoreIcon onClick={handleClickOpen} />}
              onClick={() => dispatch(ltpView())}
            >
              LTP View
            </Button>
          </Box>
          <Box className="left-div" marginRight={{ xs: 2, md: 3 }}>
            <Button
              onClick={() => dispatch(greekView())}
              endIcon={<ExpandMoreIcon onClick={handleClickOpen} />}
            >
              GREEK view
            </Button>
          </Box>
          <Box className="left-div">
            <Button
              onClick={() => dispatch(allColumnView())}
              endIcon={<ExpandMoreIcon onClick={handleClickOpen} />}
            >
              All Column view
            </Button>
          </Box>
        </Box>
        <Box>
          <Box className="right-div" bgcolor={"whitesmoke"}>
            <Button onClick={handleClickOpen} startIcon={<SettingsIcon />}>
              Settings
            </Button>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Settings
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ViewSettingsTab />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
