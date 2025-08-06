import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("formatDate", function (date) {
    return Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
  });

  eleventyConfig.addGlobalData("currentYear", new Date().getFullYear());
  eleventyConfig.addWatchTarget("./src/assets/");

  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
