"use client"
// import {useEffect, useState} from 'react'

function Page() {
    // useEffect(()=>{
        // let isLocalStorageLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        // let iCount = 0;

        // document.addEventListener('DOMContentLoaded', () => {
        //     console.log("1. DOMContentLoaded");
        //     window.addEventListener('message', readJwtToken);
        //     updateStatusDisplay();
        // });

        // const refreshIframe = () => {
        //     iCount++;
        //     const now = new Date();
        //     const formattedTime = now.toLocaleTimeString();
        //     //const HistoryList = document.getElementById("HistoryList");
        //     //HistoryList.appendChild(document.createElement("li")).textContent =
        //     console.log(
        //         `-----------------------------------------------------------${iCount}.Refresh - refreshIframe at ${formattedTime}-----------------------------------------------------------`
        //     );
        //     const iframe = document.getElementById('tokenIframe');
        //     checkBrowserHealth();
        //     if (iframe) {
        //         iframe.src = iframe.src;
        //     } else {
        //         console.error('Iframe with ID "tokenIframe" not found.');
        //     }
        //     if (iCount == 1) {
        //         console.log('init');
        //     }
        // }

        // const checkLoginStatus = (token) => {
        //     console.log("2. checkLoginStatus");
        //     const newLoginState = token && token !== 'undefined' && 
        //     typeof token !== 'undefined' && token !== 'jwt_token:undefined' && token.trim() !== '';
        //     console.log(
        //         `    -------- isLocalStorageLoggedIn: ${localStorage.getItem('isLoggedIn')} && newLoginState: ${newLoginState}`
        //     );
        //     console.log(token || 'No token');
        //     if (newLoginState !== isLocalStorageLoggedIn) {
        //         if (newLoginState) {
        //             if (token) {
        //                 triggerLogin(token);
        //             }
        //         } else {
        //             triggerLogout();
        //         }
        //     }
        // }

        // const updateStatusDisplay = () => {
        //     console.log("3. updateStatusDisplay");
        //     console.log(isLocalStorageLoggedIn ? 'Logged In' : 'Logged Out');
        //     //isLocalStorageLoggedIn ? updateLoginStatus('login') : updateLoginStatus('logout')
        // }

        // const readJwtToken = event => {
        //     console.log("4. readJwtToken");
        //     console.log('event.origin', event.origin);
        //     if (event.origin === 'https://myaccount.arabhardware.com') {
        //         console.log(event.data);
        //         checkLoginStatus(event.data);
        //     }
        // }

        // function getLoginStatus() {
        //     return document.getElementById('login_status').value;
        // }

        // const triggerLogin = (jwt_token) => {
        //     try {
        //         const now = new Date();
        //         const formattedTime = now.toLocaleTimeString();
        //         localStorage.setItem('isLoggedIn', 'true');
        //         localStorage.setItem('loggedInDateTime', now);
        //         const jwtToken = jwt_token.replace('jwt_token:', '');
        //         const domains = ['.arabhardware.com', '.arabhardware.net']
        //         const net2Domain = 'arabhardware.net';
        //         domains.forEach(_=>{
        //             setCookie('jwt_token', jwtToken, 3600, _, false, 'None');
        //             setCookie('jwt_token', jwtToken, 3600, _, true, 'None');
        //             deleteCookie('jwt_logout', _);
        //         })
        //         deleteCookie('jwt_logout');
        //         deleteCookie('jwt_logout', net2Domain);
        //         isLocalStorageLoggedIn = true;
        //         console.log(`------------------> Login -> at ${formattedTime} & inject new jwt_token ->  ${jwt_token}`);
        //         console.log("Login successful, localStorage updated");
        //         updateStatusDisplay();
        //         //updateLoginStatus('login');
        //         openModal()
        //     } catch (error) {
        //         console.error("Error during login:", error);
        //     }
        // };

        // const triggerLogout = () => {
        //     try {
        //         const now = new Date();
        //         const formattedTime = now.toLocaleTimeString();
        //         localStorage.setItem('isLoggedIn', 'false');
        //         localStorage.setItem('loggedInDateTime', '');
        //         const domains = ['.arabhardware.com', '.arabhardware.net']
        //         domains.forEach(_=>{
        //             deleteCookie('jwt_token', _);
        //             setCookie('jwt_logout', 'jwtToken', 3600, _, false, 'None');
        //         })
        //         deleteCookie('jwt_token');
        //         setCookie('jwt_logout', 'jwtToken', 3600, 'arabhardware.com', false, 'None');
        //         setCookie('jwt_logout', 'jwtToken', 3600, 'arabhardware.net', false, 'None');
        //         isLocalStorageLoggedIn = false;
        //         console.log(`------------------> Logout -> at ${formattedTime}`);
        //         console.log("Logout successful, localStorage updated");
        //         updateStatusDisplay();
        //         //updateLoginStatus('logout');
        //         openModal()
        //     } catch (error) {
        //         console.error("Error during logout:", error);
        //     }
        // };

        // const checkBrowserHealth = () => {
        //     let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        //     console.log("BrowserHealth start - ");
        //     if (isLoggedIn && getLoginStatus() == 'logout' || !isLoggedIn && getLoginStatus() == 'login') {
        //         if (!isLoggedIn && getLoginStatus() == 'login') {
        //             const domains = ['.arabhardware.com', '.arabhardware.net']
        //             domains.forEach(_=>{
        //                 setCookie('jwt_logout', 'jwtToken', 3600, _, false, 'None');
        //                 setCookie('jwt_logout', 'jwtToken', 3600, _, true, 'None');
        //             })
        //         }
        //         console.log('BrowserHealth - error_status, You have to refresh');
        //         openModal()
        //     }
        //     console.log('BrowserHealth - end');
        // }
        

        // const deleteCookie = (name, domain) => {
        //     const cookiePath = '/'; // Ensure you match the path used when setting the cookie
        //     const cookieDomain = domain ? domain : window.location.hostname;

        //     if (document.cookie.split(';').some((item) => item.trim().startsWith(name + '='))) {
        //         document.cookie =
        //             `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${cookiePath}; domain=${cookieDomain};`;
        //         console.log('Cookie removed:', name);
        //     } else {
        //         console.log('Cookie not found:', name);
        //     }
        // };

        // const getCookie = (name) => {
        //     const value = `; ${document.cookie}`;
        //     const parts = value.split(`; ${name}=`);
        //     if (parts.length === 2) return parts.pop().split(';').shift();
        // };

        // const setCookie = (name, value, maxAge, domain, secure, sameSite) => {
        //     let cookieString = `${name}=${value}; max-age=${maxAge}; domain=${domain}; SameSite=${sameSite}`;
        //     if (secure) {
        //         cookieString += '; secure';
        //     }
        //     document.cookie = cookieString;
        // };

        // if (iCount == 0) {
        //     setTimeout(refreshIframe, 1000);
        // }
        // if (iCount == 1) {
        //     checkBrowserHealth(true);
        // }
        // setInterval(refreshIframe, 10000);

        // // const updateLoginStatus = (newValue) => {
        // //     const inputElement = document.getElementById('login_status');
        // //     if (inputElement) {
        // //         inputElement.value = newValue;
        // //         console.log(`Login status updated to: ${newValue}`);
        // //     } else {
        // //         console.error('Input element with ID "login_status" not found.');
        // //     }
        // // }

        // /* function setCookie(name, value, days) {
        //     let expires = "";
        //     if (days) {
        //         let date = new Date();
        //         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        //         expires = "; expires=" + date.toUTCString();
        //     }
        //     document.cookie = name + "=" + (value || "") + expires + "; path=/";
        // }

        // function getCookie(name) {
        //     let cookieArray = document.cookie.split(';'); // Split the cookie string into an array
        //     let cookieName = name + "="; // Create the key we're looking for
        //     for (let i = 0; i < cookieArray.length; i++) {
        //         let cookie = cookieArray[i];
        //         while (cookie.charAt(0) === ' ') { // Trim leading whitespace
        //             cookie = cookie.substring(1);
        //         }
        //         if (cookie.indexOf(cookieName) === 0) { // Check if the cookie string starts with the cookie name
        //             return cookie.substring(cookieName.length, cookie.length); // Extract and return the cookie value
        //         }
        //     }
        //     return ""; // Return empty string if the cookie was not found
        // } */
    // }, [])
  return (
    <div>
        <iframe id="tokenIframe" style="display:none;" src="https://myaccount.arabhardware.com/refresh/cookie" 
            sandbox="allow-same-origin allow-scripts"></iframe> 
        <input id="login_status" type="hidden" value="logout" />
    </div>
  )
}

export default Page