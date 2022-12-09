# Booking Website
Booking website is a website to replicate the looks and use of a normal booking website, it is created with React.js and Node.js, users of the website can search hotels, cabins, apartments based on their travel location and their price range.

![page1](https://user-images.githubusercontent.com/64679607/206625099-4654264c-58cf-4ed7-9336-dbb70b910257.PNG)


## Prerequisites
NOTE: you can change the mongodb url in the .ENV file if choose to use your own MongoDB database

To start the server
- Go to the api folder
- run yarn start

From here depending on whether you want to open the hotel page or do admin work (e.x adding hotels, rooms, apartments) you will go to different folders

To open the hotel page
- Make sure the server is running
- Go to client folder
- run yarn start

To open the admin page
- Make sure the server is running
- Go to admin folder
- run yarn start

## Features

### Booking Site

Users are greeted with the homepage upon starting the hotel page, here users can browse through featured locations and properties

![page1](https://user-images.githubusercontent.com/64679607/206625099-4654264c-58cf-4ed7-9336-dbb70b910257.PNG)

Users can also login via the top right login button

![admin0](https://user-images.githubusercontent.com/64679607/206625320-c65b3507-1f08-478d-8659-d4d7c9d95631.PNG)

**(NOTE: IF YOU ARE USING THE DEFAULT MONGODB SERVER, AN ACCOUNT HAS BEEN PROVIDED. USERNAME :johndoe , PASSWORD :john)**

There are also 3 inputs user can enter to search their prefered properties, location, date range, and number of travelers and rooms

![page2](https://user-images.githubusercontent.com/64679607/206625485-664e2c73-54c4-4f9a-ab79-b098b694d070.PNG)

![page3](https://user-images.githubusercontent.com/64679607/206625514-8e0055f2-d930-422b-85f8-2b04336e6136.PNG)

Upon clicking search, users will be greeted with a result page with properties based on their chosen criteria, here users can also set the price range

![page5](https://user-images.githubusercontent.com/64679607/206625704-a4913443-6407-4a41-bd48-18ce0a106917.PNG)

When users click "See availability", users will be redirected to the specific hotel's page where they will be given images, and descriptions of the property

![page6](https://user-images.githubusercontent.com/64679607/206625876-f58c90e1-40b3-4763-bfa1-26e1262bd5c2.PNG)
![page6 5](https://user-images.githubusercontent.com/64679607/206625894-3917d25d-371e-4f41-a03e-3c52deb2fe8b.PNG)

If user is satisfied they can click "reserve now" to be given a list of rooms, upon which they can choose which room to reserve

![page7](https://user-images.githubusercontent.com/64679607/206625946-6c436b72-2a7f-44e9-a78a-f53bde93cf35.PNG)

Once user has reserved a room, that given room will be unavailable for that specific date range as seen in the image below

![page8](https://user-images.githubusercontent.com/64679607/206626002-47ed2594-8eb7-40c5-823f-9020c2699862.PNG)

### Admin Page

Upon starting the admin page, user will be greeted with the dashboard page **Note most of the things arent important the only section that is worth focusing are "Hotels, Users, and Rooms"**

![image](https://user-images.githubusercontent.com/64679607/206627581-963695d3-3375-47f8-8a54-576158274496.png)

Upon clicking any one of the three components user will be greeted with a page filled the aforementioned component as well as an option to add those new components

User Page
![admin1](https://user-images.githubusercontent.com/64679607/206627687-c75e424b-ea9f-41cd-b20c-3f647c445816.PNG)
![admin2](https://user-images.githubusercontent.com/64679607/206627693-2c983acc-aebf-47f2-a625-e5e8025a8372.PNG)

Hotel Page
![admin3](https://user-images.githubusercontent.com/64679607/206627720-4f8ab97a-4503-4ff5-a941-01a22844e60c.PNG)
![admin4](https://user-images.githubusercontent.com/64679607/206627732-20efd854-a18e-4479-8beb-502e4e6ab62d.PNG)

Room Page
![admin5](https://user-images.githubusercontent.com/64679607/206627743-6171a8c4-c4c7-4c80-99d4-74e99aec86e9.PNG)
![admin6](https://user-images.githubusercontent.com/64679607/206627751-d49518ff-a77a-4874-aab3-d19b84a24e20.PNG)


**NOTE IF YOU DONT SEE ANYTHING IN THE LIST PAGE OR YOU CANT ADD NEW COMPONENTS YOU MAY NEED TO RELOGIN, TO DO THIS SIMPLY GO TO HTTP://LOCALHOST:3000/LOGIN AND
ENTER THE FOLLOWING, USERNAME: johndoe, PASSWORD: john**
