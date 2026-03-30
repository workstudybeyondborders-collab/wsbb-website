module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("robots.txt");

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/blog/*.md");
  });

  eleventyConfig.addCollection("programs", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/programs/*.md");
  });

  // Date filter for sitemap.njk
  eleventyConfig.addFilter("date", function(value, format = "yyyy-MM-dd") {
    if (!value) return "";
    const d = new Date(value);
    return d.toISOString().slice(0, 10);
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};
