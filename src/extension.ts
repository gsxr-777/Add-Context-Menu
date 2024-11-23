import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const searchCommand = vscode.commands.registerCommand(
        'add-context-menu.search',
        () => {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const selection = editor.document.getText(editor.selection);
                if (selection) {
                    vscode.commands.executeCommand('actions.find');
                } else {
                    vscode.window.showInformationMessage('No text selected');
                }
            }
        }
    );

    context.subscriptions.push(searchCommand);
}

export function deactivate() {}
