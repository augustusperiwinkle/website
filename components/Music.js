import React from 'react';
import Footer from './Footer';
import Credit from './Credit';
import '../styles/music.css';
import musicData from '../musicData';

function Music() {
  return (
    <div className="page-wrapper">
      <div id="music-wrapper">
        {musicData.map((song) => {
          return (
            <div className="song-wrapper">
              <div className="left-column">
                <div className="song-name">{song.songName}</div>
                <img
                  src={song.albumArtPathname}
                  alt={`${song.songName} Artwork`}
                  referrerpolicy="no-referrer"
                />
              </div>
              <div className="right-column">
                <div className="credits-wrapper">
                  <div className="release-date">
                    {!song.preSaveLink
                      ? `Released ${song.releaseDate}`
                      : `Release Date ${song.releaseDate}`}
                  </div>
                  <div className="master-credit">
                    Music & Lyrics by Derek Louis
                  </div>
                  <div className="studio">Recorded at {song.studio}</div>
                  {song.credits.map((credit) => {
                    return (
                      <div className="credit">
                        <span>{credit[0]}</span>: {credit[1]}
                      </div>
                    );
                  })}
                </div>
                {!song.preSaveLink ? (
                  <div className="links-wrapper">
                    <a
                      href={song.spotifyLink}
                      target="_blank"
                      className="song-link-anchor"
                    >
                      <i className="fab fa-spotify song-link-icon" />
                    </a>
                    <a
                      href={song.appleMusicLink}
                      target="_blank"
                      className="song-link-anchor"
                    >
                      <i className="fab fa-apple song-link-icon" />
                    </a>
                    <a
                      href={song.youTubeLink}
                      target="_blank"
                      className="song-link-anchor"
                    >
                      <i className="fab fa-youtube song-link-icon" />
                    </a>
                    <a
                      href={song.soundCloudLink}
                      target="_blank"
                      className="song-link-anchor"
                    >
                      <i className="fab fa-soundcloud song-link-icon" />
                    </a>
                    <a
                      href={song.amazonMusicLink}
                      target="_blank"
                      className="song-link-anchor"
                    >
                      <i className="fab fa-amazon song-link-icon" />
                    </a>
                  </div>
                ) : (
                  <a
                    href={song.preSaveLink}
                    target="_blank"
                    className="pre-save-button"
                  >
                    Pre-Save
                  </a>
                )}
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
