"use client";

import { useAuth } from "@/core/hooks/useAuth";
import useHandleTask from "@/core/hooks/useHandleTask";
import { useUserStore } from "@/core/store/taskStore";
import Button from "@/core/ui/atoms/Button/Button";
import Checkbox from "@/core/ui/atoms/Checkbox/Checkbox";
import { IconButton } from "@/core/ui/atoms/IconButton/IconButton";
import { Input } from "@/core/ui/atoms/Input/Input";
import LoadingSpinner from "@/core/ui/atoms/LoadingSpinner/LoadingSpinner";
import { FiLogOut } from "react-icons/fi";
import { MdDeleteOutline, MdOutlineUpdate } from "react-icons/md";

export default function TodoApp() {
  const {
    handleTask,
    tasks,
    newTask,
    setNewTask,
    handleRemove,
    toggleTask,
    handleSetTaskToUpdate,
    loading,
  } = useHandleTask();

  const { user } = useUserStore();
  const { logout } = useAuth();

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg text-black">
      <div className="flex items-center justify-end space-x-2">
        <h1 className="text-sm text-end">Welcome {user.name}</h1>
        <IconButton
          typeButton="ghost"
          icon={<FiLogOut size={20} />}
          onClick={logout}
        />
      </div>

      <h1 className="text-2xl font-bold mb-6 text-center ">Todo App</h1>

      <form onSubmit={handleTask} className="mb-6">
        <div className="flex space-x-2">
          <Input
            value={newTask}
            onChange={(element) => setNewTask(element.target.value)}
          />
          <Button type="submit"> Save </Button>
        </div>
      </form>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center space-x-2 justify-between"
          >
            <Checkbox
              id={`task-${task.id}`}
              text={task.text}
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              key={task.id}
            />

            <div className="flex items-center space-x-2">
              {!task.completed && (
                <IconButton
                  icon={<MdOutlineUpdate size={20} />}
                  onClick={() => handleSetTaskToUpdate(task)}
                />
              )}

              <IconButton
                icon={<MdDeleteOutline size={20} />}
                onClick={() => handleRemove(task.id)}
                typeButton="danger"
              />
            </div>
          </li>
        ))}

        {loading && (
          <div className="flex items-center justify-center">
            <LoadingSpinner size={25} color="border-blue-500" />
          </div>
        )}
      </ul>
    </div>
  );
}
