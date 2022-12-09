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

