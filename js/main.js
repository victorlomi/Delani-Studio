// What we do text
let designText = "Our design practice offers a full range of services including" +
                "brand strategy, interaction and visual design and user" +
                "experience testing. <br><br> Throughout your project, our designers" + 
                "create and implement visual design and workflows, solicit" +
                "user feedback and work with you to make sure what gets built" +
                "is what is needed.";

let developmentText = "All engineers are fluent in the latest enterprise," +
                    "mobile and web development technologies.<br><br> They" +
                    "collaborate with your team to write, and improve code" +
                    "on a daily basis, using proven practices such as" + 
                    "test-driven development and pair programming.";

let managementText = "Planning and development is iterative. Because" + 
                    "we are constantly coding and testing, the products" +  
                    "we build are always ready to go live.<br><br> This" + 
                    "iterative process allows for changes as"  + 
                    "business requirements evolve.";

let showInfo = function(element, text) {
    // This function returns a string describing the html structure that 
    // will be previewed when the icon is clicked
    return `<div class="preview">
                <h1 class="preview-title">${element.toUpperCase()}</h1>
                <p id="preview-text">${text}</p>
            </div>` 
};

let showIcon = function(element) {
    // This function returns a string describing the html structure 
    // that is shown originally
    if(element === "management") {
        return `<img src="./images/what-we-do/${element}.png" alt="${element.toUpperCase()} Icon">
            <p>product ${element}</p>`
    }
    return `<img src="./images/what-we-do/${element}.png" alt="${element.toUpperCase()} Icon">
            <p>${element}</p>`
}

let isClicked = function(element) {
    // This function returns the state of the what-we-do icons by 
    // checking if they're displaying the elements added by 
    // the showInfo function
    if($(`.${element}`).children()[0].className === "preview") {
        return true;
    }
    return false;
}

// what we do section
$(document).ready(function () {
    $(".design").click(function (e) { 
        if(isClicked("design")) {
            $(".design").html(showIcon("design"));
        } else {
            $(".design").html(showInfo("design", designText));
        }
    });

    $(".development").click(function (e) { 
        if(isClicked("development")) {
            $(".development").html(showIcon("development"));
        } else {
            $(".development").html(showInfo("development", developmentText));
        }
    });

    $(".management").click(function (e) { 
        if(isClicked("management")) {
            $(".management").html(showIcon("management"));
        } else {
            $(".management").html(showInfo("product management", managementText));
        }
    });
});

// Portfolio section
$(document).ready(function () {
    $(".image-text").each(function (index, element) {
        $(element).hover(function () {
            // make text overlay visible
            $(element).children("p").css("display", "block");
            
            // darken image
            $(element).children("img").addClass("darken-image");
            }, function () {
                // make text overlay invisible
                $(element).children("p").css("display", "none");
            
                // lighten image
                $(element).children("img").removeClass("darken-image");
            }
        );
    });
});

// Handle form
let checkName = function() {
    // This function returns true if the name input has not been changed
    if($("#name").val() === '') {
        return false;
    } 
    return true;
    
};

let checkEmail = function () { 
    // This function returns true if the email input has not been changed
    if($("#email").val() === '') {
        return false;
    } 
    return true;
};

let showMessage = function() {
    let name = $("#name").val();
    let email = $("#email").val();
    alert(`** ${name} we have received your message. Thank you for reaching out to us. **`);
};

// $(document).ready(function () {
//     $( "#message" ).focusout(function() {
//         if(checkName() && checkEmail()) {
//             if(confirm("Send your message?")) {
//                 showMessage();
//             }
//         }
//     })
// });

