# CSV Editor

<div align="center">

![CSV Editor](https://img.shields.io/badge/CSV-Editor-blue)
![.NET 8](https://img.shields.io/badge/.NET-8.0-purple)
![Windows](https://img.shields.io/badge/Platform-Windows-lightgrey)
![License](https://img.shields.io/badge/License-MIT-green)

A powerful, feature-rich CSV file editor built with .NET 8 and Windows Forms

[Tiếng Việt](README_Vi.md) | [日本語](README_Ja.md)

</div>

---

## 📖 Overview

CSV Editor is a high-performance desktop application designed for viewing, editing, and managing large CSV files with ease. Built on .NET 8, it provides an intuitive Excel-like interface with advanced features for data manipulation, filtering, searching, and more.

### ✨ Key Strengths

- **High Performance**: Optimized for handling large datasets (millions of cells) with efficient memory management and parallel processing
- **Advanced Data Grid**: Custom DataGrid implementation with virtual mode for smooth scrolling and editing
- **Intelligent Memory**: StringPool and PooledStringTable for memory-efficient string deduplication
- **Complete Undo/Redo**: Full command pattern implementation with unlimited undo/redo history (up to 100 steps)
- **Multi-language Support**: Built-in localization (Vietnamese, English & Japanese)
- **Modern UI**: Clean, intuitive interface with DPI awareness and zoom capabilities

---

## ⌨️ Keyboard Shortcuts

Quick reference for all keyboard shortcuts in CSV Editor:

### File Operations
| Shortcut | Function | Description |
|----------|----------|-------------|
| `Ctrl + N` | New File | Create a new CSV file with custom dimensions |
| `Ctrl + O` | Open File | Open an existing CSV file |
| `Ctrl + S` | Save | Save the current file |
| `Ctrl + Shift + S` | Save As | Save the current file with a new name |
| `Ctrl + E` | Export to Excel | Export current data to Excel format (.xlsx) |
| `Ctrl + W` | Close File | Close the current file |

### Edit Operations
| Shortcut | Function | Description |
|----------|----------|-------------|
| `Ctrl + Z` | Undo | Undo the last action |
| `Ctrl + Y` | Redo | Redo the last undone action |
| `Ctrl + Shift + Z` | Redo | Redo the last undone action (alternative) |
| `F2` | Edit Cell | Enter edit mode for the current cell |
| `Delete` / `Backspace` | Clear Cell | Clear contents of selected cells |
| `Ctrl + C` | Copy | Copy selected cells |
| `Ctrl + X` | Cut | Cut selected cells (clears content) |
| `Ctrl + V` | Paste | Paste clipboard content starting at current cell |

### View Operations
| Shortcut | Function | Description |
|----------|----------|-------------|
| `Ctrl + F` | Find and Replace | Open Find and Replace dialog |
| `Ctrl + H` | Find and Replace | Open Find and Replace dialog (alternative) |
| `F3` | Find Next | Find the next occurrence (when Find dialog is open) |
| `Shift + F3` | Find Previous | Find the previous occurrence (when Find dialog is open) |
| `Esc` | Close Find Dialog | Close the Find and Replace dialog |
| `Ctrl + Q` | Toggle Quote Marks | Show/Hide quote marks visibility in cells |
| `Ctrl + R` | Resize Columns | Auto-resize all columns to fit content |

### Zoom Operations
| Shortcut | Function | Description |
|----------|----------|-------------|
| `Ctrl + Plus (+)` | Zoom In | Increase zoom level by 25% |
| `Ctrl + Minus (-)` | Zoom Out | Decrease zoom level by 25% |
| `Ctrl + 0` | Reset Zoom | Reset zoom to 100% |
| `Ctrl + Mouse Wheel` | Zoom In/Out | Zoom in (scroll up) or out (scroll down) |

### Row Operations
| Shortcut | Function | Description |
|----------|----------|-------------|
| `Ctrl + Insert` | Insert Row | Insert a new row at current position |
| `Ctrl + H` | Hide Rows | Hide selected rows |

### Navigation
| Shortcut | Function | Description |
|----------|----------|-------------|
| `Arrow Keys` | Navigate Cells | Move between cells |
| `Tab` | Move Right | Move to the next cell (right) |
| `Shift + Tab` | Move Left | Move to the previous cell (left) |
| `Enter` | Move Down | Move to the cell below |
| `Home` | First Column | Move to the first column in current row |
| `End` | Last Column | Move to the last column in current row |
| `Ctrl + Home` | First Cell | Move to the first cell (top-right corner) |
| `Ctrl + End` | Last Cell | Move to the last cell (bottom-right corner) |
| `Page Up` | Scroll Up | Scroll one screen up |
| `Page Down` | Scroll Down | Scroll one screen down |

### Notes
- Most shortcuts follow standard Windows conventions
- Shortcuts are case-insensitive unless specified
- Some shortcuts may be disabled when the grid is in read-only mode or processing data
- When the Find and Replace dialog is open, pressing `Esc` will close it and return focus to the grid

---

## 🚀 Features

### File Operations

#### New File
Create a new CSV file with custom dimensions.

**How to use:**
1. Click **File → New** or press **`Ctrl+N`**
2. Enter the number of rows and columns
3. Start editing your data

**Shortcut:** `Ctrl+N`

#### Open File
Open and load CSV files with automatic encoding detection.

**How to use:**
1. Click **File → Open** or press **`Ctrl+O`**
2. Select your CSV file
3. The application automatically detects encoding and delimiter

**Shortcut:** `Ctrl+O`

**Supported Formats:**
- CSV (Comma-separated values)
- TSV (Tab-separated values)
- Custom delimiter files

#### Save / Save As
Save changes to existing file or export to a new file.

**How to use:**
- **Save:** Press **`Ctrl+S`** to save to current file
- **Save As:** Press **`Ctrl+Shift+S`** to save as new file

**Shortcuts:**
- Save: `Ctrl+S`
- Save As: `Ctrl+Shift+S`

#### Close File
Close the current file and clear the grid.

**Shortcut:** `Ctrl+W`

#### Export to Excel
Export your CSV data to Excel format (.xlsx).

**How to use:**
1. Click **File → Export to Excel** or press **`Ctrl+E`**
2. Choose save location
3. Data will be exported with optimal column widths

**Shortcut:** `Ctrl+E`

#### Merge Files
Combine multiple CSV files into one.

**How to use:**
1. Click **File → Merge Files**
2. Select multiple CSV files
3. Files will be merged row-by-row with automatic column alignment

**Features:**
- Automatic column alignment
- Progress bar for large files
- Handles different column counts

#### File Encryption
Open and save files with encryption protection.

**How to use:**
- **Open Encrypted:** File → Open with Encryption
- **Save Encrypted:** File → Save with Encryption

---

### Editing Operations

#### Undo / Redo
Revert or reapply changes with full history support.

**Shortcuts:**
- Undo: `Ctrl+Z`
- Redo: `Ctrl+Y` or `Ctrl+Shift+Z`

**Supported Operations:**
- Cell value changes
- Row/column insertions and deletions
- Hide/show operations
- Filter operations
- Freeze/unfreeze
- Highlights

#### Edit Cell
Edit cell values directly in the grid.

**How to use:**
1. Select a cell
2. Press **`F2`** or double-click to edit
3. Type new value
4. Press **`Enter`** to confirm or **`Esc`** to cancel

**Shortcuts:**
- Edit: `F2` or double-click
- Multi-cell edit: Select cells → press `Delete` or paste data

#### Copy / Paste
Standard clipboard operations with multi-cell support.

**How to use:**
- **Copy:** Select cells → `Ctrl+C`
- **Cut:** Select cells → `Ctrl+X`
- **Paste:** Select starting cell → `Ctrl+V`

**Features:**
- Multi-cell copy/paste
- Preserves tab-delimited format
- Smart paste with auto-resize

#### Delete Cell Content
Clear content from selected cells.

**How to use:**
1. Select cells
2. Press **`Delete`** or **`Backspace`**

**Shortcuts:** `Delete` or `Backspace`

---

### Row Operations

#### Insert Row
Add new rows at the current position.

**How to use:**
1. Right-click on row header
2. Select **Insert Row** or **Insert Rows**
3. Enter number of rows to insert (for bulk insert)

**Shortcut:** `Ctrl+Insert`

#### Delete Row
Remove selected rows.

**How to use:**
1. Select rows by clicking row headers
2. Right-click → **Delete Selected Rows**
3. Confirm deletion

**Features:**
- Multi-row selection (click + Shift/Ctrl)
- Undo support

#### Hide / Unhide Rows
Temporarily hide rows from view.

**How to use:**
- **Hide:** Select rows → right-click → **Hide Selected Rows** or `Ctrl+H`
- **Unhide:** Right-click → **Unhide Selected Rows**
- **Unhide All:** Right-click → **Unhide All Rows**

**Shortcuts:**
- Hide: `Ctrl+H`

**Note:** Hidden rows are preserved in file saves

#### Freeze / Unfreeze Row
Lock rows at the top of the view.

**How to use:**
1. Select the row to freeze
2. Right-click → **Freeze Row**
3. Frozen rows stay visible when scrolling

**To unfreeze:**
- Right-click on frozen area → **Unfreeze Row**

**Features:**
- Single row freeze (the row and all above it)
- Visual indicator for frozen rows
- Preserved during zoom

---

### Column Operations

#### Insert Column
Add new columns at the current position.

**How to use:**
1. Right-click on column header
2. Select **Insert Column** or **Insert Columns**
3. Enter number of columns to insert

#### Delete Column
Remove selected columns.

**How to use:**
1. Select columns by clicking column headers
2. Right-click → **Delete Selected Columns**
3. Confirm deletion

#### Hide / Unhide Columns
Temporarily hide columns from view.

**How to use:**
- **Hide:** Select columns → right-click → **Hide Selected Columns**
- **Unhide:** Right-click → **Unhide Selected Columns**
- **Unhide All:** Right-click → **Unhide All Columns**

#### Freeze / Unfreeze Column
Lock columns at the left of the view.

**How to use:**
1. Select the column to freeze
2. Right-click → **Freeze Column**
3. Frozen columns stay visible when scrolling horizontally

**To unfreeze:**
- Right-click on frozen area → **Unfreeze Column**

#### Resize Columns
Auto-fit column widths to content.

**How to use:**
- Click **View → Resize Columns** or press **`Ctrl+R`**
- Or double-click on column divider

**Shortcut:** `Ctrl+R`

**Features:**
- Calculates optimal width for all columns
- Progress indicator for large datasets

#### Column Header Style
Choose how column headers are displayed.

**How to use:**
1. Click **View → Column Header Style**
2. Select from:
   - **Number:** 1, 2, 3...
   - **Excel Style:** A, B, C... AA, AB...
   - **CSV Header:** Use first row as headers

**Features:**
- CSV Header mode treats first row as header (not editable)
- Header style is preserved in settings

---

### Data Operations

#### Find and Replace
Powerful search and replace functionality.

**How to use:**
1. Press **`Ctrl+F`** or **`Ctrl+H`**
2. Enter search text
3. Choose search mode:
   - **Accurate:** Exact match
   - **Contains:** Partial match
   - **Starts With:** Match beginning
   - **Ends With:** Match ending
4. Options:
   - **Find Only Column:** Search current column only
5. Click **Find Next** or **Find Previous**

**Shortcuts:**
- Open Find: `Ctrl+F` or `Ctrl+H`
- Find Next: `F3` or click **Find Next**
- Find Previous: `Shift+F3` or click **Find Previous**
- Replace: Click **Replace**
- Replace All: Click **Replace All**
- Close: `Esc`

**Features:**
- Highlights all matches
- Shows match count
- Replace single or all occurrences
- Fast parallel search for large datasets

#### Filter Columns
Excel-like column filtering.

**How to use:**
1. Right-click on column header
2. Select **Filter Column**
3. Choose values to show/hide
4. Sort by name or count
5. Click **Submit**

**To clear filter:**
- Right-click → **Clear Filter**

**Features:**
- Multi-select filtering
- Search within filter values
- Sort ascending/descending by name or count
- Shows item count for each value
- Combine filters on multiple columns

#### Sort Data
Sort rows by column values.

**How to use:**
1. Right-click on column header
2. Select sort mode:
   - **Ascending:** A → Z, 0 → 9
   - **Descending:** Z → A, 9 → 0
   - **Natural:** Natural number ordering (1, 2, 10 instead of 1, 10, 2)
   - **Shuffle:** Random order

**Features:**
- Multiple sort algorithms
- Preserves row integrity
- Works with filtered data

---

### View Operations

#### Zoom In / Out
Adjust view size for better visibility.

**How to use:**
- **Zoom In:** Click **+** button or press **`Ctrl++`**
- **Zoom Out:** Click **-** button or press **`Ctrl+-`**
- **Reset Zoom:** Press **`Ctrl+0`**
- **Set Custom:** Click zoom percentage → enter value

**Shortcuts:**
- Zoom In: `Ctrl++` or `Ctrl+Mouse Wheel Up`
- Zoom Out: `Ctrl+-` or `Ctrl+Mouse Wheel Down`
- Reset: `Ctrl+0`

**Zoom Range:** 50% to 500% in 25% increments

**Features:**
- Scales font, row height, and column widths
- Preserves scroll position
- Recalculates layout dynamically

#### Quote Marks
Toggle visibility of quote marks in cells.

**How to use:**
- Click **View → Quote Marks** or press **`Ctrl+Q`**

**Shortcut:** `Ctrl+Q`

**Features:**
- Add quotes: Select cells → right-click → **Add Quote Marks**
- Remove quotes: Select cells → right-click → **Remove Quote Marks**

---

### Highlight Operations

#### Add Highlight
Mark important cells with background color.

**How to use:**
1. Select cells
2. Right-click → **Add Highlight**

**Features:**
- Persistent across sessions
- Undo/redo support
- Visual cell marking

#### Remove Highlight
Remove highlighting from selected cells.

**How to use:**
1. Select highlighted cells
2. Right-click → **Remove Highlight**

#### Clear All Highlights
Remove all highlights from the grid.

**How to use:**
- Right-click → **Clear All Highlights**

---

### Settings

#### Encoding
Set character encoding for file operations.

**How to use:**
1. Click **Settings → Encoding**
2. Select from: UTF-8, Shift-JIS, etc.

**Features:**
- Auto-detection on file open
- Preserved per session

#### Delimiter
Set field separator character.

**How to use:**
1. Click **Settings → Delimiter**
2. Select from:
   - Comma (`,`)
   - Tab (`\t`)
   - Semicolon (`;`)
   - Pipe (`|`)
   - Custom

**Features:**
- Applied on file open/save
- Supports custom delimiters

#### Language
Switch between Vietnamese, English and Japanese.

**How to use:**
1. Click **Settings → Language**
2. Select **Vietnamese**, **English** or **Japanese**

**Features:**
- Instant UI update
- Preserved in settings

---

## 🛠️ System Requirements

- **Operating System:** Windows 10 or later
- **Framework:** .NET 8.0 Runtime
- **Memory:** 4 GB RAM minimum (8 GB recommended for large files)
- **Disk Space:** 50 MB

---

## 📦 Installation

1. Download the latest release from [Releases](https://github.com/tnkbang/CSVEditor/releases)
2. Extract the ZIP file
3. Run `CSVEditor.exe`

**No installation required!** The application is portable.

---

## 🖱️ Usage Tips

### Selection
- **Single Cell:** Click on cell
- **Multiple Cells:** Click + drag, or Shift+click
- **Entire Row:** Click row header
- **Entire Column:** Click column header
- **Multiple Rows/Columns:** Click + Ctrl for non-contiguous, Shift for range

### Drag and Drop
- Drag CSV files directly onto the application window to open them
- Multiple files open in separate windows

### Context Menu
- Right-click on cells, rows, or columns for quick access to operations

### Keyboard Navigation
- **Arrow Keys:** Move between cells
- **Tab:** Move to next cell
- **Enter:** Move to cell below
- **Page Up/Down:** Scroll one screen
- **Home/End:** Go to first/last cell in row
- **Ctrl+Home/End:** Go to first/last cell in grid

---

## 🔧 Technical Details

### Architecture
- **Custom DataGrid:** High-performance virtualized grid
- **Command Pattern:** Complete undo/redo system
- **StringPool:** Memory-efficient string deduplication
- **Parallel Processing:** Fast search and data operations for large datasets

### Dependencies
- **.NET 8.0:** Core framework
- **MiniExcel:** Excel export functionality
- **Windows Forms:** UI framework

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📧 Contact

- **GitHub:** [tnkbang/CSVEditor](https://github.com/tnkbang/CSVEditor)
- **Issues:** [Report a bug](https://github.com/tnkbang/CSVEditor/issues)

---

## 🙏 Acknowledgments

- MiniExcel library for Excel export functionality
- .NET Community for excellent framework and tools

---

<div align="center">

Made with ❤️ using .NET 8

</div>
