Marquee.prototype = Object.create(Nanoncomponent.prototype)

Marquee.prototype.createElement = function (state) {
  return html`
  <a href="http://myriad.industries/" target="_blank">
  <div class="player-marquee">
    <div class="marquee marquee3k" data-speed="1"
      >
      <p>-  You can have high quality sounds -
      
      </p>
    </div>
  </div>
  </a>
  `
}