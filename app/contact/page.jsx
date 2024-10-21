"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "980-222-4230" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "amanwaghchoure2004@gmail.com",
  },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Charlotte NC" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Message sent successfully!");
      } else {
        setSuccess("Error sending message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccess("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-2"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-9 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I am excited to work with you. Please fill out the form below.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Firstname"
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Lastname"
                />
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Email Address"
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Phone number"
                />
              </div>
              {/* select */}
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Mobile Development">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="Full Stack Engineer">
                      Full Stack Engineer
                    </SelectItem>
                    <SelectItem value="Backend Engineer">
                      Backend Engineer
                    </SelectItem>
                    <SelectItem value="Frontend Engineer">
                      Frontend Engineer
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="h-[175px]"
                placeholder="Type your message here."
              />
              {/* btn */}
              <Button
                size="md"
                className="max-w-40"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send message"}
              </Button>
              {success && <p>{success}</p>}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-4 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
