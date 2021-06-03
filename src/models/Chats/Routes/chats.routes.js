const { Router, Request, Response } = require('express');

const chatsRouter = Router();
chatsRouter.get(
    '/',
    (req, res) => {
        return res.status(200).json({
            data: [
                {
                    id: '0',
                    name: 'Direção de ensino',
                    description: 'Comunicados importantes de ensino',
                    image: '',
                    type: 'Família',
                },
                {
                    id: '1',
                    name: 'Direção de esporte',
                    description: 'Comunicados importantes de esporte',
                    image: 'https://cdn.wizard.com.br/wp-content/uploads/2020/10/09181758/como-falar-sobre-esportes-em-espanhol.png',
                    type: 'Privado',
                },
                {
                    id: '2',
                    name: 'Direção geral',
                    description: 'Comunicados importantes do CEV',
                    image: '',
                    type: 'Família',
                },
                {
                    id: '3',
                    name: 'Psicóloga',
                    description: 'Comunicados importantes sobre saúde mental',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Psi2.svg/190px-Psi2.svg.png',
                    type: 'Família',
                },
                {
                    id: '4',
                    name: 'Psicóloga',
                    description: 'Comunicados importantes sobre saúde mental',
                    image: 'http://www.unidep.edu.br/managed_images/subsites/psicologia-logo-curso-309.png',
                    type: 'Família',
                },
                {
                    id: '5',
                    name: 'Redação',
                    description: 'Comunicados importantes sobre aulas de redação',
                    image: 'https://cdn.cnn.com/cnnnext/dam/assets/200416164101-3-underscored-creative-writing-lead.jpg',
                    type: 'Privado',
                },
            ],
        });
    }
  );

exports=chatsRouter;
