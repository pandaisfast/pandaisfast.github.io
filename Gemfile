source "https://rubygems.org"

# Align Jekyll version with GitHub Pages
gem "jekyll", "3.9.3"

# Use github-pages to align other dependencies
gem "github-pages", group: :jekyll_plugins

# Other GitHub Pages plugins
group :jekyll_plugins do
  gem "jekyll-feed", "0.15.1"
  gem "jekyll-seo-tag", "2.8.0"
  gem "jekyll-gist", "1.5.0"
  gem "jekyll-sitemap", "1.4.0"
  gem "jekyll-include-cache", "0.2.1"
  # Add other plugins here as needed
end

# Windows-specific dependencies
gem "tzinfo-data"
gem "wdm", "~> 0.1.0" if Gem.win_platform?
