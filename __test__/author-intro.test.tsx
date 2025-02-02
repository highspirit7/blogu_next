import { render, screen } from '@testing-library/react';

import AuthorIntro from '@/components/author-intro';
import { AUTHOR_INTRO_TEXT } from '@/app/lib/constant';

test('Should render profile image correctly', () => {
  render(<AuthorIntro introText={AUTHOR_INTRO_TEXT} />);

  const image = screen.getByAltText('blog_author_profile_image');
  expect(image).toBeInTheDocument();

  expect(image).toHaveAttribute('src', expect.stringMatching(/me\.png/));

  expect(screen.getByText('안녕하세요!')).toBeInTheDocument();
  expect(screen.getByText(/I started studying coding in my 30s/)).toBeInTheDocument();
});
