const submitBtn = document.getElementById('submit');
const thanksContainer = document.getElementById('thanks');
const ratingContainer = document.getElementById('rating');
const numbers = document.querySelectorAll('.numberStyle');
const userRating = document.getElementById('user-rating');

let ratingSelected = false;

const handleRating = () => {
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            numbers.forEach(num => num.classList.remove('selected'));
            number.classList.add('selected');
            ratingSelected = true;

            let chosenRating = number.textContent;
            userRating.textContent = `You selected ${chosenRating} out of 5`;
        });
    });
};

submitBtn.addEventListener('click', () => {
    if (ratingSelected) {
        ratingContainer.classList.add('hidden');
        thanksContainer.classList.remove('hidden');
    } else {
        alert('Please select a rating number before submitting.');
    }
});


handleRating();