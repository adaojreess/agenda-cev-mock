import { Router, Request, Response } from 'express';

const profiles = Router();
profiles.get(
  '/',
  (req: Request, res: Response) => {
      return res.status(200).json({
        "data": [
            {
                "id": "1",
                "name": "Adão Chaves",
                "image": "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "email": "adaojreess@gmail.com",
                "phone": "86995212986",
                "is_main": true,
              },
              {
                "id": "1",
                "name": "Enzo",
                "image": "https://images.unsplash.com/photo-1587059596575-ae8bb8e3f79f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
                "email": "enzo@gmail.com",
                "phone": "86995212986",
                "is_main": false,
              },
              {
                "id": "1",
                "name": "Diana",
                "image": "https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
                "email": "diana@gmail.com",
                "phone": "86995212986",
                "is_main": false,
              },
          ]
      });
  }
);

profiles.put('/:id', (req, res, next) => {
  return res.status(200).json({
    data: {
      "id": "55",
      "name": "Carlos",
      "image": "https://1.bp.blogspot.com/-_OOPQ-W-DHk/W4Lhltk8GXI/AAAAAAAALxI/MyeN2qrh8a0g-bhNqByjAVoFcYWyXz0vACLcBGAs/s1600/cebolinha-jg-caneta-caderneta-mnica-sanso-turma-da-mnica-D_NQ_NP_257715-MLB25306691812_012017-O.jpg",
      "email": "carlos@gmail.com",
      "phone": "86995212986",
      "is_main": true,
    }
  });
});
export { profiles };
