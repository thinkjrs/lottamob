import { SocialIcon } from 'react-social-icons';

export default function FooterLinks({}) {
  return (
    <div className="mr-2 my-4">
      <SocialIcon
        className="inline-block pr-2 mr-2 h-24 w-24"
        url="https://github.com/lottamob/research"
      ></SocialIcon>
      <SocialIcon
        className="inline-block px-2 mx-2 h-24 w-24"
        url="https://www.linkedin.com/in/lottamob"
      ></SocialIcon>
      <SocialIcon
        className="inline-block px-2 mx-2 h-24 w-24"
        url="https://www.amazon.com/Political-Economy-Special-Economic-Zones/dp/1138237817"
      ></SocialIcon>
    </div>
  );
}
