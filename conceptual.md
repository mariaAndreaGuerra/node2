### Conceptual Exercise

Answer the following questions below:

- What is a JWT? stands for JSON Web Token, which is an open standard that allows for the secure transmission of information between two parties in JSON format.

- What is the signature portion of the JWT? is the cryptographic signature of the token, which is created by the server using a secret key. 
What does it do? The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload? Yes, an attacker can see what's inside the payload of a JWT if it's intercepted because JWTs are serialized, not encrypted.

- How can you implement authentication with a JWT?  Describe how it works at a high level. The server authenticates the user, often by checking the entered credentials against a database. Upon successful login, the server creates a JWT containing user information and a signature to verify its authenticity. The server sends the JWT to the client. Then, each subsequent request from the client includes the JWT

- Compare and contrast unit, integration and end-to-end tests.
End-to-end testing covers verification of your entire software application from start to finish vs integration testing helps to ensure that the individual components are integrated correctly and work together as intended, while system testing helps to ensure that the software functions correctly as a whole system.

- What is a mock? are useful when you want to test interactions between a class under test and a particular interface.
What are some things you would mock? A mock framework also should help to define that a certain method got called during a test. So if your test does not call the specified method the mock framework will indicate that. Or you could specify that two methods are called in a specific order (open/close e.g.)

- What is continuous integration?  basically just means that the developer's working copies are synchronized with a shared mainline several times a day.

- What is an environment variable and what are they used for? variables are determined values to provide the ability that can affect the way programs, applications and services will behave. These are often used to store the name of the environment in which the app is currently running. 

- What is TDD? Test-driven development (TDD) is a software development process that involves writing tests for a new piece of code before the code is written. 
What are some benefits and drawbacks?
* Higher Quality Code
* Faster Development Time
* Improved Communication

- What is the value of using JSONSchema for validation? It provides an easy way of validating JSON objects in an application, enabling interoperability across programming languages by maintaining consistency. 

- What are some ways to decide which code to test? focus on code that affects the behavior of the overall software product.

- What does `RETURNING` do in SQL? retrieve the desired data in the same query that modifies the data.
When would you use it? when you need to obtain data from modified rows while they are being manipulated. 

- What are some differences between Web Sockets and HTTP? 
* HTTP is a unidirectional communication protocol, while WebSocket is bidirectional.
* HTTP is the preferred choice for traditional web pages and resources that don't require real-time updates or instant interactions. WebSockets are the preferred option when you need rapid, live interactions, such as chat applications.
* HTTP can be used to cache a resource, but WebSockets cannot.
* The HTTP protocol is based on the request-response model, which means it can support error scenarios.

- Did you prefer using Flask over Express? as a beginner at coding, I would use flask. But after I master the basics, I would use only Express because its faster and better. 
