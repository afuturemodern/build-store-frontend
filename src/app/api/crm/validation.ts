import { NextRequest } from 'next/server';

export interface ContactData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors?: string[];
  data?: ContactData;
}

export async function validateContactRequest(request: NextRequest): Promise<ValidationResult> {
  try {
    const body = await request.json();
    
    if (!body || typeof body !== 'object') {
      return { isValid: false, errors: ['Invalid request body'] };
    }

    const errors: string[] = [];
    
    // Validate required fields
    const requiredFields = ['firstname', 'lastname', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!body[field] || typeof body[field] !== 'string') {
        errors.push(`${field} is required`);
      }
    }
    
    if (errors.length > 0) {
      return { isValid: false, errors };
    }
    
    // Sanitize and validate data
    const data: ContactData = {
      firstname: body.firstname.trim().slice(0, 50),
      lastname: body.lastname.trim().slice(0, 50),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim().replace(/[^\d\+\-\(\)\s]/g, '').slice(0, 20)
    };
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push('Invalid email format');
    }
    
    // Validate phone has at least 10 digits
    const phoneDigits = data.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      errors.push('Phone number must have at least 10 digits');
    }
    
    if (errors.length > 0) {
      return { isValid: false, errors };
    }
    
    return { isValid: true, data };
  } catch (error) {
    return { isValid: false, errors: ['Invalid JSON in request body'] };
  }
}