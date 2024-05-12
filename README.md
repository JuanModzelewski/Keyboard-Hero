# [Keyboard Hero](https://juanmodzelewski.github.io/Keyboard-Hero/)

Keyboard Hero was developed to give users an entertaining and captivating way to learn touch typing techniques. Assessing the user's accuracy and speed while offering guidance on touch typing techniques to help them become proficient with the keyboard and conquer their typing skills.

Keyboard Hero can be used by a variety of users, ranging from novice to proficient typists. Using three distinct difficulty levels to gauge each user's skill level.


![Keyboard Hero displayed on various platforms](/assets/images/readme-images/keyboard_hero_responsive_layout.jpg)

## User Experience (UX)
### User Goals
Users who visit the Keyboard Hero website want to test and improve their typing skills while also learning the basic principles of touch typing.
The game offers three difficulty levels: easy, medium, and hard. Each level adds an additional row of characters, which aids with muscle memory and improves accuracy and speed.


### User Journey
1. Static Walkthrough Modal
    - When the user enters the site, they are welcomed with a walkthrough modal and an introduction to the practice of touch typing.
    - The user can leave the modal by clicking the close icon or clicking on the screen, and the default game level easy will load immediately, ensuring that frequent users are not compelled to go through the tour every time they visit the page.
    - The user is directed to the next page of the static walkthrough by a well labelled and easily accessible button. 

2. Static Walkthrough Modal Page Two
    - The static walkthrough page two displays an image of a keyboard with a color code index that corresponds to hand positioning, indicating which keys are nearest to each finger.
    - 

3. Resources
    - Links to improve their experience with meditation are provided by music resources.
    - The guided meditation technique is aided by guided video materials.

