const categoryMap = ['WebDev', 'MachineLearning', 'Algorithm'];
let courseIdState;

document.querySelectorAll('.star').forEach((el) => el.addEventListener('click', lightenStar));
document.querySelector('.url_input_btn').addEventListener('click', checkUrlExist);

function checkUrlExist() {
  const checkCourseExistUrl = '/courses?url=' + document.querySelector('.course_url_input').value;
  fetch(checkCourseExistUrl, {
    method: 'GET',
    mode: 'no-cors',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => {
      if (!response) {
        courseIdState = -1;
      } else {
        console.log(response);
        const {
          courseName,
          courseId,
          categoryId,
          courseProvider,
          des,
          duration,
          language,
          level,
          url,
        } = response;
        courseIdState = courseId;
        document.querySelector('.course_name_input').value = courseName;
        document.querySelector('.course_category_input').value = categoryMap[categoryId];
        document.querySelector('.course_language_input').value = 'En';
        document.querySelector('.course_level_input').value = 'Basic';
      }
    });
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
  let courseInfo = {};
  let reviewInfo = {};

  courseInfo.url = document.querySelector('.course_url_input').value;
  courseInfo.name = document.querySelector('.course_name_input').value;
  courseInfo.category = document.querySelector('.course_category_input').value;
  courseInfo.language = document.querySelector('.course_language_input').value;
  courseInfo.level = document.querySelector('.course_level_input').value;
  courseInfo.courseId = courseIdState;
  reviewInfo.score = document.querySelectorAll('.active').length;
  reviewInfo.text = document.querySelector('.review').value;
  reviewInfo.date = document.querySelector('.course_name_input').value;
  payload.courseInfo = courseInfo;
  payload.reviewInfo = reviewInfo;
  console.log(payload);

  const postPublishUrl = '/publish/newReview';
  fetch(postPublishUrl, {
    method: 'POST',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => {
      console.log(response);

      window.location = '/courses/' + response.courseId;
    });
});
