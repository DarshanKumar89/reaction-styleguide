#!/bin/bash

set -e

## Required environment variables in your CircleCI dashboard
# (used to push to Docker Hub)
#
# $DOCKER_USER  - Docker Hub username
# $DOCKER_PASS  - Docker Hub password
# $DOCKER_EMAIL - Docker Hub email


## Optional Environment Variables
# (used to customize the destination on Docker Hub without having to edit the CircleCI config)
#
# $DOCKER_NAMESPACE     - the image name for production deployments [Default]: reactioncommerce/reaction-styleguide

cd /home/reaction

# Master branch versioned deployment (only runs when a version number git tag exists - syntax: "v1.2.3")
if [ "$CIRCLE_BRANCH" == "master" ]; then

  # check if we're on a version tagged commit
  VERSION=$(git describe --tags | grep "^v[0-9]\+\.[0-9]\+\.[0-9]\+$") &&

  if [ "$VERSION" ]; then
    DOCKER_NAMESPACE=${DOCKER_NAMESPACE:-"reactioncommerce/reaction-styleguide"}

    docker tag $DOCKER_NAMESPACE:latest $DOCKER_NAMESPACE:$VERSION

    docker login -e $DOCKER_EMAIL -u $DOCKER_USER -p $DOCKER_PASS

    docker push $DOCKER_NAMESPACE:$VERSION
    docker push $DOCKER_NAMESPACE:latest
  else
    echo "On a deployment branch, but no version tag was found. Skipping image deployment."
  fi
else
  echo "Not in a deployment branch. Skipping image deployment."
fi
