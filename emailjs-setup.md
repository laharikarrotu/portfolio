# 📧 EmailJS Setup Guide

## 🎯 **How to Set Up EmailJS to Receive Contact Form Messages**

### **Step 1: Create EmailJS Account**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### **Step 2: Add Email Service**
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (`laharikarrotu@gmail.com`)
5. Note down the **Service ID** (e.g., `service_abc123`)

### **Step 3: Create Email Template**
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

Hello Lahari,

You have received a new message from your portfolio website:

**From:** {{from_name}} ({{from_email}})
**Subject:** {{subject}}
**Message:**
{{message}}

---
Sent from your portfolio contact form
```

4. Note down the **Template ID** (e.g., `template_xyz789`)

### **Step 4: Get Your Public Key**
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `user_def456`)

### **Step 5: Update Your Code**
Replace the placeholders in `src/components/EnhancedContactForm.tsx`:

```typescript
// Replace these values:
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // Your actual public key
'YOUR_SERVICE_ID', // Your service ID
'YOUR_TEMPLATE_ID', // Your template ID
```

**Example:**
```typescript
emailjs.init("user_def456");
await emailjs.send('service_abc123', 'template_xyz789', templateParams);
```

### **Step 6: Test the Form**
1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit a test message
4. Check your email (`laharikarrotu@gmail.com`) for the message

---

## 🚀 **Alternative Options**

### **Option 2: Simple Backend API**
If you prefer a backend solution, I can create:
- A simple API route that saves messages to a database
- A dashboard to view all messages
- Email notifications

### **Option 3: Google Forms Integration**
- Create a Google Form
- Embed it in your portfolio
- View responses in Google Sheets

### **Option 4: Netlify Forms**
- If you deploy to Netlify, use their built-in form handling
- Messages appear in your Netlify dashboard

---

## 📱 **View Messages**

Once set up, you'll receive messages in:
- **Your Gmail inbox** (`laharikarrotu@gmail.com`)
- **EmailJS dashboard** (if you check there)
- **Email notifications** on your phone/computer

---

## 🔧 **Troubleshooting**

**Form not sending?**
- Check browser console for errors
- Verify EmailJS keys are correct
- Ensure Gmail service is connected

**Not receiving emails?**
- Check spam folder
- Verify email template is correct
- Test with a different email address

**Need help?**
- EmailJS has great documentation
- Check their troubleshooting guide
- Contact their support if needed

---

## 💡 **Pro Tips**

1. **Free Plan Limits**: EmailJS free plan allows 200 emails/month
2. **Spam Protection**: Add CAPTCHA for production use
3. **Auto-Reply**: Set up auto-reply to confirm message received
4. **Message Storage**: Consider saving messages to a database for backup

Would you like me to help you set up any of these options? 