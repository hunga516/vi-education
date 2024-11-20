import Chart from "chart.js";
import React from "react";

import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

function AdminDashboardPage() {

    React.useEffect(() => {
        var config = {
            type: "line",
            data: {
                labels: [
                    "Tháng 5",
                    "Tháng 6",
                    "Tháng 7",
                    "Tháng 8",
                    "Tháng 9",
                    "Tháng 10",
                    "Tháng 11",
                ],
                datasets: [
                    {
                        label: "Khóa học",
                        backgroundColor: "blue",
                        borderColor: "#3182ce",
                        data: [1, 1, 1, 1, 1, 1, 3],
                        fill: false,
                    },
                    {
                        label: "Bài học",
                        fill: false,
                        backgroundColor: "#ed64a6",
                        borderColor: "#ed64a6",
                        data: [0, 0, 0, 0, 0, 0, 30],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                animation: {
                    duration: 0,
                },
                legend: {
                    labels: {
                        fontColor: "black",
                    },
                    align: "end",
                    position: "bottom",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "black",
                                callback: function (value) {
                                    return value;
                                },
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Month",
                                fontColor: "yellow",
                            },
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(0, 0, 0, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: "black",
                                callback: function (value) {
                                    return value;
                                },
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                                fontColor: "black",
                            },
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: "rgba(255, 255, 255, 0.15)",
                                zeroLineColor: "rgba(33, 37, 41, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        var ctx = document.getElementById("line-chart").getContext("2d");
        window.myLine = new Chart(ctx, config);
    }, []);

    return (
        <>
            <div className="relative ring-1 ring-slate-300/30 bg-white flex flex-col min-w-0 break-words w-full mb-6 drop-shadow-md rounded-md bg-blueGray-700">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="">
                        <div className="relative w-full max-w-full flex justify-between flex-1">
                            <p className="text-slate-800 text-sm ">Số lượng khóa học và bài viết</p>
                            <p className="text-slate-500/70 text-xs tracking-wide">Cập nhật 10 phút trước</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex-auto">
                    {/* Chart */}
                    <div className="relative h-80">
                        <canvas id="line-chart"></canvas>
                    </div>
                </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-4">
                <div className="relative ring-1 px-2 py-4 ring-slate-300/30 bg-white flex flex-col min-w-0 break-words w-full mb-6 drop-shadow-md rounded-md bg-blueGray-700">
                    <div className="flex items-center justify-between px-2">
                        <p className="text-slate-800 text-sm ">Giảng viên năng nổ</p>
                        <button className="flex items-center gap-1 text-xs ring-1 ring-slate-300/40 rounded-lg text-slate-600 p-2">
                            Xem tất cả
                            <FaLongArrowAltRight />
                        </button>
                    </div>
                    <div className="flex flex-col gap-1 px-2 mt-4">
                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-slate-200/40">
                            <div className="flex gap-2 items-center">
                                <div className="flex items-center gap-1">
                                    <IoMdArrowDropup className="text-2xl text-green-500" />
                                    <p className="text-green-500 text-sm">1</p>
                                </div>
                                <img src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"
                                    className="w-8 h-8 rounded-full"
                                    alt=""
                                />
                                <p className="text-slate-800 text-sm">Le Ngoc Loc</p>
                            </div>
                            <p className="text-slate-600 text-sm">3 khóa học, 23 bài học</p>
                        </div>
                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-slate-200/40">
                            <div className="flex gap-2 items-center">
                                <img src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"
                                    className="w-8 h-8 rounded-full"
                                    alt=""
                                />
                                <p className="text-slate-800 text-sm">Le Ngoc Loc</p>
                            </div>
                            <p className="text-slate-600 text-sm">3 khóa học, 23 bài học</p>
                        </div>
                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-slate-200/40">
                            <div className="flex gap-2 items-center">
                                <img src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"
                                    className="w-8 h-8 rounded-full"
                                    alt=""
                                />
                                <p className="text-slate-800 text-sm">Le Ngoc Loc</p>
                            </div>
                            <p className="text-slate-600 text-sm">3 khóa học, 23 bài học</p>
                        </div>
                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-slate-200/40">
                            <div className="flex gap-2 items-center">
                                <img src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"
                                    className="w-8 h-8 rounded-full"
                                    alt=""
                                />
                                <p className="text-slate-800 text-sm">Le Ngoc Loc</p>
                            </div>
                            <p className="text-slate-600 text-sm">3 khóa học, 23 bài học</p>
                        </div>
                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-slate-200/40">
                            <div className="flex gap-2 items-center">
                                <img src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"
                                    className="w-8 h-8 rounded-full"
                                    alt=""
                                />
                                <p className="text-slate-800 text-sm">Le Ngoc Loc</p>
                            </div>
                            <p className="text-slate-600 text-sm">3 khóa học, 23 bài học</p>
                        </div>
                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-slate-200/40">
                            <div className="flex gap-2 items-center">
                                <img src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"
                                    className="w-8 h-8 rounded-full"
                                    alt=""
                                />
                                <p className="text-slate-800 text-sm">Le Ngoc Loc</p>
                            </div>
                            <p className="text-slate-600 text-sm">3 khóa học, 23 bài học</p>
                        </div>
                    </div>
                </div>
                <div className="relative ring-1 px-2 py-4 ring-slate-300/30 bg-white flex flex-col min-w-0 break-words w-full mb-6 drop-shadow-md rounded-md bg-blueGray-700">
                    <div className="flex items-center justify-between px-2">
                        <p className="text-slate-800 text-sm ">Bình luận vi phạm</p>
                        <button className="flex items-center gap-1 text-xs ring-1 ring-slate-300/40 rounded-lg text-slate-600 p-2">
                            Xem tất cả
                            <FaLongArrowAltRight />
                        </button>
                    </div>
                    <div className="flex flex-col gap-1 px-2 mt-4">
                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-slate-200/40">
                            <p className="text-slate-600 text-sm">bạn ngu quá</p>
                            <div className="flex items-center gap-1">
                                <button className="text-xs p-2 ring-1 ring-slate-500/50 rounded-lg text-nowrap">Khóa tài khoản</button>
                                <button className="text-xs p-2 ring-1 ring-red-500/50 bg-red-200/80 text-black rounded-lg">Xóa</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-slate-200/40">
                            <p className="text-slate-600 text-sm">bạn ngu quá</p>
                            <div className="flex items-center gap-1">
                                <button className="text-xs p-2 ring-1 ring-slate-500/50 rounded-lg text-nowrap">Khóa tài khoản</button>
                                <button className="text-xs p-2 ring-1 ring-red-500/50 bg-red-200/80 text-black rounded-lg">Xóa</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-slate-200/40">
                            <p className="text-slate-600 text-sm">bạn ngu quá</p>
                            <div className="flex items-center gap-1">
                                <button className="text-xs p-2 ring-1 ring-slate-500/50 rounded-lg text-nowrap">Khóa tài khoản</button>
                                <button className="text-xs p-2 ring-1 ring-red-500/50 bg-red-200/80 text-black rounded-lg">Xóa</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-slate-200/40">
                            <p className="text-slate-600 text-sm">bạn ngu quá</p>
                            <div className="flex items-center gap-1">
                                <button className="text-xs p-2 ring-1 ring-slate-500/50 rounded-lg text-nowrap">Khóa tài khoản</button>
                                <button className="text-xs p-2 ring-1 ring-red-500/50 bg-red-200/80 text-black rounded-lg">Xóa</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-slate-200/40">
                            <p className="text-slate-600 text-sm">bạn ngu quá</p>
                            <div className="flex items-center gap-1">
                                <button className="text-xs p-2 ring-1 ring-slate-500/50 rounded-lg text-nowrap">Khóa tài khoản</button>
                                <button className="text-xs p-2 ring-1 ring-red-500/50 bg-red-200/80 text-black rounded-lg">Xóa</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-slate-200/40">
                            <p className="text-slate-600 text-sm">bạn ngu quá</p>
                            <div className="flex items-center gap-1">
                                <button className="text-xs p-2 ring-1 ring-slate-500/50 rounded-lg text-nowrap">Khóa tài khoản</button>
                                <button className="text-xs p-2 ring-1 ring-red-500/50 bg-red-200/80 text-black rounded-lg">Xóa</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboardPage;