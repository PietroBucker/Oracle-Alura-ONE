import React from 'react';
import Banner from '@/components/Banner';
import Categories from '../../components/Categories';
import Modal from '../../components/Modal';

export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <Modal />
    </div>
  );
}
