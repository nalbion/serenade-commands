/* Serenade Custom Commands

In this file, you can define your own custom commands with the Serenade API.

For instance, here's a custom automation that opens your terminal and runs a command:

serenade.global().command("make", api => {
  api.focusApplication("terminal");
  api.typeText("make clean && make");
  api.pressKey("return");
});

And, here's a Python snippet for creating a test method:

serenade.language("python").snippet("test method <%identifier%>",
  "def test_<%identifier%>(self):<%newline%><%indent%>pass",
  { "identifier": ["underscores"] }
  "method"
);

serenade.global().pronounce("prize", "price")
serenade.extension('.md')
serenade.scope(['vscode', 'intellij'], ['javascript', 'python'])
serenade.url([''])

# Builder
.command
.disable
.enable
hint(word)
key(trigger, key, [modifiers, options])
pronounce()
.text()

# Api
click(button, count)
clickButton(button)
domBlur/Click/Copy/Focus/Scroll
runCommand('next tab')
runShell(command[, args[], options{}, callback])

For more information, check out the SerenadeAPI documentation: https://serenade.ai/docs/api

*/


serenade.language('javascript').snippet('serenade code command <%name%>',
  "serenade.app('vscode').command('<%name%>', async (api, matches) => {<%newline%><%indent%><%cursor%><%newline%>});",
  // 'inline'
);
