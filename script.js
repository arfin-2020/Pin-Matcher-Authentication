function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + " ").split(".")[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

// Display Generated Pin

function generatePin() {
    const pinInput = document.getElementById("pin").value = getPin();
}

//handle calculator button even using event bubble

const buttonContainer = document.getElementById("digits-container").addEventListener("click", function(event) {
    // console.log(event.target.innerText);
    const digits = event.target.innerText;
    if (isNaN(digits)) {
        if (digits === 'C') {
            document.getElementById("typed-pin").value = "";
        }
        // console.log("handle NON digits");
    } else {
        // console.log(digit);
        const typedPinInput = document.getElementById("typed-pin");
        typedPinInput.value = typedPinInput.value + digits;
    }
});

//submit handler

document.getElementById("submit-button").addEventListener("click", function() {
    const pinInput = document.getElementById("pin").value
    const typedPinInput = document.getElementById("typed-pin").value;

    if (pinInput === typedPinInput) {
        // const matchPin = document.getElementById("Match-pin").style.display = "block";
        // const notMatchPin = document.getElementById("notMatch-pin").style.display = "none";

        getMatchResult("block", "none");
    } else {
        // akane if else a none and block aksate takte hobe na hole kinto function a akta jamela hobe perameter pass ar ketre ata valo vabe keyal korte hobe
        // const notMatchPin = document.getElementById("Match-pin").style.display = "none";
        // const matchPin = document.getElementById("notMatch-pin").style.display = "block";
        getMatchResult("none", "block");
    }
});

function getMatchResult(correctStatus, incorrectStatus) {
    const notMatchPin = document.getElementById("Match-pin").style.display = correctStatus;
    const matchPin = document.getElementById("notMatch-pin").style.display = incorrectStatus;
}