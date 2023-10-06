// Defines an array for the cards data
//Adds the title and description for each card when you click learn more
const cardData = [
  //Card 1
  {
    title: "WOOF WOOF WALK TIME!",
    description:
      "Draw this card to gain immunity to feral diseases for 2 turns. Additionally, you gain an extra turn for every 3 feral debuff you currently have.",
  },
  //Card 2
  {
    title: "Interdimensional Warp",
    description:
      "Draw this card to immediately gain an extra turn. During your turns, the damage output is increased by 30% for all attack cards.",
  },
  //Card 3
  {
    title: "Swordplay",
    description:
      "Draw this card to obtain a random legendary weapon from your opponent. If there are no legendary weapons, this card converts into 25 pure damage.",
  },
  //Card 4
  {
    title: "Sleep Like The Dead",
    description:
      "Draw this card to hibernate. You will not be able to use 2 of your turns, however, if the enemy attacks you during this phase, immediately counterattack with 10 pure damage.",
  },
  //Card 5
  {
    title: "In The Night",
    description:
      "Draw this card to gain immunity to any illusory effect cards. Also, when defeating a card from your opponent, gain an extra turn. This effect stacks with each consecutive defeats.",
  },
  //Card 6
  {
    title: "Day One Of My New Life",
    description:
      "Draw this card to reset all debuffs and buffs that you currently have. Increases your damage by 15%, and decreases damage taken by 15%.",
  },
];

// Modal functionality when you click learn more
var modal = document.getElementById("myModal"); // takes the modal and sets the parameter as the element id myModal in HTML.
var closeButton = document.querySelector(".close"); // closes the modal when you click the close button.
var modalTitle = document.querySelector(".modal-content h2"); //creates takes the title of the modal, in this case the name of the cards, and assigns parameter modal content h2, where the card title is put inside.
var modalDescription = document.querySelector(".modal-content p"); //takes the description of the modal, the card's abilities, and assigns parameter modal content, where the abilities of the card is put inside.

// Function to open the modal and show the title and description as well as playing a sound whenever clicked
function openModal(index) {
  var click = document.getElementById("click"); //calls the audio click
  click.play();
  click.volume = 0.5;
  modalTitle.textContent = cardData[index].title;
  modalDescription.textContent = cardData[index].description;
  modal.style.display = "block";
}

// Function to close the modal, the little x at the top right of the modal
function closeModal() {
  modal.style.display = "none";
}

// Show modal with the corresponding card data when Learn More link is clicked
document.querySelectorAll(".learn-more").forEach(function (link, index) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    openModal(index);
  });
});

// Close modal when the close button is clicked
closeButton.addEventListener("click", function () {
  closeModal();
});

// Close modal when clicking outside the modal
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});

// Sets audio of background to lower volume
var audio = document.getElementById("background-music");
audio.volume = 0.4;

// Sets a sound effect when hovering on the cards
var hovering = document.getElementById("hovering"); // calls the audio hovering

var cards = document.querySelectorAll(".card"); // calls all inside the class card
//Adds an event listener for when the cursor is hovering over the cards
cards.forEach(function (card) {
  card.addEventListener("mouseover", function () {
    hovering.play();
    hovering.volume = 0.5;
  });
});
