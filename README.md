# Add Context Menu

[Русская версия](README.ru.md)

Adds a context menu item to search for selected text in VS Code.

## Features
- Adds "Find" option to the context menu when text is selected
- Optional "Replace" feature (can be enabled in settings)

## Installation
1. Download the `add-context-menu-0.0.1.vsix` file from the releases.
2. Install the extension using the following command in the VS Code editor terminal:
```bash
code --install-extension add-context-menu-0.0.1.vsix
```

## Uninstall
```bash
code --uninstall-extension undefined_publisher.add-context-menu
```

## Settings
- `addContextMenu.enableReplace`: Enable the 'Replace' option in the context menu

### Example
To enable "Replace" in the context menu:
1. Open your settings (`Ctrl + ,`).
2. Search for `addContextMenu.enableReplace`.
3. Set it to `true`.

```json
{
  "addContextMenu.enableReplace": true
}
```

## Usage
1. Select text in editor
2. Right-click to open context menu
3. Choose "Find" to search for selected text
4. If enabled, choose "Replace" to open replace dialog

## Requirements
VS Code 1.95.0 or later and Not at all :-)

## Known Issues
Not yet.

## Release Notes
1.0.0

**Enjoy!**