# Event-Management-Website-CRUD
An event management website built with Express and MongoDB, featuring event creation, categorization, liking, and remarks with dynamic filtering and detailed event views.

Welcome to the Event Management Website, a platform that allows users to manage and explore events seamlessly. This README provides an overview of the key features and components of the project.

## Features

## MVC Architecture
The Event Management Website follows the Model-View-Controller (MVC) architectural pattern.

**Models**: Models in this project represent the data structures. We have an "Event Model" to store event information and a "Remark Model" for user remarks on events.

**Views**: Views are responsible for what users see. We use EJS templates for different pages like the homepage, event listings, event details, and forms to create or update events and remarks.

**Routers**: Routers manage the application's routes. In this project, we have an "Events Router" to handle event-related routes (listing, creating, updating, deleting) and a "Remarks Router" for managing remarks on events.


### Application Functionalities and User Interaction
- **Add Events**: Users can create and add new events, providing details such as title, summary, host, dates, categories, location, and more.
- **View Events**: A comprehensive list of all events is available for users to explore.
- **Event Categories**: Events can be categorized into various categories like programming, sports, trekking, and more.
- **Filtering**: Users can filter events by category, sort by the latest or oldest start date, and filter by location.
- **Like Events**: Users can like events they are interested in, incrementing the event's like count.
- **Event Remarks**: Users can add remarks to events, providing additional information or feedback.
- **Edit and Delete**: Event creators have the ability to edit event details and delete events as needed.
- **Edit and Delete Remarks**: Users can edit and delete their remarks on events.

### User-Friendly Interface
- **Homepage**: The homepage provides an introduction to the website, guiding users on how to use the platform.
- **Navigation**: A user-friendly header and footer are available on all pages for easy navigation.
- **Event Details**: Clicking on an event from the list provides detailed information about the event, including likes, categories, and remarks.

## Technologies Used

- **Express.js**: Backend web application framework for handling routes and requests.
- **MongoDB**: Database system for storing event and user data.
- **Mongoose**: MongoDB object modeling library for Node.js.
- **HTML/CSS**: Frontend design and user interface.
- **Git and GitHub**: Version control and collaborative development.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Configure your MongoDB database connection.
4. Run the application using `npm start`.


If you have any questions or encounter any issues, feel free to [raise an issue](https://github.com/anandsesha/Event-Management-Website/issues) or [contact us](mailto:anandseshawork@gmail.com).
