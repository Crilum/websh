// Search something on google, if no arguments are provided => www.google.com
g = google;
function google(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
	search = args.replace("+", "%2B")
        window.location.href = "https://www.google.com/search?q=" + search;
    } else {
        window.open("https://www.google.com");
    }
}

// Display time
time = clock;
function clock(args) {
    var today = new Date();
    block_log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

// Clear the terminal
cls = clear
clr = clear
function clear(args) {
    document.getElementById('wrapper').innerHTML = "";
}

// Search on DuckDuckGo
ddg = duckduckgo;
s = duckduckgo;
d = duckduckgo;
search = duckduckgo;
function duckduckgo(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
	search = args.replace("+", "%2B")
        window.open("https://duckduckgo.com/?q=" + search);
    } else {
        window.open("https://duckduckgo.com/");
    }
}

// Search on Wikipedia
w = wikipedia;
wiki = wikipedia;
function wikipedia(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
	search = args.replace("+", "%2B")
        window.open("https://wikipedia.org/w/index.php?search=" + search);
    } else {
        window.open("https://wikipedia.org/");
    }
}

// Search on Github
gh = github;
function github(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        search = args.replace("+", "%2B")
        window.open("https://github.com/search?q=" + search);
    } else {
        window.open("https://github.com/");
    }
}

// Print text
function echo(args) {
    block_log(args);
}

function help() {
    block_log("websh: the modern webshell emulator" + "<br/><br/>websh tools:<br/><br/>`echo` - print specified text<br/>`clock` - print time" + "<br/><br/>Search engines:<br/><br/>`g`, or `google` - go to https://google.com, or search for ARGS" + "<br/>" + "`s`, `search`, `d`, `ddg`, or `duckduckgo` - go to https://duckduckgo.com, or search for ARGS" + "<br/>" + "`w`, or `wikipedia` - go to https://wikipedia.org, or search for ARGS" + "<br/>" + "`gh`, or `github` - go to https://github.com, or search for ARGS<br/><br/>Settings:<br/><br/>`textcolor` - set the terminal text color<br/>`bgcolor` - Set the background color<br/>`termcolor` - Set the Terminal color<br/><br/>Note: for color setting use CSS Colors, or HEX Codes.<br/>")
}


textcolor = setTxtColor
set_txtColor = setTxtColor
function setTxtColor(args) {
	if (args != undefined) {
		document.documentElement.style.setProperty("--text-color", args)
		document.cookie = "textcolor=" + args
	}
}

bgcolor = setBgColor
set_bgColor = setBgColor
function setBgColor(args) {
	if (args != undefined) {
		document.documentElement.style.setProperty("--main-bg-color", args)
		document.cookie = "bgcolor=" + args
	}
}

termcolor = setTermColor
set_termColor = setTermColor
function setTermColor(args) {
	if (args != undefined) {
		document.documentElement.style.setProperty("--prompt-bg-color", args)
		document.cookie = "promptcolor=" + args
	}
}
