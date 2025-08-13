// Client-side PDF utilities and helpers
export const downloadFile = (blob: Blob, filename: string) => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};

export const trackDownload = async (type: 'brochure' | 'syllabus', email?: string) => {
  try {
    await fetch('/api/downloads/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, email }),
    });
  } catch (error) {
    console.warn('Failed to track download:', error);
  }
};
