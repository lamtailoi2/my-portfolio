"use client";
import { useState } from "react";
import { Button } from "../button";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { Label } from "../label";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-primary-foreground">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-gray-700 text-primary-foreground border-gray-600 focus:border-primary"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-primary-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-gray-700 text-primary-foreground border-gray-600 focus:border-primary"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-primary-foreground">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-[150px] bg-gray-700 text-primary-foreground border-gray-600 focus:border-primary"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
      >
        Send Message
      </Button>
    </form>
  );
};
