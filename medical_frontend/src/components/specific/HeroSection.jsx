import logo from '../../assets/images/logo-1.png';

const HeroSection = () => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <img 
        src={logo} 
        alt="Faculty Logo" 
        className="w-[60px] h-[60px]"
      />
      <h2 className="text-xl">Faculty of Computing</h2>
    </div>
  );
};

export default HeroSection;
