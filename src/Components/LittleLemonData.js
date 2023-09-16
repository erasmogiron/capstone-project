export const littleLemon = [
    {
       title: "Meet the Owners",
       ourStoryTitle: "About Little Lemon",
       owners: "Adrian and Mario",
       restaurant: "Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.",
       ownerBio: "Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.",
       aboutAdrian: "Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.",
       alt: "Adrian and Mario in Kitchen photo of Little Lemon restaurant",
       getImageSrc: () => require("../images/adrian-and-mario.jpg"),
    },
   ];

 export  const reviews = [
      {
         id: 1,
         name: "Megan",
         rating: require("../images/five-stars.png"),
         description: "The best service and great outdoor space.",
         getImageSrc: () => require("../images/megan.jpg"),
         alt: "Megan smiling",
      },
      {
         id: 2,
         name: "Rachel",
         rating: require("../images/four-stars.png"),
         description: "Online ordering and delivery is great.",
         getImageSrc: () => require("../images/rachel.jpg"),
         alt: "Rachel smiling",
      },
      {
         id: 3,
         name: "Allen",
         description: "Best taste in Chicago.",
         rating: require("../images/five-stars.png"),
         getImageSrc: () => require("../images/allen.jpg"),
         alt: "Allen smiling",
      },
     {
         id: 4,
         name: "Jackson",
         rating: require("../images/five-stars.png"),
         description: "Love teh new online reservation feature!",
         getImageSrc: () => require("../images/jackson.jpg"),
         alt: "Jackson smiling",
     },
     ];

     export const dishes = [
      {
         id: 1,
         title: "Greek Salad",
         alt: "Greek Salad tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt",
         price: "$12.99",
         description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", 
         getImageSrc: () => require("../images/greek-salad.jpg"),
      },
      {
         id: 2,
         title: "Bruschetta",
         alt: "Bruschetta with cheese and tomatoes",
         price: "$5.99",
         description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.", 
         getImageSrc: () => require("../images/bruschetta.jpg"),
      },
      {
         id: 3,
         title: "Lemon Desert",
         alt: "Layered lemon cake dessert",
         price: "$5.00",
         description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.", 
         getImageSrc: () => require("../images/lemon-dessert.jpg"),
      },
     {
         id: 4,
         title: "Tomato Soup",
         alt: "Velvet Tomato Soup",
         price: "$7.00",
         description: "Velvety smooth tomato soup accented with oregano and thyme.",
         getImageSrc: () => require("../images/tomato-soup.jpg"),
     },
     {
         id: 5,
         title: "Hummus",
         alt: "Hummus and crackers",
         price: "$5.00",
         description: "Refreshing flavors of the Mediterranean. Hummus and pita chips.",
         getImageSrc: () => require("../images/hummus.jpg"),
     },
     {
         id: 5,
         title: "Butternut Squash Soup",
         alt: "Roasted butter nut squash soup and pepitas",
         price: "$8.00",
         description: "Roasted butternut squash soup with sweet and nutty flavors.",
         getImageSrc: () => require("../images/butternut-squash-soup.jpg"),
     },
     ];