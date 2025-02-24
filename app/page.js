'use client';
import React from 'react';
import Image from 'next/image';
import ProfileCard from './components/ProfileCard'; // Path relatif di dalam app

export default function HomePage() {
  // Daftar teman-teman terbaik untuk setiap kelas
  const classes = [
    {
      className: 'SI',
      students: [
        { name: 'Andi', imageUrl: '/images/andi.jpg' },
        { name: 'Budi', imageUrl: '/images/budi.jpg' },
        { name: 'Citra', imageUrl: '/images/citra.jpg' },
        { name: 'Dani', imageUrl: '/images/dani.jpg' },
        { name: 'Elisa', imageUrl: '/images/elisa.jpg' },
      ],
    },
    {
      className: 'KA',
      students: [
        { name: 'Fahmi', imageUrl: '/images/fahmi.jpg' },
        { name: 'Gina', imageUrl: '/images/gina.jpg' },
        { name: 'Hana', imageUrl: '/images/hana.jpg' },
        { name: 'Iwan', imageUrl: '/images/iwan.jpg' },
        { name: 'Joko', imageUrl: '/images/joko.jpg' },
      ],
    },
    {
      className: 'BD',
      students: [
        { name: 'Kris', imageUrl: '/images/kris.jpg' },
        { name: 'Lina', imageUrl: '/images/lina.jpg' },
        { name: 'Maya', imageUrl: '/images/maya.jpg' },
        { name: 'Niko', imageUrl: '/images/niko.jpg' },
        { name: 'Oki', imageUrl: '/images/oki.jpg' },
      ],
    },
  ];

  return (
    <div className="container">
      {classes.map((classData) => (
        <ProfileCard key={classData.className} className={classData.className} students={classData.students} />
      ))}
    </div>
  );
}
