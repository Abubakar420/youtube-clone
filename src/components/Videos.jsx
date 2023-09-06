/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import menu1 from '../assets/menu1.jpg';
import menu2 from '../assets/menu2.png';
import menu3 from '../assets/menu3.jpg';
import menu4 from '../assets/menu4.jpg';
import menu5 from '../assets/menu5.jpg';

const YOUTUBE_API_KEY = 'AIzaSyDyueKazZ8fND2pEHaPsJGF2mMlvRYnnkI';

export default function Videos({ isNavOpen }) {
  const [videos, setVideos] = useState([]);
  console.log('videos', videos);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=reactjs&key=${YOUTUBE_API_KEY}`,
      )
      .then((response) => {
        console.log('response', response);
        setVideos(response?.data?.items);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <div className={` ${isNavOpen ? 'video_clicked' : 'main'}`}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1%' }}>
        {videos.map((item) => (
          <div className="dashboard">
            <div className="video_container">
              <img className="thumbnail" src={item?.snippet.thumbnails.high.url} alt="Thumbnail" />
              <div className="contetnt">
                <img
                  className="channel_icon"
                  src={item?.snippet.thumbnails.medium.url}
                  alt="Icon"
                />
                <div className="info">
                  <h4 className="title">{item?.snippet.title}</h4>
                  <p className="channel_name">{item?.snippet.channelTitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="timepass_main_div">
        <h4>
          <ClearAllIcon />
          Shorts
        </h4>
        {/* 1st short video */}
        <div className="main_sub_div">
          <div className="short_main_div">
            <img src={menu1} alt="Example Image" />
            <div className="video_captions">
              <h5>EveryDay value Burgur Short Videos</h5>
            </div>
          </div>
          {/* 2nd short video */}
          <div className="short_main_div">
            <img src={menu2} alt="Example Image" />

            <div className="video_captions">
              <h5>ALACARTE&COMBOS BURGUR VIDEO</h5>
            </div>
          </div>
          {/* 3rd short video */}
          <div className="short_main_div">
            <img src={menu3} alt="Example Image" />
            <div className="video_captions">
              <h5>SIGNATURE BOXES DEAL SHORT VIDEO</h5>
            </div>
          </div>
          {/* 4th short video */}
          <div className="short_main_div">
            <div className="video_captions">
              <img src={menu4} alt="Example Image" />
              <h5>SHARING DEAL SHORT VIDEO</h5>
            </div>
          </div>
          {/* 5th short video */}
          <div className="short_main_div">
            <img src={menu5} alt="Example Image" />
            <div className="video_captions">
              <h5>SNACKS & BEVERAGES SHORT VIDEO</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
