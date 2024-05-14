import { defineConfig } from 'astro/config';
import Inspect from "vite-plugin-inspect"
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
        plugins: [
            Inspect(),
            //function extractTokens() {
            //    return 
            {
                generateBundle() {
                    //generateBundle(bundleOptions, bundle, isWrite) {
                    console.log("generate")
                    let ids = [];
                    for (const moduleId of this.getModuleIds()) {
                        if (!exclude(moduleId)) { ids.push(moduleId); }
                    }

                    let prefix = ""//getPrefix(ids);
                    let strip = str => str.substring(prefix.length);

                    let modules = [];
                    ids.forEach(id => {
                        let m = {
                            id: strip(id),
                            deps: this.getModuleInfo(id).importedIds.filter(x => !exclude(x)).map(strip)
                        }
                        if (exclude(m.id)) { return; }
                        modules.push(m);
                    });
                    console.log("modules", modules)
                }
            }
            //}()
            // 1. figure the hierarchy of components imported from pages
            // How ?
            // 2. extract tokens
            // @see https://i18next.github.io/i18next-scanner/
            // @see https://github.com/i18next/i18next-parser
            // @see https://github.com/gilbsgilbs/babel-plugin-i18next-extract
        ]
    }
});
