# Product Card

![project demonstration](/demo.gif)

Product card in 3 variants to show the "behavior" of the content under different conditions:

1. When there is a lot of text in the card title, but a little text in the product description.
2. When there is a little text in the card title, but a lot of text in the product description.
3. When there is a lot of text in the product description, more than 5 characters in the price, and a lot of text in the location.

**[View Website](https://nadineplatonova.github.io/product-card/)**

## Used Technologies

- The project was implemented using [Create React App](https://github.com/facebook/create-react-app).
- Stack: HTML, CSS, React.

## Task: create a product card layout [according to the Figma design](https://www.figma.com/file/R6eiBRT59ogm2udA9uPpKb/Product-card?node-id=1%3A2576&t=E9kGU8sTNlPAWIYQ-1) with the following requirements:

1. The card stretches to the full width of the container it is placed in. Assume that this container can be from 960 to 1440 pixels wide. I suspect that on smaller or larger sizes, a radical change in appearance will be required. Let's leave that out of the scope of this task.
2. The height of the card adjusts to its content.
3. The image always maintains its 4:3 aspect ratio and stretches to the full height of the card. The maximum width of the image should not exceed 45% of the card's width. You can use any suitable illustration.
4. The text content can vary in length and content. The card should adapt to it without breaking. Some possible variants are presented in the design.
5. The price can be either 2-3 characters or 5-6 characters. This should also be taken into account.
6. Tags are displayed in a single line. There can be many tags. Those that do not fit are completely hidden. Individual words in the tags cannot be truncated or wrapped.
7. The location is always anchored to the bottom edge of the card. It is displayed in a single line. The excess part is hidden with an ellipsis.

## Solutions for each requirement:

1. The container where the card is located is set to a width of 100%, with a minimum width of 960px and a maximum width of 1440px.
2. The height of the card is not specified so that it adjusts to its content.
3. The height of the image is set to 100% to stretch it to the full height of the card. `display: grid` with `grid-template-columns: 45% 55%` is used so that the width of the image does not exceed 45% of the card's width.
4. The height of the blocks with text content is not specified, allowing the card to adjust to the text content.
5. The price is styled with `white-space: nowrap`, and the block that combines the price and description is styled with `display: flex`, `justify-content: space-between`, `flex-direction: row`, and `gap: 16px` to ensure the layout does not break when the price exceeds 5 characters in length.
6. The block with tags is styled with `flex-flow: row wrap`, the height of the block is set to the height of a line (26px), and anything that wraps to the next line is hidden. This way, tags are displayed in a single line, and those that do not fit are hidden.
7. The location and all other text content are combined into a separate block styled with `display: flex`, `flex-direction: column`, and `justify-content: space-between`. This ensures the location is always anchored to the bottom of the card. To display the location in a single line and hide the overflow with an ellipsis, the CSS properties `white-space: nowrap`, `overflow: hidden`, and `text-overflow: ellipsis` are used.

## Challenges in meeting the requirements:

It was not possible to achieve the condition where the image maintains its 4:3 aspect ratio while also stretching to the full height of the card, as these seem to be mutually exclusive requirements. For example, if there is a lot of text content and the image stretches to the full height of the card, it cannot maintain a 4:3 aspect ratio. To maintain the 4:3 aspect ratio, the CSS property `aspect-ratio: 4/3` can be added to the image, but then the height restriction needs to be removed. This is not feasible because it is required that the image stretches to the full height of the card.

## How to run the application on your local machine:

1. In the command line, open the desired folder and enter:

### `git clone https://github.com/NadinePlatonova/product-card.git`

2. Open the project:

### `cd product-card`

3. Install dependencies:

### `npm install`

4. Start the project:

### `npm run start`

5. Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.
