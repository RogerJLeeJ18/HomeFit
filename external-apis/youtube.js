const axios = require('axios');
const { YOUTUBE_API_KEY } = require('../config.js');
const getVideo = (workoutUrl, callback) => {
    // const id = workoutUrl.slice(30);
    const obj = { 
        params: {
            part: 'snippet',
            id: workoutUrl,
            key: YOUTUBE_API_KEY
        }
    }
    return axios.get('https://www.googleapis.com/youtube/v3/videos', obj);
};

module.exports = getVideo;
