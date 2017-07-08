$('video').mediaelementplayer({
});

video = document.querySelector('video');
video.addEventListener('timeupdate', () => {
  const currentTime = video.currentTime;
  const caption = document.querySelector('.caption')
  $('.caption span').attr('class', '');

  if (currentTime < 0.24) {}
  else if (currentTime < 4.13) {
    caption.querySelector('span:nth-of-type(1)').className = 'highlighted';
  } else if (currentTime < 7.535) {
    caption.querySelector('span:nth-of-type(2)').className = 'highlighted';
  } else if (currentTime < 11.27) {
    caption.querySelector('span:nth-of-type(3)').className = 'highlighted';
  } else if (currentTime < 13.96) {
    caption.querySelector('span:nth-of-type(4)').className = 'highlighted';
  } else if (currentTime < 17.94) {
    caption.querySelectorAll('p')[1].querySelector('span:nth-of-type(1)').className = 'highlighted';
  } else if (currentTime < 22.37) {
    caption.querySelectorAll('p')[1].querySelector('span:nth-of-type(2)').className = 'highlighted';
  } else if (currentTime < 26.88) {
    caption.querySelectorAll('p')[1].querySelector('span:nth-of-type(3)').className = 'highlighted';
  } else if (currentTime < 30.92) {
    caption.querySelectorAll('p')[1].querySelector('span:nth-of-type(4)').className = 'highlighted';
  } else if (currentTime < 34.73) {
    caption.querySelectorAll('p')[1].querySelector('span:nth-of-type(5)').className = 'highlighted';
  } else if (currentTime < 39.43) {
    caption.querySelectorAll('p')[1].querySelector('span:nth-of-type(6)').className = 'highlighted';
  } else if (currentTime < 41.19) {
    caption.querySelectorAll('p')[1].querySelector('span:nth-of-type(7)').className = 'highlighted';
  } else if (currentTime < 46.30) {
    caption.querySelectorAll('p')[2].querySelector('span:nth-of-type(1)').className = 'highlighted';
  } else if (currentTime < 49.27) {
    caption.querySelectorAll('p')[2].querySelector('span:nth-of-type(2)').className = 'highlighted';
  } else if (currentTime < 53.76) {
    caption.querySelectorAll('p')[2].querySelector('span:nth-of-type(3)').className = 'highlighted';
  } else if (currentTime < 57.78) {
    caption.querySelectorAll('p')[2].querySelector('span:nth-of-type(4)').className = 'highlighted';
  } else if (currentTime < 60.15) {
    caption.querySelectorAll('p')[2].querySelector('span:nth-of-type(5)').className = 'highlighted';
  }
})
