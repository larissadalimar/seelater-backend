# See Later API

Back-end for See later, an app for save contents to "see later" (updated using Prisma, an ORM)

## About

See later started like a POC in TypeScript with the objective to be used like an app to manage your contents saved to see, read or listen later, and now we are updating it with ORM Prisma and making some changes on database. Now we have 3 entities: content, type and label.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env` file using the `.env.example` file 
5. Run the back-end in a development environment:

```bash
npm run dev
```
## Routes of API

All routes begin with `/contents`

1. POST: `/`
- Save a new content

Body: 
```bash
{
  "title": "PostgresQL Cheatsheet to see",
  "comment": "the best", //opcional
  "link": "https://google.com",
  "typeId": 8
}
```
2. GET ALL : `/`
- Get all saved contents 

Response: 
```bash
[
  {
    "id": 6,
    "link": "https://goo.com",
    "typeId": 4,
    "status": "tosee",
    "createdAt": "2023-01-24T16:31:27.408Z",
    "updatedAt": "2023-01-24T16:31:27.408Z",
    "comment": "the best",
    "title": "PostgresQL Cheatsheet"
  },
  {
    "id": 5,
    "link": "https://google.com",
    "typeId": 4,
    "status": "tosee",
    "createdAt": "2023-01-24T16:31:06.878Z",
    "updatedAt": "2023-01-24T16:31:06.878Z",
    "comment": "the best",
    "title": "PostgresQL Cheatsheet to see"
  }
]
```

3. Get By Id: `/:id`
- Get the content with id or give 404 status if the content with this id not exists

Response

```bash
{
  "id": 6,
  "link": "https://goo.com",
  "typeId": "diagramed",
  "status": "tosee",
  "createdAt": "2023-01-24T16:31:27.408Z",
  "updatedAt": "2023-01-24T16:31:27.408Z",
  "comment": "the best",
  "title": "PostgresQL Cheatsheet"
}
```

4. Get By status: `/status/:status`
- Get the contents with the status equal the params. In this app, the content can be at "to see", "seeing" or "seen" status.

```bash
[
  {
    "id": 6,
    "link": "https://goo.com",
    "typeId": "diagramed",
    "status": "tosee",
    "createdAt": "2023-01-24T16:31:27.408Z",
    "updatedAt": "2023-01-24T16:31:27.408Z",
    "comment": "the best",
    "title": "PostgresQL Cheatsheet"
  },
  {
    "id": 5,
    "link": "https://google.com",
    "typeId": "diagramed",
    "status": "tosee",
    "createdAt": "2023-01-24T16:31:06.878Z",
    "updatedAt": "2023-01-24T16:31:06.878Z",
    "comment": "the best",
    "title": "PostgresQL Cheatsheet to see"
  }
]
```

5. PUT: `/:id`
- Update the saved content with id equal the params and if it no exists give 404 status code.

Body:

```bash
{
  "title": "PostgresQL Cheatsheet", //opcional
  "comment": "the best", //opcional
  "status": "seeing" //opcional
}
```

6. DELETE: `\:id`
- Delete the saved content with id equal the params and if it no exists give 404 status code.

