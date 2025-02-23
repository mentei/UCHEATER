import Image from 'next/image';

const features = [
  {
    title: 'AI Detection',
    description: 'Analyze text and detect AI-generated content with 98% accuracy.',
    image: '/scan_9977577.png',
  },
  {
    title: 'Plagiarism Check',
    description: 'Detect copied content and maintain originality in writing.',
    image: '/1627373.png',
  },
  {
    title: 'Real-Time Analysis',
    description: 'Get instant results with our high-speed AI algorithm.',
    image: '/realtime.png',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={80}
                height={80}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-blue-400">{feature.title}</h3>
              <p className="text-gray-300 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
