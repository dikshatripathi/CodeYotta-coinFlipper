 // Add the coinElement variable to correctly get the coin element
 const coinElement = document.getElementById("coin");
 const flipButton = document.getElementById("flipButton");

 const flipCoin = () => {
   // Disable the button during the animation
   flipButton.disabled = true;

   coinElement.classList.add("flipping");
   playSoundEffect();

   // Flip the coin 10 times with random faces during the animation
   let flipCount = 0;
   const flipInterval = setInterval(() => {
     const result = Math.random() < 0.5 ? "Head" : "Tail";
     showResult(result);

     flipCount++;
     if (flipCount === 10) {
       clearInterval(flipInterval);
       setTimeout(() => {
         // Final flip - show the result
         const finalResult = Math.random() < 0.5 ? "Head" : "Tail";
         showResult(finalResult);
         // Enable the button after the animation is complete
         flipButton.disabled = false;
         coinElement.classList.remove("flipping");
       }, 1000);
     }
   }, 100);
 };

 const showResult = (result) => {
   const frontSide = coinElement.querySelector(".front");
   frontSide.textContent = result;
 };

 const playSoundEffect = () => {
   const audio = new Audio("coin.mp3");
   audio.play();
 };