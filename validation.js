function validation(form) {
  const formRules = {};

  rules = {
    required: (nameInput, val) => {
      return val ? `Please, enter ${nameInput}` : "Correct!!!";
    },
    pass: (nameInput, val, val2) => {
      return 1;
    },
    min: (nameInput, val, valmin) => {
      return val.length < valmin
        ? `You must enter a least ${valmin} characters!!!`
        : "Correct!!!";
    },
  };
  const formValidation = $(form);
  if (formValidation) {
    const input = formValidation
      .children("div")
      .children(".input__form__login");
    
    
  }
}
