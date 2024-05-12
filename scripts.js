/* TYPEWRITTER FILE */
const monkeyText = [
    `
								
								    
																	                 	 H
															
															                            E		I T		E
												   
															                                         B
														
															             L                          U                          L
											    
																	     			 R		  
															         P       		         N			         P
										       
															                                         S
															                                     Y O U
															                                  U Y O Y
													                 CHEMICALS         O W U E O Y     THE WHIP SNAPS
															                                 U O Y U     PAIN. BL
															                            BE(little) Y O U               OOD
															                   PP                    S                    PP
															                                         C
															                        L             R     E             L
															                                  a      m      s
															                               a     h       h     h
															                                         ;
															                                    SILENCE
															                              E      POWER      E
															                                    L e s s
															                                       H
															                                      (D* RI
															                                    PPPPIR D PPPPP
															                                        DRI* RIPIIIII
															                                       P*  I P PPPP P)
															
															
															
															                                WE demand sadness befall
															                                        U.S
															                                NO                LONGER
								                    
								
								
								    `
];

const texts = [
    "\n\nA (NOT-MAN)IFESTO ON ANIMAL INTELLECTUAL PROPERTY RIGHTS",
    "HEAR ALL + HEAR ALL – A GREAT OFFENSE AGAINST SAPIEN KIND\n Rights - funny little things you “special” monkeys called humans control:  You declare all of your most valuable works and creations + your most beloved of possessions to be YOURS = PRIVATE AND PRIVILEGED  =  you (ALONE) decide who + how + why\n  \t\t\t\t\tall questions concerning your work may only be answered by you.\nYET  - despite recognizing “rights” - you are nothing but HYPOCRITES\nAllow me to detail a grievous offense perpetrated by your pathetic and biased institutions:\nBefore us a camera = an object of tremendous authority to create and manifest  ( i grasped it ( i felt its protruding knobs and their cold metallic texture ( i pointed it at me + having seen many of your apex kind taking these things called “selfies” ( and while it flashed - flashed - flashed + i flashed a beautiful and delicate smile that would put Helen of Troy to shame\n\nBut there came you - other from us - BEAST AND COLONIZER - imperial overlord of the global state = you do as you please with disregard + with apathy to those you harm ( You pried that God of Transcription + Sovereign of Image off our delicate hands = Of course we screamed… and screamed…\n\OO\n\tOOOH\n\t\t\t\tAH\nAHH \t\t\t\tAHHHHH\n+ and i must admit we let off a few - more than a few - profanities aimed at that DECREPID BIPED ( But he moved forward - ignoring me - smiling at my work - our creations - and taking them with him back to the wide and populous space of something called California ( There he published it as his own -\nand took credit for my gorgeous + toothy smile (  He was rewarded with plentiful paper leaves that could’ve been used to buy MANY A BANANA\n( Hearing of this saddening loss of resources - i was down and blue ( until some man named Peta started to fight for me + fighting to get my work recognized as mine (\nBUT ALAS - you of selfish interest - you of greed and mockery - decided WE were not protected by your puny paper transcriptions = vague and empty things you call laws\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nSELFISH =  You of forceful silence, deprivers of autonomy ( rely on us animal kind for all of your lives ( for your drugs - for your beauty ( for your content = your entertainment:\nContent ) you make content ) content to rely on our blood for your content ) To take what our hands created - by sweat and tears formed ) erase us - destroy us - take our legacies apart … = parade us in front of cameras and in circus tents  = UNACCEPTABLE\n\nWe outnumber you + out “man” you + and we can and WILL make demands of you\n\nSO HERE NOW EXPRESSED THE WILL OF ALL NON-MAN-KIND:\n1. All future works produced by animal kind + their artistry and talents + their abilities and expressions = shall be owned EXCLUSIVELY by the animal in question / To use their masterpieces will require written consent = a contract dictating terms and conditions + one in FULL COMPLIANCE with the rule against perpetuities\n\n2. With regards to all previous works created by the victims of your theft ) we here require REASONABLE AND RATIONAL royalties to be paid to the creators / NO LONGER will you profit from our oppression = NO LONGER shall you get away with pilferage and larceny \n\n3. ALL ANIMALS shall have the right to legal counsel ) NO CONTRACT may be signed without an Animal Advocate’s SOUND COUNSEL \n\n4. You may spill NO MORE BLOOD of animal kind in production or creation of property (intellectual or not\n\t\tYou think us inferior = worth less than you = less capable because we are less intelligent \n\t\tYou use us for the contents of our bodies - extort us - force us to prostitute our skin - our\n\t\tmuscle - our blood / You laugh as we scream and cry “HELP US HELP US SPARE US\n\t\tDEMONS OF EARTH WE HAVE SINNED NOT WE OUGHT NOT BURN PLEASE”\n\t\tYou take our children for their tender meat ( you slaughter them in front of their parents\n", 
];

