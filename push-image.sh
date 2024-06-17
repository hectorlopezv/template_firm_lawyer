aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 711324356654.dkr.ecr.us-east-1.amazonaws.com
docker buildx build --platform linux/amd64,linux/arm64 -t hectorimages:latest --push .
docker tag hectorimages:latest 711324356654.dkr.ecr.us-east-1.amazonaws.com/hectorimages:latest
docker push 711324356654.dkr.ecr.us-east-1.amazonaws.com/hectorimages:latest