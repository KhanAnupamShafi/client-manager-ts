import Address from '../../assets/address.svg';
import Company from '../../assets/company.svg';
import { IUser } from '../../interface';

const UserCard = ({ user }: { user: IUser }) => {
  return (
    <a
      href="#"
      className="w-80 mt-6 bg-secondary border border-regal-blue rounded-lg hover:cardHoverEffect transition-all duration-300 hover:drop-shadow-md">
      <div className=" flex flex-col justify-center py-7 px-5 ">
        <div className="flex  items-center ">
          <div className="pr-4">
            <figure className="block relative w-24 h-24 rounded-full overflow-hidden">
              <div className="w-full h-full flex justify-center items-center">
                <img
                  alt="name"
                  src="https://i.stack.imgur.com/HgkK0.png"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </figure>
          </div>
          <div>
            <h5 className=" text-primary font-bold">
              {user.firstName} {user.lastName}
            </h5>

            <p className="text-xs text-zinc-600 truncate w-44 hover:text-clip">
              {user.email}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between mt-3 border-t-2 border-regal-blue">
          <div className="text-primary flex items-center gap-2 font-semibold mt-2.5">
            <img
              className="object-fit w-5 h-5 rounded-sm"
              src={Company}
              alt=""
            />
            <p className="text-sm text-balance truncate hover:text-clip">
              {user.company}
            </p>
          </div>
          <div className=" flex gap-2 items-center py-2">
            <div className="w-5 h-5 inline-block">
              <img
                className="w-full object-cover"
                src={Address}
                alt=""
              />
            </div>
            <span className="text-sm">{user.city}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500">
              {user.house}- {user.address}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default UserCard;
