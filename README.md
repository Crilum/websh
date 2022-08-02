# websh

The web powered shell emulator

![websh gif](pics/websh-showoff.gif)

## Features
- 10 **Search Engines** supported:
  - [Google](https://google.com) (search, jump to site, or open google tools. See `g help` for more info)
  - [DuckDuckGo](https://duckduckgo.com) (search, or jump to site)
  - [GitHub](https://github.com) (search, or jump to site)
  - [Wikipedia](https://wikipedia.org) (search, or jump to site)
  - [Reddit](https://reddit.com) (search, jump to site, or open specified subreddit)
  - [Thingiverse](https://thingiverse.com) (search, or jump to site)
  - [Amazon](https://amazon.com) (search, or jump to site)
  - [ChurchofJesusChrist.org](https://churchofjesuschrist.org) (search, jump to site, or open specified book/chapter of the Book of Mormon)
  - [StackOverflow](https://stackoverflow.com) (search, or jump to site)
  - [StackExchange](https://stackexchange.com) (search, or jump to site)
- Make your own **custom themes**!
  - import themes
  - export themes
  - all your themes are **saved as cookies**, so you don't have to be importing/exporting all the time!
- Make and manage **bookmarks**[^1] with the built-in bookmark tool!
- Type commands before you **even load the page** with parameters![^2]
- Open the VS Code [web editor](https://vscode.dev), *or* open VS Code **locally on your computer**![^3]
- Open snaps **locally** in the **Snap Store**![^4]
## Usage
```
$ help

websh: the modern webshell emulator

websh tools:

`echo` - print specified text
`clock` - print time
`clr`, or `clear` - clear the terminal
`rel`, or `reload` - reload the page
`link` - open the specified full URL, i.e. 'https://github.com'
`bk`, `bookmark` - Create, manage, and use websh bookmarks. `bookmark help` for more info.
`theme` - set terminal theme. `theme help` for more info.
`wttr`, `weather` - get the weather, powered by wttr.in
`vscode`, `code`, or `vs` - Use VS Code in your browser, or on your computer.
`snap` - open snaps in the Snap Store

Search engines/web tools:

`g`, or `google` - go to https://google.com, search for ARGS, or use a number of Google services. `g help` for more info
`s`, `search`, `d`, `ddg`, or `duckduckgo` - go to https://duckduckgo.com, or search for ARGS
`w`, or `wikipedia` - go to https://wikipedia.org, or search for ARGS
`gh`, or `github` - go to https://github.com, or search for ARGS
`a`, or `amazon` - go to https://amazon.com, or search for ARGS
`r`, or `reddit` - go to https://reddit.com, open ARGS subreddit, or search for ARGS. see `r help` for more info
`t`, or `thingiverse` - go to https://thingiverse.com, or search for ARGS
`lds`, or `churchofjesuschrist` - go to https://churchofjesuschrist.org, open ARGS book/chapter of the Book of Mormon, or search for ARGS. see `lds help` for more info
`usps` - search for ARGS, track ARGS. see `usps help` for more info
`ups` - search for ARGS, track ARGS. see `ups help` for more info
`so`, `stackoverflow` - go to https://stackoverflow.com, or search for ARGS
`se`, `stackexchange` - go to https://stackexchange.com, or search for ARGS. Search includes sites like askubuntu.com, superuser.com, apple.stackexchange.com, and many other sites. to see full list, go to https://stackexchange.com/sites

Settings:

`textcolor` - set the terminal text color
`bgcolor` - Set the background color
`termcolor` - Set the Terminal color
`textboxcolor` - set the color of text boxes
`clrpms` - clear URL parameters
`clrhist` - clear history

Note: for color setting use CSS Colors, HEX Codes, or rgb() Colors.

Using websh with URL parameters:

You can use URL parameters to run commands while the page is loading, e.g. `https://websh.crilum.tk/?command=echo Hey, this command was run via URL!&command=time`
Basically, write `?command=yourCommand` after the URL (https://websh.crilum.tk/), and use `&command=yourCommand` after the first command, and thereafter.
There isn't a maximum number of commands you can specify (until you hit the browser URL size limit of course), but it's best to keep the number of chars in your URL below 2000.
```
This `help` is probably out of date. To get the newest `help`, [click here](https://websh.crilum.tk/?command=help).

### Credits
- Big thanks to [@EmDev21](https://github.com/EmDev21) for creating the [original web terminal](https://github.com/EmDev21/Dollar) that this project is based off of!
- Thanks to [@OrlatoDev](https://github.com/OrlatoDev) for letting me use their color setting code!
- Thanks to Freepik on flaticon for the icon.

If you find any problems please [create a new issue](https://github.com/Crilum/websh/issues/new/choose).

[^1]: websh Bookmarks (stored as cookies), not browser bookmarks
[^2]: You can use URL parameters to run commands while the page is loading, e.g. [`https://websh.crilum.tk/?command=echo Hey, this command was run via URL!&command=time`](https://websh.crilum.tk/?command=echo%20Hey,%20this%20command%20was%20run%20via%20URL!&command=time)
[^3]: Requires user to have [VS Code](https://code.visualstudio.com) installed locally on their computer
[^4]: Requires user to be running a Linux system with snapd (as well as the Snap Store) installed. 
