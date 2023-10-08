function generateRandomString(length = 8) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!-&#";
    return [...Array(length)].map(() => chars[Math.floor(Math.random() * chars.length)]).join("");
}

const objects = [
    { 'link': "" },
];

// let mainsection = document.getElementById('main');
// let inputBox = document.createElement('input');
// inputBox.type = 'url';
// let btn = document.createElement('button');
// btn.innerHTML = 'submit';
// btn.addEventListener('click', function () {
//     createSmallLink(inputBox.value)
// })
// mainsection.append(inputBox)
// mainsection.append(btn)

// // Iterate over the array of objects and assign a number to each object's key.

// // Print the array of objects.
// console.log(objects);

// function code(pTag, url) {
//     let anchor = document.createElement('a');
//     anchor.href = url;
//     anchor.textContent = `${url}`;
//     pTag.appendChild(anchor);
// }

// let arr = [];
// let orgLink = document.createElement('h1');
// function createSmallLink(link) {
//     for (const [index, object] of objects.entries()) {
//         object.link = link;
//     }

//     // orgLink = link;
//     let ars = generateRandomString();
//     let d = 'domain.com';
//     let sorted = d.concat('/' + ars);
//     for (const [index, object] of objects.entries()) {
//         object.newLink = sorted;
//     }
//     let anchor = document.createElement('a');
//     anchor.href = `${sorted}`;
//     orgLink.innerHTML = sorted;
//     orgLink.appendChild(anchor)
//     mainsection.append(orgLink)
//     console.log(sorted)
// }


function decode(pTag) {
    for (const [index, object] of objects.entries()) {
        if (object.newLink === pTag) {
            // anchor.href = object.link;
            return object.link;
        }
    }
}
// // decode()

// // createSmallLink("https://quiver-sousaphone-d91.notion.site/Scaletech-Walk-home-challenge-31c886bf9d5d47aca493e77d4e3bed87?pvs=4")


const inputBox = document.querySelector('input[type="url"]');

const pTag = document.querySelector('p');

inputBox.addEventListener('change', function () {
    const url = inputBox.value;

    addUrlLineInPTag(pTag, url);
});

function addUrlLineInPTag(pTag, url) {
    let updatedLink = createSmallLink(url);
    let orgLink = decode(updatedLink);
    const anchorElement = document.createElement('a');
    anchorElement.href = orgLink;
    anchorElement.target = '_black'
    anchorElement.textContent = updatedLink;

    pTag.appendChild(anchorElement);
}

let orgLink = document.createElement('h1')
function createSmallLink(link) {
    for (const [index, object] of objects.entries()) {
        object.link = link;
    }
    // orgLink = link;
    let ars = generateRandomString();
    let d = 'http://domain.com';
    let sorted = d.concat('/' + ars);
    for (const [index, object] of objects.entries()) {
        object.newLink = sorted;
    }
    console.log(sorted);    
    return sorted;
}