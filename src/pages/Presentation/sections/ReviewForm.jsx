// ReviewForm.js
import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const ReviewForm = ({ onAddReview }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    if (name.trim() !== "" && text.trim() !== "" && email.trim() !== "") {
      onAddReview({ name, text, email });
      setName("");
      setText("");
      setEmail("");
    }
  };

  return (
    <>
      <Typography variant="h4" textAlign={"center"}>
        Your Feedback Matters! Share Your Thoughts and Help Us Shine.
      </Typography>
      <div style={{ width: "50%", margin: "auto", marginTop: "25px" }}>
        <Box display={"flex"}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            label="Email"
            value={email}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            fullWidth
            style={{ marginBottom: "10px" }}
          />
        </Box>
        <TextField
          label="Review"
          value={text}
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          style={{ marginBottom: "10px" }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          <Typography fontSize={"small"} color={"whitesmoke"}>
            Submit Review
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default ReviewForm;
