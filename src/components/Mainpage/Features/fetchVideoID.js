// import { useEffect, useState } from "react";


// export default function useFetch(){
//     const [videoID, setVideoID] = useState(null);
//     const url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCbf6oBW8ojERFw1AHUpBu2CdCcdjrovVo&channelId=UCfBIIJWYgTFHZW7B-nsVl4w&part=snippet,id&order=date&maxResults=5"

//     useEffect(async () => {
//         const response  = await fetch(url);
//         const data = response.json();
//         const item = data["items"];
//         const result = [];
//         for (const element of item){
//             result.push(element["id"]["videoId"])
//         }
//         setVideoID(result)
//     },[])

//     return {videoID};
// }
