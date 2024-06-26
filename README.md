

# Fingertip Notes

[View Website](https://rusjamison.github.io/fingertip-notes/  "Fingertip Notes")

Fingertip Notes is the site which helps and encourages the public to store their to do list, notes, grocery lists. It is tailor made to allow the public to store other data they might require in the future.

Momentarily forgetting why you walked into a room or struggling to find the right word are common experiences for many people—and they’re usually nothing to worry about.

As we age though, we may wonder whether these memory lapses signal a more significant health issue. When should you be concerned about memory loss?

This site will not address the medical side of memory loss but gives the public the tool they can use not to forget some important events or tasks up coming in their lives.

Technology is on our side, while there are lot of To Do applications on the market they don't address the issue of update and due date.

- We are the most fortunate and informed habitants to live on planet earth who can interact with technology.

- Integrated Circuits (IC) technology has improved greatly over the past ten years, making data storage easier, smarter, reliable and easy to retrive.

To minimize unnecessary forgetting important tasks and information this site assist the public to record their notes and retrive them anywhere they are. Engineers, Medical staff and Scientists will have special option to populate their notes/to do lists. 

![Screen size response](documentation/response3.webp)

## Table of Contents

* [User Experience](#user-experience)
* [Features](#features)
* [FutureFeatures](#future-features)
* [Deployment](#deployment)
* [Testing](#testing)
* [Technologies Used](#technologies-used)
* [Credits](#credits)

## User Experience

### User Stories

* #### First Time Visitor Goals
    * As a First Time Visitor, I want to see what can I benefit from the website
    * As a First Time Visitor, I want to navigate throughout the site easily
    * As a First Time Visitor, I want to find short, reliable and accurate information
    * As a First Time Visitor, I want to learn how to use the website quickly
    * As a First Time Visitor, I want to be able to apply what the site offer

* #### Returning visitor Goals
    * As a returning Visitor, I want to find more helpful information
    * As a returning Visitor, I want to find how I can interact with the site to full maximise its purpose.
    * As a returning Visitor, I want to view other new options added to the fingertip notes..
    * As a returning Visitor, I want to view helpful prompts and alerts when adding or updating tasks.
    * As a returning Visitor, I want to view latest capturing of my data using little effort on my part ie voice commands.

* ### Frequent Visitor Goals
    * As a Frequent Visitor, I want to see more and new data capturing methods.
    * As a Frequent Visitor, I want to see new additions which benefit the users.

    ### Existing Features

    * The Landing Page display area

    * The landing display includes the tasks textarea, the current date, the due date and To Do submit button.
    * The task textarea allows the user to entre the to do task or notes or grocery list or whatever the user want to remember later.
    * The textarea needs to be filled before a To Do button is clicked otherwise the user gets alert "Please add a Task".

    ![Landing Page Display Area](documentation/landing-page.webp)

    ![Landing Page Display Area With Date Hidden](documentation/task-no-date.PNG)

    * The user decides on a task to accomplish.
        * The user enters the task or notes on the textarea.
        * The user has access to a calendar at the top to quickly decide when to accomplish a task.
        * The user then clicks on the date beside the To Do textarea to enter the Due date the user want to accomplish the task. The user has option to leave the Due date if he does not want a reminder.
        * When the Due date is up the To Do task changes color to alert the user.
        * The user has two options to carry the task or use Edit to update the task.
        * The user can keep the task in the local storage or delete it after the task is completed.
        * The user can edit the note or task many times but the last updated date is stamped under the notes.
        * Each task or note has a created date at the bottom.
        * If Edit is carried on the note or task it will also have updated date at the bottom of each note or task.
        * If user enter a Due date the Due date also appears at the bottom.

    * The Footer
       * The Footer appears at the buttom with easy movement from landing page to the social media link in the event the user want to quickly check something before adding a task or after adding the task
       * The Footer is very important to the users as it encourage to keep them connected and take away some stresses which contribute to memory loss.

    ![Footer](documentation/footer.webp)  

      ### Future Features

* Fingertip Notes
    * Apart from helping with day to day task, the To Do created date, updated date and due date improve productivity.
    * This To Do list will have extra features in the future.
    * The current version because of the time factor to complete it might look crowded with the date stamps.
    * In the future appart from everyone can use it, it will come with special prepopulated option for engineers, medical staff and scientists so that they can easily add quick notes for their work.

    * For families the website will allow them to have common grocery list they can all update live at the same time. When one family member buys items the other members can see that like. There is no need for family members to buy bread or milk at the same time. 

## Deployment

    Open your repositories on GitHub
    Select fingertip notes

    Select settings
    Select Pages

    Make sure source is Deploy from Branch

    Select main for branch and folder for root then click save

    Your site lives at https://rusjamison.github.io/fingertip-notes/

### Run Project Locally
    
    Clone project into Gitpod
        GitHub account. [Create GitHub Account](https://github.com)
    
    1. Install [Gitpod Extension for Chrome](https://gitpod.io/docs/browser-extension/)
    2. Use your Gitpod account to [Log into Gitpod](https://gitpod.io)
    3. [Health Check project repository](https://github.com/RusJamison/fingertip-notes.git)
    4. Create gitpod workspace.
        Click the "Code" button to the right of the screen, click HTTPs and copy the link there
        Open a GitBash terminal and navigate to the directory where you want to locate the clone
        On the command line, type "git clone" then paste in the copied url and press the Enter key to begin the clone process

    
    

## Testing

### Browser Compatibility

* Testing carried on these browsers
    * Chrome
    * Edge
    * Android

* Feature Testing


| Feature        | Steps                                                      | Outcome                                                         | Results |
| -------------- | ---------------------------------------------------------- | --------------------------------------------------------------- | ------- |
| Calendar       | Click on the Calendar                                      | Opens calendar and user can set any date user wants             | Pass    |
| Responsiveness | All features test carried on desktops, tablets, and mobiles | Test on mobile, laptop, tablets and screens up to 1800px okay   | Pass    |
| Footer         | Click on Facebook, Twitter, and YouTube links              | Links respond and open appropriate pages                        | Pass    |
| Button         | Click To Do button                                         | Displays a task and sends to local storage                      | Pass    |
| Landing Page   | Check user experience                                      | Check for positioning, colors, and readability of text all clear| Pass    |
| Footer         | User experience check at the bottom of the page            | Looks simple and easy to click, forced to the bottom of the page| Pass    |
| Add a Task     | Enter task in textarea, click Add Todo                     | Acknowledgement task displayed with created date                | Pass    |
| Add a Task     | Enter task in textarea field and add due date              | Task displayed with created date and due date                   | Pass    |
| Add a Task     | Try to leave the task field empty and click Add Todo       | Displays "Please add the new task"                              | Pass    |
| Button         | Click on Edit                                              | Allows user to update a current task plus updated date included | Pass    |
| Button         | Click Show/Hide button                                     | Dates are shown or hidden                                       | Pass    |



### Validator Testing

[HTML Validator](https://validator.w3.org)

    Results for index.html with error
![HTML validation results](documentation/index-error.PNG)


    Results for index.html
![HTML validation results](documentation/index-no-error.PNG)

[CSS Validator](https://jigsaw.w3.org/css-validator/)

    CSS Results with error
![CSS results with error](documentation/css-error.PNG)

    CSS Results after correction
![CSS validation results](documentation/css-no-error.PNG)

    Landing Page Lighthouse Results
![Landing Page Lighthouse results](documentation/lighthouse.webp)

![JSHint JavaScript Validator](https://jshint.com/) clear warnings using New JavaScript features (ES6)


## Technologies Used

    HTML5
    CSS3
    Javascript

    Git
    GitHub

    Balsamiq

    Google fonts
    Font Awesome
    
    Visual Studio Code
    Markdown

    JSHint

    CKEditor

## Wireframe

### Landing Page

![Wireframe](documentation/wireframe3.webp)



## Credits

    The Code Institute Learning Platform, Learning Management System (LMS) was the main basis of my codes for this project. A number of my codes is based from the Coders Coffeehouse project, Love Running, Love Maths and Ultimate Rock Paper Scissors game.

    Thanks to Amy Richardson for the resources she gave us during the course of this project.

    Thanks to my mentor Brian Macharia for his mentoring sessions, guidance, patience, encouragement and constant motivation throughout the project.


### Content
Javascript Essentials by Lawrence Turton (https://irishheart.ie/your-health/our-health-programmes/healthy-communities/mobile-health-unit/)

Build Responsive Real-World Websites with HTML and CSS by Jonas Schmedtmann (https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3)

The Complete 2024 Web Development Bootcamp by Dr. Angela Yu (https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/)

50 Projects In 50 Days - HTML, CSS & JavaScript by Brad Traversy and Florin Pop (https://www.healthline.com/health-news/why-so-many-men-avoid-doctors?c=62125905332)

IC Technology in medical equipment (https://www.avnet.com/wps/portal/apac/resources/article/ic-technology-in-medical-equipment/)

I love Coding To Do project (https://ilovecoding.org/)

The Modern Javascript Bootcamp Course by Colt Steele (https://www.emedicinehealth.com/checkup/article_em.htm)

Flex codes (https://coder-coder.com/build-flexbox-website-layout/)

Nav (https://tutorials.shecodes.com.au/html_and_css/4_structure/3_nav/)

Flex (https://tutorials.shecodes.com.au/html_and_css/4_structure/3_nav/)

Navigation bar code(https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar)

README.md (Love Maths project and Coding Club project Institute Learning Management System)(https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+3/)

README.md(https://github.com/elainebroche-dev/ms1-thrive/)

CKEditor(https://cdn.ckeditor.com/ckeditor5/34.1.0/classic/ckeditor)

### Media
WEBP conversion (https://picflow.com/convert/png-to-webp)

Hero image (https://www.pexels.com/)

Favicon (https://www.flaticon.com/free-icon/cardiogram_249205)


Favicon (https://icons8.com/icons/set/favicon)
			
