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
