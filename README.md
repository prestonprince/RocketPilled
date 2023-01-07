# Hangers Academy

<a href='https://rocketpilled.onrender.com/' alt=''>Rocket Pilled</a> is a mix between a passion project and a website clone, inspired by <a href='https://www.checkmategaming.com/' alt=''>CheckMateGaming</a>. Rocket Pilled is a site where Rocket League players can go to make solo, duo, or squad teams, and go head to head against each other to compete for experience points.

## ✅ Wiki Link

- [Database Schema](https://github.com/prestonprince/RocketPilled/wiki/DB-Schema)
- [Feature List](https://github.com/prestonprince/RocketPilled/wiki/MVP-Feature-List)
- [Redux State Shape](https://github.com/prestonprince/RocketPilled/wiki/Redux-State-Shape)
- [User Stories](https://github.com/prestonprince/RocketPilled/wiki/User-Stories)

## 👩‍💻 Tech Stack

**Frameworks, Platforms and Libraries:**

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Flask](https://img.shields.io/badge/Flask-%23404d59.svg?style=for-the-badge&logo=flask&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Redux](https://img.shields.io/badge/python-yellow?style=for-the-badge&logo=python&logoColor=blue)

**Database:**

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

**Hosting:**

![Render](https://img.shields.io/badge/Render-informational?style=for-the-badge&logo=render&logoColor=%5bdec3)

## 💻 Run Locally

Clone the project

```bash
  git clone https://github.com/prestonprince/RocketPilled.git
```

Go to the project directory

```bash
  cd rocket_pilled
```

Install dependencies

Backend

```bash
pip install -r requirements.txt &&
flask db upgrade &&
flask seed all
```

Frontend

```bash
cd react-app
npm install
```

Start the server

```bash
pipenv run flask run
```

In seperate terminal

```bash
cd react-app
npm start
```

## 🖥 Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
SECRET_KEY=boostedGG
DATABASE_URL=sqlite:///dev.db
SCHEMA=rocket_pilled
```

## Sign Up

Users can access Sign Up via the 'Join Free' button in the top right.

![Sign Up Demo](https://cdn.discordapp.com/attachments/1049445170778738789/1061075985400877146/Untitled_video_-_Made_with_Clipchamp_3.gif)

## Log In 

Users can access Log In via the 'Sign In' button in the top right.

![Log In Demo](https://cdn.discordapp.com/attachments/1049445170778738789/1061077182597832795/Untitled_video_-_Made_with_Clipchamp_4.gif)

## Make Teams and Post/Accept Matches

Logged in users can make a Solo, Duo, or Squad team, and post or accept matches.

![Log In Demo](https://cdn.discordapp.com/attachments/1049445170778738789/1061079450021793842/Untitled_video_-_Made_with_Clipchamp_5.gif)

