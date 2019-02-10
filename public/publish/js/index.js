document.querySelectorAll('.star').forEach((el) => el.addEventListener('click', lightenStar));
document.querySelector('.url_input_btn').addEventListener('click', checkUrlExist);

function checkUrlExist() {
  document.querySelector('.course_url_input').value;
}

function lightenStar() {
  console.log(this.dataset.starvalue);
  const star_list = document.querySelectorAll('.star');
  star_list.forEach((el) => el.classList.remove('active'));
  let cnt = 0;
  star_list.forEach((el) => {
    if (cnt < this.dataset.starvalue) {
      el.classList.add('active');
      cnt++;
    }
  });
}

document.querySelector('.submit_btn').addEventListener('click', () => {
  let payload = {};
  payload.url = document.querySelector('.course_url_input').value;
  payload.name = document.querySelector('.course_name_input').value;
  payload.category = document.querySelector('.course_category_input').value;
  payload.language = document.querySelector('.course_language_input').value;
  payload.level = document.querySelector('.course_level_input').value;
  payload.score = document.querySelectorAll('.active').length;
  payload.text = document.querySelector('.review').value;
  payload.date = document.querySelector('.course_name_input').value;
  console.log(payload);
  // reviewId userId courseId collectionId score text date
});
