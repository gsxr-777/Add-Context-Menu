import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Регистрация команды "Find"
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

    // Регистрация команды "Replace"
    const replaceCommand = vscode.commands.registerCommand(
        'add-context-menu.replace',
        () => {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const selection = editor.document.getText(editor.selection);
                if (selection) {
                    vscode.commands.executeCommand('editor.action.startFindReplaceAction');
                } else {
                    vscode.window.showInformationMessage('No text selected');
                }
            }
        }
    );

    context.subscriptions.push(searchCommand);
    context.subscriptions.push(replaceCommand);
}

export function deactivate() { }
