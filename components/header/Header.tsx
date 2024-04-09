import NextLink from 'next/link';
import NextImage from 'next/image';

export default function Header() {
  return (
    <header className="py-5 border-0 border-b border-solid border-gray-300">
      <div className="container mx-auto px-5 md:px-0">
        <div className="max-w-24 md:max-w-40">
          <NextLink href="https://valueglance.com/" target="blank">
            <NextImage
              alt="Value Glance Logo"
              className="w-auto max-w-full"
              height={200}
              src="https://valueglance.com/assets/value_glance_logo_original_t-e3350914.png"
              width={200}
            />
          </NextLink>
        </div>
      </div>
    </header>
  );
}
