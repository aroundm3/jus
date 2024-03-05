import * as Yup from 'yup';

export const validationSchema = () => {
  const stringRequired = Yup.string().nullable().required(`required!`);

  const phoneRegex = new RegExp(/(\+84|84|0)([3|5|7|8|9])([0-9]{8})\b/);

  const specialCharIgnore = stringRequired.matches(
    /^[^*|\":<>[\]{}`\\()';@&$\+\-\=\#\!\%\^\~]+$/,
    `not accepted special character`
  );
  const validationPhone = stringRequired.matches(
    phoneRegex,
    `phone number invalid`
  );

  const validateProfileSubmition = Yup.object().shape({
    name: specialCharIgnore,
    bankAccount: specialCharIgnore,
    bankName: stringRequired,
    phoneNumber: validationPhone,
  });

  return {
    validateProfileSubmition,
  };
};
