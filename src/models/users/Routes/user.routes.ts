import { Router, Request, Response } from 'express';

const user = Router();
user.get(
    '/',
    (req: Request, res: Response) => {
        console.log(req.headers.authorization);
    if (req.headers.authorization != 'Bearer 8ywehuheuw73yuhruweiueuhuweh73yr7uhewufhufhweuifhiufwefhewuiheuw') {
        console.log('403');
        return res.status(403).json({message: 'message'});
    }
        return res.status(200).json({
            data: {
                name: 'Adão Chaves',
                age: 19,
                email: 'adaojreess@gmail.com',
                phone: '86995212986',
                image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80',
            },
        },);
    }
  );

export default user;