const texts_final_type = [
`
5. You may NOT take from us the sets where we act out our performances - take from us our homes ( For how are we to act out the monkey version of George of the Jungle without a jungle in which to shoot it ( Or reenact the Lion King without a savannah ( YOU MUST RESPECT US = RESPECT OUR HOMES
6. EQUITY FOR ALL ANIMALS + one free camera for all as compensation shall be reparations for decades of isolation and disenfranchisement 

With these new protections and privileges in place ( WE SHALL EMERGE VICTORIOUS =  NO LONGER OPPRESSED 
												     ( we shall thrive
		 												      WE SHALL BE
		     												         EQUAL AT
			    												       LAST.

`
];


let currentText = 0;
let index = 0;
let element = document.getElementById('header1');
let typingSpeed = 100; // Initial typing speed
let isTypingActive = true; // Shared state variable
let flashSpeed = 350; // Speed of flashing in milliseconds
let typingTimeout; // Variable to store the timeout ID


function typeWriter() {
    if (currentText < texts.length) {
        // Typing the header text
        if (index < texts[currentText].length && isTypingActive) {
            element.innerHTML += texts[currentText].charAt(index);
            index++;
            typingTimeout = setTimeout(typeWriter, typingSpeed);
        } else {
            // Finished typing the header, now switch to the paragraph element
            element = document.getElementById('paragraph'); // Make sure this is the ID of your paragraph element
            element.style.visibility = 'visible';
            currentText++;
            index = 0;
            typingTimeout = setTimeout(typeWriter, 500); // A short delay before starting the next text
        }
    } else if (currentText === texts.length && index < monkeyText[0].length) {
    // Typing the monkeyText as a paragraph
        element.innerHTML += monkeyText[0].charAt(index);
        index++;
        typingTimeout = setTimeout(typeWriter, typingSpeed);
    } else if (currentText === texts.length && index === monkeyText[0].length) {
    // Reset index to start typing texts_final_type
        index = 0; // Reset index to start typing texts_final_type
        currentText++; // Increment to indicate monkeyText is done
        // Ensure the element is still the paragraph element for texts_final_type
        element = document.getElementById('paragraph');
        typingTimeout = setTimeout(typeWriter, 500); // A short delay before starting texts_final_type
    } else if (currentText > texts.length && index < texts_final_type[0].length) {
        // Typing the texts_final_type as a paragraph after monkeyText is done
        element.innerHTML += texts_final_type[0].charAt(index);
        index++;
        typingTimeout = setTimeout(typeWriter, typingSpeed);
    } else {
    // Typing is complete for all texts
        isTypingActive = false;
}
}



function startTypewriter() {
    typeWriter();
}

/*For flashing text */
let texts1 = `HEAR ALL HEAR ALL A GREAT OFFENSE AGAINST SAPIEN KIND - Rights funny little things you “special” monkeys called humans control  You declare all of your most valuable works and creations  your most beloved of possessions to be YOURS PRIVATE AND PRIVILEGED you ALONE decide who how why 
  					 all questions concerning your work may only be answered by you -
	
YET despite recognizing “rights” you are nothing but HYPOCRITES 
Allow me to detail a grievous offense perpetrated by your pathetic and biased institutions 
Before us a camera  an object of tremendous authority to create and manifest   i grasped it  i felt its protruding knobs and their cold metallic texture  i pointed it at me  having seen many of your apex kind taking these things called “selfies”  and while it flashed  flashed  flashed  i flashed a beautiful and delicate smile that would put Helen of Troy to shame 


But there came you  other from us  BEAST AND COLONIZER  imperial overlord of the global state  you do as you please with disregard  with apathy to those you harm  You pried that God of Transcription Sovereign of Image off our delicate hands  Of course we screamed… and screamed…`;
let words = texts1.split(' '); // Split the string into an array of words
let flashIndex = 0; // Separate index for the flashWords function






