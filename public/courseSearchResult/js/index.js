document
  .querySelectorAll('.filter_btn')
  .forEach((el) => el.addEventListener('click', toggleActive));

function toggleActive() {
  this.classList.toggle('filter_btn-active');
}

const url = '/search/result/' + window.location.pathname.split('search/')[1];
console.log(url);

fetch(url, {
  method: 'GET',
  mode: 'no-cors',
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
})
  .then((res) => res.json())
  .catch((error) => console.error('Error:', error))
  .then((response) => {
    console.log('Success:', response);
    response.map((el) => {
      const node = document.createElement('div');
      node.className = 'search_result_item';
      node.innerHTML = `
      <img
        src="https://lareviewofbooks-org-cgwbfgl6lklqqj3f4t3.netdna-ssl.com/wp-content/uploads/2016/08/bojack-horseman-season-3-trailer.jpg"
        class="course_image"
      />
      <div class="course_meta">
        <div class="course_title">${el.courseName}</div>
        <div class="course_stats">
          <div class="course_avg_score">${el.courseAvgScore ? el.courseAvgScore : 0} ☆</div>
          <div class="course_review_count">${el.courseReviewCount} Reviews</div>
        </div>
      </div>
      <div class="course_single_review">
        <div class="user_info">
          <img
          src="https://lareviewofbooks-org-cgwbfgl6lklqqj3f4t3.netdna-ssl.com/wp-content/uploads/2016/08/bojack-horseman-season-3-trailer.jpg""
          class="user_avatar">
          <div class="user_name">Horseman Bojack</div>
          <div class="review_score">3 ☆</div>
        </div>
        <div class="review_text">
          ${el.topReview ? el.topReview : "Sorry It doesn't have review yet!"}
        </div>
      </div>
    `;
      document
        .querySelector('.search_result_list')
        .insertBefore(node, document.querySelector('.search_result_list').firstChild);
    });
  });
