// pages/index.js

import Head from 'next/head';

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

  // JSON data for videos
  const videos = [
    {
      id: 1,
      title: "Introduction to Homeopathy",
      videoUrl: "https://youtu.be/lE6RYpe9IT0?si=QWfTNAtZM1s1AaZ1",
    },
    {
      id: 2,
      title: "Holistic Healing Practices",
      videoUrl: "https://www.youtube.com/watch?v=NSKxvLWqyOY",
    },
    // Add more videos as needed
  ];

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
                <a href="#videos" className="hover:underline">
                  Videos
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
            backgroundImage: 'url(https://i.ibb.co/Sw9T5qk/pexels-pixabay-163186.jpg)',
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

        {/* Videos Section */}
        <section id="videos" className="bg-gray-100 py-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Educational Videos
          </h3>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="aspect-w-16 aspect-h-9">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
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
