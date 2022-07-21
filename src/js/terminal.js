// Terminal config
config = {
    shellPrompt: "$ "
}


document.getElementById("input_title").innerText = config.shellPrompt;
document.getElementById('input_source').addEventListener('keyup', submit_command);
document.getElementById('input_source').addEventListener('keyup', getLastCommand);
document.getElementById('input_source').addEventListener('keydown', getPrevCommand);

var current_block;
var cmd_hist_curr_index = 0;
var command_history = [ "" ];

function new_block() {
    current_block = document.createElement("div");
    current_block.classList.add("log");
    document.getElementById('wrapper').appendChild(current_block);
}

echo = block_log
function block_log(message) {
    current_block.innerHTML = "<p>" + message + "</p>";
    new_block();
}

function error(message) {
	current_block.innerHTML = '<p style="color: red;">' + message + "</p>";
	new_block()
}

function submit_command_from_param(arg) {
    var input = arg;
	document.getElementById("input_source").value = "";

    new_block();

    command = input.split(" ")[0];
	args = input.replace(command, "").replace(" ", "")
	lastCommand = command + input.replace(command, "");
	argsArray = input
		.replace(command, "")
		.replace(" ", "")
		.split(" ")
    if (typeof window[command] === "function" 
		&& command == "bk" 
		|| command == "bookmark"
		|| command == "theme"
		|| command == "code"
		|| command == "vs"
		|| command == "vscode"
		|| command == "snap"
		|| command == "lds"
		|| command == "churchofjesuschrist"
		|| command == "r"
		|| command == "reddit"
		|| command == "usps"
		|| command == "ups"
		|| command == "gh"
		|| command == "github"
		|| command == "yt"
		|| command == "youtube"
		|| command == "wttr"
		|| command == "weather") {
        block_log(config.shellPrompt + command + " " + args);
		window[command](argsArray);
        lastCommand = command + input.replace(command, "");
	addCommandToHist(input)
    } else if (typeof window[command] === "function") {
		block_log(config.shellPrompt + command + " " + args);
		window[command](args);
        lastCommand = command + input.replace(command, "");
	addCommandToHist(input)
	} else if (command != "") {
        block_log("websh: " + command + ": command not found");
		lastCommand = command + input.replace(command, "");
		addCommandToHist(input)
    }
    cmd_hist_curr_index = 0;
}

function runParameters(params) {
	const url = window.location.search
	const urlParams = new URLSearchParams(url);
	for (let p of urlParams) {
		//console.debug(p);
		console.log(`Executing '${p[1]}'`)
		submit_command_from_param(p[1]);
	}
}

function submit_command() {
    if (!(event.keyCode === 13)) return;
    var input = document.getElementById("input_source").value;
	document.getElementById("input_source").value = "";

    new_block();

    command = input.split(" ")[0];
	args = input.replace(command, "").replace(" ", "")
	lastCommand = command + input.replace(command, "");
	argsArray = input
		.replace(command, "")
		.replace(" ", "")
		.split(" ")
    if (typeof window[command] === "function" 
		&& command == "bk" 
		|| command == "bookmark"
		|| command == "theme"
		|| command == "code"
		|| command == "vs"
		|| command == "vscode"
		|| command == "snap"
		|| command == "lds"
		|| command == "churchofjesuschrist"
		|| command == "r"
		|| command == "reddit"
		|| command == "usps"
		|| command == "ups"
		|| command == "gh"
		|| command == "github"
		|| command == "yt"
		|| command == "youtube"
		|| command == "wttr"
		|| command == "weather") {
        block_log(config.shellPrompt + command + " " + args);
		window[command](argsArray);
        lastCommand = command + input.replace(command, "");
	addCommandToHist(input)
    } else if (typeof window[command] === "function") {
		block_log(config.shellPrompt + command + " " + args);
		window[command](args);
        lastCommand = command + input.replace(command, "");
	addCommandToHist(input)
	} else if (command != "") {
        block_log("websh: " + command + ": command not found");
		lastCommand = command + input.replace(command, "");
		addCommandToHist(input)
    }
    cmd_hist_curr_index = 0;
}

function addCommandToHist(input) {
		if (command + input.replace(command, "") != command_history[1]) {
			command_history.shift()
        	command_history.unshift(command + input.replace(command, ""));
			command_history.unshift("")
		}
}

function getLastCommand() {
	if (!(event.keyCode === 38)) return
	if (lastCommand) {
		document.getElementById("input_source").value = lastCommand
	}
}

function getLastCommand() {
	if (!(event.keyCode === 38)) return
        if (command_history.length != 0) {
		if (cmd_hist_curr_index <= command_history.length
			&& command_history[(cmd_hist_curr_index + 1)]) {
			cmd_hist_curr_index += 1;
			document.getElementById("input_source").value = command_history[cmd_hist_curr_index];
                } else {
			return
		}
        }
}

function getPrevCommand() {
        if (!(event.keyCode === 40)) return
        if (command_history.length != 0) {
                if (cmd_hist_curr_index > 0) {
                        cmd_hist_curr_index -= 1;
	                document.getElementById("input_source").value = command_history[cmd_hist_curr_index];
                } else {
                        return
                }
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
