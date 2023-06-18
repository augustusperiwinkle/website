import React from 'react';
import Footer from './Footer';
import Credit from './Credit';
import './styles/music.css';
import musicData from '../musicData';

function Music(props) {
  return (
    <div className="page-wrapper">
      <div id="master-credit">
        All songs written and performed by Derek Louis unless otherwise
        specified
      </div>
      <div id="music-wrapper">
        {musicData.map((song) => {
          return (
            <div className="song-wrapper">
              <div className="left-column">
                <div className="song-name">{song.songName}</div>
                <img src={`./albumArt/${song.albumArtPathname}.jpg`} />
              </div>
              <div className="right-column">
                <div className="credits-wrapper">
                  {song.credits.map((credit) => {
                    return (
                      <div className="credit">
                        <span>{credit[0]}</span>: {credit[1]}
                      </div>
                    );
                  })}
                </div>
                <div className="links-wrapper">
                  <a
                    href={song.spotifyLink}
                    target="_blank"
                    className="song-link-anchor"
                  >
                    <i className="fab fa-spotify song-link-icon"></i>
                  </a>
                  <a
                    href={song.appleMusicLink}
                    target="_blank"
                    className="song-link-anchor"
                  >
                    <i className="fab fa-apple song-link-icon"></i>
                  </a>
                  <a
                    href={song.amazonMusicLink}
                    target="_blank"
                    className="song-link-anchor"
                  >
                    <i className="fab fa-amazon song-link-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
      <Credit />
    </div>
  );
}

export default Music;
