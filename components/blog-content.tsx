import {
  PortableText,
  PortableTextMarkComponentProps,
  PortableTextReactComponents,
} from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import HighlightedCode from './highlighted-code';
import { urlFor } from '@/app/lib/api';

const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    code: ({ value }: { value: { language: string; code: string } }) => {
      return <HighlightedCode language={value.language}>{value.code}</HighlightedCode>;
    },
    image: ({ value }: { value: { asset: SanityImageSource; alt: string; position?: string } }) => {
      const { asset, alt, position = 'center' } = value;

      return position === 'center' ? (
        <div>
          <img
            src={urlFor(asset).height(300).fit('max').url()}
            alt={alt}
            className="max-w-full mx-auto"
          />
          <div className="mt-2 text-sm italic opacity-60">{alt}</div>
        </div>
      ) : (
        <div className={`float-${position} mr-8 mb-2.5 max-w-[50%]`}>
          <img src={urlFor(asset).height(300).fit('max').url()} alt={alt} className="max-w-full" />
          <div className="mt-2 text-sm italic opacity-60">{alt}</div>
        </div>
      );
    },
    break: ({ value }: { value: { style: string } }) => {
      const { style } = value;

      if (style === 'lineBreak') {
        return <hr className="lineBreak" />;
      } else if (style === 'break') {
        return <br />;
      } else if (style === 'doubleBreak') {
        return (
          <>
            <br />
            <br />
          </>
        );
      }

      return null;
    },
  },
  marks: {
    link: (props: PortableTextMarkComponentProps) => {
      const { value, children } = props;

      return value?.blank ? (
        <a href={value?.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={value?.href}>{children}</a>
      );
    },
  },
};

interface BlogContentProps {
  content: PortableTextBlock[];
}

const BlogContent = ({ content }: BlogContentProps) => (
  <PortableText value={content} components={portableTextComponents} />
);

export default BlogContent;
