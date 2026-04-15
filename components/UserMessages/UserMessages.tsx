import "./usermessages.css";

type UserMessagesProps = {
  message: string;
  loading: boolean;
  type: string;
};

const UserMessages = ({ message, loading, type }: UserMessagesProps) => {
  return (
    <>
      {loading && (
        <div className="userMessageContainer flex justify-center items-center">
          <p className={`usermessage font-bold ${type}`} id="usermessage">
            {message}
          </p>
        </div>
      )}
    </>
  );
};

export default UserMessages;
