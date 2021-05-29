(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// let scrollDiv = document.querySelector(".side-panel");
// SimpleScrollbar.initEl(scrollDiv);

var closeBtn = document.querySelector(".mobile-menu .close");
var hamburger = document.querySelector(".hamburger");
var mobileMenu = document.querySelector(".mobile-menu");
var mobileLink = mobileMenu.querySelectorAll(".mobile-link");
var overlay = document.querySelector(".overlay");

// Toggle 'menu-opened' class on the overlay
function toggleMenuClasses() {
  overlay.classList.toggle("menu-opened");
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = mobileLink[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var link = _step.value;

    link.addEventListener("click", toggleMenuClasses);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

hamburger.addEventListener("click", toggleMenuClasses);
closeBtn.addEventListener("click", toggleMenuClasses);
mobileMenu.addEventListener("click", toggleMenuClasses);

overlay.addEventListener("click", function () {
  overlay.classList.remove("menu-opened");
});

// Animations
var tl = gsap.timeline({ defaults: { duration: .8 } });

tl.from(".hero", {
  duration: 1,
  ease: "power4.in",
  delay: .08,
  opacity: 0
}).from(".brand", {
  delay: 0.2,
  opacity: 0
  // delay: -1,
}).from(".list-link", {
  opacity: 0,
  delay: -.8,
  stagger: {
    amount: 0.6
  }
}).from(".section-title span", {
  duration: 1.6,
  y: 50,
  ease: "power4.out",
  // delay: 0.8,
  skewY: 7,
  opacity: 0,
  stagger: {
    amount: 0.4
  }
}).from(".hero p", {
  opacity: 0,
  delay: -1,
  stagger: {
    amount: 0.4
  }
}).from(".hero .price, .hero .cta-container", {
  y: 50,
  opacity: 0,
  delay: -1,
  stagger: {
    amount: 0.4
  }
}).from(".item", {
  y: 50,
  opacity: 0,
  delay: -1,
  stagger: {
    amount: 0.4
  }
}).from(".hero img", {
  y: 50,
  opacity: 0,
  delay: -1,
  stagger: {
    amount: 0.4
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBOztBQUVBLElBQUksV0FBVyxTQUFTLGFBQVQsQ0FBdUIscUJBQXZCLENBQWY7QUFDQSxJQUFJLFlBQVksU0FBUyxhQUFULENBQXVCLFlBQXZCLENBQWhCO0FBQ0EsSUFBSSxhQUFhLFNBQVMsYUFBVCxDQUF1QixjQUF2QixDQUFqQjtBQUNBLElBQUksYUFBYSxXQUFXLGdCQUFYLENBQTRCLGNBQTVCLENBQWpCO0FBQ0EsSUFBSSxVQUFVLFNBQVMsYUFBVCxDQUF1QixVQUF2QixDQUFkOztBQUVBO0FBQ0EsU0FBUyxpQkFBVCxHQUE2QjtBQUMzQixVQUFRLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsYUFBekI7QUFDRDs7Ozs7OztBQUVELHVCQUFpQixVQUFqQiw4SEFBNkI7QUFBQSxRQUFwQixJQUFvQjs7QUFDM0IsU0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixpQkFBL0I7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQUVELFVBQVUsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsaUJBQXBDO0FBQ0EsU0FBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxpQkFBbkM7QUFDQSxXQUFXLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLGlCQUFyQzs7QUFFQSxRQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQVk7QUFDNUMsVUFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLGFBQXpCO0FBQ0QsQ0FGRDs7QUFJQTtBQUNBLElBQUksS0FBSyxLQUFLLFFBQUwsQ0FBYyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQVosRUFBWixFQUFkLENBQVQ7O0FBRUEsR0FBRyxJQUFILENBQVEsT0FBUixFQUFpQjtBQUNiLFlBQVUsQ0FERztBQUViLFFBQU0sV0FGTztBQUdiLFNBQU8sR0FITTtBQUliLFdBQVM7QUFKSSxDQUFqQixFQU1DLElBTkQsQ0FNTSxRQU5OLEVBTWdCO0FBQ2QsU0FBTyxHQURPO0FBRWQsV0FBUztBQUNUO0FBSGMsQ0FOaEIsRUFXQyxJQVhELENBV00sWUFYTixFQVdvQjtBQUNoQixXQUFTLENBRE87QUFFaEIsU0FBTyxDQUFDLEVBRlE7QUFHaEIsV0FBUztBQUNQLFlBQVE7QUFERDtBQUhPLENBWHBCLEVBa0JHLElBbEJILENBa0JRLHFCQWxCUixFQWtCK0I7QUFDM0IsWUFBVSxHQURpQjtBQUUzQixLQUFHLEVBRndCO0FBRzNCLFFBQU0sWUFIcUI7QUFJM0I7QUFDQSxTQUFPLENBTG9CO0FBTTNCLFdBQVMsQ0FOa0I7QUFPM0IsV0FBUztBQUNQLFlBQVE7QUFERDtBQVBrQixDQWxCL0IsRUE2QkcsSUE3QkgsQ0E2QlEsU0E3QlIsRUE2Qm1CO0FBQ2YsV0FBUyxDQURNO0FBRWYsU0FBTyxDQUFDLENBRk87QUFHZixXQUFTO0FBQ1AsWUFBUTtBQUREO0FBSE0sQ0E3Qm5CLEVBb0NHLElBcENILENBb0NRLG9DQXBDUixFQW9DOEM7QUFDMUMsS0FBRyxFQUR1QztBQUUxQyxXQUFTLENBRmlDO0FBRzFDLFNBQU8sQ0FBQyxDQUhrQztBQUkxQyxXQUFTO0FBQ1AsWUFBUTtBQUREO0FBSmlDLENBcEM5QyxFQTRDRyxJQTVDSCxDQTRDUSxPQTVDUixFQTRDaUI7QUFDYixLQUFHLEVBRFU7QUFFYixXQUFTLENBRkk7QUFHYixTQUFPLENBQUMsQ0FISztBQUliLFdBQVM7QUFDUCxZQUFRO0FBREQ7QUFKSSxDQTVDakIsRUFvREcsSUFwREgsQ0FvRFEsV0FwRFIsRUFvRHFCO0FBQ2pCLEtBQUcsRUFEYztBQUVqQixXQUFTLENBRlE7QUFHakIsU0FBTyxDQUFDLENBSFM7QUFJakIsV0FBUztBQUNQLFlBQVE7QUFERDtBQUpRLENBcERyQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIGxldCBzY3JvbGxEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtcGFuZWxcIik7XHJcbi8vIFNpbXBsZVNjcm9sbGJhci5pbml0RWwoc2Nyb2xsRGl2KTtcclxuXHJcbmxldCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnUgLmNsb3NlXCIpO1xyXG5sZXQgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIik7XHJcbmxldCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudVwiKTtcclxubGV0IG1vYmlsZUxpbmsgPSBtb2JpbGVNZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9iaWxlLWxpbmtcIik7XHJcbmxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG5cclxuLy8gVG9nZ2xlICdtZW51LW9wZW5lZCcgY2xhc3Mgb24gdGhlIG92ZXJsYXlcclxuZnVuY3Rpb24gdG9nZ2xlTWVudUNsYXNzZXMoKSB7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudS1vcGVuZWRcIik7XHJcbn1cclxuXHJcbmZvciAobGV0IGxpbmsgb2YgbW9iaWxlTGluaykge1xyXG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1lbnVDbGFzc2VzKTtcclxufVxyXG5cclxuaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVNZW51Q2xhc3Nlcyk7XHJcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVNZW51Q2xhc3Nlcyk7XHJcbm1vYmlsZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1lbnVDbGFzc2VzKTtcclxuXHJcbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LW9wZW5lZFwiKTtcclxufSk7XHJcblxyXG4vLyBBbmltYXRpb25zXHJcbnZhciB0bCA9IGdzYXAudGltZWxpbmUoeyBkZWZhdWx0czogeyBkdXJhdGlvbjogLjggfSB9KTtcclxuXHJcbnRsLmZyb20oXCIuaGVyb1wiLCB7XHJcbiAgICBkdXJhdGlvbjogMSxcclxuICAgIGVhc2U6IFwicG93ZXI0LmluXCIsXHJcbiAgICBkZWxheTogLjA4LFxyXG4gICAgb3BhY2l0eTogMFxyXG4gIH0pXHJcbi5mcm9tKFwiLmJyYW5kXCIsIHtcclxuICBkZWxheTogMC4yLFxyXG4gIG9wYWNpdHk6IDAsXHJcbiAgLy8gZGVsYXk6IC0xLFxyXG59KVxyXG4uZnJvbShcIi5saXN0LWxpbmtcIiwge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIGRlbGF5OiAtLjgsXHJcbiAgICBzdGFnZ2VyOiB7XHJcbiAgICAgIGFtb3VudDogMC42LFxyXG4gICAgfSxcclxuICB9KVxyXG4gIC5mcm9tKFwiLnNlY3Rpb24tdGl0bGUgc3BhblwiLCB7XHJcbiAgICBkdXJhdGlvbjogMS42LFxyXG4gICAgeTogNTAsXHJcbiAgICBlYXNlOiBcInBvd2VyNC5vdXRcIixcclxuICAgIC8vIGRlbGF5OiAwLjgsXHJcbiAgICBza2V3WTogNyxcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICBzdGFnZ2VyOiB7XHJcbiAgICAgIGFtb3VudDogMC40LFxyXG4gICAgfSxcclxuICB9KVxyXG4gIC5mcm9tKFwiLmhlcm8gcFwiLCB7XHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgZGVsYXk6IC0xLFxyXG4gICAgc3RhZ2dlcjoge1xyXG4gICAgICBhbW91bnQ6IDAuNCxcclxuICAgIH0sXHJcbiAgfSlcclxuICAuZnJvbShcIi5oZXJvIC5wcmljZSwgLmhlcm8gLmN0YS1jb250YWluZXJcIiwge1xyXG4gICAgeTogNTAsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgZGVsYXk6IC0xLFxyXG4gICAgc3RhZ2dlcjoge1xyXG4gICAgICBhbW91bnQ6IDAuNCxcclxuICAgIH0sXHJcbiAgfSlcclxuICAuZnJvbShcIi5pdGVtXCIsIHtcclxuICAgIHk6IDUwLFxyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIGRlbGF5OiAtMSxcclxuICAgIHN0YWdnZXI6IHtcclxuICAgICAgYW1vdW50OiAwLjQsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgLmZyb20oXCIuaGVybyBpbWdcIiwge1xyXG4gICAgeTogNTAsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgZGVsYXk6IC0xLFxyXG4gICAgc3RhZ2dlcjoge1xyXG4gICAgICBhbW91bnQ6IDAuNCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiJdfQ==
