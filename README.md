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

**How to run project: java -jar ttech-go.jar**

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