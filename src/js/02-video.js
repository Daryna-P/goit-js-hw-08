import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000)); 

function onPlay(currentTime){
    localStorage.setItem('videoplayer-current-time', currentTime.seconds);
}

const startTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(startTime);
