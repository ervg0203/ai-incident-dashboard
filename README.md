# AI Safety Incident Dashboard

## Overview

The AI Safety Incident Dashboard is a web-based tool designed to help track, report, and manage AI safety incidents. The dashboard allows users to view a list of incidents, filter them by severity, and sort them by date. Users can also report new incidents through an easy-to-use form.

This project is built using **React** and focuses on delivering a clean, user-friendly interface for monitoring AI safety incidents. The project does not include backend integration and is designed to be used as a frontend tool.

## Features

- **Incident List**: Displays a list of AI safety incidents with key information such as incident name, description, severity, and date.
- **Filter by Severity**: Allows users to filter incidents based on severity levels (Low, Medium, High).
- **Sort by Date**: Users can sort incidents either by the newest or oldest first.
- **Incident Reporting**: Users can report new incidents via a form, which includes details such as the incident name, description, severity, and date.
- **Responsive Design**: The dashboard adapts to different screen sizes, ensuring a great user experience on both desktops and mobile devices.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **CSS**: For styling the application.
- **HTML**: For structuring the content.
- **JavaScript**: For interactivity and logic.

## Installation

To run the AI Safety Incident Dashboard locally, follow the steps below:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **npm**: Node Package Manager is bundled with Node.js, but ensure it’s updated by running `npm install -g npm`.

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ervg0203/ai-incident-dashboard.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd ai-incident-dashboard
   ```

3. **Install the required dependencies**:

   ```bash
   npm install
   ```

4. **Run the application**:

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173/ai-incident-dashboard` to view the application.

## File Structure

```bash
ai-incident-dashboard/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── IncidentList.js
│   │   ├── IncidentForm.js
│   │   └── FilterSortControls.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

- `public/`: Contains the HTML file and static assets.
- `src/`: Contains the React components, styles, and JavaScript files.
- `package.json`: Lists the dependencies and scripts for the project.
- `README.md`: This file.

## How to Use

1. **View Incidents**: Once the dashboard is loaded, you will see a list of AI safety incidents, each with a description, severity, and date.
2. **Filter Incidents**: Use the radio buttons to filter incidents by severity (Low, Medium, High).
3. **Sort Incidents**: Use the "Sort by Date" dropdown to sort incidents either by newest or oldest first.
4. **Report a New Incident**: Use the "Report New Incident" form to submit details of a new AI safety incident.

## Contributing

We welcome contributions to the AI Safety Incident Dashboard! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your branch (`git push origin feature-name`).
6. Create a pull request with a description of your changes.

## Images 

![image](https://github.com/user-attachments/assets/ee6c3742-1510-4445-9ec4-ba4ef564a5c3)

![image](https://github.com/user-attachments/assets/399a3e8f-6f3c-477c-a059-ba9ca5ede4f3)


