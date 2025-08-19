import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addGlobalData("currentYear", new Date().getFullYear());

  eleventyConfig.addWatchTarget("./src/assets/");

  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy({
    "./src/assets/icons/favicon.ico": "favicon.ico",
  });

  eleventyConfig.addShortcode("time", function (dateStr, format = "medium") {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "Unknown";

    const formattedDate = Intl.DateTimeFormat("en-US", {
      dateStyle: format,
    }).format(date);

    const isoDate = date.toISOString();

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
