import QRCodeSVG from "qrcode-svg";
import { handleDownload } from "./fileUtils";

export const generateQrCode = async (helmId) => {
  const url = window.location.origin + "/form?helmetId=" + helmId;
  console.log(url);

  try {
    // Convert to SVG
    const qr = new QRCodeSVG({
      content: url,
      width: 100,
      height: 100,
      padding: 2,
      color: "#000000",
      background: "#ffffff",
      ecl: "M",
    });

    const svgString = qr.svg();

    // Create a Blob with the SVG content
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const dataUrl = URL.createObjectURL(blob);

    // Download the SVG file
    handleDownload("HIGS_ID_" + helmId + ".svg", dataUrl);

    // Clean up the object URL
    URL.revokeObjectURL(dataUrl);
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
};