import z from 'zod';

const phoneNumberRegexp = new RegExp(
  /^[\+]?([0-9][\s]?|[0-9]?|[0-9])([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
);

const passwordRegexp = new RegExp(
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).*$/im
);
const FIELD_REQUIRED_STR = 'This field is required';

export const signUpFormSchema = z.object({
  firstname: z
    .string({
      invalid_type_error: 'Name must be a string',
      required_error: FIELD_REQUIRED_STR,
    })
    .min(1, 'Firstname cannot be empty')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .trim(),

  lastname: z
    .string({
      invalid_type_error: 'Surname must be a string',
      required_error: FIELD_REQUIRED_STR,
    })
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .trim(),

  address: z
    .string({
      invalid_type_error: 'Surname must be a string',
      required_error: FIELD_REQUIRED_STR,
    })
    .min(3, 'Minimum 3 characters')
    .max(100, 'Maximum 100 characters')
    .trim(),

  phone: z
    .string({
      invalid_type_error: 'Phone number must be a number',
      required_error: FIELD_REQUIRED_STR,
    })
    .regex(phoneNumberRegexp, 'Invalid phone number').length(11, {
      message: "Mobile Number must be 11 digits.",
  }),

  email: z
    .string({
      invalid_type_error: 'Email must be a string',
      required_error: FIELD_REQUIRED_STR,
    })
    .email('Email is invalid'),
    password: z.string({
      invalid_type_error: 'Phone number must be a number',
      required_error: FIELD_REQUIRED_STR,
    }).regex(passwordRegexp, "Password is too weak").min(8),
});

export const signInFormSchema = z.object({
  email: z.string({
    invalid_type_error: 'Email must be a string',
    required_error: FIELD_REQUIRED_STR,
  }).email('Email is invalid'),
  password: z.string(),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
export type SignInFormSchema = z.infer<typeof signInFormSchema>;