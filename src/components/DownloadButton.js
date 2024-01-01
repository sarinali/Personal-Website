import React from 'react';



function DownloadButton() {
    const handleDownload = () => {
        // Create a new anchor element
        const link = document.createElement('a');
    
        // Set the href attribute to the file you want to download
        link.href = '/assets/projects_assets/computersystem/data_path_imm.zip';
    
        // Set the download attribute with the desired filename
        link.download = 'data_path.zip';
    
        // Simulate a click event to trigger the download
        link.click();
      };
  
    return (
      <button onClick={handleDownload}>Download File</button>
    );
  }
  
  export default DownloadButton;  