#! /bin/bash

exec nginx -g 'daemon off;' &
# npm install express & 
node server.js