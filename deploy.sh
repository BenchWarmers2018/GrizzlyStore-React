#!/usr/bin/env bash
echo 'Deployment in progress'
pwd && cd src

if (( $(ps -ef | grep -v grep | grep grizzlystore-react | wc -l) > 0)) 
	then
		echo "React service is running...attempting to stop service!"
		sudo systemctl stop grizzlystore-react.service || true
fi

if [ -f grizzlystore-react ] ; then
    sudo rm /etc/init.d/grizzlystore-react || true
fi

cp App.js /opt/GrizzlyStoreMicroServices/grizzlystore-react.js
sudo systemctl start grizzlystore-react.service