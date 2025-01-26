interface EmailData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  export const sendEmail = async (formData: EmailData): Promise<void> => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };