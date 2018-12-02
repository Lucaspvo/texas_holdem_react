# Texas Holdem React (on development)

This is a Texas Holdem minimalistc game built on ReactJs.
To run this application you can follow step1 or step 2.
Step 1 will consider you have installed "docker" and "docker-compose" on your machine, if not you can follow the links [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce) and [Docker Compose](https://docs.docker.com/compose/install/#install-compose) to install these dependencies.
Step 2 will consider you have nodejs installed on your machine, if not follow this link to do so [NodeJS](https://nodejs.org/en/download/package-manager/)

## Step 1

To start running this application you need to clone this repository to a directory of your preference.
Inside the directory of your preference, run the following command:

`git clone https://github.com/Lucaspvo/texas_holdem_react.git`

Now go to texas_holdem_react dir:

`cd texas_holdem_react`

Inside this folder, run the following command:

`docker run --rm -u $UID:$UID -v $(pwd):/usr/src/react_project -w /usr/src/react_project -it node bash`

When inside the docker container, run the next commands:

`npm i`

`npm run build`

After that go to the docker_env dir:

`cd docker_env`

and run the next command:

`docker-compose up nginx`

Now open a browser and go to http://localhost

## Step 2

After cloning the application as in Step 1, go to the texas_holdem_react dir and run the following commands:

`npm i`

`npm run build`

`npm run start`

And then open a browser and go to http://localhost:8080
