function handleSubmit() {
  //Get the value of the email input and convert it to lowercase
  const emailValue = document.getElementById('email').value.toLocaleLowerCase();

  //Get the element for displaying the error message
  const errorEmail = document.getElementById('error-email');

  // The condition is a valid mail.
  const checkMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  //Use match to check the entered email
  const check = emailValue.match(checkMail);

  // Get the container element for user information
  const sectionContent = document.querySelector('#personal-info .personal-content');

  // Check the validate email address.
  const submitControl = document.querySelector('.submit-email');
  if (check) {
    sectionContent.style.display = 'block';
    submitControl.style.display = 'none';
  } else {
    errorEmail.innerHTML = 'Vui lòng nhập đúng email.';
  }
}
// FUNCTION SHOW/HIDE JOB-ITEMS

function handleOnMouseOver(element) {
  const viewMore = element.querySelector('.btn-view');

  if (viewMore) {
    viewMore.style.display = 'block';
    element.classList.add('hover');
  }
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector('.btn-view');
  if (viewMore) {
    viewMore.style.display = 'none';
    element.classList.remove('hover');
  }
}

function handleViewMore(element) {
  const parentElement = element.closest('.parent');
  const jobhide = parentElement.querySelector('.job-hide');
  let viewMore = parentElement.querySelector('.btn-view');

  if (jobhide.style.display === 'block') {
    viewMore.innerHTML = 'View more';
    jobhide.style.display = 'none';
  } else {
    jobhide.style.display = 'block';
    viewMore.innerHTML = 'View less';
  }
}
