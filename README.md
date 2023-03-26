<br />
<div align="center">
  <a href="https://github.com/akai-org/planer-podrozy">
    <img src="https://user-images.githubusercontent.com/56632321/227783305-a38a35b3-85d7-404a-91dd-2ed5e4946ebb.png" alt="Logo" width="500" height="184">
  </a>

  <h3 align="center">Guide.me</h3>

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

## Frontend:

./ui/

## Backend:

./api/
