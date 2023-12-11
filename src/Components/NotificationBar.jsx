import Notification from "./Notification";

const NotificationBar = (props) => {
  return (
    // <div className="bg-slate-500 h-screen w-96 relative flex flex-col">
    <div className="bg-transparent h-screen w-72 sm:w-96 relative flex flex-col">
      {props.notificationBarStatus && (
        <span
          className="absolute -left-20 top-4 cursor-pointer transition-all duration-300 ease-in-out z-50"
          onClick={() => {
            props.setNotificationBarStatus(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16 text-slate-50"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
      <h4 className="text-2xl font-semibold px-2 mt-4 text-gray-900">
        Notifications & Alerts
      </h4>
      <div className="flex flex-col items-center w-full h-full px-2 pb-4 mt-4 overflow-y-auto">
        {props.notificationGroup?.map((item,index) => (
          <div className="my-1 w-full">
            <Notification
              index={index}
              category={"message"}
              name={item.name}
              email={item.email}
              shortMessage={item.shortMessage}
              goToChatHandler={props.goToChatHandler}
              removeNotification={props.removeNotification}
              sendMsgFromNotification={props.sendMsgFromNotification}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationBar;
