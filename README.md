# OfCourse
An Easier Way to Find Learn Resourses!

## Getting Started
### Motivation
We are students traveling from Taiwan to the US for attending HackDavis hackathon. During our traveling, one of our friends recommends us to utilize mobile app yelp to search great restaurants around. Inspired by yelp and the slogan of hackdavis, "hack for social good", we came up with a good idea about a learning version yelp, which we call it "OfCourse".

### Goal
OfCourse provides users a platform to write comments and rate any online courses they have took on other online courses platform. Also, users can add comment of new course on our platform. Therefore, if a new user want to learn a new skill, he can just use OfCourse to evaluate which course has the highest rating, or which courses are fit in beginner and which courses are fit in advanced user. 

### Built With
* ejs
* sass
* javascript
* mysql
* express
* Google cloud sql

### How to execute this project
1. ```git clone OfCourse```
2. ```cd OfCourse```
3. ```npm install ```
4. ```node app.js```
5. ```localhost:3000/search/hack```

### How to use our website

#### CourseSearchResult
This page provides user's search result. It shows the highest rating and most relevent courses to the searching. 

#### SingleCoursePage
As user clicking any searching result on CourseSearchResult, it will turn to this page. This page shows any information about this courses including average score, all of reviews and description of the course.

![](https://i.imgur.com/yZfdLqO.png)


#### SingleReviewPage
As user clicking any comment on SingleCoursePage, it will turn to this page. This page shows the user's name and the comment of the course.

#### SingleUserProfile
As user clicking avatar of any user, it will turn to this page. This page show user's information and all of his comment to any courses. Also, we provide the distribution of the user's rating.

#### PublishReview
This page is for user writing a whole new comment. The top input bar is for inserting url of the online course. If the course is in our database, our system will fill all information of the course automatically. If the course isn't in our database, user should fill all information manually. 


![](https://i.imgur.com/WOavMw9.png)


## Google Cloud API
Originally, We used https://www.freemysqlhosting.net/ to host our mysql database. Unfortunately, it is really unstable, which makes backend devloper hard to test program. Therefore, We choose to use Google cloud sql to host our database. It was really a smooth experience, the interface is same as traditional mysql hosting, which makes us easy to adopt the technology and let the strong faculty of cloud SQL team to take care of the complicated detail of database.
