This project for Modul 1 of nanodegree from Udacity.

- This file contains two images stord in localhost. It is named img1.jpg and img2.jpg and img2100300.
- This project use {Javascript, Scriptype, Node js, Jasmine, Express}
- This localhost server accept user intered URL to get images , and do resizing for the image.

The scripts needed to test/start/build your application:
   npm run build 
   npm run test 
   npm run start

Any endpoints that should be accessed to test that you have created the required functionality:
   Use http://localhost:3000/image?filename=img1 to test the existant of image.

Any other functionality you have included in the project to ensure the reviewer knows what to expect
   Use ex; http://localhost:3000/image?filename=img1&width=100&height=200 to resize.
   if the user try to resize unsaved image --> error
   if the user try to resize previously resized image (with the same width and height) -->shown
   