"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useUpdateTask } from "@/src/hooks/use-update-task";
import { Task, TaskPriority } from "@/src/types/task";

interface Props {
  task: Task;
  teamId: string;
  projectId: string;
  onClose?: () => void;
}

interface FormValues {
  title: string;
  description: string;
  priority: TaskPriority;
}

export default function EditTaskForm({
  task,
  teamId,
  projectId,
  onClose,
}: Props) {
  const { mutate, isPending } = useUpdateTask(teamId, projectId);

  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      title: task.title,
      description: task.description ?? "",
      priority: task.priority,
    },
  });

  useEffect(() => {
    reset({
      title: task.title,
      description: task.description ?? "",
      priority: task.priority,
    });
  }, [task, reset]);

  function onSubmit(values: FormValues) {
    mutate({
      taskId: task.id,
      payload: values,
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("title")} className="w-full rounded border p-2" />

      <textarea
        {...register("description")}
        className="w-full rounded border p-2"
        rows={4}
      />

      <select {...register("priority")} className="w-full rounded border p-2">
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
        <option value="URGENT">URGENT</option>
      </select>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded bg-black py-2 text-white"
      >
        Save Changes
      </button>
    </form>
  );
}
