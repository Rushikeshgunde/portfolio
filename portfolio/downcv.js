document.getElementById("downloadButton").addEventListener("click", function() {
    const doc = new jsPDF();
    doc.text("Rushikesh Gunde", 20, 20);
    doc.save("Resume1 update. pdf.pdf");
  });