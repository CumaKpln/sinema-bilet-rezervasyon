const container = document.querySelector(".container");
let count = document.querySelector("#count");
let amount = document.querySelector("#amount");
const select = document.querySelector("#movie");

container.addEventListener("click", function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal()

    }

});

select.addEventListener("change", function (e) {
    calculateTotal()
});


function calculateTotal() {
    let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
    let price = select.value;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * price;
}
