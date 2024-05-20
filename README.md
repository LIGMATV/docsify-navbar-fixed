# Docsify Navbar Fixed [Preview](https://docsify-navbar-fixed.vercel.app/)

> A new always on top customizable and pretty navigation bar for your docs.

| ![Screenshot Capture - 2024-05-20 - 16-35-42](https://github.com/LIGMATV/docsify-navbar-fixed/assets/143163098/a1123575-832e-49b1-8a26-c1c86b7b8a69) |
|:---:|
| Example, try it [here](https://docsify-navbar-fixed.vercel.app/) |


## Installation

```index.html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/LIGMATV/docsify-navbar-fixed/navbar-fixed.css">
```

> [!NOTE]
> Just to be safe, please use your downloaded version.
> You can download the navbar-fixed.css <a href="https://cdn.jsdelivr.net/gh/LIGMATV/docsify-navbar-fixed/navbar-fixed.css">here</a>.

Every ⭐ star is expensive. If you can star this repository, you absolutely rich!

## Configuration
You can configure your navbar preferences in ``_navbar.md`` file. [**Example**](https://raw.githubusercontent.com/LIGMATV/docsify-navbar-fixed/main/docs/_navbar.md)

> [!IMPORTANT]
> You need to add ``loadNavbar: true`` to your index.html script, so the navbar will work. [Learn more](https://docsify.js.org/#/configuration?id=loadnavbar)

### Logo

```_navbar.md
<!-- Logo -->
[![](https://docsify.js.org/_media/icon.svg)](/)
```

[![](https://docsify.js.org/_media/icon.svg)](/)

> [!IMPORTANT]
> The Logo code must in the first line.

### Title
```_navbar.md
<!-- Title -->
docsify
```

docsify

> [!IMPORTANT]
> The Title code must be below the logo code or in the line after the logo code.

### Badge  
  [GitHub Corner](https://docsify.js.org/#/configuration?id=repo) was not supported on docsify-navbar-fixed. So you can use [Shields.io](https://shields.io/) badge inside.  
  Example :
  ```_navbar.md
  [![GitHub Repo stars](https://img.shields.io/github/stars/docsifyjs/docsify ':class=badge')](https://github.com/docsifyjs/docsify/)
  ```
  [![GitHub Repo stars](https://img.shields.io/github/stars/docsifyjs/docsify ':class=badge')](https://github.com/docsifyjs/docsify/)  

> [!IMPORTANT]
> Do not forget to add ``':class=badge'`` inside the image code.

### Color  
  ``#42b983``  
  The navbar color is the same like in your ``themeColor`` configuration.
  [Learn more](https://docsify.js.org/#/configuration?id=themecolor)

usually, you done!
