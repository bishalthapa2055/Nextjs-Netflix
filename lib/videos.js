import videoData from "../data/video.json"



export const getVideos = async() => {

    const Youtube_key = process.env.YOUTUBE_KEY;


    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailer&key=[YOUR_API_KEY] HTTP/1.1


    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailer&key=${Youtube_key}`)

    const data = await response.json()
    return data?.items.map((item) => {         
        return {
            title :item?.snippet?.title,
            imgUrl : item?.snippet?.thumbnails.high.url,
            id : item.id.videoId ,
            description : item?.snippet?.description
        }
    })  ;
}