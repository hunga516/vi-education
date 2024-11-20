export function LeaveScreen({ setIsMeetingLeft }) {
  return (
    <div className="bg-gray-800 h-screen flex flex-col flex-1 items-center justify-center">
      <h1 className="text-white text-4xl">Bạn đã rời khỏi phòng học !</h1>
      <div className="mt-12">
        <button
          className="`w-full bg-purple-350 text-white px-16 py-3 rounded-lg text-sm"
          onClick={() => {
            setIsMeetingLeft(false);
          }}
        >
          Tham gia phòng học khác
        </button>
      </div>
    </div>
  );
}
