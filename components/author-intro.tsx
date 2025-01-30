import Image from 'next/image';

const AuthorIntro = () => (
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
        <p className="text-lg">
          I started studying coding in my 30s. I’m someone who strives to grow by comparing myself
          to who I was yesterday, not to others. In addition to coding, I’m interested in reading,
          the environment, and history. I currently work as a web developer in Ulsan, South Korea.
        </p>
      </div>
    </div>
  </div>
);

export default AuthorIntro;
