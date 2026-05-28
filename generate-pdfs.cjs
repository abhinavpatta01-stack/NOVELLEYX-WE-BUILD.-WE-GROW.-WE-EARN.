const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function createPdf(filename, title, docRef, contentBlocks, bulletBlocks, footerText) {
  // Create PDF with margins that guarantee everything fits on one A4 page
  const doc = new PDFDocument({ size: 'A4', margin: 40 });
  const outputPath = path.join('public', filename);
  const stream = fs.createWriteStream(outputPath);
  
  doc.pipe(stream);
  
  // Header
  doc.fillColor('#D4AF37')
     .font('Helvetica-Bold')
     .fontSize(22)
     .text('NOVELLEYX', { characterSpacing: 1.5 });
     
  doc.fillColor('#666666')
     .font('Helvetica')
     .fontSize(8)
     .text('LUXURY DIGITAL STUDIO | WE BUILD. WE GROW. WE EARN.', { characterSpacing: 0.5 });
     
  doc.moveDown(0.5);
  
  // Draw gold divider line
  doc.strokeColor('#D4AF37')
     .lineWidth(1.5)
     .moveTo(40, doc.y)
     .lineTo(555, doc.y)
     .stroke();
     
  doc.moveDown(1.5);
  
  // Document Title
  doc.fillColor('#000000')
     .font('Helvetica-Bold')
     .fontSize(18)
     .text(title, { align: 'left' });
     
  doc.fillColor('#888888')
     .font('Helvetica-Oblique')
     .fontSize(8.5)
     .text(`Effective Date: May 2026 | Document Ref: ${docRef}`, { align: 'left' });
     
  doc.moveDown(1.2);
  
  // Intro Text
  doc.fillColor('#333333')
     .font('Helvetica')
     .fontSize(9.5)
     .text(contentBlocks.intro, { align: 'justify', lineGap: 3.5 });
     
  doc.moveDown(1.2);
  
  // Sections
  const sections = ['1', '2', '3', '4'];
  sections.forEach((num, index) => {
    // Section Title
    doc.fillColor('#D4AF37')
       .font('Helvetica-Bold')
       .fontSize(11)
       .text(`${num}. ${contentBlocks[`sec${num}Title`]}`);
       
    doc.moveDown(0.3);
    
    // Section Description
    doc.fillColor('#444444')
       .font('Helvetica')
       .fontSize(9.5)
       .text(contentBlocks[`sec${num}Desc`], { align: 'justify', lineGap: 3 });
       
    doc.moveDown(0.6);
    
    // Check if there are bullets for this section
    if (bulletBlocks[num]) {
      bulletBlocks[num].forEach(bullet => {
        // Bullet Point
        doc.fillColor('#444444')
           .font('Helvetica-Bold')
           .fontSize(9)
           .text('  • ', { continued: true })
           .fillColor('#444444')
           .font('Helvetica-Bold')
           .text(bullet.boldText + ': ', { continued: true })
           .font('Helvetica')
           .text(bullet.normalText, { lineGap: 2.5 });
           
        doc.moveDown(0.3);
      });
      doc.moveDown(0.4);
    }
  });
  
  // Footer Positioning (ensure it is placed at the bottom of page 1)
  doc.y = 770;
  
  // Footer line
  doc.strokeColor('#e5e5e5')
     .lineWidth(0.5)
     .moveTo(40, doc.y)
     .lineTo(555, doc.y)
     .stroke();
     
  doc.moveDown(0.5);
  
  doc.fillColor('#999999')
     .font('Helvetica')
     .fontSize(8)
     .text(footerText, { align: 'center' });
     
  // End document
  doc.end();
  
  return new Promise((resolve) => {
    stream.on('finish', () => resolve(outputPath));
  });
}

