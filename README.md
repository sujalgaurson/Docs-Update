# To start 
npm run dev
npx convex dev
# Docs Clone – Collaborative Text Editor

Docs Clone is a real-time collaborative text editor inspired by Google Docs. It allows multiple users to create, edit, and share documents simultaneously with live updates. Built with Next.js, Convex, Liveblocks, and Tailwind CSS, this project demonstrates modern web development practices for building collaborative applications.

## Features

- **Real-time Collaboration:** Multiple users can edit documents at the same time with instant updates.
- **Document Management:** Create, rename, and delete documents. Organize documents in a table view.
- **Rich Text Editing:** Supports formatting, font size, line height, and more.
- **User Avatars:** See who is currently editing the document.
- **Template Gallery:** Start with various document templates (resume, proposal, letter, etc.).
- **Authentication:** Secure login and user management.
- **Responsive UI:** Works seamlessly on desktop and mobile devices.

## Tech Stack

- **Next.js:** React framework for server-side rendering and routing.
- **Convex:** Backend-as-a-service for real-time data and storage.
- **Liveblocks:** Real-time presence and collaboration primitives.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **TypeScript:** Type safety across the codebase.

## Folder Structure

```
convex/           # Convex backend logic and schema
documents/        # Document management and API routes
public/           # Static assets and SVGs
src/app/          # Main application, pages, and components
src/components/   # UI components and dialogs
src/extensions/   # Editor extensions (font size, line height, etc.)
src/hooks/        # Custom React hooks
src/lib/          # Utility functions
src/Store/        # State management
```

## Extensions Used

This project uses several custom and third-party extensions to enhance the editor experience:

### 1. **Font Size Extension** (`src/extensions/Font-size.ts`)
- Adds font size selection to the editor toolbar.
- Allows users to change the font size of selected text.

### 2. **Line Height Extension** (`src/extensions/Line-height.ts`)
- Adds line height adjustment to the editor.
- Users can set custom line spacing for better readability.

### 3. **UI Extensions** (`src/components/ui/`)
- **alert-dialog.tsx:** Custom alert dialog component for confirmations.
- **button.tsx:** Reusable button component with variants.
- **carousel.tsx:** Carousel for template gallery.
- **dialog.tsx:** Modal dialog for renaming/removing documents.
- **dropdown-menu.tsx:** Dropdown menus for editor options.
- **input.tsx:** Styled input fields.
- **menubar.tsx:** Editor menubar for formatting options.
- **separator.tsx:** Visual separators in menus/toolbars.
- **sonner.tsx:** Toast notifications for user feedback.
- **table.tsx:** Table component for document listing.

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/sujalgaurson/Docs-Update.git
cd Docs-Update
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
- Configure Convex and Liveblocks credentials as required.
- See `.env.example` or project documentation for details.

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.
