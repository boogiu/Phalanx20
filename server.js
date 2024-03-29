const http = require("http");
const express = require("express");
const path = require("path");

const app = express();

const port = 8000;

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.use(express.static(path.join(__dirname, "build"), {
    maxAge: "1d" // 캐시 유지 시간 설정 (예: 1일)
}));

app.get("/*", (req, res) => {
    res.set({
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Date: Date.now()
    });
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

http.createServer(app).listen(port, () => {
    console.log(`app listening at ${port}`);
});