async function generateAll() {
  const privacyData = {
    intro: 'At NovelleyX, we operate on a model of absolute clarity, trust, and premium security. This Privacy Policy details how our digital studio collects, manages, and secures data across all custom websites, personal branding ecosystems, and strategic business automation solutions developed by our team.',
    sec1Title: 'Strategic Data Collection',
    sec1Desc: 'We collect minimal, highly structured operational data necessary to perform our elite development, marketing, and SEO operations. This includes contact parameters, business objectives, branding preferences, and technical integrations submitted through our Client Audit systems.',
    sec2Title: 'Premium Client Protection',
    sec2Desc: 'All databases, hosting environments, and CRM automation channels engineered by NovelleyX employ top-tier industrial security standards. We protect client IP and personal data with:',
    sec3Title: 'Client Autonomy',
    sec3Desc: 'As an elite brand or high-performing developer utilizing our systems, you retain full rights over your data. You may request the export, modification, or complete deletion of your files from our studio databases at any point.',
    sec4Title: 'Contact Strategy',
    sec4Desc: 'For inquiries regarding our security audits, data encryption protocols, or server logs, reach out directly to our systems administrator at novelleyx@gmail.com.'
  };

  const privacyBullets = {
    '2': [
      { boldText: 'Military-Grade Encryption', normalText: 'All contact information and API parameters are encrypted in transit and at rest.' },
      { boldText: 'Secure Infrastructure', normalText: 'We host systems on enterprise-grade cloud networks (AWS/Vercel/Firebase) with active firewall rules.' },
      { boldText: 'Zero Third-Party Leaks', normalText: 'Your strategic insights and lead information are never sold, traded, or shared.' }
    ]
  };

  const termsData = {
    intro: 'Welcome to NovelleyX. By engaging our luxury digital studio, subscribing to our flat-rate career pipelines, or utilizing our custom AI integrations, you agree to comply with the following structural Terms of Service.',
    sec1Title: 'Service Parameters & Flat-Rate Delivery',
    sec1Desc: 'NovelleyX offers high-performance development, custom branding, and marketing automation. Our flat-rate monthly plans (Identity Inflow, Velocity Engine, Enterprise Dominance) operate under structured delivery SLAs:',
    sec2Title: 'Full Intellectual Property Ownership',
    sec2Desc: 'Upon payment completion, all custom source code, graphics, branding guides, and database structures built by NovelleyX belong 100% to you. We retain no licensing fees or residual claims.',
    sec3Title: 'Client Commitments',
    sec3Desc: 'To maintain our elite development velocity, clients agree to provide necessary assets (copy, branding assets, API keys) in a timely manner. NovelleyX is not liable for project delays caused by client asset latency.',
    sec4Title: 'Strategic Consultation',
    sec4Desc: 'Any custom strategy blueprints, AI prompts, and organic SEO roadmaps delivered during our engagements are proprietary systems designed for your exclusive market dominance.'
  };

  const termsBullets = {
    '1': [
      { boldText: 'Rapid Turnaround', normalText: 'Tasks submitted in your queue are processed within 24 to 48 hours depending on your tier.' },
      { boldText: 'Unlimited Revisions', normalText: 'We iterate on design mocks and code parameters until your exact specifications are achieved.' },
      { boldText: 'Flexible Pause/Cancel', normalText: 'Subscriptions can be cancelled or paused at the end of any billing cycle with zero friction.' }
    ]
  };

  const footer = '© 2026 NovelleyX Studio. All rights reserved. Confidential & Proprietary.';

  console.log('Generating Privacy Policy PDF...');
  const p1 = await createPdf('privacy-policy.pdf', 'PRIVACY POLICY', 'NVX-PRI-2026-V1', privacyData, privacyBullets, footer);
  console.log(`Saved to: ${p1}`);
  
  console.log('Generating Terms of Service PDF...');
  const p2 = await createPdf('terms-of-service.pdf', 'TERMS OF SERVICE', 'NVX-TER-2026-V1', termsData, termsBullets, footer);
  console.log(`Saved to: ${p2}`);
  
  console.log('PDF generation complete.');
}

generateAll().catch(err => {
  console.error('Error generating PDFs:', err);
  process.exit(1);
});
