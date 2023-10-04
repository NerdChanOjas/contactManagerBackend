
# Contact Manager API
Welcome to the Contact Manager API! This API allows you to perform CRUD (Create, Read, Update, Delete) operations for managing contacts and also provides user authorization functionalities. This project was created to learn how to deploy a backend server that can be accessed from anywhere.


## Deployment

The project has been successfully deployed using Render hosting. You can access the API by visiting the following link:

https://contactmanager-0nhy.onrender.com

To use the API, simply append the desired endpoint to the base URL above.

For more information about Render hosting, you can visit their website:

[Render](https://render.com/)

Feel free to explore and utilize this Contact Manager API for your contact management needs. If you have any questions or encounter any issues, please don't hesitate to reach out.



# API Reference

## User Routes

#### **PUBLIC** Register a user

```http
  POST /api/users/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required** |
| `email` | `string` | **Required** |
| `password` | `string` | **Required** |

#### **PUBLIC** Login a user

```http
  POST /api/users/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required** |
| `password` | `string` | **Required** |


#### **PRIVATE** Get information about the current logged in user

```http
  GET /api/users/current
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `bearer token` | `string` | **Required** |

## Contact Routes

#### **PRIVATE** Get information about the current logged in user

```http
  GET /api/contacts
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |


#### **PRIVATE** Get information about the current logged in user

```http
  POST /api/contacts
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required** |
| `email` | `string` | **Required** |
| `phone` | `string` | **Required** |

#### **PRIVATE** Get information about the current logged in user

```http
  GET /api/contacts/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |


#### **PRIVATE** Get information about the current logged in user

```http
  PUT /api/contacts/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required** Updated|
| `email` | `string` | **Required** Updated|
| `phone` | `string` | **Required** Updated|


#### **PRIVATE** Get information about the current logged in user

```http
  DELETE /api/contacts/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |




## Run Locally

Clone the project

```bash
  git clone https://github.com/NerdChanOjas/contactManagerBackend.git
```

Go to the project directory

```bash
  cd contactManagerBackend
```

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm run dev
```


## 🚀 About Me


Hi, I'm Ojas, a college student studying computer science. I'm passionate about learning and experimenting with new technologies, with a focus on web development and machine learning. I enjoy working on personal projects, participating in hackathons, and I'm open to new opportunities and collaborations. Currently, I'm a sophomore in Computer Science with a focus on Algorithms, Data Structures, Web development, and Machine Learning at Netaji Subhas University of Technology.

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://nerdchanojas.in/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ojas0710/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/fallen_fist)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/nerdchanojas)

