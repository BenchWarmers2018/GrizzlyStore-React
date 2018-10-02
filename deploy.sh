#!/usr/bin/env bash
echo 'Creating React build files to be served by Nginx'

echo 'Moving build files to Nginx Directory'
sudo rm -rf /opt/GrizzlyStoreApp/*
sudo cp -R /var/lib/jenkins/workspace/GrizzlyStore-React/build/* /opt/GrizzlyStoreApp/

if (( $(ps -ef | grep -v grep | grep nginx | wc -l) > 0))
	then
		echo "Nginx is already, need to restart it!"
		sudo systemctl stop nginx.service || true
fi

sudo systemctl start nginx.service
