# Simple Calculator Web Application

## Overview

This project is a simple, yet functional calculator web application built using HTML, CSS, and JavaScript. It provides basic arithmetic operations in a clean, responsive interface.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Clear all functionality (AC button)
- Delete last entry functionality (DE button)
- Responsive design with a gradient background
- Decimal point support
- Error handling for invalid expressions

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Fonts (Arimo)

## Project Structure

The project consists of three main files:

1. `calculator.html`: The main HTML structure of the application
2. `calculator.css`: Styles for the calculator interface
3. `calculator.js`: JavaScript functionality for calculator operations

## Setup and Usage

1. Clone the repository:
   ```
   git clone https://github.com/your-username/calculator-app.git
   ```

2. Navigate to the project directory:
   ```
   cd calculator-app
   ```

3. Open `calculator.html` in your preferred web browser.

4. Start calculating!

## How to Use

1. Click on the number buttons to input numbers.
2. Use the operation buttons (+, -, *, /) to perform calculations.
3. Press the "=" button to see the result.
4. Use "AC" to clear all entries.
5. Use "DE" to delete the last entered character.
6. The calculator supports decimal numbers using the "." button.

## Customization

You can easily customize the appearance of the calculator by modifying the `calculator.css` file. Some quick customizations include:

- Changing the background gradient in the `body` selector
- Modifying the font styles (the project uses Arimo by default)
- Adjusting the colors and dimensions of the calculator buttons and screen

## Responsive Design

The calculator is designed to be responsive:
- On screens wider than 500px, it maintains a width of 350px.
- On smaller screens (max-width: 500px), it adjusts to 95% of the screen width and increases font sizes for better visibility on mobile devices.

## Dependencies

This project uses the following external resources:

- Arimo font from Google Fonts (linked in the HTML file)

## Browser Compatibility

This application is built using modern web technologies and should work on all recent versions of major browsers, including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Known Limitations

- The calculator uses JavaScript's `eval()` function for calculations, which can be a security risk if used with user-input data in a more complex application.
- There's no input validation, so users can enter multiple decimal points or operators consecutively.

## Future Enhancements

Some potential improvements for the project:

- Add more advanced operations (square root, exponents, etc.)
- Implement keyboard support for number and operation inputs
- Add a history feature to show previous calculations
- Improve error handling and input validation
- Replace `eval()` with a safer calculation method

## Contributing

Contributions to improve the application are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request


## Contact

If you have any questions or suggestions, please open an issue in the GitHub repository.

---

Happy calculating!
