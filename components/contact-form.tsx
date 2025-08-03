"use client"

// Removed useActionState, useOptimistic, startTransition as they are for Server Actions
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React, { useState } from 'react';
// Removed submitContactForm import
// Removed CheckCircle, Loader2 as they were for optimistic updates/pending state

export function ContactForm() {
  // Removed useActionState and useOptimistic hooks
  // Removed handleSubmit function

  return (
    <Card className="shadow-2xl border" style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}>
      <CardHeader>
        <CardTitle className="text-white">Send us a Message</CardTitle>
        <CardDescription style={{ color: "#D3D3D3" }}>
          Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form action="https://formspree.io/f/manbogll" method="POST" className="space-y-4">
          {" "}
          {/* Updated action and method */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block text-white">First Name</label>
              <Input
                name="firstName"
                placeholder="John"
                required
                className="text-white border focus:ring-1"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block text-white">Last Name</label>
              <Input
                name="lastName"
                placeholder="Doe"
                required
                className="text-white border focus:ring-1"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block text-white">Email</label>
            <Input
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="text-white border focus:ring-1"
              style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block text-white">Mobile Number *</label>
            <Input
              name="mobile"
              type="tel"
              placeholder="9624559599"
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              className="text-white border focus:ring-1"
              style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
            />
            <p className="text-xs mt-1" style={{ color: "#D3D3D3" }}>
              Enter 10-digit mobile number without country code
            </p>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block text-white">Company</label>
            <Input
              name="company"
              placeholder="Your Company"
              className="text-white border focus:ring-1"
              style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block text-white">Message</label>
            <Textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={4}
              required
              className="text-white border focus:ring-1"
              style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
            />
          </div>
          <Button type="submit" className="w-full font-semibold text-black" style={{ backgroundColor: "#D4FF1E" }}>
            Send Message {/* Removed isPending logic */}
          </Button>
        </form>

        {/* Removed optimisticState display as it's no longer applicable with direct Formspree submission */}
      </CardContent>
    </Card>
  )
}