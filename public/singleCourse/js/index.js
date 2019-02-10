const courseInfoUrl = window.location.pathname + '/courseInfo';
fetch(courseInfoUrl, {
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

const reviewsInfoUrl = window.location.pathname + '/reviewsInfo';
fetch(reviewsInfoUrl, {
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
    if (response.length === 0) {
      return;
    }
    document.querySelector('.review_list').innerHTML = '';
    let scoreSum = 0;
    let scoreCnt = [0, 0, 0, 0, 0, 0];
    response.map(
      ({ reviewDate, reviewScore, reviewText, userAvatar, userId, userName, userReviewCount }) => {
        scoreSum += reviewScore;
        scoreCnt[reviewScore] += 1;
        let review_item_node = document.createElement('div');
        review_item_node.className = 'review_item';
        review_item_node.innerHTML = `<div class="user_info_wrap">
                                        <img
                                          class="user_avatar"
                                          src="${userAvatar}"
                                        />
                                        <div class="user_info">
                                          <div class="user_name">${userName}</div>
                                          <div class="user_review_count">${userReviewCount} Reviews</div>
                                        </div>
                                      </div>
                                      <div class="user_review_wrap">
                                        <div class="review_stats">
                                          <div class="review_score">${reviewScore} ☆</div>
                                          <div class="review_date">${reviewDate}</div>
                                        </div>
                                        <div class="review_text">
                                          ${reviewText}
                                        </div>
                                      </div>`;
        document.querySelector('.review_list').appendChild(review_item_node);
      }
    );
    document.querySelector('.review_summary_avg_score').innerHTML = scoreSum / response.length;
    document.querySelector('.review_summary_total_count').innerHTML = '(' + response.length + ')';
    document.querySelector("[data-score='1']").style.width = scoreCnt[1] / response.length;
    document.querySelector("[data-score='2']").style.width = scoreCnt[2] / response.length;
    document.querySelector("[data-score='3']").style.width = scoreCnt[3] / response.length;
    document.querySelector("[data-score='4']").style.width = scoreCnt[4] / response.length;
    document.querySelector("[data-score='5']").style.width = scoreCnt[5] / response.length;
  });
