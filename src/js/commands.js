// use google tools, search something on google, if no arguments are provided => www.google.com
g = google;
function google(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    if (main == "mail") {
        if (sub == "" || sub == undefined) {
            window.open("https://mail.google.com/mail/");
        } else {
            window.open(`https://mail.google.com/mail/u/${sub}`);
        }
    } else if (main == "drive") {
        if (sub == "" || sub == undefined) {
            window.open("https://drive.google.com/drive/");
        } else {
            window.open(`https://drive.google.com/drive/u/${sub}`);
        }
    } else if (main == "docs") {
        if (sub == "" || sub == undefined) {
            window.open("https://docs.google.com/");
        } else if (sub == "new") {
            window.open(`https://docs.new/`)
        } else {
            window.open(`https://drive.google.com/drive/u/${sub}`);
        }
    } else if (main == "slides") {
        if (sub == "" || sub == undefined) {
            window.open("https://slides.google.com/");
        } else if (sub == "new") {
            window.open(`https://slides.new/`)
        } else {
            window.open(`https://slides.google.com/slides/u/${sub}`);
        }
    } else if (main == "sheets") {
        if (sub == "" || sub == undefined) {
            window.open("https://sheets.google.com/");
        } else if (sub == "new") {
            window.open(`https://sheets.new/`)
        } else {
            window.open(`https://sheets.google.com/sheets/u/${sub}`);
        }
    } else if (main == "forms") {
        if (sub == "" || sub == undefined) {
            window.open("https://forms.google.com/forms/");
        } else if (sub == "new") {
            window.open(`https://forms.new/`)
        } else {
            window.open(`https://forms.google.com/forms/u/${sub}`);
        }
    } else if (main == "voice") {
        if (sub == "" || sub == undefined) {
            window.open("https://voice.google.com/voice/");
        } else {
            window.open(`https://voice.google.com/voice/u/${sub}`);
        }
    } else if (main == "maps") {
        if (sub == "" || sub == undefined) {
            window.open("https://maps.google.com/maps/");
        } else {
            window.open(`https://maps.google.com/maps/u/${sub}`);
        }
    } else if (main == "chat") {
        if (sub == "" || sub == undefined) {
            window.open("https://chat.google.com/chat/");
        } else {
            window.open(`https://chat.google.com/chat/u/${sub}`);
        }
    } else if (main == "contacts") {
        if (sub == "" || sub == undefined) {
            window.open("https://contacts.google.com/contacts/");
        } else {
            window.open(`https://contacts.google.com/contacts/u/${sub}`);
        }
    } else if (main == "calendar") {
        if (sub == "" || sub == undefined) {
            window.open("https://calendar.google.com/calendar/");
        } else {
            window.open(`https://calendar.google.com/calendar/u/${sub}`);
        }
    } else if (main == "photos") {
        if (sub == "" || sub == undefined) {
            window.open("https://photos.google.com/photos/");
        } else {
            window.open(`https://photos.google.com/photos/u/${sub}`);
        }
    } else if (main == "help") {
        block_log(`g, or google - use the Google ecosystem
        <br><br>Subcommands:
        <br><br>\`mail\` open Gmail, you can also specify a user number
        <br>\`maps\` open Google Maps, you can also specify a user number
        <br>\`drive\` open Google Drive, you can also specify a user number
        <br>\`photos\` open Google Photos, you can also specify a user number
        <br>\`calendar\` open Google Calendar, you can also specify a user number
        <br>\`voice\` open Google Voice, you can also specify a user number
        <br>\`contacts\` open Google Contacts, you can also specify a user number
        <br>\`chat\` open Google Chat, you can also specify a user number
        <br>\`docs\` open Google Docs, you can also specify a user number, or \`new\`, to open a new Doc
        <br>\`sheets\` open Google Sheets, you can also specify a user number, or \`new\`, to open a new Sheet
        <br>\`slides\` open Google Slides, you can also specify a user number, or \`new\`, to open a new Slide
        <br>\`forms\` open Google Forms, you can also specify a user number, or \`new\`, to open a new Form
        <br><br>Examples:
        <br><br>\`g mail 1\` - Opens user 1's Gmail
        <br>\`g docs new\` - Opens a new Doc
        <br>\`g drive\` - Opens Google Drive
        <br>\`g How to learn JavaScript\` - Search for 'How to learn JavaScript'
        <br>\`g\` Open google.com`)
    } else if (main != "") {
        search = args
            .replace("+", "%2B")
            .replace(" ", "+")
            .replace("&", "%26")
            .replace("#", "%23")
        window.open("https://www.google.com/search?q=" + search);
    } else if (main == "") {
        window.open("https://www.google.com");
    }
}

