# Cordova Android 11 File Issues

Android 11 has brought some confusion to the Cordova community when it comes to handling files,
as is clear from this [Github issue](https://github.com/apache/cordova-plugin-file/issues/426)
and those related to it. This example app serves as a guide for how to set up a Cordova project
that can download a remotely-hosted image and display it in the webview. In the process, hopefully
a lot of the confusion around using files on Android 11 Cordova apps is cleared up.

Please star the repo if this is helpful and consider contributing in order to cover other scenarios.

## Usage

This is a simple app started using the Ionic 6 / Angular 13 blank starter (`ionic start ...`) so the
normal [Ionic protocols](https://ionicframework.com/docs/) apply.

### TL;DR

- Use Node 14+

- Have a working Android Studio installed with the API level 30 SDK installed (to minimise errors, remove all other SDKs)

- `npm i -g cordova @ionic/cli cordova-res`

- `git clone <this repo>`

- `npm i`

- `ionic cordova platform add android`

- `ionic cordova build android`

- Run on emulator or device (e.g. `cordova run androdi --device`)

## Plugins

For requests I use [Cordova Advanced HTTP](https://github.com/silkimen/cordova-plugin-advanced-http)
and for filesystem interactoin I use [Cordova Plugin File](https://github.com/apache/cordova-plugin-file).
Some users have tried [cordova-plugin-file-transfer](https://github.com/apache/cordova-plugin-file-transfer)
and even though there is a semblance of activity on the repo, it was sunsetted (read: deprecated) [five
years ago](https://cordova.apache.org/blog/2017/10/18/from-filetransfer-to-xhr2.html) so I can't
recommend its use.

Further to those, [Cordova Plugin AndroidX Adapter](https://github.com/dpa99c/cordova-plugin-androidx-adapter)
is required because the file-related plugins have not yet (and will probably never be) updated to use AndroidX.
And I needed [Ionic Web View for Cordova](https://github.com/ionic-team/cordova-plugin-ionic-webview)
to get the WebViewAssetLoader to work. I'm sure it's not necessary but I kept getting 404s when trying to
access saved files from the webview before using it.

## Contributions

If you've found this helpful, won't you be a star and star the project?

I welcome any comments or suggestions. It would be great if this app could be expanded to cover more use-cases
and edge-cases of interacting with files on Android 11+ Cordova apps. The Cordova community is shrinking apace
so any help will be appreciated by many. Blog posts are great but example apps are arguably better (and quicker).
