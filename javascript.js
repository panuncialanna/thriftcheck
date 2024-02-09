function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Replace the following line with your actual authentication logic
    if (username === 'abc' && password === '123') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('loggedInContent').style.display = 'block';
    } else {
        alert('Incorrect username or password');
    }
}

function logout() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('loggedInContent').style.display = 'none';
}
function updateImage() {
    var selectedImage = document.getElementById("imageOptions").value;
    document.getElementById("displayedImage").sr3c = selectedImage;
  }






function increment() {
    var quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value, 10) + 1;
  }

  function decrement() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value, 10);
    
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  }

  const tongleBtn = document.querySelector('.tongle_btn')
  const tongleBtnIcon = document.querySelector('.tongle_btn i')
  const dropDownMenu = document.querySelector('.dropdown_menu')

  tongleBtn.onclick = function() {
      dropDownMenu.classList.toggle('open')
      const isOpen = dropDownMenu.classList.contains('open')

      tongleBtnIcon.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'

  
  } 
