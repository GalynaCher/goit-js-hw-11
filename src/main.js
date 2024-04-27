//  Main import of iziToast
import iziToast from "izitoast";
// Additional import of iziToast style
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from "./js/pixabay-api.js";
import { renderImagesByPages } from "./js/render-functions.js";

// strict mode
'use strict'

const searchFld = document.querySelector(".search-block-field");
const searchBtn = document.querySelector(".search-block-button"); 
const loader = document.querySelector(".loader");
let gallery = document.querySelector("ul.gallery-ul");

let searchCriteria = '';

searchFld.addEventListener("input", () => { 
    searchCriteria = searchFld.value;
});

searchBtn.addEventListener("click", () => { 
    // Display loader
    loader.style.display = 'block';
    // Search field cannot be empty
    if (searchCriteria.trim()) {
        // Clear the gallery
        gallery.innerHTML = "";
        fetchImages(searchCriteria)
            .then(response => { 
                // Clear Search field           
                searchFld.value = '';
                // Return JSON object
                return response.json();
            })
            .then(data => {
                // Check if the total number of items is 0
                if (data.total === 0) {
                    iziToast.error({
                        title: 'Error',
                        message: 'Sorry, there are no images matching your search query. Please try again!'
                    });
                    // Hide loader
                    loader.style.display = 'none';
                    searchCriteria = '';
                    return;
                } else { 
                    // Return data.hits;
                    renderImagesByPages(data.hits.flat());
                    // Hide loader
                    loader.style.display = 'none';
                    searchCriteria = '';                   
                };
            })          
            .catch(error => console.error(error));
    } else { 
        iziToast.error({
            title: 'Error',
            message: 'Search field cannot be empty'
        });
        // Clear gallery content to avoid mixing query results
        gallery.innerHTML = "";
        // Hide loader
        loader.style.display = 'none';
        return;
    }
});



