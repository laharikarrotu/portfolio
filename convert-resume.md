# Resume Conversion Guide

## Current Setup
Your resume is currently in `.docx` format: `public/Resume_LahariKarrotu.docx`

## Recommended: Convert to PDF
For better web compatibility and professional appearance, consider converting to PDF:

### Option 1: Online Conversion
1. Go to [SmallPDF](https://smallpdf.com/word-to-pdf) or [ILovePDF](https://www.ilovepdf.com/word_to_pdf)
2. Upload your `Resume_LahariKarrotu.docx` file
3. Convert to PDF
4. Download and save as `Resume_LahariKarrotu.pdf` in the `public/` folder

### Option 2: Microsoft Word
1. Open your resume in Microsoft Word
2. Go to File → Save As
3. Choose PDF format
4. Save as `Resume_LahariKarrotu.pdf` in the `public/` folder

### Option 3: Google Docs
1. Upload your .docx to Google Docs
2. File → Download → PDF Document
3. Save as `Resume_LahariKarrotu.pdf` in the `public/` folder

## After Converting to PDF
If you convert to PDF, update these files:

### Update src/app/page.tsx
```typescript
href="/Resume_LahariKarrotu.pdf"
download="Lahari_Karrotu_Full_Stack_AI_Engineer_Resume.pdf"
```

### Update src/components/VoiceAssistant.tsx
```typescript
window.open('/Resume_LahariKarrotu.pdf', '_blank');
```

## Benefits of PDF Format
✅ **Universal Compatibility**: Works on all devices and browsers  
✅ **Professional Appearance**: Maintains formatting across platforms  
✅ **Better Security**: Harder to edit accidentally  
✅ **Smaller File Size**: Often more compressed than .docx  
✅ **Industry Standard**: Most employers prefer PDF resumes  

## Current Status
✅ Resume file is properly linked in the portfolio  
✅ Download button works correctly  
✅ Voice assistant can access the resume  
✅ File is in the correct public directory 