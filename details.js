// Product_Details_Banner_JS
const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

// AddOn Checked Wrapper
// JavaScript to toggle checkbox when the div is clicked
document
  .getElementById("check_ed_wrapper")
  .addEventListener("click", function () {
    var checkbox = document.getElementById("check_ed");
    checkbox.checked = !checkbox.checked;
  });

document
  .getElementById("check_ed_wrapper_1")
  .addEventListener("click", function () {
    var checkbox = document.getElementById("check_ed_1");
    checkbox.checked = !checkbox.checked;
  });

document
  .getElementById("check_ed_wrapper_2")
  .addEventListener("click", function () {
    var checkbox = document.getElementById("check_ed_2");
    checkbox.checked = !checkbox.checked;
  });

// pincodejs

// headeSearchDiv
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// tabbar

// loginpopup
document.getElementById("popupBtn").addEventListener("click", function () {
  document.getElementById("popupBackground").style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("popupBackground").style.display = "none";
});

document
  .getElementById("signupPopupbtnn")
  .addEventListener("click", function () {
    document.getElementById("popupBackground").style.display = "none";
  });

  document
  .getElementById("signupPopupbtnn")
  .addEventListener("click", function () {
    document.getElementById("popupBackground_signup").style.display = "none";
  });


  document
  .getElementById("signupPopupbtnn")
  .addEventListener("click", function () {
    document.getElementById("popupBackground").style.display = "none";
  });

// SignUpPopup button
document
  .getElementById("signupPopupbtn")
  .addEventListener("click", function () {
    document.getElementById("popupBackground_signup").style.display = "block";
  });

document
  .getElementById("closeBtn_signup")
  .addEventListener("click", function () {
    document.getElementById("popupBackground_signup").style.display = "none";
  });

document
  .getElementById("signinPopupbtn_ui")
  .addEventListener("click", function () {
    document.getElementById("popupBackground").style.display = "block";
  });
// // signinPopupbtn
// document
//   .getElementById("signinPopupbtn")
//   .addEventListener("click", function () {
//     document.getElementsByClassName("popupBackground_ui")[0].style.display =
//       "block";
//   });

// document
//   .getElementById("closeBtn")
//   .addEventListener("click", function () {
//     document.getElementById("popupBackground_signup").style.display = "none";
//   });
//Mobile Signup
// function openNavSignup() {
//   document.getElementById("mySidenavSignUp").style.width = "300px";
// }

// function closeNavSignup() {
//   document.getElementById("mySidenavSignUp").style.width = "0";
// }

// CreateyourAccount for mobile

//addToCartPopup
document
  .getElementById("addToCartPopup")
  .addEventListener("click", function () {
    document.getElementById("addToCartPopupBackground").style.display = "block";
  });

//addToAddtresPopup

// addTo cart view coupon
function viewcoupon() {
  // Get the elements by class name (without the dot)
  const couponElements = document.getElementsByClassName(
    "ProductDetailsCard_2"
  );

  // Iterate over each element and set the height
  for (let i = 0; i < couponElements.length; i++) {
    couponElements[i].style.height = "210px";
  }

  // Get the element by class name (without the dot)
  const noActiveCouponsElements =
    document.getElementsByClassName("NoActiveCoupons");

  // Check if there are elements with the class name "NoActiveCoupons"
  if (noActiveCouponsElements.length > 0) {
    // Set the display style to block for the first element found
    noActiveCouponsElements[0].style.display = "block";
  }
}

// scroll
function change(item) {
  const buttons = document.querySelectorAll("ion-icon");
  buttons.forEach(function (obj) {
    obj.classList.remove("activee");
  });
  item.classList.add("activee");
}

function homePage() {
  window.location.href = "index.html";
}
function ordePage() {
  window.location.href = "MobilePurchaseHistory.html";
}
function mobileWishList() {
  window.location.href = "mobileWishListPage.html";
}

function orders() {
  window.location.href = "addToCartPage.html";
}
// Function to close the slider when a close button is clicked
function closeSlider() {
  const slider = document.getElementById("mySidenavv");
  slider.style.transition = "width 0.5s ease"; // Smooth transition effect
  slider.style.width = "0";
  setTimeout(() => {
    slider.classList.remove("open"); // Remove class after transition
  }, 500); // Delay should match transition duration
  document.removeEventListener("click", closeNavvv, true); // Remove listener to prevent multiple triggers
}

// Example of adding a click event to a close button (assuming a button with id="closeButton")
document.getElementById("closeButton").addEventListener("click", closeSlider);
function openNavi() {
  document.getElementById("mySidenavi").style.width = "300px";
}
function closeNavi() {
  document.getElementById("mySidenavi").style.width = "0";
}
var btn = document.getElementById("addTicketBtn_1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closemodal_1")[0];




