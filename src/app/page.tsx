"use client";

import { useAuth } from "@/core/hooks/useAuth";
import useHandleTask from "@/core/hooks/useHandleTask";
import { useUserStore } from "@/core/store/taskStore";
import FormInputTask from "@/core/ui/organisms/FormInputTask/FormInputTask";
import HeaderTaskList from "@/core/ui/organisms/HeaderTaskList/HeaderTaskList";
import TaskList from "@/core/ui/organisms/TaskList/TaskList";

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
    toggleTaskToInProgress,
  } = useHandleTask();

  const { user } = useUserStore();
  const { logout } = useAuth();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg text-black">
      <HeaderTaskList user={user} logout={logout} />

      <h1 className="text-2xl font-bold mb-6 text-center ">Todo App</h1>

      <FormInputTask
        onSubmit={handleTask}
        text={newTask}
        onChange={setNewTask}
      />

      <TaskList
        tasks={tasks}
        loading={loading}
        toggleTask={toggleTask}
        handleSetTaskToUpdate={handleSetTaskToUpdate}
        handleRemove={handleRemove}
        toggleTaskToInProgress={toggleTaskToInProgress}
      />
    </div>
  );
}
