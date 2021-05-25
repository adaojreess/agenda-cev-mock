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
                "image": "https://1.bp.blogspot.com/-_OOPQ-W-DHk/W4Lhltk8GXI/AAAAAAAALxI/MyeN2qrh8a0g-bhNqByjAVoFcYWyXz0vACLcBGAs/s1600/cebolinha-jg-caneta-caderneta-mnica-sanso-turma-da-mnica-D_NQ_NP_257715-MLB25306691812_012017-O.jpg",
                "email": "adaojreess@gmail.com",
                "phone": "86995212986",
                "is_main": true,
              },
              {
                "id": "1",
                "name": "Enzo",
                "image": "https://i.pinimg.com/originals/4f/34/97/4f34975f5ff2952d9fce93cf3a119c83.png",
                "email": "enzo@gmail.com",
                "phone": "86995212986",
                "is_main": false,
              },
              {
                "id": "1",
                "name": "Diana",
                "image": "https://i.pinimg.com/originals/a4/7f/e2/a47fe2d61dcf1fea9cf525f6a40326f7.jpg",
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
