#!/bin/bash
./buildDocker.sh
docker tag pathfinderresourcebase:latest obyoxar/pathfinderresourcebase:latest
docker push obyoxar/pathfinderresourcebase:latest
