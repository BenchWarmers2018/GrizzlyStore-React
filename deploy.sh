#!/usr/bin/env bash
echo 'Deployment in progress'
pwd && cd ..

if (( $(ps -ef | grep -v grep | grep grizzlystore-react | wc -l) > 0)) 
	then
		echo "React service is running...attempting to stop service!"
		sudo systemctl stop grizzlystore-react.service || true
fi

if [ -f grizzlystore-react ] ; then
    sudo rm /etc/init.d/grizzlystore-react || true
fi

cp -R GrizzlyStore-React /opt/GrizzlyStoreMicroServices/
sudo systemctl start grizzlystore-react.service