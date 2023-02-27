// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(document).ready(function () {
 
  const saveButton = document.querySelectorAll('button');
  saveButton.forEach(button => {

    button.addEventListener("click", function () {
      const description = this.parentNode.querySelector(".description").value;
      const timeblockId = this.parentNode.getAttribute('id');

      localStorage.setItem(timeblockId, description);
    });
  });
  $('.time-block').each(function () {
    $(this).children('textarea').val(localStorage.getItem($(this).attr('id')));
  })

  const currentHour = dayjs().hour();
    console.log(currentHour);
  const timeBlocks = document.querySelectorAll(".time-block");
    console.log(timeBlocks);

    timeBlocks.forEach((block) => {
      // Get the hour from the time-block's id
      const blockHour = parseInt(block.getAttribute("id").split("-")[1]);
    
      if (blockHour < currentHour) {
        // This time block is in the past
        block.classList.add("past");
      } else if (blockHour === currentHour) {
        // This time block is the current hour
        block.classList.add("present");
      } else {
        // This time block is in the future
        block.classList.add("future");
      }
    });
  //
  // TODO: Add code to display the current date in the header of the page.
  let currentDate = dayjs();
  $('#currentDay').text(currentDate);

});
