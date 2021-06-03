"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user = express_1.Router();
user.get('/', (req, res) => {
    console.log(req.headers.authorization);
    if (req.headers.authorization != 'Bearer 8ywehuheuw73yuhruweiueuhuweh73yr7uhewufhufhweuifhiufwefhewuiheuw') {
        console.log('403');
        return res.status(403).json();
    }
    return res.status(200).json({
        data: {
            name: 'Adão Chaves',
            age: 19,
            email: 'adaojreess@gmail.com',
            phone: '86995212986',
            image: 'https://1.bp.blogspot.com/-_OOPQ-W-DHk/W4Lhltk8GXI/AAAAAAAALxI/MyeN2qrh8a0g-bhNqByjAVoFcYWyXz0vACLcBGAs/s1600/cebolinha-jg-caneta-caderneta-mnica-sanso-turma-da-mnica-D_NQ_NP_257715-MLB25306691812_012017-O.jpg',
        },
    });
});
exports.default = user;
//# sourceMappingURL=user.routes.js.map