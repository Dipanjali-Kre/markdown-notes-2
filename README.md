# Markdown Notes App

A simple and elegant React.js application for creating, editing, and managing your markdown notes. It features a split-pane editor for live preview, local storage persistence, and syntax highlighting for code blocks.

## Features

*   **Split-Pane Editor**: Write your markdown on the left and see the live preview on the right.
*   **Create Notes**: Easily add new notes with a click.
*   **Save Notes**: All notes are automatically saved to your browser's `localStorage`.
*   **Delete Notes**: Remove notes you no longer need.
*   **Syntax Highlighting**: Code blocks in your markdown are beautifully highlighted using `react-syntax-highlighter`.
*   **GitHub Flavored Markdown (GFM)**: Supports common markdown extensions like task lists, tables, and strikethrough.
*   **Responsive Design**: Adapts to different screen sizes (though primarily designed for desktop).

## Technologies Used

*   **React.js**: Frontend library for building user interfaces.
*   **`react-markdown`**: Renders markdown as React components.
*   **`remark-gfm`**: A `remark` plugin to support GitHub Flavored Markdown.
*   **`react-syntax-highlighter`**: For beautiful syntax highlighting of code blocks.
*   **`uuid`**: Generates unique IDs for notes.
*   **`localStorage`**: For client-side data persistence.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed.

*   [Node.js](https://nodejs.org/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/markdown-notes.git
    cd markdown-notes
    ```
    *(Note: Replace `your-username` with your actual GitHub username after pushing the code)*

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

    The app will open in your browser at `http://localhost:3000`.

## Usage

*   **Create a New Note**: Click the `+` button in the sidebar.
*   **Select a Note**: Click on any note in the sidebar to view and edit it.
*   **Edit Markdown**: Type your markdown in the left pane. The right pane will update in real-time.
*   **Delete a Note**: Click the trash can icon next to a note in the sidebar.

Your notes are automatically saved to your browser's local storage, so they will persist even if you close and reopen the browser.

## Project Structure

```
markdown-notes/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MainEditor.js
│   │   ├── MainEditor.css
│   │   ├── Sidebar.js
│   │   └── Sidebar.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── ...other config files
```

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests.

## License

This project is open source and available under the MIT License.
