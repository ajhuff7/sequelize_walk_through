isAuthenticated.js is middleware that only allows registered users to continue to the member page. If the user isn't registered it redirects them to the landing page.

config.json holds the database owners login info to authenticate access. 

passport.js requires LocalStrategy and passport node modules to login with a password. It also requires the database to authenticate if user login input is valid.

index.js returns stored login and password from the database, builds a model for each file and exports the db files to other files.

user.js creates the user model, encrpys the password, and validates user from login page.

login.js handles the user login info and the event listener on the submit button. Validates that an email and password have been entered, clears the form on valid entry, or redirects user back to the login page. 

members.js updates the member info on the page after login.

signup.js handles the signup user info and the event listener on the submit button. Allows new user to input new email and password login info.

api-routes.js handles the posts for login authentication and sign up input to create a new user and the gets for retrieving user id/email.

html-routes.js routes users with accounts to their members page and redirects nonmembers to the sign up page.

server.js establishes the packages and ports and tracks the user login status.