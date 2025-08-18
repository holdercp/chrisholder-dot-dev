import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addGlobalData("currentYear", new Date().getFullYear());

  eleventyConfig.addWatchTarget("./src/assets/");

  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy({
    "./src/assets/icons/favicon.ico": "favicon.ico",
  });

  eleventyConfig.addShortcode("time", function (date, format = "medium") {
    const formattedDate = Intl.DateTimeFormat("en-US", {
      dateStyle: format,
    }).format(new Date(date));

    const isoDate = new Date(date).toISOString();

    return `<time datetime="${isoDate}">${formattedDate}</time>`;
  });

  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
