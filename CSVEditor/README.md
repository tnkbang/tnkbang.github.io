# CSV Editor

<div align="center">

![Version](https://img.shields.io/badge/Version-3.1.0.0-2563eb)
![.NET 8](https://img.shields.io/badge/.NET-8.0-512bd4)
![Platform](https://img.shields.io/badge/Platform-Windows%2010%2F11-0ea5e9)
![License](https://img.shields.io/badge/License-CSVEditor%20v1.0-059669)

**Precision desktop editor for CSV, TSV, and delimited text files on Windows.**

[Website](https://tnkbang.github.io/CSVEditor/) · [Documentation](https://tnkbang.github.io/CSVEditor/docs.html) · [Changelog](https://tnkbang.github.io/CSVEditor/changelog.html) · [Report Issue](https://github.com/tnkbang/CSVEditor/issues)

English | [Tiếng Việt](README_Vi.md) | [日本語](README_Ja.md)

</div>

---

## Overview

**CSV Editor** is a native Windows desktop application built with **.NET 8** and **Windows Forms** with **zero external NuGet dependencies**. It preserves raw text integrity (leading zeros, dates, encodings, and per-row line endings) while providing modern spreadsheet ergonomics.

## Key Features (v3.1.0.0)

- **HyperSheet Grid Engine**: Custom virtualized spreadsheet control with multi-selection (`Ctrl`/`Shift`), inline multiline editing (`Alt+Enter`), inline Auto-Suggest, Freeze Panes, Hide/Show rows & columns, AutoFit, and Zoom (50%–500%).
- **Excel-Style Auto Fill**: Drag or double-click the Fill Handle with 9 fill strategies (Formula, Weekday, Month, Japanese Date, DateTime, Number, Boolean, AlphaNumeric, TextCopy) and Fill Series / Copy Cells options.
- **Find, Replace, Sort & Filter**: 6 search modes (Contains, Exact, StartsWith, EndsWith, Regex, and **SQL `WHERE`** with row filtering), multi-column Excel-style value filtering, and 4 sort modes (Ascending, Descending, Natural, Shuffle).
- **Real-Time Data Validation**: 8 configurable rules (unbalanced quotes, trailing spaces, unquoted delimiters/newlines, leading zeros, etc.) with an Error Panel and one-click Quick Fixes.
- **64 Encodings & Line-Ending Control**: Automatic encoding detection across 14 character set groups (Unicode, Japanese, Chinese, Korean, European, 5 Vietnamese encodings, Thai), per-row line ending tracking (`CR LF` / `LF` / `CR`), and an optional Newline Viewport Column.
- **Data Engine & Safety**: Chunked storage (`DataChunk`), adaptive `StringPool` + `Utf8ByteArena`, virtual row/column mapping, pre-operation RAM protection (`MemoryManager`), crash-safe atomic saves (`SafeFileWriter`), and memory-budgeted Undo/Redo.
- **Built-in Tools & Customization**: Multi-tab workspace, Open from URL, native OpenXML `.xlsx` export, Merge Files, AES-128-CBC file encryption, Viewport Capture to Clipboard, independent Stopwatch, Light & Dark themes, and an 8-page searchable Settings center.
- **Trilingual UI**: Instant switching between **Vietnamese**, **English**, and **Japanese**.

## Download & Requirements

- **OS**: Windows 10 / 11
- **Runtime**: [.NET 8.0 Desktop Runtime](https://dotnet.microsoft.com/download/dotnet/8.0)
- **Download**:
  - [Portable (.zip)](https://tnkbang.github.io/CSVEditor/data/CSVEditor-portable.zip) — no installation required
  - [Installer (.exe)](https://tnkbang.github.io/CSVEditor/data/CSVEditor%20Setup.exe) — standard Windows setup

## Documentation

Full user guides, verified keyboard shortcuts, encoding reference, and troubleshooting are available on the official documentation site:

- **Product Overview**: https://tnkbang.github.io/CSVEditor/
- **User Guide**: https://tnkbang.github.io/CSVEditor/docs.html
- **Changelog**: https://tnkbang.github.io/CSVEditor/changelog.html

## Build from Source

```bash
git clone https://github.com/tnkbang/CSVEditor.git
cd CSVEditor
dotnet build CSVEditor.sln -c ReleasePortable
```

## License

Licensed under **CSVEditor Software License v1.0** — free for personal, educational, and internal commercial use, with full ownership of all output files. Commercial resale or commercial redistribution of the software is prohibited. See [LICENSE](LICENSE) ([Tiếng Việt](LICENSE_Vi)).

## Contact

- GitHub: [@tnkbang](https://github.com/tnkbang)
- Email: tnkbang.dev@gmail.com
