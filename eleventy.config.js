const fs = require("fs")
const sass = require("sass")
const path = require("path")

const Image = require("@11ty/eleventy-img")
const VitePlugin = require("@11ty/eleventy-plugin-vite");

async function imageShortcode(src, alt, sizes) {
    const imagePath = src.startsWith('/') ? src : path.join(path.dirname(this.page.inputPath), src)

    let metadata = await Image(imagePath, {
        outputDir: "dist/img/",
        widths: [800],
        formats: ["webp"]
    })

    let imageAttributes = {
        alt,
        sizes,
        class: "w-full rounded-lg shadow-lg",
        loading: "lazy",
        decoding: "async",
    }

    return Image.generateHTML(metadata, imageAttributes, {
        whitespaceMode: "inline"
    })
}

function isYearDir(dirName) {
  return /^\d{4}$/.test(dirName);
}

function isOptionDir(dirName) {
  return /^[a-z0-9]+$/.test(dirName);
}

module.exports = function(eleventyConfig) {
    const baseDir = "public/assets";
    const potentialYears = fs.readdirSync(baseDir);

    potentialYears.forEach(year => {
      if (isYearDir(year)) {
        const yearPath = path.join(baseDir, year);
        const potentialOption = fs.readdirSync(yearPath);

        potentialOption.forEach(option => {
          if (isOptionDir(option)) {
            const collectionName = `${year}_${option}`;
            const imagesPath = path.join(yearPath, option);
            const imageFiles = fs.readdirSync(imagesPath).filter(fileName => {
              return fs.statSync(path.join(imagesPath, fileName)).isFile() && path.extname(fileName).toLowerCase() === ".png";
            });

            eleventyConfig.addCollection(collectionName, function(collectionApi) {
              return imageFiles.map(fileName => ({
                url: path.join(imagesPath.replace("public", ""), fileName),
                name: fileName.replace(".png", "")
              })).sort();
            });
          }
        });
      }
    });

    eleventyConfig.addPlugin(VitePlugin, {
        // Any plugin options can go here
    });

    // Pass-through files
    eleventyConfig.addPassthroughCopy("public");
    eleventyConfig.addPassthroughCopy("styles");
    eleventyConfig.addPassthroughCopy("assets");
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
