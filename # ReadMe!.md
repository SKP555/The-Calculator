# SKP's Calculator Web App

A modern, responsive calculator built with HTML, CSS, and JavaScript.  
Supports arithmetic, square root, percentage, memory functions, and both mouse and keyboard input.

---

## Features

- **Basic Operations:** Addition, subtraction, multiplication, division
- **Advanced Functions:** Square root (√), percentage (%)
- **Memory Functions:**  
  - **M+**: Add current value to memory  
  - **M-**: Subtract current value from memory  
  - **MR**: Recall memory value  
  - **MC**: Clear memory
- **Editing:**  
  - **DEL**: Delete last character (disabled after result is shown)  
  - **AC**: Clear all
- **Keyboard Support:**  
  - Type numbers and operators directly  
  - `Enter` or `=` to evaluate  
  - `Backspace` to delete  
  - `C` to clear

---

## Usage

1. **Clone or download** this repository.
2. Open `index.html` in your browser.
3. Use the on-screen buttons or your keyboard to perform calculations.

---

## Project Structure

```
/Calculator
│
├── index.html      # Main HTML structure and button layout
├── style.css       # Calculator styling and layout
└── index.js        # Calculator logic and keyboard support
```

---

## Example Memory Usage

| Button | Action                             | Logic Example            |
| ------ | ---------------------------------- | ------------------------ |
| M+     | Add current value to memory        | `memory += currentValue` |
| M-     | Subtract current value from memory | `memory -= currentValue` |
| MR     | Show current memory value          | `display.value = memory` |
| MC     | Clear memory                       | `memory = 0`             |

---

## Screenshots

![Calculator design and functions](https://github.com/user-attachments/assets/1b0d5e21-25e0-4f1f-a868-fa2734700b1d)

---

## License

This project is open source and free to use for educational or personal projects.
