
const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// Navbar
const navMenu = document.querySelector('.nav-menu')
  const navOpenBtn = document.querySelector('.nav-toggle-open')
  const navCloseBtn = document.querySelector('.nav-toggle-close')

  const openNavHandler = () => {
    navMenu.style.display = 'flex'
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block'
  }

  const closeNavHandler = () => {
    navMenu.style.display = 'none'
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none'
  }

  navOpenBtn.addEventListener('click', openNavHandler)
  navCloseBtn.addEventListener('click', closeNavHandler)

    //== close nav menu on click of nav link on small screen

  const navItems = navMenu.querySelectorAll('a');  
  if(window.innerWidth < 768) {
    navItems.forEach(item => {
      item.addEventListener('click', closeNavHandler)
    })
  }



var splide = new Splide( '#main-carousel', {
  pagination: false,
} );

var thumbnails = document.getElementsByClassName(     'thumbnail' );
var current;

for ( var i = 0; i < thumbnails.length; i++ ) {
  initThumbnail( thumbnails[ i ], i );
}

function initThumbnail( thumbnail, index ) {
  thumbnail.addEventListener( 'click', function () {
    splide.go( index );
  } );
}

splide.on( 'mounted move', function () {
  var thumbnail = thumbnails[ splide.index ];

  if ( thumbnail ) {
    if ( current ) {
      current.classList.remove( 'is-active' );
    }

    thumbnail.classList.add( 'is-active' );
    current = thumbnail;
  }
} );

splide.mount();



const btns = document.querySelectorAll(".acc-btn");

// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");

  // the acc-content
  const content = this.nextElementSibling;

  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));



// btc graph
(function(b,i,t,C,O,I,N) {
  window.addEventListener('load',function() {
    if(b.getElementById(C))return;
    I=b.createElement(i),N=b.getElementsByTagName(i)[0];
    I.src=t;I.id=C;N.parentNode.insertBefore(I, N);
  },false)
})(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');
