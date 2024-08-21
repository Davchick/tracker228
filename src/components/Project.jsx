const Project = ({
  completedTasks,
  managerAvatar,
  managerName,
  managerRole,
  employees,
  allTasks,
  deadline,
  expired,
  avatar,
  name,
  id,
}) => {
  const deadlineDate = new Date(deadline);

  // Calculate the remaining time
  const now = new Date();
  const timeLeft = deadlineDate - now; // In milliseconds

  // Convert timeLeft into a readable format (e.g., minutes, hours)
  const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="flex space-y-4 flex-col bg-bg-secondary rounded-2xl px-6 py-4 cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <img className="size-7 rounded-full" src="./avatar.png" alt="" />
          <div className="flex flex-col">
            <span className="font-bold">{managerName}</span>
            <span className="text-text/50 text-sm">{managerRole}</span>
          </div>
        </div>

        <div className="flex flex-col text-end">
          <span className="text-primary font-bold text-lg">
            до{" "}
            {deadlineDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span className="text-text/50 text-xs">
            Осталось {hoursLeft > 0 ? `${hoursLeft} ч ` : ""}
            {minutesLeft} мин
          </span>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="w-full h-[1px] bg-text/30"></div>

        <div className="flex items-center space-x-4">
          <img className="size-10 rounded-full" src="./avatar.png" alt="" />
          <span className="font-bold text-xl">{name}</span>
        </div>

        <ul className="text-sm text-text/50 space-y-1">
          <li className="flex items-center space-x-1">
            <img src="./icons/alltasks.png" alt="" />
            <span> Всего задач:</span>
            <span className="text-base text-text font-bold pl-1">
              {allTasks}
            </span>
          </li>
          <li className="flex items-center space-x-1">
            <img src="./icons/completed.png" alt="" /> <span>Выполнено:</span>
            <span className="text-base text-text font-bold pl-1">
              {completedTasks}
            </span>
          </li>
          <li className="flex items-center space-x-1">
            <img src="./icons/left.png" alt="" /> <span>Осталось:</span>
            <span className="text-base text-text font-bold pl-1">
              {expired}
            </span>
          </li>
        </ul>

        <div className="w-full h-[1px] bg-text/30"></div>
      </div>

      <div className="flex space-x-2 text-sm">
        {employees.map((item) => (
          <div key={item} className="px-4 py-1 rounded-md bg-primary">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
