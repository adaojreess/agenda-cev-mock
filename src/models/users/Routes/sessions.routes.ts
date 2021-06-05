import { Router, Request, Response } from 'express';

const loginPhone = Router();
const validateToken = Router();

loginPhone.post(
  '/',

  (req: Request, res: Response) => {
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
  
    (req: Request, res: Response) => {
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
                image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80',
            },
            token: '8ywehuheuw73yuhruweiueuhuweh73yr7uhewufhufhweuifhiufwefhewuiheuw'
        },);
    }
  );

export { loginPhone, validateToken};
