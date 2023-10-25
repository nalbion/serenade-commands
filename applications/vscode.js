/*
ctrl+shift+P -> Preferences: Open Default Keyboard Shortcuts (JSON)
editor.action.toggleWordWrap
copyRelativeFilePath
editor.showCallHierarchy
editor.showIncomingCalls
editor.showOutgoingCalls
editor.showSubtypes
explorer.openToSide
revealFileInOS
*/

serenade.app('vscode').command('command palette', async (api, matches) => {
  await api.pressKey('p', ['shift', 'control']);
});
  
serenade.app('vscode').key('select all of them', 'l', ['control', 'shift']);
serenade.app('vscode').key('complete', 'space', ['control']);
// serenade.app('vscode').key('copy line up', 'up', ['shift', 'alt']);
// serenade.app('vscode').key('shift line up', 'up', ['shift']);
// serenade.app('vscode').key('shift line down', 'down', ['shift']);
serenade.app('vscode').command('refactor', async (api, matches) => {
  await api.pressKey('f2');
});
serenade.app('vscode').key('fold block', '[', ['control', 'shift']);
serenade.app('vscode').key('unfold block', ']', ['control', 'shift']);
// serenade.app('vscode').command('unfold <%depth%> blocks', async (api, matches) => {
//   await api.pressKey('k', ['control']);
//   await api.pressKey('1', ['control']);
// })
serenade.app('vscode').key('next error', 'f8');

serenade.app('vscode').command('change all', async (api, matches) => {
  await api.evaluateInPlugin('editor.action.changeAll')
});

serenade.app('vscode').command('open folder', async (api, matches) => {
  await api.evaluateInPlugin('workbench.action.files.openFolder')
});
serenade.app('vscode').command('fix all', async (api, matches) => {
  await api.evaluateInPlugin('editor.action.fixAll')
});

serenade.app('vscode').command('new window', async (api, matches) => {
  await api.evaluateInPlugin('workbench.action.newWindow')
});


serenade.app('vscode').command('open terminal', async (api, matches) => {
  await api.evaluateInPlugin('workbench.action.terminal.focus')
});

serenade.app('vscode').command('new file', async (api, matches) => {
  await api.evaluateInPlugin('explorer.newFile')
});

serenade.app('vscode').command('new file named <%name%>', async (api, matches) => {
  await api.evaluateInPlugin('explorer.newFile')
  await api.typeText(matches.name)
  await api.pressKey('return')
}, { autoExecute: 'true' });


serenade.app('vscode').command('new folder named <%name%>', async (api, matches) => {
  await api.evaluateInPlugin('explorer.newFolder')
  await api.typeText(matches.name)
  await api.pressKey('return')
}, { autoExecute: 'true' });


serenade.app('vscode').command('rename file <%name%>', async (api, matches) => {
  await api.evaluateInPlugin('renameFile')
  await api.typeText(matches.name)
  await api.pressKey('return')
}, { autoExecute: 'true' });



serenade.app('vscode').command('search for <%word%>', async (api, matches) => {
  await api.pressKey('f', ['control', 'shift']);
  await api.typeText(matches.word)
  
});

serenade.app('vscode').command('npm init', async (api, matches) => {
  await api.evaluateInPlugin('npm-script.init')
});

serenade.app('vscode').command('npm install', async (api, matches) => {
  await api.evaluateInPlugin('npm-script.install')
});

serenade.scope(['vscode'], ['javascript', 'typescript']).command('run', async (api, matches) => {
  // await api.evaluateInPlugin('workbench.action.debug.run')
  await api.evaluateInPlugin('npm-script.start')
  // await api.evaluateInPlugin('npm-script.run')if
});

serenade.scope(['vscode'], ['javascript', 'typescript']).command('run again', async (api, matches) => {
  await api.evaluateInPlugin('npm-script.rerun-last-script')
});

// serenade.scope(['vscode'], ['javascript', 'typescript']).command('debug', async (api, matches) => {
//   await api.evaluateInPlugin('npm-script.debugScript')
// });

serenade.scope(['vscode'], ['javascript', 'typescript']).command('test', async (api, matches) => {
  await api.evaluateInPlugin('npm-script.test')
});

// serenade.scope(['vscode'], ['javascript', 'typescript']).command('die', async (api, matches) => {
//   await api.evaluateInPlugin('npm-script.terminate-script')
// });

// o.fixAll.document/project/solution
