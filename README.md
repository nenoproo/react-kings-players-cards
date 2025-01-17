# React Kings Players Cards

This React project displays a roster of Sacramento Kings NBA players in the form of individual cards. Each card provides detailed information about a player, including:

- **Name**
- **Jersey Number**
- **Position**
- **Age**
- **Country**
- **Profile Picture**

Additionally, the app includes a **search input** feature that allows users to filter and find specific players by their name.

---

## Features

1. **Player Cards**
   - Each card displays:
     - Player's **name**.
     - **Jersey number**.
     - **Position** (e.g., Guard, Forward).
     - **Age**.
     - **Country**.
     - A **profile picture**.

2. **Search Functionality**
   - Users can type into the search bar to filter the roster and find specific players.
   - The search is case-insensitive and updates the displayed cards dynamically.

---

## Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling the player cards and search bar.
- **JSON**: Used as the data source for the player roster.

---

## How It Works

1. The app fetches player data from a JSON file containing details about the Sacramento Kings roster.
2. The data is mapped to create individual player cards.
3. The search input uses React's state to filter the displayed players dynamically as the user types.

---

## Example Data Structure

```json
[
  {
    "name": "De'Aaron Fox",
    "jerseyNumber": 5,
    "position": "Guard",
    "age": 25,
    "country": "USA",
    "profilePicture": "url_to_fox_image"
  },
  {
    "name": "Domantas Sabonis",
    "jerseyNumber": 10,
    "position": "Center",
    "age": 27,
    "country": "Lithuania",
    "profilePicture": "url_to_sabonis_image"
  }
]
```

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/nenoproo/react-kings-players-cards.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-kings-players-cards
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to see the app in action.

---

## Future Enhancements

- Add pagination for large rosters.
- Include more player stats like height, weight, and career highlights.
- Add animations for card hover effects and search transitions.

---

## Author

Developed by **[Nenad Prokopiev]**. Feel free to connect on [GitHub](https://github.com/nenoproo)!
