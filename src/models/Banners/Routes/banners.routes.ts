import { Router, Request, Response } from 'express';

const banners = Router();
banners.get(
  '/',
  (req: Request, res: Response) => {
      return res.status(200).json({
        "data": [
            {
              "id": "1",
              "url": "https://i.pinimg.com/originals/f7/97/42/f797426f043d2cd954891f7d17686887.jpg"
            },
            {
              "id": "2",
              "url": "https://media-exp1.licdn.com/dms/image/C4D1BAQH_-MPoR3IxIw/company-background_10000/0/1607441172662?e=2159024400&v=beta&t=9ptL2qcgRmHp-B6NM15vDrAPIv7jGqNirRRCCKc-0lc"
            },
            {
              "id": "3",
              "url": "https://www.natalriograndedonorte.com/wp-content/uploads/2014/04/natal-brazil-nightlife.jpg"
            },
            {
              "id": "4",
              "url": "https://programadoresbrasil.com.br/wp-content/uploads/2020/04/GitHub-logo-2-imagen.jpg"
            },
            {
              "id": "5",
              "url": "https://conteudo.imguol.com.br/c/noticias/57/2017/08/29/novo-logo-do-youtube-tem-icone-de-player-na-frente-e-nome-do-site-na-sequencia-1504042734067_840x402.jpg"
            },
            {
              "id": "6",
              "url": "https://ab2l.org.br/wp-content/uploads/2018/09/business-3152586_960_720.jpg"
            }
          ]
      });
  }
);

export { banners };
