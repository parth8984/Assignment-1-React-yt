import React from 'react';
import './App.css';
import VideoCard from './VideoCard'


function App() {
const videos = [

  { id: 1,
    title: "Rgpv Latest Update || Today News",
    thumbnailUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_1MKO65TUpttG3OK5qpFqlrUW_lpWNA2KJiN0j_q6fGH58TCUjMozxN8REn7b1RahuNb539L2ggKsY2Jcm7Poi0vpv7AvcvFwsvgKOnGuuZMDK6CGTzWRCOjt0YzbjL5F4gaJ8IeXS3eFricD7j26D_D6coAueFpIZ1Wxyt1yPZG3VBUyENwTJWkB/s1200/rgpv%20news.png",
    likes: "10k likes",
    views: "100k views",
    channelName: "Parth Patel 2.0",
    channelLogoUrl: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/05/logo-contest-1-e1527122253952.png?auto=format&q=60&fit=max&w=930",
   },
   { id: 2,
    title: " FASTEST Way to Learn Web Dev ||",
    thumbnailUrl: "https://i.ytimg.com/vi/eX5sfvOO2kQ/maxresdefault.jpg",
    likes: "91 likes",
    views: "1.1k views",
    channelName: "Technical Suneja",
    channelLogoUrl: "https://yt3.googleusercontent.com/f-a0P-cpVfBwfyBNmEE2CRUpJHFQEjtA_h_LxIKtg05XlneojDSyUsn1eaqYAnWSKTfHybq-8w=s900-c-k-c0x00ffffff-no-rj ",
   },
   { id: 3,
    title: " Super Best Motivational video ||",
    thumbnailUrl: "https://i.ytimg.com/vi/fNHxGJqPJfY/maxresdefault.jpg",
    likes: "99k likes",
    views: "1.2M views",
    channelName: "Deepak Daiya",
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/AOPolaTGjT03Pyd8cjKJeItuj5ktXpkqlbF0Vu_6lFYJIw=s900-c-k-c0x00ffffff-no-rj ",
   },
   { id: 4,
    title: "How to become rich in 20s Amitji",
    thumbnailUrl: "https://d33g7sdvsfd029.cloudfront.net/paid_course3/2023-01-25-0.8935732920773913.png",
    likes: "799 likes",
    views: "1.5k views",
    channelName: "Mahatmaji Tech.",
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/AGIKgqN6rQpfSJPH9WYRRnTKeB_pxwbmiKUwWVTyvw3Z81o=s900-c-k-c0x00ffffff-no-rj",
   },
   { id: 5,
    title: "How to clear backlogs in college",
    thumbnailUrl: "https://i.ytimg.com/vi/YwvzuOyE_6I/maxresdefault.jpg",
    likes: "500 likes",
    views: "5.6k views",
    channelName: "Aman Dhatterwal",
    channelLogoUrl: "https://media.licdn.com/dms/image/C4E03AQFAoY-MSYJsCA/profile-displayphoto-shrink_800_800/0/1600154260690?e=2147483647&v=beta&t=l_BTSPSMWjK-RDRRX0-YsghTD3ij8PFmqxAy6ImL5XM",
   },
   { id: 6,
    title: "World cup 2024 Biggest update ||",
    thumbnailUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/t20-world-cup-cricket-match-youtube-thumbnail-design-template-5687748aef5d2f41869b10e1bc61f741_screen.jpg?ts=1666193532",
    likes: "100k likes",
    views: "5.1M views",
    channelName: "Virat Chiku Kohli",
    channelLogoUrl: "https://media.istockphoto.com/id/1313644269/vector/gold-and-silver-circle-star-logo-template.jpg?s=612x612&w=0&k=20&c=hDqCI9qTkNqNcKa6XS7aBim7xKz8cZbnm80Z_xiU2DI=",
   },
   { id: 7,
    title: "Poor to Rich in only  year in 2024",
    thumbnailUrl: "https://cdn.propertyupdate.com.au/wp-content/uploads/2018/01/rich-and-poor-800x450.jpg",
    likes: "10k likes",
    views: "3.8M views",
    channelName: "Aapka SeeKen ",
    channelLogoUrl: "https://play-lh.googleusercontent.com/ieksUGwv9aufB6HwR41HOxtLAn4Xj64lUZRerVazF6oM_uwQKUmZcdMvfI0qH-6V0Bw",
   },
   { id: 8,
    title: "Best teasty chicken recipe by Parth ",
    thumbnailUrl: "https://i.ytimg.com/vi/TLYU0QpMefU/maxresdefault.jpg",
    likes: "100k likes",
    views: "9.8M views",
    channelName: "Roast Chicken",
    channelLogoUrl: "https://static.vecteezy.com/system/resources/thumbnails/007/438/056/small/chicken-leg-logo-chicken-leg-icon-chicken-fried-logo-chicken-leg-piece-logo-rooster-logo-chicken-hot-food-logo-design-template-vector.jpg",
   },
   { id: 9,
    title: "Dark secret of YT (Must Watch)",
    thumbnailUrl: " https://wonderfulengineering.com/wp-content/uploads/2017/06/YouTube-Dark-Secrets-3.jpg",
    likes: "1k likes",
    views: "50k views",
    channelName: "Technical Men",
    channelLogoUrl: "https://i.ytimg.com/vi/jC5MQJ8BZqw/sddefault.jpg",
   },
   { id: 10,
    title: "How to Avoid distraction While Study",
    thumbnailUrl: "https://i.ytimg.com/vi/IJ0wrLO2l30/maxresdefault.jpg",
    likes: "1.9k likes",
    views: "500k views",
    channelName: "Sonu Sharma ",
    channelLogoUrl: "https://pincliff.com/wp-content/uploads/2022/07/Untitled-55.png",
   }
]
   


return(
   
<div>

{videos.map((pixellab,i)=>{
  console.log(pixellab);
  return <VideoCard id = {pixellab.id} title = {pixellab.title} thumbnailUrl= {pixellab.thumbnailUrl} channelLogoUrl = {pixellab.channelLogoUrl} channelName = {pixellab.channelName} views = {pixellab.views} likes={pixellab.likes} />
})}

  </div> 


); 
 }


export default App;
