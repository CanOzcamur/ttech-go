# TtechGo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Functionality overview

It uses a custom API for all requests, including authentication.

**General functionality:**

- Search users
- Package display and selection 
- Adding packages to the cart
- Shopping cart display
- Shopping cart transaction (package delete or package confirm)
- Total price display
- Display transaction result

**How to compile project: ng build**

Generated resources are on the dist folder, then move these resources to Backends resources/static folder.

**How to run project: ng serve**

Api's and url will not work because of Browsers Cross Origin Problem, backend runs on 8080 port, angular runs on 4200 port.

**The general page breakdown looks like this:**

- Home page (URL: /user )
    - Search of user 
- Display package (URL: /package )
    - Display packages in package page
    - User can add product to cart.
- Add package to cart (URL: /package )
- Display cart (URL: /checkout )
- Shopping cart transaction (URL: /checkout )
    - User can delete to cart.
    - User can confirm the cart
- Display transaction result
    - User can display transaction result