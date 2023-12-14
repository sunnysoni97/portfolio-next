# portfolio-next

Development repository for new personal portfolio

## Development/Production Environment

Supports switching between 2 basepaths depending on your prod/dev environment.
The basepaths can be configured in next.config.js for production/dev.

Requires a .env file in the root directory of this project to enable this switching. .env format :

<code>PROD_TEST=true</code> (for development/testing)

<code>PROD_TEST=false</code> (for production)
