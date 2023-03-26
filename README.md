<div align="center">
  
  ![Issues](https://img.shields.io/github/issues/akai-org/planer-podrozy.svg)
  ![PullRequestOpen](https://img.shields.io/github/issues-pr/akai-org/planer-podrozy.svg)
  ![PullRequestClosed](https://img.shields.io/github/issues-pr-closed/akai-org/planer-podrozy.svg)
  ![GiveStar](https://img.shields.io/github/followers/{username}.svg?style=social&label=Follow&maxAge=2592000)
  
</div>

<br />
<div align="center">
  <a href="https://github.com/akai-org/planer-podrozy">
    <img src="https://user-images.githubusercontent.com/56632321/227787859-864fa1b5-eb38-4348-9e6f-eb682c5243aa.png" alt="Logo" width="500" height="184">
  </a>

  <p align="center">
    An awesome application to plan your trips!
    <br />
    <a href="https://docs.google.com/document/d/1OZK2_Va4tqEQyFQUZcCKBQbyYeoB7c0E7ROaiTdVQ9o/edit#"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://akai-guide-me.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/akai-org/planer-podrozy/issues">Check issues</a>
    ·
    <a href="https://www.figma.com/file/g2tzSA8pQQ8Dv3tE41zlN4/GuideMe?node-id=0-1">Show design</a>
  </p>
</div>

  **Table of Contents**
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#design">Design</a></li>
    <li><a href="#docker">Docker</a></li>
    <li><a href="#frontend-workspace">Frontend workspace</a></li>
    <li><a href="#backend-workspace">Backend workspace</a></li>
  </ol>
 

## About The Project

![Desktop](https://user-images.githubusercontent.com/56632321/227787757-6dadad9d-566f-4881-87cc-2ccf5b70c2c6.png)

Guide.me is an trip planning app which creates for you optimal sightseeing route based on your preferences. 

Project created by [@akai-org](https://github.com/akai-org) Academic Circle. 

**Tech stack**

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![Fastapi](https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Stylelint](https://img.shields.io/badge/stylelint-000?style=for-the-badge&logo=stylelint&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)

## Getting Started

If you have Docker, you can use the tutorial described <a href="#docker">here</a>. 

**Backend**

1. Change directory to `api`
```
cd ./api
```

2. Install requirements
```
pip install --no-cache-dir --upgrade -r ./requirements/docker.txt
```

3. Run Uvicorn server
```
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

**Frontend**
1. Change directory to `ui`
```
cd ./ui
```

2. Install dependencies
```
npm ci
```

3. Run development server
```
npm run dev
```

You can also run storybook:
```
npm run storybook
```

## Contributing

If you are a contributor, please clone this repo and assign yourself to one of the issues. If you noticed a bug or something that could be improved, you can create new issue with proper labels.

1. Clone the Project
2. Create your Feature Branch (`git checkout -b AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin AmazingFeature`)
5. Open a Pull Request

## Design

**Design under construction 🏗👷‍♀️👷‍♂️**

![Design Board](https://user-images.githubusercontent.com/56632321/227791400-7bc02427-9c94-4016-8175-3fe831ad1b17.png)

[DESIGN](https://www.figma.com/file/g2tzSA8pQQ8Dv3tE41zlN4/GuideMe?node-id=1-2&t=TcZBYhFraQOztbG5-0)

## Docker

In order to run the project in a docker container you must run a `docker daemon` on your computer and then type command:

```
docker compose up --build
```

Docker will run three containers on you computer:
- PostgreSQL Database on port 5432
- Frontent on port 8080
- Backend on port 8000

Database's files are saved in `api\database`. If you want to clear the database just remove this directory.

All containers are configured to work as development environment so each change will trigger auto reload. Feel free to use it.

## Frontend workspace

./ui/

## Backend workspace

./api/
