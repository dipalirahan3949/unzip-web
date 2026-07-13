# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-07-13

### Added

- Initial public release
- Upload page with drag-and-drop ZIP file support
- Multiple concurrent file uploads with real-time progress
- Chunked upload architecture with resume-on-retry support
- Automatic ZIP extraction after upload completes
- Full file browser with nested folder tree view
- Multi-select: individual files, entire folders, or mixed selection
- Download selected files individually or as a new ZIP archive
- Download entire folders as ZIP preserving structure
- File type icons with color coding (images, videos, audio, code, documents)
- Upload states: waiting, preparing, uploading, processing, completed, failed, retrying, cancelled
- Queue controls: retry failed, cancel all, remove completed, clear queue
- Premium dark theme with glass effects and animations
- Responsive design for mobile, tablet, and desktop
- Folder drag detection with user-friendly warning
- Paste support for ZIP files
- Landing page with hero, features, file manager preview, formats, FAQ, and footer
- Client-side only — no server uploads, full privacy
- Professional repository standards and documentation

### Security

- All processing happens client-side in the browser
- No data is transmitted to external servers
- Files are cleared from memory when the tab is closed

[1.0.0]: https://github.com/devxashish/unzip-web/releases/tag/v1.0.0
