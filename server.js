// eslint-disable-next-line no-undef
const express = require("express");
const app = express();
const port = 1112;
// eslint-disable-next-line no-undef
const fs = require("fs");
// eslint-disable-next-line no-undef
const cors = require("cors");

app.use(cors());
app.use(express.text());

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Hello Nawab" });
});

app.post("/writetotextfile", (req, res) => {
    const data = req.body.data;
    fs.writeFileSync("./data.txt", JSON.stringify(data));
    res.send("user Added");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));