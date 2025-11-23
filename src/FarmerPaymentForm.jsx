import { useState } from "react";
import axios from "axios";

export default function FarmerPaymentForm() {
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    // ✅ 1. Validate mobile number (exactly 10 digits)
    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // ✅ 2. Validate amount (must be exactly 200)
    if (Number(amount) !== 200) {
      alert("Instruction Fee is ₹200 only. Please enter exact amount: 200");
      return;
    }

    try {
      // 3. Create backend request
      const farmerRes = await axios.post("http://localhost:8888/payment/request", {
        mobile: mobile,
        amount: amount
      });

      const requestId = farmerRes.data.requestId;

      // 4. Create Razorpay order
      const orderRes = await axios.get(
        `http://localhost:8888/payment/create/${requestId}`
      );
      const orderData = orderRes.data;

      const options = {
        key: orderData.keyId,
        amount: orderData.amount * 100,
        currency: "INR",
        name: "Soil Testing Payment",
        description: "Instruction Fee",
        order_id: orderData.orderId,

      handler: async function (response) {
  await axios.post(
    `http://localhost:8888/payment/verify?orderId=${response.razorpay_order_id}&paymentId=${response.razorpay_payment_id}&signature=${response.razorpay_signature}&requestId=${requestId}`
  );


          alert("Payment Successful!");
          window.location.href = "/payment-success";
        },

        prefill: { contact: mobile },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.log(err);
      alert("Backend not running!");
    }
  };

  return (
    <div style={{ width: "350px", margin: "40px auto", padding: "20px" }}>
      <h2>Farmer Payment</h2>

      <input
        type="text"
        placeholder="Mobile Number"
        maxLength={10}   // prevents typing more than 10 digits
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        type="number"
        placeholder="Amount (₹200 Instruction Fee)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <button
        onClick={handlePayment}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "8px",
        }}
      >
        Pay Now
      </button>
    </div>
  );
}
