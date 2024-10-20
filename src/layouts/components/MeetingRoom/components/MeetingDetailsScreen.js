import { CheckIcon, ClipboardIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { toast } from "react-toastify";

export function MeetingDetailsScreen({
  onClickJoin,
  _handleOnCreateMeeting,
  participantName,
  setParticipantName,
  onClickStartMeeting,
}) {
  const [meetingId, setMeetingId] = useState("");
  const [meetingIdError, setMeetingIdError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [iscreateMeetingClicked, setIscreateMeetingClicked] = useState(false);
  const [isJoinMeetingClicked, setIsJoinMeetingClicked] = useState(false);

  return (
    <div
      className={`flex flex-1 flex-col justify-center w-full md:p-[6px] sm:p-1 p-1.5`}
    >
      {iscreateMeetingClicked ? (
        <div className="w-full flex justify-center items-center">
          <div className="w-60 flex justify-center bg-white ring-1 ring-black rounded-lg">
            <p className=" text-xs leading-6 font-semibold text-pblack pl-6 pr-2 py-1 ">
              {`Mã phòng: ${meetingId}`}
            </p>
            <button
              className="ml-2"
              onClick={() => {
                navigator.clipboard.writeText(meetingId);
                setIsCopied(true);
                setTimeout(() => {
                  setIsCopied(false);
                }, 3000);
              }}
            >
              {isCopied ? (
                <CheckIcon className="h-5 w-5 text-green-400" />
              ) : (
                <ClipboardIcon className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
      ) : isJoinMeetingClicked ? (
        <>
          <input
            defaultValue={meetingId}
            onChange={(e) => {
              setMeetingId(e.target.value);
            }}
            placeholder={"Nhập mã phòng:"}
            className="text-xs font-normal tracking-wide px-6 py-2 ring-1 ring-black/40 bg-white rounded-md text-black w-60 mx-auto text-center placeholder:text-xs focus:outline-none"
          />
          {meetingIdError && (
            <p className="text-xs text-red-600">{`Please enter valid meetingId`}</p>
          )}
        </>
      ) : null}

      {(iscreateMeetingClicked || isJoinMeetingClicked) && (
        <>
          <input
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
            placeholder="Tên của bạn"
            className="w-60 mt-2 mx-auto text-xs leading-6 font-normal text-center bg-white ring-1 ring-black/40 text-black py-1 rounded-lg placeholder:font-thin focus:outline-none"
          />

          {/* <p className="text-xs text-white mt-1 text-center">
            Your name will help everyone identify you in the meeting.
          </p> */}
          <button
            disabled={participantName.length < 3}
            className={`w-60 mx-auto font-sans font-medium mt-5 ${participantName.length < 3 ? "bg-gray-650" : "bg-purple-350"
              } text-xs tracking-wide leading-6 bg-gradient-to-tr from-blue-600 to-purple-600 text-white px-6 py-1 rounded-lg`}
            onClick={(e) => {
              if (iscreateMeetingClicked) {
                onClickStartMeeting();
              } else {
                if (meetingId.match("\\w{4}\\-\\w{4}\\-\\w{4}")) {
                  onClickJoin(meetingId);
                } else setMeetingIdError(true);
              }
            }}
          >
            {iscreateMeetingClicked ? "Bắt đầu chia sẻ" : "Tham gia phòng"}
          </button>
        </>
      )}

      {!iscreateMeetingClicked && !isJoinMeetingClicked && (
        <div className="w-full md:mt-0 flex flex-col">
          <div className="flex items-center justify-center flex-col">
            <button
              className="w-52 text-xs leading-6 font-semibold bg-white ring-1 ring-purple-600 text-purple-900 px-6 py-1 rounded-lg"
              onClick={async (e) => {
                const { meetingId, err } = await _handleOnCreateMeeting();

                if (meetingId) {
                  setMeetingId(meetingId);
                  setIscreateMeetingClicked(true);
                } else {
                  toast(
                    `${err}`,
                    {
                      position: "bottom-left",
                      autoClose: 4000,
                      hideProgressBar: true,
                      closeButton: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    }
                  );
                }
              }}
            >
              Tạo phòng họp mới
            </button>
            <button
              className="w-52 font-extralight text-xs leading-6 bg-gradient-to-tr from-blue-600 to-purple-600 text-white px-6 py-1 rounded-lg mt-5"
              onClick={(e) => {
                setIsJoinMeetingClicked(true);
              }}
            >
              Tham gia phòng học đã có
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
