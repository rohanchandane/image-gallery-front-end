# Screen capture
!["Working of the Image Gallery"](Jun-11-2024-00-10-26.gif)

# image-gallery-front-end

Image gallery 

- Components
    - Button
        - Label as arg
        - onClick as arg
        - Type as arg
    - Text
        - Text as arg
        - Type as arg
            - font
            - color
    - Image
        - image url as an arg
        - properties
            - size
            - style
    - Image gallery
        - image components as listText

- Scrolling pagination
    - State
        - List of items eg `[{ name, url }]`
    - List component
        - list of items as arg - from state
    - Next button
        - onClick as arg
        

# React + TypeScript + Vite
This Project is build with Vite

There is backend dependancy for this project [image-gallery-node-server](https://github.com/rohanchandane/image-gallery-node-server), run this backend first.

To run the project
- `npm install`
- `npm run dev`