$('video').mediaelementplayer({
});

const caption = document.querySelector('.caption')
const timeCutOffs = [
  0.24, 4.13, 7.535, 11.27, 13.96, 17.94, 22.37, 26.88, 30.92, 34.73, 39.43, 41.19, 46.30, 49.27, 53.76, 57.78, 60.15
];
const timeSpanMapping = {}
for (let i = 0; i < timeCutOffs.length-1; i += 1) {
  timeSpanMapping[timeCutOffs[i+1]] = caption.querySelectorAll('span')[i];
}

video = document.querySelector('video');
video.addEventListener('timeupdate', () => {
  const currentTime = video.currentTime;
  $('.caption span').attr('class', '');

  for (let i = 0; i < timeCutOffs.length; i += 1) {
    if (currentTime < timeCutOffs[i+1]) {
      caption.querySelectorAll('span')[i].className = 'highlighted';
      break;
    }
  }
})

caption.addEventListener('click', (event) => {
  const span = event.target;
  if (span.tagName === 'SPAN') {
    Object.keys(timeSpanMapping).forEach((key) => {
      if (timeSpanMapping[key] === span) {
        const index = timeCutOffs.indexOf(parseFloat(key));
        const previousKey = timeCutOffs[index-1];
        video.currentTime = previousKey;
      }
    })
  }
})
