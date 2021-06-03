"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helpCenter = express_1.Router();
exports.helpCenter = helpCenter;
helpCenter.get('/', (req, res) => {
    return res.status(200).json({
        "data": [
            {
                "id": "1",
                "title": "Como faço login?",
                "content": "content 1",
                "group": "Login"
            },
            {
                "id": "2",
                "title": "Title",
                "content": "content 2",
                "group": "Atividades"
            },
            {
                "id": "3",
                "title": "Não tenho login, como devo agir?",
                "content": "content 3",
                "group": "Login"
            },
            {
                "id": "4",
                "title": "title 4",
                "content": "content 4",
                "group": "Atividades"
            },
            {
                "id": "5",
                "title": "title 5",
                "content": "content 5",
                "group": "Atividades"
            },
            {
                "id": "6",
                "title": "Não tenho acesso ao número cadastrado, como devo agir?",
                "content": "content 6",
                "group": "Login"
            },
            {
                "id": "7",
                "title": "title 7",
                "content": "content 7",
                "group": "Atividades"
            },
            {
                "id": "8",
                "title": "Não recebo o código  de confirmação, o que devo fazer?",
                "content": "content 8",
                "group": "Login"
            },
            {
                "id": "9",
                "title": "title 9",
                "content": "content 9",
                "group": "Atividades"
            }
        ]
    });
});
//# sourceMappingURL=help_center.routes.js.map