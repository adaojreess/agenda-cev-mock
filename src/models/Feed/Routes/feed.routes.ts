import { Request, Response, Router } from 'express';

const feedRoutes = Router();

feedRoutes.get('/', (req, res) => {
    Date.now().valueOf();
    return res.status(200).json({
        data: [
            {
                id: Date.now().valueOf().toString(),
                type: 'activity',
                title: "Atividade de artes",
                content: "Fundamental grid-enabled analyzer",
                date: 1621186587,
                has_image: false,
                is_read: false,
            },
            {
                id: Date.now().valueOf().toString(),
                type: 'communication',
                title: "Comunicado para os pais",
                content: "Fundamental grid-enabled analyzer",
                date: 1621186587,
                has_image: false,
                is_read: false,
                tag: "reinvent"
            },
            {
                id: Date.now().valueOf().toString(),
                type: 'event',
                title: "Evento para colaboradores",
                content: "Fundamental grid-enabled analyzer",
                date: 1621186587,
                image: "http://lorempixel.com/640/480/nightlife",
                has_image: true,
                is_read: false,
                tag: "reinvent"
            },
            {
                id: Date.now().valueOf().toString(),
                type: 'event',
                title: "Evento para os servidores",
                content: "Diverse national archive",
                date: 1621186587,
                has_image: false,
                is_read: true,
                tag: "Shoes"
            },
            {
                id: Date.now().valueOf().toString(),
                type: 'communication',
                title: "Comunicado COVID-9",
                content: "Focused zero tolerance analyzer",
                date: 1621186587,
                image: "http://lorempixel.com/640/480/technics",
                has_image: true,
                is_read: true,
                tag: "Mouse"
            },
        ]
    });
});


export default feedRoutes;