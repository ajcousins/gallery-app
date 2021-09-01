# Gallery App

This project was built as a way to help a friend sell their artwork online. The application is loosely modelled on Instagram, organising images into collections, where each collection has a ‘front/ title’ image which displays in a grid forming their overall portfolio.

All images and collections can be viewed by all anonymous users at the ‘front of house’ site. Images and collections can be created, updated and deleted through the dashboard, which requires email and password authentication to access.

Google’s Firebase was leveraged for its authentication, Firestore database and Storage to securely save images. React and React-Router were used on the front-end, with Redux used to manage global state.

This project is still a work in progress. Next steps include adding a functioning basket, checkout and secure payment capabilities using either PayPal or Stripe.
