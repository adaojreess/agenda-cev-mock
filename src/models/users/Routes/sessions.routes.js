const { Router, Request, Response } = require('express');

const loginPhone = Router();
const validateToken = Router();

loginPhone.post(
  '/',

  (req, res) => {
      console.log(req.body);
      const { phone } = req.body;
      if ( phone != '86995212986') {
          return res.status(500).json({
              message: 'Telefone invalido',
          });
      }
      return res.status(200).json({});
  }
);


validateToken.post(
    '/',
  
    (req, res) => {
        const {token} = req.body;
        if ( token != '54387') {
            return res.status(400).json({
                message: 'Token invalido',
            });
        }
        return res.status(200).json({
            data: {
                name: 'Adão Chaves',
                age: 19,
                email: 'adaojreess@gmail.com',
                phone: '86995212986',
                image: 'https://1.bp.blogspot.com/-_OOPQ-W-DHk/W4Lhltk8GXI/AAAAAAAALxI/MyeN2qrh8a0g-bhNqByjAVoFcYWyXz0vACLcBGAs/s1600/cebolinha-jg-caneta-caderneta-mnica-sanso-turma-da-mnica-D_NQ_NP_257715-MLB25306691812_012017-O.jpg',
            },
            token: '8ywehuheuw73yuhruweiueuhuweh73yr7uhewufhufhweuifhiufwefhewuiheuw'
        },);
    }
  );

exports = { loginPhone, validateToken};
