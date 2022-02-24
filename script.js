const button = document.getElementById("button")
const inputs = document.querySelectorAll('.input__name')
const regexp = {
  firstName: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
  lastName: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
  patronymic: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
  email: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
}

button.onclick = () => {
  event.preventDefault()
  const inputsState = [
    {
      value: inputs[0].value,
      isValid: false
    },
    {
      value: inputs[1].value,
      isValid: false,
    },
    {
      value: inputs[2].value,
      isValid: false,
    },
    {
      value: inputs[3].value,
      isValid: false,
    },
    {
      value: inputs[4].value,
      isValid: false,
    },
    {
      value: inputs[5].value,
      isValid: false,
    },
    {
      value: inputs[6].value,
      isValid: false,
    }

  ]
  let counter = 0

  inputsState.map((input, index) => {
    switch (inputs[index].name){
      case 'firstName':
      case 'lastName':
      case 'patronymic':
      case 'email':
      case 'password':
        if (input.value.match(regexp[inputs[index].name])) {
          inputs[index].classList.remove("error")
          input.isValid = true
        } else {
          inputs[index].classList.add("error")
          input.isValid = false
        }
        break

      case 'true__email':
      case 'true__password':
        if (inputs[index].value === inputs[index - 1].value) {
          inputs[index].classList.remove("error")
          input.isValid = true
          index++
        } else {
          inputs[index].classList.add("error")
          input.isValid = false
        }
        break
    }
  })

  inputsState.map((value) => value.isValid && counter++)
  counter === 7 && console.log(inputsState)

}
