docker build -t node-dev .
docker run -it -p 3334:3334 -v .:/src node-dev
curl http://localhost:3334/