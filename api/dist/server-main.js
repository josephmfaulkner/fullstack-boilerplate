"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
// Constants
const PORT = config_1.default.PORT;
const HOST = config_1.default.HOST;
// App
const app = express_1.default();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/", (req, res) => {
    res.json({
        posts: [
            {
                title: "PDF Document"
            },
            {
                title: "Expense Report"
            },
            {
                title: "Cover Letter"
            },
            {
                title: "Transcript"
            },
            {
                title: "Album Script"
            },
            {
                title: "Movie Script"
            },
            {
                title: "Hillary Duff CD"
            }
        ]
    });
});
app.listen(PORT, HOST);
// tslint:disable-next-line:no-console
console.log(`Running on http://${HOST}:${PORT}`);
//# sourceMappingURL=server-main.js.map