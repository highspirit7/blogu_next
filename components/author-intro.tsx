import Image from 'next/image';

interface AuthorIntroProps {
  introText: string;
}

const AuthorIntro = ({ introText }: AuthorIntroProps) => (
  <div className="px-4">
    <div className="mb-4 flex items-start md:max-w-[67%]">
      <Image
        className="rounded-full mr-3"
        width={64}
        height={64}
        src="/me.png"
        alt="blog_author_profile_image"
      />
      <div className="flex-1">
        <p className="font-bold mb-0 text-xl">안녕하세요!</p>
        <p className="text-lg">{introText}</p>
      </div>
    </div>
  </div>
);

export default AuthorIntro;
