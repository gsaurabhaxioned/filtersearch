let image_content = document.querySelectorAll('.image-content'),
    search = document.querySelector('.search'),
    cake_title = document.querySelectorAll('.cake-title');
search.addEventListener('keyup', function () {
    let search_title = document.querySelector('.search').value.toUpperCase();
    cake_title.forEach((i, index) => {
        if (i.innerHTML.toUpperCase().indexOf(search_title) > -1) {
            image_content[index].style.display = "block";
        } else {
            image_content[index].style.display = "none";
        }
    })
})