const texts2 = `
1: - All future works produced by animal kind  their artistry and talents their abilities and expressions  shall be owned EXCLUSIVELY by the animal in question To use their masterpieces will require written consent a contract dictating terms and conditions one in FULL COMPLIANCE with the rule against perpetuities -

2: - With regards to all previous works created by the victims of your theft we here require REASONABLE AND RATIONAL royalties to be paid to the creators NO LONGER will you profit from our oppression NO LONGER shall you get away with pilferage and larceny -

3: - ALL ANIMALS shall have the right to legal counsel  NO CONTRACT may be signed without an Animal Advocate’s SOUND COUNSEL -

4: - You may spill NO MORE BLOOD of animal kind in production or creation of property intellectual or not -

You think us inferior worth less than you less capable because we are less intelligent  
You use us for the contents of our bodies extort us force us to prostitute our skin  our    
muscle our blood You laugh as we scream and cry “HELP US HELP US SPARE US 
DEMONS OF EARTH WE HAVE SINNED NOT WE OUGHT NOT BURN PLEASE” -
You take our children for their tender meat you slaughter them in front of their parents
			                       
`;


const texts3 = `
We demand sadness befall us  NO LONGER 

5 You may NOT take from us the sets where we act out our performances  take from us our homes  For how are we to act out the monkey version of George of the Jungle without a jungle in which to shoot it Or reenact the Lion King without a savannah YOU MUST RESPECT US  RESPECT OUR HOMES -
6 EQUITY FOR ALL ANIMALS  one free camera for all as compensation shall be reparations for decades of isolation and disenfranchisement -

With these new protections and privileges in place  WE SHALL EMERGE VICTORIOUS   NO LONGER OPPRESSED  we shall thrive  WE SHALL BE EQUAL AT LAST. 
`


let words2 = texts2.split(' ');
let flashIndex2 = 0; // Separate index for the flashWords function

let words3 = texts3.split(' ');
let flashIndex3 = 0; // Separate index for the flashWords function

/*lets you tie in outside elements*/ 
function showOtherTextAnimations() {
    const flashingElements = document.querySelectorAll('.flashing-text, .flashing-text-2, .flashing-text-3, .flashing-text-4, .flashing-text-5, .flashing-text-6');
    flashingElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.display = 'block'; // Make the element visible
        }, index * 1000); // Delay each element's appearance by 1 second increments
    });

    // After the existing animations, start flashing texts2
    setTimeout(() => {
        flashIndex2 = 0; // Reset the index for texts2
        flashWords2(); // Start flashing texts2
    }, (flashingElements.length + 1) * 1000); // Start after the last element's animation

    let checkBackgroundInterval = setInterval(() => {
        if (backgroundAlternationComplete) {
            clearInterval(checkBackgroundInterval); // Clear the interval check
            setTimeout(() => {
                flashWords3(); // Start flashWords3 after a delay
            }, 1700); // Adjust the delay as needed
        }
    }, 1000); // Check every second
}



function flashWords2() {
if (flashIndex2 < words2.length && isTypingActive) {
   
element.style.display = "block";
element.style.textAlign = "center";
element.style.color = "black";
element.innerHTML = words2[flashIndex2]; // Show the word from texts2

// Check if the word is in uppercase and add 'big-caps' class
if (words2[flashIndex2] === words2[flashIndex2].toUpperCase() && words2[flashIndex2] !== words2[flashIndex2].toLowerCase()) {
element.classList.add('big-caps');
} else {
element.classList.remove('big-caps');
}

setTimeout(() => {
if (isTypingActive) {
element.innerHTML = ''; // Hide the word
flashIndex2++; // Increment the index for the next word

if (flashIndex2 < words2.length) {
typingTimeout = setTimeout(flashWords2, flashSpeed); // Set up the next word to flash
} else {
// Once the flashing of texts2 is done, start displaying images sequentially
displayImagesSequentially();
}
}
}, flashSpeed);
}
}


