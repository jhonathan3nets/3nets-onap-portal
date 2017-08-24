#!/bin/bash
# Starts docker containers for ONAP Portal
# This version for Amsterdam/R1 of Portal, uses docker-compose.
# Temporarily maintained in portal/deliveries area;
# replicated from the ONAP demo/boot area due to release concerns.

# be verbose
set -x

# Establish environment variables
NEXUS_USERNAME=$(cat /opt/config/nexus_username.txt)
NEXUS_PASSWD=$(cat /opt/config/nexus_password.txt)
NEXUS_DOCKER_REPO=$(cat /opt/config/nexus_docker_repo.txt)
DOCKER_IMAGE_VERSION=$(cat /opt/config/docker_version.txt)

# Refresh configuration and scripts
cd /opt/portal
git pull
cd deliveries

# Get image names used below from docker-compose environment file
source .env

# Copy property files
ETC=/PROJECT/OpenSource/UbuntuEP/etc
mkdir -p $ETC
cp -r properties_rackspace/* $ETC

# Refresh images
docker login -u $NEXUS_USERNAME -p $NEXUS_PASSWD $NEXUS_DOCKER_REPO
docker pull $NEXUS_DOCKER_REPO/openecomp/${DB_IMG_NAME}:$DOCKER_IMAGE_VERSION
docker pull $NEXUS_DOCKER_REPO/openecomp/${EP_IMG_NAME}:$DOCKER_IMAGE_VERSION
docker pull $NEXUS_DOCKER_REPO/openecomp/${WMS_IMG_NAME}:$DOCKER_IMAGE_VERSION

# Tag them as expected by docker-compose file
docker tag $NEXUS_DOCKER_REPO/openecomp/${DB_IMG_NAME}:$DOCKER_IMAGE_VERSION $DB_IMG_NAME:$PORTAL_TAG
docker tag $NEXUS_DOCKER_REPO/openecomp/${EP_IMG_NAME}:$DOCKER_IMAGE_VERSION $EP_IMG_NAME:$PORTAL_TAG
docker tag $NEXUS_DOCKER_REPO/openecomp/${WMS_IMG_NAME}:$DOCKER_IMAGE_VERSION $WMS_IMG_NAME:$PORTAL_TAG

# compose is not in /usr/bin
/opt/docker/docker-compose down
/opt/docker/docker-compose up -d
