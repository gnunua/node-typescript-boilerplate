"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 7878;
app.get('/', (req, res) => {
    console.log('1');
    return res.send('1');
});
app.get('/2', (req, res) => {
    console.log('2');
    return res.send('2');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=server.js.map