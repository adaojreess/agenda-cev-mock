import { Router, Request, Response } from 'express';

const activities = Router();
activities.get(
  '/',
  (req: Request, res: Response) => {
        // return res.status(403).json();
        return res.status(200).json({
        "data": [
            {
              "id": "1",
              "title": "Infrastructure",
              "content": "synthesizing the pixel won't do anything, we need to override the bluetooth PCI firewall!",
              "date": 1620328744,
              "is_read": false
            },
            {
              "id": "2",
              "title": "Operations",
              "content": "If we navigate the matrix, we can get to the SMS bus through the wireless JBOD circuit!",
              "date": 1620328684,
              "is_read": true
            },
            {
              "id": "3",
              "title": "Communications",
              "content": "Try to bypass the RAM protocol, maybe it will program the primary alarm!",
              "date": 1620328624,
              "is_read": false
            },
            {
              "id": "4",
              "title": "Assurance",
              "content": "Try to navigate the XSS interface, maybe it will navigate the redundant firewall!",
              "date": 1620328564,
              "is_read": true
            },
            {
              "id": "5",
              "title": "Assurance",
              "content": "You can't bypass the sensor without calculating the 1080p EXE port!",
              "date": 1620328504,
              "is_read": false
            }
          ]
      });
  }
);

export { activities };
