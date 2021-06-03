"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const monthsRouter = express_1.Router();
exports.monthsRouter = monthsRouter;
monthsRouter.get('/', (req, res) => {
    return res.status(200).json({
        "data": [
            {
                "id": "0",
                "name": "Janeiro",
            }, {
                "id": "1",
                "name": "Fevereiro",
            }, {
                "id": "2",
                "name": "Março",
            }, {
                "id": "3",
                "name": "Abril",
            },
            {
                "id": "4",
                "name": "Maio",
            },
            {
                "id": "5",
                "name": "Julho",
            }
        ]
    });
});
//# sourceMappingURL=months.routes.js.map