# Dummy Nodejs MongoDB

It is a dummy NodeJS application with MongoDB database, that will be used in next infrastructure projects.

# Dependencies
* NodeJS
* MongoDB

# Install
Install `pm2` npm globaly to start application
Install all npm dependencies with `npm install` command

# Start application
Execute next command to start application via pm2
```
pm2 start bin/www --name "dummy" --log log/application.log
```

You can check status of application with next command
```
pm2 status
```

# Start application with env variables
```
pm2 start app.yml --env staging --log log/application.log
```

