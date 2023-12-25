import videoData from "../data/video.json"



export const getVideos = async(searchQuery) => {

    const Youtube_key = process.env.NEXT_PUBLIC_YOUTUBE_KEY;
    // console.log(Youtube_key , "lkew")


    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailer&key=[YOUR_API_KEY] HTTP/1.1


    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${Youtube_key}`)
    // console.log(response , "response")

    const data = await response.json()
    return data?.items?.map((item) => {         
        return {
            title :item?.snippet?.title,
            imgUrl : item?.snippet?.thumbnails.high.url,
            id : item?.id.videoId ? item?.id.videoId  :  0 ,
            description : item?.snippet?.description
        }
    })  ;
}


export const getByYoutubeVideoId =async (videoId ) =>{

    const Youtube_key = process.env.NEXT_PUBLIC_YOUTUBE_KEY;
    // console.log(Youtube_key , "lkew")


    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailer&key=[YOUR_API_KEY] HTTP/1.1


    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${Youtube_key} `)
    // console.log(response , "response")

    const data = await response.json()
    return data?.items?.map((item) => { 
        // console.log(item)        
        return {
            title :item?.snippet?.title,
            imgUrl : item?.snippet?.thumbnails.high.url,
            id : item?.id.videoId ? item?.id.videoId  :  0 ,
            description : item?.snippet?.description,
            publishedAt : item?.snippet.publishedAt,
            viewCount : item?.statistics.viewCount,
            likeCount : item?.statistics?.likeCount,
            favoriteCount : item?.statistics?.favoriteCount,
            commentCount : item?.statistics?.commentCount,
            cast : item?.snippet?.channelTitle,
        }
    })  ;

}

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=oyRxxpD3yNw&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
