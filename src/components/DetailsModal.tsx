import React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'; // assuming the shadcn dialog component is in the ui folder

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  person: {
    first_name: string;
    last_name: string;
    city: string;
    contact_number: string;
  };
}

const DetailsModal: React.FC<DetailsModalProps> = ({ isOpen, onClose, person }) => {
  const fullName = `${person.first_name} ${person.last_name}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <div className="fixed inset-0 bg-white bg-opacity-40 backdrop-blur-sm" /> */}
      <DialogContent className="bg-white p-4 pl-6 rounded-lg shadow-lg w-[500px] h-[500px] flex flex-col">
        {/* Dialog Header */}
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-black">Fetch Details</DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Here are details of the following employee
          </DialogDescription>
        </DialogHeader>

        {/* Employee Details */}
        <div className="">
          <p className="text-black">Name: {fullName}</p>
          <p className="text-black">Location: {person.city}</p>
          <p className="text-black">Contact Number: {person.contact_number}</p>
        </div>

        {/* Profile Image Section */}
        <div className="">
          <p className="text-black mb-2">Profile Image</p>
          <Image
            src="/pp.png"
            alt="Profile Image"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>

        {/* Close Button */}
        <div className="flex justify-end mt-1">
          <button
            onClick={onClose}
            className="bg-white text-black px-4 py-2 rounded-lg border border-gray-300"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsModal;
