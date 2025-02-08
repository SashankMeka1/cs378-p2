import React from 'react';
import '../App.css'
// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, imageName, price}) => {
    console.log('/images/'+{imageName})
    return (
        <div>
            <img class = "menu-item-img" src={'/images/'+imageName} alt={title} />
            <div class="menu-item">
                <h3>{title}</h3>
                <p>{description}</p>
                <span class="price">{price}</span>
                <button class="button">Add</button>
            </div>
        </div>

    );
};

export default MenuItem;
