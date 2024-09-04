document.addEventListener("DOMContentLoaded", function() {
    const terminalContent = document.getElementById("terminal-content");
    const typedCommand = document.getElementById("typed-command");

    const commands = [
        "ls",
        "sudo apt-get update",
        "cat /etc/passwd"
    ];

    let commandIndex = 0;
    let charIndex = 0;

    function typeCommand() {
        if (charIndex < commands[commandIndex].length) {
            typedCommand.textContent += commands[commandIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeCommand, 100);  // Adjust typing speed here
        } else {
            charIndex = 0;
            commandIndex++;
            if (commandIndex < commands.length) {
                typedCommand.textContent = '';
                terminalContent.innerHTML += `<p><span class="command">user@hacker:~$</span> ${commands[commandIndex - 1]}</p>`;
                setTimeout(typeCommand, 500);  // Delay before typing the next command
            } else {
                terminalContent.innerHTML += `<p><span class="command">user@hacker:~$</span> ${commands[commandIndex - 1]}</p>`;
                typedCommand.remove();
            }
        }
    }

    typeCommand();
});
