import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "./contactSchema";
import { Field } from "./Field";
import { ArrowRight, Mail, Phone, MessageSquare, User, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "../../components/ui/Button";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid, submitCount },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: { name: "", email: "", phone: "", company: "", subject: "", message: "" },
  });

  const [submitError, setSubmitError] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const msgLen = watch("message")?.length ?? 0;

  async function onSubmit(values) {
    setSubmitError("");
    try {
      await new Promise((r) => setTimeout(r, 800));
      setSubmittedName(values.name);
      reset();
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gray-900 px-8 py-6">
        <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
        <p className="text-gray-300">Fill out the form below and we'll get back to you as soon as possible</p>
      </div>

      <form className="p-8" onSubmit={handleSubmit(onSubmit)} noValidate>
        {isSubmitSuccessful && submittedName && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3 mb-6">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
            <p>Thanks <span className="font-semibold">{submittedName}</span> — your message was sent successfully.</p>
          </div>
        )}
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3 mb-6">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
            <p>{submitError}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Field id="name" label="Full Name*" icon={User} error={errors.name} register={register("name")} inputProps={{ placeholder: "Enter your full name" }} />
          <Field id="email" label="Email Address*" icon={Mail} error={errors.email} register={register("email")} inputProps={{ type: "email", autoComplete: "email", placeholder: "you@example.com" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Field id="phone" label="Phone Number*" icon={Phone} error={errors.phone} register={register("phone")} inputProps={{ type: "tel", autoComplete: "tel", placeholder: "09123456789 or +989123456789" }} />
          <Field id="company" label="Company*" icon={Mail} error={errors.company} register={register("company")} inputProps={{ placeholder: "Your company name" }} />
        </div>

        <div className="mb-8">
          <Field id="subject" label="Subject*" icon={MessageSquare} error={errors.subject} register={register("subject")} inputProps={{ placeholder: "What is your inquiry about?" }} />
        </div>

        <div className="mb-8">
          <Field
            id="message"
            label="Message*"
            textarea
            error={errors.message}
            register={register("message")}
            inputProps={{ placeholder: "Please provide details about your inquiry" }}
            hintRight={
              <>
                <p className={msgLen > 1800 ? "text-sm text-red-600" : "text-sm text-gray-500"}>{msgLen}/2000 characters</p>
                <p className="text-sm text-gray-400">*Required Fields</p>
              </>
            }
          />
        </div>

        <Button type="submit" disabled={isSubmitting || (!isValid && submitCount > 0)} className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-sm">
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          {!isSubmitting && <ArrowRight />}
        </Button>

        <p className="mt-4 text-sm text-gray-500 text-center">By submitting the form, you agree to our privacy policy and terms of service.</p>
      </form>
    </div>
  );
}