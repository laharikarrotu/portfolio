import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID");

export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }
    );
    return response;
  } catch (error) {
    throw new Error('Failed to send email');
  }
};