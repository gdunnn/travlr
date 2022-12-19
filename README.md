# Architecture
- Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).


The frontend of the project was developed using Express, a node.js based framework. Handlebars was used to create templates and render the HTML pages. The single-page application (SPA) was developed using Angular, a frontend framework that makes developing SPAs simple and seamless. An SPA works by first taking the HTTP request sent by the user to the site and responds with everything needed to render the webpage and its functions. This provides the client the fully rendered page without needing to stay connected to a network consistently to view and is considerably more efficient on server usage by having the page loaded entirely on the requesters browser instead of needing to constantly put out requests to the same user loading multiple pages. A few drawbacks to using an SPA is search engine optimization, as it is difficult to successfully web-scrape a SPA and it takes a longer initial load as the SPA is loaded entirely on the user’s browser on the first request. 


- Why did the backend use a NoSQL MongoDB database?


A NoSQL with MongoDB was chosen because it provides speed, structure, and functionality. MongoDB works well with both JSON and JavaScript as well making it a great fit for a MEAN application.


# Functionality
- How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JavaScript is a programming language with a variety of applications. JSON is a data transmission format. a HTTP request contains JSON data that allows an API request to receive a proper response to be understood by a compiler. JSON is used for the front-end when a user makes a HTTP request and the back end when the request is received, and a response is sent. 

- Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.


A reusable user interface component reduces the complexity of the code and lowers the chance an error may occur. The allows for more effective and efficient development of a site and helps keeps the design flow simpler.


# Testing
- Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.


Testing the application was conducted via error codes in the console log, log messages, and running a live debug server. The error codes tell you what failed, and the log messages tell how why they failed. Security of the endpoints in full stack development are extremely important. In this application the sensitive API Methods (POST and PUT) are placed in a check to verify the user was logged in. The methods and endpoints in the application all provide calls to the database, The PUT issues an edit call, the POST issues a create call, the GET issues a read call, and the DELETE issues a delete call.


# Reflection
- How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?


I truly have a newfound respect for full stack developers. This class was pretty difficult, given that I had never touched JS or any of the technologies used in the course prior to taking it. I now look at every website I go on differently, trying to think of how these devs would have created it and what they used to create it. I don't find full stack development to be somethign I would necessarily want to do full time, but having this class under my belt would make it easier to get somewhat of a grasp of what would be going on if I ever did get into a role that required it.  