4. Sign up
    - The mentors help users by providing them with individualized guidance, a someone to connect with to support them on their meditation journey, and any services they may require. (The mentor's services are not associated with the website; instead, they are discussed individually with the user upon enrollment.)
    - The form is simple to use, and the input flows in accordance with industry best practices.

### Design

#### Colors
- The color scheme that was selected exudes tranquilly and relaxation.
    - Primary color (#2b777c) A turquoise with a peaceful, soothing vibe.
    - Accent color (#5f8a8d) A darker shade of primary to be used as background with white text.
    - Accent color (#73A9AD) A lighter shade of primary to be used as background with dark text.
    - Body Font color (#4D4D4D) Compared to complete black, dark grey is less overwhelming and causes less eye strain.
    - Heading Font color (#2b777c) same as the primary color to draw attention to headings.

#### Fonts
- The selected typefaces is basic and easy to read.
    - The site uses Roboto for all content and elements with sans serif as a substitute.

#### Images
- The background image is from pixabay adding depth and contrast to the game area [pixabay](https://pixabay.com/illustrations/mountains-forest-landscape-sky-6302023/)
<br>
<br>

#### Wireframe / Sketches
- These sketches were created prior to finalizing website content.
![Wireframe](/assets/images/readme-images/keyboard_hero_sketch.PNG)


## Existing Features

### Static Walkthrough Modal (Page 1)

![Keyboard Hero Static Walkthrough Page 1](/assets/images/readme-images/static_walkthrough_page_1.jpg)

- 


### Static Walkthrough Modal (Page 2)

![Keyboard Hero Static Walkthrough Page 2](/assets/images/readme-images/static_walkthrough_page_2.jpg)

- 


### Game Area

![Keyboard Hero Game Layout Features](/assets/images/readme-images/keyboard_hero_features.webp)

- 1. Game timer
- 2. Correct Keystroke
- 3. Incorrect Keystroke
- 4. Current Key
- 5. Number of Correct Keystrokes
- 6. Number of incorrect Keystrokes
- 7. Display Keyboard
- 8. Active button displaying current difficulty



### Achievements Modal

![Achievements Modal](/assets/images/readme-images/keyboard_hero_game_achievements.jpg)

- 


## Technologies Used
### Languages Used
- HTML5
- CSS3
- JavaScript

### Frameworks, Libraries & Programs Used
- [Google Fonts:](https://fonts.google.com/)
    Google fonts was used to import fonts to website from CSS style sheet using the CSS@import rule.
- [Font Awesome:](https://fontawesome.com/)
    Font Awesome was used to for social icons and bar nav icon in mobile layout using the provided script at the bottom of each page.
- Git
    Used for version control by utilizing the terminal to commit and push any changes to GitHub.
- [GitHub (GitHub Desktop):](https://github.com/)
    GitHub is used to store the project's code after being pushed from Git.
    GitHub Desktop allows for easy creation and storing of repositories locally and an alternative push method.
- [VS Code:](https://code.visualstudio.com/)
    Visual Studio Code was used as IDE.
<br>
<br>

## Testing

- The site works on various browsers and has been tested on Safari, Chrome, Edge, and Firefox.
- All links for navigation work as they should, and links to resources play the correct media on YouTube.
- Headings, paragraphs, and navigation items are legible and easy to understand on all screen sizes.


### Responsive

- The site is fully responsive, and all items and functions work on all screen sizes. It was tested using development tools in the browser.

    - Tablet Resolution<br>

    ![Tablet view homepage](/assests/images/Readme-images/Tablet-view-responsive.jpg)

    - Mobile Resolution<br>

    ![Mobile view homepage](/assests/images/Readme-images/mobile-view-responsive.jpg)


### Validator Testing 

1. HTML
    - No errors were returned when analyzing with the official WJC Validator on all pages. 
    - [W3C Markup Validator](https://validator.w3.org/#validate_by_input) / [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjuanmodzelewski.github.io%2FKeyboard-Hero%2F)

![w3 Validator HTML](/assets/images/readme-images/keyboard_hero_css_validator.jpg)

2. CSS
    - No errors were returned when analyzing with the official CSS Validation Service.
    - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) / [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjuanmodzelewski.github.io%2FKeyboard-Hero%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

![w3 Validator HTML](/assests/images/Readme-images/w3c-validator-css.jpg)

3. Accessability
    - All chosen fonts and color schemes provide clear readability and accessibility, checked when running through with lighthouse in devtools.

### Google Lighthouse Testing
#### Desktop
- Static Walkthrough Page 1 <br>
![Static Walkthrough Page 1](assests/images/Readme-images/lighthouse-test-homepage-desktop.jpg)

- Static Walkthrough Page 2 <br>
![Static Walkthrough Page 2](assests/images/Readme-images/lighthouse-test-get-started-desktop.jpg)

- Game Screen <br>
![Game Screen](assests/images/Readme-images/lighthouse-test-resources-desktop.jpg)

- Achievements Modal <br>
![Achievements Modal](assests/images/Readme-images/lighthouse-test-signup-desktop.jpg)



### Bugs
No bugs to report


## Deployment
### GitHub Pages
The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not the top of the page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the drop-down called "None" and select "Main Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone
1. Log in to GitHub and locate the GitHub Repository
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3.
7. Press Enter. Your local clone will be created.
8. Click [Here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

- The live link is [Clarity](https://juanmodzelewski.github.io/Clarity/)

## Credits

### Content

- Code
    - The code to make the nav bar responsive was taken from the CI Love Running project.
    - The footer code with social media icons was taken from CI Love Running project.
    - Box shadow CSS was taken from https://getcssscan.com/css-box-shadow-examples

- Home / Benefits of meditation 
    - https://www.healthline.com/nutrition/12-benefits-of-meditation
    - https://www.medicalnewstoday.com/articles/benefits-of-meditation

- Get Started / Getting Started 
    - https://www.mindful.org/how-to-meditate/

- Get Started / Types of meditation 
    - https://planetmeditate.com/comparing-meditation-techniques/
    - https://liveanddare.com/types-of-meditation/

### Media

- Resources
    - Music - https://www.youtube.com/@ParadiseTonight
    - Videos - https://www.youtube.com/@GreatMeditation

- Images 
    - All images were taken from [Pexels](https://www.pexels.com/)

- Icons
    - Social & Nav icons taken from font awesome [Font awesome](https://fontawesome.com/)