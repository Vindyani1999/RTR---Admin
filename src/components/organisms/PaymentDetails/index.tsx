import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Divider } from "@mui/material";
import Summary from "../../molecules/Summery"; // Import the summary component
import { FormData } from "../../organisms/PersonalDetailsForm";
import { jsPDF } from "jspdf";
import logo from "../../../assets/icons/Logo/logo.png";
import { paymentOptions } from "../../../constants/stringConstants";
import { tableTypeMapping } from "../../../constants/stringConstants";
import ConfirmationDialogPopup from "../../atoms/ConfirmationDialogPopup";
import CustomButton from "../../atoms/CustomButton";

// Interface for payment details
interface PaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface PaymentPageProps {
  selectedDate: string | null;
  startTime: string | null;
  endTime: string | null;
  personalDetails: FormData;
  selectedTable: any;
  selectedMenuItems: any[];
  handleNextStep: () => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({
  selectedDate,
  startTime,
  endTime,
  personalDetails,
  selectedTable,
  selectedMenuItems,
  handleNextStep,
}) => {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentSubmit = (selectedPaymentOption: string) => {
    if (selectedPaymentOption === "payByCard") {
      if (!paymentDetails.cardNumber || paymentDetails.cardNumber.length < 16) {
        alert("Please enter a valid 16-digit card number.");
        return;
      }
      if (!paymentDetails.expiryDate) {
        alert("Please enter an expiry date.");
        return;
      }
      if (!paymentDetails.cvv || paymentDetails.cvv.length !== 3) {
        alert("Please enter a valid 3-digit CVV.");
        return;
      }
    }

    // Proceed with PDF generation if Pay Later
    if (selectedPaymentOption === "payLater") {
      handleOpenDialog(); // Show confirmation dialog for Pay Later
    }
  };

  // Generate PDF
  const getBase64ImageFromUrl = async (imageUrl: string) => {
    const res = await fetch(imageUrl);
    const blob = await res.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  };

  const handleGeneratePdf = async () => {
    const doc = new jsPDF();

    // Convert the logo to Base64
    const logoBase64 = (await getBase64ImageFromUrl(logo)) as string;
    doc.addImage(logoBase64, "PNG", 20, 15, 45, 20);

    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Table Reservation Receipt", 185, 28, { align: "right" });

    doc.setLineWidth(0.5);
    doc.line(20, 40, 190, 40);

    const text1 = "Table NO";
    const text2 = `${selectedTable.id || "N/A"}`;

    const x = 40;
    const y1 = 55;
    const y2 = y1 + 10;

    const textWidth = Math.max(
      doc.getTextWidth(text1),
      doc.getTextWidth(text2)
    );
    const padding = 5;

    const reducedHeight = y2 - y1 + 12;

    doc.rect(x - padding, y1 - 8, textWidth + padding * 2, reducedHeight);

    const centerX = x - padding + (textWidth + padding * 2) / 2;
    doc.text(text1, centerX, y1, { align: "center" });
    doc.text(text2, centerX, y2, { align: "center" });

    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text(`Date: ${selectedDate || "N/A"}`, 100, 55);
    doc.text(`Time: ${startTime} - ${endTime}`, 100, 65);

    doc.setFontSize(14);
    doc.text("Booking Details", 20, 85);
    doc.setLineWidth(0.2);
    doc.line(20, 87, 190, 87);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(
      `Name: ${personalDetails.firstName} ${personalDetails.lastName}`,
      20,
      95
    );
    doc.text(`Phone: ${personalDetails.phoneNumber}`, 20, 105);
    doc.text(
      `Number of People: ${personalDetails.numberOfPeople || "N/A"}`,
      20,
      115
    );
    doc.text(
      `Table Type: ${
        tableTypeMapping[selectedTable.type as keyof typeof tableTypeMapping] ||
        "N/A"
      }`,
      20,
      125
    );
    doc.text(`Table Price: Rs.${selectedTable.price}.00`, 20, 135);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Food Items", 20, 145);
    doc.setLineWidth(0.2);
    doc.line(20, 147, 190, 147);

    let yPosition = 155;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    selectedMenuItems.forEach((item) => {
      doc.text(
        `${item.name} (x${item.quantity}): Rs.${item.price * item.quantity}.00`,
        20,
        yPosition
      );
      yPosition += 10;
    });

    const totalCost =
      selectedTable.price +
      selectedMenuItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

    // Check if payment is "Pay Later" and apply 5% additional charge
    let finalTotalCost = totalCost;
    const paymentOption = paymentOptions[0].value;
    if (paymentOption === paymentOptions[0].value) {
      finalTotalCost += totalCost * 0.1;
    }

    const totalCostText = `Total Cost: Rs.${totalCost}.00`;
    const finalTotalCostText = `Final Amount: Rs.${finalTotalCost.toFixed(2)}`;
    const totalCostWidth = doc.getTextWidth(totalCostText);
    const finalTotalCostWidth = doc.getTextWidth(finalTotalCostText);

    doc.setFont("helvetica", "normal");
    doc.setFillColor(230, 230, 230);
    doc.rect(18, yPosition + 10, totalCostWidth + 10, 12, "F");
    doc.text(totalCostText, 20, yPosition + 18);

    doc.text("x 10% (Pay Later)", 75, yPosition + 18);
    doc.setFont("helvetica", "bold");
    doc.setFillColor(230, 230, 230);
    doc.rect(18, yPosition + 25, finalTotalCostWidth + 10, 12, "F");
    doc.text(finalTotalCostText, 20, yPosition + 33);

    doc.setFont("helvetica", "normal");
    doc.text("Please carry this receipt when coming.", 20, yPosition + 45);

    doc.save("Booking_Summary.pdf");
  };

  const handleDialogConfirm = async () => {
    setIsDialogOpen(false);
    await handleGeneratePdf(); // Wait for the PDF generation to complete
    handleNextStep();
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };
  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        maxHeight: "50vh",
      }}
    >
      <Grid container>
        {/* Left side - Summary */}
        <Grid item sx={{ flexBasis: "28%", mr: 4 }}>
          <Summary
            selectedDate={selectedDate}
            startTime={startTime}
            endTime={endTime}
            personalDetails={personalDetails}
            selectedTable={selectedTable}
            selectedMenuItems={selectedMenuItems}
          />
        </Grid>

        <Grid item sx={{ flexBasis: "33%" }}>
          {/* Pay Later Option */}
          <Box sx={{ mb: 4, bgcolor: "#d4d3d3", p: 3, mt: 7 }}>
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                top: "34%",
                bgcolor: "#d4d3d3",
                left: "34%",
                px: 0.4,
              }}
            >
              Pay Later
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: "100%",
                borderColor: "black",
                borderWidth: "1px",
                mt: 1,
              }}
            />

            <Typography sx={{ mb: 2, mt: 5 }}>
              Choosing the Pay Later option will incur an additional 10% charge
              for your reservation. Please bring the downloaded receipt when you
              visit.
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <CustomButton label="Confirm" onClick={handleOpenDialog} />
            </Box>
          </Box>

          {/* Pay by Card Option */}
        </Grid>
        <Grid item sx={{ flexBasis: "2%", textAlign: "cenetr", ml: 2 }}>
          <Box sx={{ alignItems: "center", mt: 11 }}>Or</Box>
        </Grid>
        <Grid item sx={{ flexBasis: "33%" }}>
          <Box sx={{ bgcolor: "#d4d3d3", p: 3, mt: 7 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                position: "absolute",
                top: "34%",
                bgcolor: "#d4d3d3",
                right: "24%",
                px: 0.4,
              }}
            >
              Pay by Card
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: "100%",
                borderColor: "black",
                borderWidth: "1px",
                mt: 1,
              }}
            />
            <Box
              component="form"
              onSubmit={() => handlePaymentSubmit("payByCard")}
              noValidate
              sx={{ pt: 4 }}
            >
              <TextField
                label="Card Number"
                name="cardNumber"
                type="text"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentChange}
                fullWidth
                margin="normal"
                required
                inputProps={{ maxLength: 16 }}
              />

              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Expiry Date (MM/YY)"
                    name="expiryDate"
                    type="text"
                    value={paymentDetails.expiryDate}
                    onChange={handlePaymentChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="CVV"
                    name="cvv"
                    type="password"
                    value={paymentDetails.cvv}
                    onChange={handlePaymentChange}
                    fullWidth
                    margin="normal"
                    required
                    inputProps={{ maxLength: 3 }}
                  />
                </Grid>
              </Grid>

              <Box sx={{ textAlign: "center", mt: 4 }}>
                <CustomButton
                  label="Pay Now"
                  onClick={() => handlePaymentSubmit(paymentOptions[1].value)}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <ConfirmationDialogPopup
        text="Are you sure you want to pay later? It will be charged extra 10% on the total amount."
        label="Ok"
        isDialogOpen={isDialogOpen}
        handleDialogCancel={() => setIsDialogOpen(false)}
        handleDialogConfirm={handleDialogConfirm}
      />
    </Box>
  );
};

export default PaymentPage;
