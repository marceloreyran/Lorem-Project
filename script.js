// Scripts

//Constants for tags options
const tags = [
    'p','h1','h2',
    'h3','h4','h5','span'
];


// Get DOM elements

const optionsContainer = document.querySelector('.options');
const outputContainer = document.querySelector('.output');
const tagsSelect = document.getElementById('.tags');
const paraghapsSelect = document.getElementById('.paraghaps');
const wordsSlider =
    document.getElementById("words");
const paragraphsValue =
    document.getElementById(
        "paragraphsValue"
    );

    // Create Options UI
function createOptionsUI() {

    //  With tag options, fill up the <select> element.
        tagOptions.forEach((tag) => {
            const option =
                document.createElement(
                    "option"
                );
            option.value = tag;
            option.textContent = `<${tag}>`;
            tagsSelect.appendChild(option);
        });

        // Event listeners for sliders
    paragraphsSlider.addEventListener(
        "input",
        updateParagraphsValue
    );
    wordsSlider.addEventListener(
        "input",
        updateWordsValue
    );

    const generateButton =
        document.getElementById(
            "generate"
        );
    generateButton.addEventListener(
        "click",
        generateLoremIpsum
    );
}

//Update the displayed value for the paragraphs 
function updateParagraphsValue(){
    paragraphsValue.textContent = paragraphsSlider.value;
}

 //  Use a placeholder text as an 
    //  Example for illustrating.
    const placeholderText =
        `Lorem ipsum dolor sit amet 
        consectetur adipiscing elit sed 
        do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.`;


    // Create an array of paragraphs
    const loremIpsumArray = new Array(
        paragraphs
    ).fill("");

    // Generate words for each paragraph
    for (
        let i = 0;
        i < paragraphs;
        i++
    ) {
        const words = generateWords(
            wordsPerParagraph
        );
        loremIpsumArray[i] =
            includeHtml === "Yes"
                ? `<${tag}>${words}</${tag}>`
                : words;
    }
   // Function to generate a specified number of words
function generateWords(numWords) {
    
    // Lorem Ipsum text for demonstration purposes
    const loremIpsumText =
        `Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna 
        aliqua. Diam in arcu cursus euismod 
        quis viverra nibh. Nunc aliquet bibendum
        enim facilisis gravida neque convallis 
        a cras. Sagittis purus sit amet volutpat
        Consequat mauris. Duis ultricies lacus 
        sed turpis tincidunt id. Consequat interdum
        varius sit amet mattis vulputate. Enim sed
        faucibus turpis in eu. Ridiculus mus mauris
        vitae ultricies leo integer malesuada nunc vel.
        Nulla pharetra diam sit amet nisl suscipit.
        Lobortis elementum nibh tellus molestie nunc
        non blandit massa enim. Dis parturient montes
        nascetur ridiculus mus. Justo nec ultrices dui
        sapien eget. Enim tortor at auctor urna nunc.
        Dictumst quisque sagittis purus sit amet volutpat
        consequat mauris nunc.`;


    // Split the Lorem Ipsum text into words
    const words =
        loremIpsumText.split(" ");
         // Ensure the number of words requested is 
    // within the bounds of the available words
    if (numWords <= words.length) {
        return words
            .slice(0, numWords)
            .join(" ");
    } else {
        return words.join(" ");
    }
}
