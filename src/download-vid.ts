// @ts-nocheck

(async function () {
  // Select the first 10 anchor elements with the specified class
  const anchors = Array.from(
    document.querySelectorAll(".item-fancybox-item.item-link")
  ).slice(0, 10);

  // Helper function to download a video
  const downloadVideo = async (url, index) => {
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`Network response was not ok for ${url}`);
      const blob = await response.blob();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `video${index + 1}.mp4`; // You can customize the filename as needed
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error(`Error downloading video at index ${index}:`, error);
    }
  };

  // Iterate over the selected anchors and download the videos
  for (let index = 0; index < anchors.length; index++) {
    const url = anchors[index].href;
    await downloadVideo(url, index);
  }

  // Show success alert when all downloads are complete
  alert("All videos have been downloaded successfully!");
})();
