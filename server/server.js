import express from 'express';
import mongoose from 'mongoose';
import data from './starterData.js'
import Channels from './dbModel.js';

// app config 
const app=express();
const port = 9000;

//middle ware needed to parse json body 

app.use(express.json())
app.use((req,res,next) => {
    // setting the response headers for open cors access 
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();

})
// db config 

const connection = "mongodb://db:27017/slackchannels";
const localhost = "mongodb://localhost:27017/slackchannels";
// const connection = "mongodb://mongodb/jl";
mongoose.connect(localhost, {
 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
 
}).then(() => {
    console.log('successfully connected to the database');
    data.forEach(record => {
        console.log(record)
    
        Channels.create(record, (err, data) => {
            if (!err) {          
                console.log('Entry successful')
             
                console.log(record)        
    
            } else {
                console.log('Entry unsuccessful')
                console.log(err)
            }
        })
    
    })


}).catch(err => {
    console.log('error connecting to the database');
    console.log(err)
    process.exit();
});

// run initially to populate database which is mounted locally 
// record = json object 




app.get('/', (req,res) => {
    res.status(200).send('Slack Clone')
})


app.get('/v1/channels/', (req,res) => {


    Channels.find((err,data) => {
        if (!err) {
            console.log(typeof(data))
            
            console.log(data)    
                            
            // 201 -> created 
            res.status(201).send(data)
            

        } else {
            console.log(err)
            res.status(500).send(err)
        }

        
    } )
})

app.get('/v1/channels/find', (req,res) => {


    Channels.find((err,data) => {
        if (!err) {
            console.log(typeof(data))
            
            console.log(data)    
                            
            // 201 -> created 
            res.status(201).send(data)
            

        } else {
            console.log(err)
            res.status(500).send(err)
        }

        
    } )
})




// add channel 
app.post('/v1/channels/add', (req,res) => {
    const newChannel = req.body

    Channels.create(newChannel, (err, data) => {
        if (!err) {          
            console.log('Entry successful')
            console.log(newChannel)   
            console.log(data)        
            res.status(201).send(data)

        } else {
            console.log('Entry unsuccessful')
            console.log(err)
        }
    })
})


app.post('/v1/channels/getChannelDetail', (req,res) => {
    const requestData = req.body

    Channels.findOne(requestData, (err, data) => {
        if (!err) {          
            console.log(`${data} retreived from the database`)                 
            res.status(201).send(data)

        } else {
            console.log('There was an error locating data')
            console.log(err)
        }
    })
})

app.listen(port, () => console.log(`Listening on port : ${port}`))


