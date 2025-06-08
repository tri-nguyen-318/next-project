'use client';
import SearchInput from '@/components/common/SearchInput';
import TypographyH1 from '@/components/typography/TypographyH1';
import TypographyText from '@/components/typography/TypographyText';
import { Button } from '@/components/ui/button';
import { TextColor } from '@/utils/constant';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { createInvoice } from '@/lib/actions';
import TypopraphyCode from '@/components/typography/TypopraphyCode';
import { CreateInvoiceDialog } from './components/CreateInvoiceDialog';

export default function Invoice() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isShowCreateInvoice, setIsShowCreateInvoice] =
    useState<boolean>(false);

  const handleSearch = () => {};

  const onShowCreateInvoice = () => {
    setIsShowCreateInvoice(true);
  };

  const onCloseCreateDialog = () => {
    setIsShowCreateInvoice(false);
  };

  const onSeeding = () => {
    // Logic to seed the database
    console.log('Seeding database');
  };

  const onCreateInvoice = async () => {};

  return (
    <div className='h-full w-screen p-4'>
      <TypographyH1>Elastic Search</TypographyH1>
      <TypographyText
        className='w-2/3'
        type={TextColor.SECONDARY}
      >
        This page is using the <TypopraphyCode>Elastic search</TypopraphyCode>{' '}
        API to search for content. It is designed to provide a fast and
        efficient search experience across a large dataset. The search
        functionality is built to handle complex queries and return relevant
        results quickly.
      </TypographyText>

      <div className='my-4 flex items-center justify-between'>
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeHolder='Search for content...'
          onSearch={handleSearch}
          isSearching={isSearching}
          className='w-1/2'
        />

        <div className='flex gap-1'>
          <Button
            onClick={onSeeding}
            variant='outline'
          >
            Seeding
          </Button>
          <Button
            onClick={onShowCreateInvoice}
            variant='default'
          >
            Create
          </Button>
        </div>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className='text-right'>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <CreateInvoiceDialog
        isOpen={isShowCreateInvoice}
        onClose={onCloseCreateDialog}
      />
      {/* <div>
        {results.map((result) => (
          <div key={result._id}>
            <h3>{result._source.title}</h3>
            <p>{result._source.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
