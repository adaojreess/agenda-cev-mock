"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./Routes"));
require('dotenv').config();
const app = express_1.default();
const PORT = process.env.PORT || 3001;
console.log(process.env);
app.use(express_1.default.json());
app.use(Routes_1.default);
app.listen(PORT, () => {
    return console.log(`server is listening on ${PORT}`);
});
//# sourceMappingURL=app.js.map