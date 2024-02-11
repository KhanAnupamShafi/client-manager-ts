import Address from '../../assets/address.svg';
import Company from '../../assets/company.svg';
const UserCard = () => {
  return (
    <a
      href="#"
      className="w-80 mt-6 bg-secondary border border-regal-blue rounded-lg hover:cardHoverEffect transition-all duration-300 hover:drop-shadow-md">
      <div className=" flex flex-col justify-center py-7 px-5 ">
        <div className="flex  items-center ">
          <div className="pr-4">
            <figure className="block relative">
              <img
                alt="name"
                src="https://i.stack.imgur.com/HgkK0.png"
                className="object-cover w-32 h-32 rounded-full"
              />
            </figure>
          </div>
          <div>
            <h5 className="text-lg text-primary font-bold">
              Robert Fox
            </h5>

            <span className="text-xs text-zinc-600 whitespace-nowrap">
              Python@Developer.com
            </span>
            <div className="text-primary flex items-center gap-2 font-semibold mt-0.5">
              <img
                className="object-fit w-5 h-5 rounded-sm"
                src={Company}
                alt=""
              />
              <span>TechNext IT</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 border-t-2 border-regal-blue">
          <div className="mt-5">
            <span className="text-base">Dhaka, BD</span>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <div className="w-5 h-5 inline-block">
              <img
                className="w-full object-cover"
                src={Address}
                alt=""
              />
            </div>
            <span className="text-sm text-zinc-500">
              Dhanmondi - 32
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default UserCard;
