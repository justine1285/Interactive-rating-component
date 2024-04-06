const submitButton = document.querySelector('button');
const rateButton = document.querySelectorAll('.small_box');
const thanks = document.querySelector('.thanks_content');
const ratingContent = document.querySelector('.rating_content');
 
var clickedRating = 0;

rateButton.forEach((rate, index1) => {
    rate.addEventListener('click', (e) => {
        rateButton.forEach((rate, index2) => {
            if (index1 >= index2) {
                    rate.classList.add('active')
            } else {
                    rate.classList.remove('active');
            }
        });

        clickedRating = rate.innerText;
        console.log(clickedRating); 
    });
});

submitButton.addEventListener('click', (e) => {
    ratingContent.style.display = 'none';
    thanks.style.display = 'block';
    choice = document.querySelector('.rating-choice');
    choice.innerText = `You chose a rating of ${clickedRating} out of 5`
});
