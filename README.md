# SayHi! - Personalized Greeting Webpage/Mobile App

## Dumagsa, Trisha Marie R. Final Requirement
**BSIS-3A**

SayHi! is a user-friendly platform designed to help individuals create and send personalized greetings for various occasions. With a simple and intuitive interface, users can select from different celebration categories, input personalized messages, and share heartfelt greetings with stylish and unique presentations.

---

## Key Features

### 1. Occasion-Based Card Selection
- **Cards for Different Occasions**: Choose from categories like Birthdays, Anniversaries, Christmas, New Year, Graduation, and Valentine's Day.
- **Interactive Design**: Clickable cards open personalized forms tailored to specific events.

### 2. Personalized Greeting Form
- **User Input Fields**: Enter sender's name, recipient's name, and a custom message.
- **Input Validation**: Ensures all required fields are completed.
- **Responsive Layout**: Works seamlessly across mobile and desktop devices.

### 3. Footer with GitHub Link
- Includes a link to the source code with a GitHub icon for easy access.
- Displays copyright attribution.

---

## Technologies Used

### Frontend:
- **HTML5 & CSS3**: For structure and design.
- **JavaScript**: Adds interactivity, such as form validation and dynamic greeting display.

### External Libraries:
- **Google Fonts**: Stylish typography using the Poppins font.
- **Font Awesome**: Icons for GitHub and other elements.

---

## Potential for Mobile Use
- **Mobile-Friendly Design**: Adapts to both portrait and landscape modes.
- **Standalone App**: Can be deployed as a progressive web app (PWA) or native mobile app.

---

## Pages

### 1. **Index.html (Landing Page)**
- Welcomes users to the platform.
- Features a loading animation and a button to proceed to the home page.

### 2. **Home.html**
- Displays greeting options for different occasions.
- Includes:
  - **Personalized Greeting Options**: Clickable cards for each occasion.
  - **Form Modal**: Pop-up form for entering greeting details.
  - **Sent Greeting**: Generates a sample greeting output in a new tab.

---

## Example Code Snippets

### Loading Animation (Index.html):
```html
<div id="loading">
  <div class="loader"></div>
</div>
```

### Greeting Form (Home.html):
```html
<form id="greetingForm" onsubmit="sendGreeting(event)">
  <input type="text" id="senderName" placeholder="Your Name (Sender)" required>
  <input type="text" id="recipientName" placeholder="Recipient's Name" required>
  <textarea id="personalMessage" placeholder="Your Personal Message" rows="4" required></textarea>
  <button type="submit">Send Greeting</button>
</form>
```

---

## Future Enhancements
- **Database Integration**: Store user-created greetings.
- **Sharing Options**: Allow users to share greetings via email or social media.
- **Customizable Themes**: Enable users to select or upload custom designs.

---

## Contact
**Trisha Marie Dumagsa**
- GitHub: [source8marie](https://github.com/source8marie)
- Email: [trishamarie.dumagsa@tup.edu.ph](mailto:trishamarie.dumagsa@tup.edu.ph)

---
