"use client"

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import '../scss/style.scss'
import data from '../../data.json'

import {
  CButton,
  CTable,
  CFormSelect,
  CFormInput,
} from '@coreui/react'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const resultTableHeader = [
  {
    key: 'id',
    label: '#',
    _props: { scope: 'col' },
  },
  {
    key: 'keyword',
    _props: { scope: 'col' },
  },
  {
    key: 'msv',
    label: 'Monthly Search Volume',
    _props: { scope: 'col' },
  },
  {
    key: 'competition',
    label: 'Competition',
    _props: { scope: 'col' },
  },
]

export default function Home() {

  const [seedKeyword, setSeedKeyword] = useState('');
  const [result, setResult] = useState([]);
  const [siteUrl, setSiteUrl] = useState('');

  const displayResult = () => {

    if (seedKeyword == 'ice') {
      setResult(data.ice);
    } else if (seedKeyword == 'ice' && siteUrl !== '') {
      setResult(data.ice_url);
    } else if (seedKeyword == 'life') {
      setResult(data.life);
    } else {
      setResult(data.dad)
    }
  }

  return (
    <main className={styles.main}>
      <div className=''>
        <p className='mb-4'>
          This is ContentERP&nbsp;
          <code className={styles.code}>version 1.0</code>
        </p>
        <h1 className='mt-2 mb-5'>This is My Gift to My Friend, <span className='danger'>LifeHiker</span> </h1>
      </div>
      <div className='mb-2 w-100'>
        <CFormInput type="text" size="lg" placeholder="Seed Keyword" aria-label="lg input example" name="seed" onChange={(e) => { setSeedKeyword(e.target.value); }} />
        <div className='d-flex'>
          <CFormSelect
            aria-label="Default select example"
            className='my-2 me-2 countrypicker'
            options={[
              { label: 'Select City or Country' },
              { label: 'Kabul, Afghanistan', value: '1' },
              { label: 'Dubai, India', value: '2' },
              { label: 'New York, US', value: '3' },
              { label: 'Berlin, Germany', value: '1' },
              { label: 'Tokyo, Japan', value: '2' },
              { label: 'Moscow, Russia', value: '3' },
              { label: 'Beijing, China', value: '1' },
              { label: 'London, Europe', value: '2' },
              { label: 'Rome, Italy', value: '3' }
            ]}
          />
          <CFormSelect
            aria-label="Default select example"
            className='my-2 me-2'
            options={[
              { label: 'Select Language' },
              { label: 'English', value: '1' },
              { label: 'Latin', value: '2' },
              { label: 'Chinese', value: '3' },
              { label: 'Spanish', value: '3' },
              { label: 'Portugese', value: '3' },
              { label: 'French', value: '3' }
            ]}
          />
          <CFormInput type="text" size="lg" placeholder="Site Url" name="site_url" aria-label="lg input example" className='my-2 ml-2' onChange={(e) => setSiteUrl(e.target.value)} />
        </div>
        <div className='justify-content-center d-flex'>
          <CButton color='primary' size='lg' onClick={displayResult}>Search</CButton>
        </div>
      </div>
      <div className='w-100 mt-5'>
        <CTable columns={resultTableHeader} items={result} color="dark" />
      </div>
    </main>
  )
}
