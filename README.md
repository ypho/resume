# Resume

![License](https://img.shields.io/github/license/ypho/resume)
![Code Size](https://img.shields.io/github/languages/code-size/ypho/resume)

My resume, built with TailwindCSS. Nothing too fancy.

## Requirements
- Node / NPM

## Development
All assets are in the `resources` directory. This is where you do your development.

### Updating assets (CSS/JS/IMG)
When you update asset files, they have to be compiled again. This can be done with:
> npm run dev

This compiles all files and places them in the `./dist` folder. To watch updated files and compile
them automatically, run:
> npn run watch

It is possible to run a local webserver to test your code. If you want to do this, use the following
command:
> npm run serve

## Deploy
When development is finished, run `npm run prod` to create the final, and minified files. All contents
of the `./dist` folder can be deployed to a production environment.

## Support
[![Coffee](https://img.shields.io/static/v1?label=Coffee&message=Buy%20me%20a%20coffee&color=FFDD00&logo=Buy%20me%20a%20coffee)](https://www.buymeacoffee.com/ypho)

## License
This project is licensed under the MIT license, except for the images. The images are copyrighted by their
respective owners, and the MIT license does not apply there. If you choose to use this code for yourself,
please make sure you replace the images with your own.