p = proton
function proton(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]

    if (main == "mail") {
        if (sub == "" || sub == undefined) {
            window.open("https://mail.proton.me/");
        } else {
            window.open(`https://mail.proton.me/u/${sub}`);
        }
    } else if (main == "drive") {
        if (sub == "" || sub == undefined) {
            window.open("https://drive.proton.me/");
        } else {
            window.open(`https://drive.proton.me/u/${sub}`);
        }
    } else if (main == "calendar") {
        if (sub == "" || sub == undefined) {
            window.open("https://calendar.proton.me/");
        } else {
            window.open(`https://calendar.proton.me/u/${sub}`);
        }
    } else if (main == "vpn") {
        if (sub == "" || sub == undefined) {
            window.open("https://account.proton.me/vpn");
        } else {
            window.open(`https://account.proton.me/u/${sub}/vpn`);
        }
    } else if (main == "account") {
        if (sub == "" || sub == undefined) {
            window.open("https://account.proton.me/");
        } else {
            window.open(`https://account.proton.me/u/${sub}`);
        }
    } else if (main == "help") {
        block_log(`p, or proton - use the Proton ecosystem
        <br><br>Subcommands:
        <br><br>\`mail\` open Proton Mail
        <br>\`drive\` open Proton Drive
        <br>\`calendar\` open Proton Calendar
        <br>\`vpn\` open Proton vpn settings
        <br>\`account\` open Proton Account
        <br><br>Examples:
        <br><br>\`p mail 0\` - Open User 0's Proton Mail
        <br>\`proton drive\` Open Proton Drive
        <br>\`proton\` - Open proton.me`)
    } else {
        window.open("https://proton.me")
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
function github(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    if (main == "open") {
        argsArraySplit = sub.split("/")
        user = argsArraySplit[0]
        repo = argsArraySplit[1]
        window.open(`https://github.com/${user}/${repo}`)
    } else {
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

so = stackoverflow
function stackoverflow(args) {
    if (args != undefined && args != "") {
        search = args
            .replace("+", "%2B")
            .replace(" ", "+")
            .replace("&", "%26")
            .replace("#", "%23")
        window.open("https://stackoverflow.com/search?q=" + search);
    } else {
        window.open("https://stackoverflow.com/");
    }
}

se = stackexchange
function stackexchange(args) {
    if (args != undefined && args != "") {
        search = args
            .replace("+", "%2B")
            .replace(" ", "+")
            .replace("&", "%26")
            .replace("#", "%23")
        window.open("https://stackexchange.com/search?q=" + search);
    } else {
        window.open("https://stackexchange.com/");
    }
}

yt = youtube
function youtube(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    if (main == "watch") {
        if (sub.includes("/watch?")) {
            vidId = sub.split("/")[3].replace("watch?v=", "")
        } else if (sub.includes("://")) {
            vidId = sub.split("/")[3]
        } else {
            vidId = sub
        }

        document.getElementById("yt").
            innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + vidId + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><button id="ytClose">🗙<button/>'
        document.getElementById("ytClose").addEventListener("click", (e) => {
            $('#yt').hide();
        })
        $("#yt").show()
    } else if (main == "help") {
        block_log(`yt, youtube - use youtube inside of websh
        <br><br>Subcommands:
        <br><br>\`watch\` - watch ARGS inside of websh. argument can be video id, or a link.
        <br>\`help\` - print this help.
        <br><br>Examples:
        <br><br>\`yt watch https://youtu.be/eoQYL4RHJkw\` or \`yt watch eoQYL4RHJkw\` - watch 'https://youtu.be/eoQYL4RHJkw' on youtube (inside of websh)`)
    }
}

function help() {
    textColor = window.getComputedStyle(document.getElementById("input")).color;
    const rawURL = window.location.origin
    // Actual help
    block_log(`websh: the modern webshell emulator
    <br/><br/> websh tools:
    <br/><br/> \`echo\` - print specified text
    <br/>  \`clock\` - print time
    <br>  \`clr\`, or \`clear\` - clear the terminal
    <br>  \`rel\`, or \`reload\` - reload the page 
    <br/>  \`link\` - open the specified full URL, i.e. 'https://github.com'
    <br/>  \`bk\`, \`bookmark\` - Create, manage, and use websh bookmarks. \`bookmark help\` for more info.
    <br>  \`theme\` - set terminal theme. \`theme help\` for more info.
    <br>  \`wttr\`, \`weather\` - get the weather, powered by <a href="https://wttr.in">wttr.in</a>
    <br>  \`vscode\`, \`code\`, or \`vs\` - Use VS Code in your browser, or on your computer.
    <br>  \`snap\` - open snaps in the Snap Store
    <br>  \`screenshot\`, \`sc\`, or \`prtscn\` - Take a screenshot of the terminal
    <br>  \`share\` - Share websh with all your friends! (It helps me a lot if you share this)
    <br/><br/> Search engines/web tools:
    <br/><br/>  \`g\`, or \`google\` - go to https://google.com, search for ARGS, or use a number of Google services. \`g help\` for more info.
    <br>   \`p\`, or \`proton\` - go to https://proton.me, or use a number of Proton services. \`p help\` for more info.
    <br/>  \`s\`, \`search\`, \`d\`, \`ddg\`, or \`duckduckgo\` - go to https://duckduckgo.com, or search for ARGS
    <br/>  \`w\`, or \`wikipedia\` - go to https://wikipedia.org, or search for ARGS
    <br/>  \`gh\`, or \`github\` - go to https://github.com, or search for ARGS
    <br/>  \`a\`, or \`amazon\` - go to https://amazon.com, or search for ARGS
    <br/>  \`r\`, or \`reddit\` - go to https://reddit.com, open ARGS subreddit, or search for ARGS. see \`r help\` for more info
    <br>   \`t\`, or \`thingiverse\` - go to https://thingiverse.com, or search for ARGS
    <br>   \`lds\`, or \`churchofjesuschrist\` - go to https://churchofjesuschrist.org, open ARGS book/chapter of the Book of Mormon, or search for ARGS. see \`lds help\` for more info
    <br>   \`usps\` - search for ARGS, track ARGS. see \`usps help\` for more info
    <br>   \`ups\` - search for ARGS, track ARGS. see \`ups help\` for more info
    <br>   \`so\`, \`stackoverflow\` - go to https://stackoverflow.com, or search for ARGS
    <br>   \`se\`, \`stackexchange\` - go to https://stackexchange.com, or search for ARGS. Search includes sites like askubuntu.com, superuser.com, apple.stackexchange.com, and many other sites. to see full list, go to <a href="https://stackexchange.com/sites" target="_blank">https://stackexchange.com/sites</a>
    <br/><br/> Settings:
    <br/><br/>  \`textcolor\` - set the terminal text color
    <br/>  \`bgcolor\` - Set the background color
    <br/>  \`termcolor\` - Set the Terminal color
    <br>   \`textboxcolor\` - set the color of text boxes
    <br>   \`clrpms\` - clear URL parameters
    <br>   \`clrhist\` - clear history
    <br/><br/>Note: for color setting use CSS Colors, HEX Codes, or rgb() Colors.
    <br><br> Using websh with URL parameters:
    <br><br>  You can use URL parameters to run commands while the page is loading, e.g. \`<a href="${rawURL}/?command=echo Hey, this command was run via URL!&command=time" target="_blank">${rawURL}/?command=echo Hey, this command was run via URL!&command=time</a><style>color: ${textColor};</style>\`
    <br>  Basically, write \`?command=yourCommand\` after the URL (${rawURL}/), and use \`&command=yourCommand\` thereafter.
    <br>There isn't a maximum number of commands you can specify (until you hit the browser URL size limit of course), but it's </font><a href="https://stackoverflow.com/q/417142" target="_blank">best to keep the number of chars in your URL below 2000</a><style>color: ${textColor};</style>.<br>`)
}

function usps(argsArray) {
    const main = argsArray[0]
    const sub = argsArray[1]
    if (main == "track") {
        argsArrayClone = argsArray.map((x) => x)
        argsArrayClone.shift();
        console.debug("New argsArray:" + argsArrayClone)
        rawTrackUrl = `https://tools.usps.com/go/TrackConfirmAction?tLabels=${argsArrayClone[0]}`
        console.debug("Before:" + rawTrackUrl)
        for (var i = 1; i < argsArrayClone.length; i++) {
            rawTrackUrl = `${rawTrackUrl}&tLabels=${argsArrayClone[i]}`
            console.debug("While:" + rawTrackUrl)
        }
        console.debug("After:" + rawTrackUrl)
        window.open(rawTrackUrl)
    } else if (main == "search") {
        window.open(`https://www.usps.com/search/results.htm?keyword=${args.replace(main, "")}`)
    } else if (main == "help") {
        block_log(`usps - track packages and search on usps.com
        <br><br>Subcommands:
        <br><br>\`track\` - track ARGS packages. You can specify up to 35 tracking numbers, separated by spaces.
        <br>\`search\` - search for ARGS on usps.com
        <br>\`help\` - print this help
        <br><br>Examples:
        <br><br>\`usps track 28934792836592\` - track tracking number '28934792836592' (not a real tracking number)
        <br>\`usps search PO Boxes\` - search for 'PO Boxes' on usps.com`)
    } else {
        window.open(`https://usps.com`)
    }

}

function ups(argsArray) {
    const main = argsArray[0]
    const sub = argsArray[1]
    if (main == "track") {
        rawTrackUrl = `https://www.ups.com/track?tracknum=${sub}`
        window.open(rawTrackUrl)
    } else if (main == "search") {
        window.open(`https://www.ups.com/us/en/SearchResults.page?q=${args.replace(main, "")}`)
    } else if (main == "help") {
        block_log(`ups - track a package or search on usps.com
        <br><br>Subcommands:
        <br><br>\`track\` - track ARGS packages. Unlike \`usps\`, you can only specify 1 tracking number.
        <br>\`search\` - search for ARGS on ups.com
        <br>\`help\` - print this help
        <br><br>Examples:
        <br><br>\`ups track 28934792836592\` - track tracking number '28934792836592' (not a real tracking number)
        <br>\`ups search change my address\` - search for 'change my address' on usps.com`)
    } else {
        window.open(`https://ups.com`)
    }

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

clrpms = clearParamCommands
function clearParamCommands(args) {
    if (window.location.href != window.location.origin + "/"
        && window.location.href != window.location.origin) {
        window.location.href = window.location.origin
    } else {
        block_log("No parameters to clear.")
    }
}
bk = bookmark
function bookmark(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    bkName = args.replace(main, '').replace(" ", "").replace(/ /g, "␠")
    if (main == "add" || main == "new") {
        document.getElementById("bookmarkName").value = ""
        document.getElementById("bookmarkURL").value = ""
        $('#bookmarkBox').show();

        document.getElementById("bookmarkAddOk").addEventListener('click', (e) => {
            var bookmarkName = document.getElementById("bookmarkName").value
            var bookmarkURL = document.getElementById("bookmarkURL").value
            e.stopPropagation(); // so the big HTML element doesn't get it
            document.cookie = "bookmark" + bookmarkName.replace(/ /g, "␠") + "=" + bookmarkURL + "; SameSite=None; Secure"
            $('#bookmarkBox').hide()
        })
        document.getElementById("bookmarkAddCancel").addEventListener('click', (e) => {
            $('#bookmarkBox').hide()
        })
    } else if (main == "open") {
        let bookmarkURL = document.cookie
            .split('; ')
            .find(row => row.startsWith(`bookmark${bkName}=`.split(" ").join("")))
            .split('=')[1]
        console.log("Opening: " + bookmarkURL)
        link(bookmarkURL)
    } else if (main == "delete") {
        let bookmarkURL = document.cookie
            .split('; ')
            .find(row => row.startsWith(`bookmark${bkName}=`.split(" ").join(""))
            ).split('=')[1]
        document.cookie = `bookmark${bkName}=${bookmarkURL}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
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
                .replace("bookmark", 'Name: ')
                .replace(/␠/g, " "))
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
            var themeName = document.getElementById("themeName").value.replace(/ /g, "␠")
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
        specifiedThemeName = args.replace(main, '').replace(' ', '').replace(/ /g, "␠")
        themeLoad = document.cookie
        themeLoadArray = themeLoad
            .split(";")
        themeLoadArrayFiltered = new Array()
        a = 0
        for (i = 0; i < themeLoadArray.length; i++) {
            if (themeLoadArray[i].includes(`theme-${specifiedThemeName}`)) {
                themeLoadArrayFiltered[a] = themeLoadArray[i]
                a++
            }
        }
        //set theme vars
        themeTextColor = themeLoadArrayFiltered[0].replace(`theme-${specifiedThemeName}-themeTextColor=`, "").replace(/ /g, "")
        themeTermColor = themeLoadArrayFiltered[1].replace(`theme-${specifiedThemeName}-themeTermColor=`, "").replace(/ /g, "")
        themeBgColor = themeLoadArrayFiltered[2].replace(`theme-${specifiedThemeName}-themeBgColor=`, "").replace(/ /g, "")
        themeTextBgColor = themeLoadArrayFiltered[3].replace(`theme-${specifiedThemeName}-themeTextBgColor=`, "").replace(/ /g, "")
        document.getElementById("themeTitle").textContent = `Settings for ${specifiedThemeName}:`
        document.getElementById("themeName").value = sub
        document.getElementById("themeTextColor").value = themeTextColor
        document.getElementById("themeTermColor").value = themeTermColor
        document.getElementById("themeBgColor").value = themeBgColor
        document.getElementById("themeTextBgColor").value = themeTextBgColor
        $('#themeBox').show();

        document.getElementById("themeAddOk").addEventListener('click', (e) => {
            var themeName = document.getElementById("themeName").value.replace(/ /g, "␠")
            var themeTextColor = document.getElementById("themeTextColor").value.replace(/ /g, "")
            var themeTermColor = document.getElementById("themeTermColor").value.replace(/ /g, "")
            var themeBgColor = document.getElementById("themeBgColor").value.replace(/ /g, "")
            var themeTextBgColor = document.getElementById("themeTextBgColor").value.replace(/ /g, "")
            // Delete the theme
            document.cookie = `theme-${specifiedThemeName}-themeTextColor=${themeTextColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
            document.cookie = `theme-${specifiedThemeName}-themeTermColor=${themeTermColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
            document.cookie = `theme-${specifiedThemeName}-themeBgColor=${themeBgColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
            document.cookie = `theme-${specifiedThemeName}-themeTextBgColor=${themeTextBgColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
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
        } else if (sub == "black") {
            bgcolor("black")
            textcolor("grey")
            termcolor("black")
            textboxcolor("rgb(10, 10, 10)")
        } else if (sub == "dollar") {
            bgcolor("#edae4f")
            textcolor("#edae4f")
            termcolor("#2a2a2a")
            textboxcolor("rgb(59, 59, 59)")
        } else if (sub == "white") {
            bgcolor("#FFFFFF")
            textcolor("#000000")
            termcolor("#FFFFFF")
            textboxcolor("#7F7F7F")
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
                .replace("theme-", 'Name: ')
                .replace(/␠/g, " "))
        }

    } else if (main == "load") {
        specifiedThemeName = args.replace(main, '').replace(' ', '').replace(/ /g, "␠")
        themeLoad = document.cookie
        themeLoadArray = themeLoad
            .split(";")
        themeLoadArrayFiltered = new Array()
        a = 0
        for (i = 0; i < themeLoadArray.length; i++) {
            if (themeLoadArray[i].includes(`theme-${specifiedThemeName}`)) {
                themeLoadArrayFiltered[a] = themeLoadArray[i]
                a++
            }
        }
        //set theme vars
        themeTextColor = themeLoadArrayFiltered[0].replace(`theme-${specifiedThemeName}-themeTextColor=`, "")
        themeTermColor = themeLoadArrayFiltered[1].replace(`theme-${specifiedThemeName}-themeTermColor=`, "")
        themeBgColor = themeLoadArrayFiltered[2].replace(`theme-${specifiedThemeName}-themeBgColor=`, "")
        themeTextBgColor = themeLoadArrayFiltered[3].replace(`theme-${specifiedThemeName}-themeTextBgColor=`, "")
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
        specifiedThemeName = args.replace(main, '').replace(' ', '').replace(/ /g, "␠")
        let themeTextColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${specifiedThemeName}-themeTextColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeTermColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${specifiedThemeName}-themeTermColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeBgColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${specifiedThemeName}-themeBgColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeTextBgColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${specifiedThemeName}-themeTextBgColor=`.split(" ").join(""))
            ).split('=')[1]

        // Do the deleting
        document.cookie = `theme-${specifiedThemeName}-themeTextColor=${themeTextColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
        document.cookie = `theme-${specifiedThemeName}-themeTermColor=${themeTermColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
        document.cookie = `theme-${specifiedThemeName}-themeBgColor=${themeBgColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
        document.cookie = `theme-${specifiedThemeName}-themeTextBgColor=${themeTextBgColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
    } else if (main == "export") {
        specifiedThemeName = args.replace(main, '').replace(' ', '').replace(/ /g, "␠")
        let themeTextColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${specifiedThemeName}-themeTextColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeTermColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${specifiedThemeName}-themeTermColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeBgColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${specifiedThemeName}-themeBgColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeTextBgColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${specifiedThemeName}-themeTextBgColor=`.split(" ").join(""))
            ).split('=')[1]
        var exportFile = new Blob([`themeName=${specifiedThemeName}
themeTextColor=${themeTextColor}
themeTermColor=${themeTermColor}
themeBgColor=${themeBgColor}
themeTextBgColor=${themeTextBgColor}`],
            { type: "text/plain;charset=utf-8" });
        saveAs(exportFile, `websh-theme-${args.replace(main, '').replace(' ', '')}.txt`)
    } else if (main == "import") {
        document.getElementById("fileInput").click()
    } else if (main == "help") {
        block_log(`theme - the websh theme tool
        <br><br> Subcommands:
        <br><br>  new - create a new theme
        <br>  load - load a saved theme
        <br>  import - import a downloaded theme
        <br>  export - download a saved theme
        <br>  set - load a built-in theme
        <br>  delete - delete a saved theme
        <br>  help - print this help
        <br><br>Built-in themes:
        <br><br>default - A nice blue-green combination
        <br>teal-dark - A dark theme with teal-blue coloring
        <br>black - Black, black, black. Grey text.
        <br>white - White with black text
        <br>dollar - A quite orange theme, taken from the screenshot on EmDev21/Dollar
        <br><br> Examples:
        <br><br>  \`theme set default\` - sets the default theme
        <br>  \`theme new\` - create a new theme
        <br>  \`theme load SeaGreen\` - loads a user-created theme called 'SeaGreen'
        <br>  \`theme delete SeaGreen\` - deletes a user-created theme called 'SeaGreen'
        <br>  \`theme export SeaGreen\` - exports a user-created theme called 'SeaGreen'
        <br>  \`theme import\` - import a downloaded theme`)
    } else {
        error("E: no argument specified, or bad argument!")
    }
}

function getImportedTheme() {
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
        if (sub != "") {
            window.open(`vscode://file${sub}`)
        } else {
            window.open("vscode://open")
        }
    } else if (main == "help") {
        block_log(`vscode, code, or vs - the Visual Studio Code helper
        <br><br> Subcommands:
        <br><br>  \`local\` - open VS Code locally on your computer. You can open local files too!
        <br>   Note: requires VS Code to be installed on your computer
        <br><br> Examples:
        <br><br>  \`vs Crilum/websh\` - open 'Crilum/websh' to edit.
        <br>  \`code local /home/\${USER}/awesome.js\` - opens '/home/\${USER}/awesome.js' VS Code on your computer.
        <br>  \`vscode local /C:/users/user/awesome.js:20:5\` - opens '/C:/users/user/awesome.js' at line 20, column 5 on your local VS Code.`)
    } else if (main != "") {
        window.open("https://vscode.dev/github/" + main)
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

wttr = weather
function weather(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    args = argsArray.toString().replace(/,/g, " ")
    if (main == "help") {
        block_log(`weather - Get the weather from <a href="https://wttr.in">wttr.in</a>
        <br><br>How to use:
        <br><br>wttr.in tries to get your location by IP, but you can specify what city you want to see the weather for by just typing the city name after the command: \`weather London\`.
        <br>To change the temp/windspeed format ([a] auto (default), [u] imperial, [m] metric, [M] imperial, but meters/s), you can set the format setting: \`weather format m\`.
        <br><br>Credit:
        <br><br>Thanks to Igor Chubin (@chubin on GitHub) for creating wttr.in!`)
    } else if (main == "format") {
        if (sub == "auto") {
            oldFmt = document.cookie
                .split('; ')
                .find(row => row.startsWith(`weatherFormat=`.split(" ").join(""))
                ).split('=')[1]
            document.cookie = `weatherFormat=${oldFmt}; Samesite=None; Secure; expires=Thu, 01 Jan 1970 00:00:00 GMT;`
        } else {
            document.cookie = `weatherFormat=${sub}; Samesite=None; Secure`
        }
    } else {
        current_block.innerHTML = "<p id='tmp_loading_msg'>Loading Weather...</p>";
        var format = ""
        if (document.cookie.includes("weatherFormat=")) {
            format = "?" + document.cookie
                .split('; ')
                .find(row => row.startsWith(`weatherFormat=`.split(" ").join(""))
                ).split('=')[1]
        }
        url = `https://wttr.in/${args}${format}`
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.debug(xhr.status);
                current_block.innerHTML = ""
                block_log(xhr.responseText
                    .replace(/<script>/g, "")
                    .replace(/Follow @igor_chubin/g, "")
                    .replace(/<\/script>/g, "")
                );

            }
        };

        xhr.send();
    }
}

function styleprompt() {
    main = argsArray[0]
    sub = argsArray[1]
    if (main == "new") {
        dialog = `<h5 class="textColor">Prompt Settings:<h5/>
        <br>
        <div id="dialogBoxInner">
            <h7 class="textColor">Name:<h7/><br>
            <input id="promptName" class="input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="off" autofocus><br>
            <h7 class="textColor">Prompt color:<h7/><br>
            <input id="promptColor" class="input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="off"><br>
            <select name="promptType" id="promptType">
                <option value="$">$</option>
                <option value=">">></option>
                <option value="#">#</option>
            </select>
            <button id="styleAddCancel" style="right: 55px;">Cancel</button>
            <button id="styleAddOk" style="right: 5px;">Save</button>
        </div>`
        document.getElementById("dialogContainer").innerHTML = dialog
        $('#dialogContainer').show()
        document.getElementById("styleAddOk").addEventListener('click', (e) => {
            var promptName = document.getElementById("promptName").value.replace(/ /g, "␠")
            var promptColor = document.getElementById("promptColor").value.replace(/ /g, "")
            //var themeTermColor = document.getElementById("themeTermColor").value.replace(/ /g, "")
            var promptType = document.getElementById("promptType").value
            document.cookie = `prompt-${promptName}-promptColor=${promptColor}; SameSite=None; Secure`
            document.cookie = `prompt-${promptName}-promptType=${promptType}; SameSite=None; Secure`
            $('#dialogContainer').hide()
        })
        document.getElementById("styleAddCancel").addEventListener('click', (e) => {
            document.getElementById("dialogContainer").innerHTML = ""
            $('#dialogContainer').hide()
        })
    } else {
        error(`E: no argument specified.. \`${command} help\` for args`)
    }
}

function share() {
    main = argsArray[0]
    sub = argsArray[1]
    if (main == "copy") {
        msg = `Check out websh, the web-powered shell emulator!
        ${(window.origin)}`
        navigator.clipboard.writeText(msg);
        block_log(`Copied "${msg}" to clipboard!`)
    } else if (main == "twitter") {
        window.open(`https://twitter.com/intent/tweet?text=Check%20out%20websh,%20the%20web-powered%20shell%20emulator!%20${(window.origin)}`)
    } else if (main == "email") {
        if (sub == undefined || sub == "") {
            email = "crilum@crilum.tk"
        } else {
            email = sub
        }
        window.open(`mailto:${email}?subject=A%20cool%20website&body=Check%20out%20websh,%20the%20web-powered%20shell%20emulator!%20${(window.origin)}`)
    } else if (main == "help") {
        block_log(`share - spread websh!
        <br><br>Subcommands:
        <br><br>\`help\` - print this help
        <br>\`copy\` - copy a message to share about websh
        <br>\`twitter\` - Share websh to twitter
        <br>\`email\` - Send an email about websh (using a mailto link)
        <br>\`reddit\` Share websh to reddit
        <br>\`facebook\`
        <br><br>Examples:
        <br><br>\`share copy\` - copy "Check out websh, the web-powered shell emulator! ${(window.origin)}"
        <br>\`share email example@example.com\` Share an email about websh to 'example@example.com'
        <br><br>Notes:
        <br><br>I haven't actually tested \`twitter\`, but I'm pretty sure it works.
        <br><br>It would be great to send a screenshot to whoever you're sharing websh with, wouldn't it?
        <br>Well, you can actually take a screenshot of the websh terminal by running \`sc\` (or \`screenshot\`)!`)
    } else if (main == "facebook") {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${(window.origin)}%2F&amp;src=sdkpreparse`)
    } else if (main == "reddit") {
        window.open(`http://www.reddit.com/submit?url=${(window.origin)}&title=Check%20out%20this%20cool%20website!`)
    } else {
        error(`E: no argument specified.. \`${command} help\` for args`)
    }
}

function star() {
    block_log("Star the repo!")
    window.open("https://girhub.com/Crilum/websh")
}

prtscn = screenshot
sc = screenshot
function screenshot() {
    main = argsArray[0]
    sub = argsArray[1]
    const v = new Date()
    if (main == "help") {
        block_log(`screenshot, prtscn, or sc - take a screenshot of the websh terminal
        <br><br>Subcommands:
        <br><br>\`help\` - print this help
        <br><br>Examples:
        <br><br>\`sc\` - take a screenshot
        <br><br>Notes:
        <br><br>The picture filename will be laid out in this order:
        <br>websh-screenshot_{Month}-{Day}-{Year}_{Hour}{Minute}{Millisecond}.png`)
    } else {
        const screenshotTarget = document.body;

        html2canvas(screenshotTarget).then((canvas) => {
            const base64image = canvas.toDataURL("image/png");
            saveAs(base64image, `websh-screenshot_${v.getMonth()}-${v.getDate()}-${v.getFullYear()}_${v.getHours()}${v.getMinutes()}${v.getMilliseconds()}`);
        });
    }
}

// Run params, if any
runParameters()
