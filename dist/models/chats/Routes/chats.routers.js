"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatsRoutes = express_1.Router();
exports.chatsRoutes = chatsRoutes;
chatsRoutes.get('/', (req, res) => {
    return res.status(200).json({
        "data": [
            {
                "id": "0",
                "name": "Direção de ensino",
                "description": "Comunicados importantes de ensino",
                "image": "",
                "type": "Familia"
            },
            {
                "id": "1",
                "name": "Direção de esporte",
                "description": "Comunicados importantes de esporte",
                "image": "",
                "type": "Privado"
            },
            {
                "id": "2",
                "name": "Direção de geral",
                "description": "Comunicados importantes do CEV",
                "image": "",
                "type": "Familia"
            },
            {
                "id": "3",
                "name": "Psicóloga",
                "description": "Comunicados importantes sobre saúde mental",
                "image": "",
                "type": "Família"
            },
            {
                "id": "4",
                "name": "Psicóloga",
                "description": "Comunicados importantes sobre saúde mental",
                "image": "",
                "type": "Família"
            },
            {
                "id": "5",
                "name": "Redação",
                "description": "Comunicados importantes sobre aulas de redação",
                "image": "",
                "type": "privado"
            }
        ]
    });
});
//# sourceMappingURL=chats.routers.js.map