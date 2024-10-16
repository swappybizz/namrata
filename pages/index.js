// pages/index.js

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  // JSON data for courses
  const courses = [
    {
      id: 1,
      title: "Beginner's Guide to Homeopathy",
      description: "An introductory course to natural remedies.",
      imageUrl: "https://i.ibb.co/L9P6R2k/pexels-asphotograpy-105028.jpg",
    },
    {
      id: 2,
      title: "Advanced Healing Techniques",
      description: "Deepen your understanding of holistic health.",
      imageUrl: "https://i.ibb.co/QMnZFyD/pexels-n-voitkevich-7526023.jpg",
    },
    {
      id: 3,
      title: "Personalized Wellness Plans",
      description: "Get a wellness plan tailored to your needs.",
      imageUrl: "https://i.ibb.co/QHHLkKG/pexels-yankrukov-5480162.jpg",
    },
    // Add more courses as needed
  ];

  // JSON data for quotes
  const quotes = [
    {
      id: 1,
      text: "The physician's highest calling is to make sick people healthy - to heal, as it is termed. - Samuel Hahnemann",
    },
    {
      id: 2,
      text: "Homeopathy cures a larger percentage of cases than any other method of treatment. - Mahatma Gandhi",
    },
    {
      id: 3,
      text: "Homeopathy is wholly capable of satisfying the therapeutic demands of this age better than any other system or school of medicine. - Charles Frederick Menninger",
    },
    // Add more quotes as needed
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex(
      (prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Homeopathic Healing</title>
        <meta
          name="description"
          content="Homeopathic Practitioner - Courses and Consultations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Homeopathic Healing</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:underline">
                  Courses
                </a>
              </li>
              <li>
                <a href="#quotes" className="hover:underline">
                  Quotes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-screen text-white"
          style={{
            backgroundImage:
              'url(https://i.ibb.co/Sw9T5qk/pexels-pixabay-163186.jpg)',
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex items-center">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold mb-4">
                Embrace Natural Healing
              </h2>
              <p className="text-2xl mb-8">
                Discover the power of homeopathy for a balanced life.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">
                Explore Our Courses
              </button>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="container mx-auto py-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{course.title}</h4>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quotes Carousel Section */}
        <section id="quotes" className="bg-gray-100 py-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Homeopathic Quotes
          </h3>
          <div className="container mx-auto flex justify-center items-center space-x-4">
            <button
              onClick={prevQuote}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              &#60;
            </button>
            <div className="text-center max-w-xl px-4">
              <p className="text-xl italic text-gray-600">"{quotes[currentQuoteIndex].text}"</p>
            </div>
            <button
              onClick={nextQuote}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              &#62;
            </button>
          </div>
        </section>

        {/* Placeholder Payment Section */}
        <section className="container mx-auto py-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Secure Payments
          </h3>
          <div className="text-center">
            <p className="text-xl mb-8">We accept all major payment methods.</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">
              Proceed to Payment
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-green-600 text-white p-6">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Homeopathic Healing. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
