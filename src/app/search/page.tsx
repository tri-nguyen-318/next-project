import TypographyH1 from '@/components/typography/TypographyH1';
import TypographyText from '@/components/typography/TypographyText';
import { TextColor } from '@/utils/constant';
import React from 'react';

export default async function ElasticSearch() {
  return (
    <div className='h-full w-screen p-4'>
      <TypographyH1>Elastic Search</TypographyH1>
      <TypographyText
        className='w-2/3'
        type={TextColor.SECONDARY}
      >
        This page is using the <code>Elastic search</code> API to search for
        content. It is designed to provide a fast and efficient search
        experience across a large dataset. The search functionality is built to
        handle complex queries and return relevant results quickly.
      </TypographyText>
    </div>
  );
}
