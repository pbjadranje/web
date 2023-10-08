const path = require("path")

const Image = require("@11ty/eleventy-img")
const VitePlugin = require("@11ty/eleventy-plugin-vite");


async function imageShortcode(src, alt, sizes) {
    // If src is a relative path, resolve it relative to the current page.
    const imagePath = src.startsWith('./') ? path.join(path.dirname(this.page.inputPath), src) : src

    let metadata = await Image(imagePath, {
        outputDir: "dist/img/",
        widths: [800],
        formats: ["webp"]
    })

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    }

    return Image.generateHTML(metadata, imageAttributes, {
        whitespaceMode: "inline"
    })
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(VitePlugin, {
        // Any plugin options can go here
    });

    // Pass-through files
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("styles");
    eleventyConfig.addPassthroughCopy("code");

    eleventyConfig.addAsyncShortcode("image", imageShortcode)


    return {
        dir: {
            input: "src",
            output: "dist"
        },

        htmlTemplateEngine: 'liquid',
        markdownTemplateEngine: 'liquid',
    }
}
