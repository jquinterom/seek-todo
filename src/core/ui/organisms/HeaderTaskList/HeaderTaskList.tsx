import { FiLogOut } from "react-icons/fi";
import { IconButton } from "../../atoms/IconButton/IconButton";
import { UserModel } from "@/core/models/UserModel";

interface HeaderTaskListProps {
  user: UserModel;
  logout: () => void;
}

const HeaderTaskList = ({ user, logout }: HeaderTaskListProps) => {
  return (
    <div className="flex items-center justify-end space-x-2">
      <h1 className="text-sm text-end">Welcome {user.name}</h1>
      <IconButton
        typeButton="ghost"
        icon={<FiLogOut size={20} />}
        onClick={logout}
      />
    </div>
  );
};

export default HeaderTaskList;
