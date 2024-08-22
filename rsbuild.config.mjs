import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";

const STATIC_FILES_JS = ["jquery.min.js", "bootstrap.min.js", "popper.min.js"];
const SCRIPT_TAGS = STATIC_FILES_JS.map((file) => ({
    tag: "script",
    attrs: { src: file },
    head: true,
    append: true,
    publicPath: true,
    defer: true,
}));

export default defineConfig({
    plugins: [pluginReact(), pluginSass()],
    tools: {
        rspack: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        resolve: {
                            fullySpecified: false,
                        },
                    },
                ],
            },
        },
    },
    html: {
        title: "Covid 19 Tracker",
        tags: [
            {
                tag: "link",
                attrs: { rel: "stylesheet", href: "bootstrap.min.css" },
                head: true,
                append: true,
                publicPath: true,
            },
            ...SCRIPT_TAGS,
        ],
    },
});
