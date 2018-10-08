#!/usr/bin/env bash
echo 'Creating React build files to be served by Nginx'

echo 'Moving build files to Nginx Directory'
sudo rm -rf /var/lib/jenkins/workspace/GrizzlyStore-React/build/*
sudo rm -rf /opt/GrizzlyStoreMicroServices/GrizzlyStore-React/*
sudo cp -R /var/lib/jenkins/workspace/GrizzlyStore-React/build/* /opt/GrizzlyStoreMicroServices/GrizzlyStore-React/

if (( $(ps -ef | grep -v grep | grep nginx | wc -l) > 0))
    then
        echo "Restarting Nginx to reload web service!"
        sudo systemctl stop nginx.service || true
fi

sudo systemctl start nginx.service
sudo systemctl restart nginx.service