// manageProfileScreen.js
function openNavv() {
  document.getElementById("mySidenavv").style.width = "300px";
  document.body.style.overflow = "hidden"; // Disable scrolling
}

function closeNavv() {
  console.log("Closing sidenav"); // Debugging log
  var sidenav = document.getElementById("mySidenavv");
  if (sidenav) {
    sidenav.style.width = "0";
    // Optionally, you can add a transition duration here
    sidenav.style.transition = "width 0.5s ease"; // Adjust timing as needed
  }
  document.body.style.overflow = ""; // Enable scrolling
}

function wishlistPage() {
  // Function to handle wishlist page redirection
  alert("Redirect to wishlist page");
}

function wishlistPage() {
  // Function to handle wishlist page redirection
  alert("Redirect to wishlist page");
}
// Function to toggle the visibility of the list
function toggleList(listId) {
  var list = document.getElementById(listId);
  if (list.style.display === "none" || list.style.display === "") {
    // Check for both 'none' and '' (initial)
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
// Get the modal
var modal = document.getElementById("myModal_1");

// Get the button that opens the modal
var btn = document.getElementById("addTicketBtn_1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closemodal_1")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("modal-openmodal_1");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-openmodal_1");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-openmodal_1");
  }
};

function change(item) {
  const buttons = document.querySelectorAll("ion-icon");
  buttons.forEach(function (obj) {
    obj.classList.remove("activee");
  });
  item.classList.add("activee");
}

function displysignUpForm() {
  // Assuming there's only one element with each class
  document.getElementsByClassName("mobileSignup")[0].style.display = "block";
  document.getElementsByClassName("mobilelogin")[0].style.display = "none";
}
function displyLoginUpForm() {
  // Assuming there's only one element with each class
  document.getElementsByClassName("mobileSignup")[0].style.display = "none";
  document.getElementsByClassName("mobilelogin")[0].style.display = "block";
}
function openNavSignup() {
  document.getElementById("mySidenavSignUp").style.width = "300px";
}

function closeNavSignup() {
  document.getElementById("mySidenavSignUp").style.width = "0";
}

function homePage() {
  window.location.href = "index.html";
}

function addtoCart() {
  window.location.href = "addToCartPage.html";
}
// Get the modal
var modall = document.getElementById("myModal");

// Get the button that opens the modal
var btnn = document.getElementById("addTicketBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btnn.onclick = function () {
  modall.style.display = "block";
  document.body.classList.add("modal-open");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modall.style.display = "none";
  document.body.classList.remove("modal-open");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modall) {
    modall.style.display = "none";
    document.body.classList.remove("modal-open");
  }
};

document
  .getElementById("signupPopupbtn")
  .addEventListener("click", function () {
    document.getElementById("popUpBg").style.display = "none";
  });

// SignUpPopup button
document
  .getElementById("signupPopupbtn")
  .addEventListener("click", function () {
    document.getElementById("popUPSignUp").style.display = "block";
  });
document
  .getElementById("signinPopupbtn")
  .addEventListener("click", function () {
    document.getElementById("popUPSignUp").style.display = "none";
  });

// SignUpPopup button
document
  .getElementById("signupPopupbtn")
  .addEventListener("click", function () {
    document.getElementById("popUpBg").style.display = "block";
  });

var modal = document.getElementById("myModal_m");

// Get the button that opens the modal
var btn = document.getElementById("newPopup");

var span = document.getElementsByClassName("close_m")[0];
var span_2 = document.getElementsByClassName("close_signUp")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("modal-open_m");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-open_m");
};

