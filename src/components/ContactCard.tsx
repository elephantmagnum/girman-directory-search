import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react'; // Assuming you are using an icon library
import DetailsModal from './DetailsModal';

interface Person {
  first_name: string;
  last_name: string;
  city: string;
  contact_number: string;
}

interface ContactCardProps {
  person: Person;
}

const ContactCard: React.FC<ContactCardProps> = ({ person }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const fullName = `${person.first_name} ${person.last_name}`;

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      {/* Image Section */}
      <div className="flex justify-left">
        <div className="p-1 border border-gray-300 rounded-full">
          <Image src="/pp.png" alt="Contact Image" width={100} height={100} className="rounded-full" />
        </div>
      </div>

      {/* Name Section */}
      <h3 className="text-4xl font-bold text-black text-left mt-2">{fullName}</h3>

      {/* Location Section */}
      <div className="flex items-center justify-left mb-10">
        <MapPin className="text-gray-500 mr-1" size={16} />
        <span className="text-gray-500">{person.city}</span>
      </div>

      {/* Separator Line */}
      <hr className="my-2 border-gray-200" />

      {/* Phone Number Section */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center">
            <Phone className="text-black font-bold mr-2" size={20} />
            <span className="text-black font-bold text-md">{person.contact_number}</span>
          </div>
          <p className="text-gray-500 text-sm text-center mt-1">Available on phone</p>
        </div>
        <button 
          onClick={handleOpenModal}
          className="bg-black text-white rounded-lg px-5 py-3"
        >
          Fetch Details
        </button>
      </div>

      <DetailsModal isOpen={isModalOpen} onClose={handleCloseModal} person={person} />

    </div>
  );
};

export default ContactCard;
