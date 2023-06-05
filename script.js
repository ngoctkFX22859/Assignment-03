function handleSubmit() {
  //Get the value of the email input and convert it to lowercase
  const emailValue = document.getElementById('email').value.toLocaleLowerCase();
  //Get the element for displaying the error message
  const errorEmail = document.getElementById('error-email');
  // The condition is a valid mail.
  const checkMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // console.log('check value email', emailValue);

  //Use match to check the entered email
  const check = emailValue.match(checkMail);
  // console.log('email', check);

  // Get the container element for user information
  const sectionContent = document.querySelector('#personal-info .personal-content');
  // console.log('check section', sectionContent);

  const submitControl = document.querySelector('.submit-email');
  if (check) {
    sectionContent.style.display = 'block';
    submitControl.style.display = 'none';
    errorEmail.innerHTML = '';
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
    viewMore.innerHTML = 'Show less';
    viewMore = parentElement.querySelectorAll('.show-less');
  }
}
