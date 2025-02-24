import React from 'react';
import Image from 'next/image';

const ProfileCard = ({ className, students }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Kelas {className}</h2>
      </div>
      <div className="card-body">
        {students.map((student, index) => (
          <div key={index} className="student-profile">
            <Image 
              src={student.imageUrl} 
              alt={student.name} 
              width={100} 
              height={100} 
              className="profile-img"
            />
            <p>{student.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
