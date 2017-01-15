# expressblog
An express blog built with Webstorm.

## Develop using Nodemon

    nodeman npm start

This will automatically relaunch the server each time you modify a file 

## Working with DB

Connect to the DB directly

    mongo ds145168.mlab.com:45168/helpless -u mottel -p H3r3inbepoints

Use mongo commands to manipulate DB
i.e.

    db.blogposts.findOne({})
    db.blogposts.insertOne({})

    etc