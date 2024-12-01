const Footer = () => {
  return (
    <div className="w-full max-w-[1240px] md:h-[205px] mx-auto pt-[60px] pb-[80px] md:pt-[40px] md:pb-0 text-white">
      <div className="flex flex-col md:flex-row justify-around items-center h-[80px]">
        <div className="text-[20px] underline">
          <a
            href="https://tagfusion.gitbook.io/announcement/user-manual/create-tags"
            target="_blank"
            rel="noopener noreferrer"
          >
            TagFusion Announcement
          </a>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* <div className="flex items-center mr-[50px]">
            <img
              className="w-[22px] mr-[16px]"
              src="/images/icon_phone.png"
              alt=""
            />
            <span>+49 163 1111111</span>
          </div>
          <div className="flex items-center">
            <img
              className="w-[19px] mr-[16px]"
              src="/images/icon_email.png"
              alt=""
            />
            <span>alicealison@gmail.com</span>
          </div> */}
        </div>
        <div className="flex mt-[30px] md:mt-0">
          <div className="w-[32px] h-[32px] mx-[16px] ">
            <a
              href="https://x.com/Tag_Fusion"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <img className="w-full" src="/images/icon_x.svg" alt="X" />
            </a>
          </div>
{/*           <div className="w-[32px] h-[32px] mx-[16px]">
            <a
              href="https://discord.gg/jSdZFPZ5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <img
                className="w-full"
                src="/images/icon_discord.svg"
                alt="Discord"
              />
            </a>
          </div> */}
          <div className="w-[32px] h-[32px] mx-[16px]">
            <a
              href="https://t.me/tele_tags_dao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <img
                className="w-full"
                src="/images/icon_telegram.svg"
                alt="Telegram"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[20px] text-center">
        © {new Date().getFullYear()} TagFusion. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
