// serenade.app('vscode').key('rift', 'm', ['control'])

serenade.app('vscode').command('edit with rift', async (api, matches) => {
    // vscode.commands.executeCommand
    // api.evaluateInPlugin('RiftChat.focus')
    await api.pressKey('m', ['control']);
    await api.typeText('/edit');
    await api.pressKey('return');
    // return 'rift';
  }, { autoExecute: 'true' });