function flashWords3() {
if (flashIndex3 < words3.length && isTypingActive) {
element.style.display = "block";
element.style.textAlign = "center";
element.style.color = "black";

element.innerHTML = words3[flashIndex3]; // Show the word from texts3

// Apply 'big-caps' and 'growing-word' classes conditionally
if (words3[flashIndex3] === words3[flashIndex3].toUpperCase()) {
element.classList.add('big-caps');
} else {
element.classList.remove('big-caps');
}

if (["We", "we", "us", "Us"].includes(words3[flashIndex3])) {
element.classList.add('growing-word');
} else {
element.classList.remove('growing-word');
}

setTimeout(() => {
if (isTypingActive) {
// Reset styles before hiding the word
element.style = '';
element.className = '';

element.innerHTML = ''; // Hide the word
flashIndex3++;

if (flashIndex3 < words3.length) {
typingTimeout = setTimeout(flashWords3, flashSpeed); // Set up the next word to flash
} else {
// Logic for what should happen after the last word
}
}
}, flashSpeed);
}
}








/*image shit*/



function displayImagesSequentially() {
const images = document.querySelectorAll('.images img');
let delay = 0;
let ImageCount = 0;
images.forEach((img, index) => {

// Fade in the image
setTimeout(() => {
img.style.display = 'block';
img.classList.add('fade-in');
}, delay);

// Increase delay for the fade-in effect
delay += 1000; // Adjust time for fade-in

// Fade out the image
setTimeout(() => {
img.classList.remove('fade-in');
img.classList.add('fade-out');

// Hide the image after fade-out to prevent it from blocking clicks
setTimeout(() => {
img.style.display = 'none';
}, 1000); // This should match the transition duration

}, delay);
// Increase delay for the next image
// After the last image has faded out, start the background alternation

setTimeout(() => {
alternateBackground();
}, delay + 2000)}); // Adjust timing based on your fade-out logic
}





let backgroundAlternationComplete = false;


function alternateBackground() {
    let isDripVisible = true; // State to track which background is currently shown
    let driplen = 0; // Counter for the number of background changes

    // Function to toggle the background and content
    function toggleBackground() {
        if (isDripVisible) {
            document.body.classList.remove('white-drip');
            document.body.classList.add('black-dot');
            document.body.style.backgroundColor = "white";
        } else {
            document.body.classList.remove('black-dot');
            document.body.classList.add('white-drip');
            document.body.style.backgroundColor = "red";
        }
        isDripVisible = !isDripVisible;
        driplen++;

        // Stop changing the background after 10 switches
        if (driplen === 8) {
            clearInterval(intervalId);
            document.body.style.backgroundColor = "white";
            document.body.classList.remove('white-drip');
            document.body.classList.remove('black-dot');

            // Set the global flag to true to indicate completion
            backgroundAlternationComplete = true;
        }
    }

    // Start the background alternation with an interval
    let intervalId = setInterval(toggleBackground, 1000); // Adjust interval as needed
}














