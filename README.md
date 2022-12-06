# Planer podróży

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