"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PriceComponent from "@/components/pricing-list";
import * as z from "zod";


const user = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().length(10,{message:"Phone number must be 10 digits long "}),
  type: z.enum(["Premium", "Standard"]),
})


export default function TicketsPage() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Premium",
  });

  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleTypeChange = (value: string) => {
    setFormData({
      ...formData,
      type: value,
    });
  };

  const sendOTP = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(JSON.stringify(formData));
      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error(
          "Server error: Received invalid response. Please try again later."
        );
      }
      console.log(data);
      if (!response.ok) {
        throw new Error(data.error || "Failed to send OTP");
      }
      setShowOtpInput(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/send-otp", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email, otp }),
      });
      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error(
          "Server error: Received invalid response. Please try again later."
        );
      }
      if (!response.ok) {
        throw new Error(data.error || "Failed to verify OTP");
      }
      localStorage.setItem("userType", formData.type);
      localStorage.setItem("userEmail", formData.email);
      router.push("/price");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to verify OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const result = user.safeParse(formData);
    if (!result.success) {
      setError(
        result.error?.issues.map((issue) => issue?.message).join(", ")
      );
      return;
    }
  
    if (!showOtpInput) {
      await sendOTP();
    } else {
      await verifyOTP();
    }
    
  };
  

  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full bg-black text-white ">
      <h1 className="text-3xl sm:text-5xl font-bold text-red-500 text-center mb-3 mt-30 md:mt-52">
          Ticket Registration
        </h1>
      <div>
        {! showOtpInput && (<PriceComponent />)}
      </div>
      <div className="w-full px-4 sm:px-6 md:px-0 max-w-3xl mb-60">
        

        <form onSubmit={handleSubmit} className="space-y-6 ">
          {!showOtpInput ? (
            <>
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-black border-gray-700 text-white md:h-12 w-full"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-black border-gray-700 text-white md:h-12 w-full"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-black border-gray-700 text-white md:h-12 w-full"
                />
              </div>

              {/* Type */}
              <div className="space-y-2">
                <label htmlFor="type" className="block text-sm font-medium">
                  Type
                </label>
                <Select defaultValue="Premium" onValueChange={handleTypeChange}>
                  <SelectTrigger className="bg-black border-gray-700 text-white md:h-12 w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Premium">Premium</SelectItem>
                    <SelectItem value="Standard">Standard (only for students )</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          ) : (
            // OTP input
            <div className="space-y-2">
              <label htmlFor="otp" className="block text-sm font-medium">
                Enter Verification Code
              </label>
              <Input
                id="otp"
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit code"
                maxLength={6}
                className="bg-black border-gray-700 text-white w-full"
              />
            </div>
          )}

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-ted-red hover:bg-red-600 text-white md:py-7 md:mt-4"
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : showOtpInput
              ? "Verify & Continue"
              : "Send Verification Code"}
          </Button>
        </form>
      </div>
    </div>
  );
}
