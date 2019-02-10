fetch(window.location.pathname + '/courseInfo', {
  method: 'GET',
  mode: 'no-cors',
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
})
  .then((res) => res.json())
  .catch((error) => console.error('Error:', error))
  .then((response) => {
    console.log(response);
    const { courseAvgScore, courseName, courseReviewCount, courseProvider } = response;
    document.querySelector('.title_wrap').innerHTML = courseName;
    document.querySelector('.course_average_score').innerHTML = courseAvgScore + ' ☆';
    document.querySelector('.course_reviews_count').innerHTML = courseReviewCount + ' Reviews';
    document.querySelector('.course_provider').innerHTML = courseProvider || '';
  });

fetch(window.location.pathname + '/reviewInfo', {
  method: 'GET',
  mode: 'no-cors',
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
})
  .then((res) => res.json())
  .catch((error) => console.error('Error:', error))
  .then((response) => {
    console.log(response);
    const { userAvatar, userName, userReviewCount, reviewText, reviewScore, reviewDate } = response;

    document.querySelector('.user_avatar').src = userAvatar;
    document.querySelector('.user_name').innerHTML = userName;
    document.querySelector('.user_reviews_count').innerHTML = userReviewCount;
    document.querySelector('.review_score').innerHTML = reviewScore;
    document.querySelector('.review_date').innerHTML = reviewDate;
    document.querySelector('.review_text').innerHTML = reviewText;
  });
