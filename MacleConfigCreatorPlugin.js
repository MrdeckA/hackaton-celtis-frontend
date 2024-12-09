const {RawSource} = require('webpack-sources');

const pluginName = 'macle-config-creator'

class MacleConfigCreatorPlugin {
    entryPagePath;

    constructor(entryPagePath) {
        this.entryPagePath = entryPagePath;
    }

    apply(compiler) {
        console.log('macle-config-creator-plugin start');
        compiler.hooks.emit.tap(pluginName, (compilation) => {
            let assets = compilation.assets;
            let fileList = [];
            let pageConfig = {};
            for (let fn in assets) {
                if (fn.endsWith(".html")) {
                    fileList.push(fn);
                    pageConfig[fn] = {
                        window: {
                            usingComponents: {}
                        }
                    }
                }
            }

            let appConfig = {
                pages: fileList,
                style: "v2",
                sitemapLocation: "sitemap.json",
                entryPagePath: this.entryPagePath,
                page: pageConfig,
                global: {
                    window: {
                        backgroundTextStyle: "light",
                        navigationBarBackgroundColor: "#fff",
                        navigationBarTitleText: "Macle",
                        navigationBarTextStyle: "black",
	                    navigationStyle: "custom",
                        capsuleTheme: "light"
                    }
                },
                type: "legacy",
                xmmp: "true"
            }
            assets["app-config.json"] = new RawSource(JSON.stringify(appConfig));
            console.log("app-config created!");
        });
    }
}

module.exports = MacleConfigCreatorPlugin;
