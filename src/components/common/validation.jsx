const validation = (values) => {
  const errors = {};
  // first name
  if (!values.fullname) {
    errors.fullname = 'Name is required    ';
  }
  // last name
  if (!values.lastname) {
    errors.lastname = 'Last Name is required    ';
  }
  // email
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  // Phone number validation
  if (!values.number) {
    errors.number = 'Phone_Number is required    ';
  } else if (values.number.length < 11) {
    errors.number = 'Please Enter the a valid Phone Number';
  }
  // password
  if (!values.password) {
    errors.password = 'ENTER YOUR PASSWORD   ';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be more then 8 characters';
  }

  return errors;
};
export default validation;
