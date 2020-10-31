var app = require('express')();
var exp = require('express');
app.use(exp.static('node_modules'))
app.use(exp.static('static'))
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mongodb = require('mongodb');
var request = require('request');
var fileUpload = require('express-fileupload');
var fs = require('fs');
var im = require('imagemagick');
ObjectId = require('mongodb').ObjectID;

// hello form other side
const a = 23;



//We need to work with "MongoClient" 
//interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://dibin:12345@ds161069.mlab.com:61069/talkme';


var groupHandler, contactHandler;




// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}



function createAccount(name, email, phone, callback) {
    //    getlist("email", function (val) {
    //        console.log("list of mails ", val);
    //        val.forEach(function (val) {
    //            if (email == val.)
    //        })
    //
    //    })
    listAccounts(function (val) {

            //console.log(val);
            var f = 0;
            for (i = 0; i < val.length; i++) {
                if (email == val[i].email || phone == val[i].phone) {
                    f = 1;
                    console.log("repeated phone or email")
                    console.log("Repetaed", name, email, phone);
                    break;
                }
            }
            if (f == 0) { // repeated 

                new Promise(function (resolve, reject) {


                    // Use connect method to connect to the Server
                    MongoClient.connect(url, function (err, db) {
                        if (err) {
                            console.log('Unable to connect to the mongoDB server CreateAccount. Error:');
                            reject(err);
                        } else {


                            //HURRAY!! We are connected. :)
                            console.log('create Account: Connection established to', url);

                            // do some work here with thef = 0;
            for (i = 0; i < val.length; i++) {
                if (email == val[i].email || phone == val[i].phone) {
                    f = 1;
                    console.log("repeated phone or email")
                    console.log("Repetaed", name, email, phone);
                    break;
                }
            }
            if (f == 0) { // repeated 

                new Promise(function (resolve, reject) {


                    // Use connect method to connect to the Server
                    MongoClient.connect(url, function (err, db) {
                        if (err) {
                            console.log('Unable to connect to the mongoDB server CreateAccount. Error:');
                            reject(err);
                        } else {


                            //HURRAY!! We are connected. :)
                            console.log('create Account: Connection established to', url);

                            // do some work here with the database.
                            var collection = db.collection("account");
                            vf = 0;
            for (i = 0; i < val.length; i++) {
                if (email == val[i].email || phone == val[i].phone) {
                    f = 1;
                    console.log("repeated phone or email")
                    console.log("Repetaed", name, email, phone);
                    break;
                }
            }
            if (f == 0) { // repeated 

                new Promise(function (resolve, reject) {


                    // Use connect method to connect to the Server
                    MongoClient.connect(url, function (err, db) {
                        if (err) {
                            console.log('Unable to connect to the mongoDB server CreateAccount. Error:');
                            reject(err);
                        } else {


                            //HURRAY!! We are connected. :)
                            console.log('create Account: Connection established to', url);

                            // do some work here with the database.
                            var collection = db.collection("account");
                            var otp = 1;//Math.floor(Math.random() * 1000000);
                            var info = {
                                name: namf = 0;
            for (i = 0; i < val.length; i++) {
                if (email == val[i].email || phone == val[i].phone) {
                    f = 1;
                    console.log("repeated phone or email")
                    console.log("Repetaed", name, email, phone);
                    break;
                }
            }
            if (f == 0) { // repeated 

                new Promise(function (resolve, reject) {


                    // Use connect method to connect to the Server
                    MongoClient.connect(url, function (err, db) {
                        if (err) {
                            console.log('Unable to connect to the mongoDB server CreateAccount. Error:');
                            reject(err);
                        } else {


                            //HURRAY!! We are connected. :)
                            console.log('create Account: Connection established to', url);

                            // do some work here with the database.
                            var collection = db.collection("account");
                            var otp = 1;//Math.floor(Math.random() * 1000000);
                            var info = {
                                name: name,
                                email: email,
                                phone: phone,
                                otp: otp
                            };e,
                                email: email,
                                phone: phone,
                                otp: otp
                            };ar otp = 1;//Math.floor(Math.random() * 1000000);
                            var info = {
                                name: name,
                                email: email,
                                phone: phone,
                                otp: otp
                            }; database.
                            var collection = db.collection("account");
                            var otp = 1;//Math.floor(Math.random() * 1000000);
                            var info = {
                                name: name,
                                email: email,
                                phone: phone,
                                otp: otp
                            };




                            //                       console.log("Random OTP : ", );
                            collection.insert(info, function (err, result) {
                                if (err) {
                                    console.log(err)
                                    reject(err);
                                } else {
                                    console.log("document inserted", result.ops[0]._id);
                                    //                                    resolve(result.ops[0]._id);
                                    resolve(email);

                                }
                            })




                            var propertiesObject = {
                                to: email,
                                msg: 'This is OTP for TalkMe App : ' + otp
                            };

                            request({
                                host: "proxy.cognizant.com",
                                port: 6050,
                                url: "https://sms-mail-server.herokuapp.com/",
                                qs: propertiesObject
                            }, function (err, response, body) {
                                if (err) {
                                    console.log("OTP send error : ", err);
                                    return;
                                }
                                console.log("Got response: " + response.statusCode);
                            });
                            
                            var propertiesObject = {
                                to: phone,
                                msg: 'This is OTP for TalkMe App : ' + otp
                            };

                            request({
                                host: "proxy.cognizant.com",
                                port: 6050,
                                url: "https://sms-mail-server.herokuapp.com/",
                                qs: propertiesObject
                            }, function (err, response, body) {
                                if (err) {
                                    console.log("OTP send error : ", err);
                                    return;
                                }
                                console.log("Got response: " + response.statusCode);
                            });

                            //Close connection
                            db.close();
                        }
                    });
                }).then(function (val) {
                    console.log(val);
                    callback({
                        id: val,
                        status: "Account Created"
                    });
                }).catch(function (val) {
                    console.log("rejected");
                    //                    console.log(val);
                    callback({
                        id: 0,
                        status: "Error in Account Creation : db error"
                    });

                })

            } else {
                callback({
                    id: 0,
                    status: "Error in Account Creation : already exist"
                });
            }

        })
        //    })


}

function verifyOTP(email, otp, cb) {
    listAccounts(function (val) {
    console.log("testing OTP : ",email,otp);
        var f = 0;
        for (i = 0; i < val.length; i++) {
            if (val[i].email == email && val[i].otp == otp) {

                MongoClient.connect(url, function (err, db) {
                    if (err) {
                        console.log('Unable to connect to the mongoDB server CreateAccount. Error:');
                        reject(err);
                    } else {


                        //HURRAY!! We are connected. :)
                        console.log('verify OTP: Connection established to', url);

                        // do some work here with the database.
                        var collection = db.collection("account");

                        //                            var info = {
                        //                                $set: {
                        //                                    otp: Math.floor(Math.random() * 1000000)
                        //                                }
                        //                            };




                        //                       console.log("Random OTP : ", );
                        collection.update({
                            email: email
                        }, {
                            $set: {
                                otp: 0
                            }
                        }, function (err, result) {
                            if (err) {
                                console.log(err)
                                    //                                reject(err);
                            } else {
                                //                                    console.log("document inserted", result.ops[0]._id);
                                //                                resolve(result);
                            }
                        })


                        //Close connection
                        db.close();
                    }
                });

                cb({
                    id: val[i]._id,
                    status: "Account Created"
                });
                f = 1;
                break;
            }
        }
        if (f == 0) cb({
            id: 0,
            status: "Error in verification : OTP  not matched"
        });

    })
}


function getlist(field, cb) {
    //    console.log(field);
    //    debugger;

    new Promise(function (resolve, reject) {
        MongoClient.connect(url, function (err, db) {

            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
                reject(err);
            } else {


                //HURRAY!! We are connected. :)
                console.log('Connection established to', url);

                // do some work here with the database.
                var collection = db.collection("account");


                //We have a cursor now with our find criteria                

                var cursor = collection.find({}, JSON.parse("{\"" + field + "\": 1}"))
                var ret = [];
                //Lets iterate on the result
                cursor.toArray().then(function (res) {
                    resolve(res);
                });
                db.close();
            }
        });

    }).then(function (val) {
        cb(val);
    }).catch(function (err) {
        cb(err);
        console.log(err);
        console.log("catch")
    })

}

function listAccounts(cb) {

    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {

        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
            cb({
                id: 0,
                status: "DBerr"
            });
        } else {


            //HURRAY!! We are connected. :)
            console.log('Connection established to', url);

            // do some work here with the database.
            var collection = db.collection("account");

            //We have a cursor now with our find criteria
            var cursor = collection.find();
            var ret = [];
            //Lets iterate on the result
            cursor.toArray().then(function (res) {
                cb(res);
            });
            db.close();
        }
    });
}

function login(email, cb) {
    listAccounts(function (val) {
        for (i = 0; i < val.length; i++) {
            if (val[i].email == email) {
                //                console.log(val[i]._id);
                new Promise(function (resolve, reject) {


                    // Use connect method to connect to the Server
                    MongoClient.connect(url, function (err, db) {
                        if (err) {
                            console.log('Unable to connect to the mongoDB server CreateAccount. Error:');
                            reject(err);
                        } else {


                            //HURRAY!! We are connected. :)
                            console.log('create Account: Connection established to', url);

                            // do some work here with the database.
                            var collection = db.collection("account");

                            //                            var info = {
                            //                                $set: {
                            //                                    otp: Math.floor(Math.random() * 1000000)
                            //                                }
                            //                            };




                            //                       console.log("Random OTP : ", );
                            var otp = Math.floor(Math.random() * 1000000);
                            collection.update({
                                email: email
                            }, {
                                $set: {
                                    otp: otp
                                }
                            }, function (err, result) {
                                if (err) {
                                    console.log(err)
                                    reject(err);
                                } else {
                                    //                                    console.log("document inserted", result.ops[0]._id);
                                    resolve(result);
                                }
                            })



                            var propertiesObject = {
                                to: 'ebinx7@gmail.com',
                                msg: 'This is OTP for TalkMe App : ' + otp
                            };

                            request({
                                host: "proxy.cognizant.com",
                                port: 6050,
                                url: "https://sms-mail-server.herokuapp.com/",
                                qs: propertiesObject
                            }, function (err, response, body) {
                                if (err) {
                                    console.log("OTP send error : ", err);
                                    return;
                                }
                                console.log("Get response: " + response.statusCode);
                            });



                            //Close connection
                            db.close();
                        }
                    });
                }).then(function (val) {
                    console.log("resolved ");
                    //        callback({
                    //            id: val,
                    //            status: "msg saved"
                    //        });
                }).catch(function (val) {
                    console.log("rejected");
                    //                    console.log(val);
                    //        callback({
                    //            id: 0,
                    //            status: "Error in Account Creation : db error"
                    //        });

                })



                cb(email);
                break;
            }
        }
        cb("-1");
        //        console.log("outside loop");
    })
}

function saveMessageToDatabase(fromId, toId, msg) {


    new Promise(function (resolve, reject) {


        // Use connect method to connect to the Server
        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server CreateAccount. Error:');
                reject(err);
            } else {


                //HURRAY!! We are connected. :)
                console.log('create Account: Connection established to', url);

                // do some work here with the database.
                var collection = db.collection(fromId);

                var info = {
                    from: fromId,
                    to: toId,
                    msg: msg,
                    delivered: ""
                };




                //                       console.log("Random OTP : ", );
                collection.insert(info, function (err, result) {
                    if (err) {
                        console.log(err)
                        reject(err);
                    } else {
                        console.log("document inserted", result.ops[0]._id);
                        resolve(result.ops[0]._id);
                    }
                })


                //Close connection
                db.close();
            }
        });
    }).then(function (val) {
        console.log(val);
        //        callback({
        //            id: val,
        //            status: "msg saved"
        //        });
    }).catch(function (val) {
        console.log("rejected" + val);
        //                    console.log(val);
        //        callback({
        //            id: 0,
        //            status: "Error in Account Creation : db error"
        //        });

    })


}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


server.listen(3000);
var groups = [{
    name: "group1"
}];


app.use(fileUpload());

app.post('/upload', function (req, res) {
    var sampleFile;

    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }

    sampleFile = req.files.sampleFile;
    sampleFile.mv('filename.jpg', function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send('File uploaded!');
        }
    });
});



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', function (req, res) {

    login(req.query.email, function (val) {
        res.send(val);
        io.emit(val, "some ack");
    });
});


app.get('/groups', function (req, resp) {

    listGroups(function (res) {
        resp.send(res);
        console.log(res);
    });

});
app.get('/createGroup', function (req, res) {
    createGroup(req.query.name);
    var f = 0;
    console.log(groups.length);
    for (var i = 0; i < groups.length; i++) {
        if (groups[i].name == req.query.name) {
            console.log("duplication");
            f = 1;
        }
    }
    if (f == 0) {
        res.send("success")
    } else res.send("failure");
})

app.get('/accounts', function (req, resp) {

    listAccounts(function (res) {
        resp.send(res);
        console.log(res);
    });

});



function secondVerifyOTP(email, cb) {
    
    listAccounts(function (val) {
    console.log("testing OTP : ",email,"val = ",val);
        var f = 0;
        var otp = Math.floor(Math.random() * 1000000);
        for (i = 0; i < val.length; i++) {
            if (val[i].email == email ) {

                MongoClient.connect(url, function (err, db) {
                    if (err) {
                        console.log('Unable to connect to the mongoDB server CreateAccount. Error:');
                        reject(err);
                    } else {


                        //HURRAY!! We are connected. :)
                        console.log('verify OTP: Connection established to', url);

                        // do some work here with the database.
                        var collection = db.collection("account");

                        //                            var info = {
                        //                                $set: {
                        //                                    otp: Math.floor(Math.random() * 1000000)
                        //                                }
                        //                            };




                        //                       console.log("Random OTP : ", );
                        collection.update({
                            email: email
                        }, {
                            $set: {
                                otp: otp
                            }
                        }, function (err, result) {
                            if (err) {
                                console.log(err)
                                    //                                reject(err);
                            } else {
                                //                                    console.log("document inserted", result.ops[0]._id);
                                //                                resolve(result);
                            }
                        })


                        //Close connection
                        db.close();
                    }
                });

                cb({
                    id: val[i]._id,
                    status: "Account Updated1"
                });
                f = 1;
                break;
            }
        }
        if (f == 0) cb({
            id: 0,
            status: "Error in verification : OTP  not matched"
        });

    })
}




app.get('/secondVerifyOTP', function (req, res) {

    secondVerifyOTP(req.query.email,  function (val) {
        console.log("respose get");
        res.send(val);
        console.log(val);
    });

});

app.get('/createAccount', function (req, res) {
    createAccount(req.query.name, req.query.email, req.query.phone, function (val) {
        res.send(val);
        console.log(val);
    });
})

app.get('/verifyOTP', function (req, res) {
    verifyOTP(req.query.email, req.query.otp, function (val) {
        res.send(val);
        console.log(val);
        console.log(query.otp);
    });
})

app.get('/getImage', function (req, res) {
    debugger;
    //base64_encode(__dirname + "/static/images.png");
    im.readMetadata(__dirname + "/static/images.png", function (err, metadata) {
        //        if (err)
        //            console.log(err);
        //        else
        //            console.log('Shot at ' + metadata.exif.dateTimeOriginal);
    })

    res.send(base64_encode(__dirname + "/static/images.png"));
})

app.get('/sendMessage', function (req, res) {
    saveMessageToDatabase(req.query.from, req.query.to, req.query.msg);
    res.send("nothing");
});




io.on('connection', function (socket) {
    console.log("connected");
    io.emit('ack', "some ack");
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

});




var from,to,msg;
io.on('connection', function (socket) {
  
  socket.on('send', function (data) {
    console.log("data : ",data,"data ends");
      // data.to.forEach(function(val){
      //     var obj={type:"msg",content:data};
      // io.emit(val, obj);
      // })
      
      
      //connect away
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Connected to Database");

  //simple json record
    // data.status=[];
    // for(i=0;i<data.to.length;i++)
    //     {
    //         data.status.push(1)   
    //     }
    //insert record
    db.collection('msg').insert(data, function(err, records) {
        if (err) throw err;
        console.log("Record added as ",records.ops[0]._id);
        io.emit('newMsg',data);
        
    });
});
      
      
  
    console.log(data);
  });
    
socket.on('receivedAck', function (data) {
    console.log("message received : ");
})
    
    //changes to remove
        socket.on('receivedAck1', function (data) {
            console.log("1st message received : ");
            console.log("1st acknwoledge received : ");
        })
    
    
        socket.on('receivedAck22', function (data) {
            console.log("22nd message received : ");
            console.log("22nd acknwoledge received : ");
        })
    
   
    socket.on('sendAck', function (data) {
        var socketelement=true;
        var socketdata=false;
    console.log("message send : ");
    
   
    socket.on('sendAck33', function (data) {
        var socketelement=true;
        var socketdata=false;
    console.log("message send : ");
   
    socket.on('sendAckBin', function (data) {
        var socketelement=true;
        var socketdata=false;
    console.log("message send : ");
})
      //changes to remove

  
});


app.get('/listNames', function (req, res) {
    //var val=[];
    console.log()
    listAccounts(function (val) {

console.log(val);
res.send(val);

    })

    collection.insert(info, function (err, result) {
                                if (err) {
                                    console.log(err)
                                    reject(err);
                                } else {
                                    console.log("document inserted", result.ops[0]._id);
                                    //                                    resolve(result.ops[0]._id);
                                    resolve(email);

                                }
                            })




                            var propertiesObject = {
                                to: email,
                                msg: 'This is OTP for TalkMe App : ' + otp
                            };

                            request({
                                host: "proxy.cognizant.com",
                                port: 6050,
                                url: "https://sms-mail-server.herokuapp.com/",
                                qs: propertiesObject
                            }, function (err, response, body) {
                                if (err) {
                                    console.log("OTP send error : ", err);
                                    return;
    
                            request({
                                host: "proxy.cognizant.com",
                                port: 6050,
                                url: "https://sms-mail-server.herokuapp.com/",
                                qs: propertiesObject
                            }, function (err, response, body) {
                                if (err) {
                                    console.log("OTP send error : ", err);
                                    return;
                                }
                                console.log("Got response: " + response.statusCode);
                            });

                            //Close connection
                            db.close();
                        }                            }
   
})console.log("Got response: " + response.statusCode);
      console.log("Got response: " + response.statusCode);
    
    console.log("Got response: " + response.statusCode);
      console.log("Got response: " + response.statusCode);

                           
    
