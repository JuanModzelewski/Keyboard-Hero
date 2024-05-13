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
    - The user is given instructions for getting started with touch typing.
    - An illustration with a description depicts the hand position and function of the Home Keys.
    - The user can leave the modal by clicking the close icon or clicking elsewhere on the screen, and the default game level will load immediately, ensuring that frequent visitors are not forced to go through the walkthrough each time they visit the page.
    - The user is directed to the next page of the static walkthrough by a well labelled and easily accessible button. 

2. Static Walkthrough Modal Page Two
    - The static walkthrough page two shows an image of a keyboard with a color coded index corresponding to hand position, indicating which keys are closest to each finger, as well as a short description of how to locate each character.
    - Each difficulty level is given, along with the characters assigned to each level.
    - The player can select a preferred difficulty, and the modal will disappear, displaying the chosen difficulty characters in the gaming area.

3. Game Screen
    - The game screen is basic, providing the user with only the necessary information, allowing for less distraction when typing.
    - The user can adjust the difficulty, restart the current game difficulty, and display the keyboard index using clearly labelled text on the game screen.
    - As the user is typing the characters in game area automatically changed with correct characters being displayed in green `#ccffd9`, and underlined `#2eb82e`, incorrect characters displayed in red `#ffcccc` and underlined `#ff1a1a` and the current character to be pressed underlined in blue `#0000ff`.

4. Achievement Screen
    - As soon as the last character is typed, an achievement modal appears, providing feedback and rewarding the user with stars based on the number of correct keystrokes.
    - The characters per minute are calculated and presented underneath the score results, allowing the user to assess their typing speed and set targets for improvement.
    - The user can adjust the difficulty level or retry the current difficulty by clicking the appropriate option at the bottom of the modal.
    - The user can close the achievement modal by clicking the close icon or the window outside of it. This will reset the game area and display the current game difficulty.

### Design

#### Colors
- Font color `#445361`
- Button color `#445361`
- Button color hover `#88c7cc`
- Button color active `rgb(20, 103, 109)`


#### Fonts
- The selected typefaces is basic and easy to read.
    - The site uses Roboto for all content and elements with sans serif as a substitute.

#### Images
- The background image adds depth and contrast to the playing area, without being obtrusive or overwhelming. [pixabay](https://pixabay.com/illustrations/mountains-forest-landscape-sky-6302023/)
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

1. Game timer
    - The timer starts on the first keystroke and stops on the last keystroke.
    - Time is displayed in minutes and seconds
2. Correct Keystroke
    - When the user types the correct character, the character changes to green, indicating that the keystroke is correct.
3. Incorrect Keystroke
    - When the user types the incorrect character, the character changes to red, indicating that the keystroke is incorrect.
4. Current Key
    - The current character to be typed is underlined in blue
5. Number of Correct Keystrokes
    - Each correct keystroke is counted and shown as the user types.
6. Number of incorrect Keystrokes
    - Each incorrect keystroke is counted and shown as the user types.
7. Display Keyboard
    - Displays an image of a Keyboard with finger index for reference.
    - If the keyboard image is visible, the text and arrow change to hide the keyboard with arrow up.
8. Active button displaying current difficulty
    - The active color of the button clearly indicates to the user which difficulty level has been selected.



### Achievements Modal

![Achievements Modal](/assets/images/readme-images/keyboard_hero_game_achievements.jpg)

- 


## Technologies Used
### Languages Used
- HTML: Used to create the structure and content of Keyboard Hero.
- CSS: Used to style HTML structure elements
- JavaScript: Provided logic to make Keyboard Hero interactive 

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

- The site is fully responsive, BUT...
The primary feature of this game is touch typing, which is taught with hand placement on an external keyboard. <br>

The opening of the onscreen keyboards is a challenge for mobile and tablet use cases because only input text components allow the onscreen keyboard to be displayed <br> When evaluating the mobile and tablet use cases, it became evident that the game was designed to teach touch typing techniques and improve keyboard skills.

A javascript media query has been included for screen sizes of 1024px and smaller, displaying a warning and indicating that the game is not compatible with mobile and tablet use cases unless an external keyboard is used for typing.

![Warning Modal for 1024px and below](/assets/images/readme-images/mobile_warning.jpg)




### Validator Testing 

1. HTML
    - No errors were returned when analyzing with the official WJC Validator on all pages. 
    - [W3C Markup Validator](https://validator.w3.org/#validate_by_input) / [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjuanmodzelewski.github.io%2FKeyboard-Hero%2F)

![w3 Validator HTML](/assets/images/readme-images/keyboard_hero_css_validator.jpg)

2. CSS
    - No errors were returned when analyzing with the official CSS Validation Service.
    - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) / [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjuanmodzelewski.github.io%2FKeyboard-Hero%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

![w3 Validator HTML](/assets/images/readme-images/keyboard_hero_html_validator.jpg)

3. JavaScript
![JShint](/assets/images/readme-images/keyboard_hero_jshint_results.jpg)

4. Accessability
    - All chosen fonts and color schemes provide clear readability and accessibility, checked when running through with lighthouse in devtools.

### Google Lighthouse Testing
#### Desktop
- Mode (Navigation)
![Navigation Result](/assets/images/readme-images/lighthouse_score_desktop.jpg)



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