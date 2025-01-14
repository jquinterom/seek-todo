import { TaskModel } from "@/core/models/TaskModel";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import { IconButton } from "../../atoms/IconButton/IconButton";
import { MdDeleteOutline, MdOutlineUpdate } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import LoadingSpinner from "../../atoms/LoadingSpinner/LoadingSpinner";

interface TaskListProps {
  tasks: TaskModel[];
  loading: boolean;
  toggleTask: (id: number) => void;
  handleSetTaskToUpdate: (task: TaskModel | null) => void;
  handleRemove: (id: number) => void;
  toggleTaskToInProgress: (id: number) => void;
}

const TaskList = ({
  tasks,
  loading,
  toggleTask,
  handleSetTaskToUpdate,
  handleRemove,
  toggleTaskToInProgress,
}: TaskListProps) => {
  return (
    <ul className="space-y-2" data-testid="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center space-x-2 justify-between"
        >
          <Checkbox
            id={`task-${task.id}`}
            text={task.text}
            checked={task.status === "completed"}
            onChange={() => toggleTask(task.id)}
            key={task.id}
            classNameLabel={
              task.status === "in-progress" ? "text-blue-500" : ""
            }
            data-testid="checkbox"
          />

          <div className="flex items-center space-x-2">
            {!(task.status === "completed") && (
              <IconButton
                icon={<MdOutlineUpdate size={15} />}
                onClick={() => handleSetTaskToUpdate(task)}
                data-testid="update-button"
              />
            )}

            {task.status !== "completed" && task.status !== "in-progress" && (
              <IconButton
                icon={<FaPlay size={15} />}
                onClick={() => toggleTaskToInProgress(task.id)}
                data-testid="play-button"
              />
            )}

            <IconButton
              icon={<MdDeleteOutline size={15} />}
              onClick={() => handleRemove(task.id)}
              typeButton="danger"
              data-testid="delete-button"
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
  );
};

export default TaskList;
