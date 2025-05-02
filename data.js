document.addEventListener('DOMContentLoaded', () => {
    const fileContainer = document.getElementById('fileContainer');
    const pdfViewer = document.getElementById('pdfViewer');
    const pdfFrame = document.getElementById('pdfFrame');
    const closeViewer = document.getElementById('closeViewer');
  
    // List of PDF files
    const pdfFiles = [
      'document1.pdf',
      'document2.pdf',
      // Add more PDF file names here
    ];
  
    pdfFiles.forEach(file => {
      const box = document.createElement('div');
      box.className = 'file-box';
      box.textContent = file;
      box.addEventListener('dblclick', () => {
        pdfFrame.src = `files/${file}`;
        pdfViewer.style.display = 'flex';
      });
      fileContainer.appendChild(box);
    });
  
    closeViewer.addEventListener('click', () => {
      pdfViewer.style.display = 'none';
      pdfFrame.src = '';
    });
  });
  