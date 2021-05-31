import { Router, Request, Response } from 'express';

const monthsRouter = Router();
monthsRouter.get(
  '/',
  (req: Request, res: Response) => {
      return res.status(200).json({
        "data": [
            {
                "id": "0",
                "name": "Janeiro",
              },{
                "id": "1",
                "name": "Fevereiro",
              },{
                "id": "2",
                "name": "Março",
              },{
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
  }
);

export { monthsRouter };
