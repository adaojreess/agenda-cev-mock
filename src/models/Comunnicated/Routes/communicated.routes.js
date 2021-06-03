const { Router, Request, Response } = require('express');

const communicated = Router();
communicated.get(
  '/',
  (req, res) => {
      return res.status(200).json({
        "data": [
            {
              "id": "1",
              "title": "Senior Directives Coordinator",
              "content": "Fundamental grid-enabled analyzer",
              "date": "2021-05-10T07:36:58.648Z",
              "image": "http://lorempixel.com/640/480/nightlife",
              "has_image": false,
              "is_read": false,
              "tag": "reinvent"
            },
            {
              "id": "2",
              "title": "Human Applications Specialist",
              "content": "Diverse national archive",
              "date": "2021-05-10T15:27:36.397Z",
              "image": "http://lorempixel.com/640/480/business",
              "has_image": false,
              "is_read": true,
              "tag": "Shoes"
            },
            {
              "id": "3",
              "title": "Human Group Supervisor",
              "content": "Integrated neutral emulation",
              "date": "2021-05-10T03:46:45.580Z",
              "image": "https://sirinerd.com.br/wp-content/uploads/2021/02/superman-logo.jpg",
              "has_image": true,
              "is_read": true,
              "tag": "Fantastic Cotton Gloves"
            },
            {
              "id": "4",
              "title": "Lead Brand Producer",
              "content": "User-centric methodical service-desk",
              "date": "2021-05-10T11:33:36.746Z",
              "image": "http://lorempixel.com/640/480/nightlife",
              "has_image": true,
              "is_read": false,
              "tag": "24/7"
            },
            {
              "id": "5",
              "title": "Chief Usability Technician",
              "content": "De-engineered radical monitoring",
              "date": "2021-05-10T05:45:31.552Z",
              "image": "http://lorempixel.com/640/480/animals",
              "has_image": false,
              "is_read": false,
              "tag": "installation"
            },
            {
              "id": "6",
              "title": "Lead Tactics Orchestrator",
              "content": "Focused zero tolerance analyzer",
              "date": "2021-05-10T10:21:35.882Z",
              "image": "http://lorempixel.com/640/480/technics",
              "has_image": true,
              "is_read": true,
              "tag": "Mouse"
            },
            {
              "id": "7",
              "title": "Central Metrics Coordinator",
              "content": "Compatible 4th generation access",
              "date": "2021-05-10T15:46:11.723Z",
              "image": "http://lorempixel.com/640/480/nightlife",
              "has_image": true,
              "is_read": true,
              "tag": "framework"
            },
            {
              "id": "8",
              "title": "Future Directives Analyst",
              "content": "Implemented executive orchestration",
              "date": "2021-05-10T05:40:29.929Z",
              "image": "http://lorempixel.com/640/480/technics",
              "has_image": true,
              "is_read": true,
              "tag": "monetize"
            },
            {
              "id": "9",
              "title": "Dynamic Directives Developer",
              "content": "Visionary exuding contingency",
              "date": "2021-05-10T07:19:46.713Z",
              "image": "http://lorempixel.com/640/480/fashion",
              "has_image": false,
              "is_read": true,
              "tag": "Dong"
            },
            {
              "id": "10",
              "title": "Customer Research Assistant",
              "content": "User-centric bottom-line contingency",
              "date": "2021-05-09T19:45:17.299Z",
              "image": "http://lorempixel.com/640/480/animals",
              "has_image": false,
              "is_read": false,
              "tag": "optical"
            }
          ]
      });
  }
);

exports = { communicated };
