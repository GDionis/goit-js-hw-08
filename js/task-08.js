const form = document.querySelector(".login-form");

const chekForm = (event) => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
  }

  return form.reset();
};

form.addEventListener("submit", chekForm);