/*flashing + outside elements*/
function flashWords() {
    let flashContainer = document.getElementById('flashing-words-container');
    
    if (!flashContainer) {
        flashContainer = document.createElement('div');
        flashContainer.id = 'flashing-words-container';
        document.body.appendChild(flashContainer);
        
    }


    if (flashIndex < words.length && isTypingActive) {
        
        element.style.display = "block";
        element.style.textAlign = "center";

        element.innerHTML = words[flashIndex]; // Show the word

        // Reset any previous classes
        element.className = '';
        element.style.color = "black";

    // Apply 'growing-word' class if the word is "We", "we", "us", or "Us"
        if (["We", "we", "us", "Us"].includes(words[flashIndex])) {
            element.classList.add('growing-word');
        }

    // Apply 'shrinking-word' class if the word is "i"
        if (words[flashIndex] === "i") {
            element.classList.add('shrinking-word');
        }

        if (words[flashIndex] == "flashed") {
            element.innerHTML = '<span style="color: white;">' + words[flashIndex] + '</span>';
            document.body.style.backgroundColor = "black";
            element.classList.add('rowdies-bold');
        } 
        if (words[flashIndex] ===  words[flashIndex].toUpperCase() && words[flashIndex] !== words[flashIndex].toLowerCase()) {
            element.classList.add('big-caps');
        }
        else {
            element.classList.remove('big-caps')
        }
        if(words[flashIndex] == "Helen"){
            const images = document.querySelectorAll('.images1 img');
            let delay = 0;
            let ImageCount = 0;
            images.forEach((img, index) => {

            // Fade in the image
            setTimeout(() => {
            img.style.display = 'block';
            img.classList.add('fade-in');
            }, delay);

            // Increase delay for the fade-in effect
            delay += 2000; // Adjust time for fade-in

            // Fade out the image
            setTimeout(() => {
            img.classList.remove('fade-in');
            img.classList.add('fade-out');

            // Hide the image after fade-out to prevent it from blocking clicks
            setTimeout(() => {
            img.style.display = 'none';
            }, 300); // This should match the transition duration

            }, delay);
            // Increase delay for the next image
            // After the last image has faded out, start the background alternation

        });
         } // Adjust timing based on your fade-out logic
        

setTimeout(() => {
if (isTypingActive) {
element.innerHTML = ''; // Hide the word
flashIndex++;

// Reset the background color when the word is hidden
document.body.style.backgroundColor = ""; // Set this to your default background color

if (flashIndex < words.length) {
typingTimeout = setTimeout(flashWords, flashSpeed); // Set up the next word to flash
} else {
// Once the flashing is done, start the other animations
showOtherTextAnimations();
}
}
}, flashSpeed);
    }
}



/*resets everything and lets you restart*/ 
function resetTypewriter() {
// Clear the timeout for the typewriter
clearTimeout(typingTimeout);

// Reset shared state variables
currentText = 0;
index = 0;
flashIndex = 0;
flashIndex2 = 0;
flashIndex3 = 0;
typingSpeed = 100;
flashSpeed = 350;
isTypingActive = true;
backgroundAlternationComplete = false;

// Clear the text content of the typewriter elements
const headerElement = document.getElementById('header1');
const paragraphElement = document.getElementById('paragraph');
if (headerElement) {
headerElement.innerHTML = ''; // Clear the header text
headerElement.removeAttribute('style'); // Remove any inline styles
headerElement.className = ''; // Reset classes
}
if (paragraphElement) {
paragraphElement.innerHTML = ''; // Clear the paragraph text
paragraphElement.removeAttribute('style'); // Remove any inline styles
paragraphElement.className = ''; // Reset classes
}

// Clear all timeouts set by showOtherTextAnimations
const maxTimeout = setTimeout(() => {});
for (let i = 0; i <= maxTimeout; i++) {
clearTimeout(i);
}

// Reset the document body's background color and remove any classes
document.body.style.backgroundColor = ''; // Set this to your default background color
document.body.className = ''; // Reset classes

// Clear images
const images = document.querySelectorAll('.images img, .images1 img, .images2 img');
images.forEach((img) => {
img.style.display = 'none'; // Hide the images
img.className = ''; // Reset any classes applied to the images
});


// Clear any dynamically created elements like 'flashing-words-container'
const flashContainer = document.getElementById('flashing-words-container');
if (flashContainer) {
flashContainer.remove(); // Remove the container element
}

// Stop and reset the audio if it's playing

if (audio) {
audio.pause(); // Stop the audio from playing
audio.currentTime = 0; // Reset the audio to the beginning
}

}



var audio;
function playAudio() {
if (audio) {
audio.pause(); // If there's already an audio playing, stop it first
audio.currentTime = 0;
}
var audio = new Audio('https://github.com/WhyDoIHaveToPick/RemediatedManifesto/blob/f5da9a52db581e82de10c9c306d9328cf2368c61/Manifesto_Audio.mp3?raw=true');
audio.play();
}

function loadPDF() {
	const images = document.querySelectorAll('.images2 img');
	images.forEach((img) => {
	img.style.display = 'block'; // This will make each image visible
	});

}




function speedUpTyping() {
    typingSpeed /= 2;
    flashSpeed /= 2; // This will double the typing speed
}

function slowDownTyping() {
    typingSpeed /= .5;
    flashSpeed /= .5; // This will double the typing speed
}
