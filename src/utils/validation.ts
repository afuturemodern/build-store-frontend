export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};

export interface ValidationError {
  field: string;
  message: string;
}

export const validateSignupForm = (data: {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!validateName(data.firstname)) {
    errors.push({ field: 'firstname', message: 'First name must be 2-50 characters' });
  }

  if (!validateName(data.lastname)) {
    errors.push({ field: 'lastname', message: 'Last name must be 2-50 characters' });
  }

  if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  if (!validatePhone(data.phone)) {
    errors.push({ field: 'phone', message: 'Please enter a valid phone number' });
  }

  return errors;
};