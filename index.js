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

    const current_day = new Date().toLocaleString('en-UK',{weekday: 'long'});
    const utc_time = getCurrentUTCTime();
    const github_file_url = 'https://github.com/NwobiaDavid/zuri_stage1/blob/main/index.js';
    const github_repo_url= 'https://github.com/NwobiaDavid/zuri_stage1';

    const json_obj = {
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url,
        github_repo_url,
        status_code: 200
    }

    res.json(json_obj);
})

app.listen(port,()=>{
    console.log(`listening at port: ${port}...`);
})