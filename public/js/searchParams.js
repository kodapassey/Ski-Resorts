const navBarSearchForm = document.querySelector('#navBarSearch');


navBarSearchForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const navBarSearchInput = document.querySelector('#navBarSearchInput').value;
    console.log(navBarSearchInput)
});
