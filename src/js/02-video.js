import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const KEY_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000)); 

function onPlay(currentTime){
    localStorage.setItem(KEY_TIME, Math.round(currentTime.seconds));
}

const startTime = localStorage.getItem(KEY_TIME);

player.setCurrentTime(startTime);
