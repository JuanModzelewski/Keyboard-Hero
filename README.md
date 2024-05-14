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
    - As the user is typing the characters in game area automatically changed with correct characters being displayed in green `#ccffd9`<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/2eb82e?style=round'/></a>, and underlined `#2eb82e`<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/ccffd9?style=round'/></a>, incorrect characters displayed in red `#ffcccc` <a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/ffcccc?style=round'/></a> and underlined `#ff1a1a`<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/ff1a1a?style=round'/></a> and the current character to be pressed underlined in blue `#0000ff`<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/0000ff?style=round'/></a>.

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
- Correct Characters `#ccffd9`
- Correct Character bottom border `#2eb82e`
- Incorrect characters `#ffcccc`
- Incorrect Character bottom border `#ff1a1a`
- Current Character Indicator bottom border `#0000ff`


#### Fonts
- The selected typefaces is basic and easy to read.
    - The site uses Roboto for all content and elements with sans serif as a substitute.

#### Images
- The background image adds depth and contrast to the playing area, without being obtrusive or overwhelming. [pixabay](https://pixabay.com/illustrations/mountains-forest-landscape-sky-6302023/)
- The keyboard graphic is simple and easy to grasp, with colors on each finger indicating the closest key to that finger. Created By author using free vector form [vecteezy](https://www.vecteezy.com/vector-art/6549237-vector-illustration-of-keyboard-view-suitable-for-basic-elements-of-computer-text-input-devices-smartphones-and-digital-technology-qwerty-keyboard-layout)
- Logo was designed and created by author using Affinity Design.
- Home Keys image was designed and created by author using Affinity Design.
<br>
<br>

#### Wireframe / Sketches
- This sketch was created prior to finalizing page content.
![Wireframe](/assets/images/readme-images/keyboard_hero_sketch.PNG)


## Existing Features

### Static Walkthrough Modal (Page 1)

![Keyboard Hero Static Walkthrough Page 1](/assets/images/readme-images/static_walkthrough_page_1.jpg)

- Welcome message with Keyboard Hero logo and catch phrase
- The Getting Started section, which includes a reference image and a description, explains which keys are Home Keys and how to use them in touch typing.
- Next button takes the user to the next modal, while button positioning and content guide the user through the modal flow.
- The modal can be closed by clicking the close icon or clicking outside of it, allowing regular users to skip the walkthrough.


### Static Walkthrough Modal (Page 2)

![Keyboard Hero Static Walkthrough Page 2](/assets/images/readme-images/static_walkthrough_page_2.jpg)

- The description and accompanying image depict a keyboard with color-coded fingers, and the keyboard keys indicate which fingers are best utilized to type each character.
- List of three difficulty levels, with a description of which keys are used for each level of difficulty.
- Difficulty selection buttons allow experienced users to measure their current typing speed and accuracy based on their skills.
- When the user selects a difficulty, the modal closes and the characters from that difficulty are loaded into the game area. The chosen difficulty button is set to active, making it simple to determine which difficulty level has been selected.


### Game Screen

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

- Stars are displayed based on the user's correct score, providing visible feedback and encouraging them to improve their score.
- Game results, including correct, incorrect keystrokes and characters per minute calculated and shown, motivating participants to improve their accuracy and speed.
- Buttons allow you to try again or select a new difficulty. The current game difficulty does not appear in the modal.


## Technologies Used
### Languages Used
- HTML: Used to create the structure and content of Keyboard Hero.
- CSS: Used to style HTML structure elements
- JavaScript: Provided logic to make Keyboard Hero interactive 

### Frameworks, Libraries & Programs Used
- [Google Fonts:](https://fonts.google.com/)
    Google fonts was used to import fonts to website from CSS style sheet using the CSS@import rule.
- [Font Awesome:](https://fontawesome.com/)
    Font Awesome was used for icon sets including the below:
    - Close icons in modals.
    - Arrow in next button of the walkthrough modal page 1.
    - Retry button in the achievements modal.
    - Arrow in the display keyboard text.
    - Warning icon in the mobile warning modal.
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
- All button and display elements work as intended.
- Headings, paragraphs, and button elements are legible and easy to understand.


### Responsive

The site is fully responsive, BUT... <br>
The primary feature of this game is touch typing, which is taught with hand placement on an external keyboard. <br>

The opening of the onscreen keyboard is a challenge for mobile and tablet use cases as only input text components allow the onscreen keyboard to be displayed<br>

When evaluating the mobile and tablet use cases, it became evident that the game was designed to teach touch typing techniques and improve keyboard skills.<br>

A javascript media query has been included for screen sizes of 1024px and smaller, displaying a warning and indicating that the game is not compatible with mobile and tablet use cases unless an external keyboard is used for typing.

![Warning Modal for 1024px and below](/assets/images/readme-images/mobile_warning.jpg)

### Manual Testing

1. Walkthrough Modal Page 1

| Action | Expected Behavior | Result |
| :---         |     :---:      |          ---: |
| 1. Modal Displays | Modal walkthrough page one is displayed | Pass |
| 2. Window Click | Modal closes and game screen is displayed, the default game is set to "Easy" with corresponding characters added to game area | Pass |
| 3. Close Icon Click | Modal closes and game screen is displayed, the default game is set to "Easy" with corresponding characters added to game area | Pass |
| 4. Next Button Click | Modal walkthrough page one closes and walkthrough modal page two is displayed | Pass |

2. Walkthrough Modal Page 2

| Action | Expected Behavior | Result |
| :---         |     :---:      |          ---: |
| 1. Modal Displays | Modal walkthrough page two is displayed | Pass |
| 2. Window Click | Modal closes and game screen is displayed, the default game is set to "Easy" with corresponding characters added to game area | Pass |
| 3. Close Icon Click | Modal closes and game screen is displayed, the default game is set to "Easy" with corresponding characters added to game area. Easy button style on game screen is set to active | Pass |
| 4. Easy Button Click | Modal closes and game screen is displayed, the game difficulty is set to "Easy" and corresponding characters added to game area. Easy button style on game screen is set to active | Pass |
| 5. Medium Button Click | Modal closes and game screen is displayed, the game difficulty is set to "Medium" and corresponding characters added to game area. Medium button style on game screen is set to active | Pass |
| 6. Hard Button Click | Modal closes and game screen is displayed, the game difficulty is set to "Hard" and corresponding characters added to game area. Hard button style on game screen is set to active | Pass |

3. Game Screen

| Action | Expected Behavior | Result |
| :---         |     :---:      |          ---: |
| 1. Correct Characters displayed | The correct characters are added to the Game Area when difficulty level is selected or changed | Pass |
| 2. Key Press event | When a keystroke occurs the game checks the character displayed in the Game Area to the value of the keystroke | Pass |
| 3. Timer Starts | When the first keystroke event takes place the timer starts | Pass |
| 4. Correct Key pressed | If the value of the keystroke is equal to the value of the corresponding character in the game area, the character in the game area is highlight in green and the correct score is incremented | Pass |
| 5. Incorrect Key pressed | If the value of the keystroke is not equal to the value of the corresponding character in the game area, the character in the game area is highlight in red and the incorrect score is incremented | Pass |
| 6. Current Character indicator | After each keystroke the next character to be pressed is underlined in blue | Pass |
| 7. Difficulty Buttons | Clicking on a difficulty level changes the characters that are displayed in the game area | Pass |
| 9. Restart Button | When the restart button is clicked the game area, scores and timer is reset with new characters from current difficulty loaded into the game area | Pass |
| 10. Game Complete | When the last character in the game area has been pressed the achievement modal is displayed | Pass |
| 11. Timer stops | When the last character in the game area has been pressed the timer is stopped | Pass |

4. Achievement Modal

| Action | Expected Behavior | Result |
| :---         |     :---:      |          ---: |
| 1. Correct number of stars displayed | If correct answers > 42 three stars are displayed, if correct answers >= 35 two stars are displayed, if correct answers >= 25 one star is displayed, if correct answer <= 24 no stars are displayed | Pass |
| 2. Correct Scores | The right number of correct and incorrect answers are displayed in achievement modal | Pass |
| 3. Calculated characters per minute | The correct calculations for characters per minute are displayed | Pass |
| 4. Retry Button | Loads a new game with currently selected difficulty | Pass |
| 5. Change Difficulty Buttons | If a new difficulty is selected the chosen difficulty's game characters will load into the game area and the selected game difficulty button will become active on the game screen | Pass |
| 6. Window Click | Clicking on the window outside the achievement modal will close the modal and load a new game with current game difficulty level | Pass |
| 7. Close Icon | Clicking on the close icon will close the achievement modal and load a new game with current game difficulty level | Pass |


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

- The live link is [KeyBoard Hero](https://juanmodzelewski.github.io/Keyboard-Hero/)

## Credits

### Content

- Code
    - Function code to increment scores, basic structure take from CI Love Mathematics projects.
    - Simplify increment score JavaScript function with scoreNodeID and logic, thanks to my mentor.
    - Basic Javascript Modal tutorial used for modals [W3S](https://www.w3schools.com/howto/howto_css_modals.asp)
    - Stopwatch function code, snippets and logic taken from [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-create-stopwatch-using-html-css-and-javascript/)
    - Box shadow CSS was taken from https://getcssscan.com/css-box-shadow-examples.
    - Method to create cleaner javaScript code, thanks to my mentor for assisting me 

### Media

- Images 
    - Game Screen background image [pixabay](https://pixabay.com/)
    - Keyboard Hero logo, design by author using Affinity Designer
    - Keyboard index image, designed by author using Affinity Designer and free vectors from [vecteezy](https://www.vecteezy.com/vector-art/6549237-vector-illustration-of-keyboard-view-suitable-for-basic-elements-of-computer-text-input-devices-smartphones-and-digital-technology-qwerty-keyboard-layout)
    - Home Keys image, designed by author using Affinity Designer.
    - Button styles used from [CSS Scan](https://getcssscan.com/css-buttons-examples)

- Icons
    - All icons taken from font awesome [Font awesome](https://fontawesome.com/)