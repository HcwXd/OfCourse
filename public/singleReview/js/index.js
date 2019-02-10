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

    document.querySelector('.title_wrap').innerHTML = '';
    document.querySelector('.course_average_score').innerHTML = '';
    document.querySelector('.course_reviews_count').innerHTML = '';
    document.querySelector('.course_provider').innerHTML = '';
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

    document.querySelector('.user_avatar').src = '';
    document.querySelector('.user_name').innerHTML = '';
    document.querySelector('.user_reviews_count').innerHTML = '';
    document.querySelector('.review_stats').innerHTML = '';
    document.querySelector('.review_date').innerHTML = '';
    document.querySelector('.review_text').innerHTML = '';
  });
