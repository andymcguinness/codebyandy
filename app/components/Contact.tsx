'use client';

import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [state, handleSubmit] = useForm("xdkzlede");

  if (state.succeeded) {
    return (
      <section className="relative flex bg-mounbatten-pink/20 min-h-screen w-full justify-center">
      <div className="container max-w-screen-xl mx-auto flex flex-col justify-center">
        <h2 className="text-5xl font-bold mb-8 tracking-tight">let&apos;s chat</h2>
         <p className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-lg leading-relaxed space-y-5">thanks for your message! i&apos;ll get back to you as soon as i can.</p>
      </div>
    </section>
    );
  }

  return (
    <section className="relative flex bg-mounbatten-pink/20 min-h-screen w-full justify-center">
      <div className="container max-w-screen-xl mx-auto flex flex-col justify-center">
        <h2 className="text-5xl font-bold mb-8 tracking-tight">let&apos;s chat</h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} 
          onSubmit={handleSubmit} 
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-lg leading-relaxed space-y-5"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-md font-medium">
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-mounbatten-pink rounded-xl bg-white"
              required
            />
            <ValidationError 
              prefix="name" 
              field="name"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-md font-medium">
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-mounbatten-pink rounded-xl bg-white"
              required
            />
            <ValidationError 
              prefix="email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-md font-medium">
              message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-3 border border-mounbatten-pink rounded-xl bg-white"
              required
            />
            <ValidationError 
              prefix="message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="bg-mounbatten-pink text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            disabled={state.submitting}
          >
            send message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
