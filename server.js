const express = require('express');
const pdf = require('pdfkit');
const fs = require('fs');

const app = express();
const port = 8080;

app.use(express.json());

app.post('/donate', (req, res) => {
  const { amount, name, email } = req.body;

  // For simplicity, assume a successful donation
  const donationDetails = {
    amount,
    name,
    email,
  };

  // Generate a PDF certificate
  generateCertificate(donationDetails);

  // Send a response to the client
  res.json({ success: true, message: 'Donation successful. Certificate generated.' });
});

function generateCertificate(donationDetails) {
  const doc = new pdf();
  const fileName = `certificate_${Date.now()}.pdf`;
  const filePath = `./certificates/${fileName}`;

  doc.pipe(fs.createWriteStream(filePath));

  // Customize the certificate content
  doc.font('Helvetica-Bold').fontSize(24).text('Certificate of Appreciation', { align: 'center' });
  doc.moveDown();
  doc.fontSize(16).text(`This is to certify that`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(20).text(`${donationDetails.name}`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(16).text(`has generously donated $${donationDetails.amount} to our wildlife charity.`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(16).text(`We sincerely appreciate your support.`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text(`Date: ${new Date().toLocaleDateString()}`, { align: 'right' });

  doc.end();

  console.log(`Certificate generated: ${fileName}`);
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
