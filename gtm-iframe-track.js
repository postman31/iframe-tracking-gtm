var isOverIFrame = false

var iframes = window.document.querySelectorAll('iframe');

function trackIframeClicks(frames){
  window.addEventListener('blur',function(e) {
    frames.forEach(function (frame, index) {
      if (frame.mouseOver) {
        window.dataLayer.push({
          'event': 'ifameClick',
          'frameSource': frame.src
        });
        // console.log(frame.src);
      }
    })
  });
}

function setListeners (frames) {
  frames.forEach(function(frame) {
    frame.mouseOver = false
    frame.addEventListener('mouseenter', () =>{
      frame.mouseOver = true
      // console.log('mouse in iframe')
    });
    frame.addEventListener('mouseleave', () =>{
      frame.mouseOver = false
      // console.log('mouse out of iframe')
    });
  })
}

setListeners(iframes);
trackIframeClicks(iframes);
