// Search something on google, if no arguments are provided => www.google.com
g = google;
function google(args) {
    if (args != undefined && args != "") {
        search = args
            .replace("+", "%2B")
            .replace(" ", "+")
            .replace("&", "%26")
            .replace("#", "%23")
        window.open("https://www.google.com/search?q=" + search);
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
    if (args != undefined && args != "") {
        search = args
            .replace("+", "%2B")
            .replace(" ", "+")
            .replace("&", "%26")
            .replace("#", "%23")
        window.open("https://duckduckgo.com/?q=" + search);
    } else {
        window.open("https://duckduckgo.com/");
    }
}

// Search on Wikipedia
w = wikipedia;
wiki = wikipedia;
function wikipedia(args) {
    if (args != undefined && args != "") {
        search = args
            .replace("+", "%2B")
            .replace(" ", "+")
            .replace("&", "%26")
            .replace("#", "%23")
        window.open("https://wikipedia.org/w/index.php?search=" + search);
    } else {
        window.open("https://wikipedia.org/");
    }
}

// Search on Github
gh = github;
function github(args) {
    if (args != undefined && args != "") {
        search = args
            .replace("+", "%2B")
            .replace(" ", "+")
            .replace("&", "%26")
            .replace("#", "%23")
        window.open("https://github.com/search?q=" + search);
    } else {
        window.open("https://github.com/");
    }
}

// Search on Thingiverse
t = thingiverse
function thingiverse(args) {
    if (args != undefined && args != "") {
        search = args
            .replace("+", "%2B")
            .replace(" ", "+")
            .replace("&", "%26")
            .replace("#", "%23")
        window.open("https://thingiverse.com/search?q=" + search);
    } else {
        window.open("https://thingiverse.com/");
    }
}

// Search on Amazon
a = amazon
function amazon(args) {
    if (args != undefined && args != "") {
        search = args
            .replace("+", "%2B")
            .replace(" ", "+")
            .replace("&", "%26")
            .replace("#", "%23")
        window.open("https://amazon.com/s?k=" + search);
    } else {
        window.open("https://amazon.com/");
    }
}

lds = churchofjesuschrist
function churchofjesuschrist(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    scripture = args
        .replace(main, "")
        .replace(/ /, "")
        .replace(/ /g, "/")
    if (main == "search" || main == "s" || main == "") {
        if (sub != undefined) {
            search = sub
            .replace("+", "%2B")
            .replace(" ", "+")
            .replace("&", "%26")
            .replace("#", "%23")
            window.open("https://www.churchofjesuschrist.org/search?query=" + search);
        } else {
            window.open("https://www.churchofjesuschrist.org/");
        }
    } else if (main == "bom") {
        window.open("https://www.churchofjesuschrist.org/study/scriptures/bofm/" + scripture)
    } else if (main == "help") {
        block_log(`lds, churchofjesuchrist - search or open scriptures on churchofjesuschrist.org
        <br><br> Subcommands:
        <br><br>  \`search\`, \`s\` - search for ARGS on churchofjesuschrist.org
        <br>  \`bom\` - open ARGS book/chapter of the Book of Mormon. See 'Book Codes' section for info about book names
        <br><br> Examples:
        <br><br>  \`lds search tower\` - search for 'tower' on churchofjesuschrist.org
        <br>  \`lds bom alma/31\` or \`lds bom alma 31\` - open Alma 31 on churchofjesuschrist.org
        <br><br> Book Codes:
        <br><br>  Book of Mormon:
        <br><br>   \`1-ne\` - 1 Nephi
        <br>   \`2-ne\` - 2 Nephi
        <br>   \`jacob\` - Jacob
        <br>   \`enos\` - Enos
        <br>   \`jarom\` - Jarom
        <br>   \`omni\` - Omni
        <br>   \`w-of-m\` - Words of Mormon
        <br>   \`mosiah\` - Mosiah
        <br>   \`alma\` - Alma
        <br>   \`hel\` - Helaman
        <br>   \`3-ne\` - 3 Nephi
        <br>   \`4-ne\` - 4 Nephi
        <br>   \`morm\` - Mormon
        <br>   \`moro\` - Moroni`)
    }
}

r = reddit
function reddit(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    if (main == "search" || main == "s") {
        search = sub
            .replace("+", "%2B")
            .replace(" ", "+")
            .replace("&", "%26")
            .replace("#", "%23")
        window.open("https://reddit.com/search/?q=" + search);
    } else if (main == "open" || main == "o") {
        if (sub.includes("r/") == true) {
            subreddit = sub.replace("r/", "")
        } else {
            subreddit = sub
        }
        window.open("https://reddit.com/r/" + subreddit)
    } else if (argsArray[1] == undefined) {
        if (main.includes("r/") == true) {
            subreddit = main.replace("r/", "")
        } else {
            subreddit = main
        }
        window.open("https://reddit.com/r/" + subreddit)
    } else if (main == "help") {
        block_log(`r, reddit - search or open subreddits on reddit.com
        <br><br> Subcommands:
        <br><br>  \`search\`, \`s\` - search for ARGS on reddit.com
        <br>  \`open\`, \`o\` - open ARGS subreddit
        <br><br> Examples:
        <br><br>  \`reddit search startpages\` - search for 'startpages' on reddit.com
        <br>  \`r open r/startpages\` or \`r startpages\` - open 'r/startpages' on reddit.com`)
    }
}

function help() {
    block_log(`websh: the modern webshell emulator
    <br/><br/> websh tools:
    <br/><br/> \`echo\` - print specified text
    <br/>  \`clock\` - print time
    <br>  \`clr\`, or \`clear\` - clear the terminal
    <br>  \`rel\`, or \`reload\` - reload the page 
    <br/>  \`link\` - open the specified full URL, i.e. 'https://github.com'
    <br/>  \`bk\`, \`bookmark\` - Create, manage, and use websh bookmarks. \`bookmark help\` for more info.
    <br>  \`theme\` - set terminal theme. \`theme help\` for more info.
    <br>  \`vscode\`, \`code\`, or \`vs\` - Use VS Code in your browser, or on your computer.
    <br>  \`snap\` - open snaps in the Snap Store
    <br/><br/> Search engines:
    <br/><br/>  \`g\`, or \`google\` - go to https://google.com, or search for ARGS
    <br/>  \`s\`, \`search\`, \`d\`, \`ddg\`, or \`duckduckgo\` - go to https://duckduckgo.com, or search for ARGS
    <br/>  \`w\`, or \`wikipedia\` - go to https://wikipedia.org, or search for ARGS
    <br/>  \`gh\`, or \`github\` - go to https://github.com, or search for ARGS
    <br/>  \`a\`, or \`amazon\` - go to https://amazon.com, or search for ARGS
    <br/>  \`r\`, or \`reddit\` - go to https://reddit.com, open ARGS subreddit, or search for ARGS. see \`r help\` for more info
    <br>   \`t\`, or \`thingiverse\` - go to https://thingiverse.com, or search for ARGS
    <br>   \`lds\`, or \`churchofjesuschrist\` - go to https://churchofjesuschrist.org, open ARGS book/chapter of the Book of Mormon, or search for ARGS. see \`lds help\` for more info
    <br/><br/> Settings:
    <br/><br/>  \`textcolor\` - set the terminal text color
    <br/>  \`bgcolor\` - Set the background color
    <br/>  \`termcolor\` - Set the Terminal color
    <br>  \`textboxcolor\` - set the color of text boxes
    <br/><br/>Note: for color setting use CSS Colors, HEX Codes, or rgb() Colors.<br/>`)
}


textcolor = setTxtColor
set_txtColor = setTxtColor
function setTxtColor(args) {
    if (args != undefined) {
        document.documentElement.style.setProperty("--text-color", args)
        document.cookie = "textcolor=" + args + "; SameSite=None; Secure"
    }
}

bgcolor = setBgColor
set_bgColor = setBgColor
function setBgColor(args) {
    if (args != undefined) {
        document.documentElement.style.setProperty("--main-bg-color", args)
        document.cookie = "bgcolor=" + args + "; SameSite=None; Secure"
    }
}

termcolor = setTermColor
set_termColor = setTermColor
function setTermColor(args) {
    if (args != undefined) {
        document.documentElement.style.setProperty("--prompt-bg-color", args)
        document.cookie = "promptcolor=" + args + "; SameSite=None; Secure"
    }
}

textboxcolor = setTextBoxColor
set_textboxcolor = setTextBoxColor
function setTextBoxColor(args) {
    if (args != undefined) {
        document.documentElement.style.setProperty("--box-color", args)
        document.cookie = "textboxcolor=" + args + "; SameSite=None; Secure"
    }
}

web = link
function link(args) {
    if (args != "") {
        if (args.includes("://")) {
            window.open(args)
        } else {
            error("E: bad URL!")
        }
    } else if (args != `*`) {
        error("E: no URL specified!")
    }
}

bk = bookmark
function bookmark(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    if (main == "add" || main == "new") {
        document.getElementById("bookmarkName").value = ""
        document.getElementById("bookmarkURL").value = ""
        $('#bookmarkBox').show();

        document.getElementById("bookmarkAddOk").addEventListener('click', (e) => {
            var bookmarkName = document.getElementById("bookmarkName").value
            var bookmarkURL = document.getElementById("bookmarkURL").value
            e.stopPropagation(); // so the big HTML element doesn't get it
            document.cookie = "bookmark" + bookmarkName + "=" + bookmarkURL + "; SameSite=None; Secure"
            $('#bookmarkBox').hide()
        })
        document.getElementById("bookmarkAddCancel").addEventListener('click', (e) => {
            $('#bookmarkBox').hide()
        })
    } else if (main == "open") {
        let bookmarkURL = document.cookie
            .split('; ')
            .find(row => row.startsWith(`bookmark${sub}=`.split(" ").join("")))
            .split('=')[1]
        console.log("Opening: " + bookmarkURL)
        link(bookmarkURL)
    } else if (main == "delete") {
        let bookmarkURL = document.cookie
            .split('; ')
            .find(row => row.startsWith(`bookmark${sub}=`.split(" ").join(""))
            ).split('=')[1]
        document.cookie = `bookmark${sub}=${bookmarkURL}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
    } else if (main == "list") {
        bookmarkList = document.cookie
        bookmarkListArray = bookmarkList
            .split(";")
        bookmarkListArrayFiltered = new Array()
        a = 0
        for (i = 0; i < bookmarkListArray.length; i++) {
            if (bookmarkListArray[i].includes("bookmark")) {
                bookmarkListArrayFiltered[a] = bookmarkListArray[i]
                a++
            }
        }
        for (i = 0; i < bookmarkListArrayFiltered.length; i++) {
            block_log(bookmarkListArrayFiltered[i]
                .replace(/;/g, "<br>")
                .replace(/"/g, "")
                .replace(/=/g, ', URL: ')
                .replace("bookmark", 'Name: '))
        }
    } else if (main == "help" || main == "?" || main == "--help" || main == "-h") {
        block_log("bookmark - the websh bookmark tool<br><br> Subcommands:<br><br>  add, or new - create a bookmark<br>  remove - remove the specified bookmark<br>  list - list all bookmarks<br>  open - open the specified bookmark<br><br> Examples:<br><br>  Open a bookmark named 'GitHub':<br>   `bk open GitHub`<br>  Remove a bookmark named 'GitHub':<br>   `bk remove GitHub`")
    } else {
        error("E: no argument specified, or bad argument!")
    }
}


function theme(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    if (main == "new") {
        document.getElementById("themeTitle").textContent = "New Theme:"
        document.getElementById("themeName").value = ""
        document.getElementById("themeTextColor").value = ""
        document.getElementById("themeTermColor").value = ""
        document.getElementById("themeBgColor").value = ""
        document.getElementById("themeTextBgColor").value = ""
        $('#themeBox').show();

        document.getElementById("themeAddOk").addEventListener('click', (e) => {
            if (theme("list").includes(document.getElementById("themeName").value)) {

            }
            var themeName = document.getElementById("themeName").value.replace(/ /g, "")
            var themeTextColor = document.getElementById("themeTextColor").value.replace(/ /g, "")
            var themeTermColor = document.getElementById("themeTermColor").value.replace(/ /g, "")
            var themeBgColor = document.getElementById("themeBgColor").value.replace(/ /g, "")
            var themeTextBgColor = document.getElementById("themeTextBgColor").value
            document.cookie = `theme-${themeName}-themeTextColor=${themeTextColor}; SameSite=None; Secure`
            document.cookie = `theme-${themeName}-themeTermColor=${themeTermColor}; SameSite=None; Secure`
            document.cookie = `theme-${themeName}-themeBgColor=${themeBgColor}; SameSite=None; Secure`
            document.cookie = `theme-${themeName}-themeTextBgColor=${themeTextBgColor}; SameSite=None; Secure`
            $('#themeBox').hide()
        })
        document.getElementById("themeAddCancel").addEventListener('click', (e) => {
            $('#themeBox').hide()
        })
    } else if (main == "edit") {
        themeLoad = document.cookie
        themeLoadArray = themeLoad
            .split(";")
        themeLoadArrayFiltered = new Array()
        a = 0
        for (i = 0; i < themeLoadArray.length; i++) {
            if (themeLoadArray[i].includes(`theme-${sub}`)) {
                themeLoadArrayFiltered[a] = themeLoadArray[i]
                a++
            }
        }
        //set theme vars
        themeTextColor = themeLoadArrayFiltered[0].replace(`theme-${sub}-themeTextColor=`, "").replace(/ /g, "")
        themeTermColor = themeLoadArrayFiltered[1].replace(`theme-${sub}-themeTermColor=`, "").replace(/ /g, "")
        themeBgColor = themeLoadArrayFiltered[2].replace(`theme-${sub}-themeBgColor=`, "").replace(/ /g, "")
        themeTextBgColor = themeLoadArrayFiltered[3].replace(`theme-${sub}-themeTextBgColor=`, "").replace(/ /g, "")
        document.getElementById("themeTitle").textContent = `Settings for ${sub}:`
        document.getElementById("themeName").value = sub
        document.getElementById("themeTextColor").value = themeTextColor
        document.getElementById("themeTermColor").value = themeTermColor
        document.getElementById("themeBgColor").value = themeBgColor
        document.getElementById("themeTextBgColor").value = themeTextBgColor
        $('#themeBox').show();

        document.getElementById("themeAddOk").addEventListener('click', (e) => {
            var themeName = document.getElementById("themeName").value.replace(/ /g, "")
            var themeTextColor = document.getElementById("themeTextColor").value.replace(/ /g, "")
            var themeTermColor = document.getElementById("themeTermColor").value.replace(/ /g, "")
            var themeBgColor = document.getElementById("themeBgColor").value.replace(/ /g, "")
            var themeTextBgColor = document.getElementById("themeTextBgColor").value.replace(/ /g, "")
            // Delete the theme
            document.cookie = `theme-${sub}-themeTextColor=${themeTextColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
            document.cookie = `theme-${sub}-themeTermColor=${themeTermColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
            document.cookie = `theme-${sub}-themeBgColor=${themeBgColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
            document.cookie = `theme-${sub}-themeTextBgColor=${themeTextBgColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
            // Save the new theme
            document.cookie = `theme-${themeName}-themeTextColor=${themeTextColor}; SameSite=None; Secure`
            document.cookie = `theme-${themeName}-themeTermColor=${themeTermColor}; SameSite=None; Secure`
            document.cookie = `theme-${themeName}-themeBgColor=${themeBgColor}; SameSite=None; Secure`
            document.cookie = `theme-${themeName}-themeTextBgColor=${themeTextBgColor}; SameSite=None; Secure`
            $('#themeBox').hide()
        })
        document.getElementById("themeAddCancel").addEventListener('click', (e) => {
            $('#themeBox').hide()
        })
    } else if (main == "set") {
        if (sub == "default") {
            bgcolor("#507496bd")
            textcolor("#138f4d")
            termcolor("#262626")
            textboxcolor("rgb(59, 59, 59)")

        } else if (sub == "teal-dark") {
            bgcolor("#0f3a48")
            textcolor("#3391ff")
            termcolor("#000")
            textboxcolor("rgb(59, 59, 59)")
        }
    } else if (main == "list") {
        themeList = document.cookie
        themeListArray = themeList
            .split(";")
        themeListArrayFiltered = new Array()
        a = 0
        for (i = 0; i < themeListArray.length; i++) {
            if (themeListArray[i].includes("theme-")) {
                themeListArrayFiltered[a] = themeListArray[i]
                a++
            }
        }
        for (i = 0; i < themeListArrayFiltered.length; i++) {
            block_log(themeListArrayFiltered[i]
                .replace(/;/g, "<br>")
                .replace(/"/g, "")
                .replace("-themeTextColor=", ', Text color: ')
                .replace("-themeTermColor=", ', Terminal color: ')
                .replace("-themeBgColor=", ', Background color: ')
                .replace("-themeTextBgColor=", ', Text background color: ')
                .replace("theme-", 'Name: '))
        }

    } else if (main == "load") {
        themeLoad = document.cookie
        themeLoadArray = themeLoad
            .split(";")
        themeLoadArrayFiltered = new Array()
        a = 0
        for (i = 0; i < themeLoadArray.length; i++) {
            if (themeLoadArray[i].includes(`theme-${sub}`)) {
                themeLoadArrayFiltered[a] = themeLoadArray[i]
                a++
            }
        }
        //set theme vars
        themeTextColor = themeLoadArrayFiltered[0].replace(`theme-${sub}-themeTextColor=`, "")
        themeTermColor = themeLoadArrayFiltered[1].replace(`theme-${sub}-themeTermColor=`, "")
        themeBgColor = themeLoadArrayFiltered[2].replace(`theme-${sub}-themeBgColor=`, "")
        themeTextBgColor = themeLoadArrayFiltered[3].replace(`theme-${sub}-themeTextBgColor=`, "")
        // set theme
        block_log(`Text Color: ${themeTextColor}
        <br>Terminal Color: ${themeTermColor}
        <br>Background Color: ${themeBgColor}
        <br>Textbox Color: ${themeTextBgColor}`)
        textcolor(themeTextColor)
        termcolor(themeTermColor)
        bgcolor(themeBgColor)
        textboxcolor(themeTextBgColor)
    } else if (main == "delete") {
        let themeTextColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${sub}-themeTextColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeTermColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${sub}-themeTermColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeBgColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${sub}-themeBgColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeTextBgColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${sub}-themeTextBgColor=`.split(" ").join(""))
            ).split('=')[1]

        // Do the deleting
        document.cookie = `theme-${sub}-themeTextColor=${themeTextColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
        document.cookie = `theme-${sub}-themeTermColor=${themeTermColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
        document.cookie = `theme-${sub}-themeBgColor=${themeBgColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
        document.cookie = `theme-${sub}-themeTextBgColor=${themeTextBgColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
    } else if (main == "export") {
        let themeTextColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${sub}-themeTextColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeTermColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${sub}-themeTermColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeBgColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${sub}-themeBgColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeTextBgColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${sub}-themeTextBgColor=`.split(" ").join(""))
            ).split('=')[1]
        var exportFile = new Blob([`themeName=${sub}
themeTextColor=${themeTextColor}
themeTermColor=${themeTermColor}
themeBgColor=${themeBgColor}
themeTextBgColor=${themeTextBgColor}`],
            { type: "text/plain;charset=utf-8" });
        saveAs(exportFile, `websh-theme-${sub}.txt`)
    } else if (main == "inport") {
        document.getElementById("fileInput").click()
    } else if (main == "help") {
        block_log(`theme - the websh theme tool
        <br><br> Subcommands:
        <br><br>  new - create a new theme
        <br>  load - load a saved theme
        <br>  inport - inport a downloaded theme
        <br>  export - download a saved theme
        <br>  set - load a built-in theme
        <br>  delete - delete a saved theme
        <br>  help - print this help
        <br><br> Examples:
        <br><br>  \`theme set default\` - sets the default theme
        <br>  \`theme new\` - create a new theme
        <br>  \`theme load SeaGreen\` - loads a user-created theme called 'SeaGreen'
        <br>  \`theme delete SeaGreen\` - deletes a user-created theme called 'SeaGreen'
        <br>  \`theme export SeaGreen\` - exports a user-created theme called 'SeaGreen'
        <br>  \`theme inport\` - inport a downloaded theme`)
    } else {
        error("E: no argument specified, or bad argument!")
    }
}

function getInportedTheme() {
    const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        // this will then display a text file
        content.innerText = reader.result;
        fileString = document.getElementById("blobp").innerHTML.split("<br>")
        let themeName = fileString[0].replace("themeName=", '')
        let themeTextColor = fileString[1].replace("themeTextColor=", '')
        let themeTermColor = fileString[2].replace("themeTermColor=", '')
        let themeBgColor = fileString[3].replace("themeBgColor=", '')
        let themeTextBgColor = fileString[4].replace("themeTextBgColor=", '')
        
        // set theme

        block_log(`Text Color: ${themeTextColor}
        <br>Terminal Color: ${themeTermColor}
        <br>Background Color: ${themeBgColor}
        <br>Textbox Color: ${themeTextBgColor}`)
        textcolor(themeTextColor)
        termcolor(themeTermColor)
        bgcolor(themeBgColor)
        textboxcolor(themeTextBgColor)

        // Save theme

        document.cookie = `theme-${themeName}-themeTextColor=${themeTextColor}; SameSite=None; Secure`
        document.cookie = `theme-${themeName}-themeTermColor=${themeTermColor}; SameSite=None; Secure`
        document.cookie = `theme-${themeName}-themeBgColor=${themeBgColor}; SameSite=None; Secure`
        document.cookie = `theme-${themeName}-themeTextBgColor=${themeTextBgColor}; SameSite=None; Secure`

    }, false);

    if (file) {
        reader.readAsText(file);
    }
}

