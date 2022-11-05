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
            return val.length < valmin ?
                `You must enter a least ${valmin} characters!!!` :
                "Correct!!!";
        },
    };
    var formValidation = $(form);
    if (formValidation) {
        var input = formValidation.children().children('.input__form__login');
        input.each(function() {
            const rules = $(this).attr('rules').split('|')
            for (var it of rules)
                if (it.toString().includes(':')) {
                    var rulesDetail = it.split(':');
                }
            if (Array.isArray(formRules)) {

            } else {
                // formRules[]
                console.log(it);
            }
        })

    }
}