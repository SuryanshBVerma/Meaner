### *PROJECT TITLE* :  *MEANER (CHROME EXTENSION)*
### *VIDEO DEMO* :  https://youtu.be/rTDPcQTzlIE
### *DESCRIPTION* : It is a chrome extension that helps you find the meaning of words.

### *Got stuck while reading an article, Use Meaner!*

***Welcome to my Cs50's final project - "Meaner"***

#### *OBJECTIVE :*
- *Gain experience with desining and implementing an extension using javascript, HTML and CSS.*
- *To create a project useful and applicable in the real world.*

#### *OVERVIEW :*
*As the Cs50's final project I have created a chrome extension, Meaner.*

*Extensions are small software programs that customize the browsing experience. They let users tailor Chrome functionality and behavior in many ways, providing things like:*

- *Productivity tools*
- *Web page content enrichment*
- *Information aggregation*
- *Fun and games*

*Extensions are software programs, built on web technologies (such as HTML, CSS, and JavaScript) that enable users to customize the Chrome browsing experience. Meaner is a Simple and easy meaning finding tool. Very handy yet very helpful.*

*This extension, useful while reading articles, it quickly shows the meaning of the word you have typed in as input. In the background it uses API call to achive the same. The API I have used for this project is [Free Dictonary API](https://dictionaryapi.dev/).It took quite a lot of hard work to build a small extension but I am pretty sure it is a useful one.*

*If you want to look how this works in live you can go ahead and follow the [video demo](https://youtu.be/rTDPcQTzlIE) to see a short video created by me showing the live demo of the extension.*

#### *HOW IT WORKS ?*
*When the user clicks the extension it shows a popup with a empty text box (saying word) and a button "means". The user can then type in or copy - paste the word for which meaning is reqiured and click the "means" button. All the mean will be displayed to the user there itself.*

#### *HOW TO USE IT LOCALLY :*
- *Download the "Meaner" folder.*
- *Open chrome and click on the three dots at the top right corner.*
- *Under "more tools" select "Extensions".*
- *Since its not offically on the chrome web store, you have to enable "developer mode" persent on the top right corner.*
- *Now, on the left corner click on "Load Unpacked".*
- *Browse and select the "Meaner" folder downloaded locally.*
- *You will see the extension loaded on the tab along with other extensions, now you are ready to go and search meanings.*

#### *FILE DETAILS :*
*The project folder contains the folder "Meaner" which is the extension itself. The files it contain and their work are as below:*
```
    - image.png : This is the image of the logo of the extension, this is used to display the exxtension on the top right corner of the browser.
    - manifest.json : It is a json format file which contains all the basic details about the extension like the manifest version, name, version of the extension, description, javascripts that will run in the background as well as the foreground and permissions required by the extension.
    - background.js : It is the javascript running in the background. As it is a very small extension, it performs all the action in the foreground.
    - main.js : The main javascript which is responsible for all the actions in the forground like taking the input, generating the API call, generating the meaning is main.js. It checks if the users has clicked the "means" button on the extension and generates the API call for the same word.
    - popup.html : The main html page where the user interacts. This window appears when the user clicks on the extension on the top right corner of the browser window. This file contains all the graphical interface like the input box, the button and the area where the meaning will be displayed.*
```

*That's all about the extension, hope you enjoy playing around with the it.*
