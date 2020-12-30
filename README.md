# FreeWorld Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Solution Breakdown

Initially, I implemented a brute force approach in which I looped through my list of students and tried to get all unique possible subset/combinations of students. During the compilation process, I completed the sum of both the respective needed instructions hours and earning potential of each students. Once I had my list of options, I went through and selected the first subset that met the required criteria (i.e. 20 hours of instructions). This solution worked, but it wasn’t a scalable one. I needed to find a way that would have me go through my list of students only once.

To do that, I decided to determine the hourly rate each student would get paid and sort my list of student based on that rate in descending order (i.e. biggest to smallest.) It would make sense to care about this value since we want to maximize the potential earning output while being cognizant of our available instructors and their capacity.

With the listed of students now sorted in ascending order based on their hourly rate, I went through and completed the sum of the needed instructions hours of each student, until I reached the target of maximum instructions. This approach is efficient and scalable since we only need to go through our list once. And by focusing on the hourly rate, we can achieve our goal of maximizing the potential earning output.

### Time Logging

It took me about 3h15 to complete this project.

### Test URL

Here's a [live demo](https://freeworldchallenge.herokuapp.com/) of the project.
