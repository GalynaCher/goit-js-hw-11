// strict mode
'use strict'

export function fetchImages(searchCriteria, pageNum) {
 
    const searchParams = new URLSearchParams({
        key: "43557588-360f3c0dbe3221038cf66573a",
        q: searchCriteria,
        page: pageNum,
        image_type: "photo",
        orientation: "horizontal", 
        safesearch: true 
    });
    
    const url = `https://pixabay.com/api/?${searchParams}`;

    return fetch(url);
 };