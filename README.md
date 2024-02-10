# ReadMe Sections

## Description
The Tasty Palette is your go-to destination for culinary inspiration. With five handpicked recipes featured on the homepage, the website invites users to explore and discover new cooking ideas. Moreover, by creating an account, users can contribute their own recipes, fostering a community of shared culinary experiences and ideas.

## Deployment link

[Heroku Pages](https://tasty-palette-09debfc2279e.herokuapp.com/).



## Getting Started/Code Installation

If you want it to run locally on your machine:
 - Go to the [GitHub repository](https://github.com/yingjod/The-Tasty-Palette).
 - Fork it to your own GitHub account
 - Clone in via this green button where it is written <>code and copy the link from SSH
 - Open the terminal and change the current working directory to the location where you want the cloned directory.
 - Type git clone, and then paste the URL of the SSH link you copied earlier in Step 2
 - Press Enter to create your local clone. 
 - You do have the code and all the necessary sources to run it locally on your machine

## Timeframe & Working Team (Group)

We allocated a total of 8 days for the completion of this project.

Working Team:

Our team comprised four members, each specialising in different project areas. While we worked together on backend development, everyone had specific frontend responsibilities. I concentrated on crafting the register, recipe, and home pages, and establishing navigation. I also tackled challenges like default values on the edit page, integrated dropdown functionality, and introduced an image upload button with preview capabilities. Our collaboration thrived through regular meetings, clear task delegation, and adept use of version control systems.


## Technologies Used
 - Frontend: React.js, Bootstrap, React Router Dom, MDB React UI Kit
 - Backend: Node.js, Express.js, MongoDB, Mongoose
 - Styling: SASS, Bootstrap
 - Other Tools: Axios, JSON Web Token, Bcrypt, Dotenv
 - Build Tools: Vite, SASS Compiler
 - Libraries: Font Awesome (Font Awesome SVG Core, Free Brands SVG Icons, React Font Awesome)
 - Deployment: Heroku (for hosting the application)

## Brief

![Brief1](/client/src/images/readme/brief1.png)

## Planning

We have decided to use seven pages to showcase our website, including registration and login pages. We will manage data using MongoDB, and use React as the front-end framework.

![Wireframe1](/client/src/images/readme/wireframes1.png)
![Wireframe2](/client/src/images/readme/wireframes2.png)

## Build/Code Process

 - Day 1: We began by setting clear goals for the website and crafting wireframes to visualise our design. We outlined the main features and functionalities we wanted to include, such as user authentication, recipe management, and a responsive user interface.


 - Day 2: Our focus shifted to backend development. We started by building initial wireframes and setting up essential models using MongoDB for data storage. We created models for recipes and users, configured routes using Express.js, and organised backend files for efficient review management. Throughout this process, we utilised JavaScript and Mongoose for database management.

![code1](/client/src/images/readme/code1.png)
![code2](/client/src/images/readme/code2.png)

 - Day 3: Transitioning to front-end development, we established the main file structure of our React application. We began creating various components, including loaders and styling components using CSS and styled-components. We implemented navigation using React Router and integrated seed data to populate the site and facilitate testing.

![code3](/client/src/images/readme/code3.png)
![code4](/client/src/images/readme/code4.png)

 - Day 4: During the styling phase, we utilized React Bootstrap to enhance the visual presentation of key pages such as the login, register, and homepage. We focused on creating a clean and modern design, implementing responsive layouts to ensure compatibility across different devices. Additionally, we designed the login and register pages for user authentication, ensuring a seamless user experience.

![code5](/client/src/images/readme/code5.png)
![code6](/client/src/images/readme/code6.png)

 - Day 5: This day was dedicated to general improvements across the site. We addressed broken links and errors, optimised page sizes, standardised recipe display, enhanced the footer, implemented category filtering, and refined the login process.
 - Day 6: Further refinements were made to ensure mobile responsiveness and smooth user experience. We fine-tuned button formatting, added additional information to the single recipe page, enabled image uploads, and implemented code review processes for quality assurance.
 - Day 7: We concluded by adding social logos to the footer for increased engagement and created the profile page to enhance user interaction and personalisation.
 - Day 8: Finally, we wrapped up the project by consolidating all developments into the main branch for deployment, ensuring that the website was ready for launch.

## Challenges

- Handling Unwrapping of Promises for Result Display on Homepage.
- The registration page encountered difficulties when attempting to successfully send data to the backend.
- There was an issue with the image upload function on the create page, where the URL data couldn't be created successfully.
- On the edit recipe page, if the image isn't modified, the current one will not be preserved in the data.
- On the edit recipe page, the category section will not display the current recipe category.

## Wins

Working as a group for the first time was a great experience. Each team member took on different tasks, allowing us to explore and learn from our respective responsibilities. When we encountered challenges, everyone came together to solve them collaboratively. I truly enjoyed the teamwork dynamic.
As a challenge I faced earlier, I encountered difficulty with the image upload function on the create page. Despite reviewing our prior lessons and extensively researching online, as well as seeking guidance from friends and teaching assistants, I couldn't find a solution. Eventually, I sought help from the instructor, realising the significance of practising and learning continuously. This experience emphasised the importance of persistent learning in coding—an ongoing process that demands a perpetual learning mindset and curiosity.

## Key Learnings/Takeaways

- Learn GitHub's merging process for collaborative project work.
- Familiarise myself with Bootstrap.
- Establish the connection between backend and frontend for a project.
- Grasp the utilisation of Cloudinary for image uploads on a website.


## Bugs

A user can submit multiple reviews for the same recipe.

## Future Improvements

Implement a like button feature on each recipe page, incorporate a shareable link, and integrate a subscription function.

