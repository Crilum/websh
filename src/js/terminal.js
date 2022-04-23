// Terminal config
config = {
    shellPrompt: "$ "
}

document.getElementById("input_title").innerText = config.shellPrompt;
document.getElementById('input_source').addEventListener('keyup', submit_command);
document.getElementById('input_source').addEventListener('keyup', getLastCommand);

var current_block;

function new_block() {
    current_block = document.createElement("div");
    current_block.classList.add("log");
    document.getElementById('wrapper').appendChild(current_block);
}

function block_log(message) {
    current_block.innerHTML = "<p>" + message + "</p>";
    new_block();
}

function error(message) {
	current_block.innerHTML = '<p style="color: red;">' + message + "</p>";
	new_block()
}

function submit_command() {
    if (!(event.keyCode === 13)) return;
    var input = document.getElementById("input_source").value;
    document.getElementById("input_source").value = "";

    new_block();

    command = input.split(" ")[0];
	lastCommandArgs = input.replace(command, "")
	args = new Array
	inputFiltered = input.replace(command, "").replace(" ", "");
	for (i = 0; i < 2; i++) {
		args[i] = inputFiltered.split(" ")[i]
	  }
    

    if (typeof window[command] === "function") {
        block_log(config.shellPrompt + command + " " + lastCommandArgs);
		window[command](args);
        lastCommand = command + lastCommandArgs;
    } else if (command != "") {
        block_log("websh: " + command + ": command not found");
		lastCommand = command + lastCommandArgs;
    }
}


function getLastCommand() {
	if (!(event.keyCode === 38)) return
	if (lastCommand) {
		document.getElementById("input_source").value = lastCommand
	}
}

cookies = document.cookie.split(";")
cookies.forEach((cookie) => {
	if (cookie.includes("promptcolor")) {
		document.documentElement.style.setProperty(
			"--prompt-bg-color",
			cookie.slice(cookie.indexOf("=") + 1)
		)
	}
	if (cookie.includes("textcolor")) {
		document.documentElement.style.setProperty(
			"--text-color",
			cookie.slice(cookie.indexOf("=") + 1)
		)
	}
	if (cookie.includes("bgcolor")) {
		document.documentElement.style.setProperty(
			"--main-bg-color",
			cookie.slice(cookie.indexOf("=") + 1)
		)
	}
	if (cookie.includes("textboxcolor")) {
		document.documentElement.style.setProperty(
			"--box-color",
			cookie.slice(cookie.indexOf("=") + 1)
		)
	}
})
