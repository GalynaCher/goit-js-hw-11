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
let pageNum;

searchFld.addEventListener("input", () => { 
    searchCriteria = searchFld.value;
});

searchBtn.addEventListener("click", () => { 
    // Search field cannot be empty
    if (searchCriteria.trim()) {
        gallery.innerHTML = "";
        fetchImages(searchCriteria)
            .then(response => { 
                // Clear Search field           
                searchFld.value = '';
                // Parse the JSON response
                return response.json();
            })
            .then(data => {
                // Check if the total number of items is 0
                if (data.total === 0) { 
                    iziToast.error({
                        title: 'Error',
                        message: 'Sorry, there are no images matching your search query. Please try again!'
                    });
                    
                    searchCriteria = '';
                    return;
                };
                loader.style.display = 'block';
                const totalImages = data.total;
                // Don't know yet how to process a large number of pages (next module),
                // so I limited the number of pages to 5
                // const totalPages = Math.ceil(totalImages / 20);
                const totalPages = 5;
                const promises = [];

                for (pageNum = 1; pageNum <= totalPages; pageNum++) { 

                    promises.push(fetchImages(searchCriteria, pageNum)
                        .then(response => response.json())
                        .then(data => {
                            return data.hits;
                        }))
                };

                Promise.all(promises)
                    .then(results => {
                        // console.log("results.flat", results.flat());
                        renderImagesByPages(results.flat());
                        loader.style.display = 'none';
                        searchCriteria = '';
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.error(error));
    } else { 
        iziToast.error({
            title: 'Error',
            message: 'Search field cannot be empty'
        });
        gallery.innerHTML = "";
        return;
    }
});


