import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from './logo.png';


const useSetLogo = () => {

    const location = useLocation().pathname;

    useEffect(() => {
        // Create a new link element to represent the favicon
        const headIcon = document.createElement('link');

        // Select all existing link elements in the head with rel="icon"
        const removeOldestLogo = document.querySelectorAll('head link[rel="icon"]');

        // Remove all existing favicon link elements
        removeOldestLogo.forEach((item) => item.remove());

        // Set the rel and href attributes of the newly created link element
        headIcon.setAttribute('rel', 'icon');
        headIcon.setAttribute('href', logo);

        // Append the new link element to the head of the document
        document.head.appendChild(headIcon);

    }, [location]);

}


const useAppHooks = () => {
    return { useSetLogo };
}

export {
    useAppHooks
}