// When the user clicks on <span> (x), close the modal
span_2.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open_m");
  }
};
// footer tab
function toggleListt(listId) {
  var list = document.getElementById(listId);
  if (list.style.display === "none" || list.style.display === "") {
    // Check for both 'none' and '' (initial)
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
function categoryPage() {
  window.location.href = "categorypage.html";
}

function goTomobileImageCardshtml() {
  window.location.href = "mobileImageCards.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");
  const indicatorWrapper = document.getElementById("indicator-wrapper");

  let isDown = false;
  let startX;
  let scrollLeft;

  gallery.addEventListener("mousedown", (e) => {
    isDown = true;
    gallery.classList.add("active");
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
    e.preventDefault();
  });

  gallery.addEventListener("mouseleave", () => {
    isDown = false;
    gallery.classList.remove("active");
  });

  gallery.addEventListener("mouseup", () => {
    isDown = false;
    gallery.classList.remove("active");
  });

  gallery.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    gallery.scrollLeft = scrollLeft - walk;
    updateIndicators();
  });

  gallery.addEventListener("scroll", updateIndicators);

  function updateIndicators() {
    const totalWidth = gallery.scrollWidth;
    const visibleWidth = gallery.clientWidth;
    const currentScroll = gallery.scrollLeft;
    const numIndicators = Math.ceil(totalWidth / visibleWidth);

    indicatorWrapper.innerHTML = "";

    for (let i = 0; i < numIndicators; i++) {
      const indicator = document.createElement("div");
      indicator.classList.add("indicator");
      if (
        currentScroll >= i * visibleWidth &&
        currentScroll < (i + 1) * visibleWidth
      ) {
        indicator.classList.add("active");
      }
      indicatorWrapper.appendChild(indicator);
    }
  }

  updateIndicators();
});
function navToPage() {
  window.location.href = "ShippingInfo.html";
}
function OpenAddToCartPage() {
  window.location.href = "mobileCouponPage.html";
}
function openhomepage() {
  window.location.href = "index.html";
}
function WishlistPage() {
  window.location.href = "mobileWishListPage.html";
}
function OrderPage() {
  window.location.href = "MobilePurchaseHistory.html";
}
function toggleList(listId) {
  var list = document.getElementById(listId);
  if (list.style.display === "none" || list.style.display === "") {
    // Check for both 'none' and '' (initial)
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}

function change(item) {
  const buttons = document.querySelectorAll("ion-icon");
  buttons.forEach(function (obj) {
    obj.classList.remove("activee");
  });
  item.classList.add("activee");
}

function displysignUpForm() {
  // Assuming there's only one element with each class
  document.getElementsByClassName("mobileSignup")[0].style.display = "block";
  document.getElementsByClassName("mobilelogin")[0].style.display = "none";
}
function displyLoginUpForm() {
  // Assuming there's only one element with each class
  document.getElementsByClassName("mobileSignup")[0].style.display = "none";
  document.getElementsByClassName("mobilelogin")[0].style.display = "block";
}

function openNavSignup() {
  document.getElementById("mySidenavSignUp").style.width = "300px";
}

function closeNavSignup() {
  document.getElementById("mySidenavSignUp").style.width = "0";
}
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".scrollable-content");
  let lastScrollTop = 0;

  container.addEventListener("scroll", function () {
    const st = container.scrollTop;
    if (
      st > lastScrollTop &&
      container.scrollHeight - container.scrollTop === container.clientHeight
    ) {
      // Scrolling down and at the bottom of the container
      window.scrollBy({
        top: 100, // Adjust this value as needed
        behavior: "smooth",
      });
    } else if (st < lastScrollTop && container.scrollTop === 0) {
      // Scrolling up and at the top of the container
      window.scrollBy({
        top: -100, // Adjust this value as needed
        behavior: "smooth",
      });
    }
    lastScrollTop = st;
  });
});
function ShippingPage() {
  window.location.href = "checkOut.html";
}
function change(item) {
  const buttons = document.querySelectorAll("ion-icon");
  buttons.forEach(function (obj) {
    obj.classList.remove("activee");
  });
  item.classList.add("activee");
}

function displysignUpForm() {
  // Assuming there's only one element with each class
  document.getElementsByClassName("mobileSignup")[0].style.display = "block";
  document.getElementsByClassName("mobilelogin")[0].style.display = "none";
}
function displyLoginUpForm() {
  // Assuming there's only one element with each class
  document.getElementsByClassName("mobileSignup")[0].style.display = "none";
  document.getElementsByClassName("mobilelogin")[0].style.display = "block";
}

function showCouponDetails() {
  var couponDetails = document.getElementById("coupen_details");
  couponDetails.style.display = "block";
}

function openProfile() {
  const slider = document.getElementById("slider");
  slider.classList.add("open");

  // Add event listener for touch to close the slider
  document.addEventListener("touchstart", closeProfile, { once: true });
}

function closeProfile() {
  const slider = document.getElementById("slider");
  slider.classList.remove("open");
}

let x = 0;
const slides = document.querySelectorAll(".slider-item_new");
const totalSlides = slides.length;

function showSlide(index) {
  const sliderWrapper = document.querySelector(".slider-wrapper_new");
  sliderWrapper.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  x = (x + 1) % totalSlides;
  showSlide(x);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

function homepage() {
  window.location.href = "index.html";
}
function ViewOrderPage() {
  window.location.href = "MobileOrderDetails.html";
}
function bestSeller() {
  window.location.href = "bestSellerProucts.html";
}

function cartPage() {
  window.location.href = "addToCartPage.html";
}
