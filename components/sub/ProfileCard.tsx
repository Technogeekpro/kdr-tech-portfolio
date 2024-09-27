import React from 'react';

interface ProfileCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
  quote: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ image, name, role, description, quote }) => {
  return (
    <div className="max-w-sm bg-[#1A1A2E] rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl border-4 border-transparent hover:border-indigo-600">
      <div className="flex justify-center mt-4">
        <img
          className="h-32 w-32 rounded-full object-cover border-4 border-indigo-600 transition duration-500"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-6 flex flex-col items-center ">
        <h3 className="text-lg leading-6 font-medium text-white mb-2">{name}</h3>
        <div className='py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'><p className="text-base text-gray-400">{role}</p></div>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
        <p className="mt-2 text-sm text-indigo-400">{quote}</p>
      </div>
    </div>
  );
};

export default ProfileCard;