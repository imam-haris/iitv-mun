import React, { useEffect, useState } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import qr from "../assets/QR-Code.jpg";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
const SUPABASE_URL = "https://oauanxichcsmshpzhfdb.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hdWFueGljaGNzbXNocHpoZmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwMjU3NTEsImV4cCI6MjA3NTYwMTc1MX0.6Q6deCwHsaVIXkQtru1TGa_Q8npLHec5PWa4Zrn31qE";

const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

interface PaymentRecord {
  name: string;
  email: string;
  phone: string;
  category: string;
  amount: number;
  screenshot_url: string;
}

const Payment: React.FC = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const userEmail = localStorage.getItem("userEmail");
    if(!userEmail){
      alert("Please log in to access the payment portal.");
      window.location.href = "/";
    }
  }, [navigate])

  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<number | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const categories: Record<string, number> = {
    outsider: 1799,
    bhu: 1200,
    iit: 700,
  };

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = e.target.value;
    setCategory(value);
    setAmount(categories[value]);
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file || !amount) {
      setMessage("⚠️ Please select a category and upload a payment screenshot.");
      return;
    }

    try {
      setUploading(true);

      const fileName = `${Date.now()}_${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("payment_screenshots")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const imageUrl = `${SUPABASE_URL}/storage/v1/object/public/payment_screenshots/${fileName}`;

      const paymentData: PaymentRecord = {
        name: localStorage.getItem("userName") || "Anonymous",
        email: localStorage.getItem("userEmail") || "Unknown",
        phone: localStorage.getItem("userPhone") || "N/A",
        category,
        amount,
        screenshot_url: imageUrl,
      };

      const { error: dbError } = await supabase
        .from("payments")
        .insert([paymentData]);

      if (dbError) throw dbError;

      setMessage("✅ Payment record saved successfully!");
      setCategory("");
      setAmount(null);
      setFile(null);
    } catch (error: any) {
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };
const upiURL = `upi://pay?pa=42373833491@sbi&pn=MUN&am=${amount}&cu=INR`;
  return (
    <section className="min-h-screen bg-[#1f073c] text-white flex flex-col items-center justify-center p-6">
      <h1 className="mt-10 text-4xl font-bold mb-6">Payment Portal</h1>

      <form
        onSubmit={handleUpload}
        className="bg-white/10 p-6 rounded-2xl w-full max-w-md backdrop-blur-md border border-purple-500/30"
      >
        <label className="block mb-3 text-purple-200 font-medium">
          Select Category
        </label>

        <select
          value={category}
          onChange={handleCategoryChange}
          className="w-full p-2 rounded-lg text-black mb-4"
        >
          <option value="">-- Choose --</option>
          <option value="outsider">Outsider (₹1799)</option>
          <option value="bhu">BHU Student (₹1200)</option>
          <option value="iit">IIT BHU Student (₹700)</option>
        </select>

        {amount && (
          <div className="relative flex flex-col items-center mb-4">
            <QRCode 
            value={upiURL}
             size={150}
              fgColor="#fff"
              bgColor="#1f073c"
             />

            <p className="mt-5 text-purple-300 text-center">
              Scan to pay ₹{amount} via UPI
            </p>
          </div>
        )}


        <label className="block mb-2 text-purple-200 font-medium">
          Upload Screenshot
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mb-4 w-full"
        />

        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-gradient-to-r from-purple-500 via-fuchsia-600 to-indigo-600 py-2 rounded-lg font-semibold hover:scale-105 transition-all"
        >
          {uploading ? "Uploading..." : "Submit Payment"}
        </button>

        {message && (
          <p className="mt-4 text-center text-purple-200">{message}</p>
        )}

      </form>
    </section>
  );
};

export default Payment;
