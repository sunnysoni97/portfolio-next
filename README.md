# Portfolio-Next

An interactive web portfolio designed using NextJS (React) with Mantine UI and tailwind-css.

## Portfolio Sections

- **Home** : A short introduction with an overview of other sections.
- **About Me** : Contain subsections including : Education, WorkEx, Tech Knowledge, Research Interests and Hobbies.
- **Milestones** : An interactive page with a timeline based overview and an interactive carousel with image magnification modal.
- **Projects** : Space for displaying your projects with links, screenshots and a spotlight carousel.
- **Contact** : Contains information to connect to the owner of the portfolio.

## Setting up the Project

You can use Node Package Manager (npm) in the root directory of the project to setup your project. To do that, run : `npm install`.

## Posts Handling

Most of the sections in the portfolio use JSON data files to populate the elements with data. The JSON files are stored in `_posts` directory inside the app pages.

To edit the contents of these json, a python script in `src/python/manage_json.py` has been provided. The environment to use this script can be setup with the `python-env.yaml` using conda.

## Switching between Dev/Prod Environment

This project supports switching between 2 basepaths depending on your prod/dev environment.

- The basepaths can be configured in `next.config.js` for production/dev.

- Requires a `.env` file in the root directory of this project to enable this switching. An example format has been provided in `EXAMPLEDOTAENV`. Explanation :

  - `PROD_TEST=true` (for development/testing)
  - `PROD_TEST=false` (for production)
