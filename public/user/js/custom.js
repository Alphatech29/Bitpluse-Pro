
//This code toggle the vtu tab and body
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.VtuTab .buydata');
    const tabContents = document.querySelectorAll('.vtu-body');

    tabButtons[0].classList.add('active');
    tabContents[0].classList.add('active');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            tabContent.classList.add('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.form-check-input');
  
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
          uncheckOtherCheckboxes(checkbox);
        }
      });
    });
  
    function uncheckOtherCheckboxes(checkedCheckbox) {
      checkboxes.forEach(function (checkbox) {
        if (checkbox !== checkedCheckbox) {
          checkbox.checked = false;
        }
      });
    }
  });



 // main.js

document.getElementById('upload').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const files = event.target.files;
    const fileList = document.getElementById('show-file');

    fileList.innerHTML = ""; // Clear previous entries

    for (let i = 0; i < files.length; i++) {
        const listItem = document.createElement('div');
        listItem.textContent = `${i + 1}. ${files[i].name}`;
        fileList.appendChild(listItem);
    }
}
