# 3 main features of my project are :

  => Users can add or enroll courses.
  => One course can't be enrolled more than one time.
  => Users has maximum 20 credits. So he/she can't exceed more than 20 credits.



# The state management of my project

  =>In my project I have used 4 state :

    At first I used a state for storing all courses data that are available in the website.This state gave me an array of object.After that I did a map method on the array & received as single courses data & for every course data I created a card for showing on UI.

    The second state I used for storing all cart data that users want to enroll.This state also store an array of object.Then I did a find method on the data & checked is there any course duplication,if has then system shows a toast for that & don't add the course on the cart section & if there isn't any duplication then system shows the course data on the cart section UI.

    The third state is used to store total credit hours,that users enrolled for courses.Users can enroll courses until the total credit hours reached to 20.If total credit hours exceed 20 then system shows a toast & can't enroll more course.

    And the last one is used to store the total price for all enrolled courses that users select & the total price showed up on the cart section UI.