vs = vscode
code = vscode
function vscode(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    if (main == "local") {
        window.open("vscode://open")
    } else if (main == "help") {
        block_log(`vscode, code, vs - the Visual Studio Code helper
        <br><br> Subcommands:
        <br><br>  \`local\` - open VS Code locally on your computer.
        <br>   Note: requires VS Code to be installed on your computer
        <br><br> Examples:
        <br><br>  \`code\` - open 'https://vscode.dev'
        <br>  \`code local\` - opens VS Code on your computer, with 'vscode://open'`)
    } else {
        window.open("https://vscode.dev")
    }
}

function snap(argsArray) {
    if (navigator.userAgent.includes("Linux")) {
        main = argsArray[0]
        sub = argsArray[1]
        if (main == "open") {
            window.open(`snap://${sub}`)
        } else if (main == "help") {
            block_log(`snap - a snap helper for websh
            <br><br> Subcommands:
            <br><br>  open - open a specified snap in the Snap Store
            <br>   Note: snapd, as well as the snap store must be installed to use this feature.
            <br><br> Examples:
            <br><br>  \`snap open telegram-desktop\` - opens the snap 'telegram-desktop' in the Snap Store`)
        } else {
            error("E: no argument specified, or bad argument!")
        }
    } else {
        error("E: you're not using Linux, so you can't use snapd!")
    }
}

rel = reload
function reload() {
    location.reload()
}