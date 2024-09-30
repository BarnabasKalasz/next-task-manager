MongoDB rund in a docker, so if you want to use the included db. Install docker, then in the root directory, run `docker-compose --env-file .env.local up`. Of courese use your own .env file in the shell command.

The env file should contain the mongo uri, the mongo username and password as the docker wants it in the yaml file.

Then you can just `npm run dev`, to start the nextJs project locally.


##Important
MongoDB sometimes decides to stop working and hit you with a ServerSelectionError and timeout after 30000ms. Not sure why it does that, but both the MongoDB forum and Stackoverflow are full of threads about it. To fix that, replace the `localhost` in the `uri` to `127.0.0.1`. 