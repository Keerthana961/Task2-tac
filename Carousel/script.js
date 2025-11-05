let rev = 0;

window.onload = function() {
  showReview(rev);
};

function previousReview() {
  rev--;
  showReview(rev);
}

function nextReview() {
  rev++;
  showReview(rev);
}

function showReview(reviewIndex) {
  let reviews = document.getElementsByClassName("review_items");

  // Loop back if index goes out of range
  if (reviewIndex >= reviews.length) {
    rev = 0;
  }
  if (reviewIndex < 0) {
    rev = reviews.length - 1;
  }

  // Hide all reviews
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }

  // Show the current one
  reviews[rev].style.display = "block";
}
