import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      setSubmitMessage('Terima kasih! Pesan Anda telah terkirim.');
      reset();
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 2000);
  };

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Hubungi Kami</h1>
          <p className="text-lg text-text-light mt-4 max-w-3xl mx-auto">
            Kami siap membantu. Kirimkan pertanyaan atau mulailah proyek Anda bersama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-xl">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Kirim Pesan</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                label="Nama Lengkap"
                name="fullName"
                register={register}
                rules={{ required: 'Nama lengkap wajib diisi' }}
                error={errors.fullName}
                placeholder="John Doe"
              />
              <FormInput
                label="Alamat Email"
                name="email"
                type="email"
                register={register}
                rules={{ required: 'Email wajib diisi', pattern: { value: /^\S+@\S+$/i, message: 'Format email tidak valid' } }}
                error={errors.email}
                placeholder="anda@email.com"
              />
              <FormInput
                label="Subjek"
                name="subject"
                register={register}
                rules={{ required: 'Subjek wajib diisi' }}
                error={errors.subject}
                placeholder="Contoh: Pertanyaan tentang Produksi Kustom"
              />
              <FormInput
                label="Pesan Anda"
                name="message"
                isTextarea={true}
                register={register}
                rules={{ required: 'Pesan wajib diisi' }}
                error={errors.message}
                placeholder="Tuliskan pesan Anda di sini..."
              />
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
              </Button>
              {submitMessage && <p className="mt-4 text-center text-green-600">{submitMessage}</p>}
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Informasi Kontak</h2>
            <div className="space-y-6 text-text-light">
              <div className="flex items-start">
                <MapPin className="w-8 h-8 mr-4 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary">Alamat Kantor</h3>
                  <p>Jl. Industri Sandal No. 123, Jakarta Pusat, DKI Jakarta, 10110, Indonesia</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-8 h-8 mr-4 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary">Email</h3>
                  <p>info@sandalchina.com</p>
                  <p>sales@sandalchina.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-8 h-8 mr-4 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary">Telepon</h3>
                  <p>Kantor: +62 21 1234 5678</p>
                  <p>WhatsApp: +62 812 3456 7890</p>
                </div>
              </div>
            </div>
            <div className="mt-8 h-64 md:h-80 rounded-lg overflow-hidden">
              <img src="/images/map-placeholder.svg" alt="Peta lokasi kantor" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;