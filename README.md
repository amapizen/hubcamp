# Hubcamp-site


## Technology Stack
FrontEnd Stack is built with preprocessor: HTML, CSS (Sass) and JS.

** Prerequisites

* `Configure editorconfig` (<http://editorconfig.org/>) in your editor to keep same code style format than in project.


## Setup Instructions OSX and Windows

** For Windows I recommend use 64-bit version and Cmder console (<https://cmder.net/>) .

1. Use VS Code (<https://code.visualstudio.com/>) as editor but can use your favorite editor.

** For OSX 

2. Install Xcode from App Store. Restart Xcode.

    `Check if Xcode is installed.`

```sh
$ xcode-select -p
```

3. Install Xcode Command Line Tools. Restart Xcode.

```sh
$ xcode-select --install
```

4. Install Homebrew (<https://brew.sh/index.html/>).

5. Install Git.

    `Install Git via Homebrew`

6. Install NodeJS via NPM (Node Version Manager <https://github.com/creationix/nvm/>).

```sh
$ touch ~/.bash_profile
```

```sh
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
```

* Open your `.bash_profile` and add the following line of code: `source ~/.bashrc`

  `If you can´t, install Node via Homebrew`

7. Install Ruby and Sass.

    `Install Ruby via Homebrew`

    `Install Sass using Ruby console`


** For Windows

2. Install .Net Framework 3.5, restart Windows.
3. Install Chocolatey (<https://chocolatey.org/>).
4. Install Git.

    `Install Git via Chocolatey`

5. Install Git.

    `Install Git via Chocolatey`

6. Install NodeJS.

    `Install Node via Chocolatey`

7. Install Ruby and Sass.

    `Install Ruby via Chocolatey`

    `Install Sass using Ruby console`


** For OSX or Windows

8. Install Lite-Server.

```sh
npm install lite-server -g
```

9. Install Gulp.
```sh
npm install gulp-cli -g
```

10. Install Angular-ClI.
```sh
npm install npm install -g @angular/cli
```

## Running project

* Clone Git project
* Open project folder in your editor
* Install local dependencies

```sh
$ npm install
```

* `lite-server`             - Start server in html folder.

* `gulp watch`              - Compile sass files.


## Project Strucuture

* `html`                    - Folder that contains final solution.
* `scss`                    - Folder that contains styles in Sass.

## Happy Coding with Visual Studio Code!
