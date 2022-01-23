function OpenGallery(){
    const content = `
        <img width="640" height="426" src="Images/Gallery/Gallery1.jpg" alt="Image of a penguin">
        <img width="640" height="427" src="Images/Gallery/Gallery2.jpg" alt="Image of a penguin">
        <img width="640" height="423" src="Images/Gallery/Gallery3.jpg" alt="Image of a penguin">
        <img width="640" height="426" src="Images/Gallery/Gallery4.jpg" alt="Image of a penguin">
    `
    if(!document.querySelector("#GalleryExtension")) {
        const NewObj = document.createElement("article")
        NewObj.id = "GalleryExtension"
        NewObj.innerHTML = content
        const location = document.querySelector("#GalleryExtensionContainer")
        location.appendChild(NewObj)
    }
}

function OpenSocialMedia(){
    const content = `
        <img src="Images/Icons/Facebook.png" alt="Social Media Icon">
        <img class="Bottom" src="Images/Icons/Instagram.png" alt="Social Media Icon">
        <img class="Middle" src="Images/Icons/LinkedIn.png" alt="Social Media Icon">
        <img class="Top" src="Images/Icons/Twitter.png" alt="Social Media Icon">
        <img class="Right" src="Images/Icons/Mail.png" alt="Social Media Icon">
        <img class="Right" onclick="CloseSocialMedia()" src="Images/Icons/Minus.png" alt="Social Media Icon">
    `
    if(!document.querySelector("#EmailExtension")){
        const NewObj = document.createElement("article")
        NewObj.id = "EmailExtension"
        NewObj.innerHTML = content
        const location = document.querySelector("#EmailExtensionContainer")
        location.appendChild(NewObj)
    }
}

function CloseSocialMedia() {
    const location = document.querySelector("#EmailExtension")
    location.remove()
}
function CloseAbout() {
    const location = document.querySelector("#AboutExtension")
    location.remove()
}

window.addEventListener("scroll",function(){ScrollBar()})

function ScrollBar(){
    const bar = document.querySelector("#ScrollBar")
    const CurrentScroll = document.documentElement.scrollTop
    const TotalScroll = document.documentElement.scrollHeight
    const Progress = Math.round((100 * CurrentScroll) / TotalScroll)
    bar.style.width = Progress + '%'
    if(Progress > 5)
        bar.innerHTML = Progress + '%'
    else
        bar.innerHTML = ""
}

function OpenAbout(){
    const content = `
        <div class="Card">
            <div class="Card-image">
                <img src="Images/CardBG1.jpg" alt="Image of a penguin">
            </div>
            <div class="Card-text">
                <h1>Flying</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis arcu nulla, sit amet condimentum nibh ornare ut. Curabitur lacinia dapibus imperdiet. Vestibulum at quam leo. Pellentesque dignissim et erat et laoreet. Phasellus vestibulum laoreet turpis. Suspendisse potenti. Vivamus nisi lectus, porttitor a dolor eu, pretium dictum nisl. Maecenas ut consequat felis. Donec varius tempus orci, a finibus mi viverra at. Nullam faucibus ante eget blandit pretium. Fusce magna massa, placerat id tempus sed, tempor vel tortor.</p>
            </div>
        </div>
        <div class="Card">
            <div class="Card-text">
                <h1>Flying</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis arcu nulla, sit amet condimentum nibh ornare ut. Curabitur lacinia dapibus imperdiet. Vestibulum at quam leo. Pellentesque dignissim et erat et laoreet. Phasellus vestibulum laoreet turpis. Suspendisse potenti. Vivamus nisi lectus, porttitor a dolor eu, pretium dictum nisl. Maecenas ut consequat felis. Donec varius tempus orci, a finibus mi viverra at. Nullam faucibus ante eget blandit pretium. Fusce magna massa, placerat id tempus sed, tempor vel tortor.</p>
            </div>
            <div class="Card-image">
                <img src="Images/CardBG2.jpg" alt="Image of a penguin">
            </div>
        </div>
        <div class="Card">
            <div class="Card-image">
                <img src="Images/CardBG3.jpg" alt="Image of a penguin">
            </div>
            <div class="Card-text">
                <h1>Flying</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis arcu nulla, sit amet condimentum nibh ornare ut. Curabitur lacinia dapibus imperdiet. Vestibulum at quam leo. Pellentesque dignissim et erat et laoreet. Phasellus vestibulum laoreet turpis. Suspendisse potenti. Vivamus nisi lectus, porttitor a dolor eu, pretium dictum nisl. Maecenas ut consequat felis. Donec varius tempus orci, a finibus mi viverra at. Nullam faucibus ante eget blandit pretium. Fusce magna massa, placerat id tempus sed, tempor vel tortor.</p>
            </div>
        </div>
        <div class="Card">
            <div class="Card-text">
                <h1>Flying</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis arcu nulla, sit amet condimentum nibh ornare ut. Curabitur lacinia dapibus imperdiet. Vestibulum at quam leo. Pellentesque dignissim et erat et laoreet. Phasellus vestibulum laoreet turpis. Suspendisse potenti. Vivamus nisi lectus, porttitor a dolor eu, pretium dictum nisl. Maecenas ut consequat felis. Donec varius tempus orci, a finibus mi viverra at. Nullam faucibus ante eget blandit pretium. Fusce magna massa, placerat id tempus sed, tempor vel tortor.</p>
            </div>
            <div class="Card-image">
                <img src="Images/CardBG4.jpg" alt="Image of a penguin">
            </div>
        </div>
        
            
           <div class="Centered">
                <img onclick="CloseAbout()" src="Images/Icons/Minus.png">
                </div>
           
        </div>
    `

    if(!document.querySelector("#AboutExtension")){
        const NewObj = document.createElement("article")
        NewObj.id = "AboutExtension"
        NewObj.innerHTML = content
        const location = document.querySelector("#AboutExtensionContainer")
        location.appendChild(NewObj)
    }
}