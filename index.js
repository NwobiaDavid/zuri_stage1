import express from 'express'

const app = express();
const port = 3000 || process.env.PORT;

function getCurrentUTCTime(){
    const now = new Date();
    const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    return utcTime.toISOString().replace(/\.\d{3}Z$/, 'Z');
  };

app.get("/api", (req,res)=>{
    const {slack_name, track} = req.query;

    if(!track || !slack_name){
        res.json({error: 'some parameters are missing...'})
    }

    const current_day = new Date().toLocaleString({weekday: 'long'});
    const utcTime = getCurrentUTCTime();
})

app.listen(port,()=>{
    console.log(`listening at port: ${port}...`);
})