serenade.language('javascript').command('fix quotes', async (api, matches) => {
  await api.pressKey('h', ['control']);
  await api.typeText('"');
  await api.pressKey('tab');
  await api.pressKey("'");
  await api.pressKey('enter', ['control', 'alt']);
  await api.pressKey('escape');
